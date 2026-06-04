'use client';
import React from 'react';

import { PageHero, Section, FeatureGrid, CtaBand } from '../../components/ui/PageKit';
import { Users, Globe, Network, ShieldCheck, TrendingUp } from 'lucide-react';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="10" cy="10" r="8" />
    <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CHALLENGES = [
  'Scaling employee visa volume across multiple countries',
  'Coordinating dozens of outside counsel and service vendors',
  'Maintaining compliance across countries',
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
      <PageHero
        eyebrow="For Corporate Immigration Teams"
        lead="Built for Corporate Immigration Teams."
        emphasis="Designed for Global Scale."
        sub="GlobalCodio is the complete technology operation for in-house mobility, HR, and legal operations teams managing global employee immigration. CodioCMS, CodioForms, AI agents, and a worldwide service network - all built for the realities of corporate immigration."
        primary={{ href: '/contact', label: 'Book a discovery call' }}
        secondary={{ href: '/platform', label: 'See the platform' }}
      />

      <Section
        id="challenges"
        eyebrow="Your Challenges"
        lead="The realities of"
        emphasis="corporate immigration at scale."
      >
        <div className="split-2 corporate-challenges-split" style={{ marginTop: 'var(--space-3xl)' }}>
          <div className="reveal">
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-2)', lineHeight: 1.6 }}>
              In-house mobility, HR, and legal operations teams face a familiar set of pressures.
            </p>
            <ul className="check-list" style={{ marginTop: 'var(--space-lg)' }}>
              {CHALLENGES.map((c) => (
                <li key={c}>
                  <Check />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal d1">
            <p style={{ fontSize: 'calc(20px * var(--ui-scale))', color: 'var(--ink)', lineHeight: 1.55 }}>
              When employee immigration spans more countries, more vendors, and more executive scrutiny,
              fragmented tools and manual coordination stop scaling.
            </p>
            <hr className="rule-blue" style={{ margin: 'var(--space-xl) 0' }} />
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.6 }}>
              GlobalCodio replaces the patchwork of outside counsel portals, spreadsheets, and disconnected
              systems with one managed operation built for corporate mobility - CodioCMS for case workflow,
              CodioForms across the countries you operate in, AI agents for routine case work, and CodioNetwork
              for vendor coordination. Your team gets executive-ready reporting and compliance visibility without
              stitching together another stack of point solutions.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="solutions"
        tone="sec-surface"
        eyebrow="How GlobalCodio Solves Them"
        lead="One operation purpose-built"
        emphasis="for global mobility."
        intro="From AI-driven case work to a single platform for every country, GlobalCodio turns the hardest parts of corporate immigration into a predictable, managed operation."
      >
        <div className="corporate-solutions-grid reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={SOLUTIONS} cols={3} />
        </div>
      </Section>

      <CtaBand
        lead="Scale your corporate"
        emphasis="immigration operation."
        sub="Book a discovery call to see how GlobalCodio runs the technology behind your global mobility program."
        primary={{ href: '/contact', label: 'Book a discovery call' }}
        secondary={{ href: '/security', label: 'See security & compliance' }}
      />
    </>
  );
}
