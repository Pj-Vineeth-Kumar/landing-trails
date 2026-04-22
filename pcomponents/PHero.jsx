/* Perform-style hero + nav */

const PNav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(()=>{
    const h = ()=>setScrolled(window.scrollY>20);
    window.addEventListener('scroll',h); return ()=>window.removeEventListener('scroll',h);
  },[]);
  return (
    <nav style={{
      position:'fixed',top:16,left:'50%',transform:'translateX(-50%)',zIndex:100,
      display:'flex',alignItems:'center',gap:28,
      padding: scrolled?'8px 10px 8px 20px':'12px 12px 12px 22px',
      background:'rgba(255,255,255,.78)',backdropFilter:'blur(20px) saturate(160%)',
      border:'1px solid var(--line)',borderRadius:999,
      boxShadow: scrolled?'0 10px 30px -12px rgba(11,19,36,.12)':'0 1px 2px rgba(11,19,36,.04)',
      transition:'all .3s cubic-bezier(.2,.7,.2,1)',
    }}>
      <a href="#" style={{display:'flex',alignItems:'center',gap:8}}>
        <PLogo/>
        <span style={{fontSize:14.5,fontWeight:600,letterSpacing:'-0.02em'}}>GlobalCodio</span>
      </a>
      <div style={{display:'flex',gap:24,fontSize:13,color:'var(--text-2)'}} className="pnav-links">
        <a href="#platform">Platform</a>
        <a href="#agents">Agents</a>
        <a href="#cases">Cases</a>
        <a href="#metrics">Metrics</a>
      </div>
      <a href="#cta" className="btn btn-primary" style={{padding:'8px 16px',fontSize:12.5}}>
        Request access
      </a>
      <style>{`@media(max-width:820px){.pnav-links{display:none !important;}}`}</style>
    </nav>
  );
};

const PLogo = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="1" y="1" width="20" height="20" rx="4" stroke="var(--accent)" strokeWidth="1.5"/>
    <path d="M6 11h10M11 6v10" stroke="var(--accent)" strokeWidth="1.5"/>
    <circle cx="11" cy="11" r="2.5" fill="var(--accent)"/>
  </svg>
);

const PHero = ({tweaks}) => {
  const h = {
    perform:{a:'Immigration',b:'Performance'},
    edge:{a:'Immigration,',b:'at the edge'},
    scale:{a:'Scale',b:'immigration.'},
  }[tweaks?.headline||'perform'];

  return (
    <section style={{paddingTop:150,paddingBottom:80,position:'relative',overflow:'hidden'}}>
      {/* Background glow */}
      <div style={{position:'absolute',top:'10%',left:'50%',transform:'translateX(-50%)',width:1100,height:600,background:'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(25,80,198,.14), transparent 70%)',filter:'blur(40px)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle, rgba(11,19,36,.06) 1px, transparent 1px)',backgroundSize:'28px 28px',maskImage:'radial-gradient(ellipse 70% 50% at 50% 40%, black 40%, transparent 80%)',WebkitMaskImage:'radial-gradient(ellipse 70% 50% at 50% 40%, black 40%, transparent 80%)',pointerEvents:'none'}}/>

      <div className="container" style={{position:'relative',zIndex:2,textAlign:'center'}}>
        <div className="reveal" style={{marginBottom:32}}>
          <span className="pill">
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--accent)',boxShadow:'0 0 8px var(--accent)',animation:'livepulse 2s ease-in-out infinite'}}/>
            v2026.2 · 7 jurisdictions live
          </span>
        </div>

        <h1 className="reveal d1 display" style={{
          fontSize:'clamp(60px,11vw,180px)',marginBottom:32,
        }}>
          {h.a}<br/>
          <span style={{background:'linear-gradient(180deg, #0b1324 0%, #6b7489 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{h.b}</span>
          <span style={{color:'var(--accent)'}}>.</span>
        </h1>

        <p className="reveal d2" style={{fontSize:'clamp(16px,1.3vw,19px)',lineHeight:1.55,color:'var(--text-2)',maxWidth:'58ch',margin:'0 auto 44px',fontWeight:400}}>
          The AI platform for global immigration. A workforce of specialized agents for document intake, form preparation, compliance verification, and evidentiary drafting — so attorneys focus on judgment, not data entry.
        </p>

        <div className="reveal d3" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',marginBottom:80}}>
          <a href="#cta" className="btn btn-primary">
            Request access
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M6 4h6v6"/></svg>
          </a>
          <a href="#platform" className="btn btn-ghost">
            View platform
          </a>
        </div>
      </div>

      <div className="container reveal d4">
        <PHeroDash/>
      </div>
    </section>
  );
};

const PHeroDash = () => {
  const [tab, setTab] = React.useState(0);
  React.useEffect(()=>{
    const t = setInterval(()=>setTab(x=>(x+1)%3),4500);
    return ()=>clearInterval(t);
  },[]);

  return (
    <div style={{
      position:'relative',border:'1px solid var(--line-2)',borderRadius:16,overflow:'hidden',
      background:'#ffffff',
      boxShadow:'0 40px 80px -30px rgba(11,19,36,.18), 0 4px 8px rgba(11,19,36,.04), 0 0 0 1px rgba(25,80,198,.06)',
    }}>
      {/* Top chrome */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 20px',borderBottom:'1px solid var(--line)',background:'var(--bg-2)'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{display:'flex',gap:6}}>
            <div style={{width:10,height:10,borderRadius:'50%',background:'#ef4444'}}/>
            <div style={{width:10,height:10,borderRadius:'50%',background:'#f59e0b'}}/>
            <div style={{width:10,height:10,borderRadius:'50%',background:'#1950C6'}}/>
          </div>
          <span className="mono" style={{fontSize:11.5,color:'var(--muted)',marginLeft:8}}>globalcodio.app/cases/TECH-2026-0347</span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:14,fontSize:11}} className="mono">
          <span style={{color:'var(--muted)'}}>H-1B · ACTIVE</span>
          <span style={{color:'var(--accent)',display:'flex',alignItems:'center',gap:6}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--accent)',animation:'livepulse 2s infinite'}}/>
            LIVE
          </span>
        </div>
      </div>

      {/* Tab strip */}
      <div style={{display:'flex',borderBottom:'1px solid var(--line)'}}>
        {['Document Intelligence','Form Registry','Compliance'].map((t,i)=>(
          <button key={i} onClick={()=>setTab(i)} style={{
            padding:'14px 22px',fontSize:12.5,
            color:tab===i?'var(--text)':'var(--muted)',
            background:tab===i?'var(--bg-3)':'transparent',
            borderRight:'1px solid var(--line)',
            borderBottom: tab===i?'1px solid var(--accent)':'1px solid transparent',
            marginBottom:-1, fontWeight: tab===i?500:400,
            fontFamily:'var(--mono)',letterSpacing:'-0.005em',
            transition:'all .25s',
          }}>
            {String(i+1).padStart(2,'0')} · {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{padding:'32px 28px',minHeight:340}}>
        {tab===0 && <PDocPanel/>}
        {tab===1 && <PFormPanel/>}
        {tab===2 && <PComplPanel/>}
      </div>

      {/* Footer stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:'1px solid var(--line)',background:'var(--bg-2)'}}>
        {[
          ['Confidence','98.2%','accent'],
          ['Fields mapped','142/156','text'],
          ['Risk score','0.22','accent'],
          ['SLA','2h 14m','text'],
        ].map(([l,v,c],i)=>(
          <div key={i} style={{padding:'14px 20px',borderRight:i<3?'1px solid var(--line)':'none'}}>
            <div className="mono" style={{fontSize:10.5,color:'var(--muted)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:4}}>{l}</div>
            <div className="mono" style={{fontSize:18,color:c==='accent'?'var(--accent)':'var(--text)',letterSpacing:'-0.01em'}}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PDocPanel = () => (
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32}}>
    <div>
      <div className="mono" style={{fontSize:10.5,color:'var(--muted)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>INPUT · passport.pdf</div>
      <div style={{background:'var(--bg-3)',border:'1px solid var(--line)',borderRadius:8,padding:20,position:'relative',overflow:'hidden',minHeight:240}}>
        <div style={{position:'absolute',left:0,right:0,height:40,background:'linear-gradient(180deg, rgba(25,80,198,.12), transparent)',animation:'scan 2.2s ease-in-out infinite',top:0}}/>
        <div style={{fontSize:13,color:'var(--text-2)',marginBottom:10,fontWeight:500}}>Republic of India — Passport</div>
        {[['Full name','Priya A. Sharma'],['Passport №','M8429173'],['DOB','1994-03-17'],['Expiry','2029-08-04'],['Visa class','H-1B initial']].map(([k,v],i)=>(
          <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px dashed var(--line)',fontSize:12.5,color:'var(--text-2)'}} className="mono">
            <span style={{color:'var(--muted)'}}>{k}</span>
            <span style={{background:'rgba(25,80,198,.08)',color:'var(--accent)',padding:'2px 8px',borderRadius:4,border:'1px solid rgba(25,80,198,.22)',opacity:0,animation:`docIn .5s ease-out forwards`,animationDelay:`${i*.15}s`}}>{v}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes docIn{from{opacity:0;transform:translateX(-8px);}to{opacity:1;}}`}</style>
    </div>
    <div>
      <div className="mono" style={{fontSize:10.5,color:'var(--muted)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>OUTPUT · mapped to case</div>
      <div style={{display:'grid',gap:8}}>
        {[['case.beneficiary.name','Priya A. Sharma','98%'],['case.beneficiary.passport','M8429173','99%'],['case.beneficiary.dob','1994-03-17','97%'],['case.beneficiary.expiry','2029-08-04','99%'],['case.visa_class','H-1B initial','96%']].map(([k,v,c],i)=>(
          <div key={i} style={{display:'grid',gridTemplateColumns:'1fr auto',gap:12,padding:'10px 12px',background:'var(--bg-3)',border:'1px solid var(--line)',borderRadius:6,fontSize:12}}>
            <div className="mono">
              <div style={{color:'var(--muted)',fontSize:11}}>{k}</div>
              <div style={{color:'var(--text)'}}>{v}</div>
            </div>
            <span className="mono" style={{fontSize:11,color:'var(--accent)',alignSelf:'center'}}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PFormPanel = () => (
  <div>
    <div style={{display:'flex',justifyContent:'space-between',marginBottom:18}}>
      <div>
        <div className="mono" style={{fontSize:10.5,color:'var(--muted)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:6}}>FORM I-129 · H-1B</div>
        <div style={{fontSize:24,fontWeight:500,letterSpacing:'-0.02em'}}>142 <span style={{color:'var(--muted)'}}>of</span> 156 fields</div>
      </div>
      <div className="mono" style={{fontSize:42,color:'var(--accent)',letterSpacing:'-0.02em',lineHeight:1}}>91%</div>
    </div>
    <div style={{height:3,background:'var(--bg-3)',borderRadius:999,marginBottom:24,overflow:'hidden'}}>
      <div style={{height:'100%',width:'91%',background:'linear-gradient(90deg,var(--accent),var(--accent-2))',boxShadow:'0 0 20px var(--accent-glow)'}}/>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(20,1fr)',gap:3,marginBottom:18}}>
      {Array.from({length:120}).map((_,i)=>{
        const s = i<102?'ok':i<110?'warn':'idle';
        return <div key={i} style={{height:12,borderRadius:2,background:s==='ok'?'var(--accent)':s==='warn'?'#ff9b2e':'var(--line)',opacity:0,animation:`cellIn .3s ease-out forwards`,animationDelay:`${i*.008}s`}}/>;
      })}
    </div>
    <style>{`@keyframes cellIn{to{opacity:${1};}}`}</style>
    <div className="mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.04em',display:'flex',justifyContent:'space-between'}}>
      <span>142 auto · 6 pending · 8 review · lineage ✓</span>
      <span style={{color:'var(--accent)'}}>questionnaire.q-042 → form.i129.p2.Q3</span>
    </div>
  </div>
);

const PComplPanel = () => (
  <div style={{display:'grid',gridTemplateColumns:'220px 1fr',gap:40,alignItems:'center'}}>
    <div style={{textAlign:'center'}}>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" stroke="var(--line)" strokeWidth="2" fill="none"/>
        <circle cx="100" cy="100" r="80" stroke="var(--accent)" strokeWidth="2" fill="none" strokeDasharray={502} strokeDashoffset={502-502*.22} transform="rotate(-90 100 100)" style={{filter:'drop-shadow(0 0 8px var(--accent-glow))',animation:'arcIn 1.2s cubic-bezier(.2,.7,.2,1) forwards',strokeDashoffset:502}}/>
        <text x="100" y="100" textAnchor="middle" fontFamily="Inter" fontSize="48" fontWeight="500" fill="var(--text)" letterSpacing="-0.03em">0.22</text>
        <text x="100" y="122" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--muted)" letterSpacing=".14em">RISK SCORE</text>
      </svg>
      <style>{`@keyframes arcIn{to{stroke-dashoffset:${502-502*.22};}}`}</style>
      <div className="mono" style={{fontSize:11,color:'var(--accent)',letterSpacing:'.1em',marginTop:4}}>LOW · STANDARD PATH</div>
    </div>
    <div>
      <div className="mono" style={{fontSize:10.5,color:'var(--muted)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14}}>RULES · USCIS + DOL</div>
      {[
        ['LCA filed ≥ 7 days prior','ok'],
        ['Wage meets prevailing + 5%','ok'],
        ['Specialty occupation evidence','ok'],
        ['Employer-employee documented','ok'],
        ['Public Access File — posting','warn'],
      ].map(([l,s],i)=>(
        <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 0',borderBottom:'1px solid var(--line)',fontSize:13}}>
          <span style={{width:18,height:18,borderRadius:4,background:s==='ok'?'rgba(25,80,198,.1)':'rgba(255,155,46,.12)',color:s==='ok'?'var(--accent)':'#ff5b2e',display:'grid',placeItems:'center',fontSize:11,border:`1px solid ${s==='ok'?'rgba(25,80,198,.28)':'rgba(255,155,46,.35)'}`}}>{s==='ok'?'✓':'!'}</span>
          <span style={{flex:1,color:'var(--text-2)'}}>{l}</span>
          <span className="mono" style={{fontSize:10.5,color:'var(--muted)'}}>R.{String(i+1).padStart(2,'0')}</span>
        </div>
      ))}
    </div>
  </div>
);

window.PNav = PNav;
window.PHero = PHero;
window.PLogo = PLogo;
