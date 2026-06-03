import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, FeatureGrid, CtaBand } from '../components/PageKit.jsx';
import { Languages, Stethoscope, Stamp, Scale, Truck, Building2, Globe, Network as NetworkIcon, Workflow } from 'lucide-react';

const NETWORK_ITEMS = [
  { Icon: Languages, n: '01', h: 'Certified Translators', b: 'Document translation across 40+ languages, delivered to immigration-grade standards.', stat: '40+ LANGUAGES' },
  { Icon: Stethoscope, n: '02', h: 'Immigration Physicians', b: 'USCIS and foreign-authority-approved medical exams from credentialed panel physicians.', stat: 'USCIS APPROVED' },
  { Icon: Stamp, n: '03', h: 'Apostille & Authentication', b: 'Document authentication and apostille services coordinated across countries.', stat: 'MULTI-COUNTRY' },
  { Icon: Scale, n: '04', h: 'Foreign Attorneys', b: 'In-country counsel for global immigration matters, vetted and ready to engage.', stat: 'IN-COUNTRY COUNSEL' },
  { Icon: Truck, n: '05', h: 'Specialized Couriers', b: 'Secure delivery to consulates and immigration authorities with full chain of custody.', stat: 'SECURE DELIVERY' },
  { Icon: Building2, n: '06', h: 'Consular Coordinators', b: 'Appointment scheduling and consular liaison handled by experienced coordinators.', stat: 'CONSULAR LIAISON' },
];

export default function Network() {
  return (
    <>
      <Seo
        title="CodioNetwork"
        description="A curated B2B network of certified translators, physicians, apostille services, foreign attorneys, couriers, and consular coordinators - accessible directly through CodioCMS."
        path="/network"
      />

      <PageHero
        eyebrow="CodioNetwork"
        lead="The Global Service Provider Network"
        emphasis="for Immigration."
        sub="A curated B2B network of certified translators, physicians, apostille services, foreign attorneys, courier services, and consular coordinators - accessible directly through CodioCMS."
        primary={{ href: '/contact', label: 'Request a walkthrough' }}
        secondary={{ href: '/platform', label: 'See the platform' }}
      />

      <Section
        id="why-network"
        tone=""
        eyebrow="The Coordination Problem"
        lead="Immigration is global."
        emphasis="Your service providers should be too."
      >
        <div className="split-2" style={{ marginTop: 'var(--space-2xl)' }}>
          <div className="reveal">
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.7 }}>
              Every immigration case is a coordination problem. Translators in one country. Certified physicians in
              another. Apostille services in a third. Foreign attorneys, couriers, and consular logistics across
              multiple countries.
            </p>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.7, marginTop: 'var(--space-lg)' }}>
              Most firms manage all of this manually - losing time, racking up costs, and risking compliance failures.
            </p>
            <hr className="rule-blue" style={{ margin: 'var(--space-xl) 0' }} />
            <p className="display" style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              CodioNetwork brings the entire global immigration service ecosystem into{' '}
              <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>one place.</em>
            </p>
          </div>
          <div className="reveal d1 check-list-wrap">
            <ul className="check-list">
              {[
                'Vetted providers across every immigration discipline',
                'Standardized quality you can rely on, case after case',
                'Integrated directly with your cases inside CodioCMS',
                'One coordination layer instead of dozens of manual handoffs',
              ].map((t, i) => (
                <li key={i}>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10" cy="10" r="8" /><path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="whats-in-network"
        eyebrow="The Ecosystem"
        lead="What's in"
        emphasis="the Network."
        intro="A curated roster of certified, vetted providers spanning every step of a global immigration case - ready to engage from within your workflow."
        headAlign="center"
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={NETWORK_ITEMS} cols={3} />
        </div>
      </Section>

      <Section
        id="built-in"
        tone="sec-dark"
        eyebrow="Inside Your Workflow"
        lead="Built into your platform."
        emphasis="Available to your firm."
        intro="CodioNetwork is accessible directly through CodioCMS for GlobalCodio clients. Your team can identify providers, coordinate services, and track progress - all within the same workflow as your case management."
      >
        <div style={{ marginTop: 'var(--space-2xl)' }}>
          <FeatureGrid
            cols={3}
            items={[
              { Icon: Globe, n: '01', h: 'Identify Providers', b: 'Surface the right vetted providers for each country and service type, in seconds.' },
              { Icon: Workflow, n: '02', h: 'Coordinate Services', b: 'Engage and manage providers without leaving CodioCMS - no separate tools or email chains.' },
              { Icon: NetworkIcon, n: '03', h: 'Track Progress', b: 'Monitor every external service against the case, with full visibility into status and timing.' },
            ]}
          />
        </div>
        <p className="reveal d1 mono" style={{ marginTop: 'var(--space-2xl)', textAlign: 'center', fontSize: 'calc(12px * var(--ui-scale))', letterSpacing: '.06em', color: 'var(--ink-3)' }}>
          DETAILED NETWORK FEATURES AND PRICING AVAILABLE IN CLIENT MEETINGS.
        </p>
      </Section>

      <CtaBand
        lead="Bring your global ecosystem"
        emphasis="into one platform."
        primary={{ href: '/contact', label: 'Request a walkthrough' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Talk to our team' }}
      />
    </>
  );
}
