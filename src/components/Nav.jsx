import React from 'react';
import { motion } from 'framer-motion';

const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

/** Pill radius matches .btn (56px) for one design system curve */
const NAV_PILL_RADIUS = 56;

/** Brand lockup — `public/logo.png` (GLOBALCODIO AI). Use `wide` for large footer watermark. */
export const Logo = ({ height = 30, style, className, alt = 'GLOBALCODIO AI', wide }) => (
  <img
    src={logoSrc}
    alt={alt}
    draggable={false}
    className={className}
    style={{
      display: 'block',
      ...(wide ? { width: 'min(88%, 720px)', height: 'auto' } : { height, width: 'auto' }),
      ...style,
    }}
  />
);

/* Nav — floating glass pill */
export const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const surface = scrolled
    ? {
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.32) 100%)',
        backdropFilter: 'blur(18px) saturate(150%) brightness(1.04)',
        WebkitBackdropFilter: 'blur(18px) saturate(150%) brightness(1.04)',
        border: '1px solid rgba(255,255,255,0.45)',
        boxShadow:
          'inset 0 1px 0 0 rgba(255,255,255,0.7), 0 8px 32px -16px rgba(11,19,36,0.1)',
      }
    : {
        background: 'transparent',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        border: '1px solid transparent',
        boxShadow: 'none',
      };

  return (
    <div
      style={{
        position: 'fixed',
        top: 'max(16px, env(safe-area-inset-top, 0px))',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
        pointerEvents: 'none',
      }}
    >
      <motion.nav
        className="site-nav"
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: 1320,
          borderRadius: NAV_PILL_RADIUS,
          overflow: 'hidden',
          transition:
            'background .35s cubic-bezier(.2,.7,.2,1), backdrop-filter .35s cubic-bezier(.2,.7,.2,1), -webkit-backdrop-filter .35s cubic-bezier(.2,.7,.2,1), border-color .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s cubic-bezier(.2,.7,.2,1)',
          ...surface,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: scrolled ? 16 : 20,
            padding: scrolled ? '8px 22px' : '12px 28px',
            transition: 'padding .35s cubic-bezier(.2,.7,.2,1), gap .35s cubic-bezier(.2,.7,.2,1)',
          }}
        >
          <a href="#" style={{ display: 'flex', alignItems: 'center', lineHeight: 0, flexShrink: 0 }} aria-label="GLOBALCODIO AI home">
            <Logo height={scrolled ? 26 : 32} style={{ transition: 'height .35s cubic-bezier(.2,.7,.2,1)' }} />
          </a>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', flex: 1, justifyContent: 'center' }} className="navlinks">
            <a className="navlink" href="#platform">Platform</a>
            <a className="navlink" href="#how">How it works</a>
            <a className="navlink" href="#customers">Customers</a>
            <a className="navlink" href="#cases">Case studies</a>
            <a className="navlink" href="#pricing">Pricing</a>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
            <a
              href="https://app.globalcodio.ai/login"
              className="btn btn-dark"
              style={{
                padding: scrolled ? '7px 16px' : '10px 20px',
                fontSize: scrolled ? 13 : 14,
                borderRadius: NAV_PILL_RADIUS,
                transition: 'padding .35s cubic-bezier(.2,.7,.2,1), font-size .35s cubic-bezier(.2,.7,.2,1)',
              }}
            >
              Sign in
            </a>
          </div>
        </div>
        <style>{`@media(max-width:960px){.navlinks{display:none !important;}}`}</style>
      </motion.nav>
    </div>
  );
};
