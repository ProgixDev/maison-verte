import { MapPin } from "lucide-react";
import Link from "next/link";
import { CtaLink } from "@/components/ui/cta-link";
import { mainNav, programNav } from "@/lib/site-nav";
import { LogoMark } from "./logo-mark";

const footerLink = "text-sage-link no-underline transition-colors hover:text-lime";

/** Dark footer: brand block + CTA, navigation, programs, contact, and legal notices. */
export function SiteFooter() {
  return (
    <footer className="bg-pine-deep text-on-pine px-6 pt-[clamp(54px,8vw,84px)] pb-7">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-x-[34px] gap-y-10">
          <div className="max-w-[330px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-cream grid size-[52px] shrink-0 place-items-center rounded-[15px]">
                <LogoMark width={37} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-cream text-[15px] font-extrabold tracking-[0.09em]">
                  MAISON VERTE
                </span>
                <span className="text-lime mt-[3px] text-[10.5px] font-semibold tracking-[0.26em]">
                  QUÉBEC
                </span>
              </span>
            </div>
            <p className="text-olive mb-5 text-[15px] leading-[1.65]">
              On trouve votre subvention, on vous aide à l’obtenir, et on vous met en relation avec
              l’installateur certifié qui la rend possible.
            </p>
            <CtaLink href="/admissibilite" size="sm">
              Vérifier mon admissibilité
            </CtaLink>
          </div>

          <div>
            <h2 className="text-pine-mute mb-4 text-[13px] font-bold tracking-[0.12em] uppercase">
              Navigation
            </h2>
            <ul className="flex list-none flex-col gap-[11px] p-0 text-[15px]">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-pine-mute mb-4 text-[13px] font-bold tracking-[0.12em] uppercase">
              Programmes couverts
            </h2>
            <ul className="flex list-none flex-col gap-[11px] p-0 text-[15px]">
              {programNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-pine-mute mb-4 text-[13px] font-bold tracking-[0.12em] uppercase">
              Nous joindre
            </h2>
            <ul className="flex list-none flex-col gap-[13px] p-0 text-[15px]">
              <li className="flex items-center gap-2.5">
                <MapPin className="text-lime size-[17px]" />
                <span>Desservant tout le Québec</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-6 py-[22px]">
          <p className="text-olive m-0 text-[14px] leading-[1.7]">
            <strong className="text-cream-soft">
              Service 100 % gratuit pour les propriétaires.
            </strong>{" "}
            Maison Verte Québec identifie pour vous la subvention à laquelle vous êtes admissible,
            vous accompagne dans les démarches d’obtention, et vous met en relation avec un
            installateur certifié RBQ dont l’équipement est conforme aux exigences du programme.
            Nous touchons une commission auprès de nos installateurs partenaires lorsqu’un projet se
            concrétise, ce qui nous permet de financer l’analyse et l’accompagnement sans frais pour
            vous.
          </p>
        </div>

        <p className="text-pine-mute mt-[22px] max-w-[880px] text-[13px] leading-[1.65]">
          Maison Verte Québec est un service privé indépendant. Nous ne sommes pas affiliés à
          Hydro-Québec ni au gouvernement du Canada. Toute information relative aux programmes
          provient des sources officielles disponibles publiquement et est fournie à titre indicatif
          (référence 2026), sous réserve de changement.
        </p>

        <div className="text-pine-mute mt-[22px] flex flex-wrap items-center justify-between gap-x-[22px] gap-y-2.5 border-t border-white/10 pt-[22px] text-[13.5px]">
          <span>© 2026 Maison Verte Québec — Tous droits réservés.</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/confidentialite" className="text-sage-link hover:text-lime no-underline">
              Politique de confidentialité
            </Link>
            <Link href="/faq" className="text-sage-link hover:text-lime no-underline">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
