# Architecture Decision Records

ADRs capture decisions that shape the codebase: what we chose, what we rejected, and why. They exist so that settled decisions are not re-litigated — or silently reversed — months later.

## Rules

- One decision per file: `NNNN-short-slug.md`, numbered sequentially. Use [TEMPLATE.md](TEMPLATE.md).
- Status is one of `Proposed`, `Accepted`, `Superseded by NNNN`.
- ADRs are immutable once accepted — supersede, don't edit history.
- Write one whenever you: add/replace a dependency with architectural weight, change module boundaries, change a gate, change the data-flow model, or make any choice a future reader would ask "why is it like this?" about.
- If a task requires deviating from an accepted ADR, stop and surface it. Propose a superseding ADR; do not quietly diverge.

## Index

| #                                 | Decision                                                                                                           | Status   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------- |
| [0001](0001-baseline-stack.md)    | Baseline stack: Next.js App Router, TS strict, Tailwind v4 + shadcn/ui, Zustand, Motion, Vitest + Playwright, pnpm | Accepted |
| [0002](0002-module-boundaries.md) | Layered module boundaries enforced by ESLint                                                                       | Accepted |
