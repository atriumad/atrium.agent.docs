/**
 * Atrium design tokens: the single source of truth for the visual reference.
 *
 *   bun scripts/build-tokens.ts   writes src/css/atrium-tokens.css from this file
 *
 * The raw palette, type, spacing, radius and motion come from the brand design system
 * (kept locally in guides-rules/Atrium Suite/_ds, which is not published). The semantic status colors, the product ramp, the data
 * palette and the dark theme are the product layer on top: they were read from the Platform,
 * Manager and Mobile prototypes, which use them but never name them. Names here are the
 * canonical ones; packages/ui adopts them as they are.
 */

export type Lang = {en: string; es: string};

export type Swatch = {
  /** CSS custom property, without the leading dashes. */
  name: string;
  value: string;
  role: Lang;
};

const L = (en: string, es: string): Lang => ({en, es});

/* ---------------------------------------------------------------- brand palette */

export const brand = {
  teal: [
    {name: 'teal-900', value: '#042024', role: L('Deepest ink, near-black teal', 'Tinta más profunda, casi negro')},
    {name: 'teal-800', value: '#072f34', role: L('Deep Teal: the dark anchor of the brand', 'Deep Teal: el ancla oscura de la marca')},
    {name: 'teal-700', value: '#0e3a40', role: L('Raised surface on dark', 'Superficie elevada sobre oscuro')},
    {name: 'teal-500', value: '#2c6168', role: L('Hairlines on dark, muted text on light', 'Líneas finas sobre oscuro, texto secundario sobre claro')},
    {name: 'teal-300', value: '#6fa39f', role: L('Secondary text on dark', 'Texto secundario sobre oscuro')},
  ],
  mint: [
    {name: 'mint-500', value: '#8fe6c2', role: L('Saturated mint', 'Menta saturada')},
    {name: 'mint-400', value: '#b5f2db', role: L('Mint: the light accent, type on teal', 'Mint: el acento claro, texto sobre teal')},
    {name: 'mint-300', value: '#cdf6e6', role: L('Soft mint wash', 'Lavado suave de menta')},
    {name: 'mint-200', value: '#e4faf1', role: L('Faintest mint tint', 'Tinte de menta mínimo')},
  ],
  amber: [
    {name: 'amber-600', value: '#e0911a', role: L('Pressed amber', 'Ámbar presionado')},
    {name: 'amber-500', value: '#f7a823', role: L('Amber: campaign color, the warm accent', 'Amber: color de campaña, el acento cálido')},
    {name: 'amber-400', value: '#ffc21f', role: L('Highlighter: the marker swipe behind a word', 'Resaltador: la marca detrás de una palabra')},
    {name: 'amber-200', value: '#ffe6a8', role: L('Amber tint', 'Tinte de ámbar')},
  ],
  cloud: [
    {name: 'cloud-100', value: '#ffffff', role: L('White: cards and fields', 'Blanco: tarjetas y campos')},
    {name: 'cloud-200', value: '#f4f8f8', role: L('Page off-white', 'Fondo de página')},
    {name: 'cloud-300', value: '#e4eef0', role: L('Cloud: the cool brand white, sunken surfaces', 'Cloud: el blanco frío de la marca, superficies hundidas')},
    {name: 'cloud-400', value: '#cfdcdd', role: L('Hairline on light', 'Línea fina sobre claro')},
    {name: 'ink-700', value: '#1c2b2c', role: L('Body text on light', 'Texto de cuerpo sobre claro')},
  ],
} satisfies Record<string, Swatch[]>;

/* ------------------------------------------------------- semantic: surfaces, text, line */

export const semantic = {
  surface: [
    {name: 'surface-page', value: 'var(--cloud-200)', role: L('The page', 'La página')},
    {name: 'surface-card', value: 'var(--cloud-100)', role: L('Cards, fields, popovers', 'Tarjetas, campos, popovers')},
    {name: 'surface-sunken', value: 'var(--cloud-300)', role: L('Wells, table headers, inset panels', 'Huecos, cabeceras de tabla, paneles internos')},
    {name: 'surface-dark', value: 'var(--teal-800)', role: L('Dark chrome: the Manager, the hero', 'Chrome oscuro: el Manager, el hero')},
    {name: 'surface-dark-raised', value: 'var(--teal-700)', role: L('Cards on dark', 'Tarjetas sobre oscuro')},
    {name: 'surface-mint', value: 'var(--mint-400)', role: L('A mint field', 'Un campo menta')},
    {name: 'surface-amber', value: 'var(--amber-500)', role: L('An amber field: campaign, never an alert', 'Un campo ámbar: campaña, nunca una alerta')},
  ],
  text: [
    {name: 'text-strong', value: 'var(--teal-800)', role: L('Headlines on light', 'Titulares sobre claro')},
    {name: 'text-body', value: 'var(--ink-700)', role: L('Body on light', 'Cuerpo sobre claro')},
    {name: 'text-muted', value: 'var(--teal-500)', role: L('Secondary on light', 'Secundario sobre claro')},
    {name: 'text-on-dark', value: 'var(--cloud-300)', role: L('Body on deep teal', 'Cuerpo sobre teal profundo')},
    {name: 'text-on-dark-strong', value: 'var(--mint-400)', role: L('Headlines on deep teal', 'Titulares sobre teal profundo')},
    {name: 'text-on-dark-muted', value: 'var(--teal-300)', role: L('Secondary on deep teal', 'Secundario sobre teal profundo')},
  ],
  line: [
    {name: 'border-light', value: 'var(--cloud-400)', role: L('Hairline on light', 'Línea fina sobre claro')},
    {name: 'border-strong', value: 'var(--teal-800)', role: L('Outlined pills and focus', 'Píldoras con contorno y foco')},
    {name: 'border-on-dark', value: 'var(--teal-500)', role: L('Hairline on dark', 'Línea fina sobre oscuro')},
  ],
} satisfies Record<string, Swatch[]>;

/* --------------------------------------------------------------- semantic: status (product) */

export type Status = {
  key: 'positive' | 'warning' | 'danger' | 'info' | 'neutral';
  fg: string;
  bg: string;
  line: string;
  role: Lang;
};

/**
 * The brand has no red and no green; the product needs both. These come from the prototypes
 * and are the only colors that carry a meaning. Always pair them with a word or an icon.
 */
export const status: Status[] = [
  {key: 'positive', fg: '#0c7a55', bg: '#e4faf1', line: '#8fe6c2', role: L('Good, done, up', 'Bien, hecho, al alza')},
  {key: 'warning', fg: '#946005', bg: '#fff7e6', line: '#f7a823', role: L('Needs attention soon', 'Requiere atención pronto')},
  {key: 'danger', fg: '#b5462b', bg: '#fbeae4', line: '#c65b3c', role: L('Wrong, late, down', 'Mal, tarde, a la baja')},
  {key: 'info', fg: '#2c6168', bg: '#e6f4f6', line: '#9dbcbe', role: L('Neutral information', 'Información neutra')},
  {key: 'neutral', fg: '#1c2b2c', bg: '#eef4f4', line: '#cfdcdd', role: L('No state; a plain label', 'Sin estado; una etiqueta simple')},
];

/** Categorical colors for charts, in the order they are used. */
export const dataPalette: Swatch[] = [
  {name: 'data-1', value: '#072f34', role: L('Series 1: deep teal', 'Serie 1: teal profundo')},
  {name: 'data-2', value: '#2c8a8f', role: L('Series 2: sea teal', 'Serie 2: teal marino')},
  {name: 'data-3', value: '#8fe6c2', role: L('Series 3: mint', 'Serie 3: menta')},
  {name: 'data-4', value: '#f7a823', role: L('Series 4: amber', 'Serie 4: ámbar')},
  {name: 'data-5', value: '#c65b3c', role: L('Series 5: terracotta', 'Serie 5: terracota')},
  {name: 'data-6', value: '#9dbcbe', role: L('Series 6: grey-teal', 'Serie 6: gris teal')},
];

/** The six agents' identities, shared with the home page and the footer. */
export const agentIdentity = [
  {key: 'concierge', name: 'Concierge', head: '#0b5d55', eye: '#cfe7e1', bg: '#cfe7e1', fg: '#042f34'},
  {key: 'herald', name: 'Herald', head: '#ffc933', eye: '#042f34', bg: '#042f34', fg: '#f3efe4'},
  {key: 'host', name: 'Host', head: '#1e8c7c', eye: '#f3efe4', bg: '#f3efe4', fg: '#042f34'},
  {key: 'sommelier', name: 'Sommelier', head: '#c0653a', eye: '#f3efe4', bg: '#f7d7c4', fg: '#4a2412'},
  {key: 'steward', name: 'Steward', head: '#8a6410', eye: '#fff1c2', bg: '#fff1c2', fg: '#3d2c05'},
  {key: 'maitre', name: 'Maître', head: '#b8e89a', eye: '#042f34', bg: '#042f34', fg: '#f3efe4'},
];

/* ---------------------------------------------------------------------- typography */

export const fonts = [
  {
    name: 'Inter Tight',
    css: '--font-sans',
    stack: '"Inter Tight", system-ui, -apple-system, "Segoe UI", sans-serif',
    role: L('Everything: body, UI, headlines, numbers in tables', 'Todo: cuerpo, interfaz, titulares, números en tablas'),
    weights: '400 · 500 · 600 · 700',
  },
  {
    name: 'Instrument Serif',
    css: '--font-serif',
    stack: '"Instrument Serif", Georgia, "Times New Roman", serif',
    role: L('Emphasis words in italic and big stat figures. Never body copy', 'Palabras de énfasis en cursiva y cifras grandes. Nunca texto de cuerpo'),
    weights: '400 · 400 italic',
  },
  {
    name: 'Nimora',
    css: '--font-display',
    stack: '"Nimora", "Inter Tight", system-ui, sans-serif',
    role: L('The wordmark only; use the logo files, not the font', 'Solo el wordmark; usa los archivos del logo, no la fuente'),
    weights: '400',
  },
  {
    name: 'Nothing You Could Do',
    css: '--font-script',
    stack: '"Nothing You Could Do", "Segoe Script", cursive',
    role: L('One handwritten word per screen at most, for warmth', 'Como máximo una palabra manuscrita por pantalla, para dar calidez'),
    weights: '400',
  },
  {
    name: 'JetBrains Mono',
    css: '--font-mono',
    stack: '"JetBrains Mono", ui-monospace, Menlo, Consolas, monospace',
    role: L('Code, ids, tokens, tabular technical values', 'Código, ids, tokens, valores técnicos tabulares'),
    weights: '400 · 500',
  },
];

export type Step = {name: string; css: string; px: number; leading: number; use: Lang};

/** The brand ramp, for marketing and documentation. */
export const typeRamp: Step[] = [
  {name: '6xl', css: '--text-6xl', px: 72, leading: 1.0, use: L('Hero statements', 'Frases de portada')},
  {name: '5xl', css: '--text-5xl', px: 56, leading: 1.05, use: L('Page titles in marketing', 'Títulos de página en marketing')},
  {name: '4xl', css: '--text-4xl', px: 44, leading: 1.1, use: L('Section titles', 'Títulos de sección')},
  {name: '3xl', css: '--text-3xl', px: 32, leading: 1.15, use: L('Page titles in product', 'Títulos de página en producto')},
  {name: '2xl', css: '--text-2xl', px: 24, leading: 1.2, use: L('Card and panel titles', 'Títulos de tarjeta y panel')},
  {name: 'xl', css: '--text-xl', px: 20, leading: 1.3, use: L('Lead paragraphs', 'Párrafos de entrada')},
  {name: 'lg', css: '--text-lg', px: 18, leading: 1.5, use: L('Large body', 'Cuerpo grande')},
  {name: 'base', css: '--text-base', px: 16, leading: 1.6, use: L('Body', 'Cuerpo')},
  {name: 'sm', css: '--text-sm', px: 14, leading: 1.5, use: L('Dense UI, tables, helper text', 'Interfaz densa, tablas, ayudas')},
  {name: 'xs', css: '--text-xs', px: 12, leading: 1.4, use: L('Captions, badges, eyebrows', 'Pies, badges, eyebrows')},
];

export const tracking = [
  {name: 'tight', css: '--tracking-tight', value: '-0.02em', use: L('Headlines', 'Titulares')},
  {name: 'normal', css: '--tracking-normal', value: '0', use: L('Body', 'Cuerpo')},
  {name: 'wide', css: '--tracking-wide', value: '0.08em', use: L('Small caps labels', 'Etiquetas en versalitas')},
  {name: 'wider', css: '--tracking-wider', value: '0.18em', use: L('The signature spread-caps eyebrow', 'El eyebrow en mayúsculas espaciadas, la firma')},
  {name: 'widest', css: '--tracking-widest', value: '0.32em', use: L('Campaign lines on posters', 'Líneas de campaña en pósters')},
];

/* ------------------------------------------------------------ space, shape, motion */

export const space = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map((n) => ({
  name: `space-${n}`,
  rem: n === 0 ? 0 : ({1: 0.25, 2: 0.5, 3: 0.75, 4: 1, 5: 1.5, 6: 2, 7: 2.5, 8: 3, 10: 4, 12: 5, 16: 8} as Record<number, number>)[n]!,
}));

export const radii = [
  {name: 'radius-xs', px: 4, use: L('Inputs, small marks', 'Inputs, marcas pequeñas')},
  {name: 'radius-sm', px: 8, use: L('Fields, menus, table corners', 'Campos, menús, esquinas de tabla')},
  {name: 'radius-md', px: 14, use: L('The default card', 'La tarjeta por defecto')},
  {name: 'radius-lg', px: 22, use: L('Hero panels', 'Paneles de portada')},
  {name: 'radius-xl', px: 32, use: L('Marketing tiles', 'Teselas de marketing')},
  {name: 'radius-pill', px: 999, use: L('Buttons, chips, badges, tabs', 'Botones, chips, badges, tabs')},
];

export const shadows = [
  {name: 'shadow-card', value: '0 1px 2px rgba(7, 47, 52, 0.05), 0 8px 24px rgba(7, 47, 52, 0.06)', use: L('Floating UI only', 'Solo interfaz flotante')},
  {name: 'shadow-pop', value: '0 12px 40px rgba(7, 47, 52, 0.14)', use: L('Menus and popovers', 'Menús y popovers')},
  {name: 'shadow-soft', value: '0 2px 6px rgba(7, 47, 52, 0.04), 0 14px 34px rgba(7, 47, 52, 0.07)', use: L('Bento tiles', 'Teselas bento')},
  {name: 'shadow-float', value: '0 4px 10px rgba(7, 47, 52, 0.05), 0 24px 60px rgba(7, 47, 52, 0.12)', use: L('Hover lift, dialogs', 'Elevación al pasar el cursor, diálogos')},
  {name: 'shadow-dark', value: '0 18px 50px rgba(0, 0, 0, 0.35)', use: L('Floating on dark', 'Flotante sobre oscuro')},
];

export const motion = [
  {name: 'dur-fast', value: '120ms', use: L('Press, toggles', 'Pulsación, interruptores')},
  {name: 'dur-base', value: '220ms', use: L('Hover, color, small moves', 'Hover, color, movimientos pequeños')},
  {name: 'dur-slow', value: '420ms', use: L('Panels, dialogs, entrances', 'Paneles, diálogos, entradas')},
];

export const breakpoints = [
  {name: 'sm', px: 640, use: L('Large phone', 'Móvil grande')},
  {name: 'md', px: 768, use: L('Tablet', 'Tableta')},
  {name: 'lg', px: 1024, use: L('The sidebar appears', 'Aparece la barra lateral')},
  {name: 'xl', px: 1280, use: L('Desktop', 'Escritorio')},
  {name: '2xl', px: 1536, use: L('Wide: content stops growing at 1200', 'Ancho: el contenido deja de crecer en 1200')},
];

export const zIndex = [
  {name: 'z-base', value: 0},
  {name: 'z-sticky', value: 10},
  {name: 'z-nav', value: 20},
  {name: 'z-popover', value: 30},
  {name: 'z-dialog', value: 40},
  {name: 'z-toast', value: 50},
];

/* ----------------------------------------------------------------- contrast maths */

function channel(v: number): number {
  const s = v / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

export function luminance(hex: string): number {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.replace(/./g, (c) => c + c) : h, 16);
  return 0.2126 * channel((n >> 16) & 255) + 0.7152 * channel((n >> 8) & 255) + 0.0722 * channel(n & 255);
}

/** WCAG 2.2 contrast ratio between two #rrggbb colors. */
export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}

/** Resolve a `var(--name)` that points at a raw palette color, or return the hex as it is. */
export function resolve(value: string): string {
  const m = /^var\(--([a-z0-9-]+)\)$/.exec(value);
  if (!m) return value;
  const all = [...Object.values(brand).flat(), ...dataPalette];
  const found = all.find((s) => s.name === m[1]);
  return found ? resolve(found.value) : value;
}
