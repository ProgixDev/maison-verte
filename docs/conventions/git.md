# Git & PR Conventions

## Branching — trunk-based, short-lived

- `main` is always releasable; it is what Vercel deploys to production.
- Branches: `feat/slug`, `fix/slug`, `chore/slug`, `docs/slug`. Lifespan target: < 2 days. Big features land as a sequence of small PRs, not one mega-branch.
- Rebase on `main` before review; squash-merge with a conventional title. No merge commits on `main`.

## Conventional commits (enforced by commitlint)

```
<type>(<scope>): <imperative summary ≤ 72 chars>
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`. Scope = feature slug or area (`eligibility`, `subventions`, `ci`). Body explains _why_ when non-obvious. `BREAKING CHANGE:` footer when contracts change.

## Pull requests

- Small: aim < 400 changed lines (generated files excluded). Split by layer.
- Fill in the PR template: what changed and why, and attach before/after screenshots for UI changes.
- One PR = one intent. Drive-by refactors go in their own `refactor:` PR.
- `pnpm verify` must be green before you open the PR — it is the same gate a reviewer would run.
- Never `--force` push a shared branch, never amend someone else's commits, never commit secrets or `artifacts/`.

## Conflict avoidance (how parallel work stays safe)

1. Feature slices: two features never touch the same files (boundaries-enforced).
2. Shared layers (`components/ui`, `core`, configs) change in dedicated small PRs — never inside a feature PR.
3. Short branch lifespan beats merge tooling. Rebase daily.
