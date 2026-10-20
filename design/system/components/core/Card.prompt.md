Use `Card` for any bounded block of content — work tiles, service blocks, stat panels.

```jsx
<Card tone="ruled" elevation="offset" interactive>
  <Eyebrow>Case study</Eyebrow>
  <h3>A rebrand that paid for itself in nine weeks</h3>
</Card>
```

Tones: `paper` (hairline, default), `ruled` (1px ink — for emphasis), `sunken`, `dark`,
`lime`, `clay`. `elevation="offset"` gives the signature 2px printed drop. Keep at most one
lime or clay card per screen region.
