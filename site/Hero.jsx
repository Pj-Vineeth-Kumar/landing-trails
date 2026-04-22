import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.2, 0.7, 0.2, 1];

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const headlineStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.02 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease },
  },
};

const btnTap = { whileHover: { scale: 1.03, y: -2 }, whileTap: { scale: 0.98 } };

/* Hero — GoGetta structure: editorial headline, sub, CTAs, then dashboard preview below */
export const Hero = ({ tweaks }) => {
  const headlines = {
    edge: { a: 'Immigration,', b: 'at the edge' },
    quiet: { a: 'The quiet layer', b: 'under every filing' },
    craft: { a: 'Global immigration,', b: 'crafted by agents' },
    perform: { a: 'Immigration,', b: 'performance' },
    scale: { a: 'Immigration', b: 'that scales' },
  };
  const h = headlines[tweaks?.headline] || headlines.edge;

  return (
    <section style={{ padding: '150px 0 0', position: 'relative', overflow: 'hidden' }}>
      {/* Multi-color mesh — blue, indigo, teal, warm accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-12%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(1400px, 140vw)',
          height: 720,
          pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 55% 48% at 50% 35%, rgba(25,80,198,.14), transparent 62%),
            radial-gradient(ellipse 40% 36% at 12% 55%, rgba(79,70,229,.12), transparent 55%),
            radial-gradient(ellipse 38% 40% at 92% 40%, rgba(13,148,136,.11), transparent 55%),
            radial-gradient(ellipse 30% 28% at 78% 78%, rgba(234,88,12,.08), transparent 50%)
          `,
          filter: 'blur(36px)',
          animation: 'mesh-drift 22s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.85,
          backgroundImage: `
            radial-gradient(circle, rgba(79,70,229,.07) 1px, transparent 1px),
            radial-gradient(circle, rgba(13,148,136,.05) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px, 36px 36px',
          backgroundPosition: '0 0, 14px 18px',
          maskImage: 'radial-gradient(ellipse 55% 45% at 50% 28%, black 8%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse 55% 45% at 50% 28%, black 8%, transparent 72%)',
        }}
      />
      {/* Diagonal color streaks */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '8%',
          left: '-20%',
          width: '70%',
          height: '55%',
          pointerEvents: 'none',
          opacity: 0.07,
          transform: 'rotate(-18deg)',
          background:
            'repeating-linear-gradient(105deg, var(--indigo) 0px, var(--indigo) 1px, transparent 1px, transparent 18px, var(--teal) 18px, var(--teal) 19px, transparent 19px, transparent 36px)',
        }}
      />

      <motion.div
        className="container"
        style={{ position: 'relative', zIndex: 2 }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div className="reveal" style={{ textAlign: 'center', marginBottom: 24 }} variants={rise}>
          <span className="pill">
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--blue), var(--teal))',
                boxShadow: '0 0 0 3px rgba(79,70,229,.2), 0 0 12px rgba(13,148,136,.35)',
                animation: 'livepulse 2s infinite',
              }}
            />
            v2026.2 — Policy Intelligence live across 7 jurisdictions
          </span>
        </motion.div>

        <motion.h1
          className="reveal d1 display"
          style={{
            fontSize: 'clamp(56px, 9.5vw, 156px)',
            textAlign: 'center',
            marginBottom: 28,
            letterSpacing: '-0.025em',
            fontWeight: 400,
            whiteSpace: 'nowrap',
          }}
          variants={headlineStagger}
        >
          <motion.span style={{ display: 'block' }} variants={rise}>
            {h.a}
          </motion.span>
          <motion.em
            style={{
              display: 'block',
              fontStyle: 'italic',
              background: 'linear-gradient(92deg, var(--blue) 0%, var(--indigo) 42%, var(--teal) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
            variants={rise}
          >
            {h.b}
          </motion.em>
        </motion.h1>

        <motion.p
          className="reveal d2"
          style={{
            fontSize: 'clamp(17px,1.3vw,20px)',
            lineHeight: 1.45,
            color: 'var(--ink-3)',
            maxWidth: '62ch',
            textAlign: 'center',
            margin: '0 auto 36px',
          }}
          variants={rise}
        >
          A workforce of AI agents for document intake, form preparation, compliance verification, and
          evidentiary drafting. Attorneys focus on judgment. The platform handles the mechanical 60-70%.
        </motion.p>

        <motion.div
          className="reveal d3"
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}
          variants={rise}
        >
          <motion.a href="#cta" className="btn btn-dark" {...btnTap}>
            Request a walkthrough
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </motion.a>
          <motion.a href="#platform" className="btn btn-surface" {...btnTap}>
            View the platform
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Dashboard preview — top half visible, bottom fades into next section */}
      <div
        className="container reveal d4"
        style={{ position: 'relative', zIndex: 2, marginBottom: -1 }}
      >
        <HeroDashboard />
      </div>
    </section>
  );
};

export const HeroDashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 56, rotateX: 10 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.95, delay: 0.35, ease }}
    style={{
      position: 'relative',
      borderRadius: '20px 20px 0 0',
      overflow: 'hidden',
      border: '1px solid var(--line-2)',
      borderBottom: 'none',
      background: '#fff',
      boxShadow: '0 40px 80px -36px rgba(11,19,36,.22), 0 8px 16px rgba(11,19,36,.04)',
      perspective: 1200,
    }}
  >
    {/* Browser chrome */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 20px',
        borderBottom: '1px solid var(--line)',
        background: 'var(--surface-2)',
      }}
    >
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
      </div>
      <div
        style={{
          flex: 1,
          maxWidth: 480,
          margin: '0 auto',
          padding: '5px 14px',
          background: '#fff',
          border: '1px solid var(--line)',
          borderRadius: 56,
          fontSize: 12,
          color: 'var(--muted)',
          fontFamily: 'var(--mono)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          justifyContent: 'center',
        }}
      >
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M2.5 4v-.5a2 2 0 014 0V4M2 4h5v4H2V4z" stroke="currentColor" />
        </svg>
        app.globalcodio.com/cases/NEO-2026-0010
      </div>
      <div
        style={{
          fontSize: 11,
          color: 'var(--muted)',
          fontFamily: 'var(--mono)',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#22c55e',
            animation: 'livepulse 2s infinite',
          }}
        />
        LIVE
      </div>
    </div>

    <div
      style={{
        position: 'relative',
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      <img
        src="assets/dashboard.png"
        alt="GlobalCodio case manager dashboard"
        style={{
          display: 'block',
          width: '100%',
          height: 'clamp(220px, 36vw, 420px)',
          objectFit: 'cover',
          objectPosition: 'top center',
        }}
      />
      {/* Fade dashboard into page background / logo strip */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 'min(52%, 220px)',
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 35%, rgba(255,255,255,0.92) 68%, #ffffff 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating annotation pills */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '18%',
          right: '-2%',
          padding: '10px 14px',
          background: '#fff',
          border: '1px solid var(--line-2)',
          borderRadius: 12,
          boxShadow: '0 20px 40px -20px rgba(11,19,36,.2)',
          fontSize: 12,
          display: 'none',
          alignItems: 'center',
          gap: 8,
        }}
        className="float-anno"
      >
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)' }} />
        <span>
          <b>Policy delta detected</b>
          <br />
          <span style={{ color: 'var(--muted)' }}>USCIS I-129 Part 5</span>
        </span>
      </div>
    </div>
  </motion.div>
);
