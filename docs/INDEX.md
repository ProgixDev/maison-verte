# Documentation Index

Reference documentation for the Maison Verte Québec site. Every file is intentionally short; if a file grows past ~200 lines, split it.

## Architecture

| File                                                                   | What it answers                                              |
| ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| [architecture/overview.md](architecture/overview.md)                   | What the system is, rendering model, data flow               |
| [architecture/module-boundaries.md](architecture/module-boundaries.md) | Where code may live and what it may import (ESLint-enforced) |
| [architecture/decisions/](architecture/decisions/README.md)            | ADRs — why the stack and structure are what they are         |

## Product

| File                                                                   | What it answers                                  |
| ---------------------------------------------------------------------- | ------------------------------------------------ |
| [product/overview.md](product/overview.md)                             | What the site is, who it serves, what it must do |
| [product/critical-user-journeys.md](product/critical-user-journeys.md) | The journeys that must never break               |
| [product/features/](product/features/README.md)                        | One living doc per shipped feature               |

## Conventions (how we write code)

| File                                                   | Scope                                            |
| ------------------------------------------------------ | ------------------------------------------------ |
| [conventions/typescript.md](conventions/typescript.md) | Types, strictness, naming                        |
| [conventions/react.md](conventions/react.md)           | Components, RSC vs client, props, files          |
| [conventions/styling.md](conventions/styling.md)       | Tailwind v4, design tokens, shadcn/ui            |
| [conventions/state.md](conventions/state.md)           | Zustand patterns, server vs client state         |
| [conventions/motion.md](conventions/motion.md)         | Animation with Motion, reduced-motion            |
| [conventions/testing.md](conventions/testing.md)       | Unit (Vitest) and E2E (Playwright) strategy      |
| [conventions/git.md](conventions/git.md)               | Branching, conventional commits, PR rules        |
| [conventions/copy.md](conventions/copy.md)             | User-facing text: typography, tone (CI-enforced) |

## Security

| File                                                 | What it answers                                          |
| ---------------------------------------------------- | -------------------------------------------------------- |
| [security/threat-model.md](security/threat-model.md) | Assets, trust boundaries, attacker classes, data classes |
| [security/checklist.md](security/checklist.md)       | The enforceable `SEC-*` rule catalog                     |

(Coverage matrix lives in [SECURITY.md](../SECURITY.md) at the repo root.)

## Web production-readiness

| File                                 | What it answers                                                           |
| ------------------------------------ | ------------------------------------------------------------------------- |
| [web/checklist.md](web/checklist.md) | `WEB-*` launch checklist (SEO, PWA, errors, a11y, perf); `pnpm web:check` |
