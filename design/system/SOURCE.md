# Source

A copy of the ATRIUM AD design system, taken on 2026-10-04 from
`atrium.reports/design-system` (outside this repository).

- Left out on purpose: `uploads/` (saved third-party web pages and empty images used as
  reference by the system's author, not part of the system), `.DS_Store`, `.thumbnail`.
- Do not edit these files to change the product's look. The tokens the documentation and the
  apps use live in `src/design/tokens.ts`, which starts from this system and adds the product
  layer (status, data, dark roles). Re-copy this folder when the source system changes, then
  update `src/design/tokens.ts` to match.
- Its own readme is `readme.md`. It lists the open substitutions: lime and clay are
  placeholders pending the brand boards, there is no logo (the wordmark is typographic) and no
  icon set.
