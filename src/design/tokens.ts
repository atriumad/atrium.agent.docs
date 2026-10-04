/**
 * Atrium design tokens: the single source of truth for the visual reference.
 *
 *   bun scripts/build-tokens.ts   writes src/css/atrium-tokens.css from this file
 *
 * Raw palette, type, spacing, radius, borders, shadows and motion are the ATRIUM AD design
 * system's (a copy lives in design/system, see design/system/SOURCE.md). The product layer is
 * ours: status colours, a data palette and the dark theme. It is built only from that palette,
 * because the system defines no green, no amber and no blue. Names are the system's own;
 * packages/ui adopts them as they are.
 */

export type Lang = {en: string; es: string};

export type Swatch = {
  /** CSS custom property, without the leading dashes. */
  name: string;
  value: string;
  role: Lang;
};

const L = (en: string, es: string): Lang => ({en, es});

/* ---------------------------------------------------------------- raw palette */

export const brand = {
  charcoal: [
    {name: 'charcoal-900', value: '#1c1f1d', role: L('The deepest charcoal: headlines, large dark fields', 'El carbón más profundo: titulares, campos oscuros grandes')},
    {name: 'charcoal-800', value: '#242726', role: L('Charcoal: the dark anchor. Text, rules, the primary button', 'Charcoal: el ancla oscura. Texto, reglas, el botón primario')},
    {name: 'charcoal-700', value: '#333734', role: L('A raised dark surface', 'Una superficie oscura elevada')},
    {name: 'charcoal-500', value: '#5a605b', role: L('Secondary text, lines on dark', 'Texto secundario, líneas sobre oscuro')},
    {name: 'charcoal-400', value: '#8c918c', role: L('Tertiary text on dark, disabled', 'Texto terciario sobre oscuro, deshabilitado')},
  ],
  sage: [
    {name: 'sage-500', value: '#546054', role: L('The sage the charcoal texture resolves to', 'El salvia al que se resuelve la textura carbón')},
    {name: 'sage-300', value: '#8a968a', role: L('Muted sage', 'Salvia atenuado')},
  ],
  lime: [
    {name: 'lime-600', value: '#aedc33', role: L('Pressed lime', 'Lima presionado')},
    {name: 'lime-500', value: '#c6f24e', role: L('Lime: the signal. One lime field per view', 'Lime: la señal. Un campo lima por vista')},
    {name: 'lime-300', value: '#dff89c', role: L('Lime wash', 'Lavado de lima')},
    {name: 'lime-100', value: '#f1fcd4', role: L('The faintest lime tint', 'El tinte de lima más tenue')},
  ],
  clay: [
    {name: 'clay-700', value: '#9a3817', role: L('Product addition: clay text on a clay tint, and the clay button pressed', 'Adición del producto: texto arcilla sobre un tinte arcilla, y el botón arcilla presionado')},
    {name: 'clay-600', value: '#b8421f', role: L('Pressed clay; the clay button fill; clay text on a light field', 'Arcilla presionada; el relleno del botón arcilla; texto arcilla sobre un campo claro')},
    {name: 'clay-500', value: '#d9542b', role: L('Clay: warm secondary, focus ring, errors', 'Clay: secundario cálido, anillo de foco, errores')},
    {name: 'clay-300', value: '#eda58c', role: L('Clay wash', 'Lavado de arcilla')},
    {name: 'clay-200', value: '#f6d8cc', role: L('Clay tint', 'Tinte de arcilla')},
  ],
  cream: [
    {name: 'cream-100', value: '#fbf8f1', role: L('The lightest cream: card surfaces. There is no pure white', 'El crema más claro: superficies de tarjeta. No hay blanco puro')},
    {name: 'cream-200', value: '#f4eee2', role: L('Cream: the page paper', 'Cream: el papel de la página')},
    {name: 'cream-300', value: '#e9e1d1', role: L('Sunken cream: wells, table headers', 'Crema hundido: huecos, cabeceras de tabla')},
    {name: 'cream-400', value: '#d4cab6', role: L('Hairline on light', 'Línea fina sobre claro')},
  ],
} satisfies Record<string, Swatch[]>;

/* ------------------------------------------------------- semantic: surfaces, text, line */

export const semantic = {
  surface: [
    {name: 'surface-page', value: 'var(--cream-200)', role: L('The page paper', 'El papel de la página')},
    {name: 'surface-card', value: 'var(--cream-100)', role: L('Cards, fields, popovers', 'Tarjetas, campos, popovers')},
    {name: 'surface-sunken', value: 'var(--cream-300)', role: L('Wells, table headers, quoted text', 'Huecos, cabeceras de tabla, texto citado')},
    {name: 'surface-dark', value: 'var(--charcoal-800)', role: L('Dark fields: the footer, a proof band, the Manager chrome', 'Campos oscuros: el pie, una banda de pruebas, el chrome del Manager')},
    {name: 'surface-dark-raised', value: 'var(--charcoal-700)', role: L('Cards on a dark field', 'Tarjetas sobre un campo oscuro')},
    {name: 'surface-lime', value: 'var(--lime-500)', role: L('The one lime field of a view', 'El único campo lima de una vista')},
    {name: 'surface-clay', value: 'var(--clay-500)', role: L('A clay field: a quote or a warning, never a button', 'Un campo arcilla: una cita o un aviso, nunca un botón')},
  ],
  text: [
    {name: 'text-strong', value: 'var(--charcoal-900)', role: L('Headlines', 'Titulares')},
    {name: 'text-body', value: 'var(--charcoal-800)', role: L('Body', 'Cuerpo')},
    {name: 'text-muted', value: 'var(--charcoal-500)', role: L('Secondary text and caps labels', 'Texto secundario y etiquetas en mayúsculas')},
    {name: 'text-on-dark', value: 'var(--cream-300)', role: L('Body on a dark field', 'Cuerpo sobre un campo oscuro')},
    {name: 'text-on-dark-strong', value: 'var(--lime-500)', role: L('Headlines and figures on a dark field', 'Titulares y cifras sobre un campo oscuro')},
    {name: 'text-on-lime', value: 'var(--charcoal-900)', role: L('Text on lime', 'Texto sobre lima')},
    {name: 'text-on-clay', value: 'var(--cream-100)', role: L('Text on clay (large sizes only)', 'Texto sobre arcilla (solo tamaños grandes)')},
  ],
  line: [
    {name: 'border-light', value: 'var(--cream-400)', role: L('The 1px hairline on light', 'La línea fina de 1 px sobre claro')},
    {name: 'border-strong', value: 'var(--charcoal-800)', role: L('A 1px ink border, for emphasis', 'Un borde de tinta de 1 px, para énfasis')},
    {name: 'border-on-dark', value: 'var(--charcoal-500)', role: L('The hairline on a dark field', 'La línea fina sobre un campo oscuro')},
    {name: 'rule', value: 'var(--charcoal-800)', role: L('The 3px section rule', 'La regla de sección de 3 px')},
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
 * The system has one signal (lime) and one warm colour (clay). It has no green, amber or blue,
 * so status is told apart by fill, a left rule and a mark, never by hue alone:
 * positive is lime, danger is clay, warning is a quiet field with a clay rule, and information
 * and neutral stay in cream. Always pair them with a word and a mark.
 */
export const status: Status[] = [
  {key: 'positive', fg: '#242726', bg: '#f1fcd4', line: '#aedc33', role: L('Done, resolved, up', 'Hecho, resuelto, al alza')},
  {key: 'warning', fg: '#1c1f1d', bg: '#e9e1d1', line: '#d9542b', role: L('Needs attention soon', 'Requiere atención pronto')},
  {key: 'danger', fg: '#9a3817', bg: '#f6d8cc', line: '#d9542b', role: L('Wrong, late, down', 'Mal, tarde, a la baja')},
  {key: 'info', fg: '#5a605b', bg: '#e9e1d1', line: '#d4cab6', role: L('Neutral information', 'Información neutra')},
  {key: 'neutral', fg: '#5a605b', bg: '#fbf8f1', line: '#d4cab6', role: L('No state; a plain label', 'Sin estado; una etiqueta simple')},
];

/** Categorical colours for charts, in the order they are used. */
export const dataPalette: Swatch[] = [
  {name: 'data-1', value: '#242726', role: L('Series 1: charcoal', 'Serie 1: carbón')},
  {name: 'data-2', value: '#d9542b', role: L('Series 2: clay', 'Serie 2: arcilla')},
  {name: 'data-3', value: '#aedc33', role: L('Series 3: lime', 'Serie 3: lima')},
  {name: 'data-4', value: '#546054', role: L('Series 4: sage', 'Serie 4: salvia')},
  {name: 'data-5', value: '#eda58c', role: L('Series 5: clay wash', 'Serie 5: lavado de arcilla')},
  {name: 'data-6', value: '#8c918c', role: L('Series 6: grey', 'Serie 6: gris')},
];

/** The six agents keep their own faces and colours until the identity owner decides otherwise. */
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
    role: L('Everything: display, headings, body, UI. Regular 400, with 500 as the one step up', 'Todo: display, titulares, cuerpo, interfaz. Regular 400, con 500 como único escalón'),
    weights: '400 · 500',
  },
  {
    name: 'Instrument Serif',
    css: '--font-serif',
    stack: '"Instrument Serif", Georgia, "Times New Roman", serif',
    role: L('Italic emphasis phrases and every figure. Never body copy', 'Frases de énfasis en cursiva y cada cifra. Nunca texto de cuerpo'),
    weights: '400 · 400 italic',
  },
  {
    name: 'JetBrains Mono',
    css: '--font-mono',
    stack: '"JetBrains Mono", ui-monospace, Menlo, Consolas, monospace',
    role: L('Code, ids and tokens in the docs and the product. Not part of the brand system', 'Código, ids y tokens en la documentación y el producto. No es parte del sistema de marca'),
    weights: '400 · 500',
  },
];

export type Step = {name: string; css: string; px: number; leading: number; use: Lang};

export const typeRamp: Step[] = [
  {name: '6xl', css: '--text-6xl', px: 72, leading: 0.92, use: L('Display statements', 'Frases de display')},
  {name: '5xl', css: '--text-5xl', px: 56, leading: 0.95, use: L('Page titles in marketing', 'Títulos de página en marketing')},
  {name: '4xl', css: '--text-4xl', px: 44, leading: 1.05, use: L('Section titles (h2)', 'Títulos de sección (h2)')},
  {name: '3xl', css: '--text-3xl', px: 32, leading: 1.05, use: L('Page titles in product', 'Títulos de página en producto')},
  {name: '2xl', css: '--text-2xl', px: 24, leading: 1.15, use: L('Card and panel titles (h3)', 'Títulos de tarjeta y panel (h3)')},
  {name: 'xl', css: '--text-xl', px: 20, leading: 1.3, use: L('Lead paragraphs', 'Párrafos de entrada')},
  {name: 'lg', css: '--text-lg', px: 18, leading: 1.4, use: L('Large body, small headings (h4)', 'Cuerpo grande, títulos pequeños (h4)')},
  {name: 'base', css: '--text-base', px: 16, leading: 1.6, use: L('Body', 'Cuerpo')},
  {name: 'sm', css: '--text-sm', px: 14, leading: 1.5, use: L('Dense UI, tables, helper text', 'Interfaz densa, tablas, ayudas')},
  {name: 'xs', css: '--text-xs', px: 12, leading: 1.4, use: L('Captions, hints', 'Pies, ayudas')},
  {name: '2xs', css: '--text-2xs', px: 11, leading: 1.2, use: L('The wide-caps label', 'La etiqueta en mayúsculas espaciadas')},
];

export const tracking = [
  {name: 'tighter', css: '--tracking-tighter', value: '-0.035em', use: L('Big display lockups', 'Bloques de display grandes')},
  {name: 'tight', css: '--tracking-tight', value: '-0.02em', use: L('Headlines', 'Titulares')},
  {name: 'normal', css: '--tracking-normal', value: '0', use: L('Body, and the italic serif', 'Cuerpo, y la serif cursiva')},
  {name: 'wide', css: '--tracking-wide', value: '0.06em', use: L('Chips, badges, buttons in caps', 'Chips, badges, botones en mayúsculas')},
  {name: 'wider', css: '--tracking-wider', value: '0.16em', use: L('The signature wide-caps label', 'La etiqueta en mayúsculas espaciadas, la firma')},
  {name: 'widest', css: '--tracking-widest', value: '0.28em', use: L('Rare: a deck cover line', 'Raro: una línea de portada de una presentación')},
];

/* ------------------------------------------------------------ space, shape, motion */

const REM: Record<number, number> = {1: 0.25, 2: 0.5, 3: 0.75, 4: 1, 5: 1.5, 6: 2, 7: 2.5, 8: 3, 10: 4, 12: 5.5, 16: 8};
export const space = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map((n) => ({name: `space-${n}`, rem: n === 0 ? 0 : REM[n]!}));

export const radii = [
  {name: 'radius-none', px: 0, use: L('Rules, full-bleed blocks', 'Reglas, bloques a sangre')},
  {name: 'radius-xs', px: 2, use: L('Badges, the checkbox', 'Badges, el checkbox')},
  {name: 'radius-sm', px: 4, use: L('Buttons and fields', 'Botones y campos')},
  {name: 'radius-md', px: 6, use: L('The default card', 'La tarjeta por defecto')},
  {name: 'radius-lg', px: 10, use: L('A large panel', 'Un panel grande')},
  {name: 'radius-pill', px: 999, use: L('Chips only. Never a button', 'Solo chips. Nunca un botón')},
];

export const borders = [
  {name: 'border-width', value: '1px', use: L('The hairline and the outline button', 'La línea fina y el botón de contorno')},
  {name: 'border-width-bold', value: '2px', use: L('Focus ring, a strong edge', 'Anillo de foco, un borde fuerte')},
  {name: 'border-width-rule', value: '3px', use: L('The section rule', 'La regla de sección')},
];

export const shadows = [
  {name: 'shadow-card', value: '0 1px 0 rgba(36, 39, 38, 0.06)', use: L('A barely-there lift for a card on paper', 'Una elevación casi invisible para una tarjeta sobre papel')},
  {name: 'shadow-raised', value: '0 2px 0 var(--charcoal-800)', use: L('The printed offset: the one emphasis card', 'El desfase impreso: la única tarjeta de énfasis')},
  {name: 'shadow-pop', value: '0 10px 30px rgba(36, 39, 38, 0.12)', use: L('Menus and dialogs: the only diffuse shadow', 'Menús y diálogos: la única sombra difusa')},
  {name: 'shadow-dark', value: '0 20px 60px rgba(0, 0, 0, 0.4)', use: L('Floating on a dark field', 'Flotando sobre un campo oscuro')},
];

export const motion = [
  {name: 'dur-fast', value: '110ms', use: L('Press, toggles', 'Pulsación, interruptores')},
  {name: 'dur-base', value: '200ms', use: L('Hover, colour, small moves', 'Hover, color, movimientos pequeños')},
  {name: 'dur-slow', value: '380ms', use: L('Panels, dialogs, entrances', 'Paneles, diálogos, entradas')},
];

export const breakpoints = [
  {name: 'sm', px: 640, use: L('Large phone', 'Móvil grande')},
  {name: 'md', px: 768, use: L('Tablet', 'Tableta')},
  {name: 'lg', px: 1024, use: L('The side navigation appears', 'Aparece la navegación lateral')},
  {name: 'xl', px: 1280, use: L('Desktop', 'Escritorio')},
  {name: '2xl', px: 1440, use: L('Wide: content stops growing at 1240', 'Ancho: el contenido deja de crecer en 1240')},
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

/** WCAG 2.2 contrast ratio between two #rrggbb colours. */
export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}

/** Resolve a `var(--name)` that points at a raw palette colour, or return the hex as it is. */
export function resolve(value: string): string {
  const m = /^var\(--([a-z0-9-]+)\)$/.exec(value);
  if (!m) return value;
  const all = [...Object.values(brand).flat(), ...dataPalette, ...Object.values(semantic).flat()];
  const found = all.find((s) => s.name === m[1]);
  return found ? resolve(found.value) : value;
}
