import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Maison Verte Québec recueille et protège vos renseignements personnels, conformément à la Loi 25.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <main>
      {/* EN-TÊTE */}
      <section className="px-[22px] pt-[clamp(44px,7vw,78px)] pb-[clamp(20px,3vw,34px)]">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <Eyebrow icon={<Lock className="size-[15px]" />}>Vie privée — Loi 25</Eyebrow>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="text-pine mt-[18px] font-serif text-[clamp(30px,4.6vw,50px)] leading-[1.08] tracking-[-0.015em]"
          >
            Politique de confidentialité
          </Reveal>
          <Reveal as="p" delay={140} className="text-haze mt-3.5 text-[14px]">
            Dernière mise à jour : juin 2026
          </Reveal>
        </div>
      </section>

      {/* CORPS */}
      <section className="px-[22px] pb-[clamp(56px,8vw,90px)]">
        <Reveal className="border-pine/[0.08] bg-card mx-auto max-w-[760px] rounded-[24px] border p-[clamp(26px,5vw,46px)] shadow-[0_12px_34px_rgba(18,61,43,0.05)]">
          <p className="text-moss mb-[22px] text-[16.5px] leading-[1.7]">
            Maison Verte Québec accorde une grande importance à la protection de vos renseignements
            personnels. La présente politique explique quels renseignements nous recueillons,
            pourquoi, et comment nous les protégeons, conformément à la{" "}
            <strong className="text-pine">Loi 25</strong> (Loi modernisant des dispositions
            législatives en matière de protection des renseignements personnels) en vigueur au
            Québec.
          </p>

          <h2 className="text-pine mt-8 mb-2.5 font-serif text-[24px]">
            1. Renseignements que nous recueillons
          </h2>
          <p className="text-moss text-[16px] leading-[1.7]">
            Par l’entremise du formulaire d’admissibilité, nous recueillons uniquement les
            renseignements nécessaires à l’évaluation de votre admissibilité : votre type de
            chauffage, votre code postal, votre statut de propriétaire, votre type d’habitation, et
            — le cas échéant — votre consommation de mazout et une tranche de revenu du ménage,
            ainsi que vos coordonnées (prénom, nom, courriel, téléphone) pour le suivi.
          </p>

          <h2 className="text-pine mt-8 mb-2.5 font-serif text-[24px]">
            2. Finalités de la collecte
          </h2>
          <p className="text-moss text-[16px] leading-[1.7]">
            Ces renseignements servent exclusivement à : analyser votre admissibilité aux programmes
            de subventions, communiquer avec vous au sujet de votre demande, et vous orienter vers
            les ressources et entreprises partenaires qualifiées appropriées. Nous limitons la
            collecte au strict nécessaire.
          </p>

          <h2 className="text-pine mt-8 mb-2.5 font-serif text-[24px]">3. Consentement</h2>
          <p className="text-moss text-[16px] leading-[1.7]">
            En soumettant le formulaire, vous consentez de façon libre et éclairée à la collecte et
            au traitement de vos renseignements aux fins décrites ci-dessus. Vous pouvez retirer
            votre consentement en tout temps en nous écrivant.
          </p>

          <h2 className="text-pine mt-8 mb-2.5 font-serif text-[24px]">
            4. Communication à des tiers
          </h2>
          <p className="text-moss text-[16px] leading-[1.7]">
            Lorsque votre projet est admissible, nous pouvons transmettre vos renseignements à un
            installateur partenaire certifié RBQ de votre région afin qu’il puisse vous offrir une
            soumission et réaliser les travaux. Nous ne vendons jamais vos renseignements personnels
            et ne les communiquons à aucune autre fin commerciale.
          </p>

          <h2 className="text-pine mt-8 mb-2.5 font-serif text-[24px]">5. Conservation</h2>
          <p className="text-moss text-[16px] leading-[1.7]">
            Vos renseignements sont conservés uniquement le temps nécessaire à la réalisation des
            finalités prévues, puis détruits de façon sécuritaire, conformément à nos obligations
            légales.
          </p>

          <h2 className="text-pine mt-8 mb-2.5 font-serif text-[24px]">6. Vos droits</h2>
          <p className="text-moss text-[16px] leading-[1.7]">
            Vous avez le droit d’accéder à vos renseignements personnels, de les faire rectifier et
            de retirer votre consentement. Pour exercer ces droits, communiquez avec le responsable
            de la protection des renseignements personnels (voir la section « Nous joindre »).
          </p>

          <h2 className="text-pine mt-8 mb-2.5 font-serif text-[24px]">7. Sécurité</h2>
          <p className="text-moss text-[16px] leading-[1.7]">
            Nous mettons en place des mesures raisonnables — techniques et organisationnelles — pour
            protéger vos renseignements contre la perte, l’accès non autorisé, la divulgation ou la
            destruction.
          </p>

          <h2 className="text-pine mt-8 mb-2.5 font-serif text-[24px]">8. Modifications</h2>
          <p className="text-moss text-[16px] leading-[1.7]">
            Cette politique peut être mise à jour de temps à autre. La date de la dernière mise à
            jour figure en haut de cette page.
          </p>

          <h2 className="text-pine mt-8 mb-2.5 font-serif text-[24px]">9. Nous joindre</h2>
          <p className="text-moss text-[16px] leading-[1.7]">
            Pour toute question relative à la protection de vos renseignements personnels, écrivez
            au responsable de la protection des renseignements personnels à{" "}
            <a
              href="mailto:confidentialite@maisonvertequebec.ca"
              className="text-forest font-semibold"
            >
              confidentialite@maisonvertequebec.ca
            </a>{" "}
            ou au{" "}
            <a href="tel:+18000000000" className="text-forest font-semibold">
              1 800 000-0000
            </a>
            .
          </p>

          <p className="border-pine/10 text-haze mt-[30px] border-t pt-[22px] text-[13.5px] leading-[1.6]">
            Maison Verte Québec est un service privé indépendant et n’est affilié ni à Hydro-Québec
            ni au gouvernement du Canada. Notre service est gratuit pour les propriétaires : nous
            sommes rémunérés par une commission de nos installateurs partenaires.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
