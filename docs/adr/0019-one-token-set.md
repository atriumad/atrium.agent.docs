---
id: 0019-one-token-set
sidebar_position: 20
title: "0019 · The ATRIUM AD design system is the visual system"
sidebar_label: "0019 · The ATRIUM AD design system is the visual system"
description: "The ATRIUM AD design system is the visual system"
---

# ADR 0019: The ATRIUM AD design system is the visual system

| Status | Date | Deciders |
| --- | --- | --- |
| **Accepted** | 2026-10-04 | Atrium · product and technology |

## Context

Three visual directions had been in play: a provisional product theme in `packages/ui` (ink, lime, cream, amber), a teal and mint brand system, and the prototypes, which used a third face (Geist). [Decision 15](../plan/open-decisions) asked for them to be reconciled. The product owner has now named one system to use: the **ATRIUM AD design system** (charcoal on cream paper, one lime signal, one clay, squared corners, a 3 px rule, Inter Tight and Instrument Serif).

## Decision

The ATRIUM AD design system is the visual system for the Platform, the Manager, the Hub, the mobile app and this documentation.

- A **copy** of the system lives in `design/system`, with a `SOURCE.md` that says where it came from and what was left out. It is the reference; it is not edited to change the product.
- The tokens are written once in `src/design/tokens.ts` and generated into CSS and a Tailwind v4 theme. Components read **roles**, never raw colors.
- The system's **raw palette, type, space, radius, borders, shadows and motion are used as they are.**
- The system says nothing about status, charts, a dark theme or product components. That **product layer** is built here from the system's own palette: status told apart by fill, a left rule and a mark; a data palette of six; a dark theme; and the components the product needs beyond the thirteen the system ships.
- **Inter Tight** is the product face. Geist was a prototype artifact.
- Six exceptions are made for contrast, each moving a color by one step: the clay button is filled with clay-600, the clay chip uses a new clay-700 text, field edges use charcoal-500, clay is never text on cream, the lime eyebrow only appears on charcoal, and text on a clay card is 24 px or larger. [Tokens](../design/tokens#what-is-ours) lists them with their ratios.
- A contrast guard runs when the tokens are generated and fails the build when a pairing drops below 4.5:1 for text or 3:1 for interface parts.

## Consequences

- One look and one vocabulary across every surface.
- `packages/ui` has to adopt the tokens. Its provisional theme already uses cream, ink and lime, so most of the change is renaming. The steps are in [Tokens](../design/tokens#adopting-the-tokens-in-packagesui).
- The earlier teal brand files, the favicon and the social images are for a different identity and need replacing once artwork exists. The six agents keep their own colors until the identity owner decides.
- The system's open items stay open: **lime and clay are placeholders** until the brand boards can be read, **there is no logo** (the wordmark is typographic) and **there is no icon set**. Lucide is used as a stand-in in a few product places and needs approval.
- Hub restaurants may set an accent color. It replaces `--accent` only and is checked for contrast at setup.

## Discarded alternatives

- Keep two themes (a brand one for marketing and a product one for screens): they drift apart and a guest sees two companies.
- Adopt a status palette from a public design system: it would add a second visual identity for one job.
- Use the system's own pairings without changes: six of them fall below the contrast a person with low vision needs.
