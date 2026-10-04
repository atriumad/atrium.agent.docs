import {useState, type CSSProperties, type ReactNode} from 'react';
import CodeBlock from '@theme/CodeBlock';
import {
  agentIdentity, brand, breakpoints, contrast, dataPalette, fonts, motion, radii, resolve, semantic,
  shadows, space, status, tracking, typeRamp, zIndex, luminance, type Lang, type Swatch,
} from '../../design/tokens';
import {useLang} from './lang';
import {Atr, Badge, StatusBadge} from './ui';

/** Helpers for the pages under /docs/design. Everything here reads src/design/tokens.ts. */

export {useLang};
const pick = (l: Lang, lang: 'en' | 'es') => l[lang];

const T = {
  en: {copy: 'Copy', copied: 'Copied', token: 'Token', value: 'Value', role: 'Role', fg: 'Text', bg: 'Background', ratio: 'Ratio', result: 'Result', use: 'Use',
    surface: {light: 'Light', white: 'White', dark: 'Dark', mint: 'Mint'}, size: 'Size', lead: 'Leading', do: 'Do', dont: 'Don’t',
    pass: {aaa: 'AAA', aa: 'AA', ui: 'UI 3:1', fail: 'Fails'}, name: 'Name', hover: 'Hover to preview', series: 'Series'},
  es: {copy: 'Copiar', copied: 'Copiado', token: 'Token', value: 'Valor', role: 'Rol', fg: 'Texto', bg: 'Fondo', ratio: 'Ratio', result: 'Resultado', use: 'Uso',
    surface: {light: 'Claro', white: 'Blanco', dark: 'Oscuro', mint: 'Menta'}, size: 'Tamaño', lead: 'Interlínea', do: 'Haz', dont: 'No hagas',
    pass: {aaa: 'AAA', aa: 'AA', ui: 'UI 3:1', fail: 'No cumple'}, name: 'Nombre', hover: 'Pasa el cursor para ver', series: 'Serie'},
};

/* ------------------------------------------------------------------------- demo frame */

type Surface = 'light' | 'white' | 'dark' | 'mint';

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
        <Atr dark={s === 'dark'} className={column ? undefined : 'atr-row'} style={column ? undefined : {display: 'contents'}}>{children}</Atr>
      </div>
      {switcher ? (
        <div className="atr-demo__bar">
          <span className="atr-demo__surfaces" role="group" aria-label="Surface">
            {(['light', 'white', 'dark', 'mint'] as Surface[]).map((k) => (
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

const ink = (hex: string) => (luminance(resolve(hex)) > 0.38 ? '#072f34' : '#ffffff');

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

type Pair = {label: string; fg: string; bg: string; kind?: 'text' | 'ui'};

export const defaultPairs: Pair[] = [
  {label: 'text-strong on surface-page', fg: 'var(--teal-800)', bg: 'var(--cloud-200)'},
  {label: 'text-body on surface-card', fg: 'var(--ink-700)', bg: 'var(--cloud-100)'},
  {label: 'text-muted on surface-card', fg: 'var(--teal-500)', bg: 'var(--cloud-100)'},
  {label: 'text-muted on surface-sunken', fg: 'var(--teal-500)', bg: 'var(--cloud-300)'},
  {label: 'text-on-dark on surface-dark', fg: 'var(--cloud-300)', bg: 'var(--teal-800)'},
  {label: 'text-on-dark-muted on surface-dark', fg: 'var(--teal-300)', bg: 'var(--teal-800)'},
  {label: 'mint on surface-dark (primary button)', fg: 'var(--mint-400)', bg: 'var(--teal-800)'},
  {label: 'teal on mint (mint button, chip)', fg: 'var(--teal-800)', bg: 'var(--mint-400)'},
  {label: 'teal on amber (amber button, badge)', fg: 'var(--teal-800)', bg: 'var(--amber-500)'},
  {label: 'teal on highlighter', fg: 'var(--teal-800)', bg: 'var(--amber-400)'},
  {label: 'white on danger (danger button)', fg: '#ffffff', bg: '#b5462b'},
  {label: 'focus ring (teal) on surface-page', fg: 'var(--teal-800)', bg: 'var(--cloud-200)', kind: 'ui'},
  {label: 'focus ring (mint) on surface-dark', fg: 'var(--mint-400)', bg: 'var(--teal-800)', kind: 'ui'},
  {label: 'input border on surface-card', fg: 'var(--teal-500)', bg: 'var(--cloud-100)', kind: 'ui'},
  {label: 'hairline on surface-card (decorative)', fg: 'var(--cloud-400)', bg: 'var(--cloud-100)', kind: 'ui'},
  ...status.map((s): Pair => ({label: `status-${s.key}: text on tint`, fg: s.fg, bg: s.bg})),
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
          return (
            <tr key={p.label}>
              <td>{p.label}</td>
              <td><span className="design-dot" style={{background: fg, outline: '1px solid var(--atrium-line)'}} /> <code>{fg}</code></td>
              <td><span className="design-dot" style={{background: bg, outline: '1px solid var(--atrium-line)'}} /> <code>{bg}</code></td>
              <td>{r.toFixed(2)}:1</td>
              <td><Atr><Badge tone={ok ? 'mint' : 'amber'}>{grade}</Badge></Atr></td>
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
          <div className="design-motion__track"><i style={{transform: on ? 'translateX(calc(100cqw - 24px))' : 'none', transition: `transform ${m.value} cubic-bezier(0.16, 1, 0.3, 1)`}} /></div>
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
      '  /* Brand palette: bg-teal-800, text-mint-400, border-cloud-400 ... */',
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
      '  --font-script: "Nothing You Could Do", cursive;',
      '',
      '  /* Radius: rounded-md is the card, rounded-full the pill */',
      ...radii.filter((r) => r.px !== 999).map((r) => `  --radius-${r.name.replace('radius-', '')}: ${r.px}px;`),
      '',
      '  --shadow-card: ' + shadows[0]!.value + ';',
      '  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);',
      '}',
    ];
    return <CodeBlock language="css" title="theme.css (Tailwind v4)">{lines.join('\n')}</CodeBlock>;
  }
  if (kind === 'dark') {
    return (
      <CodeBlock language="css" title="dark theme">{`<section data-atr-theme="dark">
  <!-- every role below this point is redefined: surface-page, text-body, status-*, focus-ring -->
</section>`}</CodeBlock>
    );
  }
  if (kind === 'infima') {
    return (
      <CodeBlock language="css" title="src/css/custom.css (this site)">{`@import './atrium-tokens.css';
@import './atrium-ui.css';

:root {
  --ifm-color-primary: var(--teal-500);
  --ifm-background-surface-color: var(--cloud-200);
  --ifm-font-family-base: var(--font-sans);
}`}</CodeBlock>
    );
  }
  const lines = [
    ':root {',
    '  /* Brand */',
    ...rawAll().slice(0, 6).map((s) => `  --${s.name}: ${s.value};`),
    '  /* ...every step of teal, mint, amber and cloud */',
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
