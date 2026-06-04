'use client';
import React from 'react';

import { PageHero, Section, FeatureGrid, CtaBand, SmartLink, SplitHeading } from '../../components/ui/PageKit';
import { FaqAccordion } from '../../components/ui/FaqAccordion';
import {
  Workflow,
  Users,
  Globe,
  Settings,
  GitMerge,
  TrendingUp,
  Cpu,
  RefreshCw,
  Bot,
  FileText,
  Database,
  Building2,
  Network,
  ShieldCheck,
  ClipboardList,
  BarChart3,
  Vault,
  ArrowRightLeft,
  UserCheck,
} from 'lucide-react';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="10" cy="10" r="8" />
    <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CMS_FEATURES = [
  {
    Icon: Workflow,
    n: '01',
    h: 'End-to-end case lifecycle',
    b: 'Full case lifecycle management for every immigration matter type — from intake through filing to closure.',
  },
  {
    Icon: Users,
    n: '02',
    h: 'Applicant portal',
    b: 'Secure portal for foreign nationals and beneficiaries to submit documents, answer questionnaires, track their case status — and own their immigration record across every matter they ever open.',
  },
  {
    Icon: Building2,
    n: '03',
    h: 'HR portal',
    b: 'Dedicated portal for corporate HR and mobility teams to manage employee visa cases, track immigration health, and view workforce analytics.',
  },
  {
    Icon: Network,
    n: '04',
    h: 'Service provider portal',
    b: 'Controlled access portal for external service providers to receive assignments, submit deliverables, and coordinate directly within CodioCMS.',
  },
  {
    Icon: ShieldCheck,
    n: '05',
    h: 'Role-based access control',
    b: 'Granular permissions across 27 modules and 7 action types — attorney, HR admin, firm admin, provider, and super admin roles with data-scope isolation.',
  },
  {
    Icon: ClipboardList,
    n: '06',
    h: 'Client questionnaires',
    b: 'Structured intake and case questionnaires with conditional logic, prefill from case data, per-portal delivery, and attorney review workflows.',
  },
  {
    Icon: Globe,
    n: '07',
    h: 'Global country support',
    b: 'Case handling across every country you serve in one unified system — with new countries added on demand.',
  },
  {
    Icon: Settings,
    n: '08',
    h: 'Customizable workflows',
    b: "Playbook templates and work-step automations configured to your firm's exact operations — not one-size-fits-all defaults.",
  },
  {
    Icon: GitMerge,
    n: '09',
    h: 'Native integrations',
    b: 'Native integrations with email, calendar, e-signature, and accounting tools your team already relies on.',
  },
  {
    Icon: BarChart3,
    n: '10',
    h: 'Reporting & analytics',
    b: 'Executive reports, HR analytics dashboards, firm performance comparison, renewal pipeline, budget tracking, and bottleneck alerts.',
  },
];

const FORMS_STATS = [
  { value: '4', label: 'countries live today' },
  { value: 'Days', label: 'not quarters for new countries' },
  { value: '1', label: 'source of truth tied to CodioCMS' },
];

const JURISDICTIONS = [
  { flag: '🇺🇸', name: 'United States', forms: '180+ forms', authority: 'USCIS' },
  { flag: '🇨🇦', name: 'Canada', forms: 'IRCC suite', authority: 'IRCC' },
  { flag: '🇳🇱', name: 'Netherlands', forms: 'MVV & permits', authority: 'IND' },
  { flag: '🇮🇳', name: 'India', forms: 'Visa & OCI', authority: 'MEA / FRRO' },
];

const CATALOG_FORMS = [
  { id: 'I-130', name: 'Petition for Alien Relative', country: 'US', active: true },
  { id: 'I-485', name: 'Adjustment of Status', country: 'US', active: false },
  { id: 'IMM 0008', name: 'Generic Application', country: 'CA', active: false },
  { id: 'MVV', name: 'Provisional residence permit', country: 'NL', active: false },
];

const ACTIVE_FORM_FIELDS = [
  ['Part 1 · Relationship', 'Spouse of U.S. citizen'],
  ['Part 2 · Beneficiary', 'Chen, Wei · DOB 14 Mar 1991'],
  ['Part 4 · Processing', 'Adjustment of status · Concurrent filing'],
];

const FORMS_CAPS = [
  {
    n: '01',
    h: 'Online & offline',
    b: 'Online forms are filled directly on government portals (USCIS, IRCC, etc.). Offline forms are pre-populated PDFs exported from CodioCMS for traditional paper submission. Same case data, either path.',
  },
  {
    n: '02',
    h: 'Authority-synced versions',
    b: 'Every edition tracked to USCIS, IRCC, IND, and MEA releases. Your firm never files on a superseded form.',
  },
  {
    n: '03',
    h: 'Built on your priority',
    b: "Need a country we don't ship yet? We scope, build, and release based on client demand - in days, not product quarters.",
  },
];



const AI_ERA_POINTS = [
  {
    Icon: Cpu,
    n: '01',
    h: 'Built before AI existed',
    b: 'Every other case management platform in immigration was built before AI agents existed. Their workflows, integrations, and data models were never designed to support an AI workforce.',
  },
  {
    Icon: Bot,
    n: '02',
    h: 'Native AI from the ground up',
    b: 'CodioCMS is different - designed from the ground up to run native AI agents, automate routine work, and grow with your firm.',
    featured: true,
    links: [{ href: '/ai-agents', label: 'Meet the AI Agents' }],
  },
  {
    Icon: RefreshCw,
    n: '03',
    h: 'Not AI bolted on',
    b: 'This is not legacy software with AI bolted on. This is the platform AI was waiting for.',
  },
];

const MIGRATION_STATS = [
  { value: '~6 wks', label: 'typical full migration' },
  { value: 'Parallel', label: 'ops until you cut over' },
  { value: 'Verified', label: 'data before go-live' },
];

const MIGRATION_STEPS = [
  {
    Icon: Database,
    h: 'Move your data',
    b: 'Full export from your current platform - imported into CodioCMS and verified before anything moves.',
  },
  {
    Icon: Workflow,
    h: 'Rebuild workflows',
    b: 'Operations reconfigured in CodioCMS to match how your firm actually works.',
  },
  {
    Icon: FileText,
    h: 'Document processes',
    b: "Institutional knowledge captured in the system, not in people's heads.",
  },
  {
    Icon: RefreshCw,
    h: 'Run in parallel',
    b: 'Dual operations until your team is fully transitioned-usually within six weeks.',
    featured: true,
  },
];

const MIGRATION_FROM = ['Legacy CMS', 'Spreadsheets', 'Other platforms'];

/* ── CMS Bento ───────────────────────────────────────────
   Hero card (left, spans full height) + 3 grouped columns (right)
   Groups: Case Management · Portals & Access · Intelligence
──────────────────────────────────────────────────────── */
const CMS_GROUPS = [
  {
    tag: 'Case Management',
    color: 'var(--blue)',
    items: [
      { Icon: Workflow, h: 'End-to-end case lifecycle', b: 'From intake through filing to closure — every matter type, one system.' },
      { Icon: Settings, h: 'Customizable workflows', b: 'Playbook templates and automations built for your exact operations.' },
      { Icon: Globe,    h: 'Global country support',  b: 'Every country you practice in, with new countries added on demand.' },
    ],
  },
  {
    tag: 'Portals & Access',
    color: '#7c3aed',
    items: [
      { Icon: Users,     h: 'Applicant portal',          b: 'Foreign nationals submit documents, track status, and answer questionnaires.' },
      { Icon: Building2, h: 'HR & employer portal',      b: 'Corporate HR teams manage employee visa cases and workforce analytics.' },
      { Icon: Network,   h: 'Service provider portal',   b: 'Translators, physicians, and attorneys coordinate inside the same platform.' },
    ],
  },
  {
    tag: 'Intelligence',
    color: '#0891b2',
    items: [
      { Icon: ClipboardList, h: 'Client questionnaires',      b: 'Conditional logic, case-data prefill, and attorney review workflows.' },
      { Icon: ShieldCheck,   h: 'Role-based access control',  b: '27 permission modules, 7 action types, and full data-scope isolation.' },
      { Icon: BarChart3,     h: 'Reporting & analytics',      b: 'Executive reports, HR dashboards, renewal pipeline, and bottleneck alerts.' },
    ],
  },
];

function CMSBento() {
  return (
    <div className="reveal" style={{
      marginTop: 'var(--space-3xl)',
      display: 'grid',
      gridTemplateColumns: 'calc(300px * var(--ui-scale)) 1fr',
      gap: 'calc(16px * var(--ui-scale))',
      alignItems: 'stretch',
    }}>
      {/* ── Hero card ── */}
      <div style={{
        background: 'linear-gradient(145deg, var(--blue) 0%, var(--blue-ink) 100%)',
        borderRadius: 'calc(20px * var(--ui-scale))',
        padding: 'calc(40px * var(--ui-scale))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid rgba(255,255,255,.08)',
        boxShadow: '0 0 60px rgba(25,80,198,.2)',
      }}>
        <div>
          <div className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.14em', color: 'rgba(255,255,255,.5)', marginBottom: 'calc(16px * var(--ui-scale))' }}>
            CODIOCMS
          </div>
          <div className="display" style={{ fontSize: 'calc(34px * var(--ui-scale))', fontStyle: 'italic', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Everything your firm needs.<br />
            <em style={{ color: 'rgba(255,255,255,.65)' }}>Nothing it doesn't.</em>
          </div>
        </div>
        <div style={{ marginTop: 'calc(32px * var(--ui-scale))' }}>
          <div className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.1em', color: 'rgba(255,255,255,.4)', marginBottom: 'calc(14px * var(--ui-scale))' }}>
            10 CAPABILITIES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'calc(8px * var(--ui-scale))' }}>
            {CMS_GROUPS.map(g => (
              <div key={g.tag} style={{ display: 'flex', alignItems: 'center', gap: 'calc(10px * var(--ui-scale))' }}>
                <span style={{ width: 'calc(8px * var(--ui-scale))', height: 'calc(8px * var(--ui-scale))', borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                <span style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'rgba(255,255,255,.7)', fontWeight: 500 }}>{g.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Three category columns ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'calc(12px * var(--ui-scale))',
      }}>
        {CMS_GROUPS.map((group) => (
          <div
            key={group.tag}
            style={{
              background: '#fff',
              border: '1.5px solid var(--line-2)',
              borderRadius: 'calc(16px * var(--ui-scale))',
              overflow: 'hidden',
            }}
          >
            {/* Group header */}
            <div style={{
              padding: 'calc(14px * var(--ui-scale)) calc(18px * var(--ui-scale))',
              borderBottom: '1px solid var(--line)',
              display: 'flex', alignItems: 'center', gap: 'calc(8px * var(--ui-scale))',
              background: 'var(--surface)',
            }}>
              <span style={{ width: 'calc(8px * var(--ui-scale))', height: 'calc(8px * var(--ui-scale))', borderRadius: '50%', background: group.color, flexShrink: 0 }} />
              <span className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.1em', color: 'var(--ink-2)', fontWeight: 700, textTransform: 'uppercase' }}>
                {group.tag}
              </span>
            </div>

            {/* Feature rows */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {group.items.map((item, ii) => {
                const Icon = item.Icon;
                return (
                  <div
                    key={item.h}
                    style={{
                      padding: 'calc(16px * var(--ui-scale)) calc(18px * var(--ui-scale))',
                      borderBottom: ii < group.items.length - 1 ? '1px solid var(--line)' : 'none',
                      display: 'flex', flexDirection: 'column', gap: 'calc(6px * var(--ui-scale))',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'calc(8px * var(--ui-scale))' }}>
                      <span style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: 'calc(26px * var(--ui-scale))', height: 'calc(26px * var(--ui-scale))',
                        borderRadius: 'calc(6px * var(--ui-scale))',
                        background: 'var(--blue-soft)', color: 'var(--blue)', flexShrink: 0,
                      }}>
                        <Icon size={13} strokeWidth={1.75} />
                      </span>
                      <span style={{ fontSize: 'calc(13px * var(--ui-scale))', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>
                        {item.h}
                      </span>
                    </div>
                    <p style={{ fontSize: 'calc(12px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.55, margin: 0, paddingLeft: 'calc(34px * var(--ui-scale))' }}>
                      {item.b}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Platform() {
  return (
    <>
      <PageHero
        eyebrow="The Platform"
        lead="The Platform Built by the People"
        emphasis="Who Built Immigration Tech."
        sub="CodioCMS and CodioForms are the foundation of GlobalCodio - a next-generation case management platform and global immigration forms engine, designed from the ground up for the AI era."
        primary={{ href: '/contact', label: 'Book a free tech audit' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Talk to us about migration' }}
      />

      {/* CodioCMS */}
      <Section id="codiocms" className="sec-codiocms">
        <div className="reveal section-head-wide cms-head-copy">
          <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
            CodioCMS
          </div>
          <SplitHeading lead="Proprietary immigration" emphasis="case management software." />
          <p className="cms-head-intro">
            Immigration case management for firms and corporate teams - built by the founder of the world's leading immigration case management platform. Not generic legal tech: a modern platform with native AI agents, CodioForms, and our global services network.
          </p>
        </div>

        <CMSBento />

        {/* Passport Vault callout */}
        <div
          className="reveal d1"
          style={{
            marginTop: 'var(--space-2xl)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-3xl)',
            padding: 'calc(40px * var(--ui-scale))',
            background: 'linear-gradient(135deg, var(--blue) 0%, var(--blue-ink) 100%)',
            borderRadius: 'calc(20px * var(--ui-scale))',
            border: '1px solid rgba(255,255,255,.06)',
            boxShadow: '0 0 60px rgba(25,80,198,.18)',
            alignItems: 'center',
          }}
        >
          {/* Left — copy */}
          <div>
            <div
              className="mono"
              style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.12em', color: 'rgba(255,255,255,.5)', marginBottom: 'calc(14px * var(--ui-scale))' }}
            >
              IMMIGRATION PASSPORT VAULT
            </div>
            <h3
              className="display"
              style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em', lineHeight: 1.15, color: '#fff', marginBottom: 'var(--space-lg)' }}
            >
              Applicants own their record.{' '}
              <em style={{ color: 'rgba(255,255,255,.65)', fontStyle: 'italic' }}>
                Across every matter they ever open.
              </em>
            </h3>
            <p style={{ fontSize: 'var(--text-body)', color: 'rgba(255,255,255,.7)', lineHeight: 1.65 }}>
              Every document an applicant submits is stored in their personal Immigration Passport Vault.
              They control what is shared, with whom, and for how long. When they change employers,
              switch law firms, or start a new matter, they carry their complete record with them —
              no re-submission, no starting from scratch, no lost history.
            </p>
          </div>

          {/* Right — three properties */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {[
              {
                Icon: Vault,
                title: 'Permanent personal record',
                detail: 'Passports, visas, work permits, and supporting documents — stored securely and accessible to the applicant at any time, regardless of which firm they work with.',
              },
              {
                Icon: UserCheck,
                title: 'Granular, revocable consent',
                detail: 'Applicants choose exactly what to share and with whom. Consent can be granted per-matter and revoked at any time. Their data, their control.',
              },
              {
                Icon: ArrowRightLeft,
                title: 'Portable across employers and firms',
                detail: 'A new job, a new country, a new attorney — the vault travels with the applicant. No more repeating the same document collection from scratch.',
              },
            ].map((item, i, arr) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.title}
                  style={{
                    display: 'flex',
                    gap: 'var(--space-md)',
                    paddingBottom: i < arr.length - 1 ? 'var(--space-lg)' : 0,
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 'calc(36px * var(--ui-scale))',
                      height: 'calc(36px * var(--ui-scale))',
                      borderRadius: 'calc(9px * var(--ui-scale))',
                      background: 'rgba(255,255,255,.12)',
                      color: '#fff',
                      flexShrink: 0,
                      marginTop: 'calc(2px * var(--ui-scale))',
                    }}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 'calc(13.5px * var(--ui-scale))',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: 'calc(3px * var(--ui-scale))',
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: 'calc(12.5px * var(--ui-scale))', color: 'rgba(255,255,255,.65)', lineHeight: 1.55 }}>
                      {item.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CodioOps bundled callout */}
      <section className="sec">
        <div className="container">
          <div
            className="reveal"
            style={{
              padding: 'calc(36px * var(--ui-scale)) calc(40px * var(--ui-scale))',
              background: 'var(--blue-soft)',
              borderRadius: 'calc(20px * var(--ui-scale))',
              border: '1px solid rgba(25,80,198,0.15)',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 'var(--space-3xl)',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
                Bundled with Every CodioCMS Engagement
              </div>
              <h3
                className="display"
                style={{
                  fontSize: 'var(--text-display-md)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: 'var(--ink)',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                CodioOps
              </h3>
              <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65, maxWidth: '72ch' }}>
                Every CodioCMS engagement includes CodioOps — our dedicated Case Management Operations team.
                CodioOps configures the platform to your exact workflows, builds your templates, documents your
                processes, sets up your automations, and continuously tunes everything as your firm evolves.{' '}
                <strong style={{ color: 'var(--ink-2)' }}>
                  You don't just get software. You get the operations team that makes it work.
                </strong>
              </p>
            </div>
            <SmartLink href="/codioops" className="btn btn-primary" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
              Learn more about CodioOps
            </SmartLink>
          </div>
        </div>
      </section>

      {/* CodioForms */}
      <Section id="codioforms" tone="sec-surface" className="sec-codioforms">
        <div className="forms-head-row reveal">
          <div className="section-head-wide forms-head-copy">
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
              CodioForms
            </div>
            <SplitHeading lead="Global immigration forms" emphasis="and questionnaires." />
            <p className="forms-head-intro">
              The only immigration forms and questionnaires engine built for multi-country practice - every edition authority-synced,
              prefilled from CodioCMS, and available online or as print-ready PDF.
            </p>
          </div>
          <div className="forms-statband reveal d1" aria-label="CodioForms at a glance">
            {FORMS_STATS.map((s) => (
              <div key={s.label} className="forms-stat">
                <span className="display forms-stat-value">{s.value}</span>
                <span className="forms-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="forms-bento">
          <div className="forms-bento-grid">
            <div className="reveal forms-catalog" aria-label="CodioForms catalog preview">
              <div className="forms-catalog-head">
                <span className="forms-catalog-brand">CodioForms</span>
                <span className="mono forms-catalog-matter">Matter #1847 · Chen family</span>
                <div className="forms-catalog-mode" role="group" aria-label="Filling mode">
                  <span className="forms-catalog-mode-on">Online</span>
                  <span className="forms-catalog-mode-off">Offline PDF</span>
                </div>
              </div>

              <div className="forms-catalog-body">
                <nav className="forms-catalog-nav" aria-label="Forms in matter">
                  {CATALOG_FORMS.map((f) => (
                    <div
                      key={f.id}
                      className={`forms-catalog-item${f.active ? ' is-active' : ''}`}
                      aria-current={f.active ? 'true' : undefined}
                    >
                      <span className="mono forms-catalog-id">{f.id}</span>
                      <span className="forms-catalog-name">{f.name}</span>
                      <span className="mono forms-catalog-country">{f.country}</span>
                    </div>
                  ))}
                </nav>

                <div className="forms-catalog-detail">
                  <div className="forms-detail-head">
                    <h3 className="forms-detail-title">I-130 · Petition for Alien Relative</h3>
                    <span className="mono forms-detail-edition">Edition 04/01/24 · USCIS current</span>
                  </div>
                  <p className="mono forms-detail-sync">
                    Prefilled from CodioCMS · 847 fields mapped · last sync 2m ago
                  </p>
                  <dl className="forms-field-rows">
                    {ACTIVE_FORM_FIELDS.map(([label, value]) => (
                      <div key={label} className="forms-field-row">
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="forms-detail-actions">
                    <span className="forms-detail-action forms-detail-action--primary">Review &amp; sign</span>
                    <span className="forms-detail-action">Export PDF</span>
                  </div>
                </div>
              </div>

              <div className="mono forms-catalog-foot">
                Synced with USCIS · IRCC · IND · MEA / FRRO
              </div>
            </div>

            <div className="forms-cap-stack">
              {FORMS_CAPS.map((cap, i) => (
                <article key={cap.h} className={`forms-cap-card reveal d${i + 1}`}>
                  <span className="mono forms-cap-n">{cap.n}</span>
                  <h3 className="display forms-cap-title">{cap.h}</h3>
                  <p className="forms-cap-text">{cap.b}</p>
                </article>
              ))}
            </div>
          </div>


          <div className="forms-juris reveal d2">
            <p className="forms-juris-lead">
              Live today across four countries - new countries scoped and released on client priority.
            </p>
            <div className="forms-juris-grid">
              {JURISDICTIONS.map((j) => (
                <div key={j.name} className="forms-juris-card">
                  <span className="forms-juris-flag" aria-hidden="true">
                    {j.flag}
                  </span>
                  <div>
                    <div className="forms-juris-name">{j.name}</div>
                    <div className="forms-juris-meta">
                      <span>{j.forms}</span>
                      <span className="mono forms-juris-auth">{j.authority}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="forms-juris-payoff">
              Most platforms cover the US and stop. CodioForms centralizes every country you practice in -
              integrated directly with cases in <strong>CodioCMS</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* CodioNetwork */}
      <Section id="codionetwork" className="sec-codionetwork">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>CodioNetwork</div>
            <h2 className="display type-display-lg">
              <span>The global service provider network </span>
              <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>for immigration.</em>
            </h2>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65, marginTop: 'var(--space-lg)', maxWidth: '48ch' }}>
              A curated B2B network accessible directly through CodioCMS. One coordination layer instead of dozens of manual handoffs — with structured workflows, field-level confidentiality, and a full history of every assignment.
            </p>

            {/* Workflow capability rows */}
            <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {[
                {
                  title: 'Structured provider workflows',
                  detail: 'Outsourcing is a managed workflow, not an email. Assign work, set deliverables, track revisions, and extend deadlines — all with a paper trail both parties can see.',
                },
                {
                  title: 'Field-level confidentiality',
                  detail: 'Send a translator exactly what they need — not salary details, not passport numbers, not case strategy. Confidentiality is enforced at the data field level, automatically.',
                },
                {
                  title: 'Data-driven provider selection',
                  detail: 'Every assignment builds history. Over time: "Which translator is fastest for technical documents?" becomes a query — not a judgment call based on memory.',
                },
                {
                  title: 'Revisions and billing in one place',
                  detail: 'Structured feedback on every deliverable, tracked for quality and billing. No disputed invoices, no lost revision threads in email.',
                },
              ].map((item, i, arr) => (
                <div
                  key={item.title}
                  style={{
                    paddingBottom: i < arr.length - 1 ? 'var(--space-md)' : 0,
                    borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
                  }}
                >
                  <div style={{ fontSize: 'calc(13.5px * var(--ui-scale))', fontWeight: 700, color: 'var(--ink)', marginBottom: 'calc(3px * var(--ui-scale))' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.55 }}>
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'var(--space-xl)' }}>
              <SmartLink href="/network" className="feature-card-link" style={{ fontWeight: 600 }}>
                Explore CodioNetwork
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ width: 14, height: 14 }}>
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </SmartLink>
            </div>
          </div>

          {/* Right — provider list + assignment workflow mock */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'calc(12px * var(--ui-scale))' }}>

            {/* Provider roster */}
            <div style={{
              border: '1.5px solid var(--line-2)',
              borderRadius: 'calc(16px * var(--ui-scale))',
              overflow: 'hidden',
              background: '#fff',
            }}>
              {[
                { label: 'Certified Translators',  sub: '40+ languages' },
                { label: 'Immigration Physicians',  sub: 'USCIS approved' },
                { label: 'Apostille & Auth',        sub: 'Multi-country' },
                { label: 'Foreign Attorneys',       sub: 'In-country counsel' },
                { label: 'Specialized Couriers',    sub: 'Secure delivery' },
                { label: 'Consular Coordinators',   sub: 'Appointment liaison' },
              ].map((item, i, arr) => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: 'calc(12px * var(--ui-scale)) calc(18px * var(--ui-scale))',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
                }}>
                  <span style={{ fontSize: 'calc(13.5px * var(--ui-scale))', fontWeight: 600, color: 'var(--ink)' }}>{item.label}</span>
                  <span className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', color: 'var(--blue)', letterSpacing: '.06em', fontWeight: 600 }}>{item.sub.toUpperCase()}</span>
                </div>
              ))}
            </div>

            {/* Assignment workflow mock */}
            <div style={{
              border: '1.5px solid var(--line-2)',
              borderRadius: 'calc(16px * var(--ui-scale))',
              overflow: 'hidden',
              background: '#fff',
            }}>
              {/* Header */}
              <div style={{
                padding: 'calc(11px * var(--ui-scale)) calc(18px * var(--ui-scale))',
                borderBottom: '1px solid var(--line)',
                background: 'var(--surface)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', color: 'var(--ink-2)', letterSpacing: '.06em', fontWeight: 600 }}>
                  PROVIDER ASSIGNMENT · Matter #2241
                </span>
                <span style={{
                  fontSize: 'calc(10px * var(--ui-scale))', fontWeight: 700,
                  color: '#059669', background: '#f0fdf4',
                  padding: '2px 8px', borderRadius: '4px',
                  fontFamily: 'var(--mono)', letterSpacing: '.04em',
                }}>IN PROGRESS</span>
              </div>

              {/* Assignment rows */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { provider: 'Elena Vasquez', type: 'Certified Translator', task: 'I-130 supporting docs · ES→EN', deadline: 'Due Jun 10', status: 'delivered', fields: 'Scoped: Name, DOB, doc type only' },
                  { provider: 'Dr. Arjun Mehta', type: 'Immigration Physician', task: 'I-693 medical exam', deadline: 'Due Jun 14', status: 'pending', fields: 'Scoped: Case ref, client name only' },
                ].map((row, i, arr) => (
                  <div
                    key={row.provider}
                    style={{
                      padding: 'calc(13px * var(--ui-scale)) calc(18px * var(--ui-scale))',
                      borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
                      display: 'flex', flexDirection: 'column', gap: 'calc(5px * var(--ui-scale))',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <span style={{ fontSize: 'calc(13px * var(--ui-scale))', fontWeight: 600, color: 'var(--ink)' }}>{row.provider}</span>
                        <span className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', color: 'var(--muted)', marginLeft: '8px' }}>{row.type.toUpperCase()}</span>
                      </div>
                      <span style={{
                        fontSize: 'calc(10px * var(--ui-scale))', fontWeight: 700,
                        color: row.status === 'delivered' ? '#059669' : 'var(--blue)',
                        background: row.status === 'delivered' ? '#f0fdf4' : 'var(--blue-soft)',
                        padding: '2px 8px', borderRadius: '4px',
                        fontFamily: 'var(--mono)', letterSpacing: '.04em', textTransform: 'uppercase',
                      }}>{row.status}</span>
                    </div>
                    <div style={{ fontSize: 'calc(12px * var(--ui-scale))', color: 'var(--ink-2)' }}>{row.task}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', color: 'var(--muted)' }}>{row.fields}</span>
                      <span className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', color: 'var(--blue)', fontWeight: 600 }}>{row.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div style={{
                padding: 'calc(9px * var(--ui-scale)) calc(18px * var(--ui-scale))',
                borderTop: '1px solid var(--line)',
                background: 'var(--surface)',
              }}>
                <p className="mono" style={{ fontSize: 'calc(9.5px * var(--ui-scale))', color: 'var(--muted)', margin: 0, letterSpacing: '.04em' }}>
                  PROVIDERS SEE ONLY SCOPED FIELDS · FULL CASE DATA NEVER SHARED
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* AI Era */}
      <Section
        id="ai-era"
        eyebrow="Built for the AI Era"
        lead="The first immigration platform"
        emphasis="built for the AI era."
        headAlign="center"
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={AI_ERA_POINTS} cols={3} />
        </div>
      </Section>

      {/* Migration */}
      <Section id="migration" tone="sec-surface" className="sec-migration">
        <div className="migration-head-row reveal">
          <div className="section-head-wide migration-head-copy">
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
              Migration
            </div>
            <SplitHeading lead="Coming from another platform?" emphasis="We migrate you." />
            <p className="migration-head-intro">
              On another CMS? Our team runs the full move - data, workflows, documentation, and parallel
              operations until you're live on CodioCMS.
            </p>
          </div>
          <div className="migration-statband reveal d1" aria-label="Migration at a glance">
            {MIGRATION_STATS.map((s) => (
              <div key={s.label} className="migration-stat">
                <span className="display migration-stat-value">{s.value}</span>
                <span className="migration-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <FeatureGrid items={MIGRATION_STEPS} cols={4} />

        <div className="migration-foot reveal d1">
          <div className="migration-foot-copy">
            <p className="migration-foot-lead">We migrate firms from platforms including:</p>
            <div className="migration-platforms" role="list">
              {MIGRATION_FROM.map((name) => (
                <span key={name} className="migration-platform" role="listitem">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <SmartLink href="mailto:info@globalcodio.ai" className="btn btn-primary migration-foot-cta">
            Talk to us about migration
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </SmartLink>
        </div>
      </Section>

      <FaqAccordion
        id="faq"
        eyebrow="Common Questions"
        lead="Questions about"
        emphasis="the platform."
        items={[
          {
            q: 'What is CodioCMS?',
            a: "CodioCMS is a next-generation immigration case management platform built by the founder of INSZoom — the world's leading immigration CMS. It provides end-to-end case lifecycle management, five purpose-built portals (attorney, applicant, HR, service provider, admin), native AI agent integration, and global country support. Every engagement includes CodioOps — a dedicated team that configures and continuously optimizes the platform to your exact workflows.",
            meta: ['Five-portal architecture', 'Native AI agents'],
          },
          {
            q: 'What immigration forms does CodioForms support?',
            a: 'CodioForms supports 180+ US forms (USCIS-synced), the full IRCC suite for Canada, Netherlands MVV and residence permits, and India visa and OCI forms. Every form edition is tracked to the issuing authority so your firm never files on a superseded version. New countries are scoped and built in days based on client priority.',
            meta: ['180+ US forms', 'Multi-country'],
          },
          {
            q: 'How does CodioCMS differ from other immigration case management software?',
            a: "CodioCMS is the only immigration platform designed from the ground up for native AI agents — not legacy software with AI bolted on. It includes five dedicated role portals, a global forms engine, an Immigration Passport Vault giving applicants portable document ownership, and CodioOps managed services bundled with every engagement.",
            meta: ['AI-native architecture', 'CodioOps bundled'],
          },
          {
            q: 'Can we migrate from our current immigration software to CodioCMS?',
            a: "Yes. GlobalCodio's team manages the full migration: data export from your current platform, mapping and verification, workflow reconstruction in CodioCMS, and parallel operations until your team is fully transitioned. Typical migration takes approximately six weeks with zero disruption to active cases.",
            meta: ['~6 week migration', 'Zero case disruption'],
          },
          {
            q: 'What is the Immigration Passport Vault?',
            a: 'The Immigration Passport Vault is a personal document record within CodioCMS where applicants store passports, visas, permits, and supporting documents securely. Applicants control what they share and with whom. When they change employers or switch firms, their complete record travels with them — no re-submission or starting from scratch.',
            meta: ['Applicant-owned', 'Portable across firms'],
          },
        ]}
      />

      <CtaBand
        lead="We demo the features that solve"
        emphasis="your challenges. Not a generic demo."
        primary={{ href: '/contact', label: 'Book your free tech audit' }}
        secondary={{ href: '/ai-agents', label: 'Explore the AI Agents' }}
      />
    </>
  );
}
