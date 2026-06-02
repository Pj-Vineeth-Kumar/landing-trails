# GlobalCodio Website - Engineering Handoff Document

> **Project:** GlobalCodio Marketing Website
> **Owner:** Umesh Vaidyamath (Founder & CEO)
> **Domain:** globalcodio.ai
> **Status:** Ready for Development
> **Companion Document:** `globalcodio-website-copy.md` (contains all page copy)

---

## 📋 TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Tech Stack Recommendations](#2-tech-stack-recommendations)
3. [Site Architecture & Navigation](#3-site-architecture--navigation)
4. [Page Inventory & Specs](#4-page-inventory--specs)
5. [Brand Guidelines](#5-brand-guidelines)
6. [Design System](#6-design-system)
7. [Component Library](#7-component-library)
8. [Functional Requirements](#8-functional-requirements)
9. [SEO Requirements](#9-seo-requirements)
10. [Performance & Accessibility](#10-performance--accessibility)
11. [Integrations Required](#11-integrations-required)
12. [Content Management](#12-content-management)
13. [Launch Checklist](#13-launch-checklist)
14. [Deliverables](#14-deliverables)

---

## 1. PROJECT OVERVIEW

### What We're Building
A marketing website for **GlobalCodio** - a next-generation technology operation for immigration law firms. The site has 12 pages and serves as the primary lead-generation channel for the business.

### Primary Business Goal
Drive prospects to book a **Free Tech Audit** (30-minute discovery call). Every page should funnel toward this conversion.

### Target Audiences
1. **Immigration law firms** (solo, mid-size, large) - primary
2. **Corporate immigration departments** (in-house teams at mid-to-large employers) - secondary

### Tone & Personality
- Confident but not arrogant
- Premium and credible (founder-led, enterprise-grade)
- Warm partnership feel (not transactional)
- Clear and direct (no jargon for jargon's sake)

---

## 2. TECH STACK RECOMMENDATIONS

The site is content-heavy with form submissions, calendar embeds, and a conversion focus. Recommended stacks (engineer's choice based on team familiarity):

### Option A - Modern Static (Recommended)
- **Framework:** Next.js 14+ (App Router) or Astro
- **Styling:** Tailwind CSS
- **Hosting:** Vercel or Netlify
- **CMS (optional, v2):** Sanity, Contentful, or Notion-based
- **Forms:** Vercel/Netlify Forms or Formspree
- **Analytics:** Google Analytics 4 + Plausible (optional)

### Option B - WordPress
- **Theme:** Custom theme or premium starter (Astra, GeneratePress)
- **Page Builder:** Bricks Builder or native blocks (avoid Elementor bloat)
- **Hosting:** Kinsta, WP Engine, or Cloudways
- **Forms:** Gravity Forms or WP Forms

### Option C - Webflow
- **Best for:** Marketing teams who want to update content without engineering
- **Hosting:** Webflow native
- **Forms:** Webflow native + Zapier for routing

### My Recommendation
**Next.js + Tailwind on Vercel** - best performance, easiest to scale, future-proof for app integrations, and the founder of the company has technical background.

---

## 3. SITE ARCHITECTURE & NAVIGATION

### URL Structure

```
globalcodio.ai/                              → Home
globalcodio.ai/platform                      → Platform Overview (CodioCMS + CodioForms)
globalcodio.ai/platform/codiocms             → CodioCMS detail (Phase 2)
globalcodio.ai/platform/codioforms           → CodioForms detail (Phase 2)
globalcodio.ai/ai-agents                     → Codio AI Agents
globalcodio.ai/network                       → CodioNetwork
globalcodio.ai/services                      → Services Overview
globalcodio.ai/services/rfp-response         → RFP Response Service
globalcodio.ai/security                      → Security & Compliance
globalcodio.ai/for-law-firms                 → For Immigration Law Firms
globalcodio.ai/for-corporate                 → For Corporate Immigration Teams
globalcodio.ai/about                         → About
globalcodio.ai/letter-from-founder           → Letter from the Founder
globalcodio.ai/tech-audit                    → Free Tech Audit (conversion page)
globalcodio.ai/privacy                       → Privacy Policy (standard)
globalcodio.ai/terms                         → Terms of Service (standard)
```

### Primary Navigation (Header)

```
Logo  |  Platform  |  AI Agents  |  Network  |  Services  |  Security  |  About  |  [Book Free Tech Audit]
```

**Header behavior:**
- Sticky on scroll (translucent background with blur effect)
- "Book Free Tech Audit" button is the primary CTA - gold/accent color, prominent
- "Platform" and "Services" have dropdown sub-menus
- Mobile: hamburger menu with full-screen drawer

### Footer Structure

```
─────────────────────────────────────────────────────────────────
Column 1: Products    Column 2: Services    Column 3: For You    Column 4: Contact
─────────────────────────────────────────────────────────────────
CodioCMS              Migration             Law Firms            info@globalcodio.ai
CodioForms            Configuration         Corporate Teams      LinkedIn
Codio AI Agents       IT Support            Security             Book a Call
CodioNetwork          RFP Response          About
                      Managed Operations    Letter from Founder
─────────────────────────────────────────────────────────────────

Footer bottom bar:
"Win Cases. We'll Handle All the Technology."
"AI Agents for Global Immigration. Deployed and Managed."
© 2026 GlobalCodio. All rights reserved.  |  Privacy  |  Terms
```

---

## 4. PAGE INVENTORY & SPECS

All page copy lives in the companion document: **`globalcodio-website-copy.md`**

### Phase 1 - MVP Launch (Build First)

| # | Page | URL | Priority | Notes |
|---|---|---|---|---|
| 1 | Home | `/` | Critical | Hero, founder band, 5 pillars, economics, audiences, CTA |
| 2 | Free Tech Audit | `/tech-audit` | Critical | Calendar embed + FAQ |
| 3 | About | `/about` | Critical | Founder story + leadership |
| 4 | Letter from the Founder | `/letter-from-founder` | Critical | Long-form letter, single-column reading layout |
| 5 | Security & Compliance | `/security` | Critical | Trust page - corporate buyers need this |

### Phase 2 - Within 30 Days

| # | Page | URL | Notes |
|---|---|---|---|
| 6 | Platform Overview | `/platform` | CodioCMS + CodioForms in one page |
| 7 | Codio AI Agents | `/ai-agents` | 8 agent cards + comparison table |
| 8 | Services Overview | `/services` | 6 service layers |

### Phase 3 - Within 60 Days

| # | Page | URL | Notes |
|---|---|---|---|
| 9 | CodioNetwork | `/network` | Vague-by-design for v1 |
| 10 | RFP Response Service | `/services/rfp-response` | Detail page |
| 11 | For Law Firms | `/for-law-firms` | Audience landing |
| 12 | For Corporate Teams | `/for-corporate` | Audience landing |

### Required Standard Pages
- Privacy Policy
- Terms of Service
- 404 Page (custom design)
- (Optional) Cookie consent banner if EU traffic expected

---

## 5. BRAND GUIDELINES

### Brand Identity

| Element | Value |
|---|---|
| **Company Name** | GlobalCodio |
| **Primary Tagline** | Win Cases. We'll Handle All the Technology. |
| **Brand Tagline** | AI Agents for Global Immigration. Deployed and Managed. |
| **Founder** | Umesh Vaidyamath, Founder & CEO |
| **Founder Background** | Founded INSZoom (1999), sold 2020 |
| **Product Suite** | CodioCMS · CodioForms · Codio AI Agents · CodioNetwork |

### Logo

- **Status:** Logo asset to be provided by Umesh
- **Lockups needed:**
  - Primary horizontal (light + dark backgrounds)
  - Stacked (for square applications)
  - Icon-only (favicon, social, mobile header)
- **Minimum size:** 24px tall for icon, 120px wide for wordmark
- **Clearspace:** Equal to the "G" height around all sides

### Voice & Tone Rules

- ✅ Use confident, declarative sentences ("We deploy.", "We manage.", "We handle.")
- ✅ Lead with outcomes, follow with features
- ✅ Speak to the firm, not "law firms" (use "you" and "your firm")
- ✅ Use immigration industry language correctly (USCIS, I-130, EB-5, etc.)
- ❌ Avoid generic AI hype ("revolutionary," "cutting-edge," "game-changing")
- ❌ Avoid bureaucratic legal-tech jargon
- ❌ Don't promise things our security posture doesn't actually support

---

## 6. DESIGN SYSTEM

### Color Palette

```
/* Primary Colors */
--navy-deep:    #0A1628    /* Primary background, dark sections */
--navy-mid:     #0F1E35    /* Secondary dark surfaces */
--navy-light:   #1A2A3A    /* Body text on light backgrounds */

/* Accent - Gold */
--gold:         #C9A84C    /* Primary CTA, accents, dividers */
--gold-light:   #DFC07A    /* Highlights, hover states */
--gold-pale:    #F5E9CC    /* Subtle backgrounds, badges */

/* Neutrals */
--white:        #FFFFFF
--off-white:    #F4F6F9    /* Page sections, alternating backgrounds */
--grey-light:   #E2E8F0    /* Borders, dividers */
--grey-mid:     #8A9BB0    /* Secondary text on dark */
--grey-text:    #3D5068    /* Body text secondary */

/* Status / Semantic */
--success:      #5EDA9E    /* Savings stat, positive metrics */
--warning:      #E8B544    /* Pending status (e.g., GDPR aligned) */
--error:        #D75A5A    /* Errors, form validation */
```

### Typography

**Display Font (Headlines):** Cormorant Garamond - serif, premium, distinctive
**Body Font (UI & Body):** DM Sans - clean, modern sans-serif

**Font Loading:**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
```

**Type Scale:**

| Use | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| Hero H1 | Cormorant Garamond | 72px / 4.5rem | 700 | 1.1 |
| Page H1 | Cormorant Garamond | 56px / 3.5rem | 700 | 1.15 |
| Section H2 | Cormorant Garamond | 36px / 2.25rem | 600 | 1.2 |
| Sub-section H3 | Cormorant Garamond | 24px / 1.5rem | 600 | 1.3 |
| Card Title H4 | DM Sans | 18px / 1.125rem | 600 | 1.4 |
| Body Large | DM Sans | 18px / 1.125rem | 400 | 1.6 |
| Body Default | DM Sans | 16px / 1rem | 400 | 1.6 |
| Body Small | DM Sans | 14px / 0.875rem | 400 | 1.55 |
| Label / Eyebrow | DM Sans | 11px | 600 | 1.4 (uppercase, letter-spaced) |
| Button | DM Sans | 14px | 700 | 1 |

**Mobile Type Scale:** Reduce H1 to 40px, H2 to 28px, H3 to 20px. Body remains 16px.

### Spacing System (8px base unit)

```
4px   = 0.25rem  /* Tight inline spacing */
8px   = 0.5rem   /* Default small gap */
16px  = 1rem     /* Default content spacing */
24px  = 1.5rem   /* Component internal padding */
32px  = 2rem     /* Section block spacing */
48px  = 3rem     /* Between content blocks */
64px  = 4rem     /* Section padding mobile */
96px  = 6rem     /* Section padding desktop */
128px = 8rem     /* Hero section padding */
```

### Layout & Grid

- **Max content width:** 1280px (with 60px horizontal padding)
- **Reading-optimized width:** 720px (for long-form text like the Founder Letter)
- **Grid:** 12-column on desktop, 6-column on tablet, single column on mobile
- **Breakpoints:**
  - Mobile: 0 – 639px
  - Tablet: 640 – 1023px
  - Desktop: 1024 – 1439px
  - Wide: 1440px+

### Imagery Guidelines

- **Photography style:** Professional, premium. Avoid stock cliché (no handshakes, no people pointing at laptops).
- **Recommended subjects:** Legal documents in motion, abstract immigration imagery (passports, world maps), modern office environments, the founder (professional portrait)
- **Color treatment:** Slight desaturation for cohesion; gold/navy accent overlays where appropriate
- **Illustrations:** If used, geometric and minimal - not cartoonish

### Iconography

- Use **Lucide Icons** (https://lucide.dev) - clean, modern, consistent
- 24px default size, 1.5px stroke width
- Use emojis sparingly in marketing copy where they serve as quick visual anchors (e.g., agent cards) - but don't overuse

---

## 7. COMPONENT LIBRARY

### Buttons

**Primary CTA**
```
Background: --gold
Text color: --navy-deep
Padding: 14px 28px
Border-radius: 4px
Font: DM Sans, 14px, 700 weight, no letter-spacing
Hover: background --gold-light, slight scale (1.02)
```

**Secondary CTA**
```
Background: transparent
Border: 1.5px solid --gold
Text color: --gold
Padding: 12.5px 26px (account for border)
Border-radius: 4px
Hover: background --gold (fill), text --navy-deep
```

**Text Link**
```
Color: --gold
Text-decoration: underline (animated on hover)
Hover: --gold-light
```

### Cards

**Pain Point Card (light background)**
- Background: `--off-white`
- Border: 1px solid `--grey-light`
- Left border: 3px solid `--gold`
- Border-radius: 4px
- Padding: 24px

**Solution Pillar Card (dark)**
- Background: `--navy-deep`
- Bottom border accent: 2px `--gold`
- Border-radius: 6px
- Padding: 32px

**Agent Card**
- Background: `--white`
- Top border: 3px solid `--gold`
- Border-radius: 5px
- Padding: 20px
- Stat badge at bottom with `--gold-pale` background

**Pricing-style Tier Card** (used elsewhere, not on pricing - no pricing page)
- Featured variant: dark navy background with gold border
- Standard variant: off-white background

### Sections

**Section Header Pattern**
```
[EYEBROW LABEL] ────────────── (with gradient line)
Section Title in Cormorant Garamond
Section subtitle in DM Sans grey-text
```

**Alternating Backgrounds**
- Light section: `--off-white` background
- White section: `--white` background
- Dark section: `--navy-deep` background (used for high-emphasis moments like Economics)

### Forms

**Tech Audit Form Fields:**
- Full Name
- Email
- Phone
- Firm Name
- Firm Size (dropdown: Solo, 2-5 attorneys, 6-20 attorneys, 21+ attorneys, Corporate)
- Current Case Management Platform (optional dropdown: INSZoom, MyCase, ImmigrationTracker, Other, None)
- Biggest Tech Challenge (textarea, optional)
- "Request founder-led audit?" (checkbox, conditional on mid-size+)

**Form Styling:**
- Input border: 1px `--grey-light`, focus: `--gold`
- Border-radius: 4px
- Padding: 12px 16px
- Background: `--white`
- Label: 14px, 600 weight, `--navy-light`

### Modals / Drawers
- Calendly embed in modal trigger from any "Book a Call" button
- Cookie consent banner: bottom-right, dismissible, persists choice in localStorage

---

## 8. FUNCTIONAL REQUIREMENTS

### Lead Capture Forms

1. **Free Tech Audit form** (on `/tech-audit` page)
   - Submits to: TBD (HubSpot, Pipedrive, or simple email forward to `info@globalcodio.ai`)
   - Triggers: Confirmation email to user, internal notification to sales team
   - Post-submit: Redirect to thank-you state with Calendly embed

2. **RFP Response inquiry form** (on `/services/rfp-response`)
   - File upload supported (RFP document)
   - Submits to same destination

3. **Compliance Documentation Request** (on `/security`)
   - Requires firm name and email
   - Triggers internal review before docs are sent (NDA required)

### Calendar Embedding

- **Tool:** Calendly (recommended)
- **Two booking pages:**
  - Standard Tech Audit (any team member)
  - Founder-led Audit (Umesh's calendar, gated by firm size)

### Interactive Elements

- Smooth scroll for anchor links
- Reveal-on-scroll animations (subtle - staggered fade + 10px slide up)
- Sticky CTA on mobile (floating "Book Free Audit" bar at bottom)
- Click-to-copy for `info@globalcodio.ai` in footer

---

## 9. SEO REQUIREMENTS

### Page-Level SEO

Each page needs:
- Unique `<title>` (50-60 chars)
- Unique `<meta description>` (150-160 chars)
- Open Graph + Twitter Card tags
- Schema.org structured data where applicable

### Recommended Page Titles & Meta Descriptions

| Page | Title | Meta Description |
|---|---|---|
| Home | GlobalCodio - Win Cases. We'll Handle All the Technology. | The complete technology operation for immigration law firms. CodioCMS, AI agents, global forms, and managed services. Built by the founder of INSZoom. |
| About | About GlobalCodio - Built by the Founder of INSZoom | Umesh Vaidyamath founded INSZoom in 1999 and sold it in 2020. GlobalCodio is the next chapter - a complete tech operation for immigration law firms. |
| Tech Audit | Free Tech Audit for Immigration Law Firms - GlobalCodio | 30-minute audit identifying exactly where your firm is leaking cost and revenue. No commitment. Just clarity. Book your free audit today. |
| AI Agents | Codio AI Agents - Purpose-Built Immigration AI Workforce | 8 specialized AI agents for immigration law firms. Intake, documents, forms, deadlines, renewals, BD. Deployed and managed. |
| Security | Security & Compliance - GlobalCodio | SOC 2 Type II, ISO 27001, HIPAA-aligned, CCPA-compliant. Enterprise-grade security for immigration law firms. |
| Founder Letter | A Letter from the Founder - Umesh Vaidyamath, GlobalCodio | After 20 years building INSZoom, here's why I built GlobalCodio - and why immigration firms deserve a complete technology operation. |

### Target Keywords (Primary)

- Immigration case management software
- Immigration AI agents
- Immigration law firm technology
- Global immigration forms
- Immigration law firm IT support
- Corporate immigration technology

### Schema Markup Required

- `Organization` schema on homepage
- `Person` schema for Umesh on About + Letter
- `Service` schema on each Services page
- `FAQPage` schema on Tech Audit FAQ section
- `BreadcrumbList` on all sub-pages

### Other SEO

- XML sitemap auto-generated
- `robots.txt` configured
- Canonical URLs set on all pages
- Image alt text on every image

---

## 10. PERFORMANCE & ACCESSIBILITY

### Performance Targets

- **Lighthouse Performance:** 90+ on mobile, 95+ on desktop
- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1
- **Total page weight:** < 2MB per page (excluding video)

### Optimization Requirements

- Images: Use Next.js Image, WebP/AVIF formats, lazy-load below the fold
- Fonts: Preload critical fonts, use `font-display: swap`
- CSS: Critical CSS inlined, rest deferred
- JS: Minimal client-side JS; prefer SSR/SSG
- CDN: All static assets via CDN (Vercel/Netlify handles this)

### Accessibility (WCAG 2.1 AA)

- Color contrast minimum 4.5:1 for body text, 3:1 for large text
- All interactive elements keyboard-accessible
- Visible focus states on all controls
- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<section>`)
- ARIA labels on icon-only buttons
- Alt text on all meaningful images
- Skip-to-content link for keyboard users
- Forms have proper labels and error messages

---

## 11. INTEGRATIONS REQUIRED

### Phase 1 (Launch)

| Tool | Purpose | Notes |
|---|---|---|
| **Calendly** | Tech audit bookings | Two booking types: standard + founder |
| **Google Analytics 4** | Traffic analytics | Standard install |
| **Email forwarding** | `info@globalcodio.ai` → Umesh | Set up at DNS provider |
| **LinkedIn Company Page** | Social linking | Footer + share buttons |

### Phase 2 (Within 60 Days)

| Tool | Purpose | Notes |
|---|---|---|
| **HubSpot / Pipedrive** | CRM for leads | Form submissions auto-create contacts |
| **Mailchimp / Beehiiv** | Newsletter (future) | For founder letters and updates |
| **LogRocket / Hotjar** | Session recordings | Optimize conversion flow |
| **Plausible** | Privacy-friendly analytics | Optional supplementary to GA4 |

### Authentication

- No customer login required for marketing site
- Future client portal will live at `app.globalcodio.ai` (separate)

---

## 12. CONTENT MANAGEMENT

### Recommended Approach for v1

**Static content for launch.** All copy from `globalcodio-website-copy.md` lives directly in code (React components or Next.js MDX files).

### Recommended Approach for v2

Move long-form and frequently updated content to a CMS:
- **Sanity** (developer-friendly, structured content)
- **Contentful** (enterprise-friendly)
- **Notion** with Notion API (cheapest, simplest for non-technical updates)

### Content That Will Need Updates

| Content | Update Frequency | Who Updates |
|---|---|---|
| Letter from the Founder | Annually or as needed | Umesh personally |
| Security/Compliance status | Quarterly | Umesh / Ops lead |
| Country list for CodioForms | When new countries added | Product team |
| Case studies / Testimonials | Ongoing as collected | Marketing |
| Team / Leadership | As team grows | HR / Founder |

---

## 13. LAUNCH CHECKLIST

### Pre-Launch
- [ ] Domain `globalcodio.ai` purchased and DNS configured
- [ ] SSL certificate active
- [ ] Email `info@globalcodio.ai` provisioned (Google Workspace recommended)
- [ ] Logo files received from Umesh (SVG + PNG variants)
- [ ] Founder headshot received (high-resolution, professional)
- [ ] Calendly accounts set up for Umesh + team
- [ ] Google Analytics 4 property created
- [ ] LinkedIn Company Page created and verified
- [ ] All Phase 1 pages built and copy reviewed
- [ ] Forms tested end-to-end (submission, email delivery)
- [ ] Mobile responsive tested on iOS Safari + Android Chrome
- [ ] Accessibility audit run (axe DevTools)
- [ ] Lighthouse scores meet targets
- [ ] All links checked (no 404s)
- [ ] Copy proofread for typos
- [ ] Privacy Policy and Terms drafted (lawyer reviewed)
- [ ] Cookie consent banner if needed
- [ ] Sitemap submitted to Google Search Console
- [ ] Open Graph images created for each page
- [ ] Favicon set (multi-size)

### Launch Day
- [ ] Deploy to production
- [ ] Verify DNS propagation
- [ ] Test all forms in production
- [ ] Test calendar bookings end-to-end
- [ ] Verify analytics tracking
- [ ] Submit sitemap to Google
- [ ] Announce on LinkedIn

### Post-Launch (First 30 Days)
- [ ] Monitor form submissions daily
- [ ] Review analytics weekly
- [ ] Set up Hotjar or session recording
- [ ] Build Phase 2 pages
- [ ] Begin SEO outreach and content production

---

## 14. DELIVERABLES

### From the Founder (Umesh)

- [ ] Final logo files (SVG primary, plus PNG variants)
- [ ] Professional headshot
- [ ] Approved copy from `globalcodio-website-copy.md`
- [ ] Personally edited version of "Letter from the Founder"
- [ ] Decision on CRM tool
- [ ] Calendly account credentials or set up
- [ ] Domain access for engineer
- [ ] Google Workspace admin access

### From the Engineer

- [ ] Built and deployed website at globalcodio.ai
- [ ] Source code in a Git repository (GitHub recommended)
- [ ] Documentation in repo README:
  - Local development setup
  - Deployment process
  - How to update content
  - How to add new pages
  - Where forms route to
- [ ] Admin/maintenance handoff guide
- [ ] Trained marketing/ops person on basic updates (if not founder)

---

## 15. NOTES FOR THE ENGINEER

### Things to Watch Out For

1. **The Letter from the Founder is the soul of the site.** It deserves the most thoughtful typographic treatment - narrow reading width, larger body type, generous line height. Treat it like a great editorial layout, not a generic page.

2. **Don't skimp on the hero.** The "Win Cases. We'll Handle All the Technology." headline is the most important piece of copy on the entire site. Make sure it's beautifully typeset, has enough breathing room, and is the first thing the visitor sees.

3. **The Security page is a closer.** Corporate buyers will land here last before reaching out. Make the certification badges visually credible and trust-inspiring.

4. **The Free Tech Audit page is the conversion engine.** Every other page funnels here. It needs to feel premium, low-pressure, and easy to convert on. The Calendly embed should be prominent and load fast.

5. **The 8 AI Agents grid is the "wow" moment.** Spend time making this visually impressive. Consider hover interactions that reveal more detail. Each agent should feel like a real "team member" with a personality.

6. **Avoid AI-generated stock visuals.** Don't use cliché AI imagery (neural networks, robot hands, glowing brains). The brand is premium and human, not techy-cringe.

7. **Mobile is critical.** Many partners and managing partners will read this on their phone. Mobile performance and clarity are non-negotiable.

### Questions to Send Back to Umesh

- Final logo and brand assets timing?
- Founder portrait timing?
- Preferred CRM (HubSpot, Pipedrive, Salesforce, other)?
- Newsletter platform preference?
- Cookie/privacy compliance - are we targeting EU traffic at launch?
- Legal team for Privacy/Terms review?

---

## 📞 PROJECT CONTACT

**Founder & Project Owner:** Umesh Vaidyamath
**Email:** info@globalcodio.ai
**Primary Tagline (Always Use):** Win Cases. We'll Handle All the Technology.

---

## 📎 APPENDIX: COMPANION DOCUMENTS

These documents must be referenced alongside this handoff:

1. **`globalcodio-website-copy.md`** - Full page-by-page copy for every page on the site
2. **`globalcodio-brand-playbook.md`** - Original brand positioning document
3. **`globalcodio-booth-content.md`** - Conference booth content (for brand consistency reference)
4. **`globalcodio-sales-sheet.html`** - One-page sales sheet (for design reference - same visual language)

---

*Built for the founder of INSZoom. Built to last. Win Cases. We'll Handle All the Technology.*
