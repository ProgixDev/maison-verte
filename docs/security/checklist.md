# Security checklist (rule catalog)

Queryable rule file. Severity: **P1** block-release · **P2** fix-before-merge · **P3** improve.
"Enforced" = the automated mechanism; "manual" rules are checked in code review.

`id | severity | rule | how to verify | enforced by`

```
SEC-SECRET-001 | P1 | No hardcoded secrets (Stripe sk_, Supabase sb_secret_/service_role JWT) in source or the client bundle | pnpm secrets:check; pnpm secrets:scan | check-secrets + gitleaks
SEC-SECRET-002 | P1 | No NEXT_PUBLIC_* var whose name implies a secret (SECRET/TOKEN/SERVICE_ROLE/PASSWORD/PRIVATE) | pnpm secrets:check | check-secrets
SEC-ENV-001    | P1 | process.env is read ONLY through src/core/env.ts (server-only); client never imports it | grep for process.env outside env.ts; build fails on client import | server-only + review
SEC-SECRET-003 | P1 | Secret keys (service_role, Stripe sk_) used only in server code (Server Actions / Route Handlers) | review server/client split | review
SEC-NET-001    | P1 | Security headers set on every route (HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy) | inspect next.config.ts headers() / response headers | next.config + review
SEC-NET-002    | P2 | CSP tightened and switched from Report-Only to enforcing (nonces/hashes for inline) | check Content-Security-Policy header | review (per app)
SEC-INPUT-001  | P1 | Every trust-boundary input (Server Action args, Route Handler body, searchParams) passes a Zod schema | review input parsing | review
SEC-REDIR-001  | P1 | User-supplied redirect targets go through safeRedirectPath (no open redirect) | redirect.test.ts; grep redirect()/NextResponse.redirect | tests + review
SEC-AUTHZ-001  | P1 | Authorization enforced server-side; the client is never trusted | review Server Actions | review (n/a while the site has no accounts)
SEC-AUTH-001   | P1 | Sessions are server-validated; cookies are httpOnly + secure + sameSite | review session setup | review (n/a while the site has no accounts)
SEC-LOG-001    | P2 | No tokens/PII in logs; use the redacting logger for auth/network data | grep console.* near auth/network | logger + review
SEC-CSRF-001   | P2 | State-changing requests are CSRF-safe (Server Actions are by default; custom Route Handlers verify origin/token) | review non-Action mutations | review
SEC-SUPPLY-001 | P2 | Lockfile committed; deps reviewed; pnpm audit clean of highs | pnpm audit; review package.json diff | review
SEC-RATE-001   | P3 | Auth + mutation endpoints are rate-limited | review (e.g. Upstash) | review (backlog)
```

## How to use this

Walk the branch diff against these rules on anything touching env/secrets, Server Actions, Route
Handlers, redirects, or headers. Report findings as `[P1|P2|P3] SEC-… — file:line — issue — fix`.
Any P1 blocks the merge.
