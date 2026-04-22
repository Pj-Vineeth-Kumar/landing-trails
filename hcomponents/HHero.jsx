/* Harvey-style Hero — giant serif, subhead, single hero visual */

const HHero = ({tweaks}) => {
  const headlines = {
    domain: {
      pre: 'The AI platform for',
      accent: 'global immigration',
      post: '.',
    },
    quiet: {
      pre: 'A quiet partner',
      accent: 'for every filing',
      post: '.',
    },
    work: {
      pre: 'Immigration work,',
      accent: 'elevated',
      post: '.',
    },
  };
  const h = headlines[tweaks?.headline || 'domain'];

  return (
    <section style={{paddingTop:160, paddingBottom:60, position:'relative'}}>
      <div className="container-narrow" style={{textAlign:'center'}}>
        <div className="reveal" style={{marginBottom:32}}>
          <span className="eyebrow">GlobalCodio · Platform v2026.2</span>
        </div>

        <h1 className="reveal d1" style={{
          fontFamily:'var(--display)', fontWeight:300,
          fontSize:'clamp(52px, 8.4vw, 124px)',
          lineHeight:.96, letterSpacing:'-0.035em',
          marginBottom:32, color:'var(--ink)',
        }}>
          {h.pre}<br/>
          <span style={{fontStyle:'italic', fontWeight:300}}>{h.accent}</span>{h.post}
        </h1>

        <p className="reveal d2" style={{
          fontSize:'clamp(17px,1.4vw,20px)', lineHeight:1.5, color:'var(--ink-3)',
          maxWidth:'52ch', margin:'0 auto 44px', fontWeight:400,
        }}>
          GlobalCodio gives immigration teams a workforce of specialized agents — for document intake, form preparation, compliance verification, and evidentiary drafting. Attorneys stay in command. The repetitive work moves on its own.
        </p>

        <div className="reveal d3" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',marginBottom:80}}>
          <a href="#cta" className="btn btn-primary">
            Request access
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12L12 4M6 4h6v6"/></svg>
          </a>
          <a href="#platform" className="btn btn-ghost">
            Explore the platform
          </a>
        </div>
      </div>

      {/* Hero visual — editorial image panel */}
      <div className="container reveal d4">
        <HHeroVisual/>
      </div>
    </section>
  );
};

/* Editorial hero visual — a quiet, dignified composition */
const HHeroVisual = () => {
  const [tab, setTab] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setTab(x => (x+1) % 3), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      position:'relative', borderRadius:4, overflow:'hidden',
      background:'linear-gradient(180deg, #1a1916 0%, #0e0d0a 100%)',
      border:'1px solid var(--line-2)',
      minHeight:560, padding:48,
      boxShadow:'0 40px 80px -40px rgba(0,0,0,.35)',
    }}>
      {/* Tasteful chrome */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:40}}>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <div style={{width:8,height:8,borderRadius:'50%',background:'#c8451f'}}/>
          <div style={{width:8,height:8,borderRadius:'50%',background:'#5a5a52'}}/>
          <div style={{width:8,height:8,borderRadius:'50%',background:'#5a5a52'}}/>
          <span style={{marginLeft:16,fontSize:12,color:'#8a8878',fontFamily:'var(--mono)',letterSpacing:'.05em'}}>globalcodio · case · TECH-2026-0347</span>
        </div>
        <span style={{fontSize:11,color:'#8a8878',fontFamily:'var(--mono)',letterSpacing:'.08em'}}>H-1B · ACTIVE · RISK 0.22</span>
      </div>

      {/* Tabs */}
      <div style={{display:'flex',gap:0,marginBottom:36,borderBottom:'1px solid rgba(255,255,255,.08)'}}>
        {['Document Intelligence','Form Registry','Compliance'].map((t,i)=>(
          <button key={i} onClick={()=>setTab(i)} style={{
            padding:'12px 20px 14px', fontSize:13, color: tab===i?'#f2ede3':'#7a7870',
            borderBottom: tab===i?'1px solid #f2ede3':'1px solid transparent',
            fontWeight: tab===i?500:400, transition:'all .3s',
            fontFamily:'var(--body)',
          }}>
            {t}
          </button>
        ))}
      </div>

      <div style={{minHeight:320}}>
        {tab===0 && <HHeroDoc/>}
        {tab===1 && <HHeroForm/>}
        {tab===2 && <HHeroCompliance/>}
      </div>

      {/* Bottom caption */}
      <div style={{position:'absolute',left:48,bottom:28,right:48,display:'flex',justifyContent:'space-between',alignItems:'baseline',borderTop:'1px solid rgba(255,255,255,.08)',paddingTop:20}}>
        <span className="serif-italic" style={{color:'#e8e2d0',fontSize:20}}>
          {tab===0 && 'Extracting passport.pdf'}
          {tab===1 && 'Preparing Form I-129'}
          {tab===2 && 'Running 8 compliance rules'}
        </span>
        <span style={{fontSize:12,color:'#7a7870',fontFamily:'var(--mono)'}}>LIVE</span>
      </div>
    </div>
  );
};

const HHeroDoc = () => {
  const fields = [
    ['Full name', 'Priya A. Sharma', 98],
    ['Passport №', 'M8429173', 99],
    ['Date of birth', '1994-03-17', 97],
    ['Expiry', '2029-08-04', 99],
    ['Visa class', 'H-1B initial', 96],
  ];
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
      <div>
        <div style={{fontSize:11,letterSpacing:'.14em',color:'#8a8878',fontFamily:'var(--mono)',marginBottom:16,textTransform:'uppercase'}}>Source document</div>
        <div style={{background:'rgba(242,237,227,.04)',border:'1px solid rgba(255,255,255,.08)',padding:'20px 24px',borderRadius:2,minHeight:240}}>
          <div style={{fontFamily:'var(--display)',fontSize:15,color:'#c9c1ab',marginBottom:10,fontStyle:'italic'}}>Republic of India — Passport</div>
          <div style={{display:'grid',gap:12,fontSize:12.5,color:'#e8e2d0',fontFamily:'var(--mono)'}}>
            {fields.map(([k,v],i)=>(
              <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px dashed rgba(255,255,255,.07)'}}>
                <span style={{color:'#7a7870'}}>{k}</span>
                <span style={{
                  background:'rgba(30,76,184,.18)',padding:'2px 8px',borderRadius:2,
                  border:'1px solid rgba(30,76,184,.35)',
                  animation:`docPulse${i} 2.5s ease-out forwards`,
                  animationDelay:`${i*.15}s`, opacity:0,
                }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          ${fields.map((_,i)=>`@keyframes docPulse${i}{0%{opacity:0;transform:translateX(-8px);}50%{opacity:1;}100%{opacity:1;transform:none;}}`).join('\n')}
        `}</style>
      </div>
      <div>
        <div style={{fontSize:11,letterSpacing:'.14em',color:'#8a8878',fontFamily:'var(--mono)',marginBottom:16,textTransform:'uppercase'}}>Mapped to case</div>
        <div style={{display:'grid',gap:10}}>
          {fields.map(([k,v,c],i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 0',borderBottom:'1px solid rgba(255,255,255,.06)',fontSize:12.5}}>
              <span style={{width:6,height:6,borderRadius:'50%',background:'#4da37a'}}/>
              <span style={{flex:1,color:'#e8e2d0'}}>{k}</span>
              <span style={{color:'#c9c1ab',fontFamily:'var(--mono)'}}>{c}% conf</span>
            </div>
          ))}
          <div style={{marginTop:8,fontSize:12,color:'#7a7870',fontStyle:'italic',fontFamily:'var(--display)'}}>
            5 fields mapped to case.beneficiary — ready for review.
          </div>
        </div>
      </div>
    </div>
  );
};

const HHeroForm = () => {
  const [pct, setPct] = React.useState(0);
  React.useEffect(()=>{
    let v = 0;
    const t = setInterval(()=>{ v += 3; if(v>=91){setPct(91);clearInterval(t);} else setPct(v); }, 50);
    return ()=>clearInterval(t);
  },[]);
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:16}}>
        <div>
          <div style={{fontSize:11,letterSpacing:'.14em',color:'#8a8878',fontFamily:'var(--mono)',textTransform:'uppercase',marginBottom:6}}>Form I-129 · H-1B Supplement</div>
          <div className="serif-italic" style={{fontSize:28,color:'#f2ede3'}}>142 of 156 fields</div>
        </div>
        <div style={{fontFamily:'var(--mono)',fontSize:42,color:'#f2ede3',letterSpacing:'-0.02em',fontWeight:300}}>{pct}%</div>
      </div>
      <div style={{height:2,background:'rgba(255,255,255,.08)',marginBottom:28,overflow:'hidden'}}>
        <div style={{height:'100%',width:`${pct}%`,background:'#f2ede3',transition:'width .3s'}}/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(13,1fr)',gap:4,marginBottom:20}}>
        {Array.from({length:78}).map((_,i)=>{
          const s = i<62?'ok':i<68?'warn':'idle';
          return <div key={i} style={{
            height:18,borderRadius:1,
            background: s==='ok'?'rgba(200,193,171,.6)':s==='warn'?'rgba(200,69,31,.5)':'rgba(255,255,255,.05)',
            animation:`formCell .4s ease-out forwards`, opacity:0,
            animationDelay:`${i*.015}s`,
          }}/>;
        })}
      </div>
      <style>{`@keyframes formCell{to{opacity:1;}}`}</style>
      <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'#7a7870',fontFamily:'var(--mono)',letterSpacing:'.04em'}}>
        <span>142 auto-filled · 6 pending · 8 to review</span>
        <span>lineage: questionnaire.q-042 → form.i129.p2.Q3</span>
      </div>
    </div>
  );
};

const HHeroCompliance = () => (
  <div style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:40,alignItems:'start'}}>
    <div style={{textAlign:'center'}}>
      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r="70" stroke="rgba(255,255,255,.08)" strokeWidth="1.5" fill="none"/>
        <circle cx="90" cy="90" r="70" stroke="#4da37a" strokeWidth="1.5" fill="none"
          strokeDasharray={440} strokeDashoffset={440 - 440*.22}
          transform="rotate(-90 90 90)"
          style={{animation:'complArc 1.5s cubic-bezier(.2,.7,.2,1) forwards',strokeDashoffset:440}}/>
        <text x="90" y="88" textAnchor="middle" fontFamily="Fraunces" fontSize="42" fontWeight="300" fontStyle="italic" fill="#f2ede3" letterSpacing="-0.02em">0.22</text>
        <text x="90" y="108" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#8a8878" letterSpacing=".14em">RISK SCORE</text>
      </svg>
      <style>{`@keyframes complArc{to{stroke-dashoffset:${440-440*.22};}}`}</style>
      <div style={{marginTop:8,color:'#4da37a',fontSize:13,letterSpacing:'.04em',fontFamily:'var(--mono)'}}>LOW · STANDARD PATH</div>
    </div>
    <div>
      <div style={{fontSize:11,letterSpacing:'.14em',color:'#8a8878',fontFamily:'var(--mono)',textTransform:'uppercase',marginBottom:16}}>Rules evaluated · USCIS + DOL</div>
      {[
        ['LCA filed ≥ 7 days prior to petition','ok','2026-04-11 · LCA-7729'],
        ['Wage meets prevailing level + 5% buffer','ok','$142,600 vs $128,500'],
        ['Specialty occupation evidence sufficient','ok','Bachelor\'s + 4 evidentiary exhibits'],
        ['Employer-employee relationship documented','ok','Offer letter + org chart'],
        ['Public Access File — posting period','warn','Pending HR confirmation'],
      ].map(([l,s,m],i)=>(
        <div key={i} style={{display:'grid',gridTemplateColumns:'auto 1fr auto',gap:14,alignItems:'center',padding:'14px 0',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
          <span style={{width:20,height:20,borderRadius:2,background:s==='ok'?'rgba(77,163,122,.15)':'rgba(200,69,31,.15)',color:s==='ok'?'#4da37a':'#c8451f',display:'grid',placeItems:'center',fontSize:11,border:`1px solid ${s==='ok'?'rgba(77,163,122,.3)':'rgba(200,69,31,.3)'}`}}>
            {s==='ok'?'✓':'!'}
          </span>
          <div>
            <div style={{fontSize:13.5,color:'#e8e2d0'}}>{l}</div>
            <div style={{fontSize:11.5,color:'#7a7870',marginTop:2,fontFamily:'var(--mono)'}}>{m}</div>
          </div>
          <span style={{fontSize:11,color:'#7a7870',fontFamily:'var(--mono)'}}>R.{String(i+1).padStart(2,'0')}</span>
        </div>
      ))}
    </div>
  </div>
);

window.HHero = HHero;
