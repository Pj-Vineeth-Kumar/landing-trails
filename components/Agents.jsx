/* Agents section — meet the AI workforce */

const Agents = () => {
  const agents = [
    {
      id: 'intel',
      name: 'Document Intelligence',
      tag: 'AGENT · 01',
      lede: 'Reads passports, degrees, pay stubs, I-94s and letters. Classifies, extracts, validates, flags expiry — then maps every field to the case data model.',
      metric: '98%',
      metricLabel: 'extraction accuracy',
      body: 'Replaces 3–5 hours of paralegal data entry per case. Validates against 21 document types across 7 jurisdictions. Every field carries a confidence score and full source-box overlay.',
    },
    {
      id: 'compliance',
      name: 'Compliance Verification',
      tag: 'AGENT · 02',
      lede: 'Runs country- and visa-specific eligibility checks against 400+ rules. Produces a 0.0–1.0 risk score and routes the case down the right branch.',
      metric: '<10%',
      metricLabel: 'RFE rate vs 15–25%',
      body: 'Pulls live updates from the Policy Intelligence Engine. Tied into playbook branching: low-risk goes standard, medium triggers elevated review, high escalates to senior partner.',
    },
    {
      id: 'formfill',
      name: 'Form Registry Agent',
      tag: 'AGENT · 03',
      lede: 'Auto-populates I-129, I-140, PERM, LCA, and 40+ government forms directly from questionnaire responses. Generates filing-ready PDFs.',
      metric: '>95%',
      metricLabel: 'field acceptance',
      body: 'End-to-end lineage: every form field traces back to the exact question that produced it. Flag a mapping issue inline and it routes to the Form Registry Admin.',
    },
    {
      id: 'drafter',
      name: 'Evidentiary Drafter',
      tag: 'AGENT · 04',
      lede: 'Drafts support letters, cover letters, and RFE responses using the firm\'s writing style profile — with per-paragraph confidence and track changes.',
      metric: '4×',
      metricLabel: 'faster first drafts',
      body: 'Learns firm voice from past filings. Merges case data with evidentiary templates. Attorney reviews a polished draft, not a blank page.',
    },
    {
      id: 'intake',
      name: 'Email & WhatsApp Intake',
      tag: 'AGENT · 05',
      lede: 'Parses incoming emails and WhatsApp messages into structured case requests and document uploads. No more client inbox archaeology.',
      metric: '<1 day',
      metricLabel: 'questionnaire turnaround',
      body: 'Works over email and WhatsApp Business API. Classifies attachments, maps answers to questionnaire questions, and only escalates what actually needs a human.',
    },
    {
      id: 'policy',
      name: 'Policy Intelligence',
      tag: 'AGENT · 06',
      lede: 'Monitors USCIS, DOL, UKVI, BAMF and 12 other authorities. When a rule changes, it impact-analyses every active case overnight.',
      metric: '<60s',
      metricLabel: 'rule propagation',
      body: 'Surfaces affected cases, re-computes risk scores, and drafts HR-ready change memos. A regulatory shift stops being a fire drill.',
    },
  ];

  return (
    <section id="agents" style={{padding:'140px 0',position:'relative'}}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal" style={{marginBottom:20}}><span className="dot"></span>The Agent Stack</div>
            <h2 className="reveal d1">
              Six agents,<br/>
              one <em>quiet,</em> <em>relentless</em><br/>
              workforce.
            </h2>
          </div>
          <p className="sub reveal d2">
            Every agent is scoped, audited, and supervised. They do the repetitive, regulated, 60–70% of the work — so attorneys can spend their hours on strategy, judgment, and the 30% that actually requires a human.
          </p>
        </div>

        <AgentGrid agents={agents}/>
      </div>
    </section>
  );
};

const AgentGrid = ({agents}) => {
  const [active, setActive] = React.useState(null);
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:0,borderTop:'1px solid var(--line)',borderLeft:'1px solid var(--line)'}} className="agent-grid">
      {agents.map((a, i) => (
        <AgentCard key={a.id} agent={a} idx={i} active={active===a.id} onEnter={()=>setActive(a.id)} onLeave={()=>setActive(null)}/>
      ))}
      <style>{`
        @media (max-width:900px){ .agent-grid{grid-template-columns:1fr !important;} }
        @media (min-width:901px) and (max-width:1100px){ .agent-grid{grid-template-columns:repeat(2,1fr) !important;} }
      `}</style>
    </div>
  );
};

const AgentCard = ({agent, idx, active, onEnter, onLeave}) => {
  return (
    <div className="reveal" style={{
      borderRight:'1px solid var(--line)',
      borderBottom:'1px solid var(--line)',
      padding:'36px 32px 40px',
      position:'relative',
      background: active ? '#fff' : 'transparent',
      transition:'background .4s',
      cursor:'default',
      minHeight:380,
    }}
    onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {/* Hover indicator */}
      <div style={{position:'absolute',left:0,top:0,height:2,width:active?'100%':0,background:'var(--ink)',transition:'width .6s cubic-bezier(.2,.7,.2,1)'}}/>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24,fontSize:11,letterSpacing:'.12em'}} className="mono">
        <span style={{color:'var(--muted)'}}>{agent.tag}</span>
        <AgentIcon id={agent.id} active={active}/>
      </div>

      <h3 style={{fontSize:26,letterSpacing:'-0.02em',lineHeight:1.05,fontWeight:500,marginBottom:14,maxWidth:'14ch'}}>
        {agent.name}
      </h3>

      <p style={{fontSize:14,lineHeight:1.55,color:'var(--ink-2)',marginBottom:20}}>
        {agent.lede}
      </p>

      <div style={{
        maxHeight: active ? 160 : 0,
        opacity: active ? 1 : 0,
        overflow:'hidden',
        transition:'max-height .5s cubic-bezier(.2,.7,.2,1), opacity .4s',
        marginBottom: active ? 20 : 0,
      }}>
        <p style={{fontSize:13,lineHeight:1.55,color:'var(--muted)',fontStyle:'italic',fontFamily:'var(--serif)',paddingTop:12,borderTop:'1px dashed var(--line-2)'}}>
          {agent.body}
        </p>
      </div>

      <div style={{position:'absolute',left:32,right:32,bottom:28,display:'flex',alignItems:'baseline',gap:10,borderTop:'1px solid var(--line)',paddingTop:16}}>
        <span className="serif" style={{fontSize:34,color:'var(--accent)',letterSpacing:'-0.02em'}}>{agent.metric}</span>
        <span style={{fontSize:11.5,color:'var(--muted)',letterSpacing:'.02em'}}>{agent.metricLabel}</span>
      </div>
    </div>
  );
};

/* Agent icons — each is a small editorial illustration */
const AgentIcon = ({id, active}) => {
  const size = 40;
  const stroke = active ? 'var(--accent)' : 'var(--ink-2)';
  const anim = {transition:'all .5s cubic-bezier(.2,.7,.2,1)'};

  if (id==='intel') return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={anim}>
      <rect x="8" y="6" width="20" height="26" rx="2" stroke={stroke} strokeWidth="1.2"/>
      <path d="M12 12h12M12 16h12M12 20h8M12 24h10" stroke={stroke} strokeWidth="1"/>
      <circle cx="30" cy="30" r="6" fill={active?'var(--accent)':'none'} stroke={stroke} strokeWidth="1.2"/>
      {active && <path d="M27 30l2 2 4-4" stroke="#fff" strokeWidth="1.5" fill="none"/>}
    </svg>
  );
  if (id==='compliance') return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={anim}>
      <path d="M20 4l12 5v9c0 8-5 14-12 18-7-4-12-10-12-18V9l12-5z" stroke={stroke} strokeWidth="1.2" fill={active?'rgba(25,80,198,.08)':'none'}/>
      <path d="M14 20l4 4 8-9" stroke={stroke} strokeWidth="1.4" fill="none"/>
    </svg>
  );
  if (id==='formfill') return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={anim}>
      <rect x="6" y="6" width="28" height="28" rx="2" stroke={stroke} strokeWidth="1.2"/>
      <rect x="10" y="10" width="8" height="3" fill={active?'var(--accent)':stroke} opacity=".7"/>
      <rect x="10" y="16" width="12" height="3" fill={stroke} opacity=".4"/>
      <rect x="10" y="22" width="6" height="3" fill={stroke} opacity=".3"/>
      <path d="M22 22l4 4 8-10" stroke={active?'var(--accent)':stroke} strokeWidth="1.4" fill="none"/>
    </svg>
  );
  if (id==='drafter') return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={anim}>
      <path d="M6 30l4-4 18-18 4 4-18 18-4 4z" stroke={stroke} strokeWidth="1.2" fill={active?'rgba(25,80,198,.08)':'none'}/>
      <path d="M24 8l4 4" stroke={stroke} strokeWidth="1.2"/>
      <path d="M6 34h20" stroke={stroke} strokeWidth="1.2"/>
    </svg>
  );
  if (id==='intake') return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={anim}>
      <rect x="4" y="10" width="32" height="22" rx="2" stroke={stroke} strokeWidth="1.2"/>
      <path d="M4 12l16 11L36 12" stroke={stroke} strokeWidth="1.2"/>
      <circle cx="32" cy="10" r="4" fill={active?'var(--spark)':'var(--paper-2)'} stroke={stroke} strokeWidth="1"/>
    </svg>
  );
  if (id==='policy') return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={anim}>
      <circle cx="20" cy="20" r="14" stroke={stroke} strokeWidth="1.2"/>
      <path d="M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28" stroke={stroke} strokeWidth="1"/>
      <circle cx="30" cy="10" r="3" fill={active?'var(--accent)':'var(--paper-2)'} stroke={stroke} strokeWidth="1"/>
    </svg>
  );
  return null;
};

window.Agents = Agents;
