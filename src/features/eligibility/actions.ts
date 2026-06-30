"use server";

import { z } from "zod";

/**
 * Lead intake for the eligibility quiz. Server actions are the only mutation path
 * (docs/architecture/module-boundaries.md) and every input is zod-validated here.
 *
 * This is a stub: it validates and acknowledges. TODO(app): persist to the CRM /
 * Supabase and trigger the advisor follow-up + report email.
 */
const leadSchema = z.object({
  prenom: z.string().trim().min(1),
  nom: z.string().trim().min(1),
  courriel: z.email(),
  telephone: z.string().min(10),
  quand: z.string().min(1),
  answers: z.record(z.string(), z.string()).optional(),
  estimate: z.number().nonnegative().optional(),
});

const notifySchema = z.object({
  courriel: z.email(),
});

export type ActionResult = { ok: true } | { ok: false; error: string };

export async function recordLead(input: unknown): Promise<ActionResult> {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Données du formulaire invalides." };
  }
  // TODO(app): persist parsed.data and notify an advisor.
  return { ok: true };
}

export async function recordNotify(input: unknown): Promise<ActionResult> {
  const parsed = notifySchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Adresse courriel invalide." };
  }
  // TODO(app): add parsed.data.courriel to the “new programs” notify list.
  return { ok: true };
}
