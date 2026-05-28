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

/* Static assets in /public */
const heroBackgroundSrc = `${import.meta.env.BASE_URL}sky.png`;
const dashboardPreviewSrc = `${import.meta.env.BASE_URL}assets/dashboard.png`;

/* Hero - GoGetta structure: editorial headline, sub, CTAs, then dashboard preview below */
export const Hero = () => (
    <section
      className="hero-full-viewport hero-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        position: 'relative',
        isolation: 'isolate',
        backgroundColor: '#eef3f8',
        backgroundImage: `url(${heroBackgroundSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-copy-stack">
        <motion.div
          className="container"
          style={{ position: 'relative', zIndex: 2, width: '100%' }}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
        <motion.div className="reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-sm)' }} variants={rise}>
          <span className="pill">
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: 'var(--blue)',
                boxShadow: '0 0 0 2px rgba(25,80,198,.15)',
                animation: 'livepulse 2s infinite',
              }}
            />
            Built exclusively for immigration teams
          </span>
        </motion.div>

        <motion.h1
          className="reveal d1 display type-display-hero"
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-sm)',
            lineHeight: 1.04,
          }}
          variants={headlineStagger}
        >
          <motion.span style={{ display: 'block' }} variants={rise}>
            AI for Global Immigration
          </motion.span>
          <motion.em
            style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}
            variants={rise}
          >
            Cut Costs, Grow Revenue.
          </motion.em>
        </motion.h1>

        <motion.p
          className="reveal d2 type-lead hero-lead hero-lead-full"
          style={{
            lineHeight: 1.55,
            color: 'var(--ink-3)',
            textAlign: 'center',
            margin: '0 auto var(--space-md)',
          }}
          variants={rise}
        >
          GlobalCodio is the AI-powered platform and global ecosystem built exclusively for immigration teams
          — whether you&apos;re a law firm or a corporate department. We deploy the technology, manage the
          operations, and connect you to the partners you need to deliver end-to-end immigration services.
        </motion.p>

        <motion.p
          className="reveal d2 type-lead hero-lead hero-lead-mobile"
          style={{
            lineHeight: 1.48,
            color: 'var(--ink-3)',
            textAlign: 'center',
            margin: '0 auto var(--space-md)',
          }}
          variants={rise}
        >
          The AI-powered platform built for immigration teams — law firms and corporate departments.
          We deploy the technology, manage operations, and connect you end-to-end.
        </motion.p>

        <motion.div
          className="reveal d3 hero-cta-row"
          style={{ display: 'flex', gap: 'var(--space-xs)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 0 }}
          variants={rise}
        >
          <motion.a href="#cta" className="btn btn-dark" {...btnTap}>
            Schedule a call
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </motion.a>
        </motion.div>
        </motion.div>
      </div>

      {/* Dashboard preview — hidden on mobile via .hero-dashboard-slot in global.css */}
      <div className="hero-dashboard-slot">
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <HeroDashboard />
        </div>
        <div
          aria-hidden="true"
          className="hero-dashboard-fade"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '100vw',
            height: 'clamp(calc(120px * var(--ui-scale)), calc(32vw * var(--ui-scale)), calc(300px * var(--ui-scale)))',
            pointerEvents: 'none',
            zIndex: 6,
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 32%, rgba(255,255,255,0.55) 68%, rgba(255,255,255,0.94) 88%, #ffffff 100%)',
          }}
        />
      </div>
    </section>
);

export const HeroDashboard = ({ imageHeight } = {}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotateX: 10 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.95, delay: 0.35, ease }}
    style={{
      position: 'relative',
      width: '100%',
      borderRadius: '20px 20px 0 0',
      overflow: 'hidden',
      border: '1px solid var(--line-2)',
      borderBottom: 'none',
      background: '#fff',
      boxShadow: '0 40px 80px -36px rgba(11,19,36,.22), 0 8px 16px rgba(11,19,36,.04)',
      perspective: 1200,
    }}
  >
    {/* Browser chrome - Safari-like light pills; icons use currentColor from header */}
    <div
      className="hero-dash-chrome"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 14px',
        borderBottom: '1px solid var(--line)',
        background: 'var(--surface-2)',
        color: 'var(--ink-3)',
        fontFamily: 'var(--sans)',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexShrink: 0 }} aria-hidden="true">
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '5px 9px',
          background: '#fff',
          border: '1px solid var(--line)',
          borderRadius: 999,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.35">
          <rect x="2.5" y="3" width="7" height="10" rx="1.2" />
          <path d="M11 5v6" strokeLinecap="round" />
        </svg>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2.5 3.5L5 6l2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          padding: '4px 6px',
          background: '#fff',
          border: '1px solid var(--line)',
          borderRadius: 999,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round">
          <path d="M10.5 4.5L6 9l4.5 4.5" />
        </svg>
        <span style={{ width: 1, height: 14, background: 'var(--line)', margin: '0 1px' }} />
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" opacity={0.35}>
          <path d="M7.5 4.5L12 9l-4.5 4.5" />
        </svg>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 360,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '6px 12px',
            background: '#fff',
            border: '1px solid var(--line)',
            borderRadius: 999,
            fontSize: 12.5,
            fontWeight: 550,
            color: 'currentColor',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round">
            <path d="M3 4.5h10M3 8h10M3 11.5h7" />
          </svg>
          <span
            style={{
              flex: 1,
              minWidth: 0,
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--mono)',
              fontWeight: 500,
            }}
          >
            app.globalcodio.ai
          </span>
          <span
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 2,
              margin: 0,
              color: 'inherit',
              cursor: 'default',
              flexShrink: 0,
              lineHeight: 0,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 2v6h-6" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L21 10" />
            </svg>
          </span>
        </div>
      </div>

      <div
        style={{
          fontSize: 10,
          fontFamily: 'var(--mono)',
          fontWeight: 600,
          letterSpacing: '0.06em',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          flexShrink: 0,
          color: 'currentColor',
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
      <motion.img
        src={dashboardPreviewSrc}
        alt="GlobalCodio immigration case management dashboard for law firms and corporate teams"
        width={1200}
        height={630}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        style={{
          display: 'block',
          width: '100%',
          height: imageHeight ?? 'clamp(calc(220px * var(--ui-scale)), calc(40vw * var(--ui-scale)), calc(480px * var(--ui-scale)))',
          objectFit: 'cover',
          /* Was bottom center - cropped off top of UI; ~72% shows more from the start without full reflow */
          objectPosition: 'center 25%',
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
