import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, StepList, CtaBand } from '../components/PageKit.jsx';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="10" cy="10" r="8" />
    <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const technicalSections = [
  'Case Management Platform Capabilities',
  'Data Security & Encryption Standards',
  'SOC 2 Type II & ISO 27001 Compliance',
  'HIPAA-Aligned Data Handling',
  'User Access Controls & Audit Logging',
  'Disaster Recovery & Business Continuity',
  'API & Integration Capabilities',
  'Reporting & Analytics',
  'Vendor Management Processes',
  'Geographic & Multi-Jurisdictional Capacity',
  'Attorney-Client Privilege Protections',
];

const steps = [
  { h: 'You forward us the RFP.', b: 'Within hours, not days.' },
  { h: 'We draft the technical sections.', b: 'Typically within 72 hours.' },
  { h: 'Your team reviews and customizes.', b: 'You stay in control of voice and pricing.' },
  { h: 'You submit a winning response.', b: 'Backed by real security and compliance posture.' },
];

export default function Rfp() {
  return (
    <>
      <Seo
        title="RFP Response Service"
        description="When corporate clients send 50-page RFPs with deep technical and security questions, our team drafts your responses - accurately, professionally, and on time."
        path="/rfp-response"
      />

      <PageHero
        eyebrow="RFP Response Service"
        lead="Stop Losing Corporate Deals to"
        emphasis="Technical RFP Questions."
        sub="When corporate clients send 50-page RFPs with deep technical and security questions about your case management platform, data security, and infrastructure - our team drafts your responses. Accurately. Professionally. On time."
        primary={{ href: 'mailto:info@globalcodio.ai', label: 'Send us your RFP' }}
        secondary={{ href: '/services', label: 'See all services' }}
      />

      <Section
        id="the-problem"
        eyebrow="The Problem"
        lead="Your Best Corporate Opportunity Just Hit Your Inbox."
        emphasis="Now What?"
      >
        <div className="reveal d1" style={{ maxWidth: '70ch' }}>
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.7 }}>
            Corporate immigration RFPs have changed. They now include detailed technical sections -
            case management capabilities, data security protocols, SOC 2 compliance, encryption
            standards, integration capacity, disaster recovery, GDPR compliance, ISO 27001
            certification.
          </p>
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.7, marginTop: 'var(--space-lg)' }}>
            Most immigration law firms have no one on staff who can answer these questions credibly.
            So they either fumble the response - or skip the deal entirely.
          </p>
        </div>
      </Section>

      <Section
        id="technical-sections"
        tone="sec-surface"
        eyebrow="What We Cover"
        lead="The Technical Sections"
        emphasis="We Draft for You."
      >
        <ul className="check-list check-cols reveal d1" style={{ marginTop: 'var(--space-xl)' }}>
          {technicalSections.map((item) => (
            <li key={item}>
              <Check />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="how-it-works"
        eyebrow="How It Works"
        lead="From Inbox to"
        emphasis="Winning Response."
      >
        <div className="reveal d1" style={{ marginTop: 'var(--space-xl)' }}>
          <StepList steps={steps} />
        </div>
      </Section>

      <Section
        id="why"
        tone="sec-dark"
        eyebrow="Why This Service Exists"
        lead="The Answers, Written"
        emphasis="by a Partner."
      >
        <div className="reveal d1" style={{ maxWidth: '70ch' }}>
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.7 }}>
            We built this service because we kept hearing the same story - immigration firms losing
            seven-figure corporate accounts because they couldn't credibly answer the technical
            sections of an RFP.
          </p>
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.7, marginTop: 'var(--space-lg)' }}>
            With GlobalCodio managing your technology operation, you don't just have the answers. You
            have a partner who writes them for you.
          </p>
          <hr className="rule-blue" style={{ margin: 'var(--space-xl) 0' }} />
          <p className="mono" style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.6, letterSpacing: '0.04em' }}>
            RFP Response Support is available exclusively as a bundled add-on to GlobalCodio clients.
          </p>
        </div>
      </Section>

      <CtaBand
        lead="Have an RFP coming up?"
        emphasis="Send it over."
        primary={{ href: 'mailto:info@globalcodio.ai', label: 'Send us your RFP' }}
        secondary={{ href: '/free-tech-audit', label: 'Book a tech audit' }}
      />
    </>
  );
}
