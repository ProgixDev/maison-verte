import type { Metadata } from "next";
import { MessagesSquare } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/ui/final-cta";
import { Parallax } from "@/components/ui/parallax";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Foire aux questions",
  description:
    "Toutes vos questions sur LogisVert, le CAMT, le cumul et notre service — des réponses claires.",
  alternates: { canonical: "/faq" },
};

const groups = [
  {
    title: "Sur notre service",
    items: [
      {
        q: "C’est vraiment gratuit ? Où est le piège ?",
        a: "Aucun piège. Vous ne payez rien à Maison Verte Québec, ni à l’inscription, ni pendant l’accompagnement, ni à la fin. Nos revenus proviennent de nos installateurs partenaires, qui nous versent une commission lorsqu’un projet se concrétise. C’est le même modèle qu’un courtier hypothécaire ou un comparateur d’assurance.",
      },
      {
        q: "Vous êtes affiliés à Hydro-Québec ou au gouvernement ?",
        a: "Non. Nous sommes une entreprise privée indépendante. Notre métier est de connaître à fond les programmes officiels et d’aider les propriétaires à y accéder. Toutes nos informations proviennent des sources gouvernementales publiques.",
      },
      {
        q: "Que se passe-t-il si je ne suis pas admissible ?",
        a: "On vous le dit clairement, sans tourner autour du pot. Si aucune subvention n’est accessible pour votre situation, on vous l’explique en détail. Vous repartez sans engagement, sans appel commercial, et avec une vision claire de votre dossier.",
      },
      {
        q: "Mes informations personnelles sont protégées ?",
        a: "Oui. Nous appliquons une politique stricte de confidentialité conforme à la Loi 25 du Québec. Vos informations ne sont partagées qu’avec l’installateur partenaire de votre région, et uniquement après votre accord explicite. Aucune vente de données à des tiers.",
      },
    ],
  },
  {
    title: "Sur LogisVert",
    items: [
      {
        q: "Quel montant exact puis-je recevoir avec LogisVert ?",
        a: "Entre quelques centaines de dollars et 6 700 $, selon la puissance et l’efficacité de la thermopompe choisie. Le calcul officiel : 50 $ par 1 000 BTU/h à −8 °C pour une thermopompe ENERGY STAR, ou 120 $ par 1 000 BTU/h pour une thermopompe climat froid très haute efficacité.",
      },
      {
        q: "Je dois être client Hydro-Québec ?",
        a: "Oui, c’est une condition obligatoire. L’adresse des travaux doit avoir un compte Hydro-Québec actif.",
      },
      {
        q: "Y a-t-il une limite de revenu pour LogisVert ?",
        a: "Non, aucune. LogisVert est ouvert à tous les propriétaires, peu importe leur revenu.",
      },
      {
        q: "Je peux recevoir LogisVert si je remplace ma vieille thermopompe ?",
        a: "Oui. LogisVert s’applique aussi bien au remplacement d’une vieille thermopompe que d’un système au mazout, au propane ou aux plinthes électriques.",
      },
      {
        q: "Combien de temps avant de recevoir l’argent ?",
        a: "6 à 12 semaines après soumission d’un dossier complet, par dépôt direct.",
      },
    ],
  },
  {
    title: "Sur le CAMT",
    items: [
      {
        q: "Pourquoi le CAMT ferme-t-il le 31 juillet 2026 ?",
        a: "Le gouvernement fédéral a annoncé la fin de l’enveloppe budgétaire du programme. Aucun programme de remplacement n’a été annoncé à ce jour pour les propriétaires résidentiels.",
      },
      {
        q: "Quel est le seuil de revenu pour être admissible au CAMT ?",
        a: "Le seuil correspond au revenu médian canadien après impôt, ajusté selon la taille de votre ménage. Pour un ménage de 4 personnes, il tourne autour de 90 000 $ après impôt (à valider selon votre cas). On vérifie pour vous.",
      },
      {
        q: "Je dois absolument avoir acheté 500 L de mazout dans la dernière année ?",
        a: "Oui, c’est une condition stricte. Vous devez pouvoir prouver l’achat d’au moins 500 litres de mazout dans les 12 mois précédant votre demande, factures à l’appui.",
      },
      {
        q: "L’argent est vraiment versé avant les travaux ?",
        a: "Oui, c’est la particularité majeure du CAMT. Une fois votre dossier accepté, vous recevez le paiement initial par dépôt direct dans les 5 à 10 jours ouvrables, avant de commencer les travaux. Vous avez ensuite 6 mois pour les réaliser.",
      },
      {
        q: "La subvention CAMT est imposable ?",
        a: "Non. Les subventions fédérales versées dans le cadre du CAMT ne sont pas imposables et n’ont pas à être déclarées comme revenu.",
      },
    ],
  },
  {
    title: "Sur le cumul et l’installation",
    items: [
      {
        q: "Je peux cumuler LogisVert et CAMT ?",
        a: "Oui, totalement. Si vous chauffez au mazout et que vous êtes admissible aux deux programmes, le cumul peut atteindre 16 950 $ sur un même projet.",
      },
      {
        q: "N’importe quel installateur peut faire mon installation ?",
        a: "Non, et c’est exactement le piège dans lequel beaucoup tombent. L’installateur doit détenir la bonne licence RBQ (15.1, 15.10 ou 15.4 selon le cas), travailler avec un équipement figurant sur les listes officielles, et savoir monter un dossier conforme. Tous nos partenaires répondent à ces critères.",
      },
      {
        q: "Combien coûte une thermopompe une fois les subventions déduites ?",
        a: "Pour une conversion mazout vers thermopompe, le coût brut tourne autour de 12 000 $ à 18 000 $ selon la taille de la maison. Avec le cumul LogisVert + CAMT (jusqu’à 16 950 $), une grande partie du projet peut être couverte. Votre reste à charge dépend de votre situation.",
      },
      {
        q: "Que se passe-t-il si mon dossier est refusé ?",
        a: "Avec nous, ça n’arrive quasiment jamais — c’est tout l’intérêt de passer par un service spécialisé. Si jamais un détail bloque, nous corrigeons le dossier et le soumettons à nouveau. Pas de subvention versée = pas de commission pour nos partenaires : nous avons donc tout intérêt à ce que ça passe du premier coup.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main>
      {/* EN-TÊTE */}
      <section className="relative overflow-hidden px-[22px] pt-[clamp(44px,7vw,82px)] pb-[clamp(28px,4vw,40px)]">
        <Parallax
          aria-hidden
          distance={60}
          className="pointer-events-none absolute -top-[120px] -left-[90px] size-[420px] max-w-[80vw]"
        >
          <div className="size-full rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.26),transparent_68%)]" />
        </Parallax>
        <div className="relative mx-auto max-w-[820px] text-center">
          <Reveal>
            <Eyebrow icon={<MessagesSquare className="size-[15px]" />}>Foire aux questions</Eyebrow>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="text-pine mt-[18px] font-serif text-[clamp(32px,5vw,56px)] leading-[1.06] tracking-[-0.015em]"
          >
            Toutes vos questions, des réponses claires.
          </Reveal>
        </div>
      </section>

      {/* CATÉGORIES + ACCORDÉON */}
      <section className="px-[22px] pt-[clamp(16px,3vw,28px)] pb-[clamp(56px,8vw,80px)]">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <FaqAccordion groups={groups} defaultOpen={0} />
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <FinalCta
        title="Une question sur votre situation ?"
        subtitle="La meilleure réponse, c’est souvent de vérifier directement votre admissibilité. Gratuit, sans engagement."
        ctaLabel="Vérifier mon admissibilité"
      />
    </main>
  );
}
