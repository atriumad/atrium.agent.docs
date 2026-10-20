# UI kit — Atrium AD marketing site

A clickable recreation of the Atrium AD marketing site, composed entirely from the
system's own primitives (`Button`, `Card`, `Chip`, `Badge`, `Eyebrow`, `Rule`,
`StatFigure`, `Highlight`, `Emphasis`, `Wordmark`, `Input`, `Select`, `Checkbox`).

## Screens
| Screen | Where |
|---|---|
| Home | Hero → service marquee → work grid → stats band → services → quote |
| Work | Full work grid; each tile opens a case study |
| Case study | Problem / what we did / results rail |
| Services | Four numbered service cards |
| Studio | Team + positioning |
| Contact | Brief form with a sent state |

## Files
- `AtriumSections.jsx` — every section component, exported to `window`
- `AtriumKit.jsx` — the router/shell, mounts to `#root`
- `index.html` — loads React, Babel, the compiled bundle, then both JSX files

## Notes
Image areas are rendered as labelled placeholder slots. No photography or logo
artwork has been supplied for this brand yet.
