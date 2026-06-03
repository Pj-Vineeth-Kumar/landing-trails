import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, CtaBand, SmartLink } from '../components/PageKit.jsx';
import { GitMerge, Settings, FileSearch, Server, Workflow, FileCheck, ScanSearch } from 'lucide-react';

const SERVICE_LAYERS = [
  {
    Icon: ScanSearch,
    n: '01',
    h: 'Technology Audit',
    b: "A comprehensive audit of your firm's current tech stack, workflows, and operations before onboarding begins. We identify gaps, risks, and opportunities — so every decision that follows is grounded in what's actually there.",
    stat: 'Free for qualifying firms',
    links: [{ href: '/contact', label: 'Request an audit' }],
  },
  {
    Icon: GitMerge,
    n: '02',
    h: 'Migration & Onboarding',
    b: 'Move your firm from your existing case management platform to CodioCMS. Includes data migration, parallel operations, user training, and process documentation.',
    stat: 'Most migrations complete in 6 weeks',
  },
  {
    Icon: Settings,
    n: '03',
    h: 'Configuration & Optimization',
    b: "Configure CodioCMS to match your firm's exact workflows. Build templates, automations, and integrations that reflect how your firm actually operates - not generic out-of-the-box defaults.",
    stat: 'Configured before go-live',
  },
  {
    Icon: FileSearch,
    n: '04',
    h: 'Process Documentation',
    b: "Capture the tribal knowledge that lives in your team's heads. We document every workflow your firm runs - turning institutional knowledge into systems that survive staff turnover.",
    stat: 'Survives staff turnover',
  },
  {
    Icon: Server,
    n: '05',
    h: 'IT Support Services',
    b: 'Full IT support for your firm. Helpdesk, device procurement and management, employee onboarding and offboarding, software provisioning, network and security monitoring. You stop being your own IT department.',
    stat: 'Replaces your IT department',
  },
  {
    Icon: Workflow,
    n: '06',
    h: 'Managed Operations',
    b: 'Ongoing day-to-day management of your complete GlobalCodio technology operation. Platform updates, AI agent tuning, network coordination, performance monitoring, and proactive support - handled by our team continuously.',
    stat: 'Fully managed, ongoing',
    featured: true,
  },
  {
    Icon: FileCheck,
    n: '07',
    h: 'RFP Response Support',
    b: 'When corporate clients send you RFPs with deep technical and security questions, we draft your responses. Available as a bundled add-on.',
    links: [{ href: '/rfp-response', label: 'Learn more' }],
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services - Your Complete Tech Partner"
        description="GlobalCodio Services is the team behind your technology operation: migration, configuration, IT support, security, RFP response, and managed operations. One partner. Everything handled."
        path="/services"
      />

      <PageHero
        eyebrow="GlobalCodio Services"
        lead="Your Complete"
        emphasis="Tech Partner."
        sub="GlobalCodio Services is the team behind your technology operation - migration, configuration, IT support, security, RFP response, and ongoing managed operations. One partner. Everything handled."
        primary={{ href: '/contact', label: 'Book a free tech audit' }}
        secondary={{ href: '/rfp-response', label: 'See the RFP service' }}
      />

      <Section
        id="service-layers"
        eyebrow="What We Handle"
        lead="Seven layers."
        emphasis="One partner."
        headInline
        headAlign="center"
      >
        <div className="reveal" style={{ marginTop: 'var(--space-3xl)', borderTop: '1px solid var(--line)' }}>
          {SERVICE_LAYERS.filter(s => s.n !== '07').map((svc) => {
            const Icon = svc.Icon;
            return (
              <div
                key={svc.h}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: 'var(--space-3xl)',
                  padding: 'calc(28px * var(--ui-scale)) 0',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'start',
                }}
              >
                {/* Left — name + icon + stat */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'calc(14px * var(--ui-scale))' }}>
                  <span style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 'calc(38px * var(--ui-scale))', height: 'calc(38px * var(--ui-scale))',
                    borderRadius: 'calc(10px * var(--ui-scale))',
                    background: svc.featured ? 'var(--blue)' : 'var(--blue-soft)',
                    color: svc.featured ? '#fff' : 'var(--blue)',
                    flexShrink: 0, marginTop: 'calc(2px * var(--ui-scale))',
                  }}>
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="display" style={{ fontSize: 'calc(24px * var(--ui-scale))', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                      {svc.h}
                    </div>
                    {svc.stat && (
                      <div className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.06em', color: 'var(--blue)', fontWeight: 600, marginTop: 'calc(5px * var(--ui-scale))' }}>
                        {svc.stat.toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right — description + inline links */}
                <div>
                  <p style={{ fontSize: 'calc(15px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.7, margin: 0 }}>
                    {svc.b}
                    {svc.links && svc.links.map((l) => (
                      <span key={l.label}>
                        {' '}
                        <SmartLink href={l.href} className="feature-card-link" style={{ fontWeight: 600, display: 'inline-flex', verticalAlign: 'middle' }}>
                          {l.label}
                          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 12, height: 12 }}>
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </SmartLink>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* RFP Response — standalone callout */}
      <Section id="rfp-response" tone="sec-surface">
        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: 'var(--space-4xl)',
          alignItems: 'center',
        }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>Add-on Service</div>
            <h2 className="display type-display-lg" style={{ whiteSpace: 'nowrap' }}>
              <span style={{ color: 'var(--ink)' }}>RFP Response </span><em className="text-grad-blue" style={{ fontStyle: 'italic' }}>Support.</em>
            </h2>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65, marginTop: 'var(--space-lg)', maxWidth: '48ch' }}>
              When corporate clients send RFPs with deep technical and security questions, we draft your responses — written by the same team that built and runs the platform. Available as a bundled add-on.
            </p>
            <div style={{ marginTop: 'var(--space-xl)', display: 'flex', gap: 'var(--space-sm)' }}>
              <SmartLink href="/rfp-response" className="btn btn-primary">
                See the RFP service
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </SmartLink>
            </div>
          </div>
          <div style={{
            background: '#fff',
            border: '1.5px solid var(--line-2)',
            borderRadius: 'calc(16px * var(--ui-scale))',
            padding: 'calc(32px * var(--ui-scale))',
            display: 'flex', flexDirection: 'column', gap: 'calc(16px * var(--ui-scale))',
          }}>
            {[
              { n: '01', t: 'Receive the RFP', d: 'Send us the corporate RFP or technical questionnaire.' },
              { n: '02', t: 'We draft the response', d: 'Our team writes technical answers grounded in the actual platform.' },
              { n: '03', t: 'Attorney review & sign-off', d: 'You review, approve, and submit under your firm\'s name.' },
            ].map((step, i, arr) => (
              <div key={step.n} style={{
                display: 'flex', gap: 'calc(14px * var(--ui-scale))',
                paddingBottom: i < arr.length - 1 ? 'calc(16px * var(--ui-scale))' : 0,
                borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
              }}>
                <span className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', color: 'var(--blue)', fontWeight: 700, letterSpacing: '.06em', flexShrink: 0, paddingTop: 'calc(3px * var(--ui-scale))' }}>{step.n}</span>
                <div>
                  <div style={{ fontSize: 'calc(14px * var(--ui-scale))', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3 }}>{step.t}</div>
                  <div style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.55, marginTop: 'calc(3px * var(--ui-scale))' }}>{step.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        lead="Stop managing technology."
        emphasis="Start winning cases."
        primary={{ href: '/contact', label: 'Book your free tech audit' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Talk to our team' }}
      />
    </>
  );
}
