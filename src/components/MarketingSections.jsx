import React from 'react';
import { motion } from 'framer-motion';

/* Logo strip - GoGetta-style scrolling wall of firms */
export const LogoStrip = () => {
  const logos = [
    'Boutique & solo immigration',
    'Regional full-service immigration',
    'National immigration practices',
    'Corporate mobility partners',
    'Family & removal defense firms',
    'EB-5 & investor practices',
    'Global immigration boutiques',
    'Cap-season H-1B teams',
    'Compliance-heavy PERM shops',
    'High-volume consular firms',
    'Enterprise immigration groups',
    'HR–legal hybrid teams',
  ];
  return (
    <section className="logo-strip-section" style={{ padding: '56px 0 60px', background: '#fff' }}>
      <div className="container">
        <div className="reveal" style={{textAlign:'center',marginBottom:28}}>
          <span className="eyebrow" style={{color:'var(--muted)'}}>Immigration practices from solo to enterprise</span>
        </div>
        <div className="reveal d1" style={{overflow:'hidden',position:'relative'}}>
          <div style={{position:'absolute',left:0,top:0,bottom:0,width:120,background:'linear-gradient(to right, #fff, transparent)',zIndex:2}}/>
          <div style={{position:'absolute',right:0,top:0,bottom:0,width:120,background:'linear-gradient(to left, #fff, transparent)',zIndex:2}}/>
          <div className="logo-strip-track" style={{display:'flex',gap:64,animation:'marquee 48s linear infinite',whiteSpace:'nowrap'}}>
            {[...logos,...logos].map((l,i)=>(
              <span key={i} style={{fontSize:22,color:'var(--ink-3)',fontWeight:560,letterSpacing:'-0.02em',opacity:.78}}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Value Prop band - promise headline + three pillar columns */
export const ValueProp = () => (
  <section className="sec">
    <div className="container">
      <div className="reveal" style={{marginBottom:80,maxWidth:'1000px'}}>
        <motion.div
          className="eyebrow"
          style={{color:'var(--blue)',marginBottom:20}}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        >
          Our promise
        </motion.div>
        <motion.h2
          className="display"
          style={{fontSize:'clamp(44px,6.5vw,96px)',letterSpacing:'-0.025em'}}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <span style={{display:'block',width:'1000px'}}>We don&apos;t charge for software -</span>
          <em style={{display:'block',fontStyle:'italic',color:'var(--blue)',width:'1000px'}}>we charge for outcomes.</em>
        </motion.h2>
      </div>

      <div className="reveal" style={{marginBottom:32}}>
        <div className="eyebrow" style={{color:'var(--blue)',marginBottom:0}}>Three pillars</div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:40}} className="vp-grid">
        {[
          {n:'01',h:'AI-Powered Case Management',b:'Intelligent automation for intake, document extraction, form preparation, and deadline tracking - built for immigration workflows.'},
          {n:'02',h:'Forward Deployed Engineers (FDE)',b:'Our engineers come to your firm, map your workflows, and configure the AI around how you work - not the other way around.'},
          {n:'03',h:'Managed Technology Operations',b:'We run your entire technology operation ongoing - updates, integrations, optimization, and 24/7 support. Fully managed.'},
        ].map((v,i)=>(
          <div key={i} className={`reveal d${i+1}`}>
            <div className="mono" style={{fontSize:12,color:'var(--blue)',marginBottom:20,letterSpacing:'.08em'}}>/{v.n}</div>
            <h3 style={{fontSize:24,fontWeight:650,letterSpacing:'-0.015em',marginBottom:14,lineHeight:1.2}}>{v.h}</h3>
            <p style={{fontSize:15.5,color:'var(--ink-3)',lineHeight:1.55}}>{v.b}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:900px){.vp-grid{grid-template-columns:1fr !important;gap:48px !important;}}`}</style>
    </div>
  </section>
);

/* How it works - GoGetta-style numbered accordion / progressive reveal */
export const HowItWorks = () => {
  const [open, setOpen] = React.useState(0);
  const toggle = (i) => setOpen((prev) => (prev === i ? null : i));
  const steps = [
    {
      t:'01',
      h:'We already have case management software.',
      b:'We integrate with your existing tools and layer AI, Forward Deployed Engineers, and Managed Technology Operations on top of what you have - so you keep your systems and still get the outcomes.',
      meta:['Integrations','No rip-and-replace','AI + FDE + MTO layer'],
    },
    {
      t:'02',
      h:'We don\'t have time to implement new software.',
      b:'That\'s exactly why we send an engineer to you. Your team keeps working while we handle discovery, configuration, training, and go-live - the implementation burden sits with us, not your attorneys.',
      meta:['On-site FDE','Parallel to billable work','We own the rollout'],
    },
    {
      t:'03',
      h:'AI makes mistakes on legal documents.',
      b:'Every extraction and draft is attorney-reviewable. AI handles the grunt work - intake structure, field population, and first-pass assembly. You stay in control of what leaves the firm.',
      meta:['Review-first workflow','Lineage to source','Human sign-off'],
    },
    {
      t:'04',
      h:'What you get in year one.',
      b:'Immigration firms that partner with GlobalCodio typically see a 3× return in year one through reduced operational costs and significantly increased case volume - without adding headcount for IT or implementation.',
      meta:['3× average year-one return','$150K avg. cost savings','+20% cases, same team'],
    },
  ];

  return (
    <section id="how" className="sec sec-surface">
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:80,alignItems:'start'}} className="how-grid">
          <div className="reveal" style={{position:'sticky',top:120}}>
            <div className="eyebrow" style={{color:'var(--blue)',marginBottom:20}}>Common questions</div>
            <h2 className="display" style={{fontSize:'clamp(40px,5.5vw,80px)',letterSpacing:'-0.025em',marginBottom:28}}>
              <span style={{display:'block'}}>Straight answers,</span>
              <em style={{display:'block',fontStyle:'italic',color:'var(--blue)'}}>before you commit.</em>
            </h2>
            <p style={{fontSize:16,color:'var(--ink-3)',lineHeight:1.6,maxWidth:'38ch'}}>
              The same objections come up on every sales call - here is how we address them in practice, without changing how your firm earns fees day to day.
            </p>
          </div>

          <div>
            {steps.map((s,i)=>(
              <div key={i} className="reveal" style={{
                borderTop: 'none',
                borderBottom: i < steps.length - 1 ? '1px solid var(--line)' : 'none',
                padding:'22px 0',transition:'border-color .3s',
              }}>
                <button
                  type="button"
                  aria-expanded={open === i}
                  onClick={() => toggle(i)}
                  style={{display:'flex',width:'100%',alignItems:'baseline',gap:28,textAlign:'left',padding:0,background:'none',border:'none',cursor:'pointer',font:'inherit',color:'inherit'}}
                >
                  <span className="mono" style={{
                    fontSize:14,
                    color:open===i?'var(--blue)':'var(--muted)',
                    letterSpacing:'.06em',
                    transition:'color 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}>/{s.t}</span>
                  <span className="display" style={{
                    flex:1,
                    fontSize:'clamp(28px,3vw,44px)',
                    letterSpacing:'-0.02em',
                    color: open===i?'var(--ink)':'var(--muted)',
                    transition:'color 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}>{s.h}</span>
                  <motion.span
                    aria-hidden
                    style={{
                      width:32,height:32,borderRadius:'50%',border:'1px solid var(--line-2)',
                      display:'grid',placeItems:'center',flexShrink:0,
                    }}
                    animate={{
                      backgroundColor: open === i ? 'var(--ink)' : '#ffffff',
                      color: open === i ? '#ffffff' : 'var(--ink)',
                    }}
                    transition={{
                      backgroundColor: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                      color: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                    }}
                  >
                    <motion.svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      style={{ display: 'block' }}
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 26, mass: 0.75 }}
                    >
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5"/>
                    </motion.svg>
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0 }}
                  transition={{
                    duration: 0.58,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <motion.div
                    style={{ padding:'24px 0 4px 42px',maxWidth:'62ch' }}
                    initial={false}
                    animate={{
                      opacity: open === i ? 1 : 0,
                      y: open === i ? 0 : -6,
                    }}
                    transition={{
                      duration: open === i ? 0.42 : 0.22,
                      ease: [0.22, 1, 0.36, 1],
                      delay: open === i ? 0.06 : 0,
                    }}
                  >
                    <p style={{fontSize:16,color:'var(--ink-3)',lineHeight:1.65,marginBottom:18}}>{s.b}</p>
                    <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
                      {s.meta.map(m=>(
                        <span key={m} className="mono" style={{fontSize:11.5,padding:'5px 10px',background:'#fff',border:'1px solid var(--line)',borderRadius:56,color:'var(--ink-3)',letterSpacing:'.02em'}}>{m}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.how-grid{grid-template-columns:1fr !important;gap:56px !important;}.how-grid > div:first-child{position:static !important;}}`}</style>
      </div>
    </section>
  );
};

