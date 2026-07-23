# Critical User Journeys (CUJs)

The journeys that must never break. Each CUJ has an e2e spec in `e2e/` and labeled screenshots captured by `pnpm e2e:shots` into `artifacts/screenshots/`.

Adding or changing a CUJ is a product decision — the change should be agreed with the client before it ships.

## Registry

| ID     | Journey                    | Steps (user's words)                                                                              | E2E spec                  | Screenshots                            |
| ------ | -------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------------- |
| CUJ-01 | Land and check eligibility | Open `/` → understand the offer → click “Vérifier mon admissibilité” → land on step 1 of the quiz | `e2e/home.spec.ts`        | `home-landing`, `admissibilite-step-1` |
| CUJ-02 | Full-site visual pass      | Every marketing route renders end to end with scroll-reveals settled (layout regression sweep)    | `e2e/visual-pass.spec.ts` | `maison-verte/*`                       |

## Rules

- A new feature with user-visible surface must either extend an existing CUJ or register a new one in this table.
- Each step in a journey asserts something the _user_ can see (text, role, state) — not implementation details.
- Screenshot names are stable (`<cuj>-<step>`), so reviews can diff them release over release.
- When a CUJ changes intentionally, update this table and the screenshots in the same PR.
