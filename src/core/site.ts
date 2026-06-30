/**
 * Central site config — the single source for metadata, robots, sitemap, and
 * manifest. Set NEXT_PUBLIC_SITE_URL per environment (drives canonical + OG URLs).
 */
export const site = {
  name: "Maison Verte Québec",
  shortName: "Maison Verte",
  description:
    "On trouve votre subvention de chauffage, on vous aide à l’obtenir, et on vous met en relation avec un installateur certifié RBQ. Jusqu’à 16 950 $ entre LogisVert et le CAMT. Service gratuit pour les propriétaires québécois.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_CA",
} as const;
