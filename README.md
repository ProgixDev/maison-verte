# Maison Verte Québec

Site web de **Maison Verte Québec** — un service qui aide les propriétaires québécois à obtenir leurs subventions de chauffage (LogisVert d’Hydro-Québec et le CAMT fédéral, jusqu’à 16 950 $) et les met en relation avec un installateur certifié RBQ.

Refonte du site, recréée à l’identique en Next.js à partir des maquettes.

## Stack

Next.js 16 (App Router, RSC) · TypeScript strict · Tailwind CSS v4 (tokens de marque) · Zustand 5 · Motion · DM Serif Display + Hanken Grotesk · lucide-react · Vitest + Testing Library · Playwright · pnpm · ESLint 9 (frontières de modules) · Prettier · Husky + commitlint.

## Démarrage

```bash
corepack enable                       # ou : npm i -g pnpm
pnpm install
pnpm dev                              # http://localhost:3000
pnpm verify                           # la barrière locale complète (lint, types, format, tests, build)
```

## Pages

| Route                    | Contenu                                                                   |
| ------------------------ | ------------------------------------------------------------------------- |
| `/`                      | Accueil — hero vidéo, deux programmes, fonctionnement, témoignages, FAQ   |
| `/admissibilite`         | Quiz d’admissibilité interactif (estimation LogisVert + CAMT, formulaire) |
| `/subventions`           | Vue d’ensemble des deux programmes + cumul                                |
| `/subventions/logisvert` | LogisVert (Hydro-Québec) — barème, conditions, documents, délais          |
| `/subventions/camt`      | CAMT (Ressources naturelles Canada) — montants, conditions, urgence       |
| `/fonctionnement`        | Les 5 étapes de l’accompagnement                                          |
| `/faq`                   | Foire aux questions                                                       |
| `/a-propos`              | Notre histoire, notre équipe, nos valeurs                                 |
| `/confidentialite`       | Politique de confidentialité (Loi 25)                                     |

## Architecture

- `src/app/(marketing)/` — pages de contenu (Server Components) ; en-tête et pied de page de marque dans la mise en page partagée.
- `src/app/admissibilite/` — le quiz, avec sa propre mise en page minimale.
- `src/features/eligibility/` — la logique du quiz : store SSR-safe (factory + provider), questions à branches, validations, action serveur validée par zod (stub à brancher sur un CRM).
- `src/components/layout/` — en-tête (bannière CAMT, nav, tiroir mobile) et pied de page.
- `src/components/ui/` — primitives (`CtaLink`, `Eyebrow`, `Reveal`, `CountUp`, `FaqAccordion`, `FinalCta`, `Photo`).
- `src/app/globals.css` — la palette de marque comme tokens Tailwind v4.

## À faire (prochaines étapes)

- Brancher le formulaire d’admissibilité sur un vrai backend (CRM) — l’action `recordLead` est un stub validé.
- Remplacer les coordonnées substituts (téléphone, courriels) dans l’en-tête, le pied de page et la page de confidentialité.

## Documentation

Les conventions de code, les frontières de modules, les décisions d’architecture (ADR) et la
checklist de sécurité sont dans [`docs/`](docs/INDEX.md). À lire avant la première contribution :
[architecture/overview.md](docs/architecture/overview.md) et
[architecture/module-boundaries.md](docs/architecture/module-boundaries.md).
