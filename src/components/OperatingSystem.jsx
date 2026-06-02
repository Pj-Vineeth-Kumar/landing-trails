import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* "Wave goodbye to" - pain-points the Codio operation removes, shown as a
   rolling vertical carousel: a fixed 3-item window with the CENTER item always
   highlighted (brand-blue gradient). As it advances, every card glides to its
   new slot and one wraps in from the edge, giving continuous-rotation motion
   rather than a slide. Auto-cycles; pauses on block hover; click/focus to center. */

const PAINS = [
  'disorganized workflows',
  'unconfigured software',
  'manual case prep',
  'missed deadlines',
  'lost institutional knowledge',
  'vendor chaos',
  'wasted time',
];

const CYCLE_MS = 2000;
const WINDOW = 1; // items visible on each side of center -> 3 total
const SLOT_EM = 1.22; // vertical spacing between carousel slots (× em, matches CSS)

/** Signed shortest distance from i to active on a ring of length n: (-n/2, n/2]. */
const ringDelta = (i, active, n) => {
  let d = i - active;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
};

export const OperatingSystem = () => {
  const reduced = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );
  const n = PAINS.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (reduced || paused) return undefined;
    timer.current = window.setInterval(() => {
      setActive((i) => (i + 1) % n);
    }, CYCLE_MS);
    return () => window.clearInterval(timer.current);
  }, [reduced, paused, n]);

  return (
    <section id="operating-system" className="sec sec-os os-list-section">
      <div className="container">
        <div className="reveal section-head-wide" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow" style={{ color: 'var(--blue)' }}>
            The Codio Operating System
          </div>
        </div>

        <div
          className="os-list os-goodbye reveal d1"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="os-goodbye-inner">
            <div className="os-goodbye-label">
              <span className="os-goodbye-text display type-display-lg">Wave goodbye to</span>
            </div>

            <div className="os-carousel" role="list" aria-label="Problems Codio removes" aria-live="polite">
            {PAINS.map((pain, i) => {
              const delta = ringDelta(i, active, n);
              const visible = Math.abs(delta) <= WINDOW;
              const isActive = delta === 0;
              return (
                <motion.button
                  type="button"
                  key={pain}
                  role="listitem"
                  className={`os-word os-carousel-item${isActive ? ' is-active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                  aria-hidden={visible ? undefined : 'true'}
                  tabIndex={visible ? 0 : -1}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  initial={false}
                  animate={{
                    y: `calc(${delta} * ${SLOT_EM}em)`,
                    opacity: visible ? Math.max(0.14, 1 - Math.abs(delta) * 0.32) : 0,
                    scale: isActive ? 1 : 1 - Math.abs(delta) * 0.06,
                    pointerEvents: visible ? 'auto' : 'none',
                  }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 260, damping: 30, mass: 0.9 }
                  }
                >
                  {pain}
                </motion.button>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
