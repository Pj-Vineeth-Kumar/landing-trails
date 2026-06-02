import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, FeatureGrid, CtaBand } from '../components/PageKit.jsx';
import { Users, Globe, Network, ShieldCheck, TrendingUp } from 'lucide-react';

const CHALLENGES = [
  'Scaling employee visa volume across multiple countries',
  'Coordinating dozens of outside counsel and service vendors',
  'Maintaining compliance across jurisdictions',
  'Controlling cost without sacrificing quality',
  'Reporting visibility to executives and HR leadership',
];

const SOLUTIONS = [
  {
    Icon: Users,
    n: '01',
    h: 'Scale Without Adding Headcount',
    b: 'Codio AI Agents handle routine case work - intake, documents, forms, deadlines, employee communications - so your team focuses on strategy and exception management.',
    featured: true,
    links: [{ href: '/ai-agents', label: 'Meet the agents' }],
  },
  {
    Icon: Globe,
    n: '02',
    h: 'One Platform for Global Operations',
    b: 'CodioCMS and CodioForms cover the countries you operate in, with new country support added on demand.',
    links: [{ href: '/platform', label: 'Explore the platform' }],
  },
  {
    Icon: Network,
    n: '03',
    h: 'Vendor Coordination Through CodioNetwork',
    b: 'Manage translators, physicians, foreign attorneys, and apostille services through one integrated platform.',
    links: [{ href: '/network', label: 'See the network' }],
  },
  {
    Icon: ShieldCheck,
    n: '04',
    h: 'Compliance & Reporting Built In',
    b: 'Always-on deadline monitoring, audit-ready compliance records, and executive-level reporting.',
    links: [{ href: '/security', label: 'Security & compliance' }],
  },
  {
    Icon: TrendingUp,
    n: '05',
    h: 'Cost Predictability',
    b: 'Replace unpredictable outside counsel billing with a predictable managed service partnership.',
    links: [{ href: '/services', label: 'Explore services' }],
  },
];

export default function Corporate() {
  return (
    <>
      <Seo
        title="For Corporate Immigration Teams"
        description="GlobalCodio is the complete technology operation for in-house mobility, HR, and legal operations teams managing global employee immigration - CodioCMS, CodioForms, AI agents, and a worldwide service network."
        path="/for-corporate-teams"
      />

      <PageHero
        eyebrow="For Corporate Immigration Teams"
        lead="Built for Corporate Immigration Teams."
        emphasis="Designed for Global Scale."
        sub="GlobalCodio is the complete technology operation for in-house mobility, HR, and legal operations teams managing global employee immigration. CodioCMS, CodioForms, AI agents, and a worldwide service network - all built for the realities of corporate immigration."
        primary={{ href: '/free-tech-audit', label: 'Book a discovery call' }}
        secondary={{ href: '/platform', label: 'See the platform' }}
      />

      <Section
        id="challenges"
        tone=""
        eyebrow="Your Challenges"
        lead="The realities of"
        emphasis="corporate immigration at scale."
        intro="In-house mobility, HR, and legal operations teams face a familiar set of pressures as employee immigration spans more countries, more vendors, and more scrutiny."
      >
        <ul
          className="check-list"
          style={{
            marginTop: 'var(--space-2xl)',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: 'var(--space-lg)',
          }}
        >
          {CHALLENGES.map((c, i) => (
            <li key={i} className={`reveal${i ? ` d${Math.min(i, 3)}` : ''}`}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="10" cy="10" r="8" />
                <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="solutions"
        tone="sec-surface"
        eyebrow="How GlobalCodio Solves Them"
        lead="One operation purpose-built"
        emphasis="for global mobility."
        intro="From AI-driven case work to a single platform for every jurisdiction, GlobalCodio turns the hardest parts of corporate immigration into a predictable, managed operation."
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={SOLUTIONS} cols={2} />
        </div>
      </Section>

      <CtaBand
        lead="Scale your corporate"
        emphasis="immigration operation."
        sub="Book a discovery call to see how GlobalCodio runs the technology behind your global mobility program."
        primary={{ href: '/free-tech-audit', label: 'Book a discovery call' }}
        secondary={{ href: '/security', label: 'See security & compliance' }}
      />
    </>
  );
}
