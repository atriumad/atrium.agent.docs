---
id: 0019-one-token-set
sidebar_position: 20
title: "0019 · One token set, themed per surface"
sidebar_label: "0019 · One token set, themed per surface"
description: "One token set, themed per surface"
---

# ADR 0019: One token set, themed per surface

| Status | Date | Deciders |
| --- | --- | --- |
| **Proposed** | 2026-10-04 | Atrium · product and technology |

## Context

Two visual systems existed side by side. The brand system (deep teal, mint, cloud, amber, a lowercase wordmark, Inter Tight and Instrument Serif) was drawn for identity and marketing. The product screens used a provisional theme (ink, lime, cream, amber) written before the brand files were found, and the Platform prototype used a third face, Geist. The brand has no red or green, but a dashboard has to say "good" and "wrong". [Decision 15](../plan/open-decisions) asked for them to be reconciled.

## Decision

There is **one token set**, written once in `src/design/tokens.ts` and generated into CSS and a Tailwind v4 theme.

- The **raw palette, type, spacing, radius and motion** are the brand system's.
- The **product layer** adds what the prototypes use but never named: five status colors (positive, warning, danger, info, neutral), a data palette of six, agent identities, and a dark theme for the Manager's chrome.
- Components read **roles** (`surface-card`, `text-strong`, `status-danger-fg`), never raw colors. A surface themes itself by redefining roles.
- **Inter Tight** is the product face. Geist was a prototype artifact.
- Two departures from the brand files, both for accessibility: the focus ring is teal with an amber halo, because amber alone is 1.9:1 on white; and error states use the danger status, because the brand's amber-600 border was 2.4:1.
- A contrast guard runs when tokens are generated and fails the build when a pairing drops below 4.5:1 for text or 3:1 for interface parts.

## Consequences

- The Platform, Manager, Hub, mobile app and these docs share one look and one vocabulary.
- `packages/ui` has to adopt the tokens; the provisional theme there is replaced. The steps are in [Tokens](../design/tokens#adopting-the-tokens-in-packagesui).
- A brand color change is a deliberate act: it needs a decision, not a pull request comment.
- Hub restaurants may set an accent color. It replaces `--accent` only and is checked for contrast at setup.

## Discarded alternatives

- Keep two themes (brand for marketing, product for screens): the two drift apart and a guest sees two companies.
- Adopt a status palette from a public design system: it would add a second visual identity for one job.
- Use Geist in the product: it is not in the brand system, and Inter Tight has close metrics.
