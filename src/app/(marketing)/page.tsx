import {
  ArrowRight,
  BadgeCheck,
  BadgeDollarSign,
  Check,
  Clock,
  FileCheck2,
  Flame,
  House,
  Lock,
  PackageCheck,
  Snowflake,
  TriangleAlert,
} from "lucide-react";
import Link from "next/link";
import { CountUp } from "@/components/ui/count-up";
import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FinalCta } from "@/components/ui/final-cta";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";

const heroTrust = [
  { icon: Clock, label: "2 minutes" },
  { icon: Lock, label: "Sans engagement" },
  { icon: House, label: "Accompagnement au Québec" },
  { icon: BadgeCheck, label: "Partenaires certifiés RBQ" },
];

const logisVertPoints = [
  "Versé par dépôt direct",
  "Traitement : 6 à 12 semaines",
  "Aucune limite de revenu",
  "Reconduit jusqu’en 2030",
];

const steps = [
  {
    n: "01",
    title: "On identifie votre subvention",
    body: "Quelques questions simples (2 minutes). On analyse votre admissibilité à LogisVert et au CAMT et on vous indique exactement quel montant vous pouvez recevoir.",
  },
  {
    n: "02",
    title: "On monte votre dossier",
    body: "Documents requis, démarches sur les portails, suivi auprès des gouvernements : on vous accompagne jusqu’au versement. Vous n’avez pas à comprendre la paperasse.",
  },
  {
    n: "03",
    title: "On vous met en relation",
    body: "Avec un installateur certifié RBQ dont l’équipement est admissible. Votre demande de subvention est garantie d’être recevable.",
  },
];

const conditions = [
  {
    icon: PackageCheck,
    title: "Le bon équipement",
    body: "Modèle figurant sur la liste officielle : numéro AHRI valide, ENERGY STAR, certifié climat froid.",
  },
  {
    icon: BadgeCheck,
    title: "La bonne licence RBQ",
    body: "Un installateur détenant les sous-catégories exigées (15.1, 15.10 ou 15.4).",
  },
  {
    icon: FileCheck2,
    title: "Le bon dossier",
    body: "Monté exactement selon les exigences du programme et soumis dans les délais.",
  },
];

const checklist = [
  "Vous êtes propriétaire d’une maison au Québec",
  "C’est votre résidence principale",
  "Vous chauffez au mazout, aux plinthes ou avec une vieille thermopompe",
  "Vous êtes client Hydro-Québec",
];

const testimonials = [
  {
    quote:
      "« On chauffait au mazout depuis 22 ans. En 2 minutes, on a su qu’on avait droit à plus de 12 000 $. L’équipe a tout monté pour nous. »",
    name: "Marie L.",
    city: "Saint-Hyacinthe",
    amount: "12 400 $",
  },
  {
    quote:
      "« J’avais peur que ce soit une arnaque parce que c’était gratuit. Au final, dossier parfait du premier coup et dépôt Hydro 8 semaines après. »",
    name: "Jean-François D.",
    city: "Lévis",
    amount: "5 850 $",
  },
  {
    quote:
      "« Ma vieille thermopompe lâchait. J’aurais dépensé 9 000 $ tout seul. Ça m’a coûté la moitié. Pourquoi je ne suis pas passé par eux avant ? »",
    name: "Sylvie R.",
    city: "Laval",
    amount: "4 200 $",
  },
];

const faqs = [
  {
    q: "C’est vraiment gratuit ?",
    a: "Oui, totalement gratuit pour vous. Nos revenus proviennent de nos installateurs partenaires, qui nous versent une commission lorsqu’un projet se concrétise. Cela nous permet de financer l’analyse et l’accompagnement sans aucun coût pour les propriétaires.",
  },
  {
    q: "Combien de temps avant de recevoir l’argent ?",
    a: "Pour le CAMT (fédéral) : l’argent est versé avant les travaux, dans les 5 à 10 jours ouvrables après acceptation du dossier. Pour LogisVert (Hydro-Québec) : entre 6 et 12 semaines après installation et soumission complète du dossier.",
  },
  {
    q: "Je suis admissible si je chauffe à l’électricité ?",
    a: "Oui, vous pouvez recevoir LogisVert si vous remplacez vos plinthes électriques par une thermopompe efficace. Vous ne serez par contre pas admissible au CAMT, réservé exclusivement aux maisons chauffées au mazout.",
  },
  {
    q: "Que se passe-t-il après le 31 juillet 2026 ?",
    a: "Le programme CAMT (10 250 $ fédéral) prend fin à cette date — aucune nouvelle inscription après le 31 juillet. LogisVert reste actif jusqu’en 2030. Si vous chauffez au mazout, agir avant cette date vous fait potentiellement gagner 10 000 $ de plus.",
  },
];

export default function AccueilPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-[22px] pt-[clamp(36px,6vw,76px)] pb-[clamp(52px,8vw,92px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[130px] -right-[90px] size-[440px] max-w-[80vw] rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.32),transparent_68%)]"
        />
        <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-[clamp(30px,5vw,58px)]">
          <div className="min-w-[300px] flex-1 basis-[460px]">
            <Reveal>
              <Eyebrow icon={<BadgeDollarSign className="size-[15px]" />}>
                Subventions chauffage · Québec 2026
              </Eyebrow>
            </Reveal>
            <Reveal
              as="h1"
              delay={80}
              className="text-pine mt-5 font-serif text-[clamp(31px,4.8vw,52px)] leading-[1.1] tracking-[-0.015em]"
            >
              On trouve votre subvention.
              <br />
              On vous aide à l’obtenir.
              <br />
              <span className="text-forest">
                On vous met en relation avec l’entreprise qui la rend possible.
              </span>
            </Reveal>
            <Reveal
              as="p"
              delay={160}
              className="text-moss mt-[22px] max-w-[36em] text-[clamp(16px,1.6vw,18px)] leading-[1.6]"
            >
              Jusqu’à <strong className="text-pine">16 950 $</strong> entre les programmes LogisVert
              (Hydro-Québec) et CAMT (Gouvernement du Canada) pour remplacer votre système de
              chauffage. En 2 minutes, on identifie vos subventions, on monte votre dossier, et on
              vous connecte à un installateur certifié RBQ.{" "}
              <strong className="text-pine">Service 100 % gratuit pour les propriétaires.</strong>
            </Reveal>
            <Reveal delay={240} className="mt-[30px]">
              <CtaLink href="/admissibilite" size="lg" className="text-[16.5px]">
                Vérifier mon admissibilité gratuitement
              </CtaLink>
            </Reveal>
            <Reveal
              delay={320}
              className="text-fern mt-[26px] flex flex-wrap gap-x-5 gap-y-3.5 text-[14px] font-medium"
            >
              {heroTrust.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-[7px]">
                  <Icon className="text-forest size-4" /> {label}
                </span>
              ))}
            </Reveal>
          </div>

          <div className="relative min-w-[280px] flex-1 basis-[360px]">
            <div className="relative">
              <div
                aria-hidden
                className="bg-lime absolute -bottom-5 -left-5 h-[72%] w-[58%] -rotate-6 rounded-[30px]"
              />
              <div className="border-pine/10 bg-pine relative z-[1] aspect-[4/5] overflow-hidden rounded-[26px] border shadow-[0_30px_60px_rgba(18,61,43,0.16)]">
                <video
                  className="size-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Maison Verte Québec — thermopompe et maison"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <Reveal
              delay={300}
              className="border-pine/[0.08] bg-card absolute top-3.5 -left-3 z-[2] rounded-[18px] border px-[18px] py-3.5 shadow-[0_16px_36px_rgba(18,61,43,0.18)]"
            >
              <div className="text-stone text-[12px] font-semibold">jusqu’à</div>
              <div className="text-pine font-serif text-[30px] leading-[1.04]">
                <CountUp to={16950} suffix=" $" />
              </div>
              <div className="text-stone mt-[3px] text-[12px]">LogisVert + CAMT cumulés</div>
            </Reveal>
            <Reveal
              delay={420}
              className="bg-pine text-cream-soft absolute -right-2.5 bottom-1 z-[2] flex gap-3.5 rounded-2xl px-[15px] py-[11px] shadow-[0_16px_36px_rgba(18,61,43,0.26)]"
            >
              <div>
                <div className="text-lime font-serif text-[18px] leading-none">6 700 $</div>
                <div className="text-on-pine-soft mt-[3px] text-[11px]">LogisVert</div>
              </div>
              <div className="w-px bg-white/15" />
              <div>
                <div className="text-lime font-serif text-[18px] leading-none">10 250 $</div>
                <div className="text-on-pine-soft mt-[3px] text-[11px]">CAMT</div>
              </div>
            </Reveal>
          </div>
        </div>
        <p className="text-haze relative mx-auto mt-[30px] max-w-[1200px] text-[12.5px]">
          Montants indicatifs 2026, sous réserve d’admissibilité.
        </p>
      </section>

      {/* LE PROBLÈME */}
      <section className="px-[22px] py-[clamp(56px,8vw,100px)]">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <Eyebrow variant="brick">Le problème</Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="text-pine mt-[18px] font-serif text-[clamp(28px,4.2vw,46px)] leading-[1.1] tracking-[-0.012em]"
          >
            Des millions de dollars de subventions, jamais réclamés.
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="text-moss mx-auto mt-[22px] max-w-[60ch] text-[clamp(16px,1.6vw,18px)] leading-[1.68]"
          >
            Chaque année, les gouvernements québécois et canadien débloquent des centaines de
            millions de dollars pour aider les propriétaires à moderniser leur chauffage. Et chaque
            année, une grande partie de cet argent reste sur la table.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="text-moss mx-auto mt-4 max-w-[60ch] text-[clamp(16px,1.6vw,18px)] leading-[1.68]"
          >
            La raison est simple :{" "}
            <strong className="text-pine">
              les programmes sont compliqués, les conditions techniques pointues, et la moindre
              erreur dans le dossier entraîne un refus.
            </strong>{" "}
            Résultat : des milliers de propriétaires paient leur thermopompe au prix fort, alors
            qu’ils auraient pu recevoir plusieurs milliers de dollars en retour.
          </Reveal>
          <Reveal
            as="p"
            delay={200}
            className="text-forest mx-auto mt-[22px] max-w-[46ch] font-serif text-[clamp(20px,2.6vw,26px)] leading-[1.4] italic"
          >
            Notre rôle, c’est d’éviter que ça vous arrive.
          </Reveal>
        </div>
      </section>

      {/* SUR LE TERRAIN */}
      <section className="px-[22px] pb-[clamp(56px,8vw,90px)]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto mb-10 max-w-[680px] text-center">
            <Reveal>
              <Eyebrow>Sur le terrain</Eyebrow>
            </Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="text-pine mt-4 font-serif text-[clamp(27px,4vw,44px)] leading-[1.1] tracking-[-0.012em]"
            >
              La bonne thermopompe, posée par le bon installateur.
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="text-moss mx-auto mt-4 max-w-[58ch] text-[clamp(15px,1.6vw,17px)] leading-[1.6]"
            >
              C’est tout ce qui sépare une subvention versée d’une subvention refusée. Voici le type
              d’équipement admissible que nos partenaires installent, sur des maisons comme la
              vôtre.
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
            <Photo
              src="/thermopompe-maison-brique.jpg"
              alt="Thermopompe installée à côté d’une maison de brique"
              className="aspect-[4/3]"
              sizes="(max-width: 768px) 50vw, 260px"
            />
            <Photo
              src="/maison-hiver.jpg"
              alt="Maison québécoise sous un ciel d’hiver"
              className="aspect-[4/3]"
              sizes="(max-width: 768px) 50vw, 260px"
            />
            <Photo
              src="/thermopompe-maison-moderne.jpg"
              alt="Thermopompe devant une maison moderne"
              className="aspect-[4/3]"
              sizes="(max-width: 768px) 50vw, 260px"
            />
            <Photo
              src="/thermopompe-murale.jpg"
              alt="Thermopompe murale haute efficacité"
              className="aspect-[4/3]"
              sizes="(max-width: 768px) 50vw, 260px"
            />
          </Reveal>
        </div>
      </section>

      {/* DEUX PROGRAMMES */}
      <section className="px-[22px] pt-[clamp(20px,3vw,32px)] pb-[clamp(56px,8vw,90px)]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto mb-10 max-w-[680px] text-center">
            <Reveal>
              <Eyebrow>Ce que vous pouvez recevoir</Eyebrow>
            </Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="text-pine mt-4 font-serif text-[clamp(27px,4vw,44px)] leading-[1.1] tracking-[-0.012em]"
            >
              Deux programmes. Cumulables. Jusqu’à 16 950 $.
            </Reveal>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-5">
            {/* LogisVert */}
            <Reveal className="border-pine/10 bg-card flex flex-col rounded-3xl border p-[30px] shadow-[0_12px_32px_rgba(18,61,43,0.06)]">
              <div className="flex items-center justify-between gap-3">
                <span className="bg-mint text-pine grid size-[50px] place-items-center rounded-[14px]">
                  <Snowflake className="size-6" />
                </span>
                <span className="bg-leaf text-forest inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold">
                  <span className="bg-forest size-[7px] rounded-full" /> Programme actif
                </span>
              </div>
              <h3 className="text-pine mt-[18px] mb-0.5 font-serif text-[24px]">LogisVert</h3>
              <div className="text-forest text-[13px] font-semibold tracking-[0.04em] uppercase">
                Hydro-Québec
              </div>
              <div className="text-pine mt-3.5 mb-0.5 font-serif text-[40px] leading-none">
                Jusqu’à 6 700 $
              </div>
              <p className="text-fern mt-3 mb-[18px] text-[15px] leading-[1.55]">
                Pour l’installation d’une thermopompe efficace dans votre résidence principale.
              </p>
              <ul className="mb-[22px] flex flex-1 list-none flex-col gap-2.5 p-0">
                {logisVertPoints.map((point) => (
                  <li key={point} className="text-moss flex items-start gap-2.5 text-[14.5px]">
                    <Check className="text-forest mt-0.5 size-[17px] shrink-0" /> {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/subventions/logisvert"
                className="text-pine inline-flex items-center gap-2 text-[15px] font-bold"
              >
                En savoir plus <ArrowRight className="size-4" />
              </Link>
            </Reveal>

            {/* CAMT */}
            <Reveal
              delay={100}
              className="border-brick/20 bg-card flex flex-col rounded-3xl border p-[30px] shadow-[0_12px_32px_rgba(18,61,43,0.06)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="bg-blush text-brick grid size-[50px] place-items-center rounded-[14px]">
                  <Flame className="size-6" />
                </span>
                <span className="bg-blush text-brick inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold">
                  <span className="bg-brick size-[7px] rounded-full" /> Ferme le 31 juillet 2026
                </span>
              </div>
              <h3 className="text-pine mt-[18px] mb-0.5 font-serif text-[24px]">CAMT</h3>
              <div className="text-brick text-[13px] font-semibold tracking-[0.04em] uppercase">
                Gouvernement du Canada
              </div>
              <div className="text-pine mt-3.5 mb-0.5 font-serif text-[40px] leading-none">
                Jusqu’à 10 250 $
              </div>
              <p className="text-fern mt-3 mb-[18px] text-[15px] leading-[1.55]">
                Pour remplacer votre système de chauffage au mazout par une thermopompe.
              </p>
              <ul className="mb-[22px] flex flex-1 list-none flex-col gap-2.5 p-0">
                <li className="text-moss flex items-start gap-2.5 text-[14.5px]">
                  <Check className="text-brick mt-0.5 size-[17px] shrink-0" />{" "}
                  <strong className="text-pine">Argent versé AVANT les travaux</strong>
                </li>
                <li className="text-moss flex items-start gap-2.5 text-[14.5px]">
                  <Check className="text-brick mt-0.5 size-[17px] shrink-0" /> Subvention non
                  imposable
                </li>
                <li className="text-moss flex items-start gap-2.5 text-[14.5px]">
                  <Check className="text-brick mt-0.5 size-[17px] shrink-0" /> Admissibilité selon
                  le revenu du ménage
                </li>
                <li className="text-moss flex items-start gap-2.5 text-[14.5px]">
                  <Check className="text-brick mt-0.5 size-[17px] shrink-0" /> Dernier jour : 31
                  juillet 2026
                </li>
              </ul>
              <Link
                href="/subventions/camt"
                className="text-pine inline-flex items-center gap-2 text-[15px] font-bold"
              >
                En savoir plus <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal
            as="p"
            className="text-moss mx-auto mt-7 max-w-[60ch] text-center text-[clamp(15px,1.6vw,17px)]"
          >
            Combinés, ces deux programmes peuvent couvrir{" "}
            <strong className="text-pine">jusqu’à 16 950 $</strong> de votre projet pour un
            propriétaire admissible.
          </Reveal>
        </div>
      </section>

      {/* COMMENT ÇA FONCTIONNE */}
      <section className="bg-sage px-[22px] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto mb-11 max-w-[720px] text-center">
            <Reveal>
              <Eyebrow className="bg-forest/[0.12]">Comment ça fonctionne</Eyebrow>
            </Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="text-pine mt-4 font-serif text-[clamp(27px,4vw,44px)] leading-[1.1] tracking-[-0.012em]"
            >
              On s’occupe de tout. Vous, vous recevez votre chèque.
            </Reveal>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {steps.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 100}
                className="border-pine/[0.08] bg-card rounded-[22px] border px-[26px] py-[30px]"
              >
                <div className="text-lime font-serif text-[46px] leading-none [-webkit-text-stroke:1.5px_var(--forest)]">
                  {step.n}
                </div>
                <h3 className="text-pine mt-3.5 mb-2 text-[20px]">{step.title}</h3>
                <p className="text-fern m-0 text-[15px] leading-[1.6]">{step.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-[34px] text-center">
            <CtaLink href="/admissibilite">Démarrer ma vérification</CtaLink>
          </Reveal>
        </div>
      </section>

      {/* DIFFÉRENCIATEUR */}
      <section className="bg-pine text-cream-soft relative overflow-hidden px-[22px] py-[clamp(60px,8vw,104px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[120px] -right-[90px] size-[400px] max-w-[80vw] rounded-full bg-[radial-gradient(circle,rgba(190,58,43,0.2),transparent_66%)]"
        />
        <div className="relative mx-auto max-w-[920px]">
          <div className="mx-auto mb-10 max-w-[680px] text-center">
            <Reveal>
              <Eyebrow
                variant="onDark"
                className="text-[#f6b8ae]"
                icon={<TriangleAlert className="size-[15px]" />}
              >
                Le piège à éviter
              </Eyebrow>
            </Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="text-card mt-4 font-serif text-[clamp(27px,4vw,44px)] leading-[1.12] tracking-[-0.012em]"
            >
              Un mauvais installateur = aucune subvention.
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="text-on-pine-soft mx-auto mt-[18px] max-w-[58ch] text-[clamp(16px,1.6vw,17.5px)] leading-[1.62]"
            >
              Pour qu’Hydro-Québec ou Ressources naturelles Canada versent votre subvention, trois
              conditions doivent être réunies <strong className="text-card">en même temps</strong> :
            </Reveal>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {conditions.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className="rounded-[18px] border border-white/[0.09] bg-white/5 p-6"
              >
                <span className="bg-lime text-pine mb-3.5 grid size-11 place-items-center rounded-xl">
                  <Icon className="size-[22px]" />
                </span>
                <h3 className="text-card mb-1.5 text-[16.5px]">{title}</h3>
                <p className="m-0 text-[14px] leading-[1.5] text-[#9db596]">{body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal
            as="p"
            className="mx-auto mt-[30px] max-w-[50ch] text-center font-serif text-[clamp(18px,2.4vw,24px)] text-[#f6b8ae] italic"
          >
            Une seule erreur sur l’une de ces conditions = subvention refusée.
          </Reveal>
          <Reveal
            as="p"
            className="text-on-pine-soft mx-auto mt-[18px] max-w-[60ch] text-center text-[15.5px] leading-[1.62]"
          >
            Notre métier : vérifier ces trois conditions pour vous, et vous mettre en relation
            uniquement avec des partenaires dont les équipements et les licences sont conformes aux
            exigences gouvernementales.
          </Reveal>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="px-[22px] py-[clamp(60px,8vw,100px)]">
        <div className="mx-auto flex max-w-[880px] flex-wrap items-center gap-[clamp(28px,5vw,52px)]">
          <Reveal className="min-w-[260px] flex-1 basis-[280px]">
            <Eyebrow>Admissibilité</Eyebrow>
            <h2 className="text-pine mt-4 font-serif text-[clamp(26px,3.6vw,40px)] leading-[1.12] tracking-[-0.012em]">
              Vous êtes probablement admissible si…
            </h2>
            <p className="text-moss mt-4 text-[16px] leading-[1.6]">
              Si vous cochez ces 4 cases, vous avez probablement droit à au moins un programme.
              Vérifions ensemble en 2 minutes.
            </p>
            <CtaLink href="/admissibilite" className="mt-6">
              Vérifier mon admissibilité
            </CtaLink>
          </Reveal>
          <Reveal
            delay={120}
            className="border-pine/[0.08] bg-card min-w-[260px] flex-1 basis-[300px] rounded-[22px] border px-[22px] py-3.5 shadow-[0_12px_32px_rgba(18,61,43,0.06)]"
          >
            {checklist.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3.5 py-4 ${i < checklist.length - 1 ? "border-pine/[0.07] border-b" : ""}`}
              >
                <span className="bg-leaf text-forest grid size-[30px] shrink-0 place-items-center rounded-full">
                  <Check className="size-[18px]" />
                </span>
                <span className="text-pine text-[15.5px] font-semibold">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="px-[22px] pt-[clamp(40px,6vw,64px)] pb-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto mb-10 max-w-[680px] text-center">
            <Reveal>
              <Eyebrow>Témoignages</Eyebrow>
            </Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="text-pine mt-4 font-serif text-[clamp(27px,4vw,44px)] leading-[1.1] tracking-[-0.012em]"
            >
              Ils ont reçu leur chèque grâce à nous.
            </Reveal>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 100}
                className="border-pine/[0.08] bg-card flex flex-col rounded-[22px] border p-7 shadow-[0_10px_30px_rgba(18,61,43,0.05)]"
              >
                <div className="text-gold text-[17px] tracking-[2px]">★★★★★</div>
                <p className="text-pine mt-3.5 mb-[18px] flex-1 font-serif text-[18px] leading-[1.5]">
                  {t.quote}
                </p>
                <div className="border-pine/[0.08] flex items-center justify-between gap-2.5 border-t pt-3.5">
                  <div>
                    <div className="text-pine text-[15px] font-bold">{t.name}</div>
                    <div className="text-stone text-[13px]">{t.city}</div>
                  </div>
                  <span className="bg-leaf text-forest rounded-full px-3 py-1.5 text-[14px] font-bold whitespace-nowrap">
                    {t.amount}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ COURTE */}
      <section className="px-[22px] pb-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[820px]">
          <div className="mb-9 text-center">
            <Reveal>
              <Eyebrow>Questions fréquentes</Eyebrow>
            </Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="text-pine mt-4 font-serif text-[clamp(27px,4vw,44px)] leading-[1.1] tracking-[-0.012em]"
            >
              Les questions qu’on nous pose le plus souvent
            </Reveal>
          </div>
          <Reveal>
            <FaqAccordion groups={[{ items: faqs }]} />
          </Reveal>
          <Reveal className="mt-[26px] text-center">
            <Link
              href="/faq"
              className="text-pine hover:text-forest inline-flex items-center gap-2 text-[15.5px] font-semibold"
            >
              Voir toutes les questions <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <FinalCta
        title="En 2 minutes, vous saurez combien vous pouvez recevoir."
        subtitle="Pas de paperasse à remplir. Pas d’appel commercial intrusif. Juste un calcul personnalisé, basé sur votre maison. Vous décidez ensuite si vous voulez aller plus loin."
        ctaLabel="Vérifier mon admissibilité gratuitement"
        note="Sans engagement · 100 % gratuit · Réponse immédiate"
      />
    </main>
  );
}
