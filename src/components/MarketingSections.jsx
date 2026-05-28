import React from 'react';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const LogoStrip = () => {
  const logos = [
    'Immigration law firms',
    'Corporate immigration departments',
    'Boutique & solo practices',
    'National immigration firms',
    'Corporate mobility teams',
    'Enterprise immigration groups',
    'HR–legal hybrid teams',
    'High-volume consular firms',
  ];
  return (
    <section className="logo-strip-section">
      <div className="container">
        <p className="logo-strip-title eyebrow" style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: 'var(--space-xl)' }}>
          Immigration practices from solo to enterprise
        </p>
        <div className="logo-strip-marquee">
          <div className="logo-strip-fade logo-strip-fade--left" aria-hidden="true" />
          <div className="logo-strip-fade logo-strip-fade--right" aria-hidden="true" />
          <div className="logo-strip-track">
            {[...logos, ...logos].map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const OutcomesHeadline = () => (
  <section className="outcomes-headline-section">
    <div className="container">
      <div className="reveal section-head-wide">
        <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>Value-Based Partnership</div>
        <h2 className="display type-display-lg">
          <span style={{ display: 'block' }}>We don&apos;t charge for software —</span>
          <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}>we charge for outcomes.</em>
        </h2>
      </div>
    </div>
  </section>
);

export const ValueProp = () => (
  <section className="sec sec-pillars" id="pillars">
    <div className="container">
      <div className="reveal section-head-wide">
        <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>The Three Pillars</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3xl)' }} className="vp-grid">
        {[
          { n: '01', h: 'AI Case Management', b: 'Intelligent automation for intake, document extraction, form preparation, deadline tracking, renewal detection, and proactive client communication — built specifically for immigration workflows.' },
          { n: '02', h: 'Managed Technology Operations', b: 'We run your entire technology operation ongoing — implementation, configuration, updates, integrations, optimization, and dedicated support. Fully managed by our team.' },
          { n: '03', h: 'Global Immigration Ecosystem', b: 'Curated network of pre-vetted immigration service providers worldwide — translators, document authentication services, foreign attorneys, medical exam centers, courier services, and more — all accessible through one platform.' },
        ].map((v, i) => (
          <div key={i} className={`reveal d${i + 1}`}>
            <div className="mono" style={{ fontSize: 'calc(12px * var(--ui-scale))', color: 'var(--blue)', marginBottom: 'var(--space-md)', letterSpacing: '.08em' }}>/{v.n}</div>
            <h3 style={{ fontSize: 'calc(24px * var(--ui-scale))', fontWeight: 650, letterSpacing: '-0.015em', marginBottom: 'calc(14px * var(--ui-scale))', lineHeight: 1.2 }}>{v.h}</h3>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.55 }}>{v.b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const HowItWorks = () => {
  const [open, setOpen] = React.useState(0);
  const toggle = (i) => {
    setOpen((prev) => (prev === i ? null : i));
    window.setTimeout(() => ScrollTrigger.refresh(), 620);
  };
  const steps = [
    {
      t: '01',
      h: 'We already have case management software.',
      b: 'We integrate with your existing tools and layer our platform on top — so you keep your systems and still get the outcomes. No rip-and-replace required.',
      meta: ['Integrations', 'No rip-and-replace'],
    },
    {
      t: '02',
      h: 'We don\'t have time to implement new software.',
      b: 'We manage the full technology operation for you. Your team keeps working while we handle implementation, configuration, training, and go-live.',
      meta: ['Fully managed ops', 'We own the rollout'],
    },
    {
      t: '03',
      h: 'AI makes mistakes on legal documents.',
      b: 'Every extraction and draft is attorney-reviewable. AI handles intake structure, field population, and first-pass assembly — you stay in control of what leaves the firm.',
      meta: ['Review-first workflow', 'Human sign-off'],
    },
    {
      t: '04',
      h: 'Switching platforms seems risky — will we lose data or downtime?',
      b: 'Migration is planned and handled by our team. Your records are mapped before anything moves, active cases keep running, and we manage extraction from your current vendor so nothing important gets left behind.',
      meta: ['Guided migration', 'Active cases continue'],
    },
  ];

  return (
    <section id="how" className="sec sec-surface" aria-labelledby="faq-heading">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--space-7xl)', alignItems: 'start' }} className="how-grid">
          <div className="reveal" style={{ position: 'sticky', top: 'calc(120px * var(--ui-scale))' }}>
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>Common questions</div>
            <h2 id="faq-heading" className="display type-display-lg" style={{ marginBottom: 'var(--space-xl)' }}>
              <span style={{ display: 'block' }}>Straight answers,</span>
              <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}>before you commit.</em>
            </h2>
          </div>

          <div role="list">
            {steps.map((s, i) => (
              <div
                key={i}
                role="listitem"
                className="reveal"
                style={{
                  borderBottom: i < steps.length - 1 ? '1px solid var(--line)' : 'none',
                  padding: 'calc(22px * var(--ui-scale)) 0',
                }}
              >
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={open === i}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => toggle(i)}
                  style={{ display: 'flex', width: '100%', alignItems: 'baseline', gap: 'var(--space-xl)', textAlign: 'left', padding: 0, background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}
                >
                  <span className="mono" style={{ fontSize: 'calc(14px * var(--ui-scale))', color: open === i ? 'var(--blue)' : 'var(--muted)', letterSpacing: '.06em', transition: 'color 0.45s cubic-bezier(0.22, 1, 0.36, 1)' }}>/{s.t}</span>
                  <span className="display type-display-md" style={{ flex: 1, color: open === i ? 'var(--ink)' : 'var(--muted)', transition: 'color 0.45s cubic-bezier(0.22, 1, 0.36, 1)' }}>{s.h}</span>
                  <motion.span
                    aria-hidden
                    style={{ width: 'calc(32px * var(--ui-scale))', height: 'calc(32px * var(--ui-scale))', borderRadius: '50%', border: '1px solid var(--line-2)', display: 'grid', placeItems: 'center', flexShrink: 0 }}
                    animate={{ backgroundColor: open === i ? 'var(--ink)' : '#ffffff', color: open === i ? '#ffffff' : 'var(--ink)' }}
                    transition={{ backgroundColor: { duration: 0.48, ease: [0.22, 1, 0.36, 1] }, color: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } }}
                  >
                    <motion.svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ display: 'block' }} animate={{ rotate: open === i ? 45 : 0 }} transition={{ type: 'spring', stiffness: 320, damping: 26, mass: 0.75 }}>
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" />
                    </motion.svg>
                  </motion.span>
                </button>
                <motion.div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} initial={false} animate={{ height: open === i ? 'auto' : 0 }} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                  <motion.div
                    style={{ padding: 'calc(24px * var(--ui-scale)) 0 calc(4px * var(--ui-scale)) calc(42px * var(--ui-scale))', maxWidth: '62ch' }}
                    initial={false}
                    animate={{ opacity: open === i ? 1 : 0, y: open === i ? 0 : -6 }}
                    transition={{ duration: open === i ? 0.42 : 0.22, ease: [0.22, 1, 0.36, 1], delay: open === i ? 0.06 : 0 }}
                  >
                    <p style={{ fontSize: 'calc(16px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: 'calc(18px * var(--ui-scale))' }}>{s.b}</p>
                    <div style={{ display: 'flex', gap: 'calc(10px * var(--ui-scale))', flexWrap: 'wrap' }}>
                      {s.meta.map((m) => (
                        <span key={m} className="mono" style={{ fontSize: 'calc(11.5px * var(--ui-scale))', padding: 'calc(5px * var(--ui-scale)) calc(10px * var(--ui-scale))', background: '#fff', border: '1px solid var(--line)', borderRadius: 56, color: 'var(--ink-3)', letterSpacing: '.02em' }}>{m}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
