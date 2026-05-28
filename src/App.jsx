import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Nav } from './components/Nav.jsx';
import { SeoHead } from './components/SeoHead.jsx';
import { Hero } from './components/Hero.jsx';
import { LogoStrip, OutcomesHeadline, ValueProp, HowItWorks } from './components/MarketingSections.jsx';
import {
  AgentOrbit,
  Testimonial,
  Metrics,
  PricingModel,
  ValueLevers,
  CTA,
  Footer,
  Tweaks,
} from './components/ContentSections.jsx';

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
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
};

export default function App() {
  const [tweaks, setTweaks] = React.useState(window.__TWEAKS__);
  const [editMode, setEditMode] = React.useState(false);

  useEffect(() => {
    if (REDUCED_MOTION()) {
      document.querySelectorAll('section:not(.hero-full-viewport) .reveal').forEach((el) => {
        el.classList.add('is-in');
      });
      return undefined;
    }

    const reveals = gsap.utils.toArray('section:not(.hero-full-viewport):not(.logo-strip-section) .reveal');
    const ctx = gsap.context(() => {
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            delay: delayForReveal(el),
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 91%',
              toggleActions: 'play none none none',
              onEnter: () => el.classList.add('is-in'),
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [tweaks]);

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

  /* Lenis + GSAP ticker sync — industry standard for jitter-free smooth scroll */
  useEffect(() => {
    if (REDUCED_MOTION()) return undefined;

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.25,
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.05,
      syncTouch: true,
      syncTouchLerp: 0.08,
      autoRaf: false,
      prevent: (node) => node?.classList?.contains('nav-mobile-panel'),
    });

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

    const onTick = (time) => {
      lenis.raf(time * 1000);
    };

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
    };
  }, []);

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

  /* GSAP scroll accents — transform + opacity only for compositor-friendly motion */
  useEffect(() => {
    if (REDUCED_MOTION()) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '#value-levers .value-levers-grid > article',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#value-levers .value-levers-grid',
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.from('.m-grid > div', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.m-grid',
          start: 'top 84%',
          toggleActions: 'play none none none',
        },
      });

    });

    return () => ctx.revert();
  }, [tweaks]);

  const updateTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.__TWEAKS__ = next;
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SeoHead />
      <Nav />
      <main id="main-content">
        <Hero />
        <LogoStrip />
        <OutcomesHeadline />
        <ValueProp />
        <AgentOrbit />
        <Testimonial />
        <HowItWorks />
        <PricingModel />
        <ValueLevers />
        <Metrics />
        <CTA />
      </main>
      <Footer />
      {editMode && <Tweaks tweaks={tweaks} onChange={updateTweak} />}
    </>
  );
}
