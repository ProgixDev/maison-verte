import type { Metadata } from "next";
import {
  BadgeCheck,
  Eye,
  FileCheck2,
  HandHeart,
  Handshake,
  Scale,
  Search,
  Sprout,
  Target,
} from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Parallax } from "@/components/ui/parallax";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Notre mission : que plus aucun propriétaire québécois ne laisse son argent sur la table.",
  alternates: { canonical: "/a-propos" },
};

const services = [
  {
    icon: Search,
    badge: "bg-lime",
    title: "Trouver votre subvention",
    body: "Parmi les programmes actifs au Québec (LogisVert, CAMT et toute mise à jour des programmes à venir).",
  },
  {
    icon: FileCheck2,
    badge: "bg-mint",
    title: "Vous aider à l’obtenir",
    body: "En montant un dossier conforme dès le premier dépôt — c’est notre cœur de métier.",
  },
  {
    icon: Handshake,
    badge: "bg-lime",
    title: "Vous mettre en relation",
    body: "Avec un installateur dont l’équipement et les licences sont conformes aux critères officiels.",
  },
];

const valeurs = [
  {
    icon: Eye,
    badge: "bg-lime",
    title: "Clarté",
    body: "Des chiffres réels, des conditions précises, des délais honnêtes. Pas de promesses gonflées.",
  },
  {
    icon: Target,
    badge: "bg-mint",
    title: "Rigueur",
    body: "On ne monte que des dossiers qui passent. Notre réputation dépend du taux de succès de nos clients.",
  },
  {
    icon: Scale,
    badge: "bg-mint",
    title: "Indépendance",
    body: "On ne pousse aucune marque en particulier. Le seul critère : ce qui vous fait recevoir votre subvention.",
  },
  {
    icon: HandHeart,
    badge: "bg-lime",
    title: "Accessibilité",
    body: "Les subventions doivent profiter à tous, pas seulement à ceux qui ont le temps de déchiffrer la paperasse.",
  },
];

export default function AProposPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-[22px] pt-[clamp(44px,7vw,82px)] pb-[clamp(28px,4vw,44px)]">
        <Parallax
          aria-hidden
          distance={70}
          className="pointer-events-none absolute -top-[120px] -right-[90px] size-[420px] max-w-[80vw]"
        >
          <div className="size-full rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.26),transparent_68%)]" />
        </Parallax>
        <div className="relative mx-auto max-w-[840px] text-center">
          <Reveal>
            <Eyebrow icon={<Sprout className="size-[15px]" />}>À propos</Eyebrow>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="text-pine mt-[18px] font-serif text-[clamp(31px,4.8vw,54px)] leading-[1.08] tracking-[-0.015em]"
          >
            Que plus aucun propriétaire ne laisse son argent sur la table.
          </Reveal>
        </div>
      </section>

      {/* BANNIÈRE ÉQUIPE */}
      <section className="px-[22px] pb-[clamp(20px,3vw,36px)]">
        <Reveal>
          <Photo
            src="/team-strategy.jpg"
            alt="L’équipe Maison Verte Québec en réunion de travail"
            className="mx-auto aspect-[2/1] max-w-[1000px]"
            sizes="(max-width: 1000px) 100vw, 1000px"
            priority
          />
        </Reveal>
      </section>

      {/* COLONNE PROSE */}
      <div className="mx-auto max-w-[840px] px-[22px]">
        {/* Notre histoire */}
        <Reveal as="section" className="py-[clamp(28px,4vw,44px)]">
          <h2 className="text-pine m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
            Notre histoire
          </h2>
          <p className="text-moss mt-4 text-[16.5px] leading-[1.7]">
            Chaque année au Québec, des dizaines de milliers de propriétaires ont droit à des
            subventions énergétiques qu’ils ne réclament jamais. Pas par manque d’envie — mais parce
            que les programmes sont complexes, les conditions techniques pointues, et les
            installateurs ne se valent pas tous face aux exigences des gouvernements.
          </p>
          <p className="text-moss mt-3.5 text-[16.5px] leading-[1.7]">
            Nous avons fondé Maison Verte Québec après avoir vu trop de propriétaires se faire
            refuser des subventions auxquelles ils avaient droit, simplement parce qu’un détail
            n’était pas conforme : mauvais numéro AHRI, installateur sans la bonne sous-catégorie
            RBQ, modèle de thermopompe retiré de la liste officielle deux mois plus tôt.
          </p>
          <p className="text-moss mt-3.5 text-[16.5px] leading-[1.7]">
            À chaque refus, c’est 5 000 $, 10 000 $, parfois 15 000 $ qui partent en fumée. Et
            derrière chaque dossier, une famille qui pensait bien faire.
          </p>
        </Reveal>

        {/* Trois services en un */}
        <section className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <Reveal
            as="h2"
            className="text-pine mt-0 mb-[22px] font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]"
          >
            Maison Verte Québec, c’est trois services en un
          </Reveal>
          <div className="flex flex-col gap-3.5">
            {services.map(({ icon: Icon, badge, title, body }, i) => (
              <Reveal
                key={title}
                delay={i * 90}
                variant="left"
                className="border-pine/[0.08] bg-card flex items-start gap-4 rounded-[18px] border p-[22px]"
              >
                <span
                  className={`grid size-[46px] shrink-0 place-items-center rounded-[13px] ${badge} text-pine`}
                >
                  <Icon className="size-[22px]" />
                </span>
                <div>
                  <h3 className="text-pine mt-0 mb-[5px] text-[18px]">{title}</h3>
                  <p className="text-fern m-0 text-[15px] leading-[1.6]">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="text-moss mt-[18px] text-[16px] leading-[1.65]">
            Pas de vente directe. Pas de pression. Pas de devis non sollicités. Juste un service qui
            simplifie un parcours que les gouvernements ont laissé complexe.
          </Reveal>
        </section>

        {/* Modèle économique */}
        <Reveal as="section" className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <div className="bg-pine text-cream-soft relative overflow-hidden rounded-[24px] px-[clamp(28px,4vw,42px)] py-[clamp(28px,4vw,42px)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-[90px] -left-[70px] size-[300px] rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.16),transparent_66%)]"
            />
            <div className="relative">
              <span className="text-lime inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.06em] uppercase">
                <BadgeCheck className="size-[15px]" /> Modèle transparent
              </span>
              <h2 className="text-card mt-3 mb-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]">
                Notre service est 100 % gratuit pour les propriétaires.
              </h2>
              <p className="text-on-pine mt-4 text-[16px] leading-[1.7]">
                Nous sommes rémunérés par nos installateurs partenaires, qui acceptent de partager
                une partie de leur marge avec nous parce que nous leur apportons des clients dont le
                dossier est déjà qualifié, le projet déjà cadré, et l’admissibilité déjà vérifiée.
              </p>
              <p className="text-on-pine mt-3.5 text-[16px] leading-[1.7]">
                Cette transparence est importante pour nous.{" "}
                <strong className="text-white">Vous ne payez rien, vous ne devez rien</strong>, et
                vous gardez la totalité du contrôle sur votre décision finale.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Notre équipe */}
        <section className="border-pine/10 border-t py-[clamp(28px,4vw,44px)]">
          <Reveal>
            <Eyebrow>Notre équipe</Eyebrow>
          </Reveal>
          <Reveal
            as="p"
            delay={60}
            className="text-moss mt-4 mb-5 max-w-[60ch] text-[16px] leading-[1.65]"
          >
            Une équipe d’ici, qui connaît les programmes sur le bout des doigts et qui se bat pour
            que chaque dossier passe du premier coup.
          </Reveal>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
            {[
              {
                src: "/advisor-chat.jpg",
                alt: "Deux membres de l’équipe en discussion",
                cls: "",
                sizes: "(max-width: 640px) 50vw, 270px",
              },
              {
                src: "/portrait-woman.jpg",
                alt: "Conseillère Maison Verte Québec",
                cls: "",
                sizes: "(max-width: 640px) 50vw, 270px",
              },
              {
                src: "/lounge.jpg",
                alt: "L’équipe à nos bureaux",
                cls: "col-span-2 sm:col-span-1",
                sizes: "(max-width: 640px) 100vw, 270px",
              },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 90} variant="scale" className={p.cls || undefined}>
                <Photo src={p.src} alt={p.alt} className="aspect-[4/5]" sizes={p.sizes} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="border-pine/10 border-t pt-[clamp(28px,4vw,44px)] pb-[clamp(40px,6vw,60px)]">
          <Reveal
            as="h2"
            className="text-pine mt-0 mb-[22px] font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.14]"
          >
            Nos valeurs
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {valeurs.map(({ icon: Icon, badge, title, body }, i) => (
              <Reveal key={title} delay={i * 80} variant="scale">
                <div className="group border-pine/[0.08] bg-card hover:border-pine/15 relative isolate flex h-full flex-col overflow-hidden rounded-[20px] border p-[26px] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(18,61,43,0.10)]">
                  <span
                    aria-hidden
                    className="text-pine/[0.06] pointer-events-none absolute -top-3 right-4 -z-10 font-serif text-[66px] leading-none"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`mb-4 grid size-[48px] place-items-center rounded-[14px] ${badge} text-pine`}
                  >
                    <Icon className="size-[22px]" />
                  </span>
                  <h3 className="text-pine mt-0 mb-1.5 font-serif text-[20px]">{title}</h3>
                  <p className="text-fern m-0 text-[14.5px] leading-[1.6]">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* CTA FINAL */}
      <section className="px-[22px] pb-[clamp(64px,9vw,100px)]">
        <Reveal className="bg-pine-deeper relative mx-auto max-w-[1100px] overflow-hidden rounded-[32px] px-[clamp(26px,5vw,72px)] py-[clamp(44px,7vw,76px)] text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[120px] -right-20 size-[380px] max-w-[80vw] rounded-full bg-[radial-gradient(circle,rgba(199,240,60,0.2),transparent_66%)]"
          />
          <div className="relative">
            <h2 className="text-card m-0 font-serif text-[clamp(28px,4.4vw,48px)] leading-[1.1] tracking-[-0.012em]">
              Découvrez ce que nous pouvons faire pour vous.
            </h2>
            <CtaLink
              href="/admissibilite"
              size="lg"
              className="mt-7 shadow-[0_16px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.4)]"
            >
              Vérifier mon admissibilité
            </CtaLink>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
