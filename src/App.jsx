import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Nav } from '../site/Nav.jsx';
import { Hero } from '../site/Hero.jsx';
import { LogoStrip, ValueProp, HowItWorks } from '../site/Sections1.jsx';
import {
  AgentOrbit,
  Testimonial,
  CaseStudies,
  Metrics,
  CTA,
  Footer,
  Tweaks,
} from '../site/Sections2.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [tweaks, setTweaks] = React.useState(window.__TWEAKS__);
  const [editMode, setEditMode] = React.useState(false);

  useEffect(() => {
    const vh = window.innerHeight;
    const belowFold = [];
    document.querySelectorAll('.reveal').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top >= vh * 0.95) {
        el.classList.add('reveal-anim');
        belowFold.push(el);
      }
    });
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
    );
    belowFold.forEach((el) => io.observe(el));
    return () => io.disconnect();
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

  /* Global smooth scroll — one RAF via GSAP ticker; keep ScrollTrigger in sync. Skipped for reduced motion. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      /* Slower travel per wheel / touch gesture */
      wheelMultiplier: 0.72,
      touchMultiplier: 0.8,
      anchors: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    const onTick = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    const onLoad = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', onLoad);
    requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });
    return () => {
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

  /* GSAP — scroll-driven accents (cards, metrics, logo strip) */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '#cases .card',
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#cases .cs-grid',
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.from('.m-grid > div', {
        y: 28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.m-grid',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.logo-strip-track span', {
        opacity: 0,
        y: 10,
        duration: 0.45,
        stagger: { each: 0.025, from: 'random' },
        ease: 'sine.out',
        scrollTrigger: {
          trigger: '.logo-strip-section',
          start: 'top 85%',
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
      <Nav />
      <main>
        <Hero tweaks={tweaks} />
        <LogoStrip />
        <ValueProp />
        <HowItWorks />
        <AgentOrbit />
        <Testimonial />
        <CaseStudies />
        <Metrics />
        <CTA />
      </main>
      <Footer />
      {editMode && <Tweaks tweaks={tweaks} onChange={updateTweak} />}
    </>
  );
}
