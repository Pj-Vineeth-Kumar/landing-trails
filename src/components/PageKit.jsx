import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ease = [0.22, 1, 0.36, 1];
const btnTap = { whileHover: { scale: 1.03, y: -2 }, whileTap: { scale: 0.98 } };

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

/** Render an internal route as <Link>, external/anchor/mailto/tel as <a>. */
export const SmartLink = ({ href, className, children, ...rest }) => {
  const isInternal = href && href.startsWith('/') && !href.startsWith('//');
  if (isInternal) {
    return (
      <Link to={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
};

/** Display heading with an italic gradient-blue emphasis line. */
export const SplitHeading = ({ lead, emphasis, className = 'type-display-lg', as: Tag = 'h2', inline = false, style }) => (
  <Tag className={`display ${className}`} style={style}>
    {lead && (
      <span style={inline ? { color: 'var(--ink)' } : { display: 'block' }}>
        {lead}
        {inline && emphasis ? ' ' : null}
      </span>
    )}
    {emphasis && (
      <em
        className="text-grad-blue"
        style={{ ...(inline ? {} : { display: 'block' }), fontStyle: 'italic' }}
      >
        {emphasis}
      </em>
    )}
  </Tag>
);

/** Standard inner page hero: eyebrow + split headline + lead + optional CTAs, over an aurora wash. */
export const PageHero = ({ eyebrow, lead, emphasis, sub, primary, secondary, headInline, children }) => (
  <section className="page-hero">
    <div className="hero-aurora" aria-hidden="true" />
    <div className="hero-grid-overlay" aria-hidden="true" />
    <div className="container page-hero-inner">
      {eyebrow && (
        <motion.div
          className="page-hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="pill hero-eyebrow-pill">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.06, ease }}
      >
        <SplitHeading lead={lead} emphasis={emphasis} className={`type-display-xl page-hero-title${headInline ? ' page-hero-title--inline' : ''}`} as="h1" inline={headInline} />
      </motion.div>
      {sub && (
        <motion.p
          className="page-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease }}
        >
          {sub}
        </motion.p>
      )}
      {(primary || secondary) && (
        <motion.div
          className="page-hero-cta"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease }}
        >
          {primary && (
            <motion.span {...btnTap} style={{ display: 'inline-flex' }}>
              <SmartLink href={primary.href} className="btn btn-primary">
                {primary.label}
                <Arrow />
              </SmartLink>
            </motion.span>
          )}
          {secondary && (
            <motion.span {...btnTap} style={{ display: 'inline-flex' }}>
              <SmartLink href={secondary.href} className="btn btn-glass">
                {secondary.label}
              </SmartLink>
            </motion.span>
          )}
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

/** Section wrapper with optional eyebrow + split heading + intro. */
export const Section = ({ id, tone, eyebrow, lead, emphasis, intro, introMaxWidth = '64ch', headAlign = 'left', headInline = false, children, className = '', style }) => (
  <section id={id} className={`sec ${tone || ''} ${className}`.trim()} style={style}>
    <div className="container">
      {(eyebrow || lead || emphasis || intro) && (
        <div
          className="reveal section-head-wide"
          style={headAlign === 'center' ? { marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' } : undefined}
        >
          {eyebrow && (
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
              {eyebrow}
            </div>
          )}
          {(lead || emphasis) && <SplitHeading lead={lead} emphasis={emphasis} inline={headInline} />}
          {intro && (
            <p
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--ink-3)',
                lineHeight: 1.6,
                maxWidth: introMaxWidth,
                marginTop: 'var(--space-lg)',
                ...(headAlign === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : null),
              }}
            >
              {intro}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);

/** Feature card grid (icon chip + title + body). cols sets desktop columns. */
export const FeatureGrid = ({ items, cols = 3, compact = false }) => (
  <div className={`feature-grid feature-grid--${cols}`}>
    {items.map((it, i) => (
      <article key={it.h || i} className={`feature-card reveal d${(i % 4) + 1}${it.featured ? ' feature-card--featured' : ''}`}>
        {it.Icon && (
          <div className="feature-card-top">
            <div className="agent-icon" aria-hidden="true">
              <it.Icon size={24} strokeWidth={1.6} />
            </div>
          </div>
        )}
        <h3 className={`display ${compact ? 'text-card-sm' : 'feature-card-title'}`}>{it.h}</h3>
        {it.b && <p className="feature-card-body">{it.b}</p>}
        {it.stat && <div className="mono feature-card-stat">{it.stat}</div>}
        {it.links && (
          <div className="feature-card-links">
            {it.links.map((l) => (
              <SmartLink key={l.label} href={l.href} className="feature-card-link">
                {l.label} <Arrow />
              </SmartLink>
            ))}
          </div>
        )}
      </article>
    ))}
  </div>
);

/** Numbered step rows. */
export const StepList = ({ steps }) => (
  <ol className="step-list">
    {steps.map((s, i) => (
      <li key={i} className="reveal step-row">
        <span className="mono step-index">{String(i + 1).padStart(2, '0')}</span>
        <div className="step-body">
          <h4 className="display step-title">{s.h}</h4>
          {s.b && <p className="step-text">{s.b}</p>}
        </div>
      </li>
    ))}
  </ol>
);

/** Closing CTA band (light) with serif headline + buttons. */
export const CtaBand = ({ lead, emphasis, sub, primary, secondary }) => (
  <section className="sec sec-cta">
    <div className="container-narrow" style={{ textAlign: 'center', position: 'relative' }}>
      <div aria-hidden="true" className="blue-glow" />
      <h2 className="reveal d1 display type-display-cta" style={{ position: 'relative', textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
        <span style={{ display: 'block' }}>{lead}</span>
        {emphasis && (
          <em className="text-grad-blue" style={{ display: 'block', fontStyle: 'italic' }}>
            {emphasis}
          </em>
        )}
      </h2>
      {sub && (
        <p className="reveal d1" style={{ fontSize: 'calc(18px * var(--ui-scale))', color: 'var(--ink-3)', maxWidth: '54ch', margin: '0 auto var(--space-3xl)', lineHeight: 1.55, position: 'relative' }}>
          {sub}
        </p>
      )}
      <div className="reveal d2" style={{ display: 'flex', gap: 'var(--space-xs)', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
        {primary && (
          <SmartLink href={primary.href} className="btn btn-dark">
            {primary.label} <Arrow />
          </SmartLink>
        )}
        {secondary && (
          <SmartLink href={secondary.href} className="btn btn-surface">
            {secondary.label}
          </SmartLink>
        )}
      </div>
    </div>
  </section>
);

export { Arrow };
