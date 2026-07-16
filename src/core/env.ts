import "server-only";
import { z } from "zod";

/**
 * Server-side environment access — the ONLY place process.env is read.
 * `server-only` makes importing this from a client component a build error,
 * which is exactly the failure mode we want (secrets can't drift client-side).
 * Client-exposed values must be NEXT_PUBLIC_* and added to the separate schema below.
 */
const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  // SMTP transport for admin lead notifications (src/lib/mailer.ts). All optional:
  // when host/user/pass are unset the mailer no-ops and logs instead of sending,
  // so dev/build never require credentials. NEVER prefix these NEXT_PUBLIC_.
  SMTP_HOST: z.string().min(1).optional(),
  SMTP_PORT: z.coerce.number().int().positive().default(587),
  SMTP_USER: z.string().min(1).optional(),
  SMTP_PASS: z.string().min(1).optional(),
  // From/To for the lead emails. LEAD_EMAIL_TO is the admin inbox that receives
  // every form submission; override both in .env.
  LEAD_EMAIL_FROM: z.string().default("Maison Verte Québec <no-reply@maisonvertequebec.ca>"),
  LEAD_EMAIL_TO: z.string().default("admin@maisonvertequebec.ca"),
});

export const env = serverEnvSchema.parse(process.env);
