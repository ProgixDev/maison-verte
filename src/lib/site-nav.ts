/** Site navigation model — shared by the header, footer, and active-link logic. */

export type NavLink = {
  label: string;
  href: string;
  /** Routes that should also mark this link active (e.g. program detail pages). */
  match?: string[];
};

export const mainNav: NavLink[] = [
  { label: "Accueil", href: "/", match: [] },
  { label: "Subventions", href: "/subventions", match: ["/subventions"] },
  { label: "Comment ça fonctionne", href: "/fonctionnement" },
  { label: "FAQ", href: "/faq" },
  { label: "À propos", href: "/a-propos" },
];

export const programNav: NavLink[] = [
  { label: "LogisVert (Hydro-Québec)", href: "/subventions/logisvert" },
  { label: "Bonification multilogements", href: "/subventions/logisvert-multilogements" },
  { label: "Isolation de toit et calfeutrage", href: "/subventions/isolation-calfeutrage" },
  { label: "CAMT (Ressources naturelles Canada)", href: "/subventions/camt" },
];

/** True when `pathname` should highlight `link` in the nav. */
export function isActive(link: NavLink, pathname: string): boolean {
  if (link.href === "/") return pathname === "/";
  if (link.match?.some((prefix) => pathname.startsWith(prefix))) return true;
  return pathname === link.href;
}
