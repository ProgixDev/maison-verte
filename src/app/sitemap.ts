import type { MetadataRoute } from "next";
import { site } from "@/core/site";

const routes = [
  "/",
  "/admissibilite",
  "/subventions",
  "/subventions/logisvert",
  "/subventions/camt",
  "/fonctionnement",
  "/faq",
  "/a-propos",
  "/confidentialite",
] as const;

/** One row per public, indexable route. Keep auth/account/api out. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : path === "/admissibilite" ? 0.9 : 0.7,
  }));
}
