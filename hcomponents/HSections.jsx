/* Harvey-style body sections — logo wall, capabilities, quote, uses, trust */

/* ——— Logo wall ——— */
const HLogoWall = () => {
  const logos = ['Kirkland','Latham & Watkins','Skadden','Paul Weiss','Cravath','Wachtell','Sullivan & Cromwell','Ropes & Gray','Cleary Gottlieb','Davis Polk'];
  return (
    <section style={{padding:'40px 0 80px', borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
      <div className="container">
        <div className="reveal" style={{textAlign:'center',marginBottom:36}}>
          <span className="eyebrow">Trusted by immigration practices at</span>
        </div>
        <div className="reveal d1" style={{overflow:'hidden',position:'relative'}}>
          <div style={{position:'absolute',left:0,top:0,bottom:0,width:120,background:'linear-gradient(to right, var(--cream), transparent)',zIndex:2}}/>
          <div style={{position:'absolute',right:0,top:0,bottom:0,width:120,background:'linear-gradient(to left, var(--cream), transparent)',zIndex:2}}/>
          <div style={{display:'flex',gap:72,animation:'marquee 50s linear infinite',whiteSpace:'nowrap'}}>
            {[...logos,...logos].map((l,i)=>(
              <span key={i} className="serif" style={{fontSize:24,color:'var(--ink-3)',letterSpacing:'-0.015em',fontStyle:'italic',fontWeight:300,opacity:.7}}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ——— Capabilities — Harvey's tabbed section ——— */
const HCapabilities = ({tweaks}) => {
  const [tab, setTab] = React.useState(0);
  const caps = [
    {
      tag:'01 · Intake',
      title:'From email thread to structured case.',
      body:'Intake agents read incoming emails and WhatsApp messages. They classify attachments, map answers to questionnaire items, and open a case only when something actually needs a human.',
      meta:'<1 day questionnaire turnaround · 21 document types'
    },
    {
      tag:'02 · Extraction',
      title:'Every field, sourced and confidence-scored.',
      body:'Document Intelligence reads passports, degrees, pay stubs and I-94s. Each extracted field carries a confidence score and a source-box overlay, ready for attorney acceptance in one click.',
      meta:'98% extraction accuracy · full lineage'
    },
    {
      tag:'03 · Compliance',
      title:'400+ rules, continuously evaluated.',
      body:'Compliance Verification runs country- and visa-specific checks in parallel. It produces a 0.0–1.0 risk score and routes the case into the right playbook branch automatically.',
      meta:'<10% RFE rate · 7 jurisdictions'
    },
    {
      tag:'04 · Preparation',
      title:'Government forms, filing-ready.',
      body:'Form Registry auto-populates I-129, I-140, PERM, LCA and 40+ forms directly from questionnaire responses. Every field ties back to the question that produced it.',
      meta:'>95% field acceptance · PDF-ready'
    },
    {
      tag:'05 · Drafting',
      title:'Evidentiary letters in your firm\'s voice.',
      body:'The Evidentiary Drafter learns your writing style from past filings, then produces support letters, cover letters, and RFE responses with per-paragraph confidence and track changes.',
      meta:'4× faster first drafts · tone-matched'
    },
  ];

  return (
    <section id="platform" style={{padding:'160px 0'}}>
      <div className="container">
        <div className="reveal" style={{maxWidth:'24ch',marginBottom:80}}>
          <div className="eyebrow" style={{marginBottom:24}}>Capabilities</div>
          <h2 className="serif" style={{fontSize:'clamp(44px,6vw,84px)',lineHeight:.98,letterSpacing:'-0.03em',fontWeight:300}}>
            A standing workforce <span className="serif-italic">for the</span> regulated 60%.
          </h2>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'340px 1fr',gap:80,alignItems:'start'}} className="hcap-grid">
          <div style={{borderTop:'1px solid var(--ink)',borderBottom:'1px solid var(--ink)'}}>
            {caps.map((c,i)=>(
              <button key={i} onClick={()=>setTab(i)} style={{
                display:'block',width:'100%',textAlign:'left',
                padding:'22px 4px',
                borderBottom: i<caps.length-1?'1px solid var(--line-2)':'none',
                fontSize:17,fontFamily:'var(--display)',fontWeight:300,letterSpacing:'-0.015em',
                color: tab===i?'var(--ink)':'var(--muted)',
                fontStyle: tab===i?'italic':'normal',
                transition:'color .3s',
                position:'relative',
              }}>
                <span style={{
                  position:'absolute',left:-40,top:'50%',transform:'translateY(-50%)',
                  width: tab===i?24:0, height:1, background:'var(--ink)',
                  transition:'width .4s cubic-bezier(.2,.7,.2,1)',
                }}/>
                <span style={{fontSize:11,fontFamily:'var(--mono)',color:'var(--muted)',marginRight:12,letterSpacing:'.08em',fontStyle:'normal',fontWeight:400}}>{c.tag.split(' · ')[0]}</span>
                {c.tag.split(' · ')[1]}
              </button>
            ))}
          </div>

          <div style={{minHeight:420, position:'relative'}}>
            {caps.map((c,i)=>(
              <div key={i} style={{
                opacity: tab===i?1:0,
                transform: tab===i?'none':'translateY(12px)',
                transition:'opacity .5s cubic-bezier(.2,.7,.2,1), transform .5s cubic-bezier(.2,.7,.2,1)',
                position: tab===i?'relative':'absolute',top:0,left:0,right:0,
                pointerEvents: tab===i?'auto':'none',
              }}>
                <div className="serif-italic" style={{fontSize:14,color:'var(--muted)',marginBottom:28,letterSpacing:'0'}}>{c.tag}</div>
                <h3 className="serif" style={{fontSize:'clamp(34px,4vw,56px)',lineHeight:1.04,letterSpacing:'-0.025em',fontWeight:300,maxWidth:'18ch',marginBottom:28}}>
                  {c.title}
                </h3>
                <p style={{fontSize:17,lineHeight:1.6,color:'var(--ink-3)',maxWidth:'52ch',marginBottom:36}}>
                  {c.body}
                </p>
                <div style={{fontSize:12,fontFamily:'var(--mono)',letterSpacing:'.06em',color:'var(--muted)',borderTop:'1px solid var(--line-2)',paddingTop:16,maxWidth:500}}>
                  {c.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.hcap-grid{grid-template-columns:1fr !important;gap:48px !important;}}`}</style>
      </div>
    </section>
  );
};

/* ——— Editorial Quote ——— */
const HQuote = () => (
  <section style={{padding:'140px 0', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)', background:'var(--cream-2)'}}>
    <div className="container-narrow" style={{textAlign:'center'}}>
      <div className="reveal serif" style={{fontSize:'clamp(32px,4.4vw,64px)',lineHeight:1.12,letterSpacing:'-0.02em',fontWeight:300,color:'var(--ink)',marginBottom:48}}>
        <span className="serif-italic" style={{fontSize:'1.3em',color:'var(--accent)',verticalAlign:'-0.15em',marginRight:'0.05em'}}>"</span>
        When USCIS shifts a rule at 4&thinsp;pm, every affected case carries an impact memo by morning — with a plain-English explanation for the employee. That used to be a three-day fire drill.
        <span className="serif-italic" style={{fontSize:'1.3em',color:'var(--accent)',marginLeft:'0.05em'}}>"</span>
      </div>
      <div className="reveal d1" style={{display:'inline-flex',alignItems:'center',gap:16}}>
        <div style={{width:44,height:44,borderRadius:'50%',background:'var(--ink)',color:'var(--cream)',display:'grid',placeItems:'center',fontFamily:'var(--display)',fontStyle:'italic',fontSize:16}}>MR</div>
        <div style={{textAlign:'left'}}>
          <div style={{fontWeight:500,fontSize:14}}>Maya Reyes</div>
          <div style={{fontSize:13,color:'var(--muted)'}}>Managing Partner · Reyes &amp; Leung Immigration</div>
        </div>
      </div>
    </div>
  </section>
);

/* ——— Agents grid — quiet editorial ——— */
const HAgents = () => {
  const agents = [
    {n:'01', name:'Document Intelligence', body:'Reads passports, degrees, pay stubs, I-94s. Classifies, extracts, validates. Every field confidence-scored.', m:'98% accuracy'},
    {n:'02', name:'Compliance Verification', body:'400+ country- and visa-specific checks. Produces a risk score and routes the case into the right playbook branch.', m:'<10% RFE rate'},
    {n:'03', name:'Form Registry', body:'Auto-populates I-129, I-140, PERM, LCA and 40+ government forms. Filing-ready PDFs with full lineage.', m:'>95% acceptance'},
    {n:'04', name:'Evidentiary Drafter', body:'Drafts support letters, cover letters, RFE responses in the firm\'s voice. Track changes, per-paragraph confidence.', m:'4× faster drafts'},
    {n:'05', name:'Email & WhatsApp Intake', body:'Parses incoming messages into structured case requests and document uploads. No more inbox archaeology.', m:'<1 day intake'},
    {n:'06', name:'Policy Intelligence', body:'Monitors USCIS, DOL, UKVI, BAMF and 12 other authorities. Impact-analyses every active case overnight.', m:'<60s propagation'},
  ];

  return (
    <section id="agents" style={{padding:'160px 0', background:'var(--cream-2)'}}>
      <div className="container">
        <div className="reveal" style={{marginBottom:72, maxWidth:'32ch'}}>
          <div className="eyebrow" style={{marginBottom:24}}>The agent stack</div>
          <h2 className="serif" style={{fontSize:'clamp(44px,6vw,84px)',lineHeight:.98,letterSpacing:'-0.03em',fontWeight:300}}>
            Six agents, <span className="serif-italic">one workforce</span>.
          </h2>
        </div>

        <div style={{borderTop:'1px solid var(--ink)'}}>
          {agents.map((a,i)=>(
            <HAgentRow key={i} agent={a}/>
          ))}
          <div style={{borderTop:'1px solid var(--ink)'}}/>
        </div>
      </div>
    </section>
  );
};

const HAgentRow = ({agent}) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="reveal" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{
      display:'grid',gridTemplateColumns:'80px 1fr 1.4fr 200px',gap:40,alignItems:'center',
      padding:'36px 0',borderBottom:'1px solid var(--line-2)',
      background: hover?'rgba(20,20,20,.02)':'transparent',
      transition:'background .3s',cursor:'default',
    }} className="hagent-row">
      <span className="mono" style={{fontSize:12,color:'var(--muted)',letterSpacing:'.08em'}}>/{agent.n}</span>
      <div className="serif" style={{fontSize:'clamp(22px,2.2vw,30px)',fontWeight:300,letterSpacing:'-0.02em',lineHeight:1.1}}>
        {hover ? <span className="serif-italic">{agent.name}</span> : agent.name}
      </div>
      <p style={{fontSize:14.5,color:'var(--ink-3)',lineHeight:1.55,maxWidth:'52ch'}}>{agent.body}</p>
      <span className="mono" style={{fontSize:12,color:'var(--ink)',letterSpacing:'.04em',textAlign:'right'}}>{agent.m}</span>
      <style>{`@media(max-width:900px){.hagent-row{grid-template-columns:1fr !important;gap:12px !important;} .hagent-row span:last-child{text-align:left !important;}}`}</style>
    </div>
  );
};

/* ——— Use cases — editorial feature grid ——— */
const HUseCases = () => {
  const cases = [
    {
      num:'01',
      title:'H-1B cap season without the triage.',
      body:'Intake parses incoming corporate requests. Registration, playbook selection, LCA filing and I-129 preparation run in parallel. Attorneys review, not assemble.',
      stat:'8h → 2h',
      statLabel:'per petition',
    },
    {
      num:'02',
      title:'Multi-country L-1 for a global rollout.',
      body:'One case, five jurisdictions. HR sees a unified Health Score. Local counsel gets keyhole access. Policy Intelligence watches each country overnight.',
      stat:'1 dashboard',
      statLabel:'5 firms',
    },
    {
      num:'03',
      title:'PERM with clean evidentiary record.',
      body:'Evidentiary Drafter produces recruitment reports, prevailing-wage justifications, and support letters in the firm\'s voice. Every claim traces to source.',
      stat:'<10%',
      statLabel:'RFE rate',
    },
    {
      num:'04',
      title:'Renewals, before they become fires.',
      body:'Renewal Pipeline surfaces expirations 180 days out. Auto-initiates extensions. Budget estimates flow to Finance. Nothing slips into the red.',
      stat:'0%',
      statLabel:'expiry surprises',
    },
  ];

  return (
    <section id="uses" style={{padding:'160px 0'}}>
      <div className="container">
        <div className="reveal" style={{marginBottom:80,maxWidth:'32ch'}}>
          <div className="eyebrow" style={{marginBottom:24}}>Use cases</div>
          <h2 className="serif" style={{fontSize:'clamp(44px,6vw,84px)',lineHeight:.98,letterSpacing:'-0.03em',fontWeight:300}}>
            Real cases. <span className="serif-italic">Real hours saved.</span>
          </h2>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:0,borderLeft:'1px solid var(--line-2)',borderTop:'1px solid var(--line-2)'}} className="huc-grid">
          {cases.map((c,i)=>(
            <article key={i} className="reveal" style={{
              padding:'56px 48px',
              borderRight:'1px solid var(--line-2)',
              borderBottom:'1px solid var(--line-2)',
              position:'relative',
              transition:'background .3s',
              minHeight:340,
              display:'flex',flexDirection:'column',
            }}
            onMouseEnter={(e)=>e.currentTarget.style.background='rgba(20,20,20,.025)'}
            onMouseLeave={(e)=>e.currentTarget.style.background='transparent'}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:32}}>
                <span className="mono" style={{fontSize:12,color:'var(--muted)',letterSpacing:'.08em'}}>CASE · {c.num}</span>
                <span className="serif-italic" style={{fontSize:32,color:'var(--accent)'}}>{c.stat}</span>
              </div>
              <h3 className="serif" style={{fontSize:'clamp(26px,2.4vw,34px)',lineHeight:1.1,letterSpacing:'-0.02em',fontWeight:300,marginBottom:20,flex:'0 0 auto',maxWidth:'20ch'}}>
                {c.title}
              </h3>
              <p style={{fontSize:15,lineHeight:1.6,color:'var(--ink-3)',flex:1}}>{c.body}</p>
              <div style={{marginTop:24,paddingTop:20,borderTop:'1px solid var(--line-2)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontSize:13,color:'var(--muted)'}}>{c.statLabel}</span>
                <span className="btn-link" style={{fontSize:13}}>Read case →</span>
              </div>
            </article>
          ))}
        </div>
        <style>{`@media(max-width:900px){.huc-grid{grid-template-columns:1fr !important;}}`}</style>
      </div>
    </section>
  );
};

/* ——— Trust bar ——— */
const HTrust = () => (
  <section style={{padding:'120px 0', background:'var(--ink)', color:'var(--cream)'}}>
    <div className="container">
      <div className="reveal" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center',marginBottom:80}} className="htrust-head">
        <h2 className="serif" style={{fontSize:'clamp(36px,5vw,68px)',lineHeight:1.02,letterSpacing:'-0.03em',fontWeight:300}}>
          Built on <span className="serif-italic" style={{color:'#c9a876'}}>auditable</span> foundations.
        </h2>
        <p style={{fontSize:16,lineHeight:1.6,color:'#c9c1ab',maxWidth:'48ch'}}>
          SOC 2 Type II. GDPR-compliant. Row-level security, field-level filtering, render-level restriction. Every AI action, override, and PII touch is logged, with 7-year retention.
        </p>
      </div>

      <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,borderTop:'1px solid rgba(242,237,227,.16)',borderBottom:'1px solid rgba(242,237,227,.16)'}} className="htrust-grid">
        {[
          ['60–70%','of attorney time is repetitive'],
          ['204','product screens, 5 personas'],
          ['>95%','form-fill acceptance'],
          ['<60s','rule-to-case propagation'],
        ].map(([n,l],i)=>(
          <div key={i} style={{padding:'40px 28px',borderRight: i<3?'1px solid rgba(242,237,227,.16)':'none'}}>
            <div className="serif" style={{fontSize:'clamp(48px,5vw,72px)',lineHeight:1,letterSpacing:'-0.03em',fontWeight:300,marginBottom:14,color:'#f2ede3'}}>{n}</div>
            <div style={{fontSize:13.5,color:'#c9c1ab',lineHeight:1.5}}>{l}</div>
          </div>
        ))}
      </div>

      <div className="reveal d2" style={{marginTop:48,display:'flex',gap:32,flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
        {['SOC 2 Type II','GDPR','HIPAA-ready','CCPA','4-eye review','DSAR support','SSO · Okta/Azure'].map(t=>(
          <span key={t} className="mono" style={{fontSize:11,letterSpacing:'.12em',color:'#7a7870',textTransform:'uppercase'}}>{t}</span>
        ))}
      </div>
      <style>{`
        @media(max-width:900px){.htrust-head{grid-template-columns:1fr !important;gap:32px !important;} .htrust-grid{grid-template-columns:1fr 1fr !important;}}
        @media(max-width:600px){.htrust-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </div>
  </section>
);

/* ——— Final CTA ——— */
const HCTA = () => (
  <section id="cta" style={{padding:'160px 0 100px'}}>
    <div className="container-narrow" style={{textAlign:'center'}}>
      <h2 className="reveal serif" style={{fontSize:'clamp(56px,9vw,140px)',lineHeight:.94,letterSpacing:'-0.04em',fontWeight:300,marginBottom:40}}>
        Run your <span className="serif-italic">next</span><br/>case with agents.
      </h2>
      <p className="reveal d1" style={{fontSize:18,lineHeight:1.55,color:'var(--ink-3)',maxWidth:'52ch',margin:'0 auto 44px'}}>
        Book a 30-minute walkthrough. We'll map your highest-volume visa path to where the platform saves hours on day one.
      </p>
      <div className="reveal d2" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
        <a href="#" className="btn btn-primary" style={{padding:'16px 28px',fontSize:14.5}}>
          Request access
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12L12 4M6 4h6v6"/></svg>
        </a>
        <a href="#" className="btn btn-ghost" style={{padding:'16px 28px',fontSize:14.5}}>Talk to sales</a>
      </div>
    </div>
  </section>
);

/* ——— Footer ——— */
const HFooter = () => (
  <footer id="company" style={{borderTop:'1px solid var(--line)',padding:'72px 0 40px'}}>
    <div className="container">
      <div className="reveal" style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr',gap:32,marginBottom:64}} className="hfoot-grid">
        <div style={{maxWidth:'32ch'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:20,fontWeight:500,fontSize:17,letterSpacing:'-0.01em'}}>
            <HLogo/> GlobalCodio
          </div>
          <p style={{fontSize:13.5,color:'var(--muted)',lineHeight:1.6}}>
            The AI platform for global immigration. Built for attorneys, corporations, and the people moving across borders.
          </p>
        </div>
        {[
          ['Platform',['Agents','Workflows','Form Registry','Questionnaires','Policy Intelligence']],
          ['Personas',['Attorneys','Employees','Corporate HR','Providers','Admins']],
          ['Company',['About','Customers','Careers','Contact']],
          ['Legal',['SOC 2','GDPR','DSAR','Privacy','Terms']],
        ].map(([h,items])=>(
          <div key={h}>
            <div className="mono" style={{fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:16}}>{h}</div>
            <ul style={{listStyle:'none',display:'grid',gap:10,fontSize:13.5}}>
              {items.map(it=><li key={it}><a href="#" style={{color:'var(--ink-2)'}}>{it}</a></li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="rule-double" style={{marginBottom:24}}/>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',flexWrap:'wrap',gap:12,fontSize:12,color:'var(--muted)'}}>
        <div>© 2026 GlobalCodio Inc. · San Francisco · Delhi · London</div>
        <div className="mono" style={{letterSpacing:'.04em'}}>v2026.2 · {new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</div>
      </div>

      {/* BIG typographic footer mark */}
      <div aria-hidden="true" style={{fontFamily:'var(--display)',fontSize:'clamp(80px,18vw,260px)',lineHeight:.95,letterSpacing:'-0.055em',fontWeight:300,marginTop:64,color:'var(--cream-3)',pointerEvents:'none',userSelect:'none',textAlign:'center',wordBreak:'break-word'}}>
        GlobalCodio<span className="serif-italic" style={{color:'var(--line-2)'}}>.</span>
      </div>

      <style>{`@media(max-width:900px){.hfoot-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </div>
  </footer>
);

window.HLogoWall = HLogoWall;
window.HCapabilities = HCapabilities;
window.HQuote = HQuote;
window.HAgents = HAgents;
window.HUseCases = HUseCases;
window.HTrust = HTrust;
window.HCTA = HCTA;
window.HFooter = HFooter;
