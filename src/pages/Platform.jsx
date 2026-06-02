import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, FeatureGrid, CtaBand, SmartLink, SplitHeading } from '../components/PageKit.jsx';
import {
  Workflow,
  Users,
  Globe,
  Settings,
  GitMerge,
  TrendingUp,
  Cpu,
  RefreshCw,
  Bot,
  FileText,
  Database,
} from 'lucide-react';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="10" cy="10" r="8" />
    <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CMS_FEATURES = [
  {
    Icon: Workflow,
    n: '01',
    h: 'End-to-end case lifecycle',
    b: 'Full case lifecycle management for every immigration matter type, from intake through approval and beyond.',
  },
  {
    Icon: Users,
    n: '02',
    h: 'Secure client portals',
    b: 'Client portals for secure communication and document exchange between your firm and the people you serve.',
  },
  {
    Icon: Globe,
    n: '03',
    h: 'Multi-jurisdictional handling',
    b: 'Multi-jurisdictional case handling across every country you serve, in one unified system.',
  },
  {
    Icon: Settings,
    n: '04',
    h: 'Customizable workflows',
    b: 'Workflows configured to your firm’s specific operations - not a one-size-fits-all template.',
  },
  {
    Icon: GitMerge,
    n: '05',
    h: 'Native integrations',
    b: 'Native integrations with email, calendar, e-signature, and accounting tools your team already relies on.',
  },
  {
    Icon: TrendingUp,
    n: '06',
    h: 'Reporting & analytics',
    b: 'Detailed reporting and analytics built specifically for immigration practice management.',
  },
];

const FORMS_STATS = [
  { value: '4', label: 'jurisdictions live today' },
  { value: 'Days', label: 'not quarters for new countries' },
  { value: '1', label: 'source of truth tied to CodioCMS' },
];

const JURISDICTIONS = [
  { flag: '🇺🇸', name: 'United States', forms: '180+ forms', authority: 'USCIS' },
  { flag: '🇨🇦', name: 'Canada', forms: 'IRCC suite', authority: 'IRCC' },
  { flag: '🇳🇱', name: 'Netherlands', forms: 'MVV & permits', authority: 'IND' },
  { flag: '🇮🇳', name: 'India', forms: 'Visa & OCI', authority: 'MEA / FRRO' },
];

const CATALOG_FORMS = [
  { id: 'I-130', name: 'Petition for Alien Relative', country: 'US', active: true },
  { id: 'I-485', name: 'Adjustment of Status', country: 'US', active: false },
  { id: 'IMM 0008', name: 'Generic Application', country: 'CA', active: false },
  { id: 'MVV', name: 'Provisional residence permit', country: 'NL', active: false },
];

const ACTIVE_FORM_FIELDS = [
  ['Part 1 · Relationship', 'Spouse of U.S. citizen'],
  ['Part 2 · Beneficiary', 'Chen, Wei · DOB 14 Mar 1991'],
  ['Part 4 · Processing', 'Adjustment of status · Concurrent filing'],
];

const FORMS_CAPS = [
  {
    n: '01',
    h: 'Online & offline',
    b: 'Cloud collaboration for your team and clients, or export a print-ready PDF for traditional filing - same data, either path.',
  },
  {
    n: '02',
    h: 'Authority-synced versions',
    b: 'Every edition tracked to USCIS, IRCC, IND, and MEA releases. Your firm never files on a superseded form.',
  },
  {
    n: '03',
    h: 'Built on your priority',
    b: 'Need a country we don’t ship yet? We scope, build, and release based on client demand - in days, not product quarters.',
  },
];

const FORMS_VS = [
  {
    title: 'Typical immigration software',
    points: [
      'US PDF libraries with manual version checks',
      'Re-keying client data into every new form',
      'Offline folders that drift from the case file',
    ],
  },
  {
    title: 'CodioForms',
    featured: true,
    points: [
      'Global catalog with online and offline delivery',
      'Case data prefilled from CodioCMS automatically',
      'One version ledger across every jurisdiction you serve',
    ],
  },
];

const AI_ERA_POINTS = [
  {
    Icon: Cpu,
    n: '01',
    h: 'Built before AI existed',
    b: 'Every other case management platform in immigration was built before AI agents existed. Their workflows, integrations, and data models were never designed to support an AI workforce.',
  },
  {
    Icon: Bot,
    n: '02',
    h: 'Native AI from the ground up',
    b: 'CodioCMS is different - designed from the ground up to run native AI agents, automate routine work, and grow with your firm.',
    featured: true,
    links: [{ href: '/ai-agents', label: 'Meet the AI Agents' }],
  },
  {
    Icon: RefreshCw,
    n: '03',
    h: 'Not AI bolted on',
    b: 'This is not legacy software with AI bolted on. This is the platform AI was waiting for.',
  },
];

const MIGRATION_STATS = [
  { value: '~6 wks', label: 'typical full migration' },
  { value: 'Parallel', label: 'ops until you cut over' },
  { value: 'Verified', label: 'data before go-live' },
];

const MIGRATION_STEPS = [
  {
    Icon: Database,
    h: 'Move your data',
    b: 'Full export from your current platform-including INSZoom-imported into CodioCMS and verified.',
  },
  {
    Icon: Workflow,
    h: 'Rebuild workflows',
    b: 'Operations reconfigured in CodioCMS to match how your firm actually works.',
  },
  {
    Icon: FileText,
    h: 'Document processes',
    b: 'Institutional knowledge captured in the system, not in people’s heads.',
  },
  {
    Icon: RefreshCw,
    h: 'Run in parallel',
    b: 'Dual operations until your team is fully transitioned-usually within six weeks.',
    featured: true,
  },
];

const MIGRATION_FROM = ['INSZoom', 'Legacy CMS', 'Spreadsheets', 'Other platforms'];

export default function Platform() {
  return (
    <>
      <Seo
        title="Platform - CodioCMS & CodioForms"
        description="CodioCMS and CodioForms are the foundation of GlobalCodio - a next-generation immigration case management platform and global forms engine, built for the AI era."
        path="/platform"
      />

      <PageHero
        eyebrow="The Platform"
        lead="The Platform Built by the People"
        emphasis="Who Built Immigration Tech."
        sub="CodioCMS and CodioForms are the foundation of GlobalCodio - a next-generation case management platform and global immigration forms engine, designed from the ground up for the AI era."
        primary={{ href: '/free-tech-audit', label: 'Book a free tech audit' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Talk to us about migration' }}
      />

      {/* CodioCMS */}
      <Section id="codiocms" className="sec-codiocms">
        <div className="reveal section-head-wide cms-head-copy">
          <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
            CodioCMS
          </div>
          <SplitHeading lead="Proprietary immigration" emphasis="case management." />
          <p className="cms-head-intro">
            Immigration case management for firms and corporate teams-built by Umesh Vaidyamath, founder of INSZoom. Not
            generic legal tech: a modern platform with native AI agents, CodioForms, and our global services network.
          </p>
        </div>

        <FeatureGrid items={CMS_FEATURES} cols={3} />
      </Section>

      {/* CodioForms */}
      <Section id="codioforms" tone="sec-surface" className="sec-codioforms">
        <div className="forms-head-row reveal">
          <div className="section-head-wide forms-head-copy">
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
              CodioForms
            </div>
            <SplitHeading lead="Global immigration forms." emphasis="Online and offline." />
            <p className="forms-head-intro">
              The only immigration forms engine built for multi-country practice - every edition authority-synced,
              prefilled from CodioCMS, and available online or as print-ready PDF.
            </p>
          </div>
          <div className="forms-statband reveal d1" aria-label="CodioForms at a glance">
            {FORMS_STATS.map((s) => (
              <div key={s.label} className="forms-stat">
                <span className="display forms-stat-value">{s.value}</span>
                <span className="forms-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="forms-bento">
          <div className="forms-bento-grid">
            <div className="reveal forms-catalog" aria-label="CodioForms catalog preview">
              <div className="forms-catalog-head">
                <span className="forms-catalog-brand">CodioForms</span>
                <span className="mono forms-catalog-matter">Matter #1847 · Chen family</span>
                <div className="forms-catalog-mode" role="group" aria-label="Filling mode">
                  <span className="forms-catalog-mode-on">Online</span>
                  <span className="forms-catalog-mode-off">Offline PDF</span>
                </div>
              </div>

              <div className="forms-catalog-body">
                <nav className="forms-catalog-nav" aria-label="Forms in matter">
                  {CATALOG_FORMS.map((f) => (
                    <div
                      key={f.id}
                      className={`forms-catalog-item${f.active ? ' is-active' : ''}`}
                      aria-current={f.active ? 'true' : undefined}
                    >
                      <span className="mono forms-catalog-id">{f.id}</span>
                      <span className="forms-catalog-name">{f.name}</span>
                      <span className="mono forms-catalog-country">{f.country}</span>
                    </div>
                  ))}
                </nav>

                <div className="forms-catalog-detail">
                  <div className="forms-detail-head">
                    <h3 className="forms-detail-title">I-130 · Petition for Alien Relative</h3>
                    <span className="mono forms-detail-edition">Edition 04/01/24 · USCIS current</span>
                  </div>
                  <p className="mono forms-detail-sync">
                    Prefilled from CodioCMS · 847 fields mapped · last sync 2m ago
                  </p>
                  <dl className="forms-field-rows">
                    {ACTIVE_FORM_FIELDS.map(([label, value]) => (
                      <div key={label} className="forms-field-row">
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="forms-detail-actions">
                    <span className="forms-detail-action forms-detail-action--primary">Review &amp; sign</span>
                    <span className="forms-detail-action">Export PDF</span>
                  </div>
                </div>
              </div>

              <div className="mono forms-catalog-foot">
                Synced with USCIS · IRCC · IND · MEA / FRRO
              </div>
            </div>

            <div className="forms-cap-stack">
              {FORMS_CAPS.map((cap, i) => (
                <article key={cap.h} className={`forms-cap-card reveal d${i + 1}`}>
                  <span className="mono forms-cap-n">{cap.n}</span>
                  <h3 className="display forms-cap-title">{cap.h}</h3>
                  <p className="forms-cap-text">{cap.b}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="forms-compare reveal d1">
            {FORMS_VS.map((col) => (
              <article
                key={col.title}
                className={`forms-compare-col${col.featured ? ' forms-compare-col--featured' : ''}`}
              >
                <h3 className="display forms-compare-title">
                  {col.featured ? (
                    <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>
                      {col.title}
                    </em>
                  ) : (
                    col.title
                  )}
                </h3>
                <ul className="check-list">
                  {col.points.map((p) => (
                    <li key={p}>
                      <Check />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="forms-juris reveal d2">
            <p className="forms-juris-lead">
              Live today across four jurisdictions - new countries scoped and released on client priority.
            </p>
            <div className="forms-juris-grid">
              {JURISDICTIONS.map((j) => (
                <div key={j.name} className="forms-juris-card">
                  <span className="forms-juris-flag" aria-hidden="true">
                    {j.flag}
                  </span>
                  <div>
                    <div className="forms-juris-name">{j.name}</div>
                    <div className="forms-juris-meta">
                      <span>{j.forms}</span>
                      <span className="mono forms-juris-auth">{j.authority}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="forms-juris-payoff">
              Most platforms cover the US and stop. CodioForms centralizes every jurisdiction you practice in -
              integrated directly with cases in <strong>CodioCMS</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* AI Era */}
      <Section
        id="ai-era"
        eyebrow="Built for the AI Era"
        lead="The first immigration platform"
        emphasis="built for the AI era."
        headAlign="center"
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={AI_ERA_POINTS} cols={3} />
        </div>
      </Section>

      {/* Migration */}
      <Section id="migration" tone="sec-surface" className="sec-migration">
        <div className="migration-head-row reveal">
          <div className="section-head-wide migration-head-copy">
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
              Migration
            </div>
            <SplitHeading lead="Coming from another platform?" emphasis="We migrate you." />
            <p className="migration-head-intro">
              On INSZoom or another CMS? Our team runs the full move-data, workflows, documentation, and parallel
              operations until you’re live on CodioCMS.
            </p>
          </div>
          <div className="migration-statband reveal d1" aria-label="Migration at a glance">
            {MIGRATION_STATS.map((s) => (
              <div key={s.label} className="migration-stat">
                <span className="display migration-stat-value">{s.value}</span>
                <span className="migration-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <FeatureGrid items={MIGRATION_STEPS} cols={4} />

        <div className="migration-foot reveal d1">
          <div className="migration-foot-copy">
            <p className="migration-foot-lead">We migrate firms from platforms including:</p>
            <div className="migration-platforms" role="list">
              {MIGRATION_FROM.map((name) => (
                <span key={name} className="migration-platform" role="listitem">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <SmartLink href="mailto:info@globalcodio.ai" className="btn btn-primary migration-foot-cta">
            Talk to us about migration
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </SmartLink>
        </div>
      </Section>

      <CtaBand
        lead="See the platform on your live cases."
        emphasis="Not a generic demo."
        primary={{ href: '/free-tech-audit', label: 'Book your free tech audit' }}
        secondary={{ href: '/ai-agents', label: 'Explore the AI Agents' }}
      />
    </>
  );
}
