# Product Overview

## What this product is

Maison Verte Québec helps Quebec homeowners claim the heating subsidies they are entitled to — Hydro-Québec's **LogisVert** and the federal **CAMT** program, up to 16 950 $ combined — and connects them with an RBQ-certified installer.

The site's job is to turn a homeowner who has vaguely heard of "government heat-pump money" into a qualified lead: explain the programs in plain French, let them self-assess in a two-minute quiz, and hand the resulting contact details to the team.

## Users

| User                 | Wants                                                            | Success looks like                                               |
| -------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Quebec homeowner     | To know if they qualify and how much they get, without paperwork | Completes the eligibility quiz and submits their contact details |
| Maison Verte advisor | Qualified leads with enough context to call back informed        | Lead arrives with home type, heating system, and estimate        |

## What we will NOT do (anti-goals)

- No account system, no customer portal — the site is a lead funnel, not an application.
- No online submission of the actual subsidy file; that happens with an advisor.
- No claims of exact amounts without a source. Every figure on the site traces to the official Hydro-Québec or Natural Resources Canada page, and is updated when those pages change.

## Current feature map

| Area             | Where                              | Notes                                                        |
| ---------------- | ---------------------------------- | ------------------------------------------------------------ |
| Marketing pages  | `src/app/(marketing)/`             | Server Components; home, programs, how it works, FAQ, about  |
| Eligibility quiz | `src/features/eligibility/`        | Branching questions, estimate, zod-validated lead submission |
| Program detail   | `src/app/(marketing)/subventions/` | One page per program measure                                 |

Living per-feature docs: [features/](features/README.md). Journeys that must never break: [critical-user-journeys.md](critical-user-journeys.md).

## Glossary

| Term      | Meaning here                                                                        |
| --------- | ----------------------------------------------------------------------------------- |
| LogisVert | Hydro-Québec's efficient-heating program (heat pumps, insulation, weatherstripping) |
| CAMT      | Canada Greener Homes / oil-to-heat-pump federal program                             |
| RBQ       | Régie du bâtiment du Québec — the licence a certified installer holds               |
| Slice     | A `src/features/<name>` vertical module                                             |
| Lead      | A completed quiz plus contact details, handed to an advisor                         |
