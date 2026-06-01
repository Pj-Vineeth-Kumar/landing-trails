import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/* Codio Operating System - typography-led scroll narrative.
   Anaphoric "Codio …" lines reveal one-by-one, then climax into a bold payoff.
   Mechanic: per-line in-view fade/rise (framer-motion whileInView) - robust on
   mobile (no scroll-pinning, IntersectionObserver-based, coexists with Lenis).
   "Codio" is the held constant anchor: Instrument Serif italic, igniting to --blue
   on entry. Reuses the site ease, reveal cadence, tokens, and reduced-motion contract. */

const ease = [0.2, 0.7, 0.2, 1];

/* Anchor word "Codio" is the constant; array carries only the predicates */
const LINES = [
  ' is your operating system.',
  ' manages your cases.',
  ' prepares your documents.',
  ' keeps clients informed.',
  ' drives execution.',
  ' prepares your filings.',
  ' fills your forms.',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease } },
};

/* The one expressive flourish - the anchor "ignites" from ink-3 to brand blue */
const anchorVariants = {
  hidden: { color: 'var(--ink-3)' },
  visible: { color: 'var(--blue)', transition: { duration: 0.95, ease } },
};

export const OperatingSystem = () => {
  const reduced = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  return (
    <section id="operating-system" className="sec">
      <div className="container-narrow">
        <div className="reveal section-head-wide">
          <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
            The Codio Operating System
          </div>
          <p className="type-lead os-lead">
            Everything your practice runs on, in one system.
          </p>
        </div>

        <motion.div
          className="os-narrative"
          variants={containerVariants}
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? undefined : 'visible'}
          animate={reduced ? 'visible' : undefined}
          viewport={{ once: true, amount: 0.6 }}
        >
          {LINES.map((predicate) => (
            <motion.p className="os-line" variants={lineVariants} key={predicate}>
              <motion.em className="display os-anchor" variants={anchorVariants}>
                Codio
              </motion.em>
              <span className="os-predicate">{predicate}</span>
            </motion.p>
          ))}
        </motion.div>

        <motion.h2
          className="os-payoff display type-display-cta"
          initial={reduced ? false : { opacity: 0, y: 28 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          animate={reduced ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, ease, delay: 0.12 }}
        >
          <span className="os-payoff-ink">One platform.</span>{' '}
          <em className="os-payoff-em">Complete control.</em>
        </motion.h2>
      </div>
    </section>
  );
};
