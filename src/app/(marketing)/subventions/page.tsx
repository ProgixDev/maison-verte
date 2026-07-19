import type { Metadata } from "next";
import {
  BadgeDollarSign,
  Banknote,
  Building2,
  Calculator,
  CircleCheckBig,
  Flame,
  House,
  Info,
  MapPin,
  Snowflake,
  TrendingUp,
  Users,
  Wind,
  Zap,
} from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Parallax } from "@/components/ui/parallax";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Subventions chauffage et isolation — Québec 2026",
  description:
    "Les programmes gouvernementaux actifs en 2026 au Québec : LogisVert (thermopompe), la bonification multilogements, l’isolation de toit et calfeutrage, et le CAMT.",
  alternates: { canonical: "/subventions" },
};

const logisVertRows = [
  {
    icon: Users,
    term: "Pour qui",
    desc: "Tout propriétaire d’une résidence principale au Québec, client Hydro-Québec.",
  },
  {
    icon: Calculator,
    term: "Montant",
    desc: "50 $ à 120 $ par 1 000 BTU/h selon l’efficacité, jusqu’à 6 700 $.",
  },
  {
    icon: CircleCheckBig,
    term: "Conditions",
    desc: "Modèle certifié ENERGY STAR, installateur RBQ, achat au Québec.",
  },
  {
    icon: Banknote,
    term: "Versement",
    desc: "Dépôt direct, 6 à 12 semaines après installation.",
  },
];

const multiRows = [
  {
    icon: Building2,
    term: "Pour qui",
    desc: "Propriétaires d’un immeuble de 2 logements ou plus (plex, petit multilogement).",
  },
  {
    icon: TrendingUp,
    term: "Montant",
    desc: "+100 $ par 1 000 BTU/h, jusqu’à 220 $ au total — jusqu’à 83 % de plus que le montant standard.",
  },
  {
    icon: MapPin,
    term: "Conditions",
    desc: "Immeuble construit en 1995 ou avant, un compteur par logement, en zone désignée par Hydro-Québec.",
  },
  {
    icon: Zap,
    term: "Particularité",
    desc: "S’ajoute automatiquement à la subvention LogisVert Thermopompe.",
  },
];

const isolationRows = [
  {
    icon: Users,
    term: "Pour qui",
    desc: "Propriétaires d’une résidence au Québec, clients Hydro-Québec.",
  },
  {
    icon: Calculator,
    term: "Montant",
    desc: "1 500 $ pour l’isolation du toit et le calfeutrage.",
  },
  {
    icon: Wind,
    term: "Pourquoi",
    desc: "Les fuites d’air peuvent représenter jusqu’à 25 % des pertes de chaleur d’une maison.",
  },
  {
    icon: CircleCheckBig,
    term: "Conditions",
    desc: "Travaux admissibles réalisés selon les exigences du programme LogisVert.",
  },
];

const camtRows = [
  {
    icon: Users,
    term: "Pour qui",
    desc: "Propriétaires occupants chauffés au mazout, revenu ≤ revenu médian.",
  },
  {
    icon: Calculator,
    term: "Montant",
    desc: "10 000 $ + une prime unique de 250 $.",
  },
  {
    icon: Zap,
    term: "Particularité",
    desc: "Argent versé avant les travaux, et non imposable.",
  },
  {
    icon: CircleCheckBig,
    term: "Conditions",
    desc: "500 L de mazout dans les 12 derniers mois, maison ≤ 600 m², ≤ 3 étages.",
  },
];

export default function SubventionsPage() {
  return (
    <main>
      {/* EN-TÊTE */}
      <section className="relative overflow-hidden px-[22px] pt-[clamp(44px,7vw,82px)] pb-[clamp(28px,4vw,44px)]">
        <Parallax
          aria-hidden
          distance={60}
          className="pointer-events-none absolute -top-[120px] -right-[90px] size-[420px] max-w-[80vw]"
        >
          <div className="size-full rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.28),transparent_68%)]" />
        </Parallax>
        <div className="relative mx-auto max-w-[880px]">
          <Reveal>
            <Eyebrow icon={<BadgeDollarSign className="size-[15px]" />}>Programmes 2026</Eyebrow>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="text-pine mt-[18px] font-serif text-[clamp(32px,5vw,56px)] leading-[1.06] tracking-[-0.015em]"
          >
            Les programmes actifs. Jusqu’à 16 950 $ pour votre maison.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="text-moss mt-5 max-w-[60ch] text-[clamp(16px,1.6vw,18.5px)] leading-[1.65]"
          >
            En 2026, plusieurs programmes gouvernementaux permettent aux propriétaires québécois de
            financer une grande partie du remplacement de leur système de chauffage — dont une
            bonification pour les multilogements. Voici lesquels, combien, et qui peut en
            bénéficier.
          </Reveal>
        </div>
      </section>

      {/* DEUX CARTES */}
      <section className="px-[22px] pt-[clamp(16px,3vw,28px)] pb-[clamp(40px,6vw,56px)]">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2">
          {/* LogisVert */}
          <Reveal className="border-pine/10 bg-card flex flex-col rounded-[24px] border p-[clamp(26px,4vw,34px)] shadow-[0_12px_32px_rgba(18,61,43,0.06)]">
            <div className="flex items-center justify-between gap-3">
              <span className="bg-mint text-pine grid size-[52px] place-items-center rounded-[14px]">
                <Snowflake className="size-[25px]" />
              </span>
              <span className="bg-leaf text-forest inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold">
                <span className="bg-forest size-[7px] rounded-full" /> Actif · reconduit 2030
              </span>
            </div>
            <h2 className="text-pine mt-[18px] mb-0.5 font-serif text-[27px]">
              LogisVert — Hydro-Québec
            </h2>
            <div className="text-pine mt-1.5 font-serif text-[38px] leading-none">
              Jusqu’à 6 700 $
            </div>
            <p className="text-fern mt-3.5 mb-[18px] text-[15.5px] leading-[1.6]">
              Le programme phare d’Hydro-Québec pour encourager le remplacement des systèmes de
              chauffage par des thermopompes haute efficacité.
            </p>
            <dl className="mb-[22px] flex flex-1 flex-col gap-[13px]">
              {logisVertRows.map(({ icon: Icon, term, desc }) => (
                <div key={term} className="flex gap-[11px]">
                  <Icon className="text-forest mt-0.5 size-[18px] shrink-0" />
                  <div>
                    <dt className="text-pine text-[14.5px] font-bold">{term}</dt>
                    <dd className="text-fern mt-0.5 text-[14.5px]">{desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <CtaLink href="/subventions/logisvert" variant="dark" className="text-[15.5px]">
              Découvrir LogisVert en détail
            </CtaLink>
          </Reveal>

          {/* Bonification multilogements */}
          <Reveal
            delay={50}
            className="border-pine/10 bg-card flex flex-col rounded-[24px] border p-[clamp(26px,4vw,34px)] shadow-[0_12px_32px_rgba(18,61,43,0.06)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="bg-mint text-pine grid size-[52px] place-items-center rounded-[14px]">
                <Building2 className="size-[25px]" />
              </span>
              <span className="bg-leaf text-forest inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold">
                <span className="bg-forest size-[7px] rounded-full" /> Actif en 2026
              </span>
            </div>
            <h2 className="text-pine mt-[18px] mb-0.5 font-serif text-[27px]">
              Multilogements — Bonification
            </h2>
            <div className="text-pine mt-1.5 font-serif text-[38px] leading-none">
              Jusqu’à 220 $
            </div>
            <div className="text-fern mt-1.5 text-[13.5px] font-semibold">
              par 1 000 BTU/h — bonification incluse
            </div>
            <p className="text-fern mt-3.5 mb-[18px] text-[15.5px] leading-[1.6]">
              Une bonification du gouvernement du Québec qui s’ajoute à LogisVert pour les
              thermopompes murales climat froid dans les immeubles de deux logements ou plus.
            </p>
            <dl className="mb-[22px] flex flex-1 flex-col gap-[13px]">
              {multiRows.map(({ icon: Icon, term, desc }) => (
                <div key={term} className="flex gap-[11px]">
                  <Icon className="text-forest mt-0.5 size-[18px] shrink-0" />
                  <div>
                    <dt className="text-pine text-[14.5px] font-bold">{term}</dt>
                    <dd className="text-fern mt-0.5 text-[14.5px]">{desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <CtaLink
              href="/subventions/logisvert-multilogements"
              variant="dark"
              className="text-[15.5px]"
            >
              Découvrir la bonification
            </CtaLink>
          </Reveal>

          {/* Isolation de toit et calfeutrage */}
          <Reveal
            delay={100}
            className="border-pine/10 bg-card flex flex-col rounded-[24px] border p-[clamp(26px,4vw,34px)] shadow-[0_12px_32px_rgba(18,61,43,0.06)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="bg-mint text-pine grid size-[52px] place-items-center rounded-[14px]">
                <House className="size-[25px]" />
              </span>
              <span className="bg-leaf text-forest inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold">
                <span className="bg-forest size-[7px] rounded-full" /> Actif en 2026
              </span>
            </div>
            <h2 className="text-pine mt-[18px] mb-0.5 font-serif text-[27px]">
              Isolation de toit et calfeutrage
            </h2>
            <div className="text-pine mt-1.5 font-serif text-[38px] leading-none">
              Jusqu’à 1 500 $
            </div>
            <p className="text-fern mt-3.5 mb-[18px] text-[15.5px] leading-[1.6]">
              Une mesure LogisVert pour réduire les fuites d’air, réaliser des économies et
              améliorer votre confort l’hiver.
            </p>
            <dl className="mb-[22px] flex flex-1 flex-col gap-[13px]">
              {isolationRows.map(({ icon: Icon, term, desc }) => (
                <div key={term} className="flex gap-[11px]">
                  <Icon className="text-forest mt-0.5 size-[18px] shrink-0" />
                  <div>
                    <dt className="text-pine text-[14.5px] font-bold">{term}</dt>
                    <dd className="text-fern mt-0.5 text-[14.5px]">{desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <CtaLink
              href="/subventions/isolation-calfeutrage"
              variant="dark"
              className="text-[15.5px]"
            >
              Découvrir la mesure
            </CtaLink>
          </Reveal>

          {/* CAMT */}
          <Reveal
            delay={100}
            className="border-brick/20 bg-card flex flex-col rounded-[24px] border p-[clamp(26px,4vw,34px)] shadow-[0_12px_32px_rgba(18,61,43,0.06)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="bg-blush text-brick grid size-[52px] place-items-center rounded-[14px]">
                <Flame className="size-[25px]" />
              </span>
              <span className="bg-blush text-brick inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold">
                <span className="bg-brick size-[7px] rounded-full" /> Fin le 31 juillet 2026
              </span>
            </div>
            <h2 className="text-pine mt-[18px] mb-0.5 font-serif text-[27px]">
              CAMT — Gouvernement du Canada
            </h2>
            <div className="text-pine mt-1.5 font-serif text-[38px] leading-none">
              Jusqu’à 10 250 $
            </div>
            <p className="text-fern mt-3.5 mb-[18px] text-[15.5px] leading-[1.6]">
              Le programme fédéral pour aider les propriétaires chauffés au mazout à passer à une
              thermopompe écoénergétique.
            </p>
            <dl className="mb-[22px] flex flex-1 flex-col gap-[13px]">
              {camtRows.map(({ icon: Icon, term, desc }) => (
                <div key={term} className="flex gap-[11px]">
                  <Icon className="text-brick mt-0.5 size-[18px] shrink-0" />
                  <div>
                    <dt className="text-pine text-[14.5px] font-bold">{term}</dt>
                    <dd className="text-fern mt-0.5 text-[14.5px]">{desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <CtaLink href="/subventions/camt" variant="brick" className="text-[15.5px]">
              Découvrir le CAMT en détail
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* CUMUL */}
      <section className="px-[22px] pb-[clamp(56px,8vw,90px)]">
        <Reveal className="bg-pine text-cream-soft relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] p-[clamp(32px,5vw,56px)]">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[90px] -right-[70px] size-[320px] rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.18),transparent_66%)]"
          />
          <div className="relative flex flex-wrap items-center gap-[clamp(28px,5vw,52px)]">
            <div className="min-w-[280px] flex-1 basis-[320px]">
              <span className="text-lime inline-block text-[13px] font-bold tracking-[0.06em] uppercase">
                Le cumul
              </span>
              <h2 className="text-card mt-3 font-serif text-[clamp(26px,3.6vw,38px)] leading-[1.12]">
                Pouvez-vous cumuler les deux ?
              </h2>
              <p className="text-on-pine mt-4 text-[16px] leading-[1.65]">
                <strong className="text-lime">Oui, totalement.</strong> Si vous chauffez
                actuellement au mazout et que vous êtes admissible aux deux programmes, vous pouvez
                les cumuler sur le même projet. C’est exactement le type de projet que nous
                accompagnons quotidiennement.
              </p>
              <CtaLink href="/admissibilite" className="mt-6 text-[16px]">
                Vérifier si je peux cumuler
              </CtaLink>
            </div>
            <div className="min-w-[260px] flex-1 basis-[280px] rounded-[20px] border border-white/10 bg-white/5 p-[26px]">
              <div className="mb-1.5 text-[13.5px] text-[#9db596]">
                Exemple — propriétaire de Trois-Rivières, conversion mazout → thermopompe :
              </div>
              <div className="flex items-center justify-between border-b border-white/10 py-3">
                <span className="text-cream-soft text-[15px]">CAMT (avant travaux)</span>
                <span className="text-lime font-serif text-[22px]">10 250 $</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 py-3">
                <span className="text-cream-soft text-[15px]">LogisVert (après pose)</span>
                <span className="text-lime font-serif text-[22px]">+ 6 700 $</span>
              </div>
              <div className="flex items-center justify-between pt-3.5">
                <span className="text-card text-[16px] font-bold">Total</span>
                <span className="text-lime font-serif text-[30px]">16 950 $</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* AVERTISSEMENT */}
      <section className="px-[22px] pb-[clamp(56px,8vw,88px)]">
        <Reveal className="border-pine/25 mx-auto flex max-w-[880px] items-start gap-3 rounded-2xl border border-dashed px-[22px] py-5">
          <span className="text-forest mt-0.5 shrink-0">
            <Info className="size-5" />
          </span>
          <p className="text-fern text-[14px] leading-[1.6]">
            Maison Verte Québec est un service privé indépendant et n’est affilié ni à Hydro-Québec
            ni au gouvernement du Canada. Les montants et critères présentés sont indicatifs
            (référence 2026), sujets à changement, et proviennent des sources officielles publiques.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
