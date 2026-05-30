import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FileText, MessageCircle, RefreshCw, TrendingUp } from 'lucide-react';
import { Logo } from './Nav.jsx';
import { SUPPORT_EMAIL, SUPPORT_MAILTO, SITE_URL } from '../config/siteNav.js';

/** Caption offsets for inner MTO & ECO labels */
const LEGACY_INNER_CAPTION_NUDGE = {
  'p-mto': { dx: 45, dy: -51 },
  'p-eco': { dx: 32, dy: 51 },
};

/** Radial caption placement — clears badge using label size + angle */
const estimateCaptionHalf = (label, ring, uiScale) => {
  const halfH = (ring === 'inner' ? 14 : 13) * uiScale;
  const charW = 5.8 * uiScale;
  const padX = (ring === 'inner' ? 24 : 22) * uiScale;
  const halfW = (label.length * charW + padX) / 2;
  return { halfW, halfH };
};

const orbitCaptionOffset = (r, bd, uiScale, nx, ny, label, ring) => {
  const gap = (ring === 'inner' ? 10 : 8) * uiScale;
  const { halfW, halfH } = estimateCaptionHalf(label, ring, uiScale);
  const inward = halfW * Math.abs(nx) + halfH * Math.abs(ny);
  const dist = r + bd + gap + inward + 4 * uiScale;
  return { lx: nx * dist, ly: ny * dist };
};

/** Overrides GSAP inline transform so card lift + border hover still works after scroll reveal */
const interactiveCardProps = {
  onMouseEnter: (e) => {
    e.currentTarget.style.borderColor = 'var(--blue)';
    e.currentTarget.style.transform = 'translateY(-3px)';
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.borderColor = '';
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  },
};

/** Orbit ring diameters (px, pre–ui-scale) — must match .orbit-ring inline sizes in AgentOrbit */
const ORBIT_INNER_RADIUS = 384 / 2;
const ORBIT_OUTER_RADIUS = 612 / 2;

const readUiScale = () => {
  if (typeof document === 'undefined') return 0.84;
  return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ui-scale')) || 0.84;
};

/* Agent orbit - dual ring: three pillars (inner) + workflow depth (outer) */
export const AgentOrbit = () => {
  const rootRef = useRef(null);
  const uiScale = readUiScale();
  const innerRadius = ORBIT_INNER_RADIUS * uiScale;
  const outerRadius = ORBIT_OUTER_RADIUS * uiScale;

  const innerPillars = [
    { id: 'p-ai', n: 'AI', label: 'AI Agents' },
    { id: 'p-mto', n: 'MTO', label: 'Managed Technology Operations' },
    { id: 'p-eco', n: 'ECO', label: 'Global Immigration Ecosystem' },
  ];
  const outerCapabilities = [
    { id: 'o-in', n: 'IN', label: 'Intake Agent' },
    { id: 'o-dc', n: 'DC', label: 'Document Agent' },
    { id: 'o-fm', n: 'FM', label: 'Forms Agent' },
    { id: 'o-dl', n: 'DL', label: 'Deadline Agent' },
    { id: 'o-cc', n: 'CC', label: 'Client Comms Agent' },
    { id: 'o-rn', n: 'RN', label: 'Renewal Agent' },
    { id: 'o-bd', n: 'BD', label: 'BD Agent' },
    { id: 'o-ec', n: 'EC', label: 'Ecosystem Agent' },
  ];

  const orbitNodes = [
    ...innerPillars.map((a, i) => {
      const angle = (i / innerPillars.length) * Math.PI * 2 - Math.PI / 2;
      return { ...a, r: innerRadius, angle, ring: 'inner' };
    }),
    ...outerCapabilities.map((a, i) => {
      const angle = (i / outerCapabilities.length) * Math.PI * 2 - Math.PI / 2 + Math.PI / outerCapabilities.length;
      return { ...a, r: outerRadius, angle, ring: 'outer' };
    }),
  ];

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.orbit-ring'), {
        scale: 0.88,
        opacity: 0,
        duration: 1.05,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 72%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from(el.querySelectorAll('.orbit-hub'), {
        scale: 0,
        opacity: 0,
        duration: 0.85,
        ease: 'elastic.out(1, 0.72)',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from(el.querySelectorAll('.orbit-node'), {
        opacity: 0,
        scale: 0.5,
        duration: 0.55,
        stagger: { each: 0.07, from: 'random' },
        ease: 'back.out(1.35)',
        scrollTrigger: {
          trigger: el,
          start: 'top 68%',
          toggleActions: 'play none none none',
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="sec sec-dark" id="platform">
      <div className="container">
        <div className="reveal section-head-wide" style={{ textAlign: 'left' }}>
          <div className="eyebrow" style={{ color: 'var(--blue-hover)', marginBottom: 'var(--space-md)' }}>Platform</div>
          <h2 className="display type-display-xl" style={{ color: '#fff' }}>
            <span style={{ display: 'block', textAlign: 'left' }}>Eight agents, three pillars,</span>
            <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue-hover)' }}>one case file.</em>
          </h2>
        </div>

        <div className="reveal orbit-stage d1">
          <div className="orbit-stage-scaler">
          <div className="orbit-stage-core">
          <div className="orbit-ring" style={{width:'calc(612px * var(--ui-scale))',height:'calc(612px * var(--ui-scale))',borderColor:'rgba(255,255,255,.09)'}}/>
          <div className="orbit-ring" style={{width:'calc(384px * var(--ui-scale))',height:'calc(384px * var(--ui-scale))',borderColor:'rgba(255,255,255,.14)'}}/>
          <span className="orbit-ring-legend orbit-ring-legend--inner">Three pillars</span>
          <span className="orbit-ring-legend orbit-ring-legend--outer">Eight AI Agents</span>

          {/* Center - one case file; pillars orbit inside, workflows outside */}
          <div className="orbit-hub" style={{
            width:'calc(152px * var(--ui-scale))',height:'calc(152px * var(--ui-scale))',borderRadius:'50%',
            background:'linear-gradient(180deg, var(--blue), var(--blue-ink))',
            display:'grid',placeItems:'center',zIndex:3,
            boxShadow:'0 0 64px rgba(25,80,198,.42), 0 0 0 1px rgba(255,255,255,.1) inset',
          }}>
            <div style={{textAlign:'center',color:'#fff',padding:'0 10px'}}>
              <div style={{fontSize:10.5,fontFamily:'var(--mono)',letterSpacing:'.14em',opacity:.72,marginBottom:6,lineHeight:1.2}}>CASE</div>
              <div className="display" style={{fontSize:28,fontStyle:'italic',lineHeight:1}}>file</div>
            </div>
          </div>
          </div>

          {/* Labels: radial offset from badge — sized to avoid overlapping icons */}
          {orbitNodes.map((a) => {
            const { r, angle, ring } = a;
            const nx = Math.cos(angle);
            const ny = Math.sin(angle);
            const x = nx * r;
            const y = ny * r;
            const bd = ring === 'inner' ? 27 : 24;
            const badgePx = a.n.length >= 3 ? 10 : 12;
            const legacyNudge = LEGACY_INNER_CAPTION_NUDGE[a.id];
            const { lx, ly } = legacyNudge
              ? { lx: x + legacyNudge.dx, ly: y + legacyNudge.dy }
              : orbitCaptionOffset(r, bd, uiScale, nx, ny, a.label, ring);

            return (
              <div key={a.id} className={`orbit-node orbit-node--${ring}`} style={{ zIndex: ring === 'inner' ? 5 : 3 }}>
                <button
                  type="button"
                  className="orbit-node-hit"
                  aria-label={a.label}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: (bd + 10) * 2,
                    height: (bd + 10) * 2,
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    display: 'grid',
                    placeItems: 'center',
                    padding: 0,
                    margin: 0,
                    background: 'none',
                    border: 'none',
                    cursor: 'default',
                  }}
                >
                  <div className="orbit-node-badge" style={{
                    width: bd * 2,
                    height: bd * 2,
                    borderRadius: '50%',
                    background: ring === 'inner' ? 'rgba(25,80,198,.42)' : 'rgba(255,255,255,.05)',
                    border: ring === 'inner' ? '1px solid rgba(74,126,224,.7)' : '1px solid rgba(255,255,255,.1)',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: badgePx,
                    fontWeight: 650,
                    color: ring === 'inner' ? '#fff' : 'rgba(255,255,255,.72)',
                    fontFamily: 'var(--mono)',
                    flexShrink: 0,
                    boxShadow:
                      ring === 'inner'
                        ? '0 10px 24px -8px rgba(25,80,198,.55)'
                        : 'none',
                    transition: 'transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s cubic-bezier(.2,.7,.2,1), border-color .25s cubic-bezier(.2,.7,.2,1)',
                  }}>{a.n}</div>
                </button>
                <div
                  className={`orbit-node-caption${ring === 'outer' ? ' orbit-node-caption--outer' : ''}`}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(${lx}px, ${ly}px) translate(-50%, -50%)`,
                    padding: ring === 'inner' ? '7px 12px' : '6px 11px',
                    borderRadius: 999,
                    background: ring === 'inner' ? 'rgba(12,16,26,.92)' : 'rgba(12,16,26,.78)',
                    border: ring === 'inner' ? '1px solid rgba(255,255,255,.14)' : '1px solid rgba(255,255,255,.1)',
                    fontSize: ring === 'inner' ? 11 : 11,
                    fontWeight: ring === 'inner' ? 560 : 500,
                    lineHeight: 1,
                    color: ring === 'inner' ? 'rgba(255,255,255,.95)' : 'rgba(255,255,255,.82)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >{a.label}</div>
              </div>
            );
          })}
          </div>
          <style>{`
            .orbit-stage{
              position:relative;
              width:100%;
              max-width:min(calc(940px * var(--ui-scale)),100%);
              height:clamp(calc(640px * var(--ui-scale)), calc(84vw * var(--ui-scale)), calc(780px * var(--ui-scale)));
              margin:0 auto;
              margin-bottom:clamp(calc(12px * var(--ui-scale)), calc(2vw * var(--ui-scale)), calc(28px * var(--ui-scale)));
              padding:calc(12px * var(--ui-scale)) calc(8px * var(--ui-scale));
              overflow:visible;
            }
            .orbit-stage-scaler{
              position:absolute;
              inset:0;
              width:100%;
              height:100%;
              overflow:visible;
            }
            .orbit-node-caption--outer{
              z-index:10;
            }
            .orbit-stage-core{
              position:absolute;inset:0;display:grid;place-items:center;
              pointer-events:none;
            }
            .orbit-stage .orbit-node{
              position:absolute;inset:0;pointer-events:none;
            }
            .orbit-stage .orbit-node-hit{
              pointer-events:auto;
              z-index:2;
            }
            .orbit-stage .orbit-node-hit:focus{
              outline:none;
            }
            .orbit-stage .orbit-node-hit:focus-visible .orbit-node-badge{
              outline:2px solid var(--blue-hover);
              outline-offset:3px;
            }
            .orbit-stage .orbit-node-caption{
              pointer-events:none;
              z-index:8;
              white-space:nowrap;
            }
            .orbit-stage .orbit-node:hover,
            .orbit-stage .orbit-node:focus-within{
              z-index:12;
            }
            .orbit-stage .orbit-node:hover .orbit-node-badge,
            .orbit-stage .orbit-node:focus-within .orbit-node-badge{
              transform:scale(1.06);
            }
            .orbit-stage .orbit-node--inner:hover .orbit-node-badge,
            .orbit-stage .orbit-node--inner:focus-within .orbit-node-badge{
              box-shadow:0 14px 32px -6px rgba(25,80,198,.65);
              border-color:rgba(120,160,240,.95);
            }
            .orbit-ring-legend{
              position:absolute;
              left:50%;
              top:50%;
              font-family:var(--mono);
              font-size:10px;
              letter-spacing:.14em;
              text-transform:uppercase;
              color:rgba(255,255,255,.42);
              white-space:nowrap;
              pointer-events:none;
              z-index:1;
            }
            .orbit-ring-legend--inner{
              transform:translate(calc(-50% - 208px * var(--ui-scale)), -50%);
              color:rgba(74,126,224,.75);
            }
            .orbit-ring-legend--outer{
              transform:translate(calc(-50% + 322px * var(--ui-scale)), -50%);
            }
          `}</style>
        </div>

        <div className="reveal d2 platform-cta" style={{ textAlign: 'center', marginTop: 0, padding: '0 var(--container-px)' }}>
          <motion.a
            href="#agents"
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
            quote: 'GlobalCodio Agents handle case prep, deadlines, client comms, and renewals - so your attorneys focus on what matters.',
            body: 'Solo, mid-size, and large law firms practicing immigration law. Pain points: manual case preparation, scaling case volume, growing revenue from existing clients, and managing technology.',
          },
          {
            title: 'Corporate Immigration Departments',
            quote: 'GlobalCodio Agents handle visa case tracking, compliance monitoring, and vendor coordination - so your mobility team focuses on strategy.',
            body: 'In-house mobility, HR, and legal operations teams at mid-to-large employers managing employee visa cases. Pain points: scaling case volume, compliance, vendor management, and cost predictability.',
          },
        ].map((a, i) => (
          <article key={i} className={`card reveal d${i + 1}`} {...interactiveCardProps}>
            <h3 className="display" style={{ fontSize: 'var(--text-display-audience)', letterSpacing: '-0.02em', marginBottom: 'calc(14px * var(--ui-scale))' }}>{a.title}</h3>
            <blockquote style={{ fontSize: 'var(--text-body)', color: 'var(--ink)', lineHeight: 1.55, fontStyle: 'italic', margin: '0 0 calc(14px * var(--ui-scale))', paddingLeft: 'calc(12px * var(--ui-scale))', borderLeft: '2px solid var(--blue-soft)' }}>{a.quote}</blockquote>
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
        {[['3x', 'return in year one'], ['Base', 'retainer + performance share'], ['8', 'autonomous AI Agents'], ['2', 'audiences - firms & corporate']].map(([n, l], i) => (
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
          <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}>and revenue come from.</em>
        </h2>
        <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.6, maxWidth: '62ch', marginTop: 'var(--space-lg)' }}>
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
                    {lever.comingSoon && <span className="pill value-lever-soon-pill">Coming soon</span>}
                  </div>
                  <h3 className="display text-card-sm">{lever.h}</h3>
                  <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--ink-3)', lineHeight: 1.55 }}>{lever.b}</p>
                  <div
                    className="mono value-lever-agent"
                    style={{ fontSize: 'calc(10.5px * var(--ui-scale))', letterSpacing: '.06em', color: 'var(--blue)' }}
                  >
                    {lever.agent}
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

const CERT_GROUPS = [
  { label: 'Security', items: ['SOC 2 Type II', 'ISO 27001'] },
  { label: 'Privacy', items: ['GDPR', 'CCPA / CPRA', 'UK GDPR'] },
  { label: 'Legal ethics', items: ['ABA-aligned AI governance', 'Attorney-client privilege', 'No training on client data'] },
  { label: 'Controls', items: ['AES-256', 'TLS 1.3', 'SSO / MFA', 'HIPAA-ready'] },
];

export const Certifications = () => (
  <section id="certifications" className="sec sec-certifications" aria-labelledby="certifications-heading">
    <div className="container">
      <div className="how-grid cert-layout">
        <div className="reveal cert-section-head" style={{ position: 'sticky', top: 'calc(120px * var(--ui-scale))' }}>
          <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>Trust & Compliance</div>
          <h2 id="certifications-heading" className="display type-display-lg" style={{ marginBottom: 'var(--space-xl)' }}>
            <span style={{ display: 'block' }}>Built to pass</span>
            <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}>firm-grade due diligence.</em>
          </h2>
          <p className="cert-intro">
            The standards immigration firms ask for in vendor reviews - security attestation, privacy law,
            ethical AI use, and enterprise controls.
          </p>
        </div>

        <div className="cert-panel">
          <dl className="reveal d1 cert-stack">
            {CERT_GROUPS.map((group) => (
              <div key={group.label} className="cert-row">
                <dt className="mono cert-row-label">{group.label}</dt>
                <dd className="cert-row-items">{group.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>

          <p className="reveal d2 cert-footnote">
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
        <a href={SUPPORT_MAILTO} className="btn btn-dark">Book a demo <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        <a href="tel:+18004252346" className="btn btn-surface">Call +1 (800) GBL-CDIO</a>
      </div>
    </div>
  </section>
);

/* Footer */
export const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--line)', padding: '64px 0 36px', background: '#fff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 32, marginBottom: 48 }} className="ft-grid">
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
            <a href="tel:+18004252346" style={{ color: 'var(--ink-3)', display: 'block' }}>
              +1 (800) GBL-CDIO
            </a>
          </div>
        </div>
        {[['Solutions', ['AI Agents', 'Managed technology operations', 'Global immigration ecosystem']], ['For firms', ['Solo & small', 'Mid-size practices', 'Enterprise immigration']], ['Company', ['About', 'Customers', 'Careers', 'Contact']], ['Legal', ['Privacy', 'Terms', 'Security']]].map(([h, items]) => (
          <div key={h}>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>{h}</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10, fontSize: 13.5 }}>{items.map((it) => <li key={it}><a href="#" style={{ color: 'var(--ink-3)' }}>{it}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted)', flexWrap: 'wrap', gap: 12 }}>
        <div>© 2026 GlobalCodio Inc. · San Francisco · Delhi · London</div>
        <div className="mono" style={{ letterSpacing: '.05em' }}>v2026.2 · Apr 22, 2026</div>
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
      <style>{`@media(max-width:900px){.ft-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
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

