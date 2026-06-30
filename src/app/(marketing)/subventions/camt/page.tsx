import type { Metadata } from "next";
import {
  AlarmClock,
  ArrowLeft,
  BadgeCheck,
  Check,
  CircleX,
  Droplet,
  House,
  PlugZap,
  Snowflake,
  Trash2,
  TriangleAlert,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "CAMT (Ressources naturelles Canada)",
  description:
    "Jusqu’à 10 250 $ versés avant les travaux pour remplacer votre chauffage au mazout. Inscription jusqu’au 31 juillet 2026.",
  alternates: { canonical: "/subventions/camt" },
};

const ownerConditions = [
  "Propriétaire occupant (résidence principale)",
  "Revenu du ménage ≤ revenu médian après impôt (selon la taille)",
  "Au moins 500 L de mazout achetés dans les 12 derniers mois",
];

const houseConditions = [
  "Chauffage actuel au mazout",
  "3 étages ou moins, ≤ 600 m²",
  "Habitable toute l’année, sur le réseau électrique intégré",
];

const ineligible = [
  "Maisons neuves (occupées depuis moins de 6 mois)",
  "Immeubles de plus de 2 unités",
  "Chalets, résidences secondaires",
];

const financed = [
  { icon: Snowflake, label: "Thermopompe et installation" },
  { icon: PlugZap, label: "Améliorations du panneau électrique" },
  { icon: Trash2, label: "Retrait du réservoir de mazout" },
  { icon: Droplet, label: "Remplacement d’autres systèmes au mazout" },
];

const steps = [
  "Inscription sur le portail canadien pour des maisons plus vertes (on s’en charge).",
  "Soumission des preuves : avis de cotisation ARC, preuve de résidence, reçus de mazout.",
  "Validation par Ressources naturelles Canada (généralement quelques semaines).",
  "Versement initial par dépôt direct (5 à 10 jours après acceptation).",
  "Réalisation des travaux dans les 6 mois suivants.",
  "Attestation finale par votre entrepreneur après installation.",
];

const urgencyPoints = [
  "Aucune nouvelle demande ne sera acceptée",
  "Aucun programme fédéral de remplacement n’a été annoncé",
  "Vous perdrez les 10 250 $ du fédéral (LogisVert seul restera)",
];

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-[22px] pt-[clamp(40px,6vw,72px)] pb-[clamp(20px,3vw,32px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[120px] -right-[90px] size-[420px] max-w-[80vw] rounded-full bg-[radial-gradient(circle,rgba(190,58,43,0.18),transparent_68%)]"
        />
        <div className="relative mx-auto max-w-[900px]">
          <Reveal>
            <Link
              href="/subventions"
              className="text-brick mb-2 inline-flex items-center gap-[7px] text-[14px] font-semibold no-underline"
            >
              <ArrowLeft className="size-[15px]" /> Tous les programmes
            </Link>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="text-pine mt-1.5 font-serif text-[clamp(31px,4.8vw,54px)] leading-[1.08] tracking-[-0.015em]"
          >
            CAMT : jusqu’à 10 250 $ versés <span className="text-brick italic">avant</span> les
            travaux pour remplacer votre chauffage au mazout.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="text-moss mt-5 max-w-[58ch] text-[clamp(16px,1.6vw,18.5px)] leading-[1.65]"
          >
            Le programme fédéral le plus généreux pour les propriétaires québécois chauffés au
            mazout. Inscription possible jusqu’au 31 juillet 2026 — après cette date, c’est terminé.
          </Reveal>
          <Reveal delay={220} className="mt-7">
            <CtaLink href="/admissibilite" size="lg" className="text-[16px]">
              Vérifier mon admissibilité CAMT
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* BANNIÈRE URGENCE PERMANENTE */}
      <section className="px-[22px] pb-[clamp(28px,4vw,40px)]">
        <Reveal className="bg-brick mx-auto flex max-w-[900px] items-start gap-3.5 rounded-[18px] px-6 py-5 text-white">
          <AlarmClock className="mt-0.5 size-6 shrink-0" />
          <p className="m-0 text-[15.5px] leading-[1.55]">
            <strong>Dernière chance.</strong> Le programme CAMT n’accepte plus aucune inscription
            après le <strong>31 juillet 2026</strong>. Aucun programme fédéral de remplacement n’est
            annoncé.
          </p>
        </Reveal>
      </section>

      {/* BANNIÈRE */}
      <section className="px-[22px] pb-[clamp(12px,2vw,24px)]">
        <Reveal>
          <Photo
            src="/office-desk.jpg"
            alt="Notre équipe au travail sur les dossiers CAMT"
            className="mx-auto aspect-[5/2] max-w-[900px]"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </Reveal>
      </section>

      <div className="mx-auto max-w-[900px] px-[22px]">
        {/* Section 1 — En bref */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Le programme en bref
          </h2>
          <p className="text-moss mt-4 text-[16.5px] leading-[1.68]">
            Le{" "}
            <strong className="text-pine">
              Programme pour la Conversion Abordable du Mazout à la Thermopompe
            </strong>{" "}
            (CAMT) est une initiative de Ressources naturelles Canada destinée à aider les
            propriétaires occupants à passer du chauffage au mazout à une thermopompe
            écoénergétique.
          </p>
          <p className="text-moss mt-3.5 text-[16.5px] leading-[1.68]">
            C’est de loin la subvention la plus généreuse encore disponible au Québec en 2026 — mais
            aussi celle dont les conditions sont les plus strictes, et celle qui ferme bientôt
            définitivement.
          </p>
        </Reveal>

        {/* Section 2 — Combien */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Jusqu’à 10 250 $ — versés avant que vous ne commenciez les travaux.
          </h2>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
            <div className="border-pine/[0.08] bg-card rounded-2xl border p-[22px]">
              <div className="text-pine font-serif text-[34px] leading-none">10 000 $</div>
              <p className="text-fern mt-2 text-[14.5px]">
                Paiement initial pour l’achat et l’installation de la thermopompe.
              </p>
            </div>
            <div className="border-pine/[0.08] bg-card rounded-2xl border p-[22px]">
              <div className="text-pine font-serif text-[34px] leading-none">+ 250 $</div>
              <p className="text-fern mt-2 text-[14.5px]">
                Prime unique de Ressources naturelles Canada.
              </p>
            </div>
          </div>
          <div className="bg-pine text-cream-soft mt-[18px] flex items-start gap-3.5 rounded-[18px] p-6">
            <span className="bg-lime text-pine grid size-[46px] shrink-0 place-items-center rounded-[13px]">
              <Zap className="size-[23px]" />
            </span>
            <div>
              <h3 className="text-card mt-0 mb-1.5 text-[18px]">
                L’argent arrive AVANT les travaux
              </h3>
              <p className="text-on-pine m-0 text-[15px] leading-[1.6]">
                Vous recevez votre dépôt par virement 5 à 10 jours ouvrables après l’acceptation de
                votre dossier, puis vous avez 6 mois pour réaliser les travaux.{" "}
                <strong className="text-white">Pas besoin de sortir le cash de votre poche.</strong>
              </p>
            </div>
          </div>
          <div className="bg-sage mt-3.5 flex items-start gap-[11px] rounded-[13px] px-[18px] py-[15px]">
            <BadgeCheck className="text-forest mt-px size-[19px] shrink-0" />
            <span className="text-moss text-[14.5px]">
              <strong className="text-pine">Bonus fiscal :</strong> le CAMT est une subvention non
              imposable. Vous n’avez pas à la déclarer dans vos revenus.
            </span>
          </div>
        </Reveal>

        {/* Section 3 — Admissibilité */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine mt-0 mb-5 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Conditions cumulatives (toutes obligatoires)
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            <div className="border-pine/[0.08] bg-card rounded-[18px] border p-6">
              <h3 className="text-pine mt-0 mb-3.5 flex items-center gap-[9px] text-[16px]">
                <UserRound className="text-forest size-[19px]" /> Côté propriétaire
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {ownerConditions.map((item) => (
                  <li key={item} className="text-moss flex gap-2 text-[14.5px]">
                    <Check className="text-forest mt-0.5 size-4 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-pine/[0.08] bg-card rounded-[18px] border p-6">
              <h3 className="text-pine mt-0 mb-3.5 flex items-center gap-[9px] text-[16px]">
                <House className="text-forest size-[19px]" /> Côté maison
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {houseConditions.map((item) => (
                  <li key={item} className="text-moss flex gap-2 text-[14.5px]">
                    <Check className="text-forest mt-0.5 size-4 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-brick/[0.18] bg-card rounded-[18px] border p-6">
              <h3 className="text-pine mt-0 mb-3.5 flex items-center gap-[9px] text-[16px]">
                <CircleX className="text-brick size-[19px]" /> Inadmissibles
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {ineligible.map((item) => (
                  <li key={item} className="flex gap-2 text-[14.5px] text-[#6b3a33]">
                    <X className="text-brick mt-0.5 size-4 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Section 4 — Équipement */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Quelle thermopompe peut être financée ?
          </h2>
          <ul className="mt-[18px] flex list-none flex-col gap-[11px] p-0">
            <li className="text-moss flex gap-2.5 text-[15.5px]">
              <Check className="text-forest mt-0.5 size-[18px] shrink-0" /> Système complet
              (extérieur + intérieur) listé sous le même{" "}
              <strong className="text-pine">numéro AHRI</strong>
            </li>
            <li className="text-moss flex gap-2.5 text-[15.5px]">
              <Check className="text-forest mt-0.5 size-[18px] shrink-0" /> Figurant sur la liste
              officielle des produits admissibles de Ressources naturelles Canada
            </li>
            <li className="text-moss flex gap-2.5 text-[15.5px]">
              <Check className="text-forest mt-0.5 size-[18px] shrink-0" /> Compatible avec les
              exigences de performance climat froid au Canada
            </li>
          </ul>
          <div className="bg-blush mt-4 flex items-start gap-[11px] rounded-[13px] px-[18px] py-4">
            <TriangleAlert className="text-brick mt-px size-[19px] shrink-0" />
            <span className="text-[14.5px] text-[#6b3a33]">
              <strong className="text-pine">C’est là que la plupart des dossiers tombent.</strong>{" "}
              Un équipement non conforme = subvention refusée, même si tout le reste est en règle.
              Tous nos installateurs partenaires travaillent uniquement avec des équipements
              garantis admissibles.
            </span>
          </div>
        </Reveal>

        {/* Section 5 — Dépenses couvertes */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine mt-0 mb-[18px] font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Ce que le CAMT finance
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
            {financed.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="border-pine/[0.08] bg-card flex items-center gap-2.5 rounded-[14px] border px-[18px] py-4"
              >
                <Icon className="text-forest size-[19px] shrink-0" />
                <span className="text-moss text-[15px]">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Section 6 — Processus */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine mt-0 mb-5 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Comment ça se passe concrètement
          </h2>
          <div className="flex flex-col gap-2.5">
            {steps.map((step, i) => (
              <div
                key={step}
                className="border-pine/[0.08] bg-card flex items-start gap-3.5 rounded-[14px] border px-[19px] py-4"
              >
                <span className="bg-pine text-lime grid size-[30px] shrink-0 place-items-center rounded-full text-[14px] font-bold">
                  {i + 1}
                </span>
                <span className="text-moss text-[15.5px]">{step}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Section 7 — Urgence */}
        <Reveal
          as="section"
          className="border-pine/10 border-t pt-[clamp(28px,4vw,44px)] pb-[clamp(40px,6vw,60px)]"
        >
          <div className="bg-brick rounded-[24px] p-[clamp(28px,4vw,40px)] text-white">
            <h2 className="m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14] text-white">
              Pourquoi il faut agir maintenant
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-[#ffe3dd]">
              Le 31 juillet 2026 est le dernier jour pour vous inscrire au CAMT. Après cette date :
            </p>
            <ul className="mt-4 flex list-none flex-col gap-2.5 p-0">
              {urgencyPoints.map((point) => (
                <li key={point} className="flex gap-[9px] text-[15.5px] text-[#ffe3dd]">
                  <X className="mt-0.5 size-[18px] shrink-0" /> {point}
                </li>
              ))}
            </ul>
            <p className="mt-[18px] text-[16.5px] leading-[1.6] font-semibold text-white">
              Le délai entre l’inscription et le versement étant d’environ 2 à 4 semaines, il vous
              reste réellement quelques semaines pour démarrer la démarche.
            </p>
            <CtaLink href="/admissibilite" size="lg" variant="lime" className="mt-6 text-[16.5px]">
              Démarrer mon dossier CAMT maintenant
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
