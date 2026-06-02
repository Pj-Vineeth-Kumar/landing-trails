# GlobalCodio Design System - "Premium Light Enterprise"

> **Mission:** Translate the premium qualities of dark/gradient references (Saaset, Draftr, Aeline) into a **light, blue, compliance-grade** idiom. Their vivid hero gradients become subtle blue aurora washes; their dark glass becomes light frosted glass; their bold display type informs our Instrument Serif / Inter / JetBrains Mono hierarchy.
>
> **Stack contract:** React + framer-motion + GSAP/ScrollTrigger + Lenis. Everything sizes through `calc(px * var(--ui-scale))` (current `--ui-scale: 0.84`). All new tokens MUST follow this convention. Never hardcode raw px on layout/type that should scale.
>
> **Hard guardrails:** Stay LIGHT. One brand hue (blue). No dark/neon themes, no multi-color accents. Dark surfaces are reserved as *intentional contrast moments* (payoff cell, CTA, footer), not a theme.

---

## 1. Design Principles

1. **One hue, carried everywhere.** Like Draftr's single violet, GlobalCodio rides a single blue (`--blue #1950C6`) through CTAs, gradient stops, *colored* shadows, glows, hairlines and focus rings. Cohesion = premium. Never introduce a second accent color.
2. **Warm-neutral ink, never pure black.** Saaset's biggest "premium tell" is `#1F0D01` (warm near-black) + tight tracking. We keep our slightly-warm `--ink #0a0b0d` and lean on **tight negative tracking (-0.02 to -0.04em)** on serif display for editorial warmth.
3. **Depth through layered soft shadows, not heavy drops.** Adopt the reference 3-stop ambient shadow (`0.6/2.3/10px` offsets at `0.17/0.14/0.02` alpha) verbatim, and *tint* it blue on branded cards so cards "belong" to the brand on white.
4. **Light frosted glass for floating chrome.** Nav, overlay chips, and the hero scrim use `backdrop-filter: blur(20–28px) saturate(140%)` over translucent white - the enterprise read of Aeline/Saaset glass.
5. **Calm, no-overshoot motion.** Springs settle fast (bounce 0–0.2). Reveals are a gentle 10–22px rise + fade on a ~0.08–0.12s stagger. Symmetric house curve `cubic-bezier(.44,0,.56,1)` for hover/color; `cubic-bezier(.22,1,.36,1)` (already in code) for entrances/transforms. Confident, not playful.
6. **Type as hierarchy, not decoration.** Instrument Serif = display/editorial moments only. Inter = all body/UI. JetBrains Mono = eyebrows, indices (01–06), stat numerals, technical labels - the "credibility" layer borrowed from every reference's mono eyebrow system.
7. **Aurora washes, not flat fills.** Color-to-white vertical/radial blue washes sit *behind* product imagery and hero copy (translated from the references' pastel halos) - subtle (8–14% alpha), blurred, never loud.

---

## 2. Color System (Light Mode)

Add these to `:root` after the existing brand tokens. Keep existing `--blue / --blue-ink / --blue-hover / --blue-soft / --ink* / --muted* / --surface* / --line*`.

### 2.1 Brand blue ladder (extend)
| Token | Value | Use |
|---|---|---|
| `--blue` | `#1950C6` | Primary brand / CTA fill (existing) |
| `--blue-ink` | `#0e266c` | Deep stop for gradients, pressed states (existing) |
| `--blue-hover` | `#4a7ee0` | Hover, lighter gradient stop (existing) |
| `--blue-soft` | `#e8eefc` | Tinted surfaces, icon chips (existing) |
| `--blue-bright` | `#3f74e8` | Mid-stop for button top-light gradient |
| `--blue-tint-2` | `#f3f6fe` | Faintest blue surface (alternating sections) |
| `--blue-sky` | `#38c6f6` | Data-viz / chart top stop only (from Aeline) - NOT a UI accent |

### 2.2 Alpha blues (glows, tints, borders) - the "branded depth" kit
| Token | Value | Use |
|---|---|---|
| `--blue-a06` | `rgba(25,80,198,.06)` | Card inner glow, faint tint |
| `--blue-a10` | `rgba(25,80,198,.10)` | Aurora wash, soft halo |
| `--blue-a16` | `rgba(25,80,198,.16)` | Gradient-border stop, glow core |
| `--blue-a24` | `rgba(25,80,198,.24)` | Hairline-blue, link underline |
| `--blue-a40` | `rgba(25,80,198,.40)` | Hero radial-glow core |
| `--blue-glow` | `rgba(25,80,198,.20)` | Colored shadow on primary buttons/cards |
| `--sky-a00` | `rgba(56,198,246,0)` | Chart gradient transparent stop |

### 2.3 Surface tiers (light)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#ffffff` | Page base (existing body) |
| `--surface` | `#eef0f3` | Neutral chip/divider fill (existing) |
| `--surface-2` | `#f7f7f7` | Alternating section bg (existing) |
| `--surface-blue` | `#f3f6fe` (`= --blue-tint-2`) | Branded alternating section |
| `--surface-raised` | `#ffffff` | Cards on tinted sections |
| `--ink` | `#0a0b0d` | Headings, primary text (existing) |
| `--ink-2` | `#282b31` | Strong body / nav links (existing) |
| `--ink-3` | `#3a4153` | Secondary body (existing) |
| `--muted` | `#5b616e` | Muted text (existing) |
| `--muted-2` | `#8a8f99` | Disabled / placeholder (existing) |

### 2.4 Hairlines & glass
| Token | Value | Use |
|---|---|---|
| `--line` | `rgba(91,97,110,.18)` | Default hairline (existing) |
| `--line-2` | `rgba(91,97,110,.28)` | Stronger hairline (existing) |
| `--line-blue` | `rgba(25,80,198,.18)` | Branded card border on hover/active |
| `--line-on-dark` | `rgba(255,255,255,.08)` | Hairline on dark surfaces (existing usage) |
| `--glass-fill` | `rgba(255,255,255,.62)` | Frosted nav / chip surface |
| `--glass-fill-strong` | `rgba(255,255,255,.78)` | Scrolled nav |
| `--glass-border` | `rgba(255,255,255,.55)` | Glass top-edge highlight |
| `--glass-blur` | `blur(24px) saturate(140%)` | Standard frost |

### 2.5 Dark contrast surfaces (intentional moments only)
| Token | Value | Use |
|---|---|---|
| `--ink` (as bg) | `#0a0b0d` | CTA band, payoff cell, footer |
| `--ink-2` (as bg) | `#282b31` | Dark cards (cert badges) |
| Dark eyebrow | `rgba(255,255,255,.42)` | Mono meta on dark |

---

## 3. Gradient & Depth Library

Drop these as utility tokens/classes. All blur/offset values use `calc(... * var(--ui-scale))`.

### 3.1 Hero aurora / mesh wash
A subtle blue aurora behind hero copy - the light translation of the references' vivid hero gradients. Layer 2–3 soft radials; keep total perceived tint under ~12%.
```css
.hero-aurora{
  position:absolute; inset:0; z-index:0; pointer-events:none;
  background:
    radial-gradient(60% 50% at 22% 18%, var(--blue-a10) 0%, transparent 60%),
    radial-gradient(50% 45% at 82% 12%, rgba(56,198,246,.08) 0%, transparent 62%),
    radial-gradient(70% 60% at 50% 100%, var(--blue-a06) 0%, transparent 70%);
  filter:blur(calc(8px * var(--ui-scale)));
  -webkit-mask-image:linear-gradient(180deg,#000 70%,transparent 100%);
          mask-image:linear-gradient(180deg,#000 70%,transparent 100%);
}
```

### 3.2 Blue radial glow (behind screenshots / cards / CTA)
Generalize the existing `.sec-cta-glow` into a reusable token.
```css
.blue-glow{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:min(calc(900px * var(--ui-scale)),100%);
  height:calc(420px * var(--ui-scale));
  background:radial-gradient(ellipse 60% 50% at 50% 50%, var(--blue-a16), transparent 70%);
  filter:blur(calc(48px * var(--ui-scale)));
  pointer-events:none;
}
```

### 3.3 Color-to-white halo (behind product UI / dashboard)
```css
.media-halo{ /* place behind hero dashboard / OS visuals */
  background:linear-gradient(180deg, var(--blue-a16) 0%, #ffffff 100%);
}
```

### 3.4 Glass panels
```css
.glass{
  background:var(--glass-fill);
  -webkit-backdrop-filter:var(--glass-blur);
          backdrop-filter:var(--glass-blur);
  border:1px solid var(--glass-border);
  box-shadow:inset 0 1px 0 0 rgba(255,255,255,.55),
             0 calc(6px * var(--ui-scale)) calc(24px * var(--ui-scale)) -calc(14px * var(--ui-scale)) rgba(11,19,36,.12);
}
.glass--strong{ background:var(--glass-fill-strong); }
```

### 3.5 Gradient text accent (use sparingly - hero/CTA emphasis word)
```css
.text-grad-blue{
  background:linear-gradient(120deg, var(--blue-ink) 0%, var(--blue) 45%, var(--blue-hover) 100%);
  -webkit-background-clip:text; background-clip:text;
  -webkit-text-fill-color:transparent; color:transparent;
}
```
Prefer italic Instrument Serif in `--blue` for emphasis words; reserve gradient text for ONE word in hero/CTA max.

### 3.6 Card inner glow + branded shadow
```css
/* 3-stop ambient (neutral) - copy verbatim from references */
--shadow-ambient:
  0 calc(0.6px * var(--ui-scale)) calc(1.57px * var(--ui-scale)) calc(-1.5px * var(--ui-scale)) rgba(11,19,36,.17),
  0 calc(2.29px * var(--ui-scale)) calc(5.95px * var(--ui-scale)) calc(-3px * var(--ui-scale)) rgba(11,19,36,.10),
  0 calc(10px * var(--ui-scale)) calc(26px * var(--ui-scale)) calc(-4.5px * var(--ui-scale)) rgba(11,19,36,.04);

/* branded lift (hover / featured) - blue-tinted */
--shadow-blue-lift:
  0 calc(12px * var(--ui-scale)) calc(40px * var(--ui-scale)) calc(-16px * var(--ui-scale)) var(--blue-glow),
  0 calc(2px * var(--ui-scale)) calc(6px * var(--ui-scale)) calc(-3px * var(--ui-scale)) rgba(11,19,36,.10);

/* card inner glow */
.card-glow{ box-shadow: var(--shadow-ambient), inset 0 1px 0 0 rgba(255,255,255,.6); }
```

### 3.7 Divider / edge-fade gradients
```css
/* section seam fade-to-white */
.fade-to-white{ background:linear-gradient(180deg, var(--surface-2) 0%, rgba(255,255,255,0) 100%); }
/* centered blue hairline glow */
.rule-blue{ height:1px; background:linear-gradient(90deg, transparent, var(--blue-a24) 50%, transparent); }
/* marquee edge masks already exist: .logo-strip-fade - reuse pattern */
```

### 3.8 Data-viz fill (Metrics / charts)
```css
.chart-fill-blue{ background:linear-gradient(180deg, var(--sky-a00) 0%, var(--blue-ink) 100%); }
```

---

## 4. Typography Scale

**Families (already loaded):** Instrument Serif (`--display`), Inter (`--sans`), JetBrains Mono (`--mono`).

**When to use which:**
- **Instrument Serif** → display only: hero H1, section H2 (`type-display-*`), CTA headline, big card titles, payoff lines, emphasis italic words. Tight tracking `-0.02 to -0.04em`, line-height `1.0–1.08`.
- **Inter** → all body, leads, nav (note: current nav uses serif `.navlink` - keep that editorial choice), buttons, descriptions, captions. Weight 430–500 body, 600–650 buttons/labels.
- **JetBrains Mono** → eyebrows, `01–06` indices, stat numerals (tabular-nums), pills/tags, technical meta. Uppercase + `+0.11–0.12em` tracking on eyebrows; `0em` on numerals.

### 4.1 Scale (extends existing tokens - reuse them; new ones marked NEW)
| Token | clamp() value | Family | Weight | Tracking | Line-height | Use |
|---|---|---|---|---|---|---|
| `--text-display-hero` | `clamp(34px,5.8vw,88px)` ×scale (existing) | serif | 500 | -0.03em | 1.02 | Hero H1 |
| `--text-display-xl` | `clamp(44px,6.5vw,96px)` ×scale | serif | 500 | -0.03em | 1.02 | Big section H2 |
| `--text-display-lg` | `clamp(40px,5.5vw,80px)` ×scale | serif | 500 | -0.028em | 1.04 | Section H2 |
| `--text-display-cta` | `clamp(48px,7vw,96px)` ×scale | serif | 500 | -0.03em | 1.02 | CTA headline |
| `--text-display-md` | `clamp(28px,3vw,44px)` ×scale | serif | 500 | -0.025em | 1.08 | FAQ Q / sub-display |
| `--text-display-metric` | `clamp(48px,6.4vw,64px)` ×scale | mono | 500 | -0.01em | 1.0 | Stat numerals |
| `--text-display-card` | `34px` ×scale | serif | 500 | -0.02em | 1.1 | Card titles |
| `--text-lead` | `clamp(13.5px,1.04vw,16px)` ×scale | sans | 450 | -0.01em | 1.55 | Lead paragraphs |
| `--text-body` | `15.5px` ×scale | sans | 450 | -0.005em | 1.55 | Body |
| `--text-body-sm` | `14.5px` ×scale | sans | 450 | 0 | 1.5 | Secondary |
| `--text-eyebrow` (NEW) | `11.5px` ×scale | mono | 600 | +0.11em | 1.4 | Eyebrow (matches `.eyebrow`) |
| `--text-caption` (NEW) | `10.5px` ×scale | mono | 550 | +0.06em | 1.4 | Meta / labels |

**Hero "lit" pattern:** H1 in serif, with ONE emphasis word in italic serif `color:var(--blue)` or `.text-grad-blue`. Eyebrow above in mono. Lead below in Inter 450, max-width ~`1100px ×scale`.

**OpenType:** keep `font-feature-settings:"liga" 1,"kern" 1` on `.display`; add `"tnum" 1` on `.mono` numerals (already `tabular-nums`).

---

## 5. Spacing & Layout

### 5.1 Containers (existing - keep)
- `--container-max: 1320px` (primary)
- `--container-narrow-max: 900px` (centered copy)
- Narrow text measure for hero/section copy: cap leads at `~720–900px ×scale`.
- `--container-px: 32px ×scale` (20px ≤720, 18px ≤480).

### 5.2 Section rhythm (existing - keep)
- `--sec-py: 110px ×scale` (86 ≤768, 67 ≤480)
- `--sec-py-cta: 134px ×scale`
- Metrics band tighter: `56px ×scale`.
- **Rhythm rule:** airy whitespace between sections is the premium cue (references use 60–100px). Don't compress.

### 5.3 Space scale (existing 2xs→7xl, keep). Gap ladder in use: 8/12/16/20/24/28/32/40/48/56/64/80px ×scale.

### 5.4 Grid / bento / asymmetry
- **3-col card grids** for Pillars, AgentCatalog, services.
- **4-col stat grid** for Metrics (`.m-grid`), collapses 2-col ≤900, 1-col ≤480.
- **Bento** (OperatingSystem `.os-bento`): 4-col, `grid-auto-rows: minmax(148px,auto)`, hero cell `span 2×2`, wide tiles `span 2`, payoff `span 2`. Keep - it's the strongest layout. 2-col ≤900, 1-col ≤768.
- **Asymmetry:** Certifications uses `1fr 1.4fr` split (text / panel) - apply this "sticky narrow head + wider content" pattern to feature showcases. AgentOrbit centers a radial diagram.
- **Cards radius ladder:** 24px (large/feature/bento-hero) → 16px (`.card`, bento cells) → 14px (cert badge) → 12px (visual frames) → 10px (icon chips) → 999px (pills/buttons). Nested children should use `border-radius:inherit` to keep concentric corners.

---

## 6. Component Specs

### 6.1 Buttons (`.btn` exists - refine)
Base: pill `border-radius:56px`, Inter 650, `15px ×scale`, `padding:16px 28px ×scale`, gap 8px, icon `14px` slides `translateX(3px)` on hover (existing - keep). Transition curve `cubic-bezier(.22,1,.36,1)` @ .35s.

| Variant | Resting | Hover | Notes |
|---|---|---|---|
| `.btn-primary` | `bg:var(--blue)`, white text + **top-light gradient + colored shadow** (NEW) | lift -1px, deepen shadow | `background:linear-gradient(180deg,var(--blue-bright) 0%,var(--blue) 100%); box-shadow:0 calc(8px*s) calc(20px*s) -calc(6px*s) var(--blue-glow), inset 0 1px 0 rgba(255,255,255,.22);` On hover add `transform:translateY(-1px)` + `box-shadow` to `0 12px 26px -8px var(--blue-glow)`. |
| `.btn-dark` | `bg:var(--ink)` white | `bg:var(--ink-2)` | contrast CTA on light |
| `.btn-surface` | `bg:var(--surface)` ink | `bg:var(--blue-hover)` white | secondary |
| `.btn-outline` | transparent, 1px ink | fill ink/white | ghost |
| `.btn-blue-outline` | transparent, 1px blue | fill blue/white | branded ghost |
| `.btn-glass` (NEW) | `.glass` fill, ink text | brighten fill | over imagery/hero |

Add `:focus-visible{ outline:2px solid var(--blue); outline-offset:2px; }` to all buttons.

### 6.2 Cards (`.card` exists - enrich)
- Base: `bg:#fff; border:1px solid var(--line); border-radius:16px ×scale; padding:32px ×scale`.
- **Resting shadow:** add `box-shadow:var(--shadow-ambient)` (currently none).
- **Hover:** `transform:translateY(-3px); border-color:var(--line-blue); box-shadow:var(--shadow-blue-lift);` @ .4s `cubic-bezier(.22,1,.36,1)`.
- **Featured / highlighted card:** `box-shadow:0 calc(10px*s) calc(50px*s) var(--blue-a10)` + 1px `--line-blue` border.
- **Gradient-border card** (for emphasis, e.g. middle pricing tier / OS hero): wrap in a `padding:1px` element with `background:linear-gradient(140deg,var(--blue-a24),var(--line))` and inner `background:#fff; border-radius:inherit`.
- `.card-dark` (existing): `bg:var(--ink-2)`, hairline `--line-on-dark` - reserved for cert badges / dark moments.

### 6.3 Pills / badges (`.pill`, `.cert-pill`, `.eyebrow` exist - keep)
- `.pill`: mono 12.5px, 999px radius, 1px `--line-2`, white fill. Hover (NEW): `border-color:var(--line-blue); background:var(--blue-tint-2)`.
- **Trust badge** (hero): pill with avatar-stack + mono caption (Saaset pattern) - add beside hero CTAs.
- **"Soon" pill** (`.value-lever-soon-pill`) exists - keep.
- **Status dot:** `livepulse` animation exists for "live" indicators.

### 6.4 Nav glass (`.site-nav` - extend desktop to match existing mobile glass)
The mobile nav already frosts (`blur(14px) saturate(140%)`). **Promote glass to desktop:**
```css
.site-nav:not(.is-scrolled){
  background:var(--glass-fill);
  backdrop-filter:var(--glass-blur); -webkit-backdrop-filter:var(--glass-blur);
  border:1px solid var(--glass-border);
  box-shadow:inset 0 1px 0 0 rgba(255,255,255,.55),
             0 calc(6px*s) calc(24px*s) -calc(14px*s) rgba(11,19,36,.12);
}
.site-nav.is-scrolled{ background:var(--glass-fill-strong); }
```
Keep the existing scroll-shrink logic (logo + padding interpolation). Nav links stay serif `.navlink`.

### 6.5 Inputs (define - none exist yet)
```css
.input{
  width:100%; padding:calc(12px*s) calc(16px*s);
  border-radius:calc(10px*s); background:#fff;
  border:1px solid var(--line-2); font:inherit; color:var(--ink);
  transition:border-color .2s, box-shadow .2s;
}
.input::placeholder{ color:var(--muted-2); }
.input:focus-visible{
  outline:none; border-color:var(--blue);
  box-shadow:0 0 0 3px var(--blue-a16); /* accessible blue focus ring */
}
```

### 6.6 Icon chip (`.agent-icon` exists - keep) `40px`, radius 10px, `bg:var(--blue-soft)`, `color:var(--blue)`.

---

## 7. Motion System

### 7.1 Easing tokens
| Token | Curve | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.22,1,.36,1)` | Entrances, transforms, lifts (existing in code) |
| `--ease-house` | `cubic-bezier(.44,0,.56,1)` | Color/hover, symmetric (from Draftr) |
| `--ease-nav` | `cubic-bezier(.2,.7,.2,1)` | Nav shrink (existing) |

### 7.2 Durations
- Micro / color / hover: `.2–.3s`
- Entrance / transform / card lift: `.35–.4s` (existing)
- Large reveal / hero: `.6–1.0s`

### 7.3 Reveal pattern (existing `.reveal` - keep & standardize)
- Start: `opacity:0; translate3d(0,22px,0)`; → `is-in`: `opacity:1; translate(0)`.
- For smaller items use 10px rise (references' dominant). `will-change` set during animation, reset after (already done).
- **Stagger:** base `0.08–0.12s` step; hero cascade uses delays `0 / 0.4 / 0.5 / 0.8` (Saaset pattern). framer-motion: `staggerChildren:0.1, delayChildren:0.1`.

### 7.4 Springs (framer-motion)
- Default: `{ type:'spring', bounce:0.2, ... }` - gentle, fast-settling.
- Precise UI: `{ stiffness:400, damping:80, mass:1 }`.
- No-overshoot (enterprise, dark moments): `bounce:0`.
- Icon emphasis pop: `scale 1→1.15` spring (keep restrained vs references' 1.3).

### 7.5 GSAP / ScrollTrigger
- Drive scroll reveals via ScrollTrigger toggling `.is-in` (CSS does the transition) - keeps it cheap.
- **Parallax:** subtle only. Hero aurora / dashboard `y` translate at `0.1–0.2` scrub factor. Pin nothing except optionally the bento intro. Marquees (`marquee` keyframe) stay CSS.
- AgentOrbit: keep `orbit` keyframe; allow GSAP to scrub orbit speed on scroll.

### 7.6 Hover micro-interactions
- Buttons: `translateY(-1px)` + deepen colored shadow; icon `translateX(3px)`.
- Cards: `translateY(-3px)` + blue-tinted shadow + `--line-blue` border.
- Links: color-only `.2s` via `--ease-house`; underlines grow from `--blue-a24`.
- Pills: border → `--line-blue`, fill → `--blue-tint-2`.

### 7.7 `prefers-reduced-motion`
Already gated (`.reveal` only animates under `no-preference`). Extend the rule:
```css
@media (prefers-reduced-motion: reduce){
  *{ animation-duration:.001ms !important; animation-iteration-count:1 !important;
     transition-duration:.001ms !important; scroll-behavior:auto !important; }
  .logo-strip-track, .orbit-ring [class*=orbit]{ animation:none !important; }
  .reveal{ opacity:1 !important; transform:none !important; }
}
```
Lenis should be disabled when reduced-motion is set.

---

## 8. Section-by-Section Direction

| Section (id / component) | Upgrade |
|---|---|
| **Nav** (`.site-nav`) | Promote the mobile glass to desktop (§6.4). Keep serif navlinks + scroll-shrink. Add `:focus-visible` rings. CTA = `.btn-primary` with top-light gradient. |
| **Hero** (`.hero-full-viewport`, `Hero.jsx`) | Add `.hero-aurora` layer (§3.1) behind copy. H1 serif with ONE italic-blue emphasis word. Mono eyebrow pill above. Add avatar-stack **trust badge** beside CTAs. Dashboard sits over `.media-halo` + `.blue-glow`. CTAs: primary (gradient) + glass/ghost secondary. |
| **LogoStrip** (`.logo-strip-section`) | Keep edge-fade marquee - it already matches the reference pattern. Optionally desaturate logos to `--ink-3` (done) and lift opacity to 1 on row hover (pause animation on hover). |
| **OutcomesHeadline** (`.outcomes-headline-section`) | Editorial serif statement on white. Add a `.rule-blue` divider above. Keep wide section head. |
| **Pillars / ValueProp** (`#pillars`) | 3-col `.card` grid with new `--shadow-ambient` resting + blue hover lift. `--blue-soft` icon chips. Mono `01–03` indices on each card (numbered-card pattern). |
| **AgentOrbit** (`#platform`, dark) | Intentional dark moment. Apply blue radial glow behind orbit center; orbit rings = `--line-on-dark`. Mono ring legend. Scrub orbit speed on scroll (GSAP). Stat callouts in mono. |
| **Certifications** (`#certifications`) | Keep `1fr 1.4fr` asymmetric split. Cert badges = `.card-dark` with hover lift (exists). Add `.rule-blue` between badge grid and pills. Footnote link uses `--blue-a24` underline. |
| **AgentCatalog** (`#agents`, surface-2) | 3-col card grid (2-col ≤1100, 1-col ≤900 - exists). Add gradient-border on any "featured" agent. Cards get ambient shadow + blue hover. |
| **Audiences** (`.audience-grid`) | 2–3 col cards; alternate one tile onto `--surface-blue` for rhythm. Mono role labels. |
| **FAQ / HowItWorks** (`#how`, surface-2) | Accordion with spring expand (bounce 0.2). Q in serif `--text-display-md`, A in Inter. Chevron rotate `.25s` via `--ease-house`. Hairline `--line` rows. |
| **OperatingSystem bento** (`#operating-system`, `.os-bento`) | Strongest layout - polish, don't rebuild. Hero cell already has `linear-gradient(145deg,#fff,var(--blue-soft))` - keep + add `.blue-glow` behind it. Visual frame keeps blue-tinted shadow (exists). Layer bars use blue gradient (exists). Payoff cell stays dark with italic `--blue-hover` emphasis. Add ambient shadow to all cells at rest; blue lift on hover (partly exists). |
| **ValueLevers** (`#value-levers`, white, ruled) | Keep 2-col grouped columns. Group heads = mono blue label + `--line` underbar. Lever cards: ambient shadow, blue hover; "soon" cards stay dashed/flat (exists). |
| **Metrics** (`#metrics`, `.m-grid`) | 4-col stat band, mono numerals `--text-display-metric`. Optional `.chart-fill-blue` micro-sparkline behind one stat (Aeline data-viz translation). Mono uppercase tag row below (exists). |
| **CTA** (`#cta`, `.sec-cta`) | Generalize `.sec-cta-glow` → `.blue-glow`. Headline serif with gradient/italic emphasis word. Primary (gradient) + secondary buttons. Consider full-bleed `--ink` dark band for max contrast (optional, intentional). |
| **Footer** (`Footer`) | Multi-column link lists, brand, legal. Top hairline `--line`. Mono section labels. Sign-off row with status dot. Keep light; no dark unless paired with CTA dark band. |

---

## 9. Accessibility & Responsiveness

### 9.1 Color & contrast
- Body text `--ink-3 #3a4153` on white ≈ 9:1 - pass. `--muted #5b616e` ≈ 5.6:1 - use for ≥14px only. Never put `--muted-2` on white for body copy.
- `--blue #1950C6` on white ≈ 6.4:1 - OK for text/links and large UI. White on `--blue` ≈ 6.4:1 - OK for button labels.
- Don't rely on the aurora/glow for any meaning; it's decorative (`aria-hidden`, `pointer-events:none`).

### 9.2 Focus & keyboard
- Global `:focus-visible{ outline:2px solid var(--blue); outline-offset:2px; }` on links, buttons, inputs, accordion triggers. Inputs additionally get the `0 0 0 3px var(--blue-a16)` ring.
- Skip link exists (`.skip-link`) - keep; ensure it lands on `<main>`.
- Accordion: `aria-expanded`, `aria-controls`; chevron purely decorative.
- Nav mobile panel: trap focus, `Esc` closes, restore focus to toggle.

### 9.3 Motion
- All decorative motion gated behind `prefers-reduced-motion` (§7.7). Marquee, orbit, parallax, Lenis all disable.
- No autoplay motion that loops faster than ~every 5s near text.

### 9.4 Touch & responsiveness
- Min hit target `44×44` (nav toggle/close already meet this).
- Breakpoints already in system: **1100 / 960 / 900 / 768 / 480**. Honor them; collapse grids (bento 4→2→1, m-grid 4→2→1, value-levers/audience/catalog → 1).
- Respect `env(safe-area-inset-*)` (already used in nav).
- `overflow-x:clip` on root/sections (exists) - keep to prevent aurora/glow bleed causing horizontal scroll. Glows must be `pointer-events:none` and masked.

### 9.5 Glass fallback
- For browsers without `backdrop-filter`, fall back to opaque `--glass-fill-strong` (`@supports not (backdrop-filter:blur(1px))`). Keep text contrast valid on the fallback.

### 9.6 `--ui-scale` discipline
- Every new px-based size for layout/type/spacing MUST be `calc(px * var(--ui-scale))`. Exceptions: hairline `1px` borders, `1.5px` nav lines, blur radii may scale but are not load-bearing. Glow blur values scale for visual consistency.

---

## Implementation checklist (priority order)
1. Add new tokens (§2.2–2.5, §3.6, §7.1) to `:root` in `global.css`.
2. Refine `.btn-primary` (gradient + colored shadow + focus ring) and add resting `--shadow-ambient` + blue hover lift to `.card`.
3. Promote desktop nav glass (§6.4).
4. Add `.hero-aurora` + `.media-halo` + `.blue-glow` to Hero; trust badge.
5. Generalize `.sec-cta-glow` → `.blue-glow`; apply to OS hero + CTA.
6. Add global `:focus-visible` + reduced-motion block (§7.7, §9.2).
7. Section polish per §8.

**Key files:** `/Users/pjvineethkumar/Desktop/Trailers/src/styles/global.css` (tokens + most classes), `/Users/pjvineethkumar/Desktop/Trailers/src/components/Hero.jsx`, `/Users/pjvineethkumar/Desktop/Trailers/src/components/Nav.jsx`, `/Users/pjvineethkumar/Desktop/Trailers/src/components/MarketingSections.jsx`, `/Users/pjvineethkumar/Desktop/Trailers/src/components/ContentSections.jsx`, `/Users/pjvineethkumar/Desktop/Trailers/src/components/OperatingSystem.jsx`.