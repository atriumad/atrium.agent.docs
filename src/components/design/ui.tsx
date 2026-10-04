import {
  useId, useState,
  type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode,
  type SelectHTMLAttributes, type TextareaHTMLAttributes,
} from 'react';
import {
  AlertTriangle, ArrowDownRight, ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Info,
  Minus, XCircle, X,
} from 'lucide-react';
import {UI, useLang} from './lang';

/**
 * The Atrium UI primitives, as the visual reference renders them. Styles live in
 * src/css/atrium-ui.css. The same names and props move to packages/ui when it is built.
 */

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');

/** Scopes the component styles. Put `dark` on a surface that uses the dark theme. */
export function Atr({children, dark, className, style}: {children: ReactNode; dark?: boolean; className?: string; style?: React.CSSProperties}) {
  return <div className={cx('atr', className)} data-atr-theme={dark ? 'dark' : undefined} style={style}>{children}</div>;
}

/* ---------------------------------------------------------------------- type accents */

export const Eyebrow = ({children, tone, rule = true}: {children: ReactNode; tone?: 'ink' | 'on-dark' | 'lime'; rule?: boolean}) => (
  <span className={cx('atr-eyebrow', tone && `atr-eyebrow--${tone}`, !rule && 'atr-eyebrow--norule')}>{children}</span>
);

/** The flat lime block behind one word. */
export const Highlight = ({children, color}: {children: ReactNode; color?: 'clay'}) => (
  <span className={cx('atr-highlight', color && `atr-highlight--${color}`)}>{children}</span>
);

/** The italic-serif phrase inside a headline. */
export const Emphasis = ({children}: {children: ReactNode}) => <em className="atr-emph">{children}</em>;
export const Emph = Emphasis;

/** The heavy section divider, optionally carrying a caps label. */
export const Rule = ({label, weight = 'bold', tone}: {label?: string; weight?: 'bold' | 'hair'; tone?: 'on-dark'}) => (
  <div className={cx('atr-rule', weight === 'hair' && 'atr-rule--hair', tone === 'on-dark' && 'atr-rule--on-dark')} role="separator">
    <span />
    {label ? <span className="atr-caps">{label}</span> : null}
    {label ? <span /> : null}
  </div>
);

/** A big serif figure with a caps caption: the proof device. */
export const StatFigure = ({value, label, tone, size}: {value: ReactNode; label: string; tone?: 'lime' | 'clay' | 'cream'; size?: 'sm' | 'lg'}) => (
  <div className={cx('atr-figure', size && `atr-figure--${size}`, tone && `atr-figure--${tone}`)}>
    <span className="atr-figure__value">{value}</span>
    <span className="atr-caps">{label}</span>
  </div>
);

/** The typographic mark. No logo artwork exists for this brand. */
export const Wordmark = ({size, tone}: {size?: 'sm' | 'lg'; tone?: 'cream' | 'lime'}) => (
  <span className={cx('atr-wordmark', size && `atr-wordmark--${size}`, tone && `atr-wordmark--${tone}`)}><span>Atrium</span><span>AD</span></span>
);

/* ------------------------------------------------------------------------- actions */

export type ButtonVariant = 'primary' | 'lime' | 'clay' | 'outline' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
  /** An icon-only button. `children` becomes the accessible name. */
  iconOnly?: boolean;
};

export function Button({variant = 'primary', size = 'md', block, icon, iconRight, loading, iconOnly, children, className, disabled, ...rest}: ButtonProps) {
  return (
    <button
      type="button"
      className={cx('atr-btn', `atr-btn--${variant}`, size !== 'md' && `atr-btn--${size}`, block && 'atr-btn--block', iconOnly && 'atr-btn--icon', className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-label={iconOnly && typeof children === 'string' ? children : undefined}
      {...rest}>
      {loading ? <span className="atr-spin" aria-hidden="true" /> : icon}
      {iconOnly ? null : children}
      {iconRight}
    </button>
  );
}

export type ChipVariant = 'outline' | 'ink' | 'lime' | 'clay' | 'dark';

/** The only pill in the system: tags and filters. With onClick it is a toggle. */
export function Chip({variant = 'outline', size = 'md', active, count, onRemove, children, onClick}: {
  variant?: ChipVariant; size?: 'sm' | 'md'; active?: boolean; count?: number; onRemove?: () => void; children: ReactNode; onClick?: () => void;
}) {
  const ui = UI[useLang()];
  const cls = cx('atr-chip', variant !== 'outline' && `atr-chip--${variant}`, size === 'sm' && 'atr-chip--sm');
  const body = <>{children}{count !== undefined ? <span className="atr-chip__count">{count}</span> : null}</>;
  if (!onClick) {
    return (
      <span className={cls}>
        {body}
        {onRemove ? <button type="button" className="atr-chip__x" onClick={onRemove} aria-label={ui.remove}><X size={12} /></button> : null}
      </span>
    );
  }
  return <button type="button" className={cls} aria-pressed={active ?? false} onClick={onClick}>{body}</button>;
}

/* ------------------------------------------------------------------ badge and status */

export type BadgeVariant = 'ink' | 'lime' | 'clay' | 'quiet';
export type StatusKey = 'positive' | 'warning' | 'danger' | 'info' | 'neutral';

export const Badge = ({variant = 'ink', children}: {variant?: BadgeVariant; children: ReactNode}) => (
  <span className={cx('atr-badge', variant !== 'ink' && `atr-badge--${variant}`)}>{children}</span>
);

const STATUS_ICON = {positive: CheckCircle2, warning: AlertTriangle, danger: XCircle, info: Info, neutral: Minus};

/** A status always carries a word and a mark: a fill, a left rule and an icon or a dot. */
export function StatusBadge({status, children, dot}: {status: StatusKey; children: ReactNode; dot?: boolean}) {
  const Icon = STATUS_ICON[status];
  return (
    <span className={cx('atr-badge', 'atr-status', `atr-status--${status}`)}>
      {dot ? <span className="atr-dot" aria-hidden="true" /> : <Icon size={12} aria-hidden="true" />}
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------------------- card */

export type CardTone = 'paper' | 'ruled' | 'sunken' | 'dark' | 'lime' | 'clay';

/** A drawn container: a hairline by default, a 1px ink border for emphasis, a 2px printed offset for the one card that matters. */
export function Card({tone = 'paper', elevation = 'flat', interactive, padding, title, description, children, className}: {
  tone?: CardTone; elevation?: 'flat' | 'card' | 'offset' | 'pop'; interactive?: boolean; padding?: 'none' | 'sm' | 'lg';
  title?: ReactNode; description?: ReactNode; children?: ReactNode; className?: string;
}) {
  return (
    <div className={cx('atr-card', tone !== 'paper' && `atr-card--${tone}`, elevation !== 'flat' && `atr-card--${elevation}`, padding && `atr-card--pad-${padding}`, interactive && 'atr-card--interactive', className)}>
      {title ? <h4 className="atr-card__title">{title}</h4> : null}
      {description ? <p className="atr-card__desc">{description}</p> : null}
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------------- forms */

type FieldProps = {label: string; hint?: ReactNode; error?: ReactNode; optional?: boolean; children: (a: {id: string; describedBy: string | undefined; invalid: boolean}) => ReactNode};

/** The label, the control, the hint and the error, wired together for assistive technology. */
export function Field({label, hint, error, optional, children}: FieldProps) {
  const id = useId();
  const ui = UI[useLang()];
  const hintId = hint || error ? `${id}-d` : undefined;
  return (
    <div className="atr-field">
      <label className="atr-label" htmlFor={id}>{label}{optional ? <span className="atr-label__opt"> {ui.optional}</span> : null}</label>
      {children({id, describedBy: hintId, invalid: Boolean(error)})}
      {error ? <span id={hintId} className="atr-error" role="alert"><XCircle size={14} aria-hidden="true" />{error}</span> : hint ? <span id={hintId} className="atr-hint">{hint}</span> : null}
    </div>
  );
}

export function Input({label, hint, error, optional, small, ...rest}: InputHTMLAttributes<HTMLInputElement> & {label: string; hint?: ReactNode; error?: ReactNode; optional?: boolean; small?: boolean}) {
  return (
    <Field label={label} hint={hint} error={error} optional={optional}>
      {({id, describedBy, invalid}) => <input id={id} className={cx('atr-input', small && 'atr-input--sm')} aria-invalid={invalid || undefined} aria-describedby={describedBy} {...rest} />}
    </Field>
  );
}

export function Textarea({label, hint, error, optional, ...rest}: TextareaHTMLAttributes<HTMLTextAreaElement> & {label: string; hint?: ReactNode; error?: ReactNode; optional?: boolean}) {
  return (
    <Field label={label} hint={hint} error={error} optional={optional}>
      {({id, describedBy, invalid}) => <textarea id={id} className="atr-input" aria-invalid={invalid || undefined} aria-describedby={describedBy} {...rest} />}
    </Field>
  );
}

export function Select({label, hint, error, optional, options, ...rest}: SelectHTMLAttributes<HTMLSelectElement> & {label: string; hint?: ReactNode; error?: ReactNode; optional?: boolean; options: string[]}) {
  return (
    <Field label={label} hint={hint} error={error} optional={optional}>
      {({id, describedBy, invalid}) => (
        <select id={id} className="atr-input" aria-invalid={invalid || undefined} aria-describedby={describedBy} {...rest}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      )}
    </Field>
  );
}

export const Check = ({label, type = 'checkbox', ...rest}: InputHTMLAttributes<HTMLInputElement> & {label: ReactNode; type?: 'checkbox' | 'radio'}) => (
  <label className="atr-check"><input type={type} {...rest} /><span>{label}</span></label>
);

export const Switch = ({label, ...rest}: InputHTMLAttributes<HTMLInputElement> & {label: ReactNode}) => (
  <label className="atr-switch"><input type="checkbox" role="switch" {...rest} /><span>{label}</span></label>
);

/* -------------------------------------------------------------------------- tabs */

/** Filter tabs are chips: the only pill. They switch views of the same list. */
export function Tabs<T extends string>({items, value, onChange, label}: {items: {id: T; label: string; count?: number}[]; value: T; onChange: (v: T) => void; label: string}) {
  return (
    <div className="atr-tabs" role="tablist" aria-label={label}>
      {items.map((t) => (
        <button key={t.id} type="button" role="tab" className="atr-chip" aria-selected={value === t.id} onClick={() => onChange(t.id)}>
          {t.label}{t.count !== undefined ? <span className="atr-chip__count">{t.count}</span> : null}
        </button>
      ))}
    </div>
  );
}

export function UnderlineTabs<T extends string>({items, value, onChange, label}: {items: {id: T; label: string}[]; value: T; onChange: (v: T) => void; label: string}) {
  return (
    <div className="atr-underline-tabs" role="tablist" aria-label={label}>
      {items.map((t) => <button key={t.id} type="button" role="tab" aria-selected={value === t.id} onClick={() => onChange(t.id)}>{t.label}</button>)}
    </div>
  );
}

export function Segmented<T extends string>({items, value, onChange, label}: {items: {id: T; label: string}[]; value: T; onChange: (v: T) => void; label: string}) {
  return (
    <div className="atr-seg" role="group" aria-label={label}>
      {items.map((t) => <button key={t.id} type="button" aria-pressed={value === t.id} onClick={() => onChange(t.id)}>{t.label}</button>)}
    </div>
  );
}

/* --------------------------------------------------------------------------- data */

export function Delta({value, goodWhen = 'up'}: {value: number; goodWhen?: 'up' | 'down'}) {
  const ui = UI[useLang()];
  const dir = value === 0 ? 'flat' : value > 0 ? 'up' : 'down';
  const good = dir === 'flat' ? 'flat' : (dir === goodWhen ? 'up' : 'down');
  const Icon = dir === 'up' ? ArrowUpRight : dir === 'down' ? ArrowDownRight : Minus;
  return <span className={cx('atr-delta', good === 'down' && 'atr-delta--down', good === 'flat' && 'atr-delta--flat')}><Icon size={14} aria-hidden="true" />{Math.abs(value)}%<span className="atr-sr">{dir === 'up' ? ui.up : dir === 'down' ? ui.down : ui.flat}</span></span>;
}

export function Sparkline({values, width = 120, height = 32, label}: {values: number[]; width?: number; height?: number; label: string}) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pts = values.map((v, i) => `${(i / (values.length - 1)) * width},${height - 3 - ((v - min) / (max - min || 1)) * (height - 6)}`);
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label}>
      <polyline points={pts.join(' ')} fill="none" stroke="var(--data-1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts.at(-1)!.split(',')[0]} cy={pts.at(-1)!.split(',')[1]} r="3" fill="var(--clay-500)" />
    </svg>
  );
}

export function Stat({label, value, unit, delta, note, goodWhen, spark}: {label: string; value: ReactNode; unit?: string; delta?: number; note?: string; goodWhen?: 'up' | 'down'; spark?: number[]}) {
  const ui = UI[useLang()];
  return (
    <div className="atr-stat">
      <span className="atr-caps">{label}</span>
      <span className="atr-stat__value">{value}{unit ? <span className="atr-stat__unit">{unit}</span> : null}{delta !== undefined ? <Delta value={delta} goodWhen={goodWhen ?? 'up'} /> : null}</span>
      {spark ? <Sparkline values={spark} label={`${label} ${ui.trend}`} /> : null}
      {note ? <span className="atr-stat__note">{note}</span> : null}
    </div>
  );
}

export function Bars({data, height = 120}: {data: {label: string; value: number}[]; height?: number}) {
  const max = Math.max(...data.map((d) => d.value));
  const w = 28;
  const gap = 12;
  return (
    <svg width={data.length * (w + gap)} height={height + 22} role="img" aria-label={data.map((d) => `${d.label}: ${d.value}`).join(', ')}>
      {data.map((d, i) => {
        const h = (d.value / max) * height;
        return (
          <g key={d.label} transform={`translate(${i * (w + gap)} 0)`}>
            <rect className="atr-bar" y={height - h} width={w} height={h} rx="6" />
            <text x={w / 2} y={height + 16} textAnchor="middle" fontSize="11" fill="var(--text-muted)">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

export function ScoreRing({value, size = 120, label}: {value: number; size?: number; label: string}) {
  const r = (size - 14) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${label}: ${value} of 100`}>
      <circle className="atr-ring-track" cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth="10" />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--charcoal-800)" strokeWidth="10" strokeLinecap="butt" strokeDasharray={`${(value / 100) * c} ${c}`} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontFamily="var(--font-serif)" fontSize={size * 0.38} fill="var(--text-strong)">{value}</text>
    </svg>
  );
}

export const Avatar = ({name, size}: {name: string; size?: 'sm' | 'lg'}) => (
  <span className={cx('atr-avatar', size && `atr-avatar--${size}`)} role="img" aria-label={name}>{name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()}</span>
);

/** A sortable table, as the Manager and the Platform lists use it. */
export function DataTable<Row extends Record<string, ReactNode>>({columns, rows, label}: {
  columns: {key: keyof Row & string; label: string; numeric?: boolean; sortable?: boolean}[]; rows: Row[]; label: string;
}) {
  const [sort, setSort] = useState<{key: string; dir: 'asc' | 'desc'} | null>(null);
  const sorted = sort
    ? [...rows].sort((a, b) => {
        const x = String(a[sort.key]); const y = String(b[sort.key]);
        const r = x.localeCompare(y, undefined, {numeric: true});
        return sort.dir === 'asc' ? r : -r;
      })
    : rows;
  return (
    <div className="atr-table-wrap">
      <table className="atr-table" aria-label={label}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={c.numeric ? 'is-num' : undefined} aria-sort={sort?.key === c.key ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined}>
                {c.sortable ? (
                  <button type="button" onClick={() => setSort({key: c.key, dir: sort?.key === c.key && sort.dir === 'asc' ? 'desc' : 'asc'})}>
                    {c.label}{sort?.key === c.key ? (sort.dir === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />) : null}
                  </button>
                ) : c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{sorted.map((r, i) => <tr key={i}>{columns.map((c) => <td key={c.key} className={c.numeric ? 'is-num' : undefined}>{r[c.key]}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------------ feedback */

export function Banner({status = 'info', title, children, action}: {status?: 'info' | 'positive' | 'warning' | 'danger'; title?: string; children?: ReactNode; action?: ReactNode}) {
  const Icon = STATUS_ICON[status];
  return (
    <div className={cx('atr-banner', status !== 'info' && `atr-banner--${status}`)} role={status === 'danger' ? 'alert' : 'status'}>
      <Icon className="atr-banner__icon" size={18} aria-hidden="true" />
      <div>{title ? <p className="atr-banner__title">{title}</p> : null}{children ? <p className="atr-banner__body">{children}</p> : null}</div>
      {action ? <div className="atr-banner__action">{action}</div> : null}
    </div>
  );
}

export const Toast = ({children, action}: {children: ReactNode; action?: string}) => (
  <div className="atr-toast" role="status">{children}{action ? <button type="button" className="atr-toast__action">{action}</button> : null}</div>
);

export function EmptyState({icon, title, children, action}: {icon: ReactNode; title: string; children: ReactNode; action?: ReactNode}) {
  return (
    <div className="atr-empty">
      <span className="atr-empty__icon" aria-hidden="true">{icon}</span>
      <h4 className="atr-empty__title">{title}</h4>
      <p className="atr-empty__body">{children}</p>
      {action}
    </div>
  );
}

export const Skeleton = ({width = '100%', height = 14}: {width?: number | string; height?: number}) => (
  <span className="atr-skel" style={{width, height}} aria-hidden="true" />
);

export const Progress = ({value, tone, label}: {value: number; tone?: 'lime' | 'clay'; label: string}) => (
  <div className={cx('atr-progress', tone && `atr-progress--${tone}`)} role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
    <span style={{width: `${value}%`}} />
  </div>
);

/* ----------------------------------------------------------------------- overlays */

export const Tooltip = ({label, children}: {label: string; children: ReactNode}) => {
  const id = useId();
  return <span className="atr-tip">{children}<span role="tooltip" id={id} className="atr-tip__bubble">{label}</span></span>;
};

export const Dialog = ({title, children, actions}: {title: string; children: ReactNode; actions: ReactNode}) => (
  <div className="atr-dialog" role="dialog" aria-modal="true" aria-label={title}>
    <h3 className="atr-dialog__title">{title}</h3>
    <p className="atr-dialog__body">{children}</p>
    <div className="atr-dialog__actions">{actions}</div>
  </div>
);

export const Menu = ({items}: {items: ({label: string; icon?: ReactNode; danger?: boolean} | 'sep')[]}) => (
  <div className="atr-menu" role="menu">
    {items.map((it, i) => it === 'sep' ? <hr key={i} /> : <button key={it.label} type="button" role="menuitem" className={it.danger ? 'is-danger' : undefined}>{it.icon}{it.label}</button>)}
  </div>
);

export const Scrim = ({children}: {children: ReactNode}) => <div className="atr-scrim">{children}</div>;

/* --------------------------------------------------------------------- navigation */

export const Breadcrumbs = ({items}: {items: string[]}) => (
  <nav aria-label={UI[useLang()].breadcrumb}><ol className="atr-crumbs" style={{listStyle: 'none', margin: 0, padding: 0}}>
    {items.map((it, i) => (
      <li key={it} style={{display: 'contents'}}>
        {i < items.length - 1 ? <><a href="#crumb" onClick={(e) => e.preventDefault()}>{it}</a><span aria-hidden="true">/</span></> : <span aria-current="page">{it}</span>}
      </li>
    ))}
  </ol></nav>
);

export function Pager({pages, page, onChange}: {pages: number; page: number; onChange: (p: number) => void}) {
  const ui = UI[useLang()];
  return (
    <nav className="atr-pager" aria-label={ui.pagination}>
      <button type="button" disabled={page === 1} onClick={() => onChange(page - 1)}>{ui.prev}</button>
      {Array.from({length: pages}, (_, i) => i + 1).map((p) => <button key={p} type="button" aria-current={p === page ? 'page' : undefined} onClick={() => onChange(p)}>{p}</button>)}
      <button type="button" disabled={page === pages} onClick={() => onChange(page + 1)}>{ui.next}</button>
    </nav>
  );
}

export function SideNav({brand, groups, current}: {brand: ReactNode; groups: {title?: string; items: {id: string; label: string; icon: ReactNode; count?: number}[]}[]; current: string}) {
  return (
    <nav className="atr-nav" aria-label={UI[useLang()].main}>
      <div className="atr-nav__brand">{brand}</div>
      {groups.map((g, i) => (
        <div key={i} style={{display: 'contents'}}>
          {g.title ? <div className="atr-nav__group">{g.title}</div> : null}
          {g.items.map((it) => (
            <a key={it.id} href={`#${it.id}`} onClick={(e) => e.preventDefault()} aria-current={it.id === current ? 'page' : undefined}>
              {it.icon}{it.label}{it.count ? <span className="atr-nav__count">{it.count}</span> : null}
            </a>
          ))}
        </div>
      ))}
    </nav>
  );
}
