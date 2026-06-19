import { NextResponse, type NextRequest } from "next/server";
import type Stripe from "stripe";
import { env } from "@/core/env";
import { logger } from "@/lib/logger";
import { getStripe } from "@/features/billing/stripe";
import { mapStripeStatus } from "@/features/billing/schema";
import { upsertEntitlement, userIdForCustomer } from "@/features/billing/data";

/**
 * Stripe webhook — the ONLY place entitlement is granted. We verify the Stripe
 * signature against STRIPE_WEBHOOK_SECRET (a forged request is rejected), then
 * write public.subscriptions with the service_role client. The browser never
 * touches this path, so entitlement stays server-owned and un-spoofable.
 *
 * Local dev: `stripe listen --forward-to localhost:3000/api/stripe/webhook`.
 */
export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const secret = env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  // Raw body is required for signature verification — do not parse as JSON first.
  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (err) {
    logger.warn("stripe webhook: signature verification failed", { err });
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    await handleEvent(stripe, event);
  } catch (err) {
    logger.error("stripe webhook: handler error", { type: event.type, err });
    // 500 tells Stripe to retry — better than silently dropping an entitlement change.
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

async function handleEvent(stripe: Stripe, event: Stripe.Event): Promise<void> {
  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
      const userId = await userIdForCustomer(customerId);
      if (!userId) {
        logger.warn("stripe webhook: no user for customer", { customerId });
        return;
      }
      await upsertEntitlement(userId, {
        status: mapStripeStatus(sub.status),
        productId: sub.items.data[0]?.price.product?.toString() ?? null,
        currentPeriodEnd: new Date(sub.current_period_end * 1000).toISOString(),
      });
      return;
    }
    default:
      // Ignore unrelated events; acknowledge so Stripe stops retrying.
      return;
  }
}
