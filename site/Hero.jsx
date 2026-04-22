import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';

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

/**
 * Scroll 0 → 1 over ~0.38× viewport (Lenis provides smooth inertial scroll; no extra spring here).
 * `vhPxRef` is kept in sync for pixel-accurate viewport-relative shifts.
 */
function useHeroScroll() {
  const { scrollY } = useScroll();
  const rangeRef = useRef(400);
  const vhPxRef = useRef(800);
  const motionOff = useMotionValue(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const sync = () => {
      const h = window.innerHeight;
      vhPxRef.current = h;
      rangeRef.current = Math.min(520, Math.max(240, h * 0.38));
    };
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const h = () => setReduced(mq.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  useEffect(() => {
    motionOff.set(reduced ? 1 : 0);
  }, [reduced, motionOff]);

  const pScroll = useTransform(scrollY, (y) => {
    const t = y / rangeRef.current;
    return t <= 0 ? 0 : t >= 1 ? 1 : t;
  });
  const scrollP = useTransform([pScroll, motionOff], ([a, b]) => a * (1 - b));
  return { scrollP, vhPxRef };
}

/* Static assets in /public (sync from project root when you replace files) */
const heroBackgroundSrc = `${import.meta.env.BASE_URL}main-back.png`;
const heroTopSrc = `${import.meta.env.BASE_URL}top1.png`;
const heroBottomSrc = `${import.meta.env.BASE_URL}bottom2.png`;

/* Hero — GoGetta structure: editorial headline, sub, CTAs, then dashboard preview below */
export const Hero = ({ tweaks }) => {
  const { scrollP, vhPxRef } = useHeroScroll();

  /** Viewport-fraction for dashboard lift + matching preview-area growth */
  const dashVh = 0.024;
  const minH = useTransform(scrollP, (p) => `${(1 + 0.036 * p) * 100}dvh`);
  const skylineY = useTransform(scrollP, (p) => p * 0.036 * vhPxRef.current);
  const dashboardY = useTransform(scrollP, (p) => -p * dashVh * vhPxRef.current);
  const dashboardImgHeight = useTransform(scrollP, (p) => {
    const add = p * dashVh * vhPxRef.current;
    return `calc(clamp(220px, 40vw, 480px) + ${add}px)`;
  });

  const headlines = {
    edge: { a: 'Immigration,', b: 'at the edge.' },
    quiet: { a: 'The quiet layer', b: 'under every filing' },
    craft: { a: 'Global immigration,', b: 'crafted by agents' },
    perform: { a: 'Immigration,', b: 'performance' },
    scale: { a: 'Immigration', b: 'that scales' },
  };
  const h = headlines[tweaks?.headline] || headlines.edge;

  return (
    <motion.section
      className="hero-full-viewport"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '96px 0 0',
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        boxSizing: 'border-box',
        minHeight: minH,
        backgroundColor: '#eef3f8',
        backgroundImage: `url(${heroBackgroundSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Fills space below nav; centers copy vertically in the gap above the dashboard */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <motion.div
          className="container"
          style={{ position: 'relative', zIndex: 2, width: '100%' }}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
        <motion.div className="reveal" style={{ textAlign: 'center', marginBottom: 16 }} variants={rise}>
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
            v2026.2 — Policy Intelligence
          </span>
        </motion.div>

        <motion.h1
          className="reveal d1 display"
          style={{
            fontSize: 'clamp(35px, 6.4vw, 96px)',
            textAlign: 'center',
            marginBottom: 16,
            whiteSpace: 'nowrap',
          }}
          variants={headlineStagger}
        >
          <motion.span style={{ display: 'inline' }} variants={rise}>
            {h.a}
          </motion.span>
          <motion.em
            style={{ display: 'inline', fontStyle: 'italic', color: 'var(--blue)' }}
            variants={rise}
          >
            {'\u00A0'}
            {h.b}
          </motion.em>
        </motion.h1>

        <motion.p
          className="reveal d2"
          style={{
            fontSize: 'clamp(13.5px, 1.04vw, 16px)',
            lineHeight: 1.45,
            color: 'var(--ink-3)',
            maxWidth: '62ch',
            textAlign: 'center',
            margin: '0 auto 20px',
          }}
          variants={rise}
        >
          A workforce of AI agents for document intake, form preparation, compliance verification, and
          evidentiary drafting. Attorneys focus on judgment. The platform handles the mechanical 60-70%.
        </motion.p>

        <motion.div
          className="reveal d3"
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 0 }}
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
      </div>

      {/* Dashboard preview — pinned below the centered copy block; moves up slightly on scroll */}
      <motion.div
        className="reveal d4"
        style={{
          position: 'relative',
          zIndex: 2,
          flexShrink: 0,
          marginBottom: -1,
          width: '100%',
          y: dashboardY,
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <HeroDashboard imageHeight={dashboardImgHeight} />
        </div>
        {/* Full-bleed blend (breaks out of .container) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            width: '100vw',
            /* Short band: only the lower slice of the preview; no backdrop-blur (was fogging the whole image) */
            height: 'clamp(120px, 32vw, 300px)',
            pointerEvents: 'none',
            zIndex: 6,
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 32%, rgba(255,255,255,0.55) 68%, rgba(255,255,255,0.94) 88%, #ffffff 100%)',
          }}
        />
      </motion.div>

      {/* Top band — static on scroll; under copy (z1) so headline stays readable */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          zIndex: 1,
          pointerEvents: 'none',
          lineHeight: 0,
        }}
      >
        <img
          src={heroTopSrc}
          alt=""
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            verticalAlign: 'top',
          }}
        />
      </div>

      {/* Landmarks / skyline — full width, intrinsic height; same scroll motion as before (was single hero.png) */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          pointerEvents: 'none',
          lineHeight: 0,
          y: skylineY,
        }}
      >
        <img
          src={heroBottomSrc}
          alt=""
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            verticalAlign: 'bottom',
          }}
        />
      </motion.div>
    </motion.section>
  );
};

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
    {/* Browser chrome — Safari-like light pills; icons use currentColor from header */}
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
        src="assets/dashboard.png"
        alt="GlobalCodio case manager dashboard"
        style={{
          display: 'block',
          width: '100%',
          height: imageHeight ?? 'clamp(220px, 40vw, 480px)',
          objectFit: 'cover',
          /* Was bottom center — cropped off top of UI; ~72% shows more from the start without full reflow */
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
