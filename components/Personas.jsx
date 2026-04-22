/* Personas section — 5 personas, 1 platform */

const Personas = () => {
  const [active, setActive] = React.useState('attorney');

  const data = {
    attorney: {
      name: 'Attorney & Paralegal',
      tag: 'Practice',
      accent: '#1E40AF',
      lede: 'Close 3× more cases without growing headcount.',
      body: 'A unified task dashboard. AI review queues. Template-driven playbooks. Revenue intelligence baked in.',
      kpis: [['Hours per H-1B','8→2'],['Paralegal hrs','12→3'],['Capacity','50–80 cases']],
      ui: AttorneyUI,
    },
    employee: {
      name: 'Employee',
      tag: 'Passport',
      accent: '#059669',
      lede: 'Immigration stops being a black box.',
      body: 'A calm, mobile-first portal. Milestone progress, questionnaires that save every keystroke, WhatsApp intake, and a portable Immigration Passport that follows you.',
      kpis: [['Completion','<24h'],['Status queries','0'],['Channels','Web·WA·SMS']],
      ui: EmployeeUI,
    },
    hr: {
      name: 'Corporate HR',
      tag: 'Program',
      accent: '#7C3AED',
      lede: 'One dashboard across every firm, country, and entity.',
      body: 'A live Immigration Health Score. Multi-firm performance comparison. Renewal pipeline, budget, and SLA in one place.',
      kpis: [['HR admin','4→1 h'],['Firm compare','Real-time'],['Expiry surprises','0%']],
      ui: HRUI,
    },
    provider: {
      name: 'Service Provider',
      tag: 'Assignment',
      accent: '#0F766E',
      lede: 'A keyhole view — just what you need, nothing more.',
      body: 'Scoped assignments with structured questionnaires. Zero email archaeology. Revision flows and deliverable gates baked in.',
      kpis: [['Firm admin','<5 min'],['Gather info','<1 day'],['Scope','Row-level']],
      ui: ProviderUI,
    },
    admin: {
      name: 'Platform Admin',
      tag: 'Operations',
      accent: '#111827',
      lede: 'The control room for the platform itself.',
      body: 'Tenant onboarding, feature flags, KB governance, questionnaire registry, form registry, AI model monitoring, break-glass protocols.',
      kpis: [['P1 resolution','<30 min'],['Tenant onboard','<2 h'],['KB prop.','<60 s']],
      ui: AdminUI,
    },
  };

  const keys = Object.keys(data);
  const cur = data[active];
  const Ui = cur.ui;

  return (
    <section id="personas" style={{padding:'140px 0',background:'var(--paper-2)',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal" style={{marginBottom:20}}><span className="dot"></span>Five personas · One platform</div>
            <h2 className="reveal d1">
              Built for the<br/>
              <em className="serif">entire</em> immigration<br/>
              supply chain.
            </h2>
          </div>
          <p className="sub reveal d2">
            Attorneys, employees, HR, service providers, and platform admins — each with their own views, permissions, and agents. Nothing leaks across roles. Every data touch is audited.
          </p>
        </div>

        {/* Tabs */}
        <div style={{display:'flex',gap:4,flexWrap:'wrap',marginBottom:32,borderBottom:'1px solid var(--line)',paddingBottom:0}}>
          {keys.map(k => (
            <button key={k} onClick={()=>setActive(k)} style={{
              padding:'12px 18px',fontSize:13.5,fontWeight:active===k?600:400,
              color:active===k?'var(--ink)':'var(--muted)',
              borderBottom: active===k ? '2px solid var(--ink)' : '2px solid transparent',
              marginBottom:-1,transition:'all .25s',letterSpacing:'-0.005em',
            }}>
              {data[k].name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:56,alignItems:'start'}} className="persona-body">
          <div>
            <div style={{fontSize:11,letterSpacing:'.14em',fontFamily:'var(--font-mono)',color:cur.accent,marginBottom:16}}>{cur.tag.toUpperCase()}</div>
            <h3 className="serif" style={{fontSize:'clamp(28px,3.6vw,44px)',lineHeight:1.05,letterSpacing:'-0.02em',fontStyle:'italic',fontWeight:400,marginBottom:20,maxWidth:'16ch'}}>
              {cur.lede}
            </h3>
            <p style={{fontSize:15.5,lineHeight:1.55,color:'var(--ink-2)',marginBottom:28}}>{cur.body}</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}}>
              {cur.kpis.map(([l,v])=>(
                <div key={l} style={{border:'1px solid var(--line)',borderRadius:10,padding:'14px 14px',background:'#fff'}}>
                  <div style={{fontSize:11,color:'var(--muted)',marginBottom:4,letterSpacing:'.02em'}}>{l}</div>
                  <div className="serif" style={{fontSize:22,letterSpacing:'-0.02em',color:'var(--ink)'}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="panel" style={{padding:0,overflow:'hidden',boxShadow:'var(--shadow-md)',minHeight:420}}>
            <Ui accent={cur.accent}/>
          </div>
        </div>
      </div>
      <style>{`@media (max-width:900px){.persona-body{grid-template-columns:1fr !important;gap:28px !important;}}`}</style>
    </section>
  );
};

/* ——— Persona UI mini-mocks ——— */

const UIFrame = ({title, children, accent}) => (
  <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
    <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',borderBottom:'1px solid var(--line)'}}>
      <span style={{width:8,height:8,borderRadius:2,background:accent}}/>
      <span style={{fontSize:12,fontWeight:600,letterSpacing:'-0.01em'}}>{title}</span>
      <span style={{marginLeft:'auto',fontSize:10.5,color:'var(--muted)',fontFamily:'var(--font-mono)'}}>app.globalcodio.ai</span>
    </div>
    <div style={{padding:16,flex:1}}>{children}</div>
  </div>
);

const AttorneyUI = ({accent}) => (
  <UIFrame title="Cases · My work queue" accent={accent}>
    <div style={{display:'grid',gap:8}}>
      {[
        ['Sharma, P · H-1B','Review AI form-fill','2h','urgent'],
        ['Chen, L · L-1A','Approve support letter','Today',''],
        ['Rao, V · O-1','Compliance verified','—','ok'],
        ['Müller, A · EU Blue Card','Questionnaire review','Tomorrow',''],
        ['Park, J · PERM','Awaiting employer Q','3d','wait'],
        ['Nakamura, H · H-1B xfer','AI draft ready','Today',''],
      ].map((r,i)=>(
        <div key={i} style={{display:'grid',gridTemplateColumns:'1.2fr 1.4fr auto auto',gap:12,alignItems:'center',padding:'10px 12px',border:'1px solid var(--line)',borderRadius:8,fontSize:12,background:'#fff'}}>
          <span style={{fontWeight:600}}>{r[0]}</span>
          <span style={{color:'var(--ink-2)'}}>{r[1]}</span>
          <span className="mono" style={{fontSize:11,color:'var(--muted)'}}>{r[2]}</span>
          <span style={{width:8,height:8,borderRadius:'50%',background:r[3]==='urgent'?'#c61940':r[3]==='ok'?'#0a7c4e':r[3]==='wait'?'#d97706':accent}}/>
        </div>
      ))}
    </div>
  </UIFrame>
);

const EmployeeUI = ({accent}) => (
  <UIFrame title="Your H-1B Case" accent={accent}>
    <div style={{maxWidth:320,margin:'0 auto'}}>
      <div style={{textAlign:'center',marginBottom:18}}>
        <div style={{fontSize:11,color:'var(--muted)',letterSpacing:'.1em'}}>WE'RE AT STEP 3 OF 6</div>
        <div className="serif" style={{fontSize:30,lineHeight:1,marginTop:6}}>Preparing your petition</div>
      </div>
      <div style={{display:'flex',gap:4,marginBottom:24}}>
        {[1,1,1,0,0,0].map((d,i)=><div key={i} style={{flex:1,height:4,borderRadius:99,background:d?accent:'var(--paper-2)'}}/>)}
      </div>
      <div style={{display:'grid',gap:10}}>
        {[
          ['Complete your questionnaire','Done'],
          ['Upload passport & degree','Done'],
          ['Review employer details','Done'],
          ['E-sign Form I-129','Ready'],
          ['Await government decision','Upcoming'],
        ].map(([l,s],i)=>(
          <div key={i} style={{display:'flex',gap:10,alignItems:'center',padding:'10px 12px',border:'1px solid var(--line)',borderRadius:10,background:'#fff'}}>
            <span style={{width:18,height:18,borderRadius:'50%',background:s==='Done'?accent:s==='Ready'?'var(--ink)':'var(--paper-2)',color:'#fff',display:'grid',placeItems:'center',fontSize:10}}>{s==='Done'?'✓':'•'}</span>
            <span style={{flex:1,fontSize:13}}>{l}</span>
            <span style={{fontSize:11,color:'var(--muted)'}}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  </UIFrame>
);

const HRUI = ({accent}) => (
  <UIFrame title="Immigration Health Score" accent={accent}>
    <div style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:20,alignItems:'center'}}>
      <div style={{textAlign:'center'}}>
        <svg width="130" height="130" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="50" stroke="var(--paper-2)" strokeWidth="10" fill="none"/>
          <circle cx="65" cy="65" r="50" stroke={accent} strokeWidth="10" fill="none"
            strokeDasharray={2*Math.PI*50} strokeDashoffset={(2*Math.PI*50)*0.13} strokeLinecap="round"
            transform="rotate(-90 65 65)"/>
          <text x="65" y="70" textAnchor="middle" fontSize="36" fontFamily="var(--serif)" fontStyle="italic">87</text>
        </svg>
        <div style={{fontSize:11,color:'var(--muted)',letterSpacing:'.1em'}}>OF 100 · ↑ 4 MoM</div>
      </div>
      <div style={{display:'grid',gap:6}}>
        {[['Case progress',92],['Compliance',95],['Renewals',78],['Firm SLA',84],['Data complete',89]].map(([l,v])=>(
          <div key={l} style={{fontSize:12}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:3}}><span style={{color:'var(--ink-2)'}}>{l}</span><span className="mono" style={{color:'var(--muted)'}}>{v}</span></div>
            <div style={{height:4,background:'var(--paper-2)',borderRadius:99}}><div style={{width:`${v}%`,height:'100%',background:accent,borderRadius:99}}/></div>
          </div>
        ))}
      </div>
    </div>
    <div style={{marginTop:16,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,fontSize:11}}>
      {[['Active cases',248],['Renewals Q2',42],['Firms',5]].map(([l,v])=>(
        <div key={l} style={{border:'1px solid var(--line)',borderRadius:8,padding:'10px 12px',background:'#fff'}}>
          <div style={{color:'var(--muted)',marginBottom:2}}>{l}</div>
          <div className="serif" style={{fontSize:20}}>{v}</div>
        </div>
      ))}
    </div>
  </UIFrame>
);

const ProviderUI = ({accent}) => (
  <UIFrame title="Assignments · Credential Evaluation" accent={accent}>
    <div style={{display:'grid',gap:10}}>
      {[
        ['New','Sharma, P — India degree','Due Apr 24','accept'],
        ['In progress','Chen, L — China transcript','Due Apr 26','work'],
        ['Questionnaire blocking','Park, J — Korean equiv','Due Apr 28','warn'],
        ['Delivered','Rao, V — India M.Tech','Awaiting review','done'],
      ].map((r,i)=>(
        <div key={i} style={{border:'1px solid var(--line)',borderRadius:10,padding:'12px 14px',background:'#fff',display:'flex',alignItems:'center',gap:14}}>
          <span style={{fontSize:10.5,letterSpacing:'.08em',padding:'3px 8px',borderRadius:99,background: r[3]==='done'?'rgba(10,124,78,.12)': r[3]==='warn'?'rgba(180,83,9,.12)':'rgba(15,118,110,.12)', color: r[3]==='done'?'#0a7c4e':r[3]==='warn'?'#b45309':accent}}>{r[0]}</span>
          <div style={{flex:1}}>
            <div style={{fontSize:13,fontWeight:600}}>{r[1]}</div>
            <div style={{fontSize:11,color:'var(--muted)'}}>{r[2]}</div>
          </div>
          {r[3]==='accept' && <button style={{fontSize:11,padding:'6px 12px',background:accent,color:'#fff',borderRadius:99}}>Accept</button>}
        </div>
      ))}
    </div>
    <div style={{marginTop:14,padding:12,border:'1px dashed var(--line-2)',borderRadius:10,fontSize:11.5,color:'var(--muted)',fontStyle:'italic',fontFamily:'var(--serif)'}}>
      You see only assigned fields. Attorney notes, billing, and other provider data are system-hidden.
    </div>
  </UIFrame>
);

const AdminUI = ({accent}) => (
  <UIFrame title="Platform Overview" accent={accent}>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8,marginBottom:12}}>
      {[['Tenants',142],['Active cases','12.4k'],['AI calls/min',2840],['p99 latency','142ms']].map(([l,v])=>(
        <div key={l} style={{border:'1px solid var(--line)',borderRadius:8,padding:'10px',background:'#fff'}}>
          <div style={{fontSize:10.5,color:'var(--muted)'}}>{l}</div>
          <div className="serif" style={{fontSize:20}}>{v}</div>
        </div>
      ))}
    </div>
    <div style={{border:'1px solid var(--line)',borderRadius:10,padding:14,background:'#fff'}}>
      <div style={{fontSize:12,fontWeight:600,marginBottom:10,display:'flex',justifyContent:'space-between'}}>
        <span>AI Model Performance · 24h</span>
        <span className="mono" style={{fontSize:10.5,color:'var(--muted)'}}>claude-doc-intel · v2026.2</span>
      </div>
      <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none">
        <polyline points="0,60 40,55 80,45 120,48 160,38 200,42 240,30 280,35 320,28 360,32 400,22"
          stroke={accent} strokeWidth="1.5" fill="none"/>
        <polyline points="0,60 40,55 80,45 120,48 160,38 200,42 240,30 280,35 320,28 360,32 400,22"
          stroke={accent} strokeWidth="1.5" fill="url(#adminGrad)" opacity=".15"
          points="0,80 0,60 40,55 80,45 120,48 160,38 200,42 240,30 280,35 320,28 360,32 400,22 400,80"/>
      </svg>
      <div style={{display:'flex',justifyContent:'space-between',fontSize:10.5,color:'var(--muted)',marginTop:4}}>
        <span>94%</span><span>Accuracy</span><span>98%</span>
      </div>
    </div>
    <div style={{marginTop:10,display:'grid',gap:4,fontSize:11.5}}>
      {[['KB publish · H-1B Standard v13','2m ago','ok'],['Tenant onboarded · Morrison & Co','14m ago','ok'],['Break-glass request · Support #4421','1h ago','warn']].map((r,i)=>(
        <div key={i} style={{display:'flex',gap:10,padding:'6px 10px',border:'1px solid var(--line)',borderRadius:6,background:'#fff'}}>
          <span style={{width:6,height:6,borderRadius:'50%',background:r[2]==='ok'?'#0a7c4e':'#b45309',marginTop:6}}/>
          <span style={{flex:1}}>{r[0]}</span>
          <span style={{color:'var(--muted)'}}>{r[1]}</span>
        </div>
      ))}
    </div>
  </UIFrame>
);

window.Personas = Personas;
