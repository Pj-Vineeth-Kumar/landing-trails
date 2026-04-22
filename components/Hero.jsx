/* Hero — collaborative headline, layered background, no emoji */

const HEADLINES = {
  partner: {
    top: "The quiet partner",
    mid: "behind every",
    tail: "filing",
    tailItalic: true,
  },
  leverage: {
    top: "Give your team",
    mid: "agent",
    tail: "leverage",
    tailItalic: true,
  },
  craft: {
    top: "Immigration work,",
    mid: "elevated by",
    tail: "agents",
    tailItalic: true,
  },
};

const Hero = ({tweaks}) => {
  const h = HEADLINES[tweaks?.headline || 'partner'] || HEADLINES.partner;

  return (
    <section style={{position:'relative',paddingTop:170,paddingBottom:120,overflow:'hidden'}}>
      <HeroAtmos variant={tweaks?.bg || 'aurora'}/>

      <div className="container" style={{position:'relative',zIndex:3}}>
        <div className="reveal in" style={{display:'flex',gap:10,alignItems:'center',marginBottom:40,flexWrap:'wrap'}}>
          <span className="pill">
            <span style={{width:6,height:6,borderRadius:'50%',background:'#0a7c4e',boxShadow:'0 0 0 4px rgba(10,124,78,.15)'}}/>
            <span className="mono">v2026.2</span>
            <span style={{color:'var(--muted)'}}>—</span>
            <span>Policy Intelligence live across 7 jurisdictions</span>
          </span>
          <span className="pill" style={{color:'var(--muted)'}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5z"/></svg>
            SOC 2 Type II · GDPR
          </span>
        </div>

        <h1 style={{fontSize:'clamp(56px, 9.2vw, 154px)',lineHeight:.92,letterSpacing:'-0.045em',fontWeight:500,maxWidth:'15ch',marginBottom:40}}>
          <span className="reveal in word-rise">{h.top}</span><br/>
          <span className="reveal d1 in word-rise">{h.mid} </span>
          <span className="reveal d2 in word-rise serif" style={{color:'var(--accent)',fontStyle:'italic'}}>{h.tail}.</span>
        </h1>

        <div style={{display:'grid',gridTemplateColumns:'1.15fr 1fr',gap:64,alignItems:'end',marginBottom:80}} className="hero-grid">
          <p className="reveal d3 in" style={{fontSize:'clamp(18px,1.45vw,22px)',lineHeight:1.48,color:'var(--ink-2)',maxWidth:'48ch',fontWeight:350}}>
            GlobalCodio gives immigration teams a standing workforce of specialized agents — for document intake, form preparation, compliance, and evidentiary drafting. Attorneys stay in command. The repetitive 60% moves on its own.
          </p>
          <div className="reveal d4 in" style={{display:'flex',flexDirection:'column',gap:20,alignItems:'flex-start'}}>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a href="#cta" className="btn btn-primary">
                Book a walkthrough
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
              <a href="#agents" className="btn btn-ghost">Meet the agents</a>
            </div>
            <div style={{display:'flex',gap:32,fontSize:12.5,color:'var(--muted)',marginTop:4}} className="mono">
              <div><span style={{color:'var(--ink)',fontSize:18,fontFamily:'var(--serif)',fontStyle:'italic',marginRight:6}}>8 → 2</span>hrs per H-1B</div>
              <div><span style={{color:'var(--ink)',fontSize:18,fontFamily:'var(--serif)',fontStyle:'italic',marginRight:6}}>&lt; 10%</span>RFE rate</div>
              <div><span style={{color:'var(--ink)',fontSize:18,fontFamily:'var(--serif)',fontStyle:'italic',marginRight:6}}>3×</span>case capacity</div>
            </div>
          </div>
        </div>

        <div className="reveal d5 in">
          <HeroAgentStack/>
        </div>

        <div className="reveal d6" style={{marginTop:90}}>
          <Ticker/>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px){
          .hero-grid{grid-template-columns:1fr !important;gap:32px !important;}
          .nav-links{display:none !important;}
        }
        .word-rise{display:inline-block;}
      `}</style>
    </section>
  );
};

/* Layered atmospheric background — blurred gradient orbs, conic mesh, noise */
const HeroAtmos = ({variant}) => {
  const meshes = {
    aurora: [
      {x:'78%',y:'18%',size:620,color:'rgba(25,80,198,0.38)'},
      {x:'15%',y:'55%',size:520,color:'rgba(255,91,46,0.16)'},
      {x:'55%',y:'85%',size:560,color:'rgba(109,40,217,0.18)'},
      {x:'92%',y:'72%',size:420,color:'rgba(8,145,178,0.14)'},
    ],
    dune: [
      {x:'80%',y:'20%',size:680,color:'rgba(217,119,6,0.22)'},
      {x:'20%',y:'60%',size:540,color:'rgba(25,80,198,0.18)'},
      {x:'60%',y:'95%',size:520,color:'rgba(11,19,36,0.08)'},
    ],
    glacier: [
      {x:'85%',y:'25%',size:620,color:'rgba(25,80,198,0.32)'},
      {x:'10%',y:'70%',size:540,color:'rgba(109,40,217,0.14)'},
      {x:'55%',y:'90%',size:500,color:'rgba(8,145,178,0.18)'},
    ],
  };
  const m = meshes[variant] || meshes.aurora;

  return (
    <div style={{position:'absolute',inset:0,zIndex:1,overflow:'hidden',pointerEvents:'none'}}>
      {/* Base paper wash */}
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, rgba(246,245,239,0) 0%, rgba(246,245,239,0.6) 95%, var(--paper) 100%)'}}/>
      {/* Conic blended mesh */}
      <div style={{position:'absolute',top:'-20%',right:'-10%',width:'90%',height:'90%',
        background:'conic-gradient(from 140deg at 50% 50%, rgba(25,80,198,.24), rgba(109,40,217,.22), rgba(255,91,46,.18), rgba(8,145,178,.20), rgba(25,80,198,.24))',
        filter:'blur(80px) saturate(130%)', opacity:.9,
        borderRadius:'50%', mixBlendMode:'multiply',
        animation:'slowDrift 32s ease-in-out infinite alternate',
      }}/>
      {/* Orbs */}
      {m.map((b,i)=>(
        <div key={i} style={{
          position:'absolute', left:b.x, top:b.y, width:b.size, height:b.size,
          transform:'translate(-50%,-50%)', borderRadius:'50%',
          background:`radial-gradient(closest-side, ${b.color}, transparent 72%)`,
          filter:'blur(40px)', mixBlendMode:'multiply',
          animation:`orbFloat${i%3} ${18+i*3}s ease-in-out infinite alternate`,
        }}/>
      ))}
      {/* Fine grid overlay */}
      <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:.22,mixBlendMode:'multiply'}} preserveAspectRatio="none">
        <defs>
          <pattern id="hgrid" width="96" height="96" patternUnits="userSpaceOnUse">
            <path d="M 96 0 L 0 0 0 96" fill="none" stroke="#c9c3b0" strokeWidth=".5"/>
          </pattern>
          <linearGradient id="hfade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".0"/>
            <stop offset=".4" stopColor="#fff" stopOpacity="1"/>
            <stop offset="1" stopColor="#fff" stopOpacity="0"/>
          </linearGradient>
          <mask id="hmask"><rect width="100%" height="100%" fill="url(#hfade)"/></mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hgrid)" mask="url(#hmask)"/>
      </svg>
      {/* Noise */}
      <div style={{position:'absolute',inset:0,opacity:.08,mixBlendMode:'overlay',
        backgroundImage:"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.65'/></svg>\")"}}/>

      <style>{`
        @keyframes slowDrift { 0%{transform:translate(0,0) rotate(0deg);} 100%{transform:translate(-4%,3%) rotate(18deg);} }
        @keyframes orbFloat0 { 0%{transform:translate(-50%,-50%) translate(0,0);} 100%{transform:translate(-50%,-50%) translate(3%,-2%);} }
        @keyframes orbFloat1 { 0%{transform:translate(-50%,-50%) translate(0,0);} 100%{transform:translate(-50%,-50%) translate(-4%,3%);} }
        @keyframes orbFloat2 { 0%{transform:translate(-50%,-50%) translate(0,0);} 100%{transform:translate(-50%,-50%) translate(2%,4%);} }
      `}</style>
    </div>
  );
};

/* Hero agent stack — 3 elevated cards */
const HeroAgentStack = () => {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{position:'relative',height:440}} className="hero-stack">
      <ComplianceAgentCard tick={tick}
        style={{position:'absolute',top:0,right:0,width:'52%',transform:'rotate(1.6deg)',zIndex:1}}/>
      <FormAgentCard tick={tick}
        style={{position:'absolute',top:44,left:'28%',width:'46%',transform:'rotate(-0.8deg)',zIndex:2}}/>
      <DocAgentCard tick={tick}
        style={{position:'absolute',top:84,left:0,width:'44%',zIndex:3}}/>
      <style>{`
        @media (max-width: 900px){
          .hero-stack{height:auto !important;display:flex !important;flex-direction:column !important;gap:16px !important;}
          .hero-stack > *{position:relative !important;top:0 !important;left:0 !important;right:0 !important;width:100% !important;transform:none !important;}
        }
      `}</style>
    </div>
  );
};

const elevatedCard = {
  background:'rgba(255,255,255,0.88)',
  border:'1px solid rgba(255,255,255,0.8)',
  boxShadow:'0 1px 0 rgba(255,255,255,0.9) inset, 0 30px 60px -25px rgba(11,19,36,0.28), 0 10px 22px -14px rgba(11,19,36,0.18)',
  backdropFilter:'blur(20px) saturate(140%)',
  borderRadius:20,
};

const AgentCardHeader = ({glyph, name, status, confidence}) => (
  <div style={{display:'flex',alignItems:'center',gap:12,padding:'14px 18px',borderBottom:'1px solid var(--line)'}}>
    <div style={{width:30,height:30,borderRadius:8,background:'linear-gradient(135deg,var(--paper-2),#fff)',border:'1px solid var(--line)',display:'grid',placeItems:'center'}}>
      {glyph}
    </div>
    <div style={{flex:1,minWidth:0}}>
      <div style={{fontSize:12.5,fontWeight:600,letterSpacing:'-0.01em'}}>{name}</div>
      <div style={{fontSize:10.5,color:'var(--muted)',fontFamily:'var(--font-mono)'}}>{status}</div>
    </div>
    {confidence != null && (
      <div style={{fontSize:11,fontFamily:'var(--font-mono)',color:'var(--accent)',padding:'3px 8px',background:'rgba(25,80,198,.08)',borderRadius:999}}>
        {confidence}% conf
      </div>
    )}
  </div>
);

const GlyphDoc = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M3 1h7l3 3v11H3z"/><path d="M10 1v3h3M5 7h6M5 10h6M5 13h4"/></svg>
);
const GlyphForm = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2" y="2" width="12" height="12" rx="1.5"/><path d="M5 6h3M5 9h6M5 12h4"/><path d="M10 6l1.5 1.5L14 5" fill="none"/></svg>
);
const GlyphShield = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M8 1l5.5 2v4c0 3.5-2.3 6-5.5 8-3.2-2-5.5-4.5-5.5-8V3L8 1z"/><path d="M5.5 8l2 2 3-4"/></svg>
);

const DocAgentCard = ({tick, style}) => {
  const rows = [
    {label:'Full name', val:'Priya A. Sharma'},
    {label:'Passport №', val:'M8429173'},
    {label:'DOB', val:'1994-03-17'},
    {label:'Expiry', val:'2029-08-04'},
    {label:'Visa class', val:'H-1B initial'},
  ];
  const filled = Math.min(rows.length, (tick % 7) + 1);
  return (
    <div style={{...elevatedCard, ...style}}>
      <AgentCardHeader glyph={<GlyphDoc/>} name="Document Intelligence" status="extracting · passport.pdf" confidence={98}/>
      <div style={{padding:'14px 18px',display:'grid',gap:10}}>
        {rows.map((r, i) => (
          <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:12.5,opacity:i<filled?1:.25,transition:'opacity .5s'}}>
            <span style={{color:'var(--muted)'}}>{r.label}</span>
            <span className="mono" style={{display:'flex',alignItems:'center',gap:6}}>
              {r.val}
              {i<filled && <span style={{width:6,height:6,borderRadius:'50%',background:'#0a7c4e'}}/>}
            </span>
          </div>
        ))}
        <div style={{fontSize:11,color:'var(--muted)',marginTop:6,fontStyle:'italic',fontFamily:'var(--serif)'}}>
          — 5 fields mapped to case.beneficiary
        </div>
      </div>
    </div>
  );
};

const FormAgentCard = ({tick, style}) => {
  const progress = 40 + ((tick % 6) * 10);
  return (
    <div style={{...elevatedCard, ...style}}>
      <AgentCardHeader glyph={<GlyphForm/>} name="Form Registry" status="Form I-129 · H-1B supplement" confidence={95}/>
      <div style={{padding:'14px 18px'}}>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:11.5,color:'var(--muted)',marginBottom:8}}>
          <span className="mono">142 / 156 fields</span>
          <span className="mono">{progress}%</span>
        </div>
        <div style={{height:4,background:'var(--paper-2)',borderRadius:999,overflow:'hidden'}}>
          <div style={{height:'100%',width:`${Math.min(progress,91)}%`,background:'linear-gradient(90deg, var(--accent), #4876db)',transition:'width .9s cubic-bezier(.2,.7,.2,1)'}}/>
        </div>
        <div style={{marginTop:14,display:'grid',gridTemplateColumns:'repeat(12,1fr)',gap:3}}>
          {Array.from({length:60}).map((_,i)=>{
            const state = i<50 ? 'ok' : i<55 ? 'warn' : 'idle';
            return <div key={i} style={{height:10,borderRadius:2,background: state==='ok'?'#1950C6':state==='warn'?'#d97706':'var(--paper-2)'}}/>;
          })}
        </div>
        <div style={{marginTop:12,fontSize:11,color:'var(--muted)',display:'flex',justifyContent:'space-between'}}>
          <span>Auto-filled from questionnaire</span>
          <span className="serif" style={{color:'var(--ink)'}}>— 5 need review</span>
        </div>
      </div>
    </div>
  );
};

const ComplianceAgentCard = ({tick, style}) => {
  return (
    <div style={{...elevatedCard, ...style}}>
      <AgentCardHeader glyph={<GlyphShield/>} name="Compliance Verification" status="8 rules · USCIS + DOL" confidence={null}/>
      <div style={{padding:'16px 18px',display:'grid',gap:12}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <RiskGauge value={0.22}/>
          <div style={{flex:1}}>
            <div style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:2}}>Risk score</div>
            <div style={{fontSize:26,letterSpacing:'-0.03em',fontWeight:500}} className="mono">0.22</div>
            <div style={{fontSize:11.5,color:'#0a7c4e'}}>Low · Standard petition path</div>
          </div>
        </div>
        <div style={{display:'grid',gap:6,fontSize:11.5}}>
          <CheckRow label="LCA filed ≥ 7 days prior" ok/>
          <CheckRow label="Wage meets prevailing + 5%" ok/>
          <CheckRow label="Specialty occupation evidence" ok/>
          <CheckRow label="Public Access File — pending" warn/>
        </div>
      </div>
    </div>
  );
};

const CheckRow = ({label, ok, warn}) => (
  <div style={{display:'flex',alignItems:'center',gap:8,color:warn?'#b45309':'var(--ink-2)'}}>
    <span style={{width:14,height:14,borderRadius:4,background:ok?'rgba(10,124,78,.12)':warn?'rgba(180,83,9,.12)':'var(--paper-2)',display:'grid',placeItems:'center',fontSize:10,color:ok?'#0a7c4e':warn?'#b45309':'var(--muted)'}}>
      {ok?'✓':warn?'!':'·'}
    </span>
    {label}
  </div>
);

const RiskGauge = ({value}) => {
  const r = 28, c = 2 * Math.PI * r;
  const off = c - (value * c);
  return (
    <svg width="72" height="72" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r={r} stroke="var(--paper-2)" strokeWidth="5" fill="none"/>
      <circle cx="36" cy="36" r={r} stroke="#0a7c4e" strokeWidth="5" fill="none"
        strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
        transform="rotate(-90 36 36)"
        style={{transition:'stroke-dashoffset 1s cubic-bezier(.2,.7,.2,1)'}}/>
    </svg>
  );
};

const Ticker = () => {
  const items = [
    'United States — H-1B', 'India — Employment Visa', 'China — Z Visa + Work Permit',
    'United Kingdom — Skilled Worker', 'Germany — EU Blue Card', 'France — EU Blue Card',
    'Netherlands — EU Blue Card', 'United States — L-1A / L-1B', 'United States — O-1',
    'United States — PERM + EB-2/3', 'India — OCI', 'China — M Visa',
  ];
  return (
    <div style={{position:'relative',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)',padding:'22px 0',overflow:'hidden'}}>
      <div style={{position:'absolute',left:0,top:0,bottom:0,width:160,background:'linear-gradient(to right, var(--paper), transparent)',zIndex:2}}/>
      <div style={{position:'absolute',right:0,top:0,bottom:0,width:160,background:'linear-gradient(to left, var(--paper), transparent)',zIndex:2}}/>
      <div style={{display:'flex',gap:56,animation:'ticker 60s linear infinite',whiteSpace:'nowrap'}}>
        {[...items, ...items].map((it, i) => (
          <div key={i} style={{display:'flex',alignItems:'center',gap:18,fontSize:13,color:'var(--ink-2)'}}>
            <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="2" fill="var(--spark)"/></svg>
            <span>{it}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
};

window.Hero = Hero;
