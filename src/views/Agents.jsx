'use client';
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ReactFlow, Handle, Position, Background, MarkerType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { PageHero, Section, FeatureGrid, CtaBand } from '../../components/ui/PageKit';
import { FaqAccordion } from '../../components/ui/FaqAccordion';
import {
  ClipboardList,
  FileText,
  ScanText,
  ShieldCheck,
  PenLine,
  CalendarClock,
  MessageCircle,
  RefreshCw,
  TrendingUp,
  Globe,
  BellRing,
  User,
  Sparkles,
  Send,
} from 'lucide-react';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="10" cy="10" r="8" />
    <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CASE_ASSISTANT_MESSAGES = [
  {
    who: 'attorney',
    text: "What's blocking this case right now?",
  },
  {
    who: 'assistant',
    text: "Two items are open: (1) I-129 support letter is awaiting partner review - assigned to Sarah Chen, last updated 3 days ago. (2) Client's passport expires within 90 days of the requested start date, which will trigger an RFE. Recommend requesting a renewed passport before filing.",
  },
  {
    who: 'attorney',
    text: 'When does the current H-1B status expire?',
  },
  {
    who: 'assistant',
    text: 'Current status expires October 14, 2025. Filing window opens July 1. The Deadline Agent has already set alerts at 90, 60, and 30 days.',
  },
];

const CASE_ASSISTANT_EXAMPLES = [
  {
    q: '"Is this RFE response complete?"',
    a: 'Checks every required document against the RFE requirements and flags anything missing before you file.',
  },
  {
    q: '"Who still needs to sign off?"',
    a: 'Lists pending approvers across paralegal, attorney, and HR - with days waiting and reminders ready to send.',
  },
  {
    q: '"Which documents are still outstanding?"',
    a: 'Scans the checklist against uploads in the vault and shows exactly what the client or firm still owes.',
  },
  {
    q: '"What changed on this case last week?"',
    a: 'Summarizes filings, status moves, new uploads, and assignment updates - pulled from the case audit log.',
  },
];

const caseAssistantMessage = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.12 + i * 0.07, duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  }),
};

const CaseAssistantMock = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="case-assistant-mock" aria-hidden="true">
      <header className="case-assistant-mock__head">
        <div className="case-assistant-mock__brand">
          <span className="case-assistant-mock__logo">
            <img src="/favicon.ico" alt="" width={18} height={18} draggable={false} />
          </span>
          <div className="case-assistant-mock__meta">
            <span className="case-assistant-mock__title">Case Assistant</span>
            <span className="mono case-assistant-mock__matter">Matter #2241 · H-1B Transfer</span>
          </div>
        </div>
        <span className="case-assistant-mock__live mono">
          <span className="case-assistant-mock__pulse" aria-hidden="true" />
          Live on case
        </span>
      </header>

      <div className="case-assistant-mock__thread">
        {CASE_ASSISTANT_MESSAGES.map((msg, i) => {
          const isAttorney = msg.who === 'attorney';
          return (
            <motion.div
              key={i}
              className={`case-assistant-msg${isAttorney ? ' case-assistant-msg--user' : ' case-assistant-msg--ai'}`}
              custom={i}
              variants={caseAssistantMessage}
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
            >
              <span className={`case-assistant-msg__avatar${isAttorney ? ' case-assistant-msg__avatar--user' : ''}`} aria-hidden="true">
                {isAttorney ? <User size={13} strokeWidth={2} /> : <Sparkles size={13} strokeWidth={2} />}
              </span>
              <div className="case-assistant-msg__stack">
                <div className="case-assistant-msg__bubble">{msg.text}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <footer className="case-assistant-mock__composer">
        <Sparkles size={14} strokeWidth={1.75} className="case-assistant-mock__composer-icon" aria-hidden="true" />
        <span className="case-assistant-mock__composer-placeholder">Ask anything…</span>
        <motion.span
          className="case-assistant-mock__send"
          whileHover={reduceMotion ? undefined : { scale: 1.06 }}
          whileTap={reduceMotion ? undefined : { scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 420, damping: 22 }}
        >
          <Send size={13} strokeWidth={2.25} aria-hidden="true" />
        </motion.span>
      </footer>
    </div>
  );
};

const AGENTS = [
  {
    Icon: ClipboardList, n: '01', h: 'Intake',
    b: 'Captures client data, validates identity documents, opens and classifies cases, and sends welcome packets automatically.',
    stat: '45 MIN → 8 MIN PER CASE',
    bullets: ['Collects client questionnaire responses automatically', 'Validates identity documents at submission', 'Opens and classifies the case in CodioCMS', 'Sends branded welcome packet to new clients', 'Routes case to the correct workflow template'],
    steps: ['Client submits', 'Agent validates', 'Case opened', 'Welcome sent'],
    tag: 'Case Intake',
  },
  {
    Icon: ScanText, n: '02', h: 'Document Extraction',
    b: 'Extracts data from passports, visas, foreign records, and supporting documents. Translates 40+ languages and classifies files directly into the case.',
    stat: '10× FASTER THAN MANUAL REVIEW',
    bullets: ['Extracts structured data from passports and visas', 'Translates documents across 40+ languages', 'Classifies and tags files by document type', 'Maps extracted fields directly into CodioCMS', 'Flags low-quality scans for re-upload'],
    steps: ['Document received', 'Data extracted', 'Translated', 'Filed to case'],
    tag: 'Document Processing',
  },
  {
    Icon: ShieldCheck, n: '03', h: 'Document Validation',
    b: 'Cross-checks extracted documents for completeness, flags missing or expired items, and verifies authenticity before anything is filed.',
    stat: 'ZERO MISSING DOCS AT FILING',
    bullets: ['Cross-checks every document against case requirements', 'Flags expired passports, visas, and permits', 'Identifies missing supporting documents', 'Verifies document authenticity markers', 'Sends automated requests for missing items'],
    steps: ['Check requirements', 'Verify documents', 'Flag gaps', 'Request missing'],
    tag: 'Quality Control',
  },
  {
    Icon: PenLine, n: '04', h: 'Forms',
    b: 'Auto-fills forms across CodioForms - USA, Canada, Netherlands, India and more. Cross-references data across forms and always uses current versions.',
    stat: '70% LESS FORM PREP TIME',
    bullets: ['Auto-fills government forms from CodioCMS case data', 'Cross-references data across all forms in a package', 'Always uses the current authority-synced version', 'Supports USA, Canada, Netherlands, India and more', 'Exports print-ready PDFs for traditional submission'],
    steps: ['Pull case data', 'Map to form fields', 'Cross-reference', 'Export ready'],
    tag: 'Form Preparation',
  },
  {
    Icon: CalendarClock, n: '05', h: 'Deadline',
    b: 'Tracks every case milestone, visa expiration, and filing deadline. Sends proactive alerts with 24/7 monitoring across all time zones.',
    stat: 'ZERO MISSED DEADLINES',
    bullets: ['Monitors every filing window and visa expiration date', 'Sends tiered alerts at 90, 60, 30, and 7 days', 'Tracks RFE response windows and government notices', 'Works across all time zones automatically', 'Escalates overdue items to the assigned attorney'],
    steps: ['Monitor dates', 'Calculate windows', 'Alert at 90/30/7d', 'Escalate if needed'],
    tag: 'Deadline Tracking',
  },
  {
    Icon: MessageCircle, n: '06', h: 'Client Comms',
    b: 'Sends case status updates, answers common questions 24/7, schedules appointments, and collects missing documents - in multiple languages.',
    stat: '80% FEWER INBOUND CALLS',
    bullets: ['Sends proactive case status updates at key milestones', 'Answers common immigration questions 24/7', 'Schedules consultations directly on attorney calendars', 'Collects missing documents via secure upload links', 'Communicates in the client\'s preferred language'],
    steps: ['Trigger event', 'Draft message', 'Send to client', 'Log response'],
    tag: 'Client Communication',
  },
  {
    Icon: RefreshCw, n: '07', h: 'Renewal',
    b: 'Continuously scans your client database for visa renewals, green card upgrades, citizenship eligibility, and dormant cases worth reopening.',
    stat: '$50K–$300K RECOVERED ANNUALLY',
    bullets: ['Scans all client records for expiring visas and permits', 'Identifies green card upgrade and citizenship eligibility', 'Surfaces dormant clients with actionable opportunities', 'Drafts and sends renewal outreach automatically', 'Tracks response rates and revenue recovered'],
    steps: ['Scan database', 'Identify opportunities', 'Draft outreach', 'Track revenue'],
    tag: 'Revenue Recovery',
  },
  {
    Icon: TrendingUp, n: '08', h: 'BD',
    b: 'Runs automated outreach to prospective clients, qualifies leads by case type and urgency, and books consultations directly on attorney calendars.',
    stat: '8–15 NEW CASES PER MONTH',
    bullets: ['Runs targeted outreach campaigns to prospect lists', 'Qualifies leads by case type, urgency, and fit', 'Books consultations directly on attorney calendars', 'Follows up with non-responders automatically', 'Reports pipeline value and conversion rates'],
    steps: ['Identify prospects', 'Send outreach', 'Qualify lead', 'Book consult'],
    tag: 'Business Development',
  },
  {
    Icon: Globe, n: '09', h: 'Ecosystem',
    b: 'Coordinates translators, certified physicians, apostille services, foreign attorneys, and consular logistics through the CodioNetwork.',
    stat: '30% FASTER CASE TURNAROUND',
    bullets: ['Identifies the right CodioNetwork provider for each need', 'Dispatches work orders to translators and couriers', 'Coordinates medical exam scheduling with USCIS physicians', 'Tracks apostille and authentication status in real time', 'Brings all external coordination inside CodioCMS'],
    steps: ['Identify need', 'Select provider', 'Dispatch order', 'Track status'],
    tag: 'Ecosystem Coordination',
  },
  {
    Icon: BellRing, n: '10', h: 'Government Notice Update',
    b: 'Monitors government portals and immigration authority announcements for policy changes, form revisions, and notice updates - alerting your firm to anything that affects open cases.',
    stat: 'REAL-TIME POLICY ALERTS',
    bullets: ['Monitors USCIS, IRCC, IND, and other authority portals', 'Detects form version changes before your firm is caught out', 'Alerts attorneys to policy changes affecting open cases', 'Summarises regulatory updates in plain language', 'Logs all notices to the relevant case records'],
    steps: ['Monitor portals', 'Detect changes', 'Match to cases', 'Alert attorney'],
    tag: 'Regulatory Monitoring',
  },
];

const COMPARISON = [
  {
    title: 'Generic AI Tools',
    points: [
      'Not built for immigration',
      'You figure it out',
      'One-off tools',
      'Sits next to your software',
      'Generic outputs',
    ],
  },
  {
    title: 'DIY AI Solutions',
    points: [
      'Requires internal AI expertise',
      'You configure it yourself',
      'Fragile and limited',
      'Breaks when systems change',
      'Inconsistent quality',
    ],
  },
  {
    title: 'Codio AI Agents',
    featured: true,
    points: [
      'Purpose-built for immigration',
      'We deploy and manage it',
      'Integrated team of 10 specialists',
      'Native to CodioCMS',
      'Trained on immigration workflows',
    ],
  },
];

/* ── React Flow step node ────────────────────────────── */
const NODE_W = 148;
const NODE_H = 36;

const StepNode = ({ data }) => (
  <div style={{
    width: NODE_W, height: NODE_H,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: data.first ? 'var(--blue)' : data.last ? 'var(--blue-soft)' : '#fff',
    border: `1.5px solid ${data.first ? 'var(--blue)' : data.last ? 'rgba(25,80,198,0.25)' : 'rgba(0,0,0,0.12)'}`,
    borderRadius: 8,
    fontSize: 11.5, fontWeight: 600,
    color: data.first ? '#fff' : data.last ? 'var(--blue)' : 'var(--ink-2)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    boxShadow: data.first ? '0 2px 10px rgba(25,80,198,0.25)' : '0 1px 3px rgba(0,0,0,0.06)',
    fontFamily: 'var(--body)',
    boxSizing: 'border-box',
    padding: '0 12px',
  }}>
    {!data.first && <Handle type="target" position={Position.Left} style={{ background: 'transparent', border: 'none', width: 0, height: 0 }} />}
    {data.label}
    {!data.last && <Handle type="source" position={Position.Right} style={{ background: 'transparent', border: 'none', width: 0, height: 0 }} />}
  </div>
);

const nodeTypes = { step: StepNode };

function AgentFlow({ steps, agentKey }) {
  const GAP = NODE_W + 40;
  const nodes = steps.map((step, i) => ({
    id: `${agentKey}-${i}`,
    type: 'step',
    position: { x: i * GAP, y: 0 },
    data: { label: step, first: i === 0, last: i === steps.length - 1 },
    draggable: false,
    selectable: false,
    width: NODE_W,
    height: NODE_H,
  }));

  const edges = steps.slice(0, -1).map((_, i) => ({
    id: `${agentKey}-e${i}`,
    source: `${agentKey}-${i}`,
    target: `${agentKey}-${i + 1}`,
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'var(--blue)', strokeWidth: 1.5, opacity: 0.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--blue)', width: 14, height: 14 },
  }));

  const width = steps.length * GAP - 10;

  return (
    <div style={{ width: '100%', height: 44, pointerEvents: 'none' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultViewport={{ x: 8, y: 4, zoom: 1 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: 'transparent' }}
      />
    </div>
  );
}

/* ── Live dot (static) ───────────────────────────────── */
const LiveDot = () => (
  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
);

/* ── Stat badge ──────────────────────────────────────── */
function StatBadge({ stat }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'calc(8px * var(--ui-scale))',
      padding: 'calc(10px * var(--ui-scale)) calc(16px * var(--ui-scale))',
      background: 'var(--blue-soft)',
      borderRadius: 'calc(10px * var(--ui-scale))',
      border: '1px solid rgba(25,80,198,0.12)',
      flexShrink: 0,
    }}>
      <LiveDot />
      <span className="mono" style={{ fontSize: 'calc(11px * var(--ui-scale))', letterSpacing: '.08em', color: 'var(--blue)', fontWeight: 700 }}>
        {stat}
      </span>
    </div>
  );
}

/* ── Panel transition ────────────────────────────────── */
const panelEase = [0.16, 1, 0.3, 1];
const panelVariants = {
  enter: { opacity: 0, y: 12 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: panelEase },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
  },
};
const panelVariantsReduced = {
  enter: { opacity: 1, y: 0 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: 0 },
};

/* ── Main AgentPanel ────────────────────────────────── */
function AgentPanel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % AGENTS.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused]);

  const agent = AGENTS[active];
  const Icon = agent.Icon;

  return (
    <div className="reveal agent-panel">
      {/* ── Top: tab strip ── */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 'calc(6px * var(--ui-scale))',
        justifyContent: 'center',
        padding: 'calc(14px * var(--ui-scale)) calc(16px * var(--ui-scale))',
        background: '#fff',
        borderBottom: '1px solid var(--line)',
      }}>
        {AGENTS.map((a, i) => {
          const Ic = a.Icon;
          const isActive = i === active;
          return (
            <button
              key={a.h}
              type="button"
              onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 10000); }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
              style={{
                display: 'flex', alignItems: 'center', gap: 'calc(7px * var(--ui-scale))',
                padding: 'calc(7px * var(--ui-scale)) calc(13px * var(--ui-scale))',
                background: isActive
                  ? 'linear-gradient(180deg, var(--blue-bright) 0%, var(--blue) 100%)'
                  : 'transparent',
                border: `1.5px solid ${isActive ? 'var(--blue)' : 'transparent'}`,
                borderRadius: 'calc(10px * var(--ui-scale))',
                cursor: 'pointer',
                transition: 'background .18s, box-shadow .18s',
                boxShadow: isActive
                  ? '0 8px 20px -6px var(--blue-glow), inset 0 1px 0 rgba(255,255,255,.22)'
                  : 'none',
              }}
            >
              <span style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 'calc(20px * var(--ui-scale))', height: 'calc(20px * var(--ui-scale))',
                borderRadius: 'calc(5px * var(--ui-scale))',
                background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.06)',
                color: isActive ? '#fff' : 'var(--ink-3)',
                flexShrink: 0, transition: 'background .18s, color .18s',
              }}>
                <Ic size={11} strokeWidth={1.75} />
              </span>
              <span style={{
                fontSize: 'calc(11.5px * var(--ui-scale))', fontWeight: isActive ? 600 : 400,
                color: isActive ? '#fff' : 'var(--ink-3)',
                lineHeight: 1, transition: 'color .18s', whiteSpace: 'nowrap',
              }}>
                {a.h}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Middle: detail panel ── */}
      <div className="agent-panel-detail">
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            className="agent-panel-detail__content"
            variants={reduceMotion ? panelVariantsReduced : panelVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Header */}
            <div className="agent-panel-header">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 'calc(54px * var(--ui-scale))', height: 'calc(54px * var(--ui-scale))',
                  borderRadius: 'calc(14px * var(--ui-scale))',
                  background: 'var(--blue-soft)', color: 'var(--blue)', flexShrink: 0,
                }}>
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <div className="agent-panel-header-copy">
                  <div className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.12em', color: 'var(--blue)', marginBottom: 'calc(4px * var(--ui-scale))' }}>
                    AGENT {String(active + 1).padStart(2, '0')} · {agent.tag}
                  </div>
                  <h3 className="display agent-panel-title">
                    {agent.h}
                  </h3>
                </div>
              </div>
              <StatBadge stat={agent.stat} />
            </div>

            {/* Description */}
            <p className="agent-panel-desc">
              {agent.b}
            </p>

            {/* HOW IT WORKS - React Flow */}
            <div>
              <div className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 'calc(8px * var(--ui-scale))' }}>
                HOW IT WORKS
              </div>
              <AgentFlow steps={agent.steps} agentKey={active} />
            </div>

            {/* WHAT IT DOES */}
            <div className="agent-panel-bullets-wrap">
              <div className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 'calc(14px * var(--ui-scale))' }}>
                WHAT IT DOES
              </div>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'calc(10px * var(--ui-scale))' }}>
                {agent.bullets.map((b) => (
                  <li
                    key={b}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 'calc(9px * var(--ui-scale))', fontSize: 'calc(13.5px * var(--ui-scale))', color: 'var(--ink-2)', lineHeight: 1.5 }}
                  >
                    <span style={{
                      width: 'calc(18px * var(--ui-scale))', height: 'calc(18px * var(--ui-scale))',
                      borderRadius: '50%', background: 'var(--blue-soft)', color: 'var(--blue)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: 'calc(1px * var(--ui-scale))',
                    }}>
                      <svg viewBox="0 0 10 10" fill="none" style={{ width: 8, height: 8 }}>
                        <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom: coming soon inner container ── */}
      <div style={{ padding: 'calc(0px * var(--ui-scale)) calc(24px * var(--ui-scale)) calc(24px * var(--ui-scale))' }}>
        <div style={{
          border: '1.5px dashed var(--line-2)',
          borderRadius: 'calc(12px * var(--ui-scale))',
          padding: 'calc(14px * var(--ui-scale)) calc(20px * var(--ui-scale))',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-lg)',
        }}>
          <p style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--ink-2)' }}>More agents coming</strong> - released as immigration workflows evolve. Existing clients get access automatically, no additional fees.
          </p>
          <span className="pill" style={{ flexShrink: 0, fontSize: 'calc(10.5px * var(--ui-scale))', letterSpacing: '.08em', textTransform: 'uppercase' }}>
            Coming soon
          </span>
        </div>
      </div>

    </div>
  );
}

export default function Agents() {
  return (
    <>
      <PageHero
        eyebrow="Codio AI Agents"
        lead="Not Generic AI."
        emphasis="Immigration AI."
        sub="Codio AI Agents are a team of specialized agents - built exclusively for immigration workflows, integrated natively with CodioCMS, deployed and managed by our team. 10 agents today. More coming as immigration workflows evolve."
        primary={{ href: '/contact', label: 'Book a 30-minute demo' }}
        secondary={{ href: '/platform', label: 'See the platform' }}
      />

      <Section
        id="agents"
        eyebrow="The Team"
        lead="Specialized agents."
        emphasis="One immigration team."
        intro="Each agent is purpose-built for a stage of the immigration workflow - working together inside CodioCMS, 24/7, with no configuration required from your firm."
        introMaxWidth="68ch"
        headAlign="center"
      >
        <AgentPanel />
      </Section>

      <Section
        id="case-assistant"
        eyebrow="Built Into Every Case"
        lead="Stop digging through tabs."
        emphasis="Just ask."
        headInline
        headAlign="center"
      >
        <div className="reveal case-assistant-head">
          <p className="case-assistant-head-lead">
            Every case in CodioCMS has a built-in Case Assistant - a conversational AI that knows the full case context:
            documents, workflow steps, deadlines, assignments, and every change logged against the matter. Ask in plain
            English from inside the case - what&apos;s blocking progress, when a visa expires, whether an RFE response is
            complete, who still needs to sign off - and get a direct answer in seconds, grounded in your actual case data
            rather than generic model output.
          </p>
        </div>

        <div className="reveal case-assistant-grid">
          <CaseAssistantMock />

          <div className="case-assistant-copy">
            <div className="case-assistant-copy-head">
              <h3 className="display case-assistant-copy-title">
                <span>The interface above the agents.</span>{' '}
                <em className="text-grad-blue">Every answer has a source.</em>
              </h3>
              <p className="case-assistant-copy-lead">
                Behind the Case Assistant, specialist sub-agents handle the work - each expert in its domain.
                The Assistant is the interface; the agents are the engine. Every answer is grounded in actual
                case data, not a model hallucination.
              </p>
            </div>

            <div className="case-assistant-examples-panel">
              <div className="mono case-assistant-examples-label">Try asking</div>
              <div className="case-assistant-examples">
                {CASE_ASSISTANT_EXAMPLES.map((item) => (
                  <div key={item.q} className="case-assistant-example">
                    <div className="mono case-assistant-example-q">{item.q}</div>
                    <div className="case-assistant-example-a">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-assistant-callout">
              <p className="case-assistant-callout-text">
                <strong>No more status-update calls.</strong>{' '}
                Attorneys, case managers, and partners get the answer themselves in seconds -
                the entire premise of the 5-minute &ldquo;what&apos;s the status?&rdquo; call is eliminated.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="difference"
        tone="sec-surface"
        eyebrow="Why It Matters"
        lead="The AI difference"
        emphasis="that matters."
        intro="Most firms are choosing between generic AI tools they have to wrangle and DIY solutions they have to build. Codio AI Agents are a managed, integrated alternative."
        headAlign="center"
        headInline
      >
        <div
          className="check-cols"
          style={{
            marginTop: 'var(--space-3xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-xl)',
            alignItems: 'stretch',
          }}
        >
          {COMPARISON.map((col, i) => (
            <article
              key={col.title}
              className={`feature-card${col.featured ? ' feature-card--featured' : ''} reveal d${i}`}
              style={{ display: 'flex', flexDirection: 'column', padding: 'calc(32px * var(--ui-scale))' }}
            >
              <h3
                className="display"
                style={{
                  fontSize: 'var(--text-display-md)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: 'var(--space-lg)',
                }}
              >
                {col.featured ? (
                  <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>
                    {col.title}
                  </em>
                ) : (
                  col.title
                )}
              </h3>
              <ul className="check-list" style={{ display: 'grid', gap: 'var(--space-md)' }}>
                {col.points.map((p) => (
                  <li key={p}>
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="roadmap"
        eyebrow="Built to Grow"
        lead="10 agents today."
        emphasis="More coming."
        headAlign="center"
        headInline
      >
        <div
          className="reveal d1"
          style={{
            marginTop: 'var(--space-md)',
            maxWidth: 'calc(760px * var(--ui-scale))',
            marginInline: 'auto',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.7, position: 'static' }}>
            Codio AI Agents are designed to grow with your firm. New agents are released as immigration workflows evolve
            and as our clients identify new opportunities for automation. Existing clients get access to new agents as
            part of the platform - <strong>no separate licensing, no per-agent fees.</strong>
          </p>
          <hr className="rule-blue" style={{ marginTop: 'var(--space-lg)', marginInline: 'auto' }} />
        </div>
      </Section>

      <FaqAccordion
        id="faq"
        eyebrow="Common Questions"
        lead="Questions about"
        emphasis="Codio AI Agents."
        tone="sec-surface"
        items={[
          {
            q: 'What are Codio AI Agents?',
            a: "Codio AI Agents are a team of 10 specialized autonomous AI workers purpose-built for immigration workflows. Each agent handles a specific stage of the immigration process: intake, document extraction, document validation, form preparation, deadline tracking, client communications, renewal detection, business development, ecosystem coordination, and government notice monitoring. They operate natively within CodioCMS, run 24/7, and are deployed and managed by GlobalCodio's team.",
            meta: ['10 specialist agents', '24/7 operation'],
          },
          {
            q: 'How do AI agents protect attorney-client privilege and client data?',
            a: 'Codio AI Agents operate within the same role-based access controls as human staff - they cannot take any action requiring elevated permissions. All agent outputs are confidence-scored and flagged for attorney review before being applied to a case. GlobalCodio never trains AI models on client data. Every agent action is written to an immutable, cryptographically signed audit log.',
            meta: ['RBAC-bound', 'Attorney review required'],
          },
          {
            q: 'How much time do AI agents save on immigration case preparation?',
            a: 'Immigration law firms on GlobalCodio typically see a 70% reduction in case preparation time. AI agents handle document extraction, form preparation, questionnaire processing, and deadline tracking - work that previously took hours takes minutes. The human equivalent of all 10 AI agents would cost approximately $499,000 per year in salaries.',
            meta: ['70% time reduction', '$499K staff cost replaced'],
          },
          {
            q: 'Can AI agents replace paralegals or case managers?',
            a: 'AI agents handle the repetitive work paralegals and case managers currently do: document processing, form filling, deadline monitoring, client status updates, and renewal outreach. This frees your human team for strategy, client relationships, and complex legal judgment. Most firms scale their caseload significantly without adding headcount.',
            meta: ['Augment, not replace', 'Scale without hiring'],
          },
          {
            q: 'How does the Renewal Agent recover revenue from existing clients?',
            a: 'The Renewal Agent continuously scans your existing client database for expiring visas, green card upgrade eligibility, citizenship eligibility, and dormant cases worth reopening. It identifies these opportunities, drafts personalized outreach automatically, and tracks response rates and revenue recovered. Most firms recover $50,000–$300,000 in additional annual revenue from clients already in their database.',
            meta: ['$50K–$300K recovered', 'Zero new marketing spend'],
          },
          {
            q: 'Do we need technical staff to set up or manage the AI agents?',
            a: 'No. GlobalCodio deploys, configures, monitors, and manages all AI agents as part of the managed service. Your firm needs no IT staff, data scientists, or AI expertise. CodioOps - bundled with every engagement - handles all ongoing management and optimization.',
            meta: ['Fully managed', 'No IT staff needed'],
          },
        ]}
      />
      <CtaBand
        lead="See Codio AI Agents in action."
        emphasis="On your real cases."
        primary={{ href: '/contact', label: 'Book a 30-minute demo' }}
        secondary={{ href: '/platform', label: 'Explore the platform' }}
      />
    </>
  );
}
