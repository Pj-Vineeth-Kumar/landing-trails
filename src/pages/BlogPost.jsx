import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Seo } from '../components/Seo.jsx';
import { Section, SmartLink, CtaBand } from '../components/PageKit.jsx';
import NotFound from './NotFound.jsx';
import { POSTS_DATA } from './Blog.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS_DATA.find(p => p.slug === slug);

  if (!post) return <NotFound />;

  /* Exact same prose styles as Letter.jsx */
  const proseStyle = {
    fontSize: 'calc(19px * var(--ui-scale))',
    color: 'var(--text-body)',
    lineHeight: 1.8,
    marginTop: 'var(--space-xl)',
  };

  return (
    <>
      <Seo
        title={`${post.title} — GlobalCodio Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      {/* Hero — same structure as PageHero but minimal */}
      <section className="page-hero">
        <div className="hero-aurora" aria-hidden="true" />
        <div className="hero-grid-overlay" aria-hidden="true" />
        <div className="container page-hero-inner">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'calc(8px * var(--ui-scale))', marginBottom: 'var(--space-lg)', fontSize: 'calc(13px * var(--ui-scale))' }}>
            <Link to="/blog" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>Blog</Link>
            <span style={{ color: 'var(--muted)' }}>›</span>
            <span style={{ color: 'var(--muted)' }}>{post.category}</span>
          </div>

          {/* Category + read time pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'calc(12px * var(--ui-scale))', marginBottom: 'var(--space-lg)' }}>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: 'calc(10px * var(--ui-scale))',
              letterSpacing: '.08em', textTransform: 'uppercase',
              color: 'var(--blue)', fontWeight: 700,
              padding: 'calc(4px * var(--ui-scale)) calc(12px * var(--ui-scale))',
              background: 'var(--blue-soft)', borderRadius: 999,
            }}>{post.category}</span>
            <span className="mono" style={{ fontSize: 'calc(12px * var(--ui-scale))', color: 'var(--muted)' }}>{post.readTime} min read</span>
          </div>

          {/* Title */}
          <div style={{ maxWidth: '70ch', margin: '0 auto', width: '100%' }}>
            <h1 className="display type-display-lg" style={{ textAlign: 'center', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              {post.title}
            </h1>
          </div>

          {/* Author row */}
          <div style={{ marginTop: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: 'calc(12px * var(--ui-scale))', justifyContent: 'center' }}>
            <img
              src={post.author.image}
              alt={post.author.name}
              width={40} height={40}
              style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid var(--blue-soft)' }}
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 'calc(14px * var(--ui-scale))', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>{post.author.name}</div>
              <div style={{ fontSize: 'calc(12px * var(--ui-scale))', color: 'var(--muted)', lineHeight: 1.3 }}>{post.author.designation} · {post.date}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article — same Section/maxWidth as Letter */}
      <Section id="article" tone="" style={{ paddingTop: 'var(--space-xl)' }}>
        <div style={{ maxWidth: '70ch', margin: '0 auto' }}>

          {/* Lead excerpt — italic, same as Letter's opening line */}
          <p className="reveal" style={{ ...proseStyle, marginTop: 0, fontStyle: 'italic', color: 'var(--ink-3)' }}>
            {post.excerpt}
          </p>

          <hr className="rule-blue reveal" style={{ marginTop: 'var(--space-xl)' }} />

          {/* Body blocks */}
          {post.content.map((block, i) => {
            if (block.type === 'h2') return (
              <h2
                key={i}
                className="reveal display"
                style={{
                  fontSize: 'calc(28px * var(--ui-scale))',
                  fontStyle: 'italic',
                  lineHeight: 1.25,
                  color: 'var(--ink-1, var(--text-body))',
                  margin: 'var(--space-2xl) 0 var(--space-md)',
                }}
              >
                {block.text}
              </h2>
            );
            return (
              <p key={i} className="reveal" style={proseStyle}>
                {block.text}
              </p>
            );
          })}

          <hr className="rule-blue reveal" style={{ marginTop: 'var(--space-2xl)' }} />

          {/* Author card — same style as Letter signature */}
          <div className="letter-signature reveal" style={{ marginTop: 'var(--space-xl)' }}>
            <img
              src={post.author.image}
              alt={post.author.name}
              className="letter-signature-photo"
              width={80} height={80}
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <div className="letter-signature-id">
              <span className="display letter-signature-name">{post.author.name}</span>
              <span className="eyebrow letter-signature-role">{post.author.designation}</span>
              <p style={{ fontSize: 'calc(14px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.6, marginTop: 'calc(6px * var(--ui-scale))' }}>
                Umesh founded INSZoom in 1999 and served as CEO until its acquisition in 2020. He founded GlobalCodio in 2025 to build the technology operation immigration firms have been asking for.
              </p>
              <SmartLink href="/letter-from-the-founder" className="feature-card-link" style={{ fontWeight: 600, display: 'inline-flex', marginTop: 'calc(8px * var(--ui-scale))' }}>
                Read the founder's letter
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 13, height: 13 }}>
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </SmartLink>
            </div>
          </div>

        </div>
      </Section>

      <CtaBand
        lead="Ready to see what's possible"
        emphasis="for your firm?"
        primary={{ href: '/contact', label: 'Book a Demo' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Talk to our team' }}
      />
    </>
  );
}
