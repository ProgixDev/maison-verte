/**
 * Branded HTML templates for the admin lead-notification emails. Email clients
 * require table layout + inline styles (no external CSS), so the site palette
 * from globals.css is mirrored here as constants. Templates are pure functions
 * of already-validated data; every dynamic value is HTML-escaped.
 */

const SITE_URL = "https://www.maisonvertequebec.ca";

/** Brand palette — mirror of the `:root` tokens in src/app/globals.css. */
const C = {
  cream: "#f3f7e7",
  card: "#fbfdf5",
  sage: "#ecf2dc",
  ink: "#243027",
  pine: "#123d2b",
  lime: "#c7f03c",
  stone: "#5c6b5e",
  haze: "#7a8a7a",
  onPine: "#c0d6b7",
} as const;

const FONT = "font-family:system-ui,'Segoe UI',Arial,sans-serif;";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Shared shell: cream background, 600px card with pine header + fine-print footer. */
function shell(headerTitle: string, bodyHtml: string): string {
  return `<div style="${FONT}background:${C.cream};padding:32px 16px;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;border-collapse:separate;">
    <tr>
      <td style="background:${C.pine};border-radius:16px 16px 0 0;padding:28px 32px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr>
          <td>
            <div style="color:${C.lime};font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Maison Verte Québec</div>
            <div style="color:#eaf4de;font-size:22px;font-weight:700;margin-top:6px;">${headerTitle}</div>
          </td>
          <td align="right" valign="middle" width="64">
            <img src="${SITE_URL}/logo-mark.png" width="56" alt="Maison Verte Québec" style="display:block;border:0;" />
          </td>
        </tr></table>
      </td>
    </tr>
    ${bodyHtml}
    <tr>
      <td style="padding:20px 8px;text-align:center;color:${C.haze};font-size:12px;">
        Reçu via le formulaire d’admissibilité — <a href="${SITE_URL}" style="color:${C.stone};">maisonvertequebec.ca</a>
      </td>
    </tr>
  </table>
</div>`;
}

type LeadEmail = {
  prenom: string;
  courriel: string;
  estimate: string;
  rows: [string, string][];
};

/** Admin notification for a completed eligibility quiz. */
export function leadEmailHtml({ prenom, courriel, estimate, rows }: LeadEmail): string {
  const detailRows = rows
    .map(
      ([k, v]) => `<tr>
        <td style="padding:10px 16px 10px 0;color:${C.stone};font-size:13px;border-bottom:1px solid ${C.sage};white-space:nowrap;vertical-align:top;">${escapeHtml(k)}</td>
        <td style="padding:10px 0;color:${C.ink};font-size:14px;font-weight:600;border-bottom:1px solid ${C.sage};" align="right">${escapeHtml(v)}</td>
      </tr>`,
    )
    .join("");

  const body = `<tr>
      <td style="background:${C.lime};padding:18px 32px;">
        <div style="color:${C.pine};font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Subvention estimée</div>
        <div style="color:${C.pine};font-size:32px;font-weight:800;margin-top:2px;">${escapeHtml(estimate)}</div>
      </td>
    </tr>
    <tr>
      <td style="background:${C.card};padding:24px 32px 8px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">${detailRows}</table>
      </td>
    </tr>
    <tr>
      <td style="background:${C.card};border-radius:0 0 16px 16px;padding:24px 32px 28px;" align="center">
        <a href="mailto:${escapeHtml(courriel)}" style="display:inline-block;background:${C.pine};color:${C.lime};font-size:15px;font-weight:700;text-decoration:none;padding:13px 32px;border-radius:999px;">Répondre à ${escapeHtml(prenom)}</a>
      </td>
    </tr>`;

  return shell("Nouveau lead — admissibilité", body);
}

/** Admin notification for a waitlist signup. */
export function notifyEmailHtml(courriel: string): string {
  const body = `<tr>
      <td style="background:${C.card};padding:28px 32px;">
        <p style="margin:0;color:${C.ink};font-size:15px;line-height:1.6;">
          Une personne souhaite être recontactée dès qu’un programme correspond à sa situation :
        </p>
        <p style="margin:16px 0 0;color:${C.pine};font-size:18px;font-weight:700;">${escapeHtml(courriel)}</p>
      </td>
    </tr>
    <tr>
      <td style="background:${C.card};border-radius:0 0 16px 16px;padding:0 32px 28px;" align="center">
        <a href="mailto:${escapeHtml(courriel)}" style="display:inline-block;background:${C.pine};color:${C.lime};font-size:15px;font-weight:700;text-decoration:none;padding:13px 32px;border-radius:999px;">Écrire à cette personne</a>
      </td>
    </tr>`;

  return shell("Nouvelle inscription — liste d’attente", body);
}
