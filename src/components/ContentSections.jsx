import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Logo } from './Nav.jsx';

/** Caption nudge from badge center (px) - icons stay on orbit; labels only */
const ORBIT_CAPTION_NUDGE = {
  'p-ai': { dx: 0, dy: -64 },
  'p-fde': { dx: 56, dy: -64 },
  'p-mto': { dx: 0, dy: 64 },
  'o-in': { dx: 4, dy: 54 },
  'o-fm': { dx: 24, dy: 46 },
  'o-dc': { dx: 0, dy: -54 },
  'o-cw': { dx: -32, dy: -54 },
  'o-rv': { dx: -10, dy: -54 },
};

/* Agent orbit - dual ring: three pillars (inner) + workflow depth (outer) */
export const AgentOrbit = () => {
  const rootRef = useRef(null);

  const innerPillars = [
    { id: 'p-ai', n: 'AI', label: 'AI-Powered Case Management' },
    { id: 'p-fde', n: 'FDE', label: 'Forward Deployed Engineers (FDE)' },
    { id: 'p-mto', n: 'MTO', label: 'Managed Technology Operations' },
  ];
  const outerCapabilities = [
    { id: 'o-in', n: 'IN', label: 'Intake & extraction' },
    { id: 'o-fm', n: 'FM', label: 'Forms & deadlines' },
    { id: 'o-dc', n: 'DC', label: 'Document intelligence' },
    { id: 'o-cw', n: 'CW', label: 'Policy & compliance' },
    { id: 'o-rv', n: 'RV', label: 'Attorney-reviewed output' },
  ];

  const orbitNodes = [
    ...innerPillars.map((a, i) => {
      const angle = (i / innerPillars.length) * Math.PI * 2 - Math.PI / 2;
      return { ...a, r: 186, angle, ring: 'inner' };
    }),
    ...outerCapabilities.map((a, i) => {
      const angle = (i / outerCapabilities.length) * Math.PI * 2 - Math.PI / 2 + Math.PI / outerCapabilities.length;
      return { ...a, r: 298, angle, ring: 'outer' };
    }),
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
        <div className="reveal" style={{textAlign:'left',maxWidth:'1000px',margin:'0 0 40px'}}>
          <div className="eyebrow" style={{color:'var(--blue-hover)',marginBottom:20}}>Three pillars</div>
          <h2 className="display" style={{fontSize:'clamp(44px,6.5vw,96px)',letterSpacing:'-0.025em',color:'#fff',marginBottom:18}}>
            <span style={{display:'block',width:'1000px',textAlign:'left'}}>Your partnership stack</span>
            <em style={{display:'block',fontStyle:'italic',color:'var(--blue-hover)'}}>on every case file.</em>
          </h2>
          <p style={{fontSize:15.5,color:'rgba(255,255,255,.55)',lineHeight:1.6,maxWidth:'56ch'}}>
            AI-Powered Case Management, Forward Deployed Engineers, and Managed Technology Operations
            are the three ways we partner with your firm - attached to every case file. Immigration workflows
            from intake through attorney review surround each matter.
          </p>
        </div>

        <div className="reveal orbit-stage d1">
          {/* Shared center for rings / hub */}
          <div className="orbit-stage-core">
          <div className="orbit-ring" style={{width:612,height:612,borderColor:'rgba(255,255,255,.09)'}}/>
          <div className="orbit-ring" style={{width:384,height:384,borderColor:'rgba(255,255,255,.14)'}}/>
          <span className="orbit-ring-legend orbit-ring-legend--inner">Three pillars</span>
          <span className="orbit-ring-legend orbit-ring-legend--outer">Immigration workflows</span>

          {/* Center - one case file; pillars orbit inside, workflows outside */}
          <div className="orbit-hub" style={{
            width:152,height:152,borderRadius:'50%',
            background:'linear-gradient(180deg, var(--blue), var(--blue-ink))',
            display:'grid',placeItems:'center',zIndex:3,
            boxShadow:'0 0 64px rgba(25,80,198,.42), 0 0 0 1px rgba(255,255,255,.1) inset',
          }}>
            <div style={{textAlign:'center',color:'#fff',padding:'0 10px'}}>
              <div style={{fontSize:10.5,fontFamily:'var(--mono)',letterSpacing:'.14em',opacity:.72,marginBottom:6,lineHeight:1.2}}>CASE</div>
              <div className="display" style={{fontSize:28,fontStyle:'italic',lineHeight:1}}>file</div>
            </div>
          </div>
          </div>

          {/* Labels: fixed nudge per node from badge - icons unchanged */}
          {orbitNodes.map((a) => {
            const { r, angle, ring } = a;
            const nx = Math.cos(angle);
            const ny = Math.sin(angle);
            const x = nx * r;
            const y = ny * r;
            const bd = ring === 'inner' ? 27 : 24;
            const badgePx = a.n.length >= 3 ? 10 : 12;
            const nudge = ORBIT_CAPTION_NUDGE[a.id] ?? { dx: 0, dy: ring === 'inner' ? -48 : -40 };
            const lx = x + nudge.dx;
            const ly = y + nudge.dy;

            return (
              <div key={a.id} className={`orbit-node orbit-node--${ring}`} style={{ zIndex: ring === 'inner' ? 5 : 3 }}>
                <button
                  type="button"
                  className="orbit-node-hit"
                  aria-label={a.label}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: (bd + 10) * 2,
                    height: (bd + 10) * 2,
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    display: 'grid',
                    placeItems: 'center',
                    padding: 0,
                    margin: 0,
                    background: 'none',
                    border: 'none',
                    cursor: 'default',
                  }}
                >
                  <div className="orbit-node-badge" style={{
                    width: bd * 2,
                    height: bd * 2,
                    borderRadius: '50%',
                    background: ring === 'inner' ? 'rgba(25,80,198,.42)' : 'rgba(255,255,255,.05)',
                    border: ring === 'inner' ? '1px solid rgba(74,126,224,.7)' : '1px solid rgba(255,255,255,.1)',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: badgePx,
                    fontWeight: 650,
                    color: ring === 'inner' ? '#fff' : 'rgba(255,255,255,.72)',
                    fontFamily: 'var(--mono)',
                    flexShrink: 0,
                    boxShadow:
                      ring === 'inner'
                        ? '0 10px 24px -8px rgba(25,80,198,.55)'
                        : 'none',
                    transition: 'transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s cubic-bezier(.2,.7,.2,1), border-color .25s cubic-bezier(.2,.7,.2,1)',
                  }}>{a.n}</div>
                </button>
                <div
                  className="orbit-node-caption"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(${lx}px, ${ly}px) translate(-50%, -50%)`,
                    padding: ring === 'inner' ? '7px 12px' : '6px 11px',
                    borderRadius: 999,
                    background: ring === 'inner' ? 'rgba(12,16,26,.92)' : 'rgba(12,16,26,.78)',
                    border: ring === 'inner' ? '1px solid rgba(255,255,255,.14)' : '1px solid rgba(255,255,255,.1)',
                    fontSize: ring === 'inner' ? 11 : 11,
                    fontWeight: ring === 'inner' ? 560 : 500,
                    lineHeight: 1,
                    color: ring === 'inner' ? 'rgba(255,255,255,.95)' : 'rgba(255,255,255,.82)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >{a.label}</div>
              </div>
            );
          })}
          <style>{`
            .orbit-stage{
              position:relative;
              width:100%;
              max-width:min(940px,100%);
              height:clamp(640px,84vw,780px);
              margin:0 auto;
              margin-bottom:clamp(12px,2vw,28px);
              padding:0 8px;
            }
            .orbit-stage-core{
              position:absolute;inset:0;display:grid;place-items:center;
              pointer-events:none;
            }
            .orbit-stage .orbit-node{
              position:absolute;inset:0;pointer-events:none;
            }
            .orbit-stage .orbit-node-hit{
              pointer-events:auto;
              z-index:2;
            }
            .orbit-stage .orbit-node-hit:focus{
              outline:none;
            }
            .orbit-stage .orbit-node-hit:focus-visible .orbit-node-badge{
              outline:2px solid var(--blue-hover);
              outline-offset:3px;
            }
            .orbit-stage .orbit-node-caption{
              pointer-events:none;
              z-index:8;
              white-space:nowrap;
            }
            .orbit-stage .orbit-node:hover,
            .orbit-stage .orbit-node:focus-within{
              z-index:12;
            }
            .orbit-stage .orbit-node:hover .orbit-node-badge,
            .orbit-stage .orbit-node:focus-within .orbit-node-badge{
              transform:scale(1.06);
            }
            .orbit-stage .orbit-node--inner:hover .orbit-node-badge,
            .orbit-stage .orbit-node--inner:focus-within .orbit-node-badge{
              box-shadow:0 14px 32px -6px rgba(25,80,198,.65);
              border-color:rgba(120,160,240,.95);
            }
            .orbit-ring-legend{
              position:absolute;
              left:50%;
              top:50%;
              font-family:var(--mono);
              font-size:10px;
              letter-spacing:.14em;
              text-transform:uppercase;
              color:rgba(255,255,255,.42);
              white-space:nowrap;
              pointer-events:none;
              z-index:1;
            }
            .orbit-ring-legend--inner{
              transform:translate(calc(-50% - 208px), -50%);
              color:rgba(74,126,224,.75);
            }
            .orbit-ring-legend--outer{
              transform:translate(calc(-50% + 322px), -50%);
            }
            @media (max-width:640px){
              .orbit-stage{
                height:clamp(580px,126vw,680px);
                margin-bottom:clamp(8px,3vw,20px);
              }
              .orbit-ring-legend--inner{
                transform:translate(calc(-50% - 168px), -50%);
              }
              .orbit-ring-legend--outer{
                transform:translate(calc(-50% + 262px), -50%);
              }
            }
          `}</style>
        </div>

        <div className="reveal d2 platform-cta" style={{textAlign:'center',marginTop:0}}>
          <motion.a
            href="#pricing"
            className="btn btn-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          >
            View plans &amp; ROI
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

/* Testimonial - GoGetta-style big quote */
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
        Partner firms
      </motion.div>
      <motion.blockquote
        className="reveal d1 display"
        style={{fontSize:'clamp(28px,3.8vw,52px)',letterSpacing:'-0.02em',marginBottom:40,color:'var(--ink)'}}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <em style={{fontStyle:'italic',color:'var(--blue)'}}>" </em>We didn&apos;t buy another license - we bought back partner and associate hours. Year one felt like we added capacity without adding payroll.<em style={{fontStyle:'italic',color:'var(--blue)'}}>"</em>
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

/* Case studies - GoGetta-style card grid */
export const CaseStudies = () => {
  const cases = [
    {tag:'YEAR ONE ROI',h:'3× average return',b:'Immigration firms that partner with GlobalCodio typically see a 3× return in year one through reduced operational costs and significantly increased case volume.',firm:'Benchmarked partner cohort'},
    {tag:'OPERATING LEVERAGE',h:'$150K average savings',b:'Typical annual cost savings when firms consolidate disjointed software spend, IT firefighting, and manual document work onto one managed stack.',firm:'Finance & ops review'},
    {tag:'THROUGHPUT',h:'+20% more cases',b:'More matters moved with the same headcount after automating intake, extraction, and form prep - attorneys stay on strategy, not assembly.',firm:'Capacity planning'},
  ];
  return (
    <section className="sec sec-surface" id="cases">
      <div className="container">
        <div className="reveal" style={{display:'flex',justifyContent:'space-between',alignItems:'end',marginBottom:56,flexWrap:'wrap',gap:24}}>
          <div style={{maxWidth:'1000px'}}>
            <div className="eyebrow" style={{color:'var(--blue)',marginBottom:20}}>Year one outcomes</div>
            <h2 className="display" style={{fontSize:'clamp(40px,5.5vw,80px)',letterSpacing:'-0.025em'}}>
              <span style={{display:'block',width:'1000px'}}>Numbers your COO</span>
              <em style={{display:'block',fontStyle:'italic',color:'var(--blue)',width:'1000px'}}>and managing partner both respect.</em>
            </h2>
          </div>
          <a href="#pricing" className="btn btn-outline">Compare tiers</a>
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
                <a href="#pricing" style={{fontSize:13,color:'var(--blue)',fontWeight:600}}>See tiers &amp; proof →</a>
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
        {[['3×','average return in year one'],['$150K','average annual cost savings'],['+20%','more cases at same headcount'],['70%','reduction in document processing']].map(([n,l],i)=>(
          <div key={i} style={{padding:'48px 28px',borderRight:i<3?'1px solid var(--line)':'none'}}>
            <div className="display" style={{fontSize:'clamp(48px,6vw,80px)',color:'var(--blue)',letterSpacing:'-0.03em',marginBottom:8}}>{n}</div>
            <div style={{fontSize:14,color:'var(--ink-3)'}}>{l}</div>
          </div>
        ))}
      </div>
      <div className="reveal d1" style={{marginTop:28,display:'flex',gap:28,flexWrap:'wrap',justifyContent:'center'}}>
        {['Immigration-exclusive','Outcome-based pricing','FDE on-site','24/7 managed ops','Stack integrations','Attorney review'].map(t=>(
          <span key={t} className="mono" style={{fontSize:11.5,letterSpacing:'.12em',color:'var(--muted)',textTransform:'uppercase'}}>{t}</span>
        ))}
      </div>
      <style>{`@media(max-width:900px){.m-grid{grid-template-columns:1fr 1fr !important;}.m-grid>div:nth-child(-n+2){border-bottom:1px solid var(--line);}.m-grid>div:nth-child(2){border-right:none;}}`}</style>
    </div>
  </section>
);

/* Service tiers first, then ROI vs. alternative. Nav #pricing lands on plans. */
export const PricingTiers = () => (
  <>
    <section id="pricing" className="sec">
      <div className="container">
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            marginBottom: 56,
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div style={{ maxWidth: '1000px' }}>
            <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 20 }}>
              Service tiers
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(40px,5.5vw,80px)', letterSpacing: '-0.025em' }}>
              <span style={{ display: 'block', width: '1000px' }}>Pick the depth</span>
              <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)', width: '1000px' }}>
                of partnership you need.
              </em>
            </h2>
          </div>
          <a href="mailto:hello@globalcodio.com" className="btn btn-outline">
            Email us
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="pricing-grid">
          {[
            {
              tag: 'STARTER',
              h: '$799/mo',
              b: 'AI Case Management plus remote onboarding. Ideal for solo and small firms that want automation without a heavy lift.',
              firm: '',
            },
            {
              tag: 'PROFESSIONAL ★',
              h: '$2,500/mo',
              b: 'Everything in Starter plus a Forward Deployed Engineer on-site to map workflows and configure AI around how your firm operates.',
              firm: '',
            },
            {
              tag: 'ENTERPRISE',
              h: '$10,000/mo',
              b: 'Full AI plus FDE plus Managed Technology Operations - a fully embedded partner running your immigration technology stack.',
              firm: '',
            },
          ].map((c, i) => (
            <article
              key={i}
              className="card"
              style={{
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                transition: 'all .3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--blue)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.transform = '';
              }}
            >
              <div className="mono" style={{ fontSize: 11, letterSpacing: '.1em', color: 'var(--blue)' }}>
                {c.tag}
              </div>
              <h3 className="display" style={{ fontSize: 34, letterSpacing: '-0.02em' }}>
                {c.h}
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-3)', lineHeight: 1.6, flex: 1 }}>{c.b}</p>
              {c.firm ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: 16,
                    borderTop: '1px solid var(--line)',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>{c.firm}</span>
                </div>
              ) : (
                <div style={{ paddingTop: 8 }} />
              )}
            </article>
          ))}
        </div>
        <style>{`@media(max-width:900px){.pricing-grid{grid-template-columns:1fr !important;}}`}</style>
      </div>
    </section>

    <section className="sec sec-surface" aria-labelledby="pricing-roi-heading">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow" style={{ color: 'var(--blue)', marginBottom: 20 }}>
            Vs. the alternative
          </div>
          <div
            className="pricing-roi-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 180,
              alignItems: 'start',
            }}
          >
            <h2
              id="pricing-roi-heading"
              className="display"
              style={{ fontSize: 'clamp(40px,5.5vw,80px)', letterSpacing: '-0.025em', marginBottom: 0 }}
            >
              <span style={{ display: 'block' }}>Enterprise -</span>
              <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}>
                still cheaper than patching it yourself.
              </em>
            </h2>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: 8,
                justifySelf: 'start',
                alignSelf: 'start',
                maxWidth: '62ch',
                textAlign: 'left',
                fontFamily: 'var(--sans)',
                fontSize: 24,
                lineHeight: 1.65,
                fontWeight: 450,
              }}
            >
              {[
                { label: 'Paralegal salary $55,000+/yr', tone: 'muted' },
                { label: 'IT consultant + software $30,000+/yr', tone: 'muted' },
                { label: 'Failed implementation $10,000–$50,000', tone: 'muted' },
                { label: 'GlobalCodio Enterprise $120,000/yr', tone: 'ink' },
                { label: 'net ROI: $248,000+ in year one.', tone: 'blue' },
              ].map(({ label, tone }, i) => (
                <li
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 10,
                    color: 'var(--ink-3)',
                  }}
                >
                  <span className="mono" style={{ fontSize: 11.5, letterSpacing: '.08em', color: 'var(--blue)', flexShrink: 0 }}>
                    /{String(i + 1).padStart(2, '0')}
                  </span>
                  {tone === 'muted' ? (
                    label
                  ) : (
                    <strong style={{ fontWeight: 600, color: tone === 'blue' ? 'var(--blue)' : 'var(--ink)' }}>{label}</strong>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <style>{`@media(max-width:900px){.pricing-roi-grid{grid-template-columns:1fr !important;gap:32px !important;}}`}</style>
        </div>
      </div>
    </section>
  </>
);

/* CTA */
export const CTA = () => (
  <section id="cta" className="sec" style={{paddingBottom:140}}>
    <div className="container-narrow" style={{textAlign:'center',position:'relative'}}>
      <div aria-hidden="true" style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:900,height:400,background:'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(25,80,198,.1), transparent 70%)',filter:'blur(40px)',pointerEvents:'none'}}/>
      <h2
        className="reveal d1 display"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '100%',
          fontSize: 'clamp(48px, 7vw, 96px)',
          letterSpacing: '-0.03em',
          marginBottom: 32,
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <span style={{ display: 'block', maxWidth: '100%' }}>Walk through the full partnership stack</span>
        <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)', whiteSpace: 'nowrap' }}>on live cases.</em>
      </h2>
      <p className="reveal d1" style={{fontSize:18,color:'var(--ink-3)',maxWidth:'48ch',margin:'0 auto 36px',lineHeight:1.55,position:'relative'}}>
        We&apos;ll walk your team through AI case management, Forward Deployed Engineers, and Managed Technology Operations on live examples - no generic vendor deck.
      </p>
      <div className="reveal d2" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',position:'relative'}}>
        <a href="mailto:hello@globalcodio.com" className="btn btn-dark">Book a demo <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        <a href="tel:+18004252346" className="btn btn-surface">Call +1 (800) GBL-CDIO</a>
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
          <p style={{fontSize:13.5,color:'var(--muted)',lineHeight:1.6}}>
            Immigration Technology Partner - AI-powered case management, Forward Deployed Engineers, and fully Managed Technology Operations, built exclusively for immigration law firms.
          </p>
          <div style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.8 }}>
            <a href="https://globalcodio.com" style={{ color: 'var(--ink-3)', display: 'block' }}>
              globalcodio.com
            </a>
            <a href="mailto:hello@globalcodio.com" style={{ color: 'var(--ink-3)', display: 'block' }}>
              hello@globalcodio.com
            </a>
            <a href="tel:+18004252346" style={{ color: 'var(--ink-3)', display: 'block' }}>
              +1 (800) GBL-CDIO
            </a>
          </div>
        </div>
        {[['Solutions',['AI case management','Forward deployed engineers','Managed technology operations']],['For firms',['Solo & small','Mid-size practices','Enterprise immigration']],['Company',['About','Customers','Careers','Contact']],['Legal',['Privacy','Terms','Security']]].map(([h,items])=>(
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

