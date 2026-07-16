"use server";

import { z } from "zod";
import { sendAdminMail } from "@/lib/mailer";

/**
 * Lead intake for the eligibility quiz. Server actions are the only mutation path
 * (docs/architecture/module-boundaries.md) and every input is zod-validated here.
 *
 * There is no database: a submission emails the admin inbox with all the details
 * (see src/lib/mailer.ts). Email is best-effort and never blocks the user — the
 * full payload is also logged so a lead is recoverable if SMTP is misconfigured.
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

/** Short French labels for the quiz answer keys, used in the admin email. */
const ANSWER_LABELS: Record<string, string> = {
  chauffage: "Chauffage actuel",
  codepostal: "Code postal",
  statut: "Statut",
  habitation: "Type d’habitation",
  mazout500: "500 L de mazout (12 mois)",
  revenu: "Revenu du ménage",
};

function formatAmount(n?: number): string {
  return typeof n === "number" ? `${n.toLocaleString("fr-CA")} $` : "—";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function recordLead(input: unknown): Promise<ActionResult> {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Données du formulaire invalides." };
  }
  const d = parsed.data;

  const rows: [string, string][] = [
    ["Prénom", d.prenom],
    ["Nom", d.nom],
    ["Courriel", d.courriel],
    ["Téléphone", d.telephone],
    ["Démarrage souhaité", d.quand],
    ["Estimation", formatAmount(d.estimate)],
    ...Object.entries(d.answers ?? {}).map(
      ([key, value]) => [ANSWER_LABELS[key] ?? key, value] as [string, string],
    ),
  ];

  const text = [`Nouveau lead — admissibilité`, ``, ...rows.map(([k, v]) => `${k} : ${v}`)].join(
    "\n",
  );
  const html = `<div style="font-family:system-ui,Segoe UI,Arial,sans-serif;color:#243027">
    <h2 style="margin:0 0 12px;color:#123d2b">Nouveau lead — admissibilité</h2>
    <table style="border-collapse:collapse;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#5c6b5e">${escapeHtml(k)}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
  </div>`;

  // Best-effort email; also log the payload so no lead is lost if SMTP is down.
  const sent = await sendAdminMail({
    subject: `Nouveau lead — ${d.prenom} ${d.nom} (${formatAmount(d.estimate)})`,
    text,
    html,
    replyTo: d.courriel,
  });
  if (!sent) {
    console.warn("[lead] email not sent — payload:", JSON.stringify(d));
  }
  return { ok: true };
}

export async function recordNotify(input: unknown): Promise<ActionResult> {
  const parsed = notifySchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Adresse courriel invalide." };
  }
  const { courriel } = parsed.data;
  const sent = await sendAdminMail({
    subject: "Nouvelle inscription — liste d’attente",
    text: `Courriel à recontacter dès qu’un programme correspond à sa situation : ${courriel}`,
    replyTo: courriel,
  });
  if (!sent) {
    console.warn("[notify] email not sent — courriel:", courriel);
  }
  return { ok: true };
}
