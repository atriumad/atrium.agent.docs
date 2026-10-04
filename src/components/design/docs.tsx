import {useState, type CSSProperties, type ReactNode} from 'react';
import CodeBlock from '@theme/CodeBlock';
import {
  agentIdentity, borders, brand, breakpoints, contrast, dataPalette, fonts, motion, radii, resolve, semantic,
  shadows, space, status, tracking, typeRamp, zIndex, luminance, type Lang, type Swatch,
} from '../../design/tokens';
import {useLang} from './lang';
import {Atr, Badge, StatusBadge} from './ui';

/** Helpers for the pages under /docs/design. Everything here reads src/design/tokens.ts. */

export {useLang};
const pick = (l: Lang, lang: 'en' | 'es') => l[lang];

const T = {
  en: {copy: 'Copy', copied: 'Copied', token: 'Token', value: 'Value', role: 'Role', fg: 'Text', bg: 'Background', ratio: 'Ratio', result: 'Result', use: 'Use',
    surface: {light: 'Paper', white: 'Card', dark: 'Dark', lime: 'Lime'}, size: 'Size', lead: 'Leading', do: 'Do', dont: 'Don’t',
    pass: {aaa: 'AAA', aa: 'AA', ui: 'UI 3:1', fail: 'Fails'}, avoid: 'not used', name: 'Name', hover: 'Hover to preview', series: 'Series'},
  es: {copy: 'Copiar', copied: 'Copiado', token: 'Token', value: 'Valor', role: 'Rol', fg: 'Texto', bg: 'Fondo', ratio: 'Ratio', result: 'Resultado', use: 'Uso',
    surface: {light: 'Papel', white: 'Tarjeta', dark: 'Oscuro', lime: 'Lima'}, size: 'Tamaño', lead: 'Interlínea', do: 'Haz', dont: 'No hagas',
    pass: {aaa: 'AAA', aa: 'AA', ui: 'UI 3:1', fail: 'No cumple'}, avoid: 'no se usa', name: 'Nombre', hover: 'Pasa el cursor para ver', series: 'Serie'},
};

/* ------------------------------------------------------------------------- demo frame */

type Surface = 'light' | 'white' | 'dark' | 'lime';

/**
 * A live example on a stage, with the source under it. `dark` flips the tokens, so what you see
 * on the dark stage is what a dark surface renders.
 */
export function Demo({children, code, surface = 'light', switcher = false, column = false, language = 'tsx'}: {
  children: ReactNode; code?: string; surface?: Surface; switcher?: boolean; column?: boolean; language?: string;
}) {
  const lang = useLang();
  const [s, setS] = useState<Surface>(surface);
  return (
    <div className="atr-demo">
      <div className={`atr-demo__stage atr-demo__stage--${s}${column ? ' atr-demo__stage--col' : ''}`}>
        <Atr dark={s === 'dark'} style={column ? {display: 'grid', gap: 16} : {display: 'contents'}}>{children}</Atr>
      </div>
      {switcher ? (
        <div className="atr-demo__bar">
          <span className="atr-demo__surfaces" role="group" aria-label="Surface">
            {(['light', 'white', 'dark', 'lime'] as Surface[]).map((k) => (
              <button key={k} type="button" aria-pressed={s === k} onClick={() => setS(k)}>{T[lang].surface[k]}</button>
            ))}
          </span>
        </div>
      ) : null}
      {code ? <CodeBlock language={language}>{code.trim()}</CodeBlock> : null}
    </div>
  );
}

/* ------------------------------------------------------------------------- palette */

const ink = (hex: string) => (luminance(resolve(hex)) > 0.3 ? '#1c1f1d' : '#fbf8f1');

export function Chipboard({text, label}: {text: string; label: string}) {
  const lang = useLang();
  const [done, setDone] = useState(false);
  return (
    <button type="button" className="design-copy" onClick={() => { void navigator.clipboard?.writeText(text); setDone(true); setTimeout(() => setDone(false), 1200); }} aria-label={`${T[lang].copy} ${label}`}>
      {done ? T[lang].copied : text}
    </button>
  );
}

export function Swatches({group}: {group: keyof typeof brand}) {
  const lang = useLang();
  return (
    <div className="design-swatches">
      {brand[group].map((s) => (
        <div key={s.name} className="design-swatch">
          <div className="design-swatch__chip" style={{background: s.value, color: ink(s.value)}}>
            <span>{s.name}</span>
          </div>
          <div className="design-swatch__meta">
            <Chipboard text={s.value} label={s.name} />
            <span className="design-swatch__css">--{s.name}</span>
            <span className="design-swatch__role">{pick(s.role, lang)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SemanticTable({group}: {group: keyof typeof semantic}) {
  const lang = useLang();
  return (
    <table className="design-table">
      <thead><tr><th>{T[lang].token}</th><th>{T[lang].value}</th><th>{T[lang].role}</th></tr></thead>
      <tbody>
        {semantic[group].map((s: Swatch) => (
          <tr key={s.name}>
            <td><code>--{s.name}</code></td>
            <td><span className="design-dot" style={{background: s.value}} /> <code>{s.value.replace('var(--', '').replace(')', '')}</code></td>
            <td>{pick(s.role, lang)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function StatusTable() {
  const lang = useLang();
  const labels = {
    en: {positive: 'Positive', warning: 'Warning', danger: 'Danger', info: 'Info', neutral: 'Neutral'},
    es: {positive: 'Positivo', warning: 'Aviso', danger: 'Peligro', info: 'Info', neutral: 'Neutro'},
  }[lang];
  return (
    <table className="design-table">
      <thead><tr><th>{T[lang].name}</th><th>Preview</th><th>{T[lang].fg}</th><th>{T[lang].bg}</th><th>{T[lang].ratio}</th><th>{T[lang].role}</th></tr></thead>
      <tbody>
        {status.map((s) => (
          <tr key={s.key}>
            <td><code>status-{s.key}</code></td>
            <td><Atr><StatusBadge status={s.key}>{labels[s.key]}</StatusBadge></Atr></td>
            <td><span className="design-dot" style={{background: s.fg}} /> <code>{s.fg}</code></td>
            <td><span className="design-dot" style={{background: s.bg, outline: '1px solid var(--atrium-line)'}} /> <code>{s.bg}</code></td>
            <td>{contrast(s.fg, s.bg).toFixed(1)}:1</td>
            <td>{pick(s.role, lang)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function DataPalette() {
  const lang = useLang();
  return (
    <div className="design-strip">
      {dataPalette.map((s, i) => (
        <div key={s.name} className="design-strip__item" style={{background: s.value, color: ink(s.value)}} title={pick(s.role, lang)}>
          <span>{i + 1}</span><code>{s.value}</code>
        </div>
      ))}
    </div>
  );
}

export function AgentIdentities() {
  return (
    <div className="design-agents">
      {agentIdentity.map((a) => (
        <div key={a.key} className="design-agent" style={{background: a.bg, color: a.fg}}>
          <span className="design-agent__face" style={{background: a.head}}><i style={{background: a.eye}} /><i style={{background: a.eye}} /></span>
          <strong>{a.name}</strong>
          <code>{a.head}</code>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- contrast */

type Pair = {label: Lang; fg: string; bg: string; kind?: 'text' | 'ui' | 'avoid'};

/** `avoid` pairs are the system's own combinations that fall short. No component uses them. */
export const defaultPairs: Pair[] = [
  {label: {en: 'text-strong on surface-page', es: 'text-strong sobre surface-page'}, fg: 'var(--charcoal-900)', bg: 'var(--cream-200)'},
  {label: {en: 'text-body on surface-card', es: 'text-body sobre surface-card'}, fg: 'var(--charcoal-800)', bg: 'var(--cream-100)'},
  {label: {en: 'text-muted on surface-page', es: 'text-muted sobre surface-page'}, fg: 'var(--charcoal-500)', bg: 'var(--cream-200)'},
  {label: {en: 'text-muted on surface-sunken', es: 'text-muted sobre surface-sunken'}, fg: 'var(--charcoal-500)', bg: 'var(--cream-300)'},
  {label: {en: 'text-on-dark on surface-dark', es: 'text-on-dark sobre surface-dark'}, fg: 'var(--cream-300)', bg: 'var(--charcoal-800)'},
  {label: {en: 'lime on surface-dark (figures, headlines)', es: 'lima sobre surface-dark (cifras, titulares)'}, fg: 'var(--lime-500)', bg: 'var(--charcoal-800)'},
  {label: {en: 'hint on dark: charcoal-400 on charcoal-800', es: 'ayuda sobre oscuro: charcoal-400 sobre charcoal-800'}, fg: 'var(--charcoal-400)', bg: 'var(--charcoal-800)'},
  {label: {en: 'primary button: cream on charcoal', es: 'botón primario: crema sobre carbón'}, fg: 'var(--cream-200)', bg: 'var(--charcoal-800)'},
  {label: {en: 'lime button and card: charcoal on lime', es: 'botón y tarjeta lima: carbón sobre lima'}, fg: 'var(--charcoal-900)', bg: 'var(--lime-500)'},
  {label: {en: 'clay button: cream on clay-600', es: 'botón arcilla: crema sobre clay-600'}, fg: 'var(--cream-100)', bg: 'var(--clay-600)'},
  {label: {en: 'clay button pressed: cream on clay-700', es: 'botón arcilla presionado: crema sobre clay-700'}, fg: 'var(--cream-100)', bg: 'var(--clay-700)'},
  {label: {en: 'clay chip: clay-700 on clay-200', es: 'chip arcilla: clay-700 sobre clay-200'}, fg: 'var(--clay-700)', bg: 'var(--clay-200)'},
  {label: {en: 'error text: clay-600 on cream-100', es: 'texto de error: clay-600 sobre cream-100'}, fg: 'var(--clay-600)', bg: 'var(--cream-100)'},
  {label: {en: 'focus ring: clay-500 on cream-200', es: 'anillo de foco: clay-500 sobre cream-200'}, fg: 'var(--clay-500)', bg: 'var(--cream-200)', kind: 'ui'},
  {label: {en: 'focus ring: clay-500 on charcoal-800', es: 'anillo de foco: clay-500 sobre charcoal-800'}, fg: 'var(--clay-500)', bg: 'var(--charcoal-800)', kind: 'ui'},
  {label: {en: 'field edge: charcoal-500 on cream-100', es: 'borde de campo: charcoal-500 sobre cream-100'}, fg: 'var(--charcoal-500)', bg: 'var(--cream-100)', kind: 'ui'},
  {label: {en: 'field edge on dark: charcoal-400 on charcoal-800', es: 'borde de campo sobre oscuro: charcoal-400 sobre charcoal-800'}, fg: 'var(--charcoal-400)', bg: 'var(--charcoal-800)', kind: 'ui'},
  ...status.map((s): Pair => ({label: {en: `status-${s.key}: text on its fill`, es: `status-${s.key}: texto sobre su relleno`}, fg: s.fg, bg: s.bg})),
  {label: {en: 'cream on clay-500 (the system\'s clay button and card)', es: 'crema sobre clay-500 (el botón y la tarjeta arcilla del sistema)'}, fg: 'var(--cream-100)', bg: 'var(--clay-500)', kind: 'avoid'},
  {label: {en: 'clay-500 as text on cream-200', es: 'clay-500 como texto sobre cream-200'}, fg: 'var(--clay-500)', bg: 'var(--cream-200)', kind: 'avoid'},
  {label: {en: 'lime-600 as text on cream-200 (lime eyebrow)', es: 'lime-600 como texto sobre cream-200 (eyebrow lima)'}, fg: 'var(--lime-600)', bg: 'var(--cream-200)', kind: 'avoid'},
  {label: {en: 'hairline cream-400 as a field edge', es: 'línea fina cream-400 como borde de campo'}, fg: 'var(--cream-400)', bg: 'var(--cream-100)', kind: 'avoid'},
  {label: {en: 'charcoal-500 hairline on dark as a field edge', es: 'línea fina charcoal-500 sobre oscuro como borde de campo'}, fg: 'var(--charcoal-500)', bg: 'var(--charcoal-800)', kind: 'avoid'},
];

export function ContrastTable({pairs = defaultPairs}: {pairs?: Pair[]}) {
  const lang = useLang();
  const t = T[lang];
  return (
    <table className="design-table">
      <thead><tr><th>{t.use}</th><th>{t.fg}</th><th>{t.bg}</th><th>{t.ratio}</th><th>{t.result}</th></tr></thead>
      <tbody>
        {pairs.map((p) => {
          const fg = resolve(p.fg); const bg = resolve(p.bg);
          const r = contrast(fg, bg);
          const need = p.kind === 'ui' ? 3 : 4.5;
          const grade = p.kind === 'ui' ? (r >= 3 ? t.pass.ui : t.pass.fail) : r >= 7 ? t.pass.aaa : r >= 4.5 ? t.pass.aa : t.pass.fail;
          const ok = r >= need;
          const avoid = p.kind === 'avoid';
          return (
            <tr key={p.label.en}>
              <td>{pick(p.label, lang)}</td>
              <td><span className="design-dot" style={{background: fg, outline: '1px solid var(--atrium-line)'}} /> <code>{fg}</code></td>
              <td><span className="design-dot" style={{background: bg, outline: '1px solid var(--atrium-line)'}} /> <code>{bg}</code></td>
              <td>{r.toFixed(2)}:1</td>
              <td><Atr><Badge variant={ok ? 'lime' : 'clay'}>{avoid ? `${grade} · ${t.avoid}` : grade}</Badge></Atr></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

/* ------------------------------------------------------------------------ typography */

export function FontCards() {
  const lang = useLang();
  return (
    <div className="design-fonts">
      {fonts.map((f) => (
        <div key={f.name} className="design-font">
          <div className="design-font__aa" style={{fontFamily: f.stack}}>Aa</div>
          <div>
            <strong>{f.name}</strong> <code>{f.css}</code>
            <p>{pick(f.role, lang)}</p>
            <small>{f.weights}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TypeRamp() {
  const lang = useLang();
  const t = T[lang];
  return (
    <div className="design-ramp">
      {typeRamp.map((s) => (
        <div key={s.name} className="design-ramp__row">
          <div className="design-ramp__meta"><code>{s.css}</code><span>{s.px}px · {s.leading}</span><span>{pick(s.use, lang)}</span></div>
          <div className="design-ramp__sample" style={{fontSize: s.px, lineHeight: s.leading, fontFamily: s.px >= 32 ? 'var(--font-sans)' : undefined, letterSpacing: s.px >= 32 ? '-0.02em' : undefined}}>
            {lang === 'es' ? 'Extraños en regulares' : 'Strangers into regulars'}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TrackingTable() {
  const lang = useLang();
  return (
    <table className="design-table">
      <thead><tr><th>{T[lang].token}</th><th>{T[lang].value}</th><th>{T[lang].use}</th><th>Preview</th></tr></thead>
      <tbody>{tracking.map((t) => (
        <tr key={t.name}><td><code>{t.css}</code></td><td><code>{t.value}</code></td><td>{pick(t.use, lang)}</td>
          <td><span style={{textTransform: 'uppercase', fontWeight: 600, fontSize: 12, letterSpacing: t.value}}>{lang === 'es' ? 'La experiencia' : 'The experience'}</span></td></tr>
      ))}</tbody>
    </table>
  );
}

/* ----------------------------------------------------------------------- foundations */

export function SpaceScale() {
  return (
    <div className="design-space">
      {space.filter((s) => s.rem > 0).map((s) => (
        <div key={s.name} className="design-space__row">
          <code>--{s.name}</code><span>{s.rem * 16}px</span>
          <i style={{width: s.rem * 16}} />
        </div>
      ))}
    </div>
  );
}

export function RadiusScale() {
  const lang = useLang();
  return (
    <div className="design-radii">
      {radii.map((r) => (
        <div key={r.name} className="design-radius">
          <i style={{borderRadius: r.px}} />
          <code>--{r.name}</code><span>{r.px === 999 ? 'pill' : `${r.px}px`}</span><small>{pick(r.use, lang)}</small>
        </div>
      ))}
    </div>
  );
}

export function ShadowScale() {
  const lang = useLang();
  return (
    <div className="design-shadows">
      {shadows.map((s) => (
        <div key={s.name} className="design-shadow" style={{boxShadow: s.value}}>
          <code>--{s.name}</code><small>{pick(s.use, lang)}</small>
        </div>
      ))}
    </div>
  );
}

export function MotionScale() {
  const lang = useLang();
  const [on, setOn] = useState(false);
  return (
    <div className="design-motion">
      {motion.map((m) => (
        <div key={m.name} className="design-motion__row">
          <code>--{m.name}</code><span>{m.value}</span><small>{pick(m.use, lang)}</small>
          <div className="design-motion__track"><i style={{transform: on ? 'translateX(calc(100cqw - 24px))' : 'none', transition: `transform ${m.value} cubic-bezier(0.2, 0.8, 0.2, 1)`}} /></div>
        </div>
      ))}
      <button type="button" className="design-copy" onClick={() => setOn((v) => !v)}>{lang === 'es' ? 'Reproducir' : 'Play'}</button>
    </div>
  );
}

export function Breakpoints() {
  const lang = useLang();
  return (
    <table className="design-table">
      <thead><tr><th>{T[lang].name}</th><th>min-width</th><th>{T[lang].use}</th></tr></thead>
      <tbody>{breakpoints.map((b) => <tr key={b.name}><td><code>{b.name}</code></td><td>{b.px}px</td><td>{pick(b.use, lang)}</td></tr>)}</tbody>
    </table>
  );
}

export function BordersTable() {
  const lang = useLang();
  return (
    <table className="design-table">
      <thead><tr><th>{T[lang].token}</th><th>{T[lang].value}</th><th>{T[lang].use}</th><th>Preview</th></tr></thead>
      <tbody>{borders.map((b) => (
        <tr key={b.name}><td><code>--{b.name}</code></td><td>{b.value}</td><td>{pick(b.use, lang)}</td>
          <td><span style={{display: 'block', width: 120, borderTop: `${b.value} solid var(--charcoal-800)`}} /></td></tr>
      ))}</tbody>
    </table>
  );
}

export function Layers() {
  return <table className="design-table"><thead><tr><th>Token</th><th>z-index</th></tr></thead><tbody>{zIndex.map((z) => <tr key={z.name}><td><code>--{z.name}</code></td><td>{z.value}</td></tr>)}</tbody></table>;
}

/* ---------------------------------------------------------------------------- misc */

export function DoDont({children, kind}: {children: ReactNode; kind: 'do' | 'dont'}) {
  const lang = useLang();
  return (
    <div className={`design-dd design-dd--${kind}`}>
      <div className="design-dd__tag">{kind === 'do' ? T[lang].do : T[lang].dont}</div>
      {children}
    </div>
  );
}
export const DoDontRow = ({children}: {children: ReactNode}) => <div className="design-dd-row">{children}</div>;

export function Gallery({children, min = 240}: {children: ReactNode; min?: number}) {
  return <div className="design-gallery" style={{'--min': `${min}px`} as CSSProperties}>{children}</div>;
}
export function Tile({title, children, tone}: {title: string; children: ReactNode; tone?: 'dark'}) {
  return (
    <figure className={`design-tile${tone ? ` design-tile--${tone}` : ''}`}>
      <div className="design-tile__stage"><Atr dark={tone === 'dark'} style={{width: '100%'}}>{children}</Atr></div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------------ token code */

const rawAll = (): Swatch[] => Object.values(brand).flat();

/** The tokens as code to copy: the CSS custom properties, or the Tailwind v4 theme. */
export function TokenCode({kind}: {kind: 'css' | 'tailwind' | 'infima' | 'dark'}) {
  if (kind === 'tailwind') {
    const lines = [
      '@import "tailwindcss";',
      '',
      '@theme {',
      '  /* Raw palette: bg-charcoal-800, text-lime-500, border-cream-400 ... */',
      ...rawAll().map((s) => `  --color-${s.name}: ${s.value};`),
      '',
      '  /* Status: bg-status-danger-bg, text-status-danger-fg ... */',
      ...status.flatMap((s) => [`  --color-status-${s.key}-fg: ${s.fg};`, `  --color-status-${s.key}-bg: ${s.bg};`, `  --color-status-${s.key}-line: ${s.line};`]),
      '',
      '  /* Data series */',
      ...dataPalette.map((s) => `  --color-${s.name}: ${s.value};`),
      '',
      '  --font-sans: "Inter Tight", system-ui, sans-serif;',
      '  --font-serif: "Instrument Serif", Georgia, serif;',
      '',
      '  /* Radius: rounded-sm is the button and the field, rounded-md the card, rounded-full the chip */',
      ...radii.filter((r) => r.px !== 999 && r.px !== 0).map((r) => `  --radius-${r.name.replace('radius-', '')}: ${r.px}px;`),
      '',
      '  --shadow-raised: ' + shadows[1]!.value + ';',
      '  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);',
      '}',
    ];
    return <CodeBlock language="css" title="theme.css (Tailwind v4)">{lines.join('\n')}</CodeBlock>;
  }
  if (kind === 'dark') {
    return (
      <CodeBlock language="html" title="dark theme">{`<section data-atr-theme="dark">
  <!-- surface-page, surface-card, text-*, border-light, field-border and status-* are redefined -->
</section>`}</CodeBlock>
    );
  }
  if (kind === 'infima') {
    return (
      <CodeBlock language="css" title="src/css/custom.css (this site)">{`@import './atrium-tokens.css';
@import './atrium-ui.css';

:root {
  --ifm-background-color: var(--surface-page);
  --ifm-font-color-base: var(--text-body);
  --ifm-heading-color: var(--text-strong);
  --ifm-font-family-base: var(--font-sans);
  --ifm-global-radius: var(--radius-md);
}`}</CodeBlock>
    );
  }
  const lines = [
    ':root {',
    '  /* Raw palette */',
    ...rawAll().slice(0, 5).map((s) => `  --${s.name}: ${s.value};`),
    '  /* ...every step of charcoal, sage, lime, clay and cream */',
    '',
    '  /* Roles: what components read */',
    ...Object.values(semantic).flat().slice(0, 8).map((s) => `  --${s.name}: ${s.value};`),
    '  /* ... */',
    '',
    '  /* Status */',
    ...status.slice(0, 2).flatMap((s) => [`  --status-${s.key}-fg: ${s.fg};`, `  --status-${s.key}-bg: ${s.bg};`]),
    '  /* ...warning, danger, info, neutral */',
    '}',
  ];
  return <CodeBlock language="css" title="atrium-tokens.css (excerpt)">{lines.join('\n')}</CodeBlock>;
}
