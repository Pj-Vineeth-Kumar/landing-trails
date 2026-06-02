import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, FeatureGrid, CtaBand } from '../components/PageKit.jsx';
import { CertLogos } from '../components/ContentSections.jsx';
import { Lock, KeyRound, Globe, Eye, Database, UserCheck } from 'lucide-react';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="10" cy="10" r="8" />
    <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const layers = [
  {
    Icon: Lock,
    n: '01',
    h: 'Encryption',
    b: 'AES-256 at rest, TLS 1.3 in transit, and end-to-end encryption for sensitive document workflows.',
  },
  {
    Icon: KeyRound,
    n: '02',
    h: 'Access Controls',
    b: 'MFA required for all users, role-based access aligned with case roles, and complete audit logging of all access and changes.',
  },
  {
    Icon: Globe,
    n: '03',
    h: 'Data Residency',
    b: 'Compliant regional infrastructure for regulated jurisdictions, with configurable data residency for global enterprise clients.',
  },
  {
    Icon: Eye,
    n: '04',
    h: 'Continuous Monitoring',
    b: '24/7 threat detection and intrusion monitoring, active vulnerability scanning and patch management, and incident response protocols.',
  },
  {
    Icon: Database,
    n: '05',
    h: 'Backup & Recovery',
    b: 'Daily encrypted backups across regions, tested DR and business continuity plans, and defined RTO/RPO objectives.',
  },
  {
    Icon: UserCheck,
    n: '06',
    h: 'Personnel Security',
    b: 'Background-checked staff with signed confidentiality agreements, annual security training, and the principle of least privilege.',
  },
];

const docs = [
  'SOC 2 Type II Report',
  'ISO 27001 Certificate and Statement of Applicability',
  'Security Architecture Documentation',
  'Incident Response Plan',
  'Data Processing Agreements',
  'Subprocessor List and Vendor Risk Assessments',
];

const risks = [
  'Vulnerable clients.',
  'Sensitive immigration status data.',
  'Cross-border data flows.',
  'Increasing regulatory scrutiny.',
];

export default function Security() {
  return (
    <>
      <Seo
        title="Security & Compliance"
        description="Enterprise-grade security and compliance built for immigration law firms - SOC 2 Type II, ISO 27001, HIPAA alignment, encryption, and access controls from day one."
        path="/security"
      />

      <PageHero
        eyebrow="Security & Compliance"
        lead="Your clients trust you with their lives."
        emphasis="We protect that trust."
        sub="Immigration law firms handle some of the most sensitive personal data in legal practice - identity documents, family information, medical records, employment history, immigration status. GlobalCodio is built on enterprise-grade security and compliance from day one."
        primary={{ href: 'mailto:info@globalcodio.ai', label: 'Request compliance docs' }}
        secondary={{ href: '/free-tech-audit', label: 'Book a tech audit' }}
      />

      <section id="standards" className="sec">
        <div className="container">
          <div className="how-grid cert-layout">
            <div className="reveal cert-section-head">
              <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>Certifications &amp; Frameworks</div>
              <h2 className="display type-display-lg">
                <span style={{ display: 'block' }}>Built to the standards</span>
                <em className="text-grad-blue" style={{ display: 'block', fontStyle: 'italic' }}>corporate buyers require.</em>
              </h2>
            </div>
            <div className="cert-panel">
              <CertLogos className="reveal d1" />
            </div>
          </div>
        </div>
      </section>

      <Section
        id="layers"
        eyebrow="Defense in Depth"
        lead="Security built into"
        emphasis="every layer."
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={layers} cols={3} />
        </div>
      </Section>

      <Section
        id="why"
        tone="sec-dark"
        eyebrow="Why It Matters"
        lead="Why this matters for"
        emphasis="immigration law."
      >
        <div className="split-2" style={{ marginTop: 'var(--space-3xl)' }}>
          <div className="reveal">
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-2)', lineHeight: 1.6 }}>
              Immigration firms face unique risks.
            </p>
            <ul className="check-list" style={{ marginTop: 'var(--space-lg)' }}>
              {risks.map((r) => (
                <li key={r}>
                  <Check />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal d1">
            <p style={{ fontSize: 'calc(20px * var(--ui-scale))', color: 'var(--ink)', lineHeight: 1.55 }}>
              A data breach in an immigration practice isn't just a legal liability - it's a trust failure with
              people who trusted you with their futures.
            </p>
            <hr className="rule-blue" style={{ margin: 'var(--space-xl) 0' }} />
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.6 }}>
              We don't treat security as a feature. We treat it as the foundation of everything we build.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="documentation"
        tone="sec-surface"
        eyebrow="Trust Package"
        lead="Available to qualified"
        emphasis="prospects under NDA."
        intro="Our complete security and compliance documentation is available to qualified prospects under NDA."
      >
        <ul className="check-list check-cols reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          {docs.map((d) => (
            <li key={d}>
              <Check />
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        lead="Security questionnaire incoming?"
        emphasis="We’ve got the answers."
        primary={{ href: 'mailto:info@globalcodio.ai', label: 'Request compliance documentation' }}
        secondary={{ href: '/rfp-response', label: 'See the RFP service' }}
      />
    </>
  );
}
