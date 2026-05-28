import { SITE_URL, SUPPORT_EMAIL } from './siteNav.js';

export { SITE_URL };

export const SITE_NAME = 'GlobalCodio';

/** Primary & secondary keywords from brand positioning + product copy. */
export const SEO_KEYWORDS = [
  'AI global immigration',
  'immigration case management',
  'immigration law firm software',
  'corporate immigration platform',
  'AI case management immigration',
  'managed technology operations',
  'global immigration ecosystem',
  'immigration automation',
  'visa case management',
  'immigration document automation',
  'forward deployed engineers immigration',
  'immigration ROI',
  'cut costs grow revenue immigration',
];

export const SEO_TITLE =
  'GlobalCodio | AI Immigration Case Management — Cut Costs, Grow Revenue';

export const SEO_DESCRIPTION =
  'AI-powered immigration platform for law firms and corporate teams. AI case management, managed operations, and a global partner ecosystem. 3x ROI in year one.';

export const SEO_TAGLINE = 'AI for Global Immigration: Cut Costs, Grow Revenue.';

export const SEO_BRAND_STATEMENT =
  'GlobalCodio is the AI-powered platform and global ecosystem built exclusively for immigration teams — whether you\'re a law firm or a corporate department. We deploy the technology, manage the operations, and connect you to the partners you need to deliver end-to-end immigration services.';

export const OG_IMAGE = `${SITE_URL}/assets/dashboard.png`;
export const OG_IMAGE_ALT =
  'GlobalCodio immigration case management dashboard for law firms and corporate immigration teams';

export const TWITTER_HANDLE = '@globalcodio';

/** FAQ content — mirrors on-page “Common questions” section for structured data. */
export const FAQ_ITEMS = [
  {
    question: 'We already have case management software.',
    answer:
      'We integrate with your existing tools and layer our platform on top — so you keep your systems and still get the outcomes. No rip-and-replace required.',
  },
  {
    question: "We don't have time to implement new software.",
    answer:
      'We manage the full technology operation for you. Your team keeps working while we handle implementation, configuration, training, and go-live.',
  },
  {
    question: 'AI makes mistakes on legal documents.',
    answer:
      'Every extraction and draft is attorney-reviewable. AI handles intake structure, field population, and first-pass assembly — you stay in control of what leaves the firm.',
  },
  {
    question: 'Switching platforms seems risky — will we lose data or downtime?',
    answer:
      'Migration is planned and handled by our team. Your records are mapped before anything moves, active cases keep running, and we manage extraction from your current vendor so nothing important gets left behind.',
  },
];

export const PILLARS = [
  {
    name: 'AI Case Management',
    description:
      'Intelligent automation for intake, document extraction, form preparation, deadline tracking, renewal detection, and proactive client communication — built specifically for immigration workflows.',
  },
  {
    name: 'Managed Technology Operations',
    description:
      'We run your entire technology operation ongoing — implementation, configuration, updates, integrations, optimization, and dedicated support. Fully managed by our team.',
  },
  {
    name: 'Global Immigration Ecosystem',
    description:
      'Curated network of pre-vetted immigration service providers worldwide — translators, document authentication services, foreign attorneys, medical exam centers, courier services, and more — all accessible through one platform.',
  },
];

export function buildStructuredData() {
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: SEO_BRAND_STATEMENT,
        email: SUPPORT_EMAIL,
        telephone: '+1-800-425-2346',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-800-425-2346',
          email: SUPPORT_EMAIL,
          contactType: 'customer support',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: SEO_DESCRIPTION,
        publisher: { '@id': orgId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: SITE_URL,
        name: SEO_TITLE,
        description: SEO_DESCRIPTION,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        inLanguage: 'en-US',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: OG_IMAGE,
          description: OG_IMAGE_ALT,
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: SITE_NAME,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: SITE_URL,
        description:
          'AI-powered immigration case management platform with managed technology operations and a global immigration partner ecosystem for law firms and corporate immigration departments.',
        featureList: PILLARS.map((p) => p.name),
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Base retainer plus value share tied to measurable cost savings and revenue growth',
          url: `${SITE_URL}/#pricing`,
        },
        provider: { '@id': orgId },
      },
      {
        '@type': 'Service',
        name: 'GlobalCodio Immigration Technology Platform',
        provider: { '@id': orgId },
        serviceType: 'AI immigration case management and managed technology operations',
        areaServed: 'Worldwide',
        description: SEO_BRAND_STATEMENT,
        audience: [
          {
            '@type': 'BusinessAudience',
            audienceType: 'Immigration law firms',
          },
          {
            '@type': 'BusinessAudience',
            audienceType: 'Corporate immigration departments',
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'GlobalCodio Three Pillars',
        itemListElement: PILLARS.map((pillar, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: pillar.name,
          description: pillar.description,
        })),
      },
    ],
  };
}

/** Crawler-readable HTML injected into index.html at build time (non-JS bots + first paint). */
export function buildStaticSeoHtml() {
  const pillarList = PILLARS.map(
    (p) => `<li><strong>${p.name}</strong> — ${p.description}</li>`,
  ).join('');

  const faqList = FAQ_ITEMS.map(
    (f) => `<dt>${f.question}</dt><dd>${f.answer}</dd>`,
  ).join('');

  return `<a class="skip-link" href="#main-content">Skip to main content</a>
<header>
  <p><strong>${SITE_NAME}</strong> — ${SEO_TAGLINE}</p>
</header>
<main id="main-content">
  <h1>AI for Global Immigration: Cut Costs, Grow Revenue.</h1>
  <p>${SEO_BRAND_STATEMENT}</p>
  <p><a href="${SITE_URL}/#cta">Schedule a call</a> · <a href="https://app.globalcodio.ai/login">Sign in</a></p>
  <nav aria-label="Page sections">
    <ul>
      <li><a href="${SITE_URL}/#pillars">Three Pillars</a></li>
      <li><a href="${SITE_URL}/#platform">Platform</a></li>
      <li><a href="${SITE_URL}/#customers">Teams</a></li>
      <li><a href="${SITE_URL}/#how">Questions</a></li>
      <li><a href="${SITE_URL}/#pricing">Pricing</a></li>
      <li><a href="${SITE_URL}/#metrics">ROI</a></li>
    </ul>
  </nav>
  <section id="pillars">
    <h2>AI Case Management, Managed Operations, and Global Immigration Ecosystem</h2>
    <ul>${pillarList}</ul>
  </section>
  <section id="how">
    <h2>Common questions for immigration law firms and corporate teams</h2>
    <dl>${faqList}</dl>
  </section>
  <section id="pricing">
    <h2>Value-based pricing for immigration teams</h2>
    <p>Base retainer plus performance share tied to measurable cost savings and revenue growth. Firms typically see 3x ROI in year one.</p>
  </section>
</main>
<footer>
  <p>© 2026 GlobalCodio Inc. · <a href="${SITE_URL}">www.globalcodio.ai</a> · <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> · <a href="tel:+18004252346">+1 (800) GBL-CDIO</a></p>
</footer>`;
}

export const STRUCTURED_DATA_JSON = JSON.stringify(buildStructuredData());
