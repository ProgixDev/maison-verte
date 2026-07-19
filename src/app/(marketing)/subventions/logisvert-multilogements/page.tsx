import type { Metadata } from "next";
import {
  ArrowLeft,
  Building2,
  CalendarClock,
  Check,
  CircleCheckBig,
  Info,
  Layers,
  MapPin,
  Snowflake,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { CtaLink } from "@/components/ui/cta-link";
import { FinalCta } from "@/components/ui/final-cta";
import { Parallax } from "@/components/ui/parallax";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Bonification multilogements (LogisVert)",
  description:
    "La bonification LogisVert multilogements d’Hydro-Québec : jusqu’à 220 $ par 1 000 BTU/h pour les immeubles de deux logements ou plus. Montant, conditions et zones admissibles.",
  alternates: { canonical: "/subventions/logisvert-multilogements" },
};

const rates = [
  {
    amount: "+100 $",
    body: (
      <>
        par 1 000 BTU/h ajoutés à la subvention LogisVert{" "}
        <strong className="text-pine">Thermopompe</strong>
      </>
    ),
  },
  {
    amount: "220 $",
    body: (
      <>
        par 1 000 BTU/h : le montant <strong className="text-pine">total possible</strong> une fois
        la bonification appliquée
      </>
    ),
  },
  {
    amount: "+83 %",
    body: (
      <>
        d’aide en plus par rapport au montant <strong className="text-pine">standard</strong> pour
        une thermopompe efficace
      </>
    ),
  },
];

const conditionGroups = [
  {
    icon: Building2,
    title: "Côté immeuble",
    items: [
      "Immeuble de 2 logements ou plus (plex, petit multilogement)",
      "Un compteur électrique par logement",
      "Construit en 1995 ou avant",
    ],
  },
  {
    icon: MapPin,
    title: "Côté zone",
    items: [
      "Situé dans une zone désignée par Hydro-Québec",
      "Valeur foncière par logement sous la médiane de la région administrative",
      "Zones de précarité énergétique visées en priorité",
    ],
  },
  {
    icon: Snowflake,
    title: "Côté équipement",
    items: [
      "Thermopompe efficace admissible à LogisVert (ENERGY STAR®)",
      "Installation par un entrepreneur licencié RBQ",
      "Installation réalisée à compter du 15 juin 2026",
    ],
  },
];

const examples = [
  { type: "Duplex (2 logements)", capacity: "≈ 24 000 BTU/h", amount: "jusqu’à 5 280 $" },
  { type: "Triplex (3 logements)", capacity: "≈ 36 000 BTU/h", amount: "jusqu’à 7 920 $" },
  {
    type: "Petit multilogement (6 logements)",
    capacity: "≈ 72 000 BTU/h",
    amount: "jusqu’à 15 840 $",
  },
];

export default function LogisVertMultilogementsPage() {
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
              <span className="bg-forest size-[7px] rounded-full" /> Actif · installations dès le 15
              juin 2026
            </span>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="text-pine mt-4 font-serif text-[clamp(30px,4.6vw,52px)] leading-[1.08] tracking-[-0.015em]"
          >
            Multilogements : jusqu’à 83 % d’aide en plus sur votre thermopompe.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="text-moss mt-5 max-w-[58ch] text-[clamp(16px,1.6vw,18.5px)] leading-[1.65]"
          >
            Une bonification du gouvernement du Québec qui s’ajoute au programme LogisVert pour les
            propriétaires d’immeubles de deux logements ou plus situés en zone admissible.
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
            src="/thermopompe-maison-brique.jpg"
            alt="Immeuble multilogement admissible à la bonification LogisVert"
            className="mx-auto aspect-[5/2] max-w-[900px]"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </Reveal>
      </section>

      <div className="mx-auto max-w-[900px] px-[22px]">
        {/* EN BREF */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            La bonification en bref
          </h2>
          <p className="text-moss mt-4 text-[16.5px] leading-[1.68]">
            Pour rendre les thermopompes plus accessibles dans les immeubles à logements, le
            gouvernement du Québec bonifie l’aide financière de LogisVert. Concrètement, une somme
            supplémentaire s’ajoute à la subvention Thermopompe habituelle lorsque l’immeuble est
            admissible.
          </p>
          <p className="text-moss mt-3.5 text-[16.5px] leading-[1.68]">
            La bonification vise en priorité les immeubles plus anciens situés dans des zones de
            précarité énergétique, afin que locataires et propriétaires y profitent d’un chauffage
            plus efficace et de factures réduites.
          </p>
        </Reveal>

        {/* MONTANT */}
        <section className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <Reveal
            as="h2"
            className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]"
          >
            Combien la bonification ajoute
          </Reveal>
          <Reveal
            as="p"
            delay={60}
            className="text-moss mt-3.5 mb-[22px] text-[16.5px] leading-[1.6]"
          >
            La bonification s’ajoute au montant LogisVert, calculé selon la puissance de la
            thermopompe à −8 °C.
          </Reveal>
          <div className="flex flex-col gap-3">
            {rates.map(({ amount, body }, i) => (
              <Reveal
                key={amount}
                delay={i * 80}
                className="border-pine/[0.08] bg-card flex items-start gap-[13px] rounded-[14px] border p-[18px]"
              >
                <span className="text-forest shrink-0 font-serif text-[20px]">{amount}</span>
                <span className="text-moss text-[15px]">{body}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="border-pine/10 mt-[22px] overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[460px] border-collapse text-[14.5px]">
              <thead>
                <tr className="bg-sage">
                  <th className="text-pine px-[18px] py-3.5 text-left font-bold">
                    Type d’immeuble
                  </th>
                  <th className="text-pine px-[18px] py-3.5 text-left font-bold">
                    Capacité typique
                  </th>
                  <th className="text-pine px-[18px] py-3.5 text-left font-bold">
                    Aide bonifiée estimée
                  </th>
                </tr>
              </thead>
              <tbody>
                {examples.map(({ type, capacity, amount }, i) => (
                  <tr
                    key={type}
                    className={`border-pine/[0.08] border-t ${i === examples.length - 1 ? "bg-[#f4f8ea]" : ""}`}
                  >
                    <td className="text-moss px-[18px] py-[13px]">{type}</td>
                    <td className="text-moss px-[18px] py-[13px]">{capacity}</td>
                    <td
                      className={`text-pine px-[18px] py-[13px] ${i === examples.length - 1 ? "font-extrabold" : "font-semibold"}`}
                    >
                      {amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal as="p" className="text-stone mt-4 text-[14.5px]">
            Estimations à 220 $ par 1 000 BTU/h, à titre indicatif. Le montant exact dépend du
            modèle installé et de l’admissibilité de l’immeuble — notre équipe le confirme dès
            l’analyse.
          </Reveal>
        </section>

        {/* CONDITIONS */}
        <section className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <Reveal
            as="h2"
            className="text-pine mt-0 mb-[22px] font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]"
          >
            Conditions d’admissibilité
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {conditionGroups.map(({ icon: Icon, title, items }, i) => (
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
              Les zones admissibles sont définies par Hydro-Québec. On vérifie gratuitement si
              l’adresse de votre immeuble est couverte.
            </span>
          </Reveal>
        </section>

        {/* CUMUL */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine mt-0 mb-[18px] font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Comment elle s’applique
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
            <div className="bg-sage rounded-2xl p-5">
              <div className="mb-1.5 flex items-center gap-[9px]">
                <Layers className="text-forest size-[19px]" />
                <span className="text-pine font-bold">Une seule demande</span>
              </div>
              <p className="text-moss m-0 text-[14.5px]">
                La bonification s’ajoute à votre demande LogisVert Thermopompe — aucune démarche
                séparée.
              </p>
            </div>
            <div className="bg-sage rounded-2xl p-5">
              <div className="mb-1.5 flex items-center gap-[9px]">
                <TrendingUp className="text-forest size-[19px]" />
                <span className="text-pine font-bold">Par logement</span>
              </div>
              <p className="text-moss m-0 text-[14.5px]">
                Plus l’immeuble compte de logements chauffés, plus l’aide bonifiée grimpe.
              </p>
            </div>
            <div className="bg-sage rounded-2xl p-5">
              <div className="mb-1.5 flex items-center gap-[9px]">
                <CalendarClock className="text-forest size-[19px]" />
                <span className="text-pine font-bold">Dès le 15 juin 2026</span>
              </div>
              <p className="text-moss m-0 text-[14.5px]">
                Valable pour les installations réalisées à compter de cette date.
              </p>
            </div>
          </div>
        </Reveal>

        {/* DÉLAI */}
        <section className="border-pine/10 border-t pt-[clamp(28px,4vw,44px)] pb-[clamp(40px,6vw,60px)]">
          <Reveal
            as="h2"
            className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]"
          >
            Combien de temps avant de recevoir l’argent
          </Reveal>
          <Reveal as="p" delay={60} className="text-moss mt-3.5 text-[16.5px] leading-[1.6]">
            Comme pour LogisVert, l’aide bonifiée est versée par{" "}
            <strong className="text-pine">dépôt direct</strong>, généralement{" "}
            <strong className="text-pine">6 à 12 semaines</strong> après la réception d’un dossier
            complet.
          </Reveal>
          <Reveal className="bg-sage mt-[18px] flex items-start gap-[11px] rounded-[13px] px-[18px] py-[15px]">
            <CircleCheckBig className="text-forest mt-px size-[18px] shrink-0" />
            <span className="text-moss text-[14.5px]">
              On monte le dossier de votre immeuble avec vous, sans erreur, pour un traitement dans
              les meilleurs délais.
            </span>
          </Reveal>
        </section>
      </div>

      {/* AVERTISSEMENT */}
      <section className="px-[22px] pb-[clamp(8px,2vw,16px)]">
        <Reveal className="border-pine/25 mx-auto flex max-w-[900px] items-start gap-3 rounded-2xl border border-dashed px-[22px] py-5">
          <span className="text-forest mt-0.5 shrink-0">
            <Info className="size-5" />
          </span>
          <p className="text-fern text-[14px] leading-[1.6]">
            Maison Verte Québec est un service privé indépendant et n’est pas affilié à
            Hydro-Québec. Les montants, zones et critères présentés sont indicatifs (référence
            2026), sujets à changement, et proviennent des sources officielles publiques.
          </p>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <FinalCta title="Votre immeuble est-il admissible ?" ctaLabel="Vérifier mon admissibilité" />
    </main>
  );
}
