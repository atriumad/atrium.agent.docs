import {useState} from 'react';
import {
  Bell, CheckCircle2, Clock, Download, LayoutDashboard, MessageSquare, Plus, Search, Settings, Star, Users,
} from 'lucide-react';
import {useLang} from './docs';
import {
  Atr, Avatar, Badge, Banner, Button, Card, Chip, DataTable, Emphasis, Wordmark, Delta, EmptyState, Input, Progress,
  ScoreRing, Segmented, SideNav, Skeleton, Stat, StatusBadge, Tabs, Textarea, Select, Check, Switch, Bars,
} from './ui';

/** Whole screens rebuilt from the primitives. They are the patterns the apps copy. */

const S = {
  en: {
    cases: 'Recovery cases', casesLead: 'Guests who had a bad visit. Reach out within 24 hours.', active: 'Active', open: 'Open', contacted: 'Contacted', resolved: 'Resolved',
    overdue: 'Overdue by 6h', dueIn: 'Due in', opened: 'opened', high: 'High', medium: 'Medium', low: 'Low', guestWrote: 'What the guest wrote', reach: 'How to reach them',
    note: 'Note for the record', markContacted: 'Mark contacted', resolve: 'Resolve', pick: 'Pick a case to read what the guest said.', empty: 'Nothing needs follow-up right now.',
    emptyBody: 'New cases appear here the moment a guest leaves a low rating.', loading: 'Loading cases',
    c1: 'Waited 40 minutes and nobody came by.', c2: 'The pasta was cold. Please call me.', c3: 'Loud music, could not talk.',
  },
  es: {
    cases: 'Casos de recuperación', casesLead: 'Guests que tuvieron una mala visita. Contáctalos en 24 horas.', active: 'Activos', open: 'Abiertos', contacted: 'Contactados', resolved: 'Resueltos',
    overdue: 'Vencido hace 6h', dueIn: 'Vence en', opened: 'abierto hace', high: 'Alta', medium: 'Media', low: 'Baja', guestWrote: 'Lo que escribió el guest', reach: 'Cómo contactarlo',
    note: 'Nota para el registro', markContacted: 'Marcar contactado', resolve: 'Resolver', pick: 'Elige un caso para leer lo que dijo el guest.', empty: 'Nada requiere seguimiento ahora.',
    emptyBody: 'Los casos nuevos aparecen aquí en cuanto un guest deja una nota baja.', loading: 'Cargando casos',
    c1: 'Esperamos 40 minutos y nadie pasó.', c2: 'La pasta estaba fría. Por favor llámenme.', c3: 'Música muy fuerte, no pudimos hablar.',
  },
};

type Row = {id: string; sev: 'high' | 'medium' | 'low'; stars: number; place: string; status: 'open' | 'contacted' | 'resolved'; age: string; due: string | null; text: string; email?: string};

/** The recovery-case screen of the Manager: list on the left, the case on the right. */
export function CasesPattern({state = 'ready'}: {state?: 'ready' | 'empty' | 'loading'}) {
  const lang = useLang();
  const t = S[lang];
  const rows: Row[] = [
    {id: 'a', sev: 'high', stars: 1, place: 'Casa Olivo · Bellaire', status: 'open', age: '30h', due: t.overdue, text: t.c1},
    {id: 'b', sev: 'medium', stars: 2, place: 'Casa Olivo · Bellaire', status: 'contacted', age: '3h', due: null, text: t.c2, email: 'maria@demo.test'},
    {id: 'c', sev: 'low', stars: 3, place: 'Brasa Norte', status: 'open', age: '1h', due: `${t.dueIn} 22h`, text: t.c3},
  ];
  type Tab = 'active' | 'open' | 'contacted' | 'resolved';
  const [tab, setTab] = useState<Tab>('active');
  const [sel, setSel] = useState<string | null>('a');
  const shown = state === 'ready' ? rows.filter((r) => tab === 'active' ? r.status !== 'resolved' : r.status === tab) : [];
  const current = rows.find((r) => r.id === sel);
  const sevBadge = (r: Row) => <Badge variant={r.sev === 'high' ? 'clay' : r.sev === 'medium' ? 'ink' : 'quiet'}>{t[r.sev]}</Badge>;
  return (
    <Atr style={{width: '100%'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        <div>
          <h3 style={{margin: 0, fontWeight: 400, fontSize: '2rem', lineHeight: 1.05, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)'}}>{t.cases}</h3>
          <p style={{margin: '2px 0 0', fontSize: 14, color: 'var(--text-muted)'}}>{t.casesLead}</p>
        </div>
        {state === 'ready' ? <Banner status="warning" title={lang === 'es' ? '1 caso pasó el objetivo de 24 horas' : '1 case is past the 24-hour target'} /> : null}
        <Tabs<Tab> label="Status" value={tab} onChange={setTab} items={[
          {id: 'active', label: t.active, count: state === 'ready' ? 3 : 0}, {id: 'open', label: t.open, count: state === 'ready' ? 2 : 0},
          {id: 'contacted', label: t.contacted, count: state === 'ready' ? 1 : 0}, {id: 'resolved', label: t.resolved, count: 0},
        ]} />
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, alignItems: 'start'}}>
          <ul style={{listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8}} aria-label={t.cases} aria-busy={state === 'loading' || undefined}>
            {state === 'loading' ? [0, 1, 2].map((i) => (
              <li key={i}><Card padding="sm"><div style={{display: 'grid', gap: 10}}><Skeleton width={60} height={18} /><Skeleton width="70%" /><Skeleton width="45%" /></div></Card></li>
            )) : null}
            {state === 'empty' || (state === 'ready' && shown.length === 0) ? (
              <li><EmptyState icon={<CheckCircle2 size={22} />} title={t.empty}>{t.emptyBody}</EmptyState></li>
            ) : null}
            {shown.map((r) => (
              <li key={r.id}>
                <button type="button" onClick={() => setSel(r.id)} aria-current={sel === r.id} style={{all: 'unset', display: 'block', width: '100%', cursor: 'pointer', boxSizing: 'border-box'}}>
                  <Card padding="sm" tone={sel === r.id ? 'ruled' : 'paper'} elevation={sel === r.id ? 'offset' : 'flat'}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      {sevBadge(r)}
                      <span aria-label={`${r.stars} / 5`} style={{display: 'inline-flex', gap: 2, color: 'var(--charcoal-800)'}}>
                        {[1, 2, 3, 4, 5].map((n) => <Star key={n} size={14} fill={n <= r.stars ? 'currentColor' : 'none'} strokeWidth={1.75} style={{opacity: n <= r.stars ? 1 : 0.3}} />)}
                      </span>
                    </div>
                    <p style={{margin: '10px 0 4px', fontSize: 15, fontWeight: 600, color: 'var(--text-strong)'}}>{r.place}</p>
                    <p style={{margin: 0, display: 'flex', flexWrap: 'wrap', gap: '4px 12px', alignItems: 'center', fontSize: 13, color: 'var(--text-muted)'}}>
                      <span>{t[r.status]}</span><span>{t.opened} {r.age}</span>
                      {r.due ? <StatusBadge status={r.due === t.overdue ? 'danger' : 'neutral'}>{r.due}</StatusBadge> : null}
                    </p>
                  </Card>
                </button>
              </li>
            ))}
          </ul>
          {state === 'ready' && current ? (
            <Card>
              <h4 className="atr-card__title">{current.place}</h4>
              <p className="atr-card__desc">{t[current.status]} · {t.opened} {current.age}</p>
              <p className="atr-eyebrow" style={{margin: '16px 0 6px'}}>{t.guestWrote}</p>
              <blockquote style={{margin: 0, padding: '10px 14px', borderRadius: 8, background: 'var(--surface-sunken)', borderLeft: '3px solid var(--border-light)', fontSize: 14}}>{current.text}</blockquote>
              <p className="atr-eyebrow" style={{margin: '16px 0 6px'}}>{t.reach}</p>
              <p style={{margin: 0, fontSize: 14}}>{current.email ?? (lang === 'es' ? 'No pidió que lo contacten.' : 'They did not ask to be contacted.')}</p>
              <div style={{marginTop: 16}}><Textarea label={t.note} optional rows={3} /></div>
              <div style={{display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap'}}>
                {current.status === 'open' ? <Button variant="outline" size="sm">{t.markContacted}</Button> : null}
                <Button size="sm">{t.resolve}</Button>
              </div>
            </Card>
          ) : state === 'ready' ? <EmptyState icon={<MessageSquare size={22} />} title={t.pick}>{''}</EmptyState> : null}
        </div>
      </div>
    </Atr>
  );
}

/** The Platform home: the score, four numbers, a trend and what to do next. */
export function DashboardPattern() {
  const lang = useLang();
  const es = lang === 'es';
  return (
    <Atr style={{width: '100%'}}>
      <div style={{display: 'grid', gap: 16}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12}}>
          <div>
            <span className="atr-eyebrow">Casa Olivo · Bellaire</span>
            <h3 style={{margin: '8px 0 0', fontWeight: 400, fontSize: '2.75rem', lineHeight: 1.05, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)'}}>{es ? 'Buenos días, ' : 'Good morning, '}<Emphasis>Marco</Emphasis></h3>
          </div>
          <Segmented label="Range" value="30d" onChange={() => undefined} items={[{id: '7d', label: es ? '7 días' : '7 days'}, {id: '30d', label: es ? '30 días' : '30 days'}, {id: '90d', label: es ? '90 días' : '90 days'}]} />
        </div>
        <div style={{display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))'}}>
          <Card>
            <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
              <ScoreRing value={72} label="Growth Score" />
              <div><span className="atr-eyebrow atr-eyebrow--norule">Growth Score</span><p style={{margin: '4px 0 0', fontSize: 13, color: 'var(--text-muted)'}}>{es ? '+4 este mes' : '+4 this month'}</p></div>
            </div>
          </Card>
          <Stat label={es ? 'Reseñas nuevas' : 'New reviews'} value="38" delta={12} spark={[4, 6, 5, 8, 7, 11, 13]} />
          <Stat label={es ? 'Nota media' : 'Average rating'} value="4.6" unit="/ 5" delta={2} spark={[4.2, 4.3, 4.3, 4.4, 4.5, 4.5, 4.6]} />
          <Stat label={es ? 'Casos abiertos' : 'Open cases'} value="3" delta={-25} goodWhen="down" note={es ? '1 vencido' : '1 overdue'} />
        </div>
        <div style={{display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
          <Card title={es ? 'Pedidos por semana' : 'Orders per week'} description={es ? 'De Toast, últimas 6 semanas' : 'From Toast, last 6 weeks'}>
            <div style={{marginTop: 12, overflowX: 'auto'}}><Bars data={[{label: 'W1', value: 412}, {label: 'W2', value: 438}, {label: 'W3', value: 401}, {label: 'W4', value: 466}, {label: 'W5', value: 490}, {label: 'W6', value: 512}]} /></div>
          </Card>
          <Card tone="lime" title={es ? 'Lo siguiente' : 'Up next'}>
            <ul style={{margin: '10px 0 0', paddingLeft: 18, fontSize: 14, display: 'grid', gap: 6}}>
              <li>{es ? 'Aprueba la respuesta a la reseña de 2 estrellas' : 'Approve the reply to the 2-star review'}</li>
              <li>{es ? 'Revisa el post del jueves' : 'Review Thursday’s post'}</li>
              <li>{es ? 'Conecta tu perfil de Google' : 'Connect your Google profile'}</li>
            </ul>
          </Card>
        </div>
      </div>
    </Atr>
  );
}

/** The Manager portfolio: one row per client, sorted by what needs a person. */
export function PortfolioPattern() {
  const lang = useLang();
  const es = lang === 'es';
  const rows = [
    {client: 'Casa Olivo', am: <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Avatar name="Dana Ruiz" size="sm" />Dana Ruiz</span>, score: '72', trend: <Delta value={4} />, cases: <StatusBadge status="danger">{es ? '1 vencido' : '1 overdue'}</StatusBadge>, health: <StatusBadge status="warning" dot>{es ? 'Atención' : 'Watch'}</StatusBadge>},
    {client: 'Brasa Norte', am: <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Avatar name="Dana Ruiz" size="sm" />Dana Ruiz</span>, score: '81', trend: <Delta value={2} />, cases: <StatusBadge status="positive">{es ? 'Al día' : 'Clear'}</StatusBadge>, health: <StatusBadge status="positive" dot>{es ? 'Sano' : 'Healthy'}</StatusBadge>},
    {client: 'La Mesa', am: <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Avatar name="Leo Park" size="sm" />Leo Park</span>, score: '58', trend: <Delta value={-3} />, cases: <StatusBadge status="warning">{es ? '2 abiertos' : '2 open'}</StatusBadge>, health: <StatusBadge status="danger" dot>{es ? 'En riesgo' : 'At risk'}</StatusBadge>},
  ];
  return (
    <Atr dark style={{width: '100%'}}>
      <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 16, alignItems: 'start'}}>
        <div style={{display: 'none'}} />
        <div style={{gridColumn: '1 / -1', display: 'grid', gap: 12}}>
          <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
            <div style={{flex: '1 1 240px'}}><Input small label={es ? 'Buscar cliente' : 'Search clients'} placeholder="Casa…" /></div>
            <div style={{alignSelf: 'end'}}><Button variant="outline" size="sm" icon={<Download size={14} />}>{es ? 'Exportar' : 'Export'}</Button></div>
          </div>
          <DataTable label="Portfolio" columns={[
            {key: 'client', label: es ? 'Cliente' : 'Client', sortable: true}, {key: 'am', label: 'Account manager'}, {key: 'score', label: 'Score', numeric: true, sortable: true},
            {key: 'trend', label: es ? 'Tendencia' : 'Trend', numeric: true}, {key: 'cases', label: es ? 'Casos' : 'Cases'}, {key: 'health', label: es ? 'Salud' : 'Health'},
          ]} rows={rows} />
        </div>
      </div>
    </Atr>
  );
}

/** A form with the four states a field has: rest, help, error and disabled. */
export function FormPattern() {
  const lang = useLang();
  const es = lang === 'es';
  const [sent, setSent] = useState(false);
  return (
    <Atr style={{width: '100%'}}>
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{display: 'grid', gap: 16, maxWidth: 480}} noValidate>
        <Input label={es ? 'Nombre del restaurante' : 'Restaurant name'} defaultValue="Casa Olivo" />
        <Input label={es ? 'Correo del dueño' : 'Owner email'} type="email" defaultValue="marco@" error={es ? 'Escribe un correo completo, por ejemplo marco@casaolivo.com' : 'Enter a full email, for example marco@casaolivo.com'} />
        <Select label={es ? 'Paquete' : 'Package'} options={['Essential', 'Pillar 1', 'Pillar 2', 'Full system']} hint={es ? 'Define qué módulos ve el cliente.' : 'Sets which modules the client sees.'} />
        <Textarea label={es ? 'Notas internas' : 'Internal notes'} optional rows={3} />
        <Check label={es ? 'Tengo el consentimiento del cliente para conectar Toast' : 'I have the client’s consent to connect Toast'} />
        <Switch label={es ? 'Enviar el resumen mensual' : 'Send the monthly summary'} defaultChecked />
        <div style={{display: 'flex', gap: 8}}>
          <Button type="submit" loading={false}>{es ? 'Guardar cliente' : 'Save client'}</Button>
          <Button variant="ghost">{es ? 'Cancelar' : 'Cancel'}</Button>
        </div>
        {sent ? <Banner status="warning" title={es ? 'Corrige el correo para continuar' : 'Fix the email to continue'} /> : null}
      </form>
    </Atr>
  );
}

/** The Manager shell: the dark side navigation next to a page. */
export function ShellPattern() {
  const lang = useLang();
  const es = lang === 'es';
  return (
    <Atr style={{width: '100%'}}>
      <div style={{display: 'grid', gridTemplateColumns: '240px 1fr', gap: 16, alignItems: 'stretch'}}>
        <SideNav
          brand={<><Wordmark size="sm" tone="cream" /><Badge variant="quiet">Manager</Badge></>}
          current="portfolio"
          groups={[
            {items: [{id: 'portfolio', label: es ? 'Cartera' : 'Portfolio', icon: <LayoutDashboard size={18} />}, {id: 'clients', label: es ? 'Clientes' : 'Clients', icon: <Users size={18} />}, {id: 'cases', label: es ? 'Casos' : 'Cases', icon: <MessageSquare size={18} />, count: 3}]},
            {title: es ? 'Entrega' : 'Delivery', items: [{id: 'tasks', label: es ? 'Tareas' : 'Tasks', icon: <CheckCircle2 size={18} />}, {id: 'approvals', label: es ? 'Aprobaciones' : 'Approvals', icon: <Clock size={18} />, count: 2}]},
            {title: es ? 'Cuenta' : 'Account', items: [{id: 'alerts', label: es ? 'Alertas' : 'Alerts', icon: <Bell size={18} />}, {id: 'settings', label: es ? 'Ajustes' : 'Settings', icon: <Settings size={18} />}]},
          ]}
        />
        <div style={{display: 'grid', gap: 16, alignContent: 'start'}}>
          <div className="atr-topbar">
            <div className="atr-topbar__search"><Input small label="Search" placeholder={es ? 'Buscar…' : 'Search…'} /></div>
            <span style={{marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 10}}><Button iconOnly variant="ghost" size="sm" icon={<Search size={16} />}>Search</Button><Avatar name="Dana Ruiz" /></span>
          </div>
          <Card title={es ? 'Cartera' : 'Portfolio'} description={es ? 'Los clientes que necesitan a una persona primero.' : 'The clients that need a person first.'}>
            <div style={{marginTop: 12, display: 'grid', gap: 10}}><Progress value={72} label="Score" /><Progress value={46} tone="clay" label="Tasks" /></div>
          </Card>
        </div>
      </div>
    </Atr>
  );
}


