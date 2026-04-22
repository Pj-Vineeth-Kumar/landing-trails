/* Perform-style body sections */

/* ——— Logo strip ——— */
const PLogoStrip = () => {
  const logos = ['Kirkland','Latham','Skadden','Paul Weiss','Cravath','Wachtell','Sullivan','Ropes & Gray','Cleary','Davis Polk'];
  return (
    <section style={{padding:'60px 0',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)',background:'var(--bg-2)'}}>
      <div className="container">
        <div className="reveal" style={{textAlign:'center',marginBottom:28}}>
          <span className="mono" style={{fontSize:11,letterSpacing:'.14em',color:'var(--muted)',textTransform:'uppercase'}}>Trusted by immigration practices at</span>
        </div>
        <div className="reveal d1" style={{overflow:'hidden',position:'relative'}}>
          <div style={{position:'absolute',left:0,top:0,bottom:0,width:120,background:'linear-gradient(to right, var(--bg-2), transparent)',zIndex:2}}/>
          <div style={{position:'absolute',right:0,top:0,bottom:0,width:120,background:'linear-gradient(to left, var(--bg-2), transparent)',zIndex:2}}/>
          <div style={{display:'flex',gap:64,animation:'marquee 40s linear infinite',whiteSpace:'nowrap'}}>
            {[...logos,...logos].map((l,i)=>(
              <span key={i} style={{fontSize:22,color:'var(--muted)',fontWeight:500,letterSpacing:'-0.02em',opacity:.8}}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ——— Capabilities bento ——— */
const PCapabilities = () => {
  return (
    <section id="platform" style={{padding:'140px 0',position:'relative'}}>
      <div className="container">
        <div className="reveal" style={{textAlign:'center',maxWidth:'42ch',margin:'0 auto 80px'}}>
          <span className="eyebrow" style={{marginBottom:20,display:'inline-block'}}>PLATFORM</span>
          <h2 className="display" style={{fontSize:'clamp(40px,6vw,84px)',marginTop:16}}>
            Every step of a case,<br/><span style={{color:'var(--muted)'}}>automated.</span>
          </h2>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gridTemplateRows:'auto auto',gap:20}} className="pcap-grid">
          {/* Big: Intake */}
          <div className="card-glow reveal" style={{gridColumn:'1 / 2',gridRow:'1 / 3',padding:36,position:'relative',overflow:'hidden',minHeight:520}}>
            <div style={{position:'absolute',top:-60,right:-60,width:400,height:400,background:'radial-gradient(circle,rgba(25,80,198,.1),transparent 70%)',filter:'blur(40px)'}}/>
            <div style={{position:'relative'}}>
              <span className="eyebrow">01 · INTAKE</span>
              <h3 className="display" style={{fontSize:40,marginTop:16,marginBottom:20,maxWidth:'16ch'}}>
                From inbox to structured case.
              </h3>
              <p style={{fontSize:15,color:'var(--text-2)',lineHeight:1.6,marginBottom:36,maxWidth:'44ch'}}>
                Intake agents read incoming emails and WhatsApp messages, classify attachments, and map answers to questionnaire items. A case only opens when something actually needs a human.
              </p>

              {/* Mini flow */}
              <div style={{display:'grid',gap:12}}>
                {[
                  ['newcase@techcorp.globalcodio.com','email','IN'],
                  ['priya.sharma@techcorp.com — 3 attachments','whatsapp','PARSE'],
                  ['case.TECH-2026-0347 opened','case','OPEN'],
                ].map(([l,t,tag],i)=>(
                  <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 14px',background:'var(--bg-3)',border:'1px solid var(--line)',borderRadius:8,fontSize:13}}>
                    <span style={{width:8,height:8,borderRadius:'50%',background:i===2?'var(--accent)':'var(--muted)',boxShadow:i===2?'0 0 8px var(--accent)':'none'}}/>
                    <span style={{flex:1,color:'var(--text-2)'}} className="mono">{l}</span>
                    <span className="mono" style={{fontSize:10.5,color:'var(--muted)',letterSpacing:'.08em'}}>{tag}</span>
                  </div>
                ))}
              </div>

              <div style={{position:'absolute',bottom:0,left:0,right:0,display:'flex',gap:24,marginTop:32}}>
                <div><div className="mono" style={{fontSize:24,color:'var(--accent)'}}>&lt;1 day</div><div className="mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase'}}>Questionnaire turnaround</div></div>
                <div><div className="mono" style={{fontSize:24,color:'var(--accent)'}}>21</div><div className="mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase'}}>Document types</div></div>
              </div>
            </div>
          </div>

          {/* Extraction */}
          <div className="card-glow reveal d1" style={{gridColumn:'2 / 3',padding:28,minHeight:250}}>
            <span className="eyebrow">02 · EXTRACTION</span>
            <h3 className="display" style={{fontSize:24,marginTop:12,marginBottom:14}}>Confidence-scored fields.</h3>
            <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.55,marginBottom:18}}>Passports, degrees, pay stubs. Each field sourced with overlay.</p>
            <div className="mono" style={{fontSize:32,color:'var(--accent)',letterSpacing:'-0.02em'}}>98.2%</div>
            <div className="mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase'}}>Accuracy</div>
          </div>

          {/* Compliance */}
          <div className="card-glow reveal d2" style={{gridColumn:'3 / 4',padding:28,minHeight:250}}>
            <span className="eyebrow">03 · COMPLIANCE</span>
            <h3 className="display" style={{fontSize:24,marginTop:12,marginBottom:14}}>400+ rules, always on.</h3>
            <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.55,marginBottom:18}}>Per-country, per-visa. Risk-scored and routed.</p>
            <div className="mono" style={{fontSize:32,color:'var(--accent)',letterSpacing:'-0.02em'}}>&lt;10%</div>
            <div className="mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase'}}>RFE rate</div>
          </div>

          {/* Preparation */}
          <div className="card-glow reveal d3" style={{gridColumn:'2 / 3',padding:28,minHeight:250}}>
            <span className="eyebrow">04 · PREPARATION</span>
            <h3 className="display" style={{fontSize:24,marginTop:12,marginBottom:14}}>Filing-ready PDFs.</h3>
            <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.55,marginBottom:18}}>40+ forms auto-populated with full lineage.</p>
            <div className="mono" style={{fontSize:32,color:'var(--accent)',letterSpacing:'-0.02em'}}>&gt;95%</div>
            <div className="mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase'}}>Field acceptance</div>
          </div>

          {/* Drafting */}
          <div className="card-glow reveal d4" style={{gridColumn:'3 / 4',padding:28,minHeight:250}}>
            <span className="eyebrow">05 · DRAFTING</span>
            <h3 className="display" style={{fontSize:24,marginTop:12,marginBottom:14}}>Letters in your voice.</h3>
            <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.55,marginBottom:18}}>Support, cover, RFE responses — firm-tone-matched.</p>
            <div className="mono" style={{fontSize:32,color:'var(--accent)',letterSpacing:'-0.02em'}}>4×</div>
            <div className="mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase'}}>Faster drafts</div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.pcap-grid{grid-template-columns:1fr !important;}.pcap-grid > div{grid-column:1 !important;grid-row:auto !important;}}`}</style>
      </div>
    </section>
  );
};

/* ——— Agents — data table style ——— */
const PAgents = () => {
  const agents = [
    {n:'01',name:'Document Intelligence',body:'Reads passports, degrees, pay stubs, I-94s. Classifies, extracts, validates with confidence scores.',m:'98% accuracy'},
    {n:'02',name:'Compliance Verification',body:'400+ country- and visa-specific checks. Produces risk score and routes to the right playbook branch.',m:'<10% RFE rate'},
    {n:'03',name:'Form Registry',body:'Auto-populates I-129, I-140, PERM, LCA and 40+ government forms. Full field-to-question lineage.',m:'>95% acceptance'},
    {n:'04',name:'Evidentiary Drafter',body:'Support letters, cover letters, RFE responses in the firm\'s voice. Track changes, per-paragraph confidence.',m:'4× faster drafts'},
    {n:'05',name:'Email & WhatsApp Intake',body:'Parses incoming messages into structured case requests and document uploads.',m:'<1 day intake'},
    {n:'06',name:'Policy Intelligence',body:'Monitors USCIS, DOL, UKVI, BAMF and 12 other authorities. Impact-analyses every active case overnight.',m:'<60s propagation'},
  ];

  return (
    <section id="agents" style={{padding:'140px 0',background:'var(--bg-2)',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
      <div className="container">
        <div className="reveal" style={{marginBottom:64,maxWidth:'38ch'}}>
          <span className="eyebrow">AGENT STACK</span>
          <h2 className="display" style={{fontSize:'clamp(40px,6vw,84px)',marginTop:16}}>
            Six agents.<br/><span style={{color:'var(--accent)'}}>One workforce.</span>
          </h2>
        </div>

        <div style={{border:'1px solid var(--line)',borderRadius:12,overflow:'hidden'}}>
          <div style={{display:'grid',gridTemplateColumns:'80px 1fr 1.6fr 200px',gap:0,padding:'16px 24px',background:'var(--bg-3)',borderBottom:'1px solid var(--line)'}} className="page-head">
            <span className="mono" style={{fontSize:10.5,color:'var(--muted)',letterSpacing:'.14em'}}>ID</span>
            <span className="mono" style={{fontSize:10.5,color:'var(--muted)',letterSpacing:'.14em'}}>NAME</span>
            <span className="mono" style={{fontSize:10.5,color:'var(--muted)',letterSpacing:'.14em'}}>CAPABILITY</span>
            <span className="mono" style={{fontSize:10.5,color:'var(--muted)',letterSpacing:'.14em',textAlign:'right'}}>METRIC</span>
          </div>
          {agents.map((a,i)=>(
            <div key={i} className="reveal" style={{
              display:'grid',gridTemplateColumns:'80px 1fr 1.6fr 200px',gap:0,padding:'24px',
              borderBottom: i<agents.length-1?'1px solid var(--line)':'none',
              alignItems:'center',transition:'background .2s',
            }} onMouseEnter={e=>e.currentTarget.style.background='var(--bg-3)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
              <span className="mono" style={{fontSize:12.5,color:'var(--accent)'}}>/{a.n}</span>
              <span style={{fontSize:17,fontWeight:500,letterSpacing:'-0.02em'}}>{a.name}</span>
              <span style={{fontSize:14,color:'var(--text-2)',lineHeight:1.55}}>{a.body}</span>
              <span className="mono" style={{fontSize:13,color:'var(--accent)',textAlign:'right'}}>{a.m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ——— Use cases ——— */
const PUseCases = () => {
  const cases = [
    {n:'01',t:'H-1B cap season without the triage.',b:'Intake parses corporate requests. Registration, playbook, LCA, and I-129 prep run in parallel.',s:'8h → 2h',sl:'per petition'},
    {n:'02',t:'Multi-country L-1 for a global rollout.',b:'One case, five jurisdictions. Unified Health Score. Local counsel gets keyhole access.',s:'5 firms',sl:'1 dashboard'},
    {n:'03',t:'PERM with clean evidentiary record.',b:'Recruitment reports, prevailing-wage justifications, support letters. Every claim traces to source.',s:'<10%',sl:'RFE rate'},
    {n:'04',t:'Renewals, before they become fires.',b:'Renewal Pipeline surfaces expirations 180 days out. Auto-initiates extensions.',s:'0%',sl:'expiry surprises'},
  ];
  return (
    <section id="cases" style={{padding:'140px 0'}}>
      <div className="container">
        <div className="reveal" style={{marginBottom:64,maxWidth:'40ch'}}>
          <span className="eyebrow">USE CASES</span>
          <h2 className="display" style={{fontSize:'clamp(40px,6vw,84px)',marginTop:16}}>
            Real cases.<br/><span style={{color:'var(--muted)'}}>Real hours saved.</span>
          </h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}} className="puc-grid">
          {cases.map((c,i)=>(
            <article key={i} className="card-glow reveal" style={{padding:36,position:'relative',overflow:'hidden',minHeight:280}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:24}}>
                <span className="mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.1em'}}>CASE · {c.n}</span>
                <span className="mono" style={{fontSize:28,color:'var(--accent)',letterSpacing:'-0.02em'}}>{c.s}</span>
              </div>
              <h3 className="display" style={{fontSize:26,marginBottom:16,maxWidth:'20ch'}}>{c.t}</h3>
              <p style={{fontSize:14.5,color:'var(--text-2)',lineHeight:1.6}}>{c.b}</p>
              <div style={{position:'absolute',bottom:24,left:36,right:36,paddingTop:16,borderTop:'1px solid var(--line)',display:'flex',justifyContent:'space-between'}}>
                <span className="mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase'}}>{c.sl}</span>
                <span style={{fontSize:12.5,color:'var(--accent)'}}>Read →</span>
              </div>
            </article>
          ))}
        </div>
        <style>{`@media(max-width:900px){.puc-grid{grid-template-columns:1fr !important;}}`}</style>
      </div>
    </section>
  );
};

/* ——— Metrics ——— */
const PMetrics = () => (
  <section id="metrics" style={{padding:'120px 0',borderTop:'1px solid var(--line)',background:'var(--bg-2)',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',bottom:'-20%',left:'50%',transform:'translateX(-50%)',width:1000,height:500,background:'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(25,80,198,.1), transparent 70%)',filter:'blur(40px)',pointerEvents:'none'}}/>
    <div className="container" style={{position:'relative'}}>
      <div className="reveal" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'end',marginBottom:64}} className="pm-head">
        <h2 className="display" style={{fontSize:'clamp(36px,5vw,68px)'}}>
          Built for <span style={{color:'var(--accent)'}}>scale.</span><br/>
          <span style={{color:'var(--muted)'}}>Audited for trust.</span>
        </h2>
        <p style={{fontSize:15,color:'var(--text-2)',lineHeight:1.6,maxWidth:'46ch'}}>
          SOC 2 Type II. GDPR-compliant. Row-level security. Every AI action, override, and PII touch is logged with 7-year retention.
        </p>
      </div>
      <div className="reveal d1" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}} className="pm-grid">
        {[['60–70%','attorney time automated'],['204','product screens shipped'],['>95%','form-fill acceptance'],['<60s','rule propagation']].map(([n,l],i)=>(
          <div key={i} style={{padding:'36px 24px',borderRight:i<3?'1px solid var(--line)':'none'}}>
            <div className="mono" style={{fontSize:'clamp(40px,5vw,64px)',color:'var(--accent)',letterSpacing:'-0.03em',lineHeight:1,marginBottom:12}}>{n}</div>
            <div style={{fontSize:13,color:'var(--text-2)'}}>{l}</div>
          </div>
        ))}
      </div>
      <div className="reveal d2" style={{marginTop:40,display:'flex',gap:28,flexWrap:'wrap',justifyContent:'center'}}>
        {['SOC 2 TYPE II','GDPR','HIPAA-READY','CCPA','SSO · OKTA/AZURE','4-EYE REVIEW','DSAR'].map(t=>(
          <span key={t} className="mono" style={{fontSize:11,letterSpacing:'.14em',color:'var(--muted)'}}>{t}</span>
        ))}
      </div>
      <style>{`@media(max-width:900px){.pm-head{grid-template-columns:1fr !important;gap:24px !important;}.pm-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </div>
  </section>
);

/* ——— CTA ——— */
const PCTA = () => (
  <section id="cta" style={{padding:'140px 0',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:1000,height:600,background:'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(25,80,198,.12), transparent 70%)',filter:'blur(40px)',pointerEvents:'none'}}/>
    <div className="container" style={{textAlign:'center',position:'relative'}}>
      <h2 className="reveal display" style={{fontSize:'clamp(56px,9vw,140px)',marginBottom:36}}>
        Run your next case<br/><span style={{color:'var(--accent)'}}>with agents.</span>
      </h2>
      <p className="reveal d1" style={{fontSize:18,color:'var(--text-2)',maxWidth:'50ch',margin:'0 auto 40px',lineHeight:1.55}}>
        Book a 30-minute walkthrough. We'll map your highest-volume visa path to where the platform saves hours on day one.
      </p>
      <div className="reveal d2" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
        <a href="#" className="btn btn-primary" style={{padding:'16px 28px',fontSize:14}}>Request access <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M6 4h6v6"/></svg></a>
        <a href="#" className="btn btn-ghost" style={{padding:'16px 28px',fontSize:14}}>Talk to sales</a>
      </div>
    </div>
  </section>
);

/* ——— Footer ——— */
const PFooter = () => (
  <footer style={{borderTop:'1px solid var(--line)',padding:'64px 0 32px',background:'var(--bg-2)'}}>
    <div className="container">
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr',gap:32,marginBottom:48}} className="pfoot-grid">
        <div style={{maxWidth:'32ch'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16,fontWeight:600,fontSize:16}}>
            <PLogo/> GlobalCodio
          </div>
          <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.6}}>The AI platform for global immigration. Built for attorneys, corporations, and the people moving across borders.</p>
        </div>
        {[['Platform',['Agents','Workflows','Form Registry','Questionnaires']],['Personas',['Attorneys','Employees','HR','Providers']],['Company',['About','Customers','Careers','Contact']],['Legal',['SOC 2','GDPR','Privacy','Terms']]].map(([h,items])=>(
          <div key={h}>
            <div className="mono" style={{fontSize:10.5,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:14}}>{h}</div>
            <ul style={{listStyle:'none',display:'grid',gap:8,fontSize:13}}>
              {items.map(it=><li key={it}><a href="#" style={{color:'var(--text-2)'}}>{it}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{borderTop:'1px solid var(--line)',paddingTop:20,display:'flex',justifyContent:'space-between',fontSize:12,color:'var(--muted)',flexWrap:'wrap',gap:12}}>
        <div>© 2026 GlobalCodio Inc.</div>
        <div className="mono" style={{letterSpacing:'.05em'}}>v2026.2 · {new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</div>
      </div>
      <div aria-hidden="true" className="display" style={{fontSize:'clamp(72px,16vw,220px)',marginTop:48,color:'#eef1f6',pointerEvents:'none',textAlign:'center',letterSpacing:'-0.05em',lineHeight:.95}}>
        GlobalCodio<span style={{color:'var(--accent)'}}>.</span>
      </div>
      <style>{`@media(max-width:900px){.pfoot-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </div>
  </footer>
);

/* ——— Tweaks ——— */
const PTweaks = ({tweaks,onChange}) => {
  const Seg = ({k,options}) => (
    <div className="seg">
      {options.map(([v,l])=><button key={v} className={tweaks[k]===v?'on':''} onClick={()=>onChange(k,v)}>{l}</button>)}
    </div>
  );
  return (
    <div className="tweaks-panel">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
        <div style={{fontSize:18,fontWeight:500,letterSpacing:'-0.02em'}}>Tweaks</div>
        <span className="mono" style={{fontSize:10,color:'var(--accent)',letterSpacing:'.12em'}}>LIVE</span>
      </div>
      <div className="row"><h4>Headline</h4><Seg k="headline" options={[['perform','Perform'],['edge','Edge'],['scale','Scale']]}/></div>
      <div className="row"><h4>Accent</h4><Seg k="accent" options={[['blue','Blue'],['ink','Ink'],['spark','Spark']]}/></div>
      <div className="row" style={{marginBottom:0}}><h4>Surface</h4><Seg k="bg" options={[['white','White'],['paper','Paper'],['cool','Cool']]}/></div>
    </div>
  );
};

window.PLogoStrip = PLogoStrip;
window.PCapabilities = PCapabilities;
window.PAgents = PAgents;
window.PUseCases = PUseCases;
window.PMetrics = PMetrics;
window.PCTA = PCTA;
window.PFooter = PFooter;
window.PTweaks = PTweaks;
