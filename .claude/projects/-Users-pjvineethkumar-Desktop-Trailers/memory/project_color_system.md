---
name: project-color-system
description: Complementary color palette added in June 2025 - teal, violet, amber, rose, warm neutrals - to reduce blue dominance
metadata:
  type: project
---

In June 2025 a three-accent palette was introduced into global.css and tokens.js inspired by Prismo's warm-neutral + vivid-accent design system. The primary brand blue (#1950C6) was intentionally preserved unchanged.

**New tokens added to :root:**
- `--teal` / `--teal-bright` / `--teal-soft` / `--teal-a12` / `--teal-a20` / `--teal-glow` - used for: section eyebrow dots, process rail, timeline nodes, step icons, badges (delivered, live, active items), status table, detail editions, some card features
- `--violet` / `--violet-bright` / `--violet-soft` / `--violet-a12` / `--violet-a20` / `--violet-glow` - used for: .feature-card--featured, .about-founder-aside, CTA glow (paired with blue), card-grad-border, cms-passport-vault, forms-compare--featured
- `--amber` / `--amber-bright` / `--amber-soft` / `--amber-a12` / `--amber-a20` / `--amber-glow` - used for: agent-panel-stat, day-step-dot "is-now", rfp problem stake numbers, network assignment deadlines, day-payoff-eyebrow, cms-bento-hero-label
- `--rose` / `--rose-soft` / `--rose-a10` - used for blocked/error row backgrounds in audit log
- `--warm-surface` (#f6f4f2) / `--warm-surface-2` (#f1eeeb) / `--warm-border` - used for: .page-hero bg, .sec-os, several panel/card backgrounds that previously used --blue-tint-2

**Why:** Too much blue throughout - every accent, badge, eyebrow, featured card, and stat used the same #1950C6. The new palette creates hierarchy: blue stays primary CTA/link color, teal = trust/data/live indicators, violet = premium/featured states, amber = urgency/callouts.

**How to apply:** When adding new UI elements, choose accent by semantic role: teal for "active/confirmed/data" states, violet for "premium/featured", amber for "time-sensitive/highlight", keep blue for primary interactive actions (buttons, links, focus rings).
