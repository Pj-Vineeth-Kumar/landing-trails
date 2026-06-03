import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { FileText, MessageCircle, RefreshCw, TrendingUp, ClipboardList, PenLine, CalendarClock, Globe, Megaphone } from 'lucide-react';
import { Logo } from './Nav.jsx';
import { FOOTER_COLUMNS, SUPPORT_EMAIL, SUPPORT_MAILTO, SITE_URL, AUDIT_URL } from '../config/siteNav.js';

const interactiveCardProps = {
  onMouseEnter: (e) => {
    e.currentTarget.style.borderColor = 'var(--line-blue)';
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-blue-lift)';
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.borderColor = '';
    e.currentTarget.style.transform = 'translate(0px, 0px)';
    e.currentTarget.style.boxShadow = '';
  },
};

/** Internal route → <Link>; external/anchor/mailto → <a>. */
const FooterLink = ({ href, children, ...rest }) => {
  const internal = href && href.startsWith('/') && !href.startsWith('//');
  return internal ? (
    <Link to={href} {...rest}>{children}</Link>
  ) : (
    <a href={href} {...rest}>{children}</a>
  );
};

const AGENTS_BENTO = [
  { Icon: ClipboardList, label: 'Intake Agent',       desc: 'Opens & classifies cases automatically.' },
  { Icon: FileText,      label: 'Document Agent',     desc: 'Extracts, translates & validates documents.' },
  { Icon: PenLine,       label: 'Forms Agent',        desc: 'Auto-fills forms across every country.' },
  { Icon: CalendarClock, label: 'Deadline Agent',     desc: 'Tracks every filing window. Zero misses.' },
  { Icon: MessageCircle, label: 'Client Comms Agent', desc: '24/7 status updates & document collection.' },
  { Icon: RefreshCw,     label: 'Renewal Agent',      desc: 'Mines your database for dormant revenue.' },
  { Icon: Megaphone,     label: 'BD Agent',           desc: 'Automates outreach & books consultations.' },
  { Icon: Globe,         label: 'Ecosystem Agent',    desc: 'Coordinates translators, physicians & couriers.' },
];

const PILLARS = [
  { label: 'AI Agents',        desc: '8 specialized agents working in concert' },
  { label: 'Managed Tech Ops', desc: 'Our team runs your entire tech operation' },
  { label: 'Ecosystem',        desc: 'Global network of immigration service providers' },
];

/* Agent bento - replaces the orbit visualization */
export const AgentOrbit = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.bento-agent-card'), {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: { each: 0.06, from: 'start' },
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 72%', toggleActions: 'play none none none' },
      });
      gsap.from(el.querySelectorAll('.bento-hub'), {
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 74%', toggleActions: 'play none none none' },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="sec sec-dark" id="platform">
      <div className="container">

        {/* Section header */}
        <div className="reveal section-head-wide" style={{ textAlign: 'left', marginBottom: 'var(--space-3xl)' }}>
          <div className="eyebrow" style={{ color: 'var(--blue-hover)', marginBottom: 'var(--space-md)' }}>Platform</div>
          <h2 className="display type-display-xl" style={{ color: '#fff' }}>
            <span style={{ display: 'block' }}>Eight agents, three pillars,</span>
            <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue-hover)' }}>one case file.</em>
          </h2>
        </div>

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,2.2fr)',
          gap: 'calc(16px * var(--ui-scale))',
          alignItems: 'stretch',
        }}>

          {/* LEFT - hub card (commented out) */}
          {/* <div className="bento-hub" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'calc(16px * var(--ui-scale))',
          }}>
            <div style={{
              flex: 1,
              background: 'linear-gradient(145deg, var(--blue) 0%, var(--blue-ink) 100%)',
              borderRadius: 'calc(20px * var(--ui-scale))',
              padding: 'calc(36px * var(--ui-scale))',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(255,255,255,.1)',
              boxShadow: '0 0 64px rgba(25,80,198,.35)',
              minHeight: 'calc(200px * var(--ui-scale))',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.14em', color: 'rgba(255,255,255,.55)', marginBottom: 'calc(12px * var(--ui-scale))' }}>ONE CASE FILE</div>
                <div className="display" style={{ fontSize: 'calc(42px * var(--ui-scale))', fontStyle: 'italic', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em' }}>Every agent.<br />One source<br />of truth.</div>
              </div>
              <div style={{ marginTop: 'calc(24px * var(--ui-scale))' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.1em', color: 'rgba(255,255,255,.45)', marginBottom: 'calc(10px * var(--ui-scale))' }}>THREE PILLARS</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'calc(8px * var(--ui-scale))' }}>
                  {PILLARS.map((p) => (
                    <div key={p.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 'calc(10px * var(--ui-scale))' }}>
                      <span style={{ width: 'calc(6px * var(--ui-scale))', height: 'calc(6px * var(--ui-scale))', borderRadius: '50%', background: 'rgba(255,255,255,.5)', flexShrink: 0, marginTop: 'calc(6px * var(--ui-scale))' }} />
                      <div>
                        <div style={{ fontSize: 'calc(13px * var(--ui-scale))', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>{p.label}</div>
                        <div style={{ fontSize: 'calc(11px * var(--ui-scale))', color: 'rgba(255,255,255,.5)', lineHeight: 1.4, marginTop: 'calc(2px * var(--ui-scale))' }}>{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}

          {/* Agent grid - full width */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'calc(12px * var(--ui-scale))',
          }}>
            {AGENTS_BENTO.map(({ Icon, label, desc }) => (
              <div
                key={label}
                className="bento-agent-card"
                style={{
                  background: 'rgba(255,255,255,.04)',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 'calc(16px * var(--ui-scale))',
                  padding: 'calc(22px * var(--ui-scale)) calc(20px * var(--ui-scale))',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'calc(12px * var(--ui-scale))',
                  transition: 'background .2s, border-color .2s, transform .2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(25,80,198,.18)';
                  e.currentTarget.style.borderColor = 'rgba(74,126,224,.45)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'calc(36px * var(--ui-scale))',
                  height: 'calc(36px * var(--ui-scale))',
                  borderRadius: 'calc(10px * var(--ui-scale))',
                  background: 'rgba(25,80,198,.35)',
                  border: '1px solid rgba(74,126,224,.4)',
                  color: 'var(--blue-hover)',
                  flexShrink: 0,
                }}>
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <div>
                  <div style={{ fontSize: 'calc(13px * var(--ui-scale))', fontWeight: 650, color: '#fff', lineHeight: 1.25, marginBottom: 'calc(5px * var(--ui-scale))' }}>{label}</div>
                  <div style={{ fontSize: 'calc(11.5px * var(--ui-scale))', color: 'rgba(255,255,255,.5)', lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal d2" style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
          <motion.a
            href="/ai-agents"
            className="btn btn-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          >
            Explore each agent
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

/* Two Audiences */
export const Testimonial = () => (
  <section className="sec" id="customers">
    <div className="container">
      <div className="reveal section-head">
        <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>Two Audiences</div>
        <h2 className="display type-display-lg">
          <span style={{ display: 'block' }}>Built for law firms</span>
          <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)', whiteSpace: 'nowrap' }}>and corporate immigration teams.</em>
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-lg)' }} className="audience-grid">
        {[
          {
            title: 'Immigration Law Firms',
            quote: 'GlobalCodio handles everything - AI agents for case prep, deadlines, client comms, and renewals, plus audit, consulting, configuration, and managed operations - so your attorneys focus on what matters.',
            body: 'Solo, mid-size, and large law firms practicing immigration law. Pain points: manual case preparation, scaling case volume, growing revenue from existing clients, and managing technology.',
            services: [
              { label: 'AI Agents', desc: 'Intake, documents, forms, deadlines, comms, renewals & BD' },
              { label: 'Audit & Consulting', desc: 'Technology audit and immigration workflow advisory' },
              { label: 'Configuration & Optimization', desc: 'CodioCMS configured to your exact firm workflows' },
              { label: 'Managed Operations', desc: 'We run your entire tech operation day-to-day' },
            ],
          },
          {
            title: 'Corporate Immigration Departments',
            quote: 'GlobalCodio handles everything - AI agents for visa tracking, compliance monitoring, and vendor coordination, plus audit, consulting, configuration, and managed operations - so your mobility team focuses on strategy.',
            body: 'In-house mobility, HR, and legal operations teams at mid-to-large employers managing employee visa cases. Pain points: scaling case volume, compliance, vendor management, and cost predictability.',
            services: [
              { label: 'AI Agents', desc: 'Case tracking, compliance monitoring & vendor coordination' },
              { label: 'Audit & Consulting', desc: 'Technology audit and corporate immigration advisory' },
              { label: 'Configuration & Optimization', desc: 'Platform configured to your corporate workflows' },
              { label: 'Managed Operations', desc: 'IT support, security, and ongoing operations handled' },
            ],
          },
        ].map((a, i) => (
          <article key={i} className={`card audience-card reveal d${i + 1}${i === 1 ? ' audience-card--tint' : ''}`} {...interactiveCardProps}>
            <h3 className="display" style={{ fontSize: 'var(--text-display-audience)', letterSpacing: '-0.02em', marginBottom: 'calc(14px * var(--ui-scale))' }}>{a.title}</h3>
            <blockquote style={{ fontSize: 'var(--text-body)', color: 'var(--ink)', lineHeight: 1.55, fontStyle: 'italic', margin: '0 0 calc(20px * var(--ui-scale))', paddingLeft: 'calc(12px * var(--ui-scale))', borderLeft: '2px solid var(--blue-soft)' }}>{a.quote}</blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'calc(10px * var(--ui-scale))', marginBottom: 'calc(18px * var(--ui-scale))' }}>
              {a.services.map((s) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 'calc(10px * var(--ui-scale))' }}>
                  <span style={{ width: 'calc(6px * var(--ui-scale))', height: 'calc(6px * var(--ui-scale))', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                  <div style={{ lineHeight: 1.4 }}>
                    <span style={{ fontSize: 'calc(13px * var(--ui-scale))', fontWeight: 600, color: 'var(--ink-1)' }}>{s.label}</span>
                    <span style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'var(--ink-3)' }}> - {s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--ink-3)', lineHeight: 1.6 }}>{a.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* Metrics strip */
export const Metrics = () => (
  <section className="sec sec-metrics" id="metrics">
    <div className="container">
      <div className="reveal m-grid">
        {[['3x', 'return in year one'], ['Base', 'retainer + performance share'], ['8+', 'autonomous AI Agents'], ['2', 'audiences - firms & corporate']].map(([n, l], i) => (
          <div key={i}>
            <div className="display type-display-metric metric-value" style={{ color: 'var(--blue)', letterSpacing: '-0.03em' }}>{n}</div>
            <div className="metric-label">{l}</div>
          </div>
        ))}
      </div>
      <div className="reveal d1" style={{ textAlign: 'center', maxWidth: '62ch', margin: 'var(--space-2xl) auto 0' }}>
        <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-sm)' }}>Year One Promise</div>
        <p style={{ fontSize: 'calc(16px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.65 }}>
          Firms partnering with GlobalCodio typically see a 3x return in year one through reduced operational
          costs and significantly increased case volume.
        </p>
      </div>
    </div>
  </section>
);

const VALUE_LEVER_GROUPS = [
  {
    tag: 'Cost Savings',
    levers: [
      {
        Icon: FileText,
        h: 'Reduced case preparation time',
        b: 'Document extraction, form auto-fill, and intake validation cut hours of manual prep on every case.',
        agent: 'Document, Forms & Intake Agents',
      },
      {
        Icon: MessageCircle,
        h: 'AI-powered customer support',
        b: 'Proactive client updates, FAQ handling, and reminders without adding paralegal headcount.',
        agent: 'Client Comms Agent',
      },
    ],
  },
  {
    tag: 'Revenue Growth',
    levers: [
      {
        Icon: RefreshCw,
        h: 'Renewal detection',
        b: 'Surface expiring visas and lapsed clients from existing records - revenue that used to slip through.',
        agent: 'Renewal Agent',
      },
      {
        Icon: TrendingUp,
        h: 'BD campaign automation',
        b: 'Revenue from new client acquisition (BD Agent)',
        agent: 'BD Agent',
        comingSoon: true,
      },
    ],
  },
];

export const ValueLevers = () => (
  <section id="value-levers" className="sec sec-levers">
    <div className="container">
      <div className="reveal section-head-wide">
        <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>Value Levers</div>
        <h2 className="display type-display-lg">
          <span style={{ display: 'block' }}>Where savings</span>
          <em className="text-grad-blue" style={{ display: 'block', fontStyle: 'italic' }}>and revenue come from.</em>
        </h2>
        <p className="value-levers-intro">
          Every agent ties to a measurable outcome - reduced prep time, lower support costs, captured renewals,
          or new client revenue. We track what each lever delivers so your team sees the impact, not just the software.
        </p>
      </div>

      <div className="value-levers-columns">
        {VALUE_LEVER_GROUPS.map((group, gi) => (
          <div key={group.tag} className={`value-levers-group reveal d${gi + 1}`}>
            <div className="value-levers-group-head">
              <span className="mono">{group.tag}</span>
            </div>
            <div className="value-levers-group-grid">
              {group.levers.map((lever) => (
                <article
                  key={lever.h}
                  className={`card card-compact value-lever-card${lever.comingSoon ? ' value-lever-card--soon' : ''}`}
                  {...(lever.comingSoon ? {} : interactiveCardProps)}
                >
                  <div className="value-lever-card-top">
                    <div className="agent-icon" aria-hidden="true">
                      <lever.Icon size={20} strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="display text-card-sm feature-card-title">{lever.h}</h3>
                  <p className="feature-card-body">{lever.b}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gridColumn: '1 / -1', gridRow: 3 }}>
                    <div
                      className="mono value-lever-agent"
                      style={{ fontSize: 'calc(10.5px * var(--ui-scale))', letterSpacing: '.06em', color: 'var(--blue)' }}
                    >
                      {lever.agent}
                    </div>
                    {lever.comingSoon && <span className="pill value-lever-soon-pill">Coming soon</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* Real certification badge artwork lives in /public/assets.
   `href` points to each standard's authoritative source. */
const CERT_BADGES = [
  { id: 'soc2', src: 'SOC-2-Type-2.png', name: 'SOC 2 Type II', label: 'SOC 2 Type II', sub: 'Audited annually', href: 'https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2' },
  { id: 'iso', src: 'ISO.png', name: 'ISO/IEC 27001', label: 'ISO/IEC 27001', sub: 'Information security', href: 'https://www.iso.org/standard/27001' },
  { id: 'gdpr', src: 'GDPR.png', name: 'GDPR', label: 'GDPR', sub: 'EU data protection', href: 'https://commission.europa.eu/law/law-topic/data-protection_en' },
  { id: 'ccpa', src: 'CCPA.png', name: 'CCPA / CPRA', label: 'CCPA / CPRA', sub: 'US privacy law', href: 'https://oag.ca.gov/privacy/ccpa' },
];

const CERT_ASSET = (src) => `${import.meta.env.BASE_URL}assets/${src}`;

const CertArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

/** Reusable cert row - logos sit directly on the background (no chip);
 *  mix-blend-mode:multiply drops the white image backgrounds so they blend.
 *  Each logo has its standard name + a "Details →" link to the source. */
export const CertLogos = ({ className = '', style }) => (
  <div className={`cert-logos ${className}`.trim()} style={style}>
    {CERT_BADGES.map(({ id, src, name, label, sub, href }) => (
      <figure key={id} className="cert-item">
        <img
          className="cert-logo-img"
          src={CERT_ASSET(src)}
          alt={`${label} - ${sub}`}
          title={`${label} - ${sub}`}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <figcaption className="cert-item-cap">
          <span className="cert-item-name">{name}</span>
          <a
            className="cert-item-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} details (opens in a new tab)`}
          >
            Details <CertArrow />
          </a>
        </figcaption>
      </figure>
    ))}
  </div>
);

export const Certifications = () => (
  <section id="certifications" className="sec sec-certifications" aria-labelledby="certifications-heading">
    <div className="container">
      <div className="how-grid cert-layout">
        <div className="reveal cert-section-head">
          <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>Trust & Compliance</div>
          <h2 id="certifications-heading" className="display type-display-lg">
            <span style={{ display: 'block' }}>Built to pass</span>
            <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}>firm-grade due diligence.</em>
          </h2>
        </div>

        <div className="cert-panel">
          <CertLogos className="reveal d1" />

          <p className="reveal d3 cert-footnote">
            SOC 2 report, standard DPA, and security questionnaire available on request.{' '}
            <a href={SUPPORT_MAILTO}>Request security pack</a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* CTA */
export const CTA = () => (
  <section id="cta" className="sec sec-cta">
    <div className="container-narrow" style={{ textAlign: 'center', position: 'relative' }}>
      <div aria-hidden="true" className="sec-cta-glow" />
      <h2 className="reveal d1 display type-display-cta" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: 'var(--space-2xl)', position: 'relative', textAlign: 'center' }}>
        <span style={{ display: 'block', maxWidth: '100%' }}>See AI Agents on your live cases</span>
        <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)', whiteSpace: 'nowrap' }} className="cta-nowrap">- not a generic vendor deck.</em>
      </h2>
      <p className="reveal d1" style={{ fontSize: 'calc(18px * var(--ui-scale))', color: 'var(--ink-3)', maxWidth: '52ch', margin: '0 auto var(--space-3xl)', lineHeight: 1.55, position: 'relative' }}>
        Walk through deployment, managed operations, and the global ecosystem on cases your team is running today.
      </p>
      <div className="reveal d2" style={{ display: 'flex', gap: 'var(--space-xs)', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
        <Link to={AUDIT_URL} className="btn btn-dark">Book your free tech audit <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></Link>
        <a href={SUPPORT_MAILTO} className="btn btn-surface">Talk to our team</a>
      </div>
    </div>
  </section>
);

/* Footer */
export const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--line)', padding: '64px 0 36px', background: '#fff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: 32, marginBottom: 48 }} className="ft-grid">
        <div style={{ maxWidth: '32ch' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16, lineHeight: 0 }}>
            <Logo height={36} />
          </div>
          <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>
            AI Workforce for Global Immigration. Deployed and Managed.
          </p>
          <div style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.8 }}>
            <a href={SITE_URL} style={{ color: 'var(--ink-3)', display: 'block' }}>
              www.globalcodio.ai
            </a>
            <a href={SUPPORT_MAILTO} style={{ color: 'var(--ink-3)', display: 'block' }}>
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>{col.title}</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10, fontSize: 13.5 }}>
              {col.links.map((it) => {
                const isExternal = it.href.startsWith('https://') && !it.href.startsWith('https://www.globalcodio');
                return (
                  <li key={it.label + it.href}>
                    <FooterLink
                      href={it.href}
                      style={{ color: 'var(--ink-3)', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {it.label}
                      {isExternal && (
                        <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 10, height: 10, opacity: 0.5, flexShrink: 0 }}>
                          <path d="M1.5 8.5l7-7M4 1.5h4.5V6" />
                        </svg>
                      )}
                    </FooterLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'var(--muted)', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span>© 2026 GlobalCodio. All rights reserved.</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <FooterLink href="/privacy-policy" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</FooterLink>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>California, USA · Bangalore, India</span>
        </div>
        <div className="mono" style={{ letterSpacing: '.05em', color: 'var(--blue)' }}>Win Cases. We&rsquo;ll Handle All the Technology.</div>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'relative',
          marginTop: 48,
          textAlign: 'center',
        }}
      >
        <div
          className="display"
          style={{
            fontSize: 'clamp(72px,18vw,260px)',
            color: 'var(--surface)',
            pointerEvents: 'none',
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            userSelect: 'none',
          }}
        >
          GlobalCodio<span style={{ color: 'var(--blue-soft)' }}>.ai</span>
        </div>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '50%',
            pointerEvents: 'none',
            background: 'linear-gradient(to top, #fff 0%, rgba(255,255,255,0.92) 28%, rgba(255,255,255,0.4) 62%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>
      <style>{`@media(max-width:1024px){.ft-grid{grid-template-columns:1fr 1fr 1fr !important;}} @media(max-width:640px){.ft-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </div>
  </footer>
);

/* Tweaks */
export const Tweaks = ({tweaks, onChange}) => {
  const Seg = ({k,options}) => (
    <div className="seg">
      {options.map(([v,l])=><button key={v} className={tweaks[k]===v?'on':''} onClick={()=>onChange(k,v)}>{l}</button>)}
    </div>
  );
  return (
    <div className="tweaks-panel">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
        <div style={{fontSize:17,fontWeight:650,letterSpacing:'-0.01em'}}>Tweaks</div>
        <span className="mono" style={{fontSize:10,color:'var(--blue)',letterSpacing:'.12em'}}>LIVE</span>
      </div>
      <div className="row"><h4>Headline</h4><Seg k="headline" options={[['edge','Edge'],['quiet','Quiet'],['craft','Craft'],['scale','Scale']]}/></div>
      <div className="row" style={{marginBottom:0}}><h4>Accent</h4><Seg k="accent" options={[['blue','Blue'],['deep','Deep'],['ink','Ink']]}/></div>
    </div>
  );
};

