import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const locale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'en';

const config: Config = {
  title: 'Atrium Docs',
  tagline: locale === 'es' ? 'El sistema que convierte extraños en regulares' : 'The system that turns strangers into regulars',
  favicon: 'img/favicon.svg',
  url: 'https://docs.atriumad.com',
  baseUrl: '/',
  noIndex: true, // internal documentation
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      es: {label: 'Español', htmlLang: 'es'},
    },
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
  ],
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {hashed: true, language: ['es', 'en'], indexBlog: false, docsRouteBasePath: '/docs', highlightSearchTermsOnTargetPage: true},
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    navbar: {
      title: 'Atrium',
      logo: {alt: 'Atrium', src: 'img/logo.svg', srcDark: 'img/logo-dark.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'system', label: 'System', position: 'left'},
        {type: 'docSidebar', sidebarId: 'agents', label: 'Agents', position: 'left'},
        {type: 'docSidebar', sidebarId: 'data', label: 'Data', position: 'left'},
        {type: 'docSidebar', sidebarId: 'product', label: 'Product', position: 'left'},
        {type: 'docSidebar', sidebarId: 'architecture', label: 'Architecture', position: 'left'},
        {type: 'docSidebar', sidebarId: 'modules', label: 'Modules', position: 'left'},
        {type: 'docSidebar', sidebarId: 'plan', label: 'Plan', position: 'left'},
        {type: 'docSidebar', sidebarId: 'adr', label: 'Decisions', position: 'right'},
        {type: 'docSidebar', sidebarId: 'guides', label: 'Guides', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'sql', 'diff'],
    },
    mermaid: {theme: {light: 'neutral', dark: 'dark'}, options: {fontFamily: 'Inter Tight, system-ui, sans-serif'}},
    tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
  } satisfies Preset.ThemeConfig,
};

export default config;
