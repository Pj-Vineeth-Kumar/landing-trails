/* Use cases, metrics/trust, and closing CTA */

const UseCases = () => {
  const cases = [
    {
      tag:'USE CASE · 01',
      title:'H-1B cap season without the triage',
      body:'Intake Agent parses incoming corporate requests. Registration, playbook, LCA, and I-129 prep run in parallel. Attorneys review, not assemble.',
      span:'AI pre-fills 142/156 fields',
      outcome:'8h → 2h per petition',
    },
    {
      tag:'USE CASE · 02',
      title:'Multi-country L-1 for a global rollout',
      body:'One case, five jurisdictions. HR sees a unified Health Score. Local counsel gets keyhole access. Policy Intelligence monitors each country overnight.',
      span:'Handles 7 jurisdictions',
      outcome:'1 dashboard · 5 firms',
    },
    {
      tag:'USE CASE · 03',
      title:'PERM with clean evidentiary record',
      body:'Evidentiary Drafter produces recruitment reports, prevailing wage justifications, and support letters in the firm\'s voice. Every claim traces to source.',
      span:'Full data lineage',
      outcome:'<10% RFE rate',
    },
    {
      tag:'USE CASE · 04',
      title:'Renewals, before they become fires',
      body:'Renewal Pipeline surfaces expirations 180 days out. Auto-initiates extensions. Budget estimates flow to Finance. Nothing slips into the red.',
      span:'0% expiry surprises',
      outcome:'12-month forward view',
    },
  ];

  return (
    <section id="platform" style={{padding:'140px 0'}}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal" style={{marginBottom:20}}><span className="dot"></span>Workflows in the wild</div>
            <h2 className="reveal d1">Real cases.<br/><em className="serif">Real</em> hours saved.</h2>
          </div>
          <p className="sub reveal d2">
            The platform ships with 40+ playbook templates covering the most common flows — and firms customize from there. A few we hear about most.
          </p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}} className="uc-grid">
          {cases.map((c,i) => (
            <article key={i} className={`reveal ${i%2===0?'panel-dark':'panel-elevated'}`} style={{
              position:'relative',
              color: i%2===0 ? 'var(--paper)' : 'var(--ink)',
              padding:'36px 32px 28px',
              display:'flex',flexDirection:'column',gap:20,minHeight:320,
              overflow:'hidden',
            }}>
              {i%2===0 && <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(25,80,198,.5), transparent 60%)',pointerEvents:'none'}}/>}
              <div style={{position:'relative',display:'flex',justifyContent:'space-between',fontSize:11,letterSpacing:'.14em',fontFamily:'var(--font-mono)',opacity: i%2===0 ? .55 : .5}}>
                <span>{c.tag}</span>
                <span style={{color: i%2===0 ? 'var(--spark)' : 'var(--accent)'}}>●</span>
              </div>
              <h3 style={{position:'relative',fontSize:'clamp(24px,2.6vw,32px)',lineHeight:1.1,letterSpacing:'-0.025em',fontWeight:500,maxWidth:'18ch'}}>{c.title}</h3>
              <p style={{position:'relative',fontSize:14.5,lineHeight:1.55,opacity:.72,flex:1}}>{c.body}</p>
              <div style={{position:'relative',display:'flex',justifyContent:'space-between',alignItems:'baseline',borderTop: i%2===0 ? '1px solid rgba(255,255,255,.12)' : '1px solid var(--line)',paddingTop:14}}>
                <span className="mono" style={{fontSize:11,opacity:.6}}>{c.span}</span>
                <span className="serif" style={{fontSize:22,fontStyle:'italic',color: i%2===0 ? 'var(--spark)' : 'var(--accent)'}}>{c.outcome}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:900px){.uc-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
};

/* ——— Trust / metrics ——— */
const Trust = () => {
  const stats = [
    ['60-70%','of attorney time is repetitive work','we automate it'],
    ['204','product screens shipped','5 personas covered'],
    ['>95%','AI form-fill acceptance','with full lineage'],
    ['<60s','KB change propagation','rule to case'],
  ];
  return (
    <section style={{padding:'100px 0',background:'var(--ink)',color:'var(--paper)',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(25,80,198,.35), transparent 60%)',pointerEvents:'none'}}/>
      <div className="container" style={{position:'relative'}}>
        <div className="reveal" style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:32,marginBottom:56,flexWrap:'wrap'}}>
          <h2 style={{fontSize:'clamp(36px,5.2vw,68px)',lineHeight:.98,letterSpacing:'-0.035em',fontWeight:500,maxWidth:'20ch'}}>
            Built on <em className="serif" style={{color:'var(--spark)'}}>auditable</em> foundations.
          </h2>
          <p style={{maxWidth:'42ch',fontSize:16,lineHeight:1.55,opacity:.72}}>
            SOC 2 Type II. GDPR-compliant. Row-level security, field-level filtering, render-level restriction. Every AI action, override, and PII touch is logged — with 7-year retention.
          </p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,borderTop:'1px solid rgba(255,255,255,.14)'}} className="trust-grid">
          {stats.map(([n,l,s],i)=>(
            <div key={i} className="reveal" style={{
              padding:'36px 28px',
              borderRight: i<3 ? '1px solid rgba(255,255,255,.14)' : 'none',
              borderBottom:'1px solid rgba(255,255,255,.14)',
            }}>
              <div className="serif" style={{fontSize:'clamp(52px,5.6vw,84px)',lineHeight:1,letterSpacing:'-0.04em',color:'var(--spark)',marginBottom:14}}>{n}</div>
              <div style={{fontSize:14,opacity:.9,marginBottom:4}}>{l}</div>
              <div style={{fontSize:12,opacity:.5,fontStyle:'italic',fontFamily:'var(--serif)'}}>{s}</div>
            </div>
          ))}
        </div>

        {/* Compliance row */}
        <div style={{marginTop:48,display:'flex',gap:32,flexWrap:'wrap',alignItems:'center',justifyContent:'center',opacity:.6}}>
          {['SOC 2 Type II','GDPR','HIPAA-ready','CCPA','4-eye review','Break-glass audit','DSAR support','SSO · Okta/Azure'].map(t=>(
            <span key={t} style={{fontSize:12,letterSpacing:'.06em',fontFamily:'var(--font-mono)',textTransform:'uppercase'}}>{t}</span>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width:900px){.trust-grid{grid-template-columns:1fr 1fr !important;}}
        @media (max-width:600px){.trust-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
};

/* ——— Quote / Policy Intelligence callout ——— */
const PolicyCallout = () => (
  <section style={{padding:'140px 0',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',top:'20%',right:'-10%',width:520,height:520,borderRadius:'50%',background:'radial-gradient(closest-side, rgba(25,80,198,.14), transparent 70%)',filter:'blur(40px)',pointerEvents:'none'}}/>
    <div style={{position:'absolute',bottom:'10%',left:'-8%',width:420,height:420,borderRadius:'50%',background:'radial-gradient(closest-side, rgba(255,91,46,.08), transparent 70%)',filter:'blur(40px)',pointerEvents:'none'}}/>
    <div className="container" style={{position:'relative'}}>
      <div className="reveal pc-grid" style={{display:'grid',gridTemplateColumns:'1.1fr 1fr',gap:64,alignItems:'center'}}>
        <div>
          <div className="eyebrow" style={{marginBottom:20}}><span className="dot"></span>Policy Intelligence Engine</div>
          <blockquote className="serif" style={{fontSize:'clamp(30px,3.6vw,48px)',lineHeight:1.08,letterSpacing:'-0.02em',fontWeight:400,fontStyle:'italic',maxWidth:'22ch',marginBottom:28}}>
            "When USCIS shifts a rule at 4pm, every affected case carries an impact memo by morning — with a plain-English explanation for the employee."
          </blockquote>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:13,color:'var(--muted)'}}>
            <div style={{width:32,height:32,borderRadius:'50%',background:'var(--paper-2)',display:'grid',placeItems:'center',fontFamily:'var(--serif)',fontStyle:'italic',color:'var(--accent)'}}>MR</div>
            <div>
              <div style={{color:'var(--ink)',fontWeight:500}}>Maya Reyes</div>
              <div>Managing Partner · Reyes & Leung Immigration</div>
            </div>
          </div>
        </div>
        <div className="panel-elevated" style={{padding:20}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14,borderBottom:'1px solid var(--line)',paddingBottom:12}}>
            <div>
              <div style={{fontSize:11,letterSpacing:'.12em',color:'var(--muted)',fontFamily:'var(--font-mono)'}}>POLICY ALERT · MODERATE</div>
              <div style={{fontSize:15,fontWeight:600,marginTop:4}}>USCIS H-1B Specialty Occupation Update</div>
            </div>
            <span className="pill" style={{fontSize:10.5,background:'rgba(180,83,9,.12)',borderColor:'rgba(180,83,9,.2)',color:'#b45309'}}>
              <span style={{width:6,height:6,borderRadius:'50%',background:'#b45309'}}/>
              42 min ago
            </span>
          </div>
          <div style={{display:'grid',gap:10,fontSize:13}}>
            <div style={{display:'flex',justifyContent:'space-between',paddingBottom:6,borderBottom:'1px dashed var(--line-2)'}}>
              <span style={{color:'var(--muted)'}}>Source</span><span className="mono">USCIS Policy Manual 2.A</span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',paddingBottom:6,borderBottom:'1px dashed var(--line-2)'}}>
              <span style={{color:'var(--muted)'}}>Affected cases</span><span className="mono">28 active · 4 filed</span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',paddingBottom:6,borderBottom:'1px dashed var(--line-2)'}}>
              <span style={{color:'var(--muted)'}}>Re-score risk</span><span style={{color:'var(--accent)'}} className="mono">3 cases shifted</span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <span style={{color:'var(--muted)'}}>HR memo drafted</span><span className="mono" style={{color:'#0a7c4e'}}>✓ Ready</span>
            </div>
          </div>
          <div style={{marginTop:16,padding:12,background:'var(--paper-2)',borderRadius:10,fontSize:12.5,lineHeight:1.5,color:'var(--ink-2)',fontStyle:'italic',fontFamily:'var(--serif)'}}>
            "Recent policy tightens evidentiary standards on specialty occupation. We've flagged 3 cases for Senior Partner review and drafted responses for the others. Review &rarr;"
          </div>
        </div>
      </div>
    </div>
    <style>{`@media (max-width:900px){.pc-grid{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
  </section>
);

/* ——— Final CTA ——— */
const CTA = () => (
  <section id="cta" style={{padding:'120px 0 80px',background:'var(--paper)',position:'relative',overflow:'hidden'}}>
    <div className="container" style={{position:'relative'}}>
      <div className="reveal" style={{textAlign:'center',maxWidth:900,margin:'0 auto',paddingBottom:60}}>
        <div className="eyebrow" style={{marginBottom:20}}><span className="dot"></span>Pricing · Pro & Enterprise</div>
        <h2 style={{fontSize:'clamp(52px,8vw,120px)',lineHeight:.94,letterSpacing:'-0.04em',fontWeight:500,marginBottom:36}}>
          Run your <em className="serif" style={{color:'var(--accent)'}}>next</em><br/>case with agents.
        </h2>
        <p style={{fontSize:17,lineHeight:1.55,color:'var(--ink-2)',maxWidth:'50ch',margin:'0 auto 40px'}}>
          Book a 30-minute demo. We'll walk through your highest-volume visa path and map where the platform saves hours on day one.
        </p>
        <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap',marginBottom:56}}>
          <a href="#" className="btn btn-primary" style={{padding:'18px 28px',fontSize:14.5}}>
            Book a demo
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="#" className="btn btn-ghost" style={{padding:'18px 28px',fontSize:14.5}}>
            Read product docs
          </a>
        </div>
        <div style={{display:'flex',gap:36,justifyContent:'center',flexWrap:'wrap',fontSize:13,color:'var(--muted)'}}>
          <span>✓ Pro · per-seat SaaS</span>
          <span>✓ Enterprise · multi-firm + HRIS</span>
          <span>✓ 7 jurisdictions live</span>
          <span>✓ SOC 2 Type II</span>
        </div>
      </div>

      <Footer/>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{borderTop:'1px solid var(--line)',paddingTop:48,marginTop:40,display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr',gap:32}} className="footer-grid">
    <div>
      <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16,fontWeight:600,fontSize:17,letterSpacing:'-0.02em'}}>
        <LogoMark/>
        <span>GlobalCodio</span>
      </div>
      <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.55,maxWidth:'36ch'}}>
        The AI-powered global immigration platform. Built for attorneys, corporations, and the people moving across borders.
      </p>
    </div>
    {[
      ['Platform',['Agents','Workflows','Form Registry','Questionnaires','Policy Intelligence']],
      ['Personas',['Attorneys','Employees','Corporate HR','Providers','Admins']],
      ['Company',['About','Customers','Jurisdictions','Careers','Contact']],
      ['Legal',['SOC 2','GDPR','DSAR','Privacy','Terms']],
    ].map(([h,items])=>(
      <div key={h}>
        <div style={{fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:14,fontFamily:'var(--font-mono)'}}>{h}</div>
        <ul style={{listStyle:'none',display:'grid',gap:8,fontSize:13}}>
          {items.map(it=><li key={it}><a href="#" style={{color:'var(--ink-2)'}}>{it}</a></li>)}
        </ul>
      </div>
    ))}
    <div style={{gridColumn:'1 / -1',display:'flex',justifyContent:'space-between',borderTop:'1px solid var(--line)',paddingTop:24,marginTop:24,fontSize:12,color:'var(--muted)',flexWrap:'wrap',gap:12}}>
      <div>© 2026 GlobalCodio Inc. · San Francisco · Delhi · London</div>
      <div className="mono">v2026.2 · last deploy {new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'})}</div>
    </div>
    <style>{`@media (max-width:900px){.footer-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
  </footer>
);

window.UseCases = UseCases;
window.Trust = Trust;
window.PolicyCallout = PolicyCallout;
window.CTA = CTA;
