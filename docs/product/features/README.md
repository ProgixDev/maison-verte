# Feature Docs

One file per shipped feature — the long-term memory of how a piece of the site actually works and why. Whoever changes a feature next reads its doc first, so keep them truthful.

## Rules

- File name = feature slug (matches `src/features/<slug>/` when one exists): `eligibility.md`.
- Update in the same PR that changes the behavior.
- When a feature is removed, don't delete the doc — add a final "Removed in #PR, because…" line and move it to `archive/`.

## Template

```markdown
# <Feature name>

**Status:** live | experiment | removed · **Slice:** src/features/<slug> · **Routes:** /…

## What it does (user terms)

Two or three sentences.

## How it works (one diagram or paragraph)

Key components, store, actions; anything non-obvious.

## Decisions & gotchas

- Dated bullets of things future changers must know.

## CUJs covered

- CUJ-NN (link)
```

## Index

| Feature                 | Status | Doc |
| ----------------------- | ------ | --- |
| _(none documented yet)_ | —      | —   |
