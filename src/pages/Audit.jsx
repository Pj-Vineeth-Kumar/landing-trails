import React, { useState } from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, StepList, CtaBand, SmartLink } from '../components/PageKit.jsx';
import { UserCheck } from 'lucide-react';

const HOW_DID_YOU_HEAR = ['LinkedIn', 'Google', 'Email', 'Webinar', 'Conference', 'Referral', 'Other'];

const field = {
  fontFamily: 'var(--body)',
  fontSize: 'calc(15px * var(--ui-scale))',
  color: 'var(--ink)',
  background: '#fff',
  border: '1.5px solid rgba(0,0,0,0.11)',
  borderRadius: 'calc(10px * var(--ui-scale))',
  padding: 'calc(13px * var(--ui-scale)) calc(16px * var(--ui-scale))',
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
  lineHeight: 1.5,
};

const lbl = { display: 'flex', flexDirection: 'column', gap: 'calc(6px * var(--ui-scale))' };
const ltext = { fontSize: 'calc(11px * var(--ui-scale))', fontWeight: 700, color: 'var(--ink-2)', letterSpacing: '.06em', textTransform: 'uppercase' };

function AuditForm() {
  const [form, setForm] = useState({ fullName: '', workEmail: '', orgName: '', website: '', howHeard: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  if (submitted) return (
    <div style={{ textAlign: 'center', padding: 'calc(48px * var(--ui-scale))' }}>
      <div style={{ fontSize: 'calc(32px * var(--ui-scale))' }}>✓</div>
      <h3 className="display" style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em', marginTop: 'var(--space-md)' }}>Audit request received.</h3>
      <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.6, marginTop: 'var(--space-sm)' }}>Our team will be in touch within one business day.</p>
    </div>
  );

  return (
    <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      <div style={{ paddingBottom: 'var(--space-lg)', borderBottom: '1px solid rgba(0,0,0,0.07)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <h3 className="display" style={{ fontSize: 'var(--text-display-sm)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>Book your free tech audit</h3>
        <p style={{ fontSize: 'calc(13px * var(--ui-scale))', color: '#e53e3e', fontWeight: 600, flexShrink: 0, textAlign: 'right' }}>Fields marked <span style={{ fontWeight: 800 }}>*</span> are required.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
        <label style={lbl}><span style={ltext}>Full Name <span style={{ color: 'var(--blue)' }}>*</span></span><input type="text" required placeholder="Jane Smith" value={form.fullName} onChange={set('fullName')} style={field} /></label>
        <label style={lbl}><span style={ltext}>Work Email <span style={{ color: 'var(--blue)' }}>*</span></span><input type="email" required placeholder="jane@yourfirm.com" value={form.workEmail} onChange={set('workEmail')} style={field} /></label>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
        <label style={lbl}><span style={ltext}>Organization Name <span style={{ color: 'var(--blue)' }}>*</span></span><input type="text" required placeholder="Smith Immigration Law" value={form.orgName} onChange={set('orgName')} style={field} /></label>
        <label style={lbl}><span style={ltext}>Company Website <span style={{ color: 'var(--blue)' }}>*</span></span><input type="url" required placeholder="https://yourfirm.com" value={form.website} onChange={set('website')} style={field} /></label>
      </div>
      <label style={lbl}>
        <span style={ltext}>How Did You Hear About Us? <span style={{ color: 'var(--blue)' }}>*</span></span>
        <div style={{ position: 'relative' }}>
          <select required value={form.howHeard} onChange={set('howHeard')} style={{ ...field, appearance: 'none', cursor: 'pointer', paddingRight: 'calc(40px * var(--ui-scale))' }}>
            <option value="" disabled>Select an option</option>
            {HOW_DID_YOU_HEAR.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ position: 'absolute', right: 'calc(14px * var(--ui-scale))', top: '50%', transform: 'translateY(-50%)', width: 'calc(12px * var(--ui-scale))', height: 'calc(12px * var(--ui-scale))', pointerEvents: 'none', color: 'var(--ink-3)' }}>
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </label>
      <label style={{ ...lbl, flex: 1, minHeight: 0 }}>
        <span style={{ ...ltext, display: 'flex', justifyContent: 'space-between' }}>
          <span>Tell Us More</span>
          <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: 'var(--ink-3)' }}>{form.message.length} / 1000</span>
        </span>
        <textarea maxLength={1000} rows={5} placeholder="Tell us about your firm, your current tech stack, or what you're looking to solve…" value={form.message} onChange={set('message')} style={{ ...field, resize: 'none', lineHeight: 1.65 }} />
      </label>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Submit audit request</button>
    </form>
  );
}

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
    q: "What if I'm already on a case management platform?",
    a: "We migrate clients from every major case management platform. The Tech Audit will include a specific migration assessment if that's relevant to you.",
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
        primary={{ href: '/contact', label: 'Book your audit' }}
        secondary={{ href: '/letter-from-the-founder', label: "Read the founder's letter" }}
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
              <SmartLink href="/contact" className="btn btn-primary">
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

      <Section id="book-audit" tone="sec-surface">
        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.8fr)',
          gap: 'var(--space-4xl)',
          alignItems: 'start',
        }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 'var(--space-md)' }}>Free Tech Audit</div>
            <h2 className="display type-display-lg">
              <span style={{ display: 'block' }}>Ready to see what's</span>
              <em className="text-grad-blue" style={{ display: 'block', fontStyle: 'italic' }}>possible?</em>
            </h2>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65, marginTop: 'var(--space-lg)' }}>
              Fill in the form and our team will be in touch within one business day to schedule your 30-minute audit call.
            </p>
            <div style={{ marginTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'calc(10px * var(--ui-scale))' }}>
              {['No cost, no commitment', 'Audit findings are yours to keep', 'Available for solo to enterprise firms'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 'calc(10px * var(--ui-scale))', fontSize: 'calc(14px * var(--ui-scale))', color: 'var(--ink-3)' }}>
                  <span style={{ width: 'calc(6px * var(--ui-scale))', height: 'calc(6px * var(--ui-scale))', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#fff', border: '1.5px solid var(--line-2)', borderRadius: 'calc(20px * var(--ui-scale))', padding: 'calc(40px * var(--ui-scale))' }}>
            <AuditForm />
          </div>
        </div>
      </Section>
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
