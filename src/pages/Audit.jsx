import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, StepList, CtaBand, SmartLink } from '../components/PageKit.jsx';
import { UserCheck } from 'lucide-react';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="10" cy="10" r="8" />
    <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const deliverables = [
  'A clear picture of where your current technology is failing.',
  'A configuration assessment of any software your firm currently uses.',
  'An estimate of annual cost savings from consolidating onto one operation.',
  'An estimate of renewal revenue sitting unused in your client database.',
  'A recommended technology roadmap customized to your firm.',
  "A customized GlobalCodio proposal - if and when you're ready.",
];

const steps = [
  { h: 'Book a time that works for you.', b: 'Pick a slot that fits your schedule. The process starts the moment you reach out.' },
  { h: '30-minute discovery call with our team.', b: 'A focused conversation to understand your firm, your stack, and where the friction lives.' },
  { h: 'Audit report delivered within 48 hours of the call.', b: 'A written assessment of your technology operation, gaps, and opportunities.' },
  { h: 'No pressure to move forward - the audit is yours regardless.', b: 'Whatever you decide afterward, the findings are yours to keep and act on.' },
];

const faqs = [
  {
    q: 'Is this really free?',
    a: 'Yes. There is no cost and no commitment. We do this because most firms have never had a thorough audit of their technology operation, and the audit itself is genuinely valuable even if you decide not to work with us.',
  },
  {
    q: 'Do you work with small firms?',
    a: 'Yes. We work with firms across every size - from solo immigration attorneys to enterprise corporate immigration departments. The Tech Audit is the same for everyone.',
  },
  {
    q: "What if I'm already happy with my current technology?",
    a: "Most firms we audit are surprised by how much they're either overspending or under-utilizing. The audit either confirms you're in good shape - or shows you what you're missing.",
  },
  {
    q: "What if I'm on INSZoom or another platform?",
    a: 'We migrate clients from every major case management platform - including INSZoom. The Tech Audit will include a specific migration assessment if that’s relevant to you.',
  },
  {
    q: 'Will you try to sell me something?',
    a: "Not on the audit call. The audit's job is to give you clarity. If GlobalCodio is a fit, we'll provide a proposal afterward. If it's not, you keep the audit.",
  },
];

export default function Audit() {
  return (
    <>
      <Seo
        title="Free Tech Audit"
        description="In 30 minutes, we'll audit your firm's technology, identify gaps, and show you what a fully managed operation would look like. No commitment. No pressure. Just clarity."
        path="/free-tech-audit"
      />

      <PageHero
        eyebrow="Free Tech Audit"
        lead="Find out exactly where your firm is"
        emphasis="leaking cost and revenue."
        sub="In 30 minutes, we'll audit your firm's technology, identify gaps, and show you what a fully managed operation would look like. No commitment. No pressure. Just clarity."
        primary={{ href: 'mailto:info@globalcodio.ai', label: 'Book your audit' }}
        secondary={{ href: '/letter-from-the-founder', label: "Read the founder’s letter" }}
      />

      <Section
        id="what-youll-get"
        eyebrow="What You'll Get"
        lead="Six concrete takeaways,"
        emphasis="not a sales pitch."
        intro="Every audit produces a tangible set of findings about your firm's technology operation - the kind of clarity most firms have never had."
      >
        <ul className="check-list check-cols reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          {deliverables.map((d) => (
            <li key={d}>
              <Check />
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="how-it-works"
        tone="sec-surface"
        eyebrow="How It Works"
        lead="Four simple steps,"
        emphasis="from booking to report."
      >
        <div className="reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          <StepList steps={steps} />
        </div>
      </Section>

      <Section id="founder-access">
        <div className="split-2 split-2--even">
          <div className="reveal">
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>
              Founder Access
            </div>
            <SplitHeadingInline />
            <p
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--ink-3)',
                lineHeight: 1.6,
                maxWidth: '52ch',
                marginTop: 'var(--space-lg)',
              }}
            >
              Mid-size and larger firms can request a tech audit conducted personally by our founder,
              Umesh Vaidyamath. Indicate your preference when you book.
            </p>
            <div style={{ marginTop: 'var(--space-xl)' }}>
              <SmartLink href="mailto:info@globalcodio.ai" className="btn btn-primary">
                Request founder-led audit
              </SmartLink>
            </div>
          </div>

          <div className="card reveal d1" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div className="agent-icon" aria-hidden="true">
              <UserCheck size={20} strokeWidth={1.75} />
            </div>
            <h3 className="display feature-card-title">Umesh Vaidyamath</h3>
            <p className="feature-card-body">
              Founder, GlobalCodio. For qualified firms, a direct, founder-level read on where your
              technology operation stands and what a fully managed operation would unlock.
            </p>
            <hr className="rule-blue" />
            <div className="mono feature-card-stat">Mid-size &amp; larger firms / by request</div>
          </div>
        </div>
      </Section>

      <Section
        id="faq"
        tone="sec-surface"
        eyebrow="Frequently Asked"
        lead="Straight answers"
        emphasis="before you book."
      >
        <dl className="faq-list reveal" style={{ marginTop: 'var(--space-3xl)', display: 'grid', gap: 'var(--space-lg)' }}>
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className={`card reveal d${(i % 4) + 1}`}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}
            >
              <dt
                className="display"
                style={{ fontSize: 'calc(22px * var(--ui-scale))', lineHeight: 1.25, color: 'var(--ink-1, var(--text-body))' }}
              >
                {f.q}
              </dt>
              <dd
                style={{
                  margin: 0,
                  fontSize: 'var(--text-body)',
                  color: 'var(--ink-3)',
                  lineHeight: 1.6,
                  maxWidth: '70ch',
                }}
              >
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <CtaBand
        lead="Ready to see what your firm’s"
        emphasis="technology could be?"
        primary={{ href: 'mailto:info@globalcodio.ai', label: 'Book your free tech audit' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Talk to our team' }}
      />
    </>
  );
}

function SplitHeadingInline() {
  return (
    <h2 className="display type-display-lg">
      <span style={{ display: 'block' }}>Founder access</span>
      <em className="text-grad-blue" style={{ display: 'block', fontStyle: 'italic' }}>
        for qualified firms.
      </em>
    </h2>
  );
}
