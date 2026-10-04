import {
  AlertTriangle, ArrowRight, Bell, Building2, Calendar, Check, CheckCircle2, ChevronRight, Clock, Copy, Download, Filter,
  Home, Image, Info, LayoutDashboard, Link2, Mail, MapPin, Menu, MessageSquare, Pencil, Phone, Plus, QrCode, RefreshCw,
  Search, Send, Settings, ShieldCheck, Sparkles, Star, Trash2, TrendingDown, TrendingUp, Upload, Users, Utensils, X, XCircle,
  type LucideIcon,
} from 'lucide-react';
import {Atr} from './ui';
import {useLang} from './docs';

/** The icons the product uses, by job. Lucide, stroke 1.5, currentColor. Add here before using one. */
const groups: {title: {en: string; es: string}; icons: [string, LucideIcon][]}[] = [
  {title: {en: 'Navigation', es: 'Navegación'}, icons: [['Home', Home], ['LayoutDashboard', LayoutDashboard], ['Building2', Building2], ['Users', Users], ['MapPin', MapPin], ['Menu', Menu], ['ChevronRight', ChevronRight], ['ArrowRight', ArrowRight], ['Search', Search], ['Settings', Settings]]},
  {title: {en: 'Actions', es: 'Acciones'}, icons: [['Plus', Plus], ['Pencil', Pencil], ['Trash2', Trash2], ['Copy', Copy], ['Download', Download], ['Upload', Upload], ['Send', Send], ['Check', Check], ['X', X], ['RefreshCw', RefreshCw], ['Filter', Filter]]},
  {title: {en: 'Status', es: 'Estado'}, icons: [['CheckCircle2', CheckCircle2], ['AlertTriangle', AlertTriangle], ['XCircle', XCircle], ['Info', Info], ['Clock', Clock], ['Bell', Bell]]},
  {title: {en: 'Domain', es: 'Dominio'}, icons: [['Star', Star], ['MessageSquare', MessageSquare], ['Phone', Phone], ['Mail', Mail], ['Calendar', Calendar], ['TrendingUp', TrendingUp], ['TrendingDown', TrendingDown], ['ShieldCheck', ShieldCheck], ['Sparkles', Sparkles], ['Utensils', Utensils], ['QrCode', QrCode], ['Link2', Link2], ['Image', Image]]},
];

export default function IconGrid() {
  const lang = useLang();
  return (
    <div>
      {groups.map((g) => (
        <section key={g.title.en} className="design-icons">
          <h4 className="design-icons__title">{g.title[lang]}</h4>
          <div className="design-icons__grid">
            {g.icons.map(([name, Icon]) => (
              <Atr key={name} className="design-icon">
                <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                <code>{name}</code>
              </Atr>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
