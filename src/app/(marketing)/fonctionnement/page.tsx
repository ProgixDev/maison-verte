import type { Metadata } from "next";
import {
  Banknote,
  Check,
  ClipboardList,
  FolderCheck,
  Handshake,
  PhoneCall,
  Route,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FinalCta } from "@/components/ui/final-cta";
import { Parallax } from "@/components/ui/parallax";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Comment ça fonctionne",
  description:
    "De l’analyse d’admissibilité au versement de votre subvention : les 5 étapes de notre accompagnement.",
  alternates: { canonical: "/fonctionnement" },
};

const installerPoints = [
  "Licence RBQ active et conforme",
  "Équipements certifiés ENERGY STAR, sur les listes officielles",
  "Habitué à monter les dossiers LogisVert et CAMT",
  "Réputation et garanties vérifiées par nos soins",
];

export default function FonctionnementPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-[22px] pt-[clamp(44px,7vw,82px)] pb-[clamp(28px,4vw,44px)]">
        <Parallax
          aria-hidden
          distance={60}
          className="pointer-events-none absolute -top-[120px] -left-[90px] size-[420px] max-w-[80vw]"
        >
          <div className="size-full rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.26),transparent_68%)]" />
        </Parallax>
        <div className="relative mx-auto max-w-[840px] text-center">
          <Reveal>
            <Eyebrow className="bg-forest/10" icon={<Route className="size-[15px]" />}>
              Comment ça fonctionne
            </Eyebrow>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="text-pine mt-[18px] font-serif text-[clamp(31px,4.8vw,54px)] leading-[1.08] tracking-[-0.015em]"
          >
            Notre métier : faire pour vous ce que les gouvernements ne facilitent pas.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="text-moss mx-auto mt-5 max-w-[60ch] text-[clamp(16px,1.6vw,18.5px)] leading-[1.65]"
          >
            Trouver la bonne subvention, monter un dossier conforme, choisir un installateur
            certifié. Trois zones où la plupart des propriétaires perdent leur subvention. On
            s’occupe des trois.
          </Reveal>
        </div>
      </section>

      {/* BANDE PHOTOS */}
      <section className="px-[22px] pb-[clamp(8px,2vw,20px)]">
        <Reveal className="mx-auto grid max-w-[940px] grid-cols-1 gap-3.5 sm:grid-cols-2">
          <Photo
            src="/expertise.jpg"
            alt="Montage d’un dossier de subvention par notre équipe"
            className="aspect-[4/3]"
            sizes="(max-width: 640px) 100vw, 460px"
            priority
          />
          <Photo
            src="/meeting.jpg"
            alt="Validation du dossier avec un conseiller"
            className="aspect-[4/3]"
            sizes="(max-width: 640px) 100vw, 460px"
          />
        </Reveal>
      </section>

      {/* LES 5 ÉTAPES */}
      <section className="px-[22px] pt-[clamp(28px,4vw,48px)] pb-[clamp(40px,6vw,60px)]">
        <div className="relative mx-auto max-w-[820px]">
          <div
            aria-hidden
            className="absolute top-12 bottom-12 left-[35px] z-0 w-0.5 bg-[linear-gradient(#2E7D33,rgba(46,125,51,0.12))]"
          />

          {/* Étape 1 */}
          <Reveal delay={0} className="relative z-[1] mb-5 flex items-start gap-[22px]">
            <span className="bg-pine text-lime grid size-[72px] shrink-0 place-items-center rounded-full font-serif text-[28px] shadow-[0_0_0_8px_var(--cream)]">
              1
            </span>
            <div className="border-pine/[0.08] bg-card flex-1 rounded-[20px] border p-[26px] shadow-[0_10px_30px_rgba(18,61,43,0.05)]">
              <div className="mb-2 flex flex-wrap items-center gap-2.5">
                <ClipboardList className="text-forest size-5" />
                <h2 className="text-pine m-0 text-[20px]">Analyse d’admissibilité</h2>
                <span className="bg-leaf text-forest rounded-full px-2.5 py-1 text-[12px] font-bold">
                  2 min en ligne
                </span>
              </div>
              <p className="text-moss m-0 text-[15.5px] leading-[1.65]">
                Vous remplissez notre formulaire — 5 à 7 questions simples. Aucune information
                financière sensible à cette étape. Dans les minutes qui suivent : à quels programmes
                vous êtes admissible, quel montant estimé, et les prochaines étapes.{" "}
                <strong className="text-pine">
                  Sans engagement, sans appel commercial intrusif.
                </strong>
              </p>
            </div>
          </Reveal>

          {/* Étape 2 */}
          <Reveal delay={90} className="relative z-[1] mb-5 flex items-start gap-[22px]">
            <span className="bg-pine text-lime grid size-[72px] shrink-0 place-items-center rounded-full font-serif text-[28px] shadow-[0_0_0_8px_var(--cream)]">
              2
            </span>
            <div className="border-pine/[0.08] bg-card flex-1 rounded-[20px] border p-[26px] shadow-[0_10px_30px_rgba(18,61,43,0.05)]">
              <div className="mb-2 flex flex-wrap items-center gap-2.5">
                <PhoneCall className="text-forest size-5" />
                <h2 className="text-pine m-0 text-[20px]">Validation par un conseiller</h2>
                <span className="bg-leaf text-forest rounded-full px-2.5 py-1 text-[12px] font-bold">
                  appel de 15 min
                </span>
              </div>
              <p className="text-moss m-0 text-[15.5px] leading-[1.65]">
                Si vous voulez aller plus loin, un conseiller vous rappelle sous 24 h : vérification
                précise de votre admissibilité, estimation chiffrée personnalisée, explication des
                conditions techniques, réponses à vos questions. À la fin, vous savez exactement où
                vous en êtes — et vous décidez de la suite.
              </p>
            </div>
          </Reveal>

          {/* Étape 3 */}
          <Reveal delay={180} className="relative z-[1] mb-5 flex items-start gap-[22px]">
            <span className="bg-pine text-lime grid size-[72px] shrink-0 place-items-center rounded-full font-serif text-[28px] shadow-[0_0_0_8px_var(--cream)]">
              3
            </span>
            <div className="border-pine/[0.08] bg-card flex-1 rounded-[20px] border p-[26px] shadow-[0_10px_30px_rgba(18,61,43,0.05)]">
              <div className="mb-2 flex items-center gap-2.5">
                <Handshake className="text-forest size-5" />
                <h2 className="text-pine m-0 text-[20px]">
                  Mise en relation avec un installateur partenaire
                </h2>
              </div>
              <p className="text-moss mt-0 mb-3 text-[15.5px] leading-[1.65]">
                Un installateur de votre région qui remplit toutes les conditions pour que votre
                subvention soit recevable :
              </p>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {installerPoints.map((point) => (
                  <li key={point} className="text-moss flex gap-2 text-[14.5px]">
                    <Check className="text-forest mt-0.5 size-4 shrink-0" /> {point}
                  </li>
                ))}
              </ul>
              <p className="text-stone mt-3 mb-0 text-[14.5px]">
                Vous comparez, vous décidez. Aucune obligation d’aller jusqu’au bout.
              </p>
            </div>
          </Reveal>

          {/* Étape 4 */}
          <Reveal delay={270} className="relative z-[1] mb-5 flex items-start gap-[22px]">
            <span className="bg-pine text-lime grid size-[72px] shrink-0 place-items-center rounded-full font-serif text-[28px] shadow-[0_0_0_8px_var(--cream)]">
              4
            </span>
            <div className="border-pine/[0.08] bg-card flex-1 rounded-[20px] border p-[26px] shadow-[0_10px_30px_rgba(18,61,43,0.05)]">
              <div className="mb-2 flex items-center gap-2.5">
                <FolderCheck className="text-forest size-5" />
                <h2 className="text-pine m-0 text-[20px]">Montage et suivi du dossier</h2>
              </div>
              <p className="text-moss m-0 text-[15.5px] leading-[1.65]">
                Une fois l’installation décidée, on prend en charge votre dossier : compilation des
                documents, soumission sur les portails Hydro-Québec et/ou Maisons plus vertes, suivi
                du traitement et relances.{" "}
                <strong className="text-pine">Vous, vous attendez juste votre dépôt.</strong>
              </p>
            </div>
          </Reveal>

          {/* Étape 5 */}
          <Reveal delay={360} className="relative z-[1] flex items-start gap-[22px]">
            <span className="bg-lime text-pine grid size-[72px] shrink-0 place-items-center rounded-full font-serif text-[28px] shadow-[0_0_0_8px_var(--cream)]">
              5
            </span>
            <div className="bg-pine text-cream-soft flex-1 rounded-[20px] p-[26px] shadow-[0_12px_32px_rgba(18,61,43,0.12)]">
              <div className="mb-2.5 flex items-center gap-2.5">
                <Banknote className="text-lime size-5" />
                <h2 className="text-card m-0 text-[20px]">Versement de la subvention</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex-[1_1_200px] rounded-[13px] border border-white/10 bg-white/5 p-[15px]">
                  <div className="text-lime mb-[3px] text-[14px] font-bold">CAMT</div>
                  <div className="text-on-pine text-[14px]">
                    5 à 10 jours ouvrables après acceptation, AVANT les travaux.
                  </div>
                </div>
                <div className="flex-[1_1_200px] rounded-[13px] border border-white/10 bg-white/5 p-[15px]">
                  <div className="text-lime mb-[3px] text-[14px] font-bold">LogisVert</div>
                  <div className="text-on-pine text-[14px]">
                    6 à 12 semaines après installation et dossier complet.
                  </div>
                </div>
              </div>
              <p className="text-cream-soft mt-3.5 mb-0 text-[15px] font-semibold">
                Notre mission est terminée quand vous avez l’argent.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <FinalCta
        title="Prêt à découvrir ce qui vous attend ?"
        ctaLabel="Démarrer mon analyse d’admissibilité"
      />
    </main>
  );
}
