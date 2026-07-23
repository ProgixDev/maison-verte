# 0001 — Adopt the baseline stack

- **Status:** Accepted
- **Date:** 2026-06-07
- **Deciders:** Engineering leadership

## Context

We need one baseline stack for the project, optimized for senior-level maintainability and for handover: widely-documented, conventional choices with strong static guarantees and fast feedback loops, so a developer joining later is productive on day one.

## Decision

- **Next.js 16, App Router, RSC-first** — server-first rendering, file-system routing, one framework for site + app use cases.
- **TypeScript strict** (`noUncheckedIndexedAccess`, no `any`) — types are the cheapest reviewer.
- **Tailwind CSS v4 + shadcn/ui** — utility CSS with CSS-first tokens; shadcn components are copied into `src/components/ui/` and become our design system (we own the code, so there is no upstream to fight).
- **Zustand 5** for client state — minimal API, no boilerplate, SSR-safe when provided per-request via context.
- **Motion** (`motion/react`) for animation — successor to Framer Motion; LazyMotion keeps bundles small.
- **Vitest + Testing Library** for unit tests; **Playwright** for E2E and screenshot evidence.
- **pnpm** pinned via `packageManager` — fast, strict resolution, reproducible CI.

## Alternatives considered

| Option                        | Why not                                                                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Turborepo monorepo            | Heavier to maintain for a single site; internal ESLint boundaries give the layering benefit. Revisit if we ship multiple apps from one repo. |
| Redux Toolkit / Jotai         | More ceremony (RTK) or weaker conventions fit (Jotai) than Zustand for our slice-local state model.                                          |
| CSS Modules / vanilla-extract | Slower to iterate on; Tailwind's inline vocabulary reviews and diffs better.                                                                 |
| Jest                          | Slower, legacy ESM story; Vitest is the current default.                                                                                     |
| npm / bun                     | npm: slower, looser. bun: ecosystem risk in CI.                                                                                              |

## Consequences

- Positive: new contributors meet a conventional stack with no bespoke tooling to learn; static + test gates catch most mistakes before review.
- Negative: RSC mental model has a learning curve — mitigated by `docs/conventions/react.md`; shadcn updates are manual by design (we own the code).
