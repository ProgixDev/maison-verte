import type { Metadata } from "next";
import {
  ArrowLeft,
  BadgePlus,
  Check,
  Home,
  Info,
  PiggyBank,
  ThermometerSun,
  UserRound,
  Wind,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { CtaLink } from "@/components/ui/cta-link";
import { FinalCta } from "@/components/ui/final-cta";
import { Parallax } from "@/components/ui/parallax";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Isolation de toit et calfeutrage (LogisVert)",
  description:
    "La mesure LogisVert d’Hydro-Québec : 1 500 $ pour l’isolation du toit et le calfeutrage, afin de réduire les fuites d’air et améliorer le confort de votre maison.",
  alternates: { canonical: "/subventions/isolation-calfeutrage" },
};

const benefits = [
  {
    icon: Wind,
    title: "Moins de fuites d’air",
    body: "Les fuites d’air et de ventilation peuvent représenter jusqu’à 25 % des pertes de chaleur d’une maison.",
  },
  {
    icon: PiggyBank,
    title: "Des économies",
    body: "Une enveloppe mieux scellée, c’est moins de chauffage gaspillé et une facture allégée.",
  },
  {
    icon: ThermometerSun,
    title: "Plus de confort",
    body: "Fini les courants d’air froid : une maison plus confortable tout l’hiver.",
  },
];

const conditions = [
  {
    icon: UserRound,
    title: "Côté propriétaire",
    items: [
      "Propriétaire d’une résidence au Québec",
      "Client Hydro-Québec à l’adresse des travaux",
    ],
  },
  {
    icon: Wrench,
    title: "Côté travaux",
    items: [
      "Isolation du toit ou calfeutrage admissible",
      "Travaux réalisés selon les exigences du programme LogisVert",
    ],
  },
];

export default function IsolationCalfeutragePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-[22px] pt-[clamp(44px,7vw,82px)] pb-[clamp(32px,5vw,52px)]">
        <Parallax
          aria-hidden
          distance={60}
          className="pointer-events-none absolute -top-[120px] -right-[90px] size-[420px] max-w-[80vw]"
        >
          <div className="size-full rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.28),transparent_68%)]" />
        </Parallax>
        <div className="relative mx-auto max-w-[900px]">
          <Reveal>
            <Link
              href="/subventions"
              className="text-forest mb-2 inline-flex items-center gap-[7px] text-[14px] font-semibold no-underline"
            >
              <ArrowLeft className="size-[15px]" /> Tous les programmes
            </Link>
          </Reveal>
          <Reveal>
            <span className="bg-leaf text-forest ml-1.5 inline-flex items-center gap-2 rounded-full px-3.5 py-[7px] text-[12.5px] font-bold tracking-[0.04em]">
              <span className="bg-forest size-[7px] rounded-full" /> Actif en 2026 · LogisVert
            </span>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="text-pine mt-4 font-serif text-[clamp(30px,4.6vw,52px)] leading-[1.08] tracking-[-0.015em]"
          >
            Isolation de toit et calfeutrage : 1 500 $ pour une maison plus confortable.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="text-moss mt-5 max-w-[58ch] text-[clamp(16px,1.6vw,18.5px)] leading-[1.65]"
          >
            Une mesure du programme LogisVert d’Hydro-Québec pour aider les propriétaires à réduire
            les fuites d’air, faire des économies et gagner en confort l’hiver.
          </Reveal>
          <Reveal delay={220} className="mt-7">
            <CtaLink href="/admissibilite" size="md">
              Vérifier mon admissibilité
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* BANNIÈRE */}
      <section className="px-[22px] pb-[clamp(12px,2vw,24px)]">
        <Reveal>
          <Photo
            src="/maison-hiver.jpg"
            alt="Maison québécoise en hiver, mieux isolée grâce à LogisVert"
            className="mx-auto aspect-[5/2] max-w-[900px]"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </Reveal>
      </section>

      <div className="mx-auto max-w-[900px] px-[22px]">
        {/* EN BREF */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            La mesure en bref
          </h2>
          <p className="text-moss mt-4 text-[16.5px] leading-[1.68]">
            En plus d’aider au remplacement du système de chauffage, LogisVert encourage les
            propriétaires à mieux sceller l’enveloppe de leur maison. L’isolation du toit et le
            calfeutrage réduisent les fuites d’air — l’une des principales sources de perte de
            chaleur en hiver.
          </p>
          <p className="text-moss mt-3.5 text-[16.5px] leading-[1.68]">
            Hydro-Québec verse <strong className="text-pine">1 500 $</strong> pour ces travaux, ce
            qui allège la facture tout en rendant la maison plus confortable et plus économe en
            énergie.
          </p>
        </Reveal>

        {/* MONTANT */}
        <section className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <Reveal
            as="h2"
            className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]"
          >
            Combien vous pouvez recevoir
          </Reveal>
          <Reveal className="border-pine/[0.08] bg-card mt-[22px] flex items-center gap-5 rounded-[18px] border p-[clamp(22px,4vw,32px)]">
            <span className="text-forest shrink-0 font-serif text-[clamp(40px,7vw,56px)] leading-none">
              1 500 $
            </span>
            <span className="text-moss text-[15.5px] leading-[1.6]">
              versés par Hydro-Québec pour l’isolation du toit et le calfeutrage d’une résidence
              admissible.
            </span>
          </Reveal>
          <Reveal className="bg-sage mt-4 flex items-start gap-[11px] rounded-[13px] px-[18px] py-[15px]">
            <BadgePlus className="text-forest mt-px size-[18px] shrink-0" />
            <span className="text-moss text-[14.5px]">
              Cette mesure peut compléter la subvention LogisVert pour une thermopompe : on regarde
              tout ce à quoi vous avez droit en une seule analyse.
            </span>
          </Reveal>
        </section>

        {/* POURQUOI */}
        <section className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <Reveal
            as="h2"
            className="text-pine mt-0 mb-[22px] font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]"
          >
            Pourquoi ça vaut le coup
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {benefits.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className="border-pine/[0.08] bg-card rounded-[18px] border p-6"
              >
                <span className="bg-mint text-forest grid size-[42px] place-items-center rounded-[12px]">
                  <Icon className="size-[21px]" />
                </span>
                <h3 className="text-pine mt-3.5 mb-2 text-[16px]">{title}</h3>
                <p className="text-moss m-0 text-[14.5px] leading-[1.55]">{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONDITIONS */}
        <section className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <Reveal
            as="h2"
            className="text-pine mt-0 mb-[22px] font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]"
          >
            Conditions d’admissibilité
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            {conditions.map(({ icon: Icon, title, items }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className="border-pine/[0.08] bg-card rounded-[18px] border p-6"
              >
                <h3 className="text-pine mt-0 mb-3.5 flex items-center gap-[9px] text-[16px]">
                  <Icon className="text-forest size-[19px]" /> {title}
                </h3>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {items.map((item) => (
                    <li key={item} className="text-moss flex gap-2 text-[14.5px]">
                      <Check className="text-forest mt-0.5 size-4 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="bg-sage mt-4 flex items-start gap-[11px] rounded-[13px] px-[18px] py-[15px]">
            <Info className="text-forest mt-px size-[18px] shrink-0" />
            <span className="text-moss text-[14.5px]">
              Les conditions précises (types de travaux, exigences techniques) sont confirmées par
              notre équipe dès l’analyse de votre dossier, sans frais.
            </span>
          </Reveal>
        </section>

        {/* CUMUL */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <div className="bg-pine text-cream-soft relative overflow-hidden rounded-[22px] p-[clamp(24px,4vw,40px)]">
            <div className="flex items-start gap-3.5">
              <Home className="text-lime mt-0.5 size-[22px] shrink-0" />
              <div>
                <h2 className="text-card mt-0 mb-2 font-serif text-[clamp(20px,3vw,28px)] leading-[1.15]">
                  Un chauffage efficace commence par une maison bien scellée
                </h2>
                <p className="text-on-pine m-0 text-[15.5px] leading-[1.6]">
                  Isoler et calfeutrer avant (ou avec) l’installation d’une thermopompe, c’est
                  maximiser le rendement de votre nouveau système et vos économies. On vous aide à
                  combiner les bonnes mesures.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* AVERTISSEMENT */}
      <section className="px-[22px] pb-[clamp(8px,2vw,16px)]">
        <Reveal className="border-pine/25 mx-auto flex max-w-[900px] items-start gap-3 rounded-2xl border border-dashed px-[22px] py-5">
          <span className="text-forest mt-0.5 shrink-0">
            <Info className="size-5" />
          </span>
          <p className="text-fern text-[14px] leading-[1.6]">
            Maison Verte Québec est un service privé indépendant et n’est pas affilié à
            Hydro-Québec. Les montants et critères présentés sont indicatifs (référence 2026),
            sujets à changement, et proviennent des sources officielles publiques.
          </p>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <FinalCta
        title="Une maison plus confortable, ça se finance."
        ctaLabel="Vérifier mon admissibilité"
      />
    </main>
  );
}
