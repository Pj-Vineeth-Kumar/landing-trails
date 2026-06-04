import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, FeatureGrid, CtaBand } from '../components/PageKit.jsx';
import { Cpu, FileText, Bot, Network, Settings, GitMerge, ClipboardList, PenLine, MessageCircle, TrendingUp } from 'lucide-react';

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
      <Seo
        title="For Immigration Law Firms"
        description="The complete technology operation for solo, mid-size, and large immigration law firms - platform, AI agents, global forms, network, and managed services. Designed by the founder of the world's leading immigration platform."
        path="/for-law-firms"
      />

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
