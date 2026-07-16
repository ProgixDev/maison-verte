import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import { env } from "@/core/env";

/**
 * Minimal SMTP mailer for admin lead notifications. There is no database in this
 * app — a form submission simply emails the admin inbox. Sending is best-effort:
 * when SMTP isn't configured (or a send fails) this logs and returns false rather
 * than throwing, so a submission is never blocked by an email hiccup.
 */
let cached: Transporter | null | undefined;

function getTransport(): Transporter | null {
  if (cached !== undefined) return cached;
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) {
    cached = null;
    return null;
  }
  cached = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465, // 465 = implicit TLS; 587/25 = STARTTLS
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
  });
  return cached;
}

type AdminMail = { subject: string; text: string; html?: string; replyTo?: string };

/** Sends a notification to the admin inbox (LEAD_EMAIL_TO). Never throws. */
export async function sendAdminMail({ subject, text, html, replyTo }: AdminMail): Promise<boolean> {
  const transport = getTransport();
  if (!transport) {
    console.warn(`[mailer] SMTP not configured — email not sent: ${subject}`);
    return false;
  }
  try {
    await transport.sendMail({
      from: env.LEAD_EMAIL_FROM,
      to: env.LEAD_EMAIL_TO,
      subject,
      text,
      html,
      replyTo,
    });
    return true;
  } catch (error) {
    console.error("[mailer] send failed:", error);
    return false;
  }
}
