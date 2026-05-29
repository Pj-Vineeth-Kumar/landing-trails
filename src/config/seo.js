import { SITE_URL, SUPPORT_EMAIL } from './siteNav.js';

export { SITE_URL };

export const SITE_NAME = 'GlobalCodio';

/** Primary & secondary keywords from brand positioning + product copy. */
export const SEO_KEYWORDS = [
  'AI workforce global immigration',
  'AI agents global immigration',
  'AI immigration agents',
  'immigration law firm software',
  'corporate immigration platform',
  'immigration case management',
  'managed technology operations',
  'global immigration ecosystem',
  'immigration automation',
  'visa case management',
  'immigration document automation',
  'immigration ROI',
  'cut costs grow revenue immigration',
];

export const SEO_TITLE =
  'GlobalCodio | AI Workforce for Global Immigration - Deployed and Managed';

export const SEO_DESCRIPTION =
  'GlobalCodio gives immigration law firms and corporate departments their own AI workforce - built, deployed, and managed end-to-end. Cut costs and grow revenue without managing technology.';

export const SEO_TAGLINE = 'AI Workforce for Global Immigration. Deployed and Managed.';

export const SEO_BRAND_STATEMENT =
  'GlobalCodio gives immigration law firms and corporate immigration departments their own AI workforce - built, deployed, and managed end-to-end. Our AI Agents handle case management, client communications, renewals, and business development, while our team runs the entire technology operation. Connected to a global ecosystem of immigration partners, we help your team cut costs and grow revenue - without ever managing technology again.';

export const OG_IMAGE = `${SITE_URL}/assets/dashboard.png`;
export const OG_IMAGE_ALT =
  'GlobalCodio AI workforce immigration platform dashboard for law firms and corporate immigration teams';

export const TWITTER_HANDLE = '@globalcodio';

export const AI_AGENTS = [
  { name: 'Intake Agent', description: 'Collects client info, validates documents, opens cases' },
  { name: 'Document Agent', description: 'Extracts data from passports, visas, foreign records, translates' },
  { name: 'Forms Agent', description: 'Auto-fills I-130, I-485, N-400, H-1B, EB-5, and other USCIS forms' },
  { name: 'Deadline Agent', description: 'Tracks every case deadline, alerts on expirations' },
  { name: 'Client Comms Agent', description: 'Proactively updates clients, answers FAQs, sends reminders' },
  { name: 'Renewal Agent', description: 'Surfaces renewal opportunities from existing client data' },
  { name: 'BD Agent', description: 'Runs business development campaigns, qualifies leads' },
  { name: 'Ecosystem Agent', description: 'Coordinates with translators, courier services, foreign agents' },
];

/** FAQ content - mirrors on-page “Common questions” section for structured data. */
export const FAQ_ITEMS = [
  {
    question: 'We already have case management software.',
    answer:
      'We integrate with your existing tools and layer our platform on top - so you keep your systems and still get the outcomes. No rip-and-replace required.',
  },
  {
    question: "We don't have time to implement new software.",
    answer:
      'We manage the full technology operation for you. Your team keeps working while we handle implementation, configuration, training, and go-live.',
  },
  {
    question: 'Will AI Agents replace our attorneys?',
    answer:
      'No. Agents augment your team - handling repetitive case prep, comms, and renewals so attorneys focus on what only humans can do. Every extraction and draft remains attorney-reviewable before it leaves your firm.',
  },
  {
    question: 'Switching platforms seems risky - will we lose data or downtime?',
    answer:
      'Migration is planned and handled by our team. Your records are mapped before anything moves, active cases keep running, and we manage extraction from your current vendor so nothing important gets left behind.',
  },
];

export const PILLARS = [
  {
    name: 'AI Agents',
    description:
      'A suite of autonomous AI workers handling case management, client communications, renewals, and business development - purpose-built for immigration workflows.',
  },
  {
    name: 'Managed Technology Operations',
    description:
      'We deploy, configure, monitor, and optimize the entire agent ecosystem within your firm. Updates, integrations, support, and ongoing improvements - fully managed by our team.',
  },
  {
    name: 'Global Immigration Ecosystem',
    description:
      'Curated network of pre-vetted immigration service providers worldwide - translators, document authentication services, foreign attorneys, medical exam centers, courier services, and more - all accessible through one platform.',
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
          'AI Agents for global immigration - case management, client communications, renewals, and business development with managed operations and a global partner ecosystem.',
        featureList: AI_AGENTS.map((a) => a.name),
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
        name: 'GlobalCodio AI Workforce for Global Immigration',
        provider: { '@id': orgId },
        serviceType: 'AI immigration agents with managed technology operations',
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
      {
        '@type': 'ItemList',
        name: 'GlobalCodio AI Agents',
        itemListElement: AI_AGENTS.map((agent, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: agent.name,
          description: agent.description,
        })),
      },
    ],
  };
}

/** Crawler-readable HTML injected into index.html at build time (non-JS bots + first paint). */
export function buildStaticSeoHtml() {
  const pillarList = PILLARS.map(
    (p) => `<li><strong>${p.name}</strong> - ${p.description}</li>`,
  ).join('');

  const agentList = AI_AGENTS.map(
    (a) => `<li><strong>${a.name}</strong> - ${a.description}</li>`,
  ).join('');

  const faqList = FAQ_ITEMS.map(
    (f) => `<dt>${f.question}</dt><dd>${f.answer}</dd>`,
  ).join('');

  return `<a class="skip-link" href="#main-content">Skip to main content</a>
<header>
  <p><strong>${SITE_NAME}</strong> - ${SEO_TAGLINE}</p>
</header>
<main id="main-content">
  <h1>${SEO_TAGLINE}</h1>
  <p>${SEO_BRAND_STATEMENT}</p>
  <p><a href="${SITE_URL}/#cta">Schedule a call</a> · <a href="https://app.globalcodio.ai/login">Sign in</a></p>
  <nav aria-label="Page sections">
    <ul>
      <li><a href="${SITE_URL}/#pillars">Three Pillars</a></li>
      <li><a href="${SITE_URL}/#platform">Platform</a></li>
      <li><a href="${SITE_URL}/#agents">AI Agents</a></li>
      <li><a href="${SITE_URL}/#customers">Teams</a></li>
      <li><a href="${SITE_URL}/#how">Questions</a></li>
      <li><a href="${SITE_URL}/#pricing">Pricing</a></li>
      <li><a href="${SITE_URL}/#metrics">ROI</a></li>
    </ul>
  </nav>
  <section id="pillars">
    <h2>AI Agents, Managed Operations, and Global Immigration Ecosystem</h2>
    <ul>${pillarList}</ul>
  </section>
  <section id="agents">
    <h2>GlobalCodio AI Agents</h2>
    <ul>${agentList}</ul>
  </section>
  <section id="how">
    <h2>Common questions for immigration law firms and corporate teams</h2>
    <dl>${faqList}</dl>
  </section>
  <section id="pricing">
    <h2>Base retainer plus performance share</h2>
    <p>Base retainer plus value share tied to measurable cost savings and revenue growth. Firms typically see 3x ROI in year one.</p>
  </section>
</main>
<footer>
  <p>© 2026 GlobalCodio Inc. · <a href="${SITE_URL}">www.globalcodio.ai</a> · <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> · <a href="tel:+18004252346">+1 (800) GBL-CDIO</a></p>
</footer>`;
}

export const STRUCTURED_DATA_JSON = JSON.stringify(buildStructuredData());
