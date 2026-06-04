'use client';
import React from 'react';

import { PageHero, Section, FeatureGrid, CtaBand } from '../../components/ui/PageKit';
import { Cpu, FileText, Bot, Network, Settings, GitMerge, ClipboardList, PenLine, MessageCircle, TrendingUp, CheckSquare, History, GitBranch } from 'lucide-react';

/* What You Get */
const WHAT_YOU_GET = [
  { Icon: Cpu, n: '01', h: 'CodioCMS', b: 'Configured to your exact workflows - not a generic template you have to bend your firm around.', links: [{ href: '/platform', label: 'Explore the platform' }] },
  { Icon: FileText, n: '02', h: 'CodioForms', b: 'Online and offline immigration forms for every country you practice in, kept current as rules change.', links: [{ href: '/platform', label: 'See CodioForms' }] },
  { Icon: Bot, n: '03', h: 'Codio AI Agents', b: 'A team of AI agents handling case prep, communications, renewals, and business development.', featured: true, links: [{ href: '/ai-agents', label: 'Meet the agents' }] },
  { Icon: Network, n: '04', h: 'CodioNetwork', b: 'A curated network for global service coordination - translators, physicians, apostille, foreign counsel.', links: [{ href: '/network', label: 'See the network' }] },
  { Icon: Settings, n: '05', h: 'GlobalCodio Services', b: 'IT support, RFP response, and ongoing management. We run your technology operation end to end.', links: [{ href: '/services', label: 'Explore services' }] },
  { Icon: GitMerge, n: '06', h: 'Migration support', b: 'Switching from another platform? We handle the migration - data, workflows, and your team - cleanly.', links: [{ href: '/services', label: 'How migration works' }] },
];

/* A day with GlobalCodio - narrative beats */
const DAY = [
  { h: 'A new client signs up.', b: 'The Intake Agent captures their information and opens the case.', agent: 'Intake Agent', Icon: ClipboardList },
  { h: 'Documents arrive.', b: 'The Document Agent extracts and translates their passport.', agent: 'Document Agent', Icon: FileText },
  { h: 'Filing begins.', b: 'The Forms Agent prepares the I-130 while the Deadline Agent monitors filing windows.', agent: 'Forms + Deadline', Icon: PenLine },
  { h: 'Questions come in.', b: 'The Client Comms Agent answers them in the client’s native language.', agent: 'Client Comms Agent', Icon: MessageCircle },
  { h: 'Meanwhile, revenue surfaces.', b: 'The Renewal Agent flags three dormant clients whose visas expire in 60 days, and the BD Agent books two consultations for next week.', agent: 'Renewal + BD', Icon: TrendingUp },
];

/* Workflow integrity — three pillars */
const INTEGRITY_ITEMS = [
  {
    Icon: CheckSquare,
    n: '01',
    h: 'Approvals that can\'t skip steps',
    b: 'Forms, support letters, and documents each have structured review workflows. A partner can comment on a specific paragraph, approve only what they\'ve reviewed, and see exactly which data source populated each field — before signing off. Approved fields can\'t be silently changed after the fact.',
  },
  {
    Icon: GitBranch,
    n: '02',
    h: 'Case status that\'s always accurate',
    b: 'Status is derived from what has actually happened in the case — not from whatever a paralegal last typed. Auto-derived status means no manual updates, no stale data in client reports, and no partner walking into a review meeting with the wrong picture.',
    featured: true,
  },
  {
    Icon: History,
    n: '03',
    h: 'Document history you can query',
    b: '"Which version of the I-130 did we file last March?" is a one-click answer. Every document carries a full version lineage with timestamps. Every form field has an audit trail. Nothing gets quietly overwritten.',
  },
];

/* Why Firms Choose Us */
/* Firm-specific outcomes. 3× ROI lives in the Home metrics band, so it's omitted
   here to avoid repeating the same headline stat. */
const REASONS = [
  ['70%', 'reduction in case preparation time'],
  ['$50K–$300K', 'recovered renewal revenue annually'],
  ['Zero', 'missed deadlines'],
  ['One', 'partner & contract - everything managed'],
];

export default function Firms() {
  return (
    <>
      <PageHero
        eyebrow="For Immigration Law Firms"
        lead="Built for Immigration Law Firms."
        emphasis="By the People Who’ve Built for You Before."
        sub="GlobalCodio is the complete technology operation for solo, mid-size, and large immigration law firms - designed by Umesh Vaidyamath, founder of the world's leading immigration platform. The platform you’ve been waiting for is here."
        primary={{ href: '/contact', label: 'Book your free tech audit' }}
        secondary={{ href: '/ai-agents', label: 'Meet the AI Agents' }}
      />

      <Section
        id="what-you-get"
        eyebrow="What You Get"
        lead="Everything your firm runs on,"
        emphasis="built and managed for you."
        intro="One partner delivers the platform, the AI workforce, the forms engine, the service network, and the people who keep it all running - all built for immigration."
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={WHAT_YOU_GET} cols={3} />
        </div>
      </Section>

      <Section
        id="a-day"
        tone="sec-surface"
        eyebrow="A Day in the Life"
        lead="What a day looks like"
        emphasis="with GlobalCodio."
        intro="From the first client intake to filing, client questions, and renewal outreach-specialized AI agents run routine work in parallel all day, so your staff stay focused on strategy and advocacy."
        introMaxWidth="76ch"
        headAlign="center"
      >
        <div className="day-grid">
          <ol className="day-timeline reveal">
            {DAY.map((step, i) => (
              <li key={step.h} className="day-step">
                <div className="day-step-rail">
                  <span className="day-step-icon" aria-hidden="true">
                    <step.Icon size={18} strokeWidth={1.9} />
                  </span>
                  <span className={`day-step-dot${i === DAY.length - 1 ? ' is-now' : ''}`} aria-hidden="true" />
                </div>
                <div className="day-step-body">
                  <h3 className="display day-step-title">{step.h}</h3>
                  <p className="day-step-text">{step.b}</p>
                  <span className="day-step-agent mono">{step.agent}</span>
                </div>
              </li>
            ))}
          </ol>

          <aside className="day-payoff reveal d1">
            <span className="eyebrow day-payoff-eyebrow">The result</span>
            <div className="day-payoff-inner">
              <div className="day-payoff-copy">
                <p className="display day-payoff-title">
                  Your staff focus on strategy, advocacy, and{' '}
                  <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>the work only humans can do.</em>
                </p>
                <p className="day-payoff-text">
                  Every routine step runs automatically, in parallel, all day - so the case load grows without the
                  headcount, and nothing slips while your team does the high-value work.
                </p>
              </div>
              <div className="day-payoff-stats">
                <div className="day-payoff-stat">
                  <span className="display day-payoff-stat-num">24/7</span>
                  <span className="day-payoff-stat-label">agents working in parallel</span>
                </div>
                <div className="day-payoff-stat">
                  <span className="display day-payoff-stat-num">8</span>
                  <span className="day-payoff-stat-label">agents on every case</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        id="process-integrity"
        eyebrow="Built-In Quality Control"
        lead="The platform enforces process."
        emphasis="So your team doesn't have to."
        intro="Most case management platforms are passive record-keepers. CodioCMS enforces your process actively — steps can't be marked complete without required reviews, approvals are logged with full context, and nothing gets silently changed after a partner signs off."
        introMaxWidth="76ch"
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={INTEGRITY_ITEMS} cols={3} />
        </div>

        {/* Cross-case dependencies callout */}
        <div
          className="reveal d1"
          style={{
            marginTop: 'var(--space-2xl)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-3xl)',
            padding: 'calc(36px * var(--ui-scale))',
            border: '1.5px solid var(--line-2)',
            borderRadius: 'calc(20px * var(--ui-scale))',
            background: 'var(--surface)',
            alignItems: 'center',
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
              Cross-Case Awareness
            </div>
            <h3
              className="display"
              style={{
                fontSize: 'var(--text-display-md)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: 'var(--space-lg)',
              }}
            >
              Family cases. Derivative cases.{' '}
              <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>
                All connected.
              </em>
            </h3>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65 }}>
              Dependent and derivative cases are first-class in CodioCMS — not a note in a text field
              you have to remember to check. When a principal case changes, related cases know.
              When a deadline in one case affects another, the system surfaces it — before it becomes
              a problem.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {[
              { label: 'Principal petitions', detail: 'Linked to all derivative beneficiaries — status changes propagate automatically.' },
              { label: 'Family-based cases', detail: 'Spouse and dependent cases tracked together, with shared deadline visibility.' },
              { label: 'Corporate transfers', detail: 'Prior visa history carried forward — no re-gathering what\'s already on file.' },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                style={{
                  paddingBottom: i < arr.length - 1 ? 'var(--space-md)' : 0,
                  borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
                }}
              >
                <div style={{ fontSize: 'calc(14px * var(--ui-scale))', fontWeight: 600, color: 'var(--ink)', marginBottom: 'calc(3px * var(--ui-scale))' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.55 }}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="why-firms-choose-us"
        eyebrow="The Numbers"
        lead="Why firms"
        emphasis="choose us."
        intro="Immigration firms on GlobalCodio report faster case preparation, recovered renewal revenue, and fewer missed deadlines-without adding headcount or stitching together another stack of point solutions. These are the outcomes partners typically see in their first year on the platform."
        introMaxWidth="76ch"
        headAlign="center"
        headInline
      >
        <div className="reveal m-grid metric-band" style={{ marginTop: 'var(--space-3xl)' }}>
          {REASONS.map(([n, l], i) => (
            <div key={i}>
              <div className="display type-display-metric metric-value" style={{ color: 'var(--blue)', letterSpacing: '-0.03em' }}>{n}</div>
              <div className="metric-label">{l}</div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        lead="See what GlobalCodio looks like"
        emphasis="for your firm."
        primary={{ href: '/contact', label: 'Book your free tech audit' }}
        secondary={{ href: '/letter-from-the-founder', label: 'Read the founder’s letter' }}
      />
    </>
  );
}
