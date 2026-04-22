/* Workflow — an actual case traveling through the platform */

const Workflow = () => {
  const [step, setStep] = React.useState(0);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    // Advance step based on scroll within section
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress 0..1 while section is scrolling through viewport
      const total = rect.height - vh;
      if (total <= 0) return;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      const s = Math.min(4, Math.floor(p * 5));
      setStep(s);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const steps = [
    { key:'intake', label:'Intake', tag:'01', title:'Case created', body:'HR submits via portal or email. The Intake Agent parses attachments, pre-populates the case, and auto-assigns a playbook.' },
    { key:'questionnaire', label:'Data collection', tag:'02', title:'Questionnaires deployed', body:'Employee, employer, and service-provider questionnaires auto-deploy. Every answer maps to a case field — and downstream to a government form.' },
    { key:'compliance', label:'Compliance', tag:'03', title:'Risk evaluated', body:'400+ rules fire across jurisdiction and visa class. Risk 0.22 — standard path. Policy Intelligence is already watching for overnight changes.' },
    { key:'forms', label:'Preparation', tag:'04', title:'Forms auto-filled', body:'I-129, H-1B supplement, and LCA populate from the questionnaire. Data lineage is visible per field. Support letter drafts in the firm\'s voice.' },
    { key:'filed', label:'Filing', tag:'05', title:'Packet ready', body:'Cover letter, forms, evidence, signatures — assembled in filing order. Attorney reviews, approves, files. 8 hours → 2.' },
  ];

  return (
    <section id="workflows" ref={sectionRef} style={{position:'relative', height:'500vh'}}>
      <div style={{position:'sticky',top:0,height:'100vh',overflow:'hidden',display:'flex',alignItems:'center'}}>
        <div className="container" style={{width:'100%'}}>
          {/* Eyebrow + headline */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'end',marginBottom:48}} className="wf-head">
            <div>
              <div className="eyebrow" style={{marginBottom:16}}><span className="dot"></span>One case, end to end</div>
              <h2 style={{fontSize:'clamp(32px,4.6vw,58px)',lineHeight:.98,letterSpacing:'-0.035em',fontWeight:500,maxWidth:'16ch'}}>
                From <em className="serif">inbox</em><br/>to <em className="serif">filing-ready</em> in <span style={{color:'var(--accent)'}}>5 days.</span>
              </h2>
            </div>
            <div style={{fontSize:15,lineHeight:1.5,color:'var(--ink-2)',maxWidth:'42ch'}}>
              Scroll to watch an H-1B case move through the platform. Every step is a handoff between an agent and a human — each carrying full provenance, every decision logged.
            </div>
          </div>

          {/* Progress rail */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:0,marginBottom:40,borderTop:'1px solid var(--line)',paddingTop:20}}>
            {steps.map((s, i) => (
              <div key={s.key} style={{position:'relative',paddingRight:16}}>
                <div style={{position:'absolute',top:-20,left:0,right:0,height:2,background: i<=step ? 'var(--ink)' : 'var(--line)',transition:'background .6s cubic-bezier(.2,.7,.2,1)'}}/>
                <div style={{fontSize:10.5,letterSpacing:'.14em',color:'var(--muted)',fontFamily:'var(--font-mono)',marginBottom:6}}>{s.tag}</div>
                <div style={{fontSize:13,fontWeight: i===step ? 600 : 400, color: i<=step ? 'var(--ink)' : 'var(--muted)',transition:'all .4s'}}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Two-col: narrative + animated mock */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:48,alignItems:'start'}} className="wf-body">
            <div>
              {steps.map((s, i) => (
                <div key={s.key} style={{
                  position: i===step ? 'static' : 'absolute',
                  opacity: i===step ? 1 : 0,
                  transform: i===step ? 'translateY(0)' : 'translateY(10px)',
                  transition:'opacity .5s, transform .5s',
                  maxWidth:460,
                }}>
                  <div style={{fontSize:12,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--spark)',fontFamily:'var(--font-mono)',marginBottom:14}}>{s.label}</div>
                  <h3 style={{fontSize:40,letterSpacing:'-0.03em',lineHeight:1.02,fontWeight:500,marginBottom:18,fontFamily:'var(--serif)',fontStyle:'italic'}}>
                    {s.title}
                  </h3>
                  <p style={{fontSize:16,lineHeight:1.55,color:'var(--ink-2)'}}>{s.body}</p>
                </div>
              ))}
            </div>
            <WorkflowStage step={step}/>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width:900px){
          .wf-head,.wf-body{grid-template-columns:1fr !important; gap:24px !important;}
        }
      `}</style>
    </section>
  );
};

const WorkflowStage = ({step}) => {
  return (
    <div style={{position:'relative',height:480}}>
      {/* Stage background */}
      <div className="panel" style={{position:'absolute',inset:0,background:'#fff',boxShadow:'var(--shadow-lg)',overflow:'hidden'}}>
        {/* Window chrome */}
        <div style={{display:'flex',alignItems:'center',gap:8,padding:'12px 16px',borderBottom:'1px solid var(--line)',background:'var(--paper-2)'}}>
          <span style={{width:10,height:10,borderRadius:'50%',background:'#e5c0ab'}}/>
          <span style={{width:10,height:10,borderRadius:'50%',background:'#e5dbab'}}/>
          <span style={{width:10,height:10,borderRadius:'50%',background:'#b5cfb1'}}/>
          <div style={{flex:1,textAlign:'center',fontSize:11,color:'var(--muted)',fontFamily:'var(--font-mono)'}}>
            app.globalcodio.ai / case / <span style={{color:'var(--ink)'}}>CX-48203 · Sharma, Priya · H-1B</span>
          </div>
        </div>
        <div style={{padding:22,height:'calc(100% - 41px)'}}>
          <StageContent step={step}/>
        </div>
      </div>
    </div>
  );
};

const StageContent = ({step}) => {
  if (step===0) return <IntakeStage/>;
  if (step===1) return <QuestionnaireStage/>;
  if (step===2) return <ComplianceStage/>;
  if (step===3) return <FormFillStage/>;
  return <FilingStage/>;
};

const IntakeStage = () => (
  <div style={{display:'grid',gridTemplateRows:'auto 1fr',gap:14,height:'100%'}}>
    <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',border:'1px solid var(--line)',borderRadius:10,background:'var(--paper-2)'}}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="1.5" y="3.5" width="13" height="9" rx="1"/><path d="M1.8 4.2L8 9l6.2-4.8"/></svg>
      <div style={{flex:1}}>
        <div style={{fontSize:12,fontWeight:600}}>priya.sharma@techcorp.com → newcase@techcorp.globalcodio.com</div>
        <div style={{fontSize:11,color:'var(--muted)'}}>2 attachments · passport.pdf, offer_letter.pdf</div>
      </div>
      <span className="pill" style={{fontSize:10.5,background:'rgba(10,124,78,.1)',borderColor:'rgba(10,124,78,.2)',color:'#0a7c4e'}}>parsed · 94%</span>
    </div>
    <div style={{border:'1px solid var(--line)',borderRadius:10,padding:16,display:'grid',gap:10,background:'#fff'}}>
      <div style={{fontSize:11,letterSpacing:'.1em',color:'var(--muted)',fontFamily:'var(--font-mono)'}}>AUTO-POPULATED CASE DRAFT</div>
      {[
        ['Beneficiary','Priya Ananya Sharma'],
        ['Petitioner','TechCorp Inc. — Delaware'],
        ['Country · Visa','United States · H-1B initial'],
        ['Playbook','H-1B Standard v12'],
        ['Est. filing-ready','5–8 days'],
      ].map(([k,v])=>(
        <div key={k} style={{display:'flex',justifyContent:'space-between',fontSize:13,borderBottom:'1px dashed var(--line-2)',paddingBottom:6}}>
          <span style={{color:'var(--muted)'}}>{k}</span>
          <span className="mono">{v}</span>
        </div>
      ))}
    </div>
  </div>
);

const QuestionnaireStage = () => (
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,height:'100%'}}>
    {[
      {to:'Priya (Employee)',name:'H-1B Intake · v4',prog:85,status:'In progress',chan:'Web + WhatsApp'},
      {to:'TechCorp HR',name:'Employer Petition Details',prog:100,status:'Submitted',chan:'Portal'},
      {to:'Service Provider',name:'Credential Evaluation',prog:40,status:'In progress',chan:'Portal'},
      {to:'Priya (Dependents)',name:'Spouse & Child Info',prog:0,status:'Triggered',chan:'WhatsApp'},
    ].map((q,i)=>(
      <div key={i} style={{border:'1px solid var(--line)',borderRadius:10,padding:14,background:'#fff',display:'flex',flexDirection:'column',gap:8}}>
        <div style={{fontSize:10.5,letterSpacing:'.1em',color:'var(--muted)',fontFamily:'var(--font-mono)'}}>{q.to.toUpperCase()}</div>
        <div style={{fontSize:13.5,fontWeight:600,letterSpacing:'-0.01em'}}>{q.name}</div>
        <div style={{height:3,background:'var(--paper-2)',borderRadius:99,overflow:'hidden'}}>
          <div style={{height:'100%',width:`${q.prog}%`,background: q.prog===100 ? '#0a7c4e':'var(--accent)',transition:'width 1s'}}/>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:'var(--muted)'}}>
          <span>{q.status} · {q.chan}</span>
          <span className="mono">{q.prog}%</span>
        </div>
      </div>
    ))}
  </div>
);

const ComplianceStage = () => (
  <div style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:20,height:'100%',alignItems:'center'}}>
    <div style={{textAlign:'center'}}>
      <BigGauge value={0.22}/>
      <div style={{marginTop:6,fontSize:12,color:'#0a7c4e',letterSpacing:'.04em'}}>LOW RISK</div>
      <div style={{fontSize:11,color:'var(--muted)',marginTop:2}}>Standard path</div>
    </div>
    <div style={{display:'grid',gap:8}}>
      {[
        ['LCA filed ≥ 7 days prior','ok'],
        ['Prevailing wage + 5% met','ok'],
        ['Specialty occupation — 4 criteria','ok'],
        ['Beneficiary degree equivalency','ok'],
        ['I-94 valid status maintained','ok'],
        ['Public Access File — 2 items pending','warn'],
        ['H-1B cap — registration confirmed','ok'],
        ['Employer-employee relationship','ok'],
      ].map(([l,s],i)=>(
        <div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 12px',border:'1px solid var(--line)',borderRadius:8,fontSize:12.5,background:'#fff'}}>
          <span style={{width:16,height:16,borderRadius:4,background:s==='ok'?'rgba(10,124,78,.12)':'rgba(180,83,9,.12)',display:'grid',placeItems:'center',color:s==='ok'?'#0a7c4e':'#b45309',fontSize:10,fontWeight:700}}>{s==='ok'?'✓':'!'}</span>
          <span>{l}</span>
        </div>
      ))}
    </div>
  </div>
);

const BigGauge = ({value}) => {
  const r = 50, c = 2*Math.PI*r;
  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <circle cx="70" cy="70" r={r} stroke="var(--paper-2)" strokeWidth="8" fill="none"/>
      <circle cx="70" cy="70" r={r} stroke="#0a7c4e" strokeWidth="8" fill="none"
        strokeDasharray={c} strokeDashoffset={c-(value*c)} strokeLinecap="round"
        transform="rotate(-90 70 70)"/>
      <text x="70" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="32" fontFamily="var(--serif)" fontStyle="italic" fill="var(--ink)">{value.toFixed(2)}</text>
      <text x="70" y="90" textAnchor="middle" fontSize="9" fill="var(--muted)" letterSpacing="2">RISK SCORE</text>
    </svg>
  );
};

const FormFillStage = () => (
  <div style={{display:'grid',gridTemplateRows:'auto 1fr',gap:12,height:'100%'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid var(--line)',paddingBottom:10}}>
      <div>
        <div style={{fontSize:14,fontWeight:600}}>Form I-129 · H-1B Supplement</div>
        <div style={{fontSize:11,color:'var(--muted)',fontFamily:'var(--font-mono)'}}>142 / 156 fields · 5 need review</div>
      </div>
      <span className="pill" style={{fontSize:11,background:'rgba(25,80,198,.08)',borderColor:'rgba(25,80,198,.2)',color:'var(--accent)'}}>Auto-fill · 91%</span>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,alignContent:'start'}}>
      {[
        ['Part 1 · Petitioner',12,'ok'],
        ['Part 2 · Classification',8,'ok'],
        ['Part 3 · Processing',4,'ok'],
        ['Part 4 · Beneficiary',18,'ok'],
        ['Part 5 · Employment',22,'review'],
        ['H-1B Data Collection',14,'ok'],
        ['Wage Information',9,'ok'],
        ['Evidence of Specialty Occ.',7,'review'],
      ].map(([l,n,s],i)=>(
        <div key={i} style={{border:'1px solid var(--line)',borderRadius:8,padding:12,background:'#fff',display:'flex',flexDirection:'column',gap:6}}>
          <div style={{fontSize:12,fontWeight:600}}>{l}</div>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:10.5,color:'var(--muted)',fontFamily:'var(--font-mono)'}}>
            <span>{n} fields</span>
            <span style={{color:s==='review'?'#b45309':'#0a7c4e'}}>{s==='review'?'needs review':'auto-filled'}</span>
          </div>
          <div style={{display:'flex',gap:2}}>{Array.from({length:n}).map((_,j)=><div key={j} style={{height:5,flex:1,borderRadius:1,background:s==='review' && j>=n-2?'#d97706':'var(--accent)'}}/>)}</div>
        </div>
      ))}
    </div>
  </div>
);

const FilingStage = () => (
  <div style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:14,height:'100%'}}>
    <div style={{border:'1px solid var(--line)',borderRadius:10,background:'#fff',padding:14,display:'flex',flexDirection:'column',gap:8,overflow:'hidden'}}>
      <div style={{fontSize:11,letterSpacing:'.1em',color:'var(--muted)',fontFamily:'var(--font-mono)',marginBottom:4}}>FILING PACKET · 47 PAGES</div>
      {[
        '01 · Cover letter (firm-signed)',
        '02 · Form G-28 — Notice of Appearance',
        '03 · Form I-129 + H-1B Supplement',
        '04 · Support letter — Specialty Occupation',
        '05 · LCA (certified ETA-9035)',
        '06 · Beneficiary credentials packet',
        '07 · Employer supporting evidence',
        '08 · Filing fee receipts',
      ].map((l,i)=>(
        <div key={i} style={{fontSize:12,display:'flex',alignItems:'center',gap:10,padding:'7px 0',borderBottom:i<7?'1px dashed var(--line-2)':'none'}}>
          <span style={{width:14,height:14,borderRadius:3,background:'rgba(10,124,78,.12)',color:'#0a7c4e',display:'grid',placeItems:'center',fontSize:9}}>✓</span>
          <span style={{flex:1}}>{l}</span>
        </div>
      ))}
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      <div style={{border:'1px solid var(--line)',borderRadius:10,background:'var(--ink)',color:'var(--paper)',padding:18}}>
        <div style={{fontSize:10.5,letterSpacing:'.12em',opacity:.6,fontFamily:'var(--font-mono)'}}>READY TO FILE</div>
        <div className="serif" style={{fontSize:40,lineHeight:1,margin:'10px 0 6px'}}>4 days</div>
        <div style={{fontSize:12,opacity:.7}}>intake to filing-ready</div>
      </div>
      <div style={{border:'1px solid var(--line)',borderRadius:10,padding:14,background:'#fff',display:'grid',gap:6,fontSize:12}}>
        <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'var(--muted)'}}>Attorney hours</span><span className="mono">2.1h</span></div>
        <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'var(--muted)'}}>Paralegal hours</span><span className="mono">3.4h</span></div>
        <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'var(--muted)'}}>Agent actions</span><span className="mono">312</span></div>
        <div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:'var(--muted)'}}>Human overrides</span><span className="mono">7</span></div>
      </div>
    </div>
  </div>
);

window.Workflow = Workflow;
