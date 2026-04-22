import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Logo } from './Nav.jsx';

/* Agent orbit — GoGetta's signature: central element with orbiting items + dark testimonial + case cards */
export const AgentOrbit = () => {
  const rootRef = useRef(null);
  const agents = [
    {n:'DI', label:'Document Intelligence'},
    {n:'CV', label:'Compliance Verification'},
    {n:'FR', label:'Form Registry'},
    {n:'ED', label:'Evidentiary Drafter'},
    {n:'PI', label:'Policy Intelligence'},
    {n:'IN', label:'Intake Agent'},
    {n:'RP', label:'Renewal Pipeline'},
    {n:'QA', label:'Quality Audit'},
  ];

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.orbit-ring'), {
        scale: 0.88,
        opacity: 0,
        duration: 1.05,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 72%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from(el.querySelectorAll('.orbit-hub'), {
        scale: 0,
        opacity: 0,
        duration: 0.85,
        ease: 'elastic.out(1, 0.72)',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from(el.querySelectorAll('.orbit-node'), {
        opacity: 0,
        scale: 0.5,
        duration: 0.55,
        stagger: { each: 0.07, from: 'random' },
        ease: 'back.out(1.35)',
        scrollTrigger: {
          trigger: el,
          start: 'top 68%',
          toggleActions: 'play none none none',
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="sec sec-dark" id="platform">
      <div className="container">
        <div className="reveal" style={{textAlign:'left',maxWidth:'1000px',margin:'0 0 48px'}}>
          <div className="eyebrow" style={{color:'var(--blue-hover)',marginBottom:20}}>The agent workforce</div>
          <h2 className="display" style={{fontSize:'clamp(44px,6.5vw,96px)',letterSpacing:'-0.025em',color:'#fff'}}>
            <span style={{display:'block',width:'1000px',textAlign:'left'}}>Eight specialists,</span>
            <em style={{display:'block',fontStyle:'italic',color:'var(--blue-hover)'}}>one case file.</em>
          </h2>
        </div>

        <div className="reveal d1" style={{position:'relative',height:560,display:'grid',placeItems:'center',marginBottom:40,overflow:'hidden'}}>
          <div className="orbit-ring" style={{width:560,height:560,borderColor:'rgba(255,255,255,.1)'}}/>
          <div className="orbit-ring" style={{width:380,height:380,borderColor:'rgba(255,255,255,.08)'}}/>

          {/* Center */}
          <div className="orbit-hub" style={{
            width:160,height:160,borderRadius:'50%',
            background:'linear-gradient(180deg, var(--blue), var(--blue-ink))',
            display:'grid',placeItems:'center',zIndex:3,
            boxShadow:'0 0 80px rgba(25,80,198,.5), 0 0 0 1px rgba(255,255,255,.1) inset',
          }}>
            <div style={{textAlign:'center',color:'#fff'}}>
              <div style={{fontSize:11,fontFamily:'var(--mono)',letterSpacing:'.14em',opacity:.7,marginBottom:4}}>CASE</div>
              <div className="display" style={{fontSize:32,fontStyle:'italic'}}>file</div>
            </div>
          </div>

          {/* Orbiting nodes */}
          {agents.map((a,i)=>{
            const angle = (i/agents.length)*Math.PI*2 - Math.PI/2;
            const r = 240;
            const x = Math.cos(angle)*r;
            const y = Math.sin(angle)*r;
            return (
              <div key={i} className="orbit-node" style={{
                position:'absolute',top:'50%',left:'50%',
                transform:`translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                display:'flex',alignItems:'center',gap:10,
              }}>
                <div style={{
                  width:56,height:56,borderRadius:'50%',
                  background:'var(--ink-2)',border:'1px solid rgba(255,255,255,.12)',
                  display:'grid',placeItems:'center',
                  fontSize:13,fontWeight:650,color:'#fff',
                  fontFamily:'var(--mono)',
                  boxShadow:'0 10px 30px -10px rgba(0,0,0,.5)',
                }}>{a.n}</div>
                <div style={{
                  padding:'6px 12px',borderRadius:56,
                  background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.08)',
                  fontSize:12,color:'rgba(255,255,255,.85)',whiteSpace:'nowrap',
                  display: i%2===0?'none':'block',
                }}>{a.label}</div>
              </div>
            );
          })}
        </div>

        <div className="reveal d2" style={{textAlign:'center'}}>
          <motion.a
            href="#cta"
            className="btn btn-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          >
            Explore every agent
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

/* Testimonial — GoGetta-style big quote */
export const Testimonial = () => (
  <section className="sec" id="customers">
    <div className="container-narrow" style={{textAlign:'center'}}>
      <motion.div
        className="reveal eyebrow"
        style={{color:'var(--blue)',marginBottom:32}}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
      >
        Customers
      </motion.div>
      <motion.blockquote
        className="reveal d1 display"
        style={{fontSize:'clamp(28px,3.8vw,52px)',letterSpacing:'-0.02em',marginBottom:40,color:'var(--ink)'}}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <em style={{fontStyle:'italic',color:'var(--blue)'}}>"</em>When USCIS shifted a rule at 4pm, every affected case carried an impact memo by morning — with a plain-English explanation for the employee. That used to be a three-day fire drill.<em style={{fontStyle:'italic',color:'var(--blue)'}}>"</em>
      </motion.blockquote>
      <div className="reveal d2" style={{display:'inline-flex',alignItems:'center',gap:14}}>
        <div style={{width:44,height:44,borderRadius:'50%',background:'var(--ink)',color:'#fff',display:'grid',placeItems:'center',fontWeight:560,fontSize:15}}>MR</div>
        <div style={{textAlign:'left'}}>
          <div style={{fontWeight:650,fontSize:15}}>Maya Reyes</div>
          <div style={{fontSize:13.5,color:'var(--muted)'}}>Managing Partner · Reyes & Leung Immigration</div>
        </div>
      </div>
    </div>
  </section>
);

/* Case studies — GoGetta-style card grid */
export const CaseStudies = () => {
  const cases = [
    {tag:'H-1B CAP SEASON',h:'8h → 2h per petition',b:'A 12-attorney practice put cap-season intake, LCA filing, and I-129 prep on parallel agent tracks. Attorneys only touched petitions at review.',firm:'Chen Immigration Group'},
    {tag:'MULTI-COUNTRY L-1',h:'1 dashboard, 5 firms',b:'A global rollout across US, UK, Germany, Netherlands, and Singapore. Corporate HR saw one Health Score; each local firm kept its own keyhole access.',firm:'Teneo Global Mobility'},
    {tag:'PERM WITHOUT FIRE DRILLS',h:'< 10% RFE rate',b:'Evidentiary Drafter generated recruitment reports, prevailing-wage justifications, and support letters — every claim traced to source.',firm:'Patel & Associates'},
  ];
  return (
    <section className="sec sec-surface" id="cases">
      <div className="container">
        <div className="reveal" style={{display:'flex',justifyContent:'space-between',alignItems:'end',marginBottom:56,flexWrap:'wrap',gap:24}}>
          <div style={{maxWidth:'1000px'}}>
            <div className="eyebrow" style={{color:'var(--blue)',marginBottom:20}}>Case studies</div>
            <h2 className="display" style={{fontSize:'clamp(40px,5.5vw,80px)',letterSpacing:'-0.025em'}}>
              <span style={{display:'block',width:'1000px'}}>Real cases.</span>
              <em style={{display:'block',fontStyle:'italic',color:'var(--blue)',width:'1000px'}}>Real hours saved.</em>
            </h2>
          </div>
          <a href="#" className="btn btn-outline">All customer stories</a>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}} className="cs-grid">
          {cases.map((c,i)=>(
            <article key={i} className="card" style={{padding:32,display:'flex',flexDirection:'column',gap:16,transition:'all .3s'}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--blue)';e.currentTarget.style.transform='translateY(-4px)';}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='';e.currentTarget.style.transform='';}}>
              <div className="mono" style={{fontSize:11,letterSpacing:'.1em',color:'var(--blue)'}}>{c.tag}</div>
              <h3 className="display" style={{fontSize:34,letterSpacing:'-0.02em'}}>{c.h}</h3>
              <p style={{fontSize:14.5,color:'var(--ink-3)',lineHeight:1.6,flex:1}}>{c.b}</p>
              <div style={{display:'flex',justifyContent:'space-between',paddingTop:16,borderTop:'1px solid var(--line)',alignItems:'center'}}>
                <span style={{fontSize:13,color:'var(--muted)'}}>{c.firm}</span>
                <span style={{fontSize:13,color:'var(--blue)',fontWeight:600}}>Read →</span>
              </div>
            </article>
          ))}
        </div>
        <style>{`@media(max-width:900px){.cs-grid{grid-template-columns:1fr !important;}}`}</style>
      </div>
    </section>
  );
};

/* Metrics strip */
export const Metrics = () => (
  <section className="sec">
    <div className="container">
      <div className="reveal m-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
        {[['60–70%','attorney time automated'],['204','product screens shipped'],['>95%','form-fill acceptance'],['<60s','rule propagation']].map(([n,l],i)=>(
          <div key={i} style={{padding:'48px 28px',borderRight:i<3?'1px solid var(--line)':'none'}}>
            <div className="display" style={{fontSize:'clamp(48px,6vw,80px)',color:'var(--blue)',letterSpacing:'-0.03em',marginBottom:8}}>{n}</div>
            <div style={{fontSize:14,color:'var(--ink-3)'}}>{l}</div>
          </div>
        ))}
      </div>
      <div className="reveal d1" style={{marginTop:28,display:'flex',gap:28,flexWrap:'wrap',justifyContent:'center'}}>
        {['SOC 2 Type II','GDPR','HIPAA-ready','CCPA','SSO · Okta/Azure','4-eye review','DSAR'].map(t=>(
          <span key={t} className="mono" style={{fontSize:11.5,letterSpacing:'.12em',color:'var(--muted)',textTransform:'uppercase'}}>{t}</span>
        ))}
      </div>
      <style>{`@media(max-width:900px){.m-grid{grid-template-columns:1fr 1fr !important;}.m-grid>div:nth-child(-n+2){border-bottom:1px solid var(--line);}.m-grid>div:nth-child(2){border-right:none;}}`}</style>
    </div>
  </section>
);

/* CTA */
export const CTA = () => (
  <section id="cta" className="sec" style={{paddingBottom:140}}>
    <div className="container-narrow" style={{textAlign:'center',position:'relative'}}>
      <div aria-hidden="true" style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:900,height:400,background:'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(25,80,198,.1), transparent 70%)',filter:'blur(40px)',pointerEvents:'none'}}/>
      <h2 className="reveal d1 display" style={{fontSize:'clamp(56px,9vw,140px)',letterSpacing:'-0.03em',marginBottom:32,position:'relative'}}>
        <span style={{display:'block'}}>Run your next case</span>
        <em style={{display:'block',fontStyle:'italic',color:'var(--blue)'}}>with agents.</em>
      </h2>
      <p className="reveal d1" style={{fontSize:18,color:'var(--ink-3)',maxWidth:'48ch',margin:'0 auto 36px',lineHeight:1.55,position:'relative'}}>
        Book a 30-minute walkthrough. We'll map your highest-volume visa path to where the platform saves hours on day one.
      </p>
      <div className="reveal d2" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',position:'relative'}}>
        <a href="#" className="btn btn-dark">Request access <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        <a href="#" className="btn btn-surface">Talk to sales</a>
      </div>
    </div>
  </section>
);

/* Footer */
export const Footer = () => (
  <footer style={{borderTop:'1px solid var(--line)',padding:'64px 0 36px',background:'#fff'}}>
    <div className="container">
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr',gap:32,marginBottom:48}} className="ft-grid">
        <div style={{maxWidth:'32ch'}}>
          <div style={{display:'flex',alignItems:'center',marginBottom:16,lineHeight:0}}>
            <Logo height={36} />
          </div>
          <p style={{fontSize:13.5,color:'var(--muted)',lineHeight:1.6}}>The AI platform for global immigration. Built for attorneys, corporations, and the people moving across borders.</p>
        </div>
        {[['Platform',['Agents','Workflows','Form Registry','Policy Intelligence']],['Personas',['Attorneys','Corporate HR','Employees','Providers']],['Company',['About','Customers','Careers','Contact']],['Legal',['SOC 2','GDPR','Privacy','Terms']]].map(([h,items])=>(
          <div key={h}>
            <div className="mono" style={{fontSize:10.5,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:14}}>{h}</div>
            <ul style={{listStyle:'none',display:'grid',gap:10,fontSize:13.5}}>{items.map(it=><li key={it}><a href="#" style={{color:'var(--ink-3)'}}>{it}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div style={{borderTop:'1px solid var(--line)',paddingTop:20,display:'flex',justifyContent:'space-between',fontSize:12,color:'var(--muted)',flexWrap:'wrap',gap:12}}>
        <div>© 2026 GlobalCodio Inc. · San Francisco · Delhi · London</div>
        <div className="mono" style={{letterSpacing:'.05em'}}>v2026.2 · Apr 22, 2026</div>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'relative',
          marginTop: 48,
          textAlign: 'center',
        }}
      >
        <div
          className="display"
          style={{
            fontSize: 'clamp(72px,18vw,260px)',
            color: 'var(--surface)',
            pointerEvents: 'none',
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            userSelect: 'none',
          }}
        >
          GlobalCodio<span style={{ color: 'var(--blue-soft)' }}>.ai</span>
        </div>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '50%',
            pointerEvents: 'none',
            background: 'linear-gradient(to top, #fff 0%, rgba(255,255,255,0.92) 28%, rgba(255,255,255,0.4) 62%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>
      <style>{`@media(max-width:900px){.ft-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </div>
  </footer>
);

/* Tweaks */
export const Tweaks = ({tweaks, onChange}) => {
  const Seg = ({k,options}) => (
    <div className="seg">
      {options.map(([v,l])=><button key={v} className={tweaks[k]===v?'on':''} onClick={()=>onChange(k,v)}>{l}</button>)}
    </div>
  );
  return (
    <div className="tweaks-panel">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
        <div style={{fontSize:17,fontWeight:650,letterSpacing:'-0.01em'}}>Tweaks</div>
        <span className="mono" style={{fontSize:10,color:'var(--blue)',letterSpacing:'.12em'}}>LIVE</span>
      </div>
      <div className="row"><h4>Headline</h4><Seg k="headline" options={[['edge','Edge'],['quiet','Quiet'],['craft','Craft'],['scale','Scale']]}/></div>
      <div className="row" style={{marginBottom:0}}><h4>Accent</h4><Seg k="accent" options={[['blue','Blue'],['deep','Deep'],['ink','Ink']]}/></div>
    </div>
  );
};

