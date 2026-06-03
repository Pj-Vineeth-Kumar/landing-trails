import React from 'react';
import { Hero } from '../components/Hero.jsx';
// import { OperatingSystem } from '../components/OperatingSystem.jsx';
import { AgentOrbit, Testimonial, Metrics, ValueLevers, Certifications, CTA } from '../components/ContentSections.jsx';
import { Seo } from '../components/Seo.jsx';
import { Section, FeatureGrid, SmartLink, SplitHeading } from '../components/PageKit.jsx';
import { Cpu, FileText, Bot, Network, Settings } from 'lucide-react';

/* Founder credibility band */
const FOUNDER_STATS = [
  ['1,000+', 'law firms served by INSZoom'],
  ['20 yrs', 'inside immigration technology'],
  ['2020', 'INSZoom acquired'],
  ['2025', 'GlobalCodio founded'],
];

const FounderBand = () => (
  <Section id="founder" tone="sec-surface" className="sec-founder">
    <div className="eyebrow reveal founder-eyebrow">The Next Chapter in Immigration Tech</div>
    <div className="founder-layout">
      <div className="reveal founder-copy">
        <SplitHeading lead="Built by the people" emphasis="who built immigration tech." />
        <p className="founder-intro">
          In 1999, Umesh Vaidyamath founded INSZoom - the immigration case management platform that grew to serve
          more than 1,000 law firms worldwide before being acquired in 2020. After two decades inside immigration
          tech, he saw clearly what came next: not better software, but a complete technology operation, AI-powered
          and fully managed. GlobalCodio is that next chapter.
        </p>
        <SmartLink href="/letter-from-the-founder" className="feature-card-link founder-link">
          Read the Letter from the Founder
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
        </SmartLink>
      </div>

      <div className="reveal d1 founder-stat-grid">
        {FOUNDER_STATS.map(([n, l]) => (
          <div key={l} className="founder-stat">
            <div className="display founder-stat-num">{n}</div>
            <div className="founder-stat-label">{l}</div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

/* Pain recognition */
const PAINS = [
  'Your case management software was never properly configured to your workflows',
  'Your team uses 20% of the features because nobody set up the other 80%',
  "AI tools confuse more than they help - and you don't know which to trust",
  'Staff turnover keeps resetting your operations and losing institutional knowledge',
  "Corporate RFPs come in with deep technical questions you can't credibly answer",
  'You have no IT support, no security posture, and no one managing your technology',
];

const PainRecognition = () => (
  <Section id="pain" eyebrow="Sound Familiar?" lead="If any of these describe your firm," emphasis="you're exactly who GlobalCodio was built for.">
    <ul className="check-list pain-list" style={{ marginTop: 'var(--space-2xl)', gridTemplateColumns: 'repeat(2,1fr)', gap: 'var(--space-lg)' }}>
      {PAINS.map((p, i) => (
        <li key={i} className="reveal pain-item">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10" cy="10" r="8" /><path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          {p}
        </li>
      ))}
    </ul>
    <p className="reveal d1 pain-payoff display">There&rsquo;s a better way. It&rsquo;s called <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>GlobalCodio.</em></p>
  </Section>
);

/* Five integrated layers */
const LAYERS = [
  { Icon: Cpu, h: 'CodioCMS', b: 'The next-generation case management platform built by the founder of INSZoom. Configured to your exact workflows.', featured: true, links: [{ href: '/platform', label: 'Explore the platform' }] },
  { Icon: FileText, h: 'CodioForms', b: 'Online and offline immigration forms for USA, Canada, Netherlands, and India - with new countries added on demand.', links: [{ href: '/platform', label: 'See CodioForms' }] },
  { Icon: Bot, h: 'Codio AI Agents', b: 'A team of AI agents handling intake, documents, forms, deadlines, communications, renewals, and business development.', links: [{ href: '/ai-agents', label: 'Meet the agents' }] },
  { Icon: Network, h: 'CodioNetwork', b: 'A curated network of certified translators, physicians, apostille services, foreign attorneys, and consular coordinators.', links: [{ href: '/network', label: 'See the network' }] },
  { Icon: Settings, h: 'GlobalCodio Services', b: 'Migration, configuration, IT support, security management, RFP response, and ongoing operations. We run your technology.', links: [{ href: '/services', label: 'Explore services' }] },
  { Icon: Settings, h: 'Technology Audit', b: "A comprehensive audit of your firm's current tech stack, workflows, and operations. Identifies gaps, risks, and opportunities before onboarding begins.", links: [{ href: '/contact', label: 'Request an audit' }] },
  { Icon: Cpu, h: 'Audit & Consulting', b: 'Advisory and consulting services for immigration law firms and corporate teams. We help you understand what technology you need and how to get the most from it.', links: [{ href: '/contact', label: 'Talk to us' }] },
];

const FiveLayers = () => (
  <Section
    id="operation"
    tone="sec-surface"
    eyebrow="The Complete Operation"
    lead="One partner."
    emphasis="Your entire technology operation."
    intro="GlobalCodio is not a software vendor. We're the complete technology operation for your firm - a proprietary platform, AI workforce, global forms engine, service provider network, full managed services, and expert consulting. All built for immigration."
  >
    <div style={{ marginTop: 'var(--space-3xl)' }}>
      <FeatureGrid items={LAYERS.slice(0, 3)} cols={3} />
      <div style={{ marginTop: 'var(--space-lg)' }}>
        <FeatureGrid items={LAYERS.slice(3)} cols={4} />
      </div>
    </div>
  </Section>
);

/* Revenue + economics highlight band */
const RevenueEconomics = () => (
  <Section id="economics" tone="sec-surface" eyebrow="The Revenue Hook"
    lead="Where the return"
    emphasis="actually comes from.">
    <div className="split-2--even reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'stretch' }}>
      <article className="feature-card feature-card--featured" style={{ padding: 'calc(36px * var(--ui-scale))' }}>
        <h3 className="display" style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 'var(--space-md)' }}>
          Your next <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>$200K</em> is already in your database.
        </h3>
        <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65 }}>
          Most firms have hundreds of dormant clients - visas expiring, green-card eligible, family petitions, citizenship.
          Codio AI Agents continuously mine your database and surface these before they expire. Most firms recover
          <strong> $50K-$300K</strong> in incremental annual revenue. Zero new marketing spend.
        </p>
      </article>
      <article className="feature-card" style={{ padding: 'calc(36px * var(--ui-scale))' }}>
        <h3 className="display" style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 'var(--space-md)' }}>
          Less than one paralegal. <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>More productive than eight.</em>
        </h3>
        <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65 }}>
          The human equivalents of our AI Agents would run roughly <strong>$499,000/year</strong> in salaries.
          GlobalCodio delivers the same work, 24/7, for a fraction of that - plus the platform, forms, IT support, and
          managed operations.
        </p>
        <div className="mono" style={{ marginTop: 'auto', paddingTop: 'var(--space-lg)', fontSize: 'calc(12px * var(--ui-scale))', letterSpacing: '.06em', color: 'var(--blue)' }}>
          3&times; AVERAGE ROI IN YEAR ONE
        </div>
      </article>
    </div>
  </Section>
);

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <FounderBand />
      <PainRecognition />
      <FiveLayers />
      {/* <AgentOrbit /> */}
      <Certifications />
      <RevenueEconomics />
      <Testimonial />
      {/* <OperatingSystem /> */}
      <ValueLevers />
      <Metrics />
      <CTA />
    </>
  );
}
