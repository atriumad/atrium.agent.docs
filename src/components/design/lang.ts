import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export type LangKey = 'en' | 'es';

/** The page language, for the few strings a component carries itself. */
export function useLang(): LangKey {
  return useDocusaurusContext().i18n.currentLocale === 'es' ? 'es' : 'en';
}

/** Built-in strings of the primitives. Page copy lives in the pages, not here. */
export const UI = {
  en: {optional: '(optional)', remove: 'Remove', prev: 'Prev', next: 'Next', pagination: 'Pagination', breadcrumb: 'Breadcrumb', main: 'Main', up: ' up', down: ' down', flat: ' no change', trend: 'trend'},
  es: {optional: '(opcional)', remove: 'Quitar', prev: 'Anterior', next: 'Siguiente', pagination: 'Paginación', breadcrumb: 'Ruta de navegación', main: 'Principal', up: ' al alza', down: ' a la baja', flat: ' sin cambio', trend: 'tendencia'},
} as const;
