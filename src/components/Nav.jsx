import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FOOTER_COLUMNS, SIGN_IN_URL, SITE_NAV_LINKS, SITE_URL } from '../config/siteNav.js';

const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

/** Pill radius matches .btn (56px) for one design system curve */
const NAV_PILL_RADIUS = 56;

const ChevronRight = () => (
  <svg className="nav-mobile-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Brand lockup - `public/logo.png` (GLOBALCODIO AI). Use `wide` for large footer watermark. */
export const Logo = ({ height, style, className, alt = 'GlobalCodio - AI Workforce for Global Immigration', wide }) => (
  <img
    src={logoSrc}
    alt={alt}
    width={wide ? 720 : 180}
    height={wide ? 120 : (height ?? 30)}
    draggable={false}
    className={className}
    style={{
      display: 'block',
      ...(wide
        ? { width: 'min(88%, 720px)', height: 'auto' }
        : className?.includes('nav-logo') || className?.includes('nav-mobile-logo') || className?.includes('ft-logo')
          ? { width: 'auto' }
          : { height: height ?? 30, width: 'auto' }),
      ...style,
    }}
  />
);

const drawerEase = [0.2, 0.7, 0.2, 1];

/* Nav - floating glass pill + full-screen mobile menu */
export const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuToggleRef = React.useRef(null);
  const closeBtnRef = React.useRef(null);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const closeMenu = React.useCallback(() => {
    setMenuOpen(false);
  }, []);

  const openMenu = React.useCallback(() => {
    setMenuOpen(true);
  }, []);

  React.useEffect(() => {
    if (!menuOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
      menuToggleRef.current?.focus();
    };
  }, [menuOpen, closeMenu]);

  const surface = scrolled || menuOpen
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
    <header>
      <div
        className={`nav-shell${menuOpen ? ' nav-shell-menu-open' : ''}`}
        style={{
          position: 'fixed',
          top: 'var(--nav-shell-top)',
          left: 0,
          right: 0,
          zIndex: menuOpen ? 200 : 100,
          display: 'flex',
          justifyContent: 'center',
          paddingLeft: 'max(calc(20px * var(--ui-scale)), env(safe-area-inset-left, 0px))',
          paddingRight: 'max(calc(20px * var(--ui-scale)), env(safe-area-inset-right, 0px))',
          pointerEvents: 'none',
        }}
      >
        <motion.nav
          className={`site-nav${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`}
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: drawerEase }}
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: 'var(--container-max)',
            borderRadius: NAV_PILL_RADIUS,
            transition:
              'background .35s cubic-bezier(.2,.7,.2,1), backdrop-filter .35s cubic-bezier(.2,.7,.2,1), -webkit-backdrop-filter .35s cubic-bezier(.2,.7,.2,1), border-color .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s cubic-bezier(.2,.7,.2,1)',
            ...surface,
          }}
        >
          <div className="nav-inner">
            <a href={SITE_URL} className="nav-logo-link" aria-label="GlobalCodio home">
              <Logo className="nav-logo" />
            </a>

            <div className="navlinks navlinks-desktop">
              {SITE_NAV_LINKS.map(({ href, label }) => (
                <a key={href + label} className="navlink" href={href}>
                  {label}
                </a>
              ))}
            </div>

            <div className="nav-actions nav-actions-desktop">
              <a href={SIGN_IN_URL} className="btn btn-dark nav-signin">
                Sign in
              </a>
            </div>

            {!menuOpen && (
              <button
                ref={menuToggleRef}
                type="button"
                className="nav-menu-toggle"
                aria-label="Open menu"
                aria-expanded={false}
                aria-controls="nav-mobile-panel"
                onClick={openMenu}
              >
                <span className="nav-menu-toggle-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            )}
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="nav-mobile-panel"
            className="nav-mobile-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: drawerEase }}
          >
            <header className="nav-mobile-header">
              <a href={SITE_URL} className="nav-mobile-logo-link" aria-label="GlobalCodio home" onClick={closeMenu}>
                <Logo className="nav-mobile-logo" />
              </a>
              <button
                ref={closeBtnRef}
                type="button"
                className="nav-close-btn"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            <nav className="nav-mobile-list">
              {SITE_NAV_LINKS.map(({ href, label }, i) => (
                <a
                  key={href + label}
                  className="nav-mobile-link"
                  href={href}
                  onClick={closeMenu}
                  style={{ animationDelay: `${0.03 + i * 0.035}s` }}
                >
                  <span>{label}</span>
                  <ChevronRight />
                </a>
              ))}
            </nav>

            <div className="nav-mobile-footer">
              <a href="#cta" className="btn btn-dark nav-mobile-cta" onClick={closeMenu}>
                Schedule a call
              </a>
              <a href={SIGN_IN_URL} className="btn btn-surface nav-mobile-signin" onClick={closeMenu}>
                Sign in
              </a>
            </div>

            <div className="nav-mobile-contact">
              {FOOTER_COLUMNS.find((col) => col.title === 'Contact')?.links.slice(1).map(({ href, label }) => (
                <a key={label} href={href} className="nav-mobile-contact-link" onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
