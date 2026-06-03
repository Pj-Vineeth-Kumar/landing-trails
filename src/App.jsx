import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Nav } from './components/Nav.jsx';
import { SeoHead } from './components/SeoHead.jsx';
import { Footer, Tweaks } from './components/ContentSections.jsx';

import Home from './pages/Home.jsx';
import Platform from './pages/Platform.jsx';
import Agents from './pages/Agents.jsx';
import Network from './pages/Network.jsx';
import Services from './pages/Services.jsx';
import Rfp from './pages/Rfp.jsx';
import Security from './pages/Security.jsx';
import Firms from './pages/Firms.jsx';
import Corporate from './pages/Corporate.jsx';
import About from './pages/About.jsx';
import Letter from './pages/Letter.jsx';
import Audit from './pages/Audit.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import NotFound from './pages/NotFound.jsx';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true });

const REDUCED_MOTION = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const delayForReveal = (el) => {
  if (el.classList.contains('d5')) return 0.24;
  if (el.classList.contains('d4')) return 0.2;
  if (el.classList.contains('d3')) return 0.15;
  if (el.classList.contains('d2')) return 0.1;
  if (el.classList.contains('d1')) return 0.05;
  return 0;
};

const refreshScroll = () => {
  requestAnimationFrame(() => ScrollTrigger.refresh());
};

/** Scroll to top on route change; honor in-page #anchors. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: REDUCED_MOTION() ? 'auto' : 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  const [tweaks, setTweaks] = React.useState(window.__TWEAKS__);
  const [editMode, setEditMode] = React.useState(false);

  /* Scroll reveals - re-run per route so new pages animate in. */
  useEffect(() => {
    if (REDUCED_MOTION()) {
      document.querySelectorAll('section:not(.hero-full-viewport):not(.page-hero) .reveal').forEach((el) => {
        el.classList.add('is-in');
      });
      return undefined;
    }

    const reveals = gsap.utils.toArray(
      'section:not(.hero-full-viewport):not(.page-hero):not(.logo-strip-section) .reveal'
    );
    const ctx = gsap.context(() => {
      reveals.forEach((el) => {
        // Elements already within (or above) the viewport on load must NOT be
        // snapped to opacity:0 - that causes a one-frame flicker at the fold.
        // Only arm the entrance animation for elements that start below the fold.
        const startsBelowFold = el.getBoundingClientRect().top > window.innerHeight * 0.92;
        if (!startsBelowFold) {
          el.classList.add('is-in');
          return;
        }
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          delay: delayForReveal(el),
          ease: 'power3.out',
          immediateRender: true, // hidden state set now (element is safely off-screen)
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            onEnter: () => el.classList.add('is-in'),
          },
        });
      });
    });

    // Failsafe: reveal any in-view element the trigger somehow missed (route timing).
    // No ScrollTrigger.refresh() here - it re-evaluates start states mid-scroll and
    // is a source of jumpy reveals. The single refreshScroll() below is enough.
    const failsafe = window.setTimeout(() => {
      reveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-in');
      });
    }, 450);

    refreshScroll();
    return () => {
      window.clearTimeout(failsafe);
      ctx.revert();
    };
  }, [tweaks, pathname]);

  /* Accent token swap */
  useEffect(() => {
    const r = document.documentElement;
    const accents = {
      blue: { a: '#1950C6', h: '#4a7ee0', i: '#0e266c', s: '#e8eefc' },
      deep: { a: '#0e266c', h: '#1950C6', i: '#071640', s: '#dce3f2' },
      ink: { a: '#0a0b0d', h: '#282b31', i: '#000', s: '#eef0f3' },
    }[tweaks.accent || 'blue'];
    r.style.setProperty('--blue', accents.a);
    r.style.setProperty('--blue-hover', accents.h);
    r.style.setProperty('--blue-ink', accents.i);
    r.style.setProperty('--blue-soft', accents.s);
  }, [tweaks.accent]);

  /* Lenis + GSAP ticker sync */
  useEffect(() => {
    if (REDUCED_MOTION()) return undefined;

    const lenis = new Lenis({
      // Use lerp ALONE (not lerp + duration - they conflict). A slightly higher
      // lerp settles faster, so scroll feels responsive rather than draggy.
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
      syncTouch: true,
      syncTouchLerp: 0.1,
      autoRaf: false,
      prevent: (node) => node?.classList?.contains('nav-mobile-panel'),
    });

    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, {
        offset: -88,
        duration: 1.35,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      });
    };

    document.addEventListener('click', onAnchorClick);

    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const onLoad = () => {
      lenis.resize();
      refreshScroll();
    };
    window.addEventListener('load', onLoad);
    document.fonts?.ready?.then(refreshScroll);

    requestAnimationFrame(() => {
      lenis.resize();
      refreshScroll();
    });

    return () => {
      document.removeEventListener('click', onAnchorClick);
      window.removeEventListener('load', onLoad);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  /* On route change, reset Lenis to top + refresh triggers. */
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
    refreshScroll();
  }, [pathname]);

  /* Edit-mode bridge (unchanged) */
  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || !e.data.type) return;
      if (e.data.type === '__activate_edit_mode') setEditMode(true);
      if (e.data.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const updateTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.__TWEAKS__ = next;
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ScrollManager />
      <SeoHead />
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      {editMode && <Tweaks tweaks={tweaks} onChange={updateTweak} />}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/ai-agents" element={<Agents />} />
        <Route path="/network" element={<Network />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rfp-response" element={<Rfp />} />
        <Route path="/security" element={<Security />} />
        <Route path="/for-law-firms" element={<Firms />} />
        <Route path="/for-corporate-teams" element={<Corporate />} />
        <Route path="/about" element={<About />} />
        <Route path="/letter-from-the-founder" element={<Letter />} />
        <Route path="/free-tech-audit" element={<Audit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
