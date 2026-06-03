import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, FeatureGrid, CtaBand } from '../components/PageKit.jsx';
import {
  ClipboardList,
  FileText,
  ScanText,
  ShieldCheck,
  PenLine,
  CalendarClock,
  MessageCircle,
  RefreshCw,
  TrendingUp,
  Globe,
  BellRing,
} from 'lucide-react';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="10" cy="10" r="8" />
    <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AGENTS = [
  {
    Icon: ClipboardList,
    n: '01',
    h: 'Intake Agent',
    b: 'Captures client data, validates identity documents, opens and classifies cases, and sends welcome packets automatically.',
    stat: '45 MIN → 8 MIN PER CASE',
  },
  {
    Icon: ScanText,
    n: '02',
    h: 'Document Extraction Agent',
    b: 'Extracts data from passports, visas, foreign records, and supporting documents. Translates 40+ languages and classifies files directly into the case.',
    stat: '10× FASTER THAN MANUAL REVIEW',
  },
  {
    Icon: ShieldCheck,
    n: '03',
    h: 'Document Validation Agent',
    b: 'Cross-checks extracted documents for completeness, flags missing or expired items, and verifies authenticity before anything is filed.',
    stat: 'ZERO MISSING DOCS AT FILING',
  },
  {
    Icon: PenLine,
    n: '04',
    h: 'Forms Agent',
    b: 'Auto-fills forms across CodioForms - USA, Canada, Netherlands, India and more. Cross-references data across forms and always uses current versions.',
    stat: '70% LESS FORM PREP TIME',
  },
  {
    Icon: CalendarClock,
    n: '05',
    h: 'Deadline Agent',
    b: 'Tracks every case milestone, visa expiration, and filing deadline. Sends proactive alerts with 24/7 monitoring across all time zones.',
    stat: 'ZERO MISSED DEADLINES',
  },
  {
    Icon: MessageCircle,
    n: '06',
    h: 'Client Comms Agent',
    b: 'Sends case status updates, answers common questions 24/7, schedules appointments, and collects missing documents - in multiple languages.',
    stat: '80% FEWER INBOUND CALLS',
  },
  {
    Icon: RefreshCw,
    n: '07',
    h: 'Renewal Agent',
    b: 'Continuously scans your client database for visa renewals, green card upgrades, citizenship eligibility, and dormant cases worth reopening.',
    stat: '$50K-$300K RECOVERED ANNUALLY',
  },
  {
    Icon: TrendingUp,
    n: '08',
    h: 'BD Agent',
    b: 'Runs automated outreach to prospective clients, qualifies leads by case type and urgency, and books consultations directly on attorney calendars.',
    stat: '8-15 NEW CASES PER MONTH',
  },
  {
    Icon: Globe,
    n: '09',
    h: 'Ecosystem Agent',
    b: 'Coordinates translators, certified physicians, apostille services, foreign attorneys, and consular logistics through the CodioNetwork.',
    stat: '30% FASTER CASE TURNAROUND',
  },
  {
    Icon: BellRing,
    n: '10',
    h: 'Government Notice Update Agent',
    b: 'Monitors government portals, regulatory sources, and immigration authority announcements for policy changes, form revisions, and notice updates — alerting your firm to anything that affects open cases.',
    stat: 'REAL-TIME POLICY ALERTS',
  },
];

const COMPARISON = [
  {
    title: 'Generic AI Tools',
    points: [
      'Not built for immigration',
      'You figure it out',
      'One-off tools',
      'Sits next to your software',
      'Generic outputs',
    ],
  },
  {
    title: 'DIY AI Solutions',
    points: [
      'Requires internal AI expertise',
      'You configure it yourself',
      'Fragile and limited',
      'Breaks when systems change',
      'Inconsistent quality',
    ],
  },
  {
    title: 'Codio AI Agents',
    featured: true,
    points: [
      'Purpose-built for immigration',
      'We deploy and manage it',
      'Integrated team of 8+ specialists',
      'Native to CodioCMS',
      'Trained on immigration workflows',
    ],
  },
];

export default function Agents() {
  return (
    <>
      <Seo
        title="Codio AI Agents - Immigration AI"
        description="Codio AI Agents are a team of specialized agents built exclusively for immigration workflows, integrated natively with CodioCMS and fully managed by our team."
        path="/ai-agents"
      />

      <PageHero
        eyebrow="Codio AI Agents"
        lead="Not Generic AI."
        emphasis="Immigration AI."
        sub="Codio AI Agents are a team of specialized agents - built exclusively for immigration workflows, integrated natively with CodioCMS, deployed and managed by our team. Eight agents today. More added as your firm needs grow."
        primary={{ href: '/contact', label: 'Book a 30-minute demo' }}
        secondary={{ href: '/platform', label: 'See the platform' }}
      />

      <Section
        id="agents"
        eyebrow="The Team"
        lead="Eight specialized agents."
        emphasis="One immigration team."
        intro="Each agent is purpose-built for a stage of the immigration workflow - working together inside CodioCMS, 24/7, with no configuration required from your firm."
        introMaxWidth="68ch"
        headAlign="center"
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={AGENTS} cols={4} />
          <div
            className="reveal d1"
            style={{
              marginTop: 'var(--space-lg)',
              border: '1.5px dashed var(--line-2)',
              borderRadius: 'calc(16px * var(--ui-scale))',
              padding: 'calc(28px * var(--ui-scale))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-lg)',
            }}
          >
            <div>
              <div className="display" style={{ fontSize: 'calc(17px * var(--ui-scale))', fontWeight: 650, color: 'var(--ink-2)', letterSpacing: '-0.01em' }}>
                More agents coming
              </div>
              <p style={{ fontSize: 'calc(14px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.5, marginTop: 'calc(4px * var(--ui-scale))' }}>
                New agents are released as immigration workflows evolve. Existing clients get access automatically — no additional licensing or per-agent fees.
              </p>
            </div>
            <span className="pill" style={{ flexShrink: 0, fontSize: 'calc(11px * var(--ui-scale))', letterSpacing: '.08em', textTransform: 'uppercase' }}>
              Coming soon
            </span>
          </div>
        </div>
      </Section>

      <Section
        id="difference"
        tone="sec-surface"
        eyebrow="Why It Matters"
        lead="The AI difference"
        emphasis="that matters."
        intro="Most firms are choosing between generic AI tools they have to wrangle and DIY solutions they have to build. Codio AI Agents are a managed, integrated alternative."
        headAlign="center"
        headInline
      >
        <div
          className="check-cols"
          style={{
            marginTop: 'var(--space-3xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-xl)',
            alignItems: 'stretch',
          }}
        >
          {COMPARISON.map((col, i) => (
            <article
              key={col.title}
              className={`feature-card${col.featured ? ' feature-card--featured' : ''} reveal d${i}`}
              style={{ display: 'flex', flexDirection: 'column', padding: 'calc(32px * var(--ui-scale))' }}
            >
              <h3
                className="display"
                style={{
                  fontSize: 'var(--text-display-md)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: 'var(--space-lg)',
                }}
              >
                {col.featured ? (
                  <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>
                    {col.title}
                  </em>
                ) : (
                  col.title
                )}
              </h3>
              <ul className="check-list" style={{ display: 'grid', gap: 'var(--space-md)' }}>
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
      </Section>

      <Section
        id="roadmap"
        eyebrow="Built to Grow"
        lead="Eight today."
        emphasis="More coming."
        headAlign="center"
        headInline
      >
        <div
          className="reveal d1"
          style={{
            marginTop: 'var(--space-md)',
            maxWidth: 'calc(760px * var(--ui-scale))',
            marginInline: 'auto',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.7, position: 'static' }}>
            Codio AI Agents are designed to grow with your firm. New agents are released as immigration workflows evolve
            and as our clients identify new opportunities for automation. Existing clients get access to new agents as
            part of the platform - <strong>no separate licensing, no per-agent fees.</strong>
          </p>
          <hr className="rule-blue" style={{ marginTop: 'var(--space-lg)', marginInline: 'auto' }} />
        </div>
      </Section>

      <CtaBand
        lead="See Codio AI Agents in action."
        emphasis="On your real cases."
        primary={{ href: '/contact', label: 'Book a 30-minute demo' }}
        secondary={{ href: '/platform', label: 'Explore the platform' }}
      />
    </>
  );
}
