# Testing Conventions

A failing test should tell you exactly what broke and why it mattered. Write tests that encode intent, not implementation.

## The pyramid here

| Level           | Tool                              | Lives in                        | Covers                                         |
| --------------- | --------------------------------- | ------------------------------- | ---------------------------------------------- |
| Unit            | Vitest (+ Testing Library, jsdom) | colocated `src/**/*.test.ts(x)` | store logic, lib functions, component behavior |
| E2E / CUJ       | Playwright                        | `e2e/*.spec.ts`                 | critical user journeys against the real app    |
| Visual evidence | Playwright screenshots            | `artifacts/screenshots/`        | what shipped actually looks like               |
| Repo gates      | node scripts (`scripts/`)         | `pnpm verify` + hooks           | docs links, typography, secrets                |

## Unit rules

- Test behavior through public APIs: stores via `createXStore()` + actions + `getState()`; components via Testing Library queries (`getByRole` first — this doubles as an a11y check).
- No snapshot tests of markup; assert what the user sees/does.
- Mock at the boundary only (network, time, randomness). If you're mocking internal modules, the design is wrong — fix the design.
- Every bug fix ships a regression test in the same PR (Definition of Done).
- Keep tests deterministic: fake timers for time, seeded data builders in `src/lib/test/` if needed.

## E2E rules

- One spec per critical user journey (`docs/product/critical-user-journeys.md`); name specs after the journey, not the page.
- Use accessible selectors (`getByRole`, `getByLabel`) — `data-testid` is the escape hatch, not the default.
- Every journey captures labeled screenshots via the `shot()` helper (`e2e/utils/shot.ts`). `FEATURE=<slug> pnpm e2e:shots` routes them to `artifacts/screenshots/<slug>/` — look at them before calling UI work done.
- Run E2E against a production build before a release (`pnpm build && pnpm start`, then `pnpm e2e`).

## What NOT to test

- Framework behavior (Next routing, Radix internals), styles per se (screenshots cover the visual layer), private helpers already covered through the public API.

## Coverage philosophy

No percentage mandate. Instead: every behavior you would be embarrassed to break maps to at least one test (unit or e2e). Review checks that mapping, not a number.
