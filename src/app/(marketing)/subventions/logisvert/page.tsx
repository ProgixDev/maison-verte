import type { Metadata } from "next";
import {
  ArrowLeft,
  Camera,
  Check,
  CircleCheckBig,
  CircleX,
  FileText,
  House,
  Info,
  Receipt,
  Snowflake,
  UserRound,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { CtaLink } from "@/components/ui/cta-link";
import { FinalCta } from "@/components/ui/final-cta";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "LogisVert (Hydro-Québec)",
  description:
    "Recevez jusqu’à 6 700 $ d’Hydro-Québec pour votre thermopompe. Barème, conditions, documents et délais.",
  alternates: { canonical: "/subventions/logisvert" },
};

const conditionGroups = [
  {
    icon: UserRound,
    title: "Côté propriétaire",
    items: [
      "Propriétaire d’une habitation résidentielle au Québec",
      "Client Hydro-Québec à l’adresse des travaux",
      "Maison, jumelée, en rangée, plex ou condo",
      "Aucune limite de revenu",
    ],
  },
  {
    icon: Snowflake,
    title: "Côté équipement",
    items: [
      "Certifié ENERGY STAR® (obligatoire depuis nov. 2025)",
      "Idéalement sur la liste NEEP (climat froid)",
      "Acheté au Québec",
      "Numéro AHRI valide",
    ],
  },
  {
    icon: Wrench,
    title: "Côté installation",
    items: [
      "Installateur licence RBQ active (15.1, 15.10 ou 15.4)",
      "Installation professionnelle (auto-installation non admise)",
      "Demande soumise dans les 9 mois suivant l’installation",
    ],
  },
];

const mistakes = [
  "Choisir un modèle qui n’est plus sur la liste officielle (elles changent tous les 3 à 6 mois).",
  "Faire installer par un entrepreneur sans la bonne licence RBQ — facture rejetée automatiquement.",
  "Acheter à l’extérieur du Québec (Amazon, Costco hors-province, etc.).",
  "Dépasser le délai de 9 mois pour soumettre la demande.",
  "Faire son installation soi-même ou avec un travailleur au noir.",
];

export default function LogisVertPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-[22px] pt-[clamp(44px,7vw,82px)] pb-[clamp(32px,5vw,52px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[120px] -right-[90px] size-[420px] max-w-[80vw] rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.28),transparent_68%)]"
        />
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
              <span className="bg-forest size-[7px] rounded-full" /> Actif · reconduit jusqu’en 2030
            </span>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="text-pine mt-4 font-serif text-[clamp(31px,4.8vw,54px)] leading-[1.08] tracking-[-0.015em]"
          >
            LogisVert : recevez jusqu’à 6 700 $ d’Hydro-Québec pour votre thermopompe.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="text-moss mt-5 max-w-[58ch] text-[clamp(16px,1.6vw,18.5px)] leading-[1.65]"
          >
            Le programme phare d’Hydro-Québec pour les propriétaires québécois. Actif tout au long
            de 2026 et reconduit jusqu’en 2030.
          </Reveal>
          <Reveal delay={220} className="mt-7">
            <CtaLink href="/admissibilite" size="md">
              Vérifier mon montant exact
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* BANNIÈRE */}
      <section className="px-[22px] pb-[clamp(12px,2vw,24px)]">
        <Reveal>
          <Photo
            src="/working-laptop.jpg"
            alt="Analyse d’admissibilité LogisVert par notre équipe"
            className="mx-auto aspect-[5/2] max-w-[900px]"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </Reveal>
      </section>

      <div className="mx-auto max-w-[900px] px-[22px]">
        {/* EN BREF */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Le programme en bref
          </h2>
          <p className="text-moss mt-4 text-[16.5px] leading-[1.68]">
            LogisVert est le programme d’efficacité énergétique résidentielle d’Hydro-Québec. Son
            objectif : encourager les propriétaires à remplacer leur ancien système de chauffage
            (mazout, propane, plinthes électriques, vieille thermopompe) par une thermopompe haute
            efficacité.
          </p>
          <p className="text-moss mt-3.5 text-[16.5px] leading-[1.68]">
            En contrepartie de l’installation d’un équipement performant, Hydro-Québec verse une
            subvention directe au propriétaire, calculée selon la capacité de chauffage de
            l’appareil à −8 °C.
          </p>
        </Reveal>

        {/* BARÈME */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Combien vous pouvez recevoir
          </h2>
          <p className="text-moss mt-3.5 mb-[22px] text-[16.5px] leading-[1.6]">
            Le calcul est simple : ça dépend de la puissance de votre thermopompe.
          </p>
          <div className="flex flex-col gap-3">
            <div className="border-pine/[0.08] bg-card flex items-start gap-[13px] rounded-[14px] border p-[18px]">
              <span className="text-forest shrink-0 font-serif text-[20px]">50 $</span>
              <span className="text-moss text-[15px]">
                par 1 000 BTU/h pour une thermopompe efficace certifiée{" "}
                <strong className="text-pine">ENERGY STAR®</strong>
              </span>
            </div>
            <div className="border-pine/[0.08] bg-card flex items-start gap-[13px] rounded-[14px] border p-[18px]">
              <span className="text-forest shrink-0 font-serif text-[20px]">120 $</span>
              <span className="text-moss text-[15px]">
                par 1 000 BTU/h pour une thermopompe{" "}
                <strong className="text-pine">très haute efficacité</strong> (climat froid, liste
                NEEP)
              </span>
            </div>
            <div className="border-pine/[0.08] bg-card flex items-start gap-[13px] rounded-[14px] border p-[18px]">
              <span className="text-forest shrink-0 font-serif text-[20px]">750 $</span>
              <span className="text-moss text-[15px]">
                par 1 000 BTU/h pour une{" "}
                <strong className="text-pine">thermopompe géothermique</strong> (plafond 18 000 $
                par adresse)
              </span>
            </div>
          </div>
          <div className="border-pine/10 mt-[22px] overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[460px] border-collapse text-[14.5px]">
              <thead>
                <tr className="bg-sage">
                  <th className="text-pine px-[18px] py-3.5 text-left font-bold">Type de maison</th>
                  <th className="text-pine px-[18px] py-3.5 text-left font-bold">
                    Capacité typique
                  </th>
                  <th className="text-pine px-[18px] py-3.5 text-left font-bold">
                    Subvention estimée
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-pine/[0.08] border-t">
                  <td className="text-moss px-[18px] py-[13px]">Petit condo / appartement</td>
                  <td className="text-moss px-[18px] py-[13px]">12 000 BTU</td>
                  <td className="text-pine px-[18px] py-[13px] font-semibold">600 $ à 1 440 $</td>
                </tr>
                <tr className="border-pine/[0.08] border-t">
                  <td className="text-moss px-[18px] py-[13px]">Maison unifamiliale moyenne</td>
                  <td className="text-moss px-[18px] py-[13px]">24 000 BTU</td>
                  <td className="text-pine px-[18px] py-[13px] font-semibold">1 200 $ à 2 880 $</td>
                </tr>
                <tr className="border-pine/[0.08] border-t">
                  <td className="text-moss px-[18px] py-[13px]">Grande maison</td>
                  <td className="text-moss px-[18px] py-[13px]">36 000 BTU+</td>
                  <td className="text-pine px-[18px] py-[13px] font-semibold">jusqu’à 4 320 $</td>
                </tr>
                <tr className="border-pine/[0.08] border-t bg-[#f4f8ea]">
                  <td className="text-moss px-[18px] py-[13px]">
                    Grande maison + très haute efficacité
                  </td>
                  <td className="text-moss px-[18px] py-[13px]">48 000 BTU+</td>
                  <td className="text-pine px-[18px] py-[13px] font-extrabold">jusqu’à 6 700 $</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone mt-4 text-[14.5px]">
            Le montant exact dépend du modèle précis choisi. Notre équipe vous donne le chiffre
            exact dès l’analyse d’admissibilité.
          </p>
        </Reveal>

        {/* CONDITIONS */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine mt-0 mb-[22px] font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Conditions d’admissibilité
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {conditionGroups.map(({ icon: Icon, title, items }) => (
              <div key={title} className="border-pine/[0.08] bg-card rounded-[18px] border p-6">
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
              </div>
            ))}
          </div>
          <div className="bg-sage mt-4 flex items-start gap-[11px] rounded-[13px] px-[18px] py-[15px]">
            <Info className="text-forest mt-px size-[18px] shrink-0" />
            <span className="text-moss text-[14.5px]">
              Une seule demande LogisVert par adresse, peu importe le nombre d’unités installées.
            </span>
          </div>
        </Reveal>

        {/* DOCUMENTS */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine mt-0 mb-[18px] font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Ce que vous devrez fournir
          </h2>
          <ul className="m-0 flex list-none flex-col gap-[11px] p-0">
            <li className="text-moss flex gap-2.5 text-[15.5px]">
              <FileText className="text-forest mt-0.5 size-[18px] shrink-0" /> Facture détaillée
              d’achat et d’installation (entrepreneur + RBQ, votre adresse, date, marque, modèle,{" "}
              <strong className="text-pine">numéro AHRI</strong>)
            </li>
            <li className="text-moss flex gap-2.5 text-[15.5px]">
              <Receipt className="text-forest mt-0.5 size-[18px] shrink-0" /> Preuve de paiement
            </li>
            <li className="text-moss flex gap-2.5 text-[15.5px]">
              <Camera className="text-forest mt-0.5 size-[18px] shrink-0" /> Photo nette de la
              plaque signalétique de l’appareil extérieur
            </li>
            <li className="text-moss flex gap-2.5 text-[15.5px]">
              <House className="text-forest mt-0.5 size-[18px] shrink-0" /> Relevé de taxes
              municipales OU première page de l’acte de vente
            </li>
          </ul>
          <p className="text-forest mt-4 text-[15px] font-semibold">
            On monte ce dossier avec vous, étape par étape. Pas besoin de tout comprendre seul.
          </p>
        </Reveal>

        {/* DÉLAI */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Combien de temps avant de recevoir l’argent
          </h2>
          <p className="text-moss mt-3.5 mb-[18px] text-[16.5px] leading-[1.6]">
            Délai officiel d’Hydro-Québec : <strong className="text-pine">6 à 12 semaines</strong> à
            compter de la réception d’un dossier complet, par dépôt direct.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
            <div className="bg-sage rounded-2xl p-5">
              <div className="mb-1.5 flex items-center gap-[9px]">
                <CircleCheckBig className="text-forest size-[19px]" />
                <span className="text-pine font-bold">Dossier correct</span>
              </div>
              <p className="text-moss m-0 text-[14.5px]">8 semaines en moyenne.</p>
            </div>
            <div className="bg-blush rounded-2xl p-5">
              <div className="mb-1.5 flex items-center gap-[9px]">
                <CircleX className="text-brick size-[19px]" />
                <span className="text-pine font-bold">Dossier incomplet</span>
              </div>
              <p className="m-0 text-[14.5px] text-[#6b3a33]">
                Jusqu’à 6 mois, parfois refusé définitivement.
              </p>
            </div>
          </div>
          <p className="text-moss mt-4 text-[15px]">
            C’est exactement pour ça que nous existons : vous assurer un dossier sans erreur, traité
            dans les meilleurs délais.
          </p>
        </Reveal>

        {/* PIÈGES */}
        <Reveal
          as="section"
          className="border-pine/10 border-t pt-[clamp(28px,4vw,44px)] pb-[clamp(40px,6vw,60px)]"
        >
          <h2 className="text-pine mt-0 mb-2 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Les 5 erreurs qui font perdre la subvention
          </h2>
          <div className="mt-[18px] flex flex-col gap-[11px]">
            {mistakes.map((mistake, i) => (
              <div
                key={mistake}
                className="border-brick/15 bg-card flex items-start gap-3.5 rounded-[14px] border px-[19px] py-[17px]"
              >
                <span className="text-brick shrink-0 font-serif text-[22px] leading-none">
                  {i + 1}
                </span>
                <span className="text-moss text-[15.5px]">{mistake}</span>
              </div>
            ))}
          </div>
          <p className="text-brick mt-4 text-[15px] font-semibold">
            Chacune de ces erreurs annule la subvention de façon définitive.
          </p>
        </Reveal>
      </div>

      {/* CTA FINAL */}
      <FinalCta
        title="Découvrez votre montant exact en 2 minutes."
        ctaLabel="Vérifier mon montant LogisVert"
      />
    </main>
  );
}
