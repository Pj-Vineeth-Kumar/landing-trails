'use client';
import React from 'react';

import { PageHero, Section, SectionEyebrow, CtaBand, SmartLink, SplitHeading } from '../../components/ui/PageKit';
import { GitMerge, Settings, FileSearch, Server, Workflow, FileCheck, ScanSearch, HeadphonesIcon } from 'lucide-react';
import { ICON_GRAD, ICON_SHADOW_SM, ICON_SHADOW_MD } from '../../lib/tokens';

const SERVICE_LAYERS = [
  {
    Icon: ScanSearch,
    n: '01',
    h: 'Technology Audit',
    b: "A comprehensive audit of your firm's current tech stack, workflows, and operations before onboarding begins. We identify gaps, risks, and opportunities - so every decision that follows is grounded in what's actually there.",
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
    Icon: HeadphonesIcon,
    n: '05',
    h: 'Customer Support',
    b: 'Support from people who understand immigration workflows - not a generic helpdesk. Our team knows what an I-129 is, understands USCIS deadlines, and speaks your language. We onboard your whole firm, then stay proactively engaged with regular check-ins and workflow reviews.',
    stat: 'Mon–Fri, 4am–5pm Pacific',
    links: [{ href: '/customer-support', label: 'Learn more' }],
  },
  {
    Icon: Server,
    n: '06',
    h: 'IT Support Services',
    b: 'Full IT support for your firm - helpdesk, device procurement and management, employee onboarding and offboarding, software provisioning, and network and security monitoring.',
    stat: 'Optional add-on',
    optional: true,
  },
  {
    Icon: Workflow,
    n: '07',
    h: 'Managed Operations',
    b: 'Ongoing day-to-day management of your complete GlobalCodio technology operation. Platform updates, AI agent tuning, network coordination, performance monitoring, and proactive support - handled by our team continuously.',
    stat: 'Fully managed, ongoing',
    featured: true,
  },
  {
    Icon: FileCheck,
    n: '08',
    h: 'RFP Response Support',
    b: 'When corporate clients send you RFPs with deep technical and security questions, we draft your responses. Available as a bundled add-on.',
    links: [{ href: '/rfp-response', label: 'Learn more' }],
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="GlobalCodio Services"
        lead="Your Complete"
        emphasis="Tech Partner."
        sub="GlobalCodio Services is the team behind your technology operation - migration, configuration, HRMS integration, IT support, security, RFP response, and ongoing managed operations. One partner. Everything handled."
        primary={{ href: '/contact', label: 'Book a free tech audit' }}
        secondary={{ href: '/rfp-response', label: 'See the RFP service' }}
      />

      <Section
        id="service-layers"
        eyebrow="What We Handle"
        lead="Nine layers."
        emphasis="One partner."
        headInline
        headAlign="center"
      >
        <div style={{ marginTop: 'var(--space-3xl)', borderTop: '1px solid var(--line)' }}>
          {SERVICE_LAYERS.filter(s => s.n !== '08').map((svc, i) => {
            const Icon = svc.Icon;
            return (
              <div
                key={svc.h}
                className={`service-layer-row reveal d${(i % 3) + 1}`}
              >
                {/* Left - name + icon + stat */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'calc(14px * var(--ui-scale))' }}>
                  <span style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 'calc(38px * var(--ui-scale))', height: 'calc(38px * var(--ui-scale))',
                    borderRadius: 'calc(10px * var(--ui-scale))',
                    background: ICON_GRAD,
                    color: '#fff',
                    boxShadow: svc.featured ? ICON_SHADOW_MD : ICON_SHADOW_SM,
                    flexShrink: 0, marginTop: 'calc(2px * var(--ui-scale))',
                  }}>
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="display" style={{ fontSize: 'calc(24px * var(--ui-scale))', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                      {svc.h}
                    </div>
                    <div style={{ display: 'flex', gap: 'calc(8px * var(--ui-scale))', marginTop: 'calc(5px * var(--ui-scale))', flexWrap: 'wrap' }}>
                      {svc.stat && (
                        <span className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.06em', color: svc.optional ? 'var(--muted)' : 'var(--blue)', fontWeight: 600 }}>
                          {svc.stat.toUpperCase()}
                        </span>
                      )}
                      {svc.optional && (
                        <span className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.06em', color: 'var(--muted)', fontWeight: 600, background: 'var(--surface)', borderRadius: '4px', padding: '1px 6px' }}>
                          OPTIONAL
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right - description + inline links */}
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

      {/* HRMS Integration - standalone section */}
      <Section id="hrms-integration">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.32fr)',
          gap: 'var(--space-4xl)',
          alignItems: 'center',
        }} className="hrms-split reveal">

          {/* Left - copy */}
          <div>
            <SectionEyebrow>Corporate Add-on</SectionEyebrow>
            <SplitHeading lead="HRMS" emphasis="Integration." inline style={{ marginTop: 'var(--space-md)' }} />
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65, marginTop: 'var(--space-lg)', maxWidth: '66ch' }}>
              Connect CodioCMS directly to your corporate HR systems. Foreign national records, employment data, and case triggers sync automatically so HR and immigration teams work from the same source of truth - without manual re-entry.
            </p>
            <div style={{ marginTop: 'var(--space-xl)', display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <SmartLink href="/contact" className="btn btn-primary">
                Talk to our team
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </SmartLink>
              <SmartLink href="/corporate" className="btn btn-glass">
                Corporate solutions
              </SmartLink>
            </div>
          </div>

          {/* Right - feature card */}
          <div style={{
            width: '80%',
            maxWidth: '80%',
            justifySelf: 'end',
            background: '#fff',
            border: '1.5px solid var(--line-2)',
            borderRadius: 'calc(20px * var(--ui-scale))',
            overflow: 'hidden',
            boxShadow: '0 1px 2px rgba(11,19,36,.04)',
          }} className="reveal d1">

            {/* Card header */}
            <div style={{
              padding: 'calc(20px * var(--ui-scale)) calc(28px * var(--ui-scale))',
              borderBottom: '1px solid var(--line)',
              background: 'var(--surface-2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-md)',
            }}>
              <div>
                <div className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.1em', color: 'var(--muted)', fontWeight: 600, marginBottom: 'calc(3px * var(--ui-scale))' }}>
                  WHAT WE SYNC
                </div>
                <div className="display" style={{ fontSize: 'calc(15px * var(--ui-scale))', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                  HR directory → CodioCMS
                </div>
              </div>
              <span style={{
                display: 'flex', alignItems: 'center', gap: 'calc(5px * var(--ui-scale))',
                padding: 'calc(5px * var(--ui-scale)) calc(10px * var(--ui-scale))',
                background: 'rgba(25,80,198,.08)', borderRadius: 999,
                fontSize: 'calc(10px * var(--ui-scale))', fontWeight: 700,
                color: 'var(--blue)', fontFamily: 'var(--mono)', letterSpacing: '.06em',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                AUTO-IMPORT
              </span>
            </div>

            {/* Capability rows */}
            <div style={{ padding: 'calc(8px * var(--ui-scale)) 0' }}>
              {[
                { name: 'Employee Listing', detail: 'Full directory with immigration-relevant fields' },
                { name: 'Departments', detail: 'Org structure mapped to case assignment' },
                { name: 'Case Initiation', detail: 'Start a case directly from the employee record' },
                { name: 'Record Import', detail: 'Pull name, title, start date, passport details' },
              ].map((cap, i, arr) => (
                <div key={cap.name} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 'var(--space-md)',
                  padding: 'calc(12px * var(--ui-scale)) calc(28px * var(--ui-scale))',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
                }}>
                  <div>
                    <div style={{ fontSize: 'calc(14px * var(--ui-scale))', fontWeight: 650, color: 'var(--ink)', lineHeight: 1.2 }}>{cap.name}</div>
                    <div className="mono" style={{ fontSize: 'calc(10.5px * var(--ui-scale))', color: 'var(--muted)', marginTop: 'calc(2px * var(--ui-scale))' }}>{cap.detail}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--blue)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Card footer - what syncs */}
            <div style={{
              padding: 'calc(16px * var(--ui-scale)) calc(28px * var(--ui-scale))',
              borderTop: '1px solid var(--line)',
              background: 'var(--surface-2)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'calc(8px * var(--ui-scale))',
            }}>
              {['Employee directory', 'Departments', 'Case triggers', 'Record import', 'Auto-sync'].map(tag => (
                <span key={tag} className="pill" style={{ fontSize: 'calc(10.5px * var(--ui-scale))', padding: 'calc(4px * var(--ui-scale)) calc(10px * var(--ui-scale))' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* RFP Response - standalone callout */}
      <Section id="rfp-response" tone="sec-surface">
        <div className="rfp-response-split reveal">
          <div>
            <SectionEyebrow>Add-on Service</SectionEyebrow>
            <h2 className="display type-display-lg" style={{ whiteSpace: 'nowrap' }}>
              <span style={{ color: 'var(--ink)' }}>RFP Response </span><em className="text-grad-blue" style={{ fontStyle: 'italic' }}>Support.</em>
            </h2>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65, marginTop: 'var(--space-lg)', maxWidth: '72ch' }}>
              When corporate clients send RFPs with deep technical and security questions, we draft your responses - written by the same team that built and runs the platform. Available as a bundled add-on.
            </p>
            <div style={{ marginTop: 'var(--space-xl)', display: 'flex', gap: 'var(--space-sm)' }}>
              <SmartLink href="/rfp-response" className="btn btn-primary">
                See the RFP service
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </SmartLink>
            </div>
          </div>
          <div className="rfp-response-steps-card">
            {[
              { n: '01', t: 'Receive the RFP', d: 'Send us the corporate RFP or technical questionnaire.' },
              { n: '02', t: 'We draft the response', d: 'Our team writes technical answers grounded in the actual platform.' },
              { n: '03', t: 'Attorney review & sign-off', d: 'You review, approve, and submit under your firm\'s name.' },
            ].map((step, i, arr) => (
              <div
                key={step.n}
                className={`rfp-response-step reveal d${i + 1}${i < arr.length - 1 ? ' rfp-response-step--ruled' : ''}`}
              >
                <span className="mono rfp-response-step-num">{step.n}</span>
                <div>
                  <div className="rfp-response-step-title">{step.t}</div>
                  <div className="rfp-response-step-desc">{step.d}</div>
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
