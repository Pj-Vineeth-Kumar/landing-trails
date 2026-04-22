import React from 'react';
import { motion } from 'framer-motion';

/* Logo strip — GoGetta-style scrolling wall of firms */
export const LogoStrip = () => {
  const logos = ['Kirkland & Ellis','Latham & Watkins','Skadden','Paul Weiss','Cravath','Wachtell','Sullivan & Cromwell','Ropes & Gray','Cleary Gottlieb','Davis Polk','Jones Day','Baker McKenzie'];
  return (
    <section className="logo-strip-section" style={{padding:'56px 0 60px',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
      <div className="container">
        <div className="reveal" style={{textAlign:'center',marginBottom:28}}>
          <span className="eyebrow" style={{color:'var(--muted)'}}>Trusted by immigration teams at</span>
        </div>
        <div className="reveal d1" style={{overflow:'hidden',position:'relative'}}>
          <div style={{position:'absolute',left:0,top:0,bottom:0,width:120,background:'linear-gradient(to right, var(--surface-tint), transparent)',zIndex:2}}/>
          <div style={{position:'absolute',right:0,top:0,bottom:0,width:120,background:'linear-gradient(to left, var(--surface-tint), transparent)',zIndex:2}}/>
          <div className="logo-strip-track" style={{display:'flex',gap:64,animation:'marquee 48s linear infinite',whiteSpace:'nowrap'}}>
            {[...logos,...logos].map((l,i)=>(
              <span key={i} style={{fontSize:22,color:'var(--ink-3)',fontWeight:400,letterSpacing:'-0.02em',opacity:.82}}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Value Prop band — GoGetta structure: big left-aligned statement, supporting columns */
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
          The platform
        </motion.div>
        <motion.h2
          className="display"
          style={{fontSize:'clamp(44px,6.5vw,96px)',letterSpacing:'-0.025em'}}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <span style={{display:'block',width:'1000px'}}>Built for the 60% of work</span>
          <em style={{display:'block',fontStyle:'italic',color:'var(--blue)',width:'1000px'}}>that shouldn't need a lawyer.</em>
        </motion.h2>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:40}} className="vp-grid">
        {[
          {n:'01',h:'Intake becomes instant',b:'Agents read incoming emails, WhatsApp messages, and forwarded documents. Cases open themselves, questionnaires pre-fill, and attorneys see structured data the first time they look.'},
          {n:'02',h:'Drafts arrive pre-formed',b:'Forms populate from the questionnaire. Support letters draft in your firm\'s voice. RFE responses come with the cited statute already attached. You review; you don\'t assemble.'},
          {n:'03',h:'Compliance runs constantly',b:'400+ rules check every case continuously. When USCIS shifts at 4pm, every affected case carries an impact memo by morning — with a plain-English explanation for the employee.'},
        ].map((v,i)=>(
          <div key={i} className={`reveal d${i+1}`}>
            <div className="mono" style={{fontSize:12,color:'var(--blue)',marginBottom:20,letterSpacing:'.08em'}}>/{v.n}</div>
            <h3 style={{fontSize:24,fontWeight:600,letterSpacing:'-0.015em',marginBottom:14,lineHeight:1.2}}>{v.h}</h3>
            <p style={{fontSize:15.5,color:'var(--ink-3)',lineHeight:1.55}}>{v.b}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:900px){.vp-grid{grid-template-columns:1fr !important;gap:48px !important;}}`}</style>
    </div>
  </section>
);

/* How it works — GoGetta-style numbered accordion / progressive reveal */
export const HowItWorks = () => {
  const [open, setOpen] = React.useState(0);
  const toggle = (i) => setOpen((prev) => (prev === i ? null : i));
  const steps = [
    {
      t:'01',
      h:'A case request arrives.',
      b:'Corporate HR forwards an offer letter, or an applicant emails your intake address. The Intake Agent parses the thread, classifies attachments, and maps them onto your questionnaire — no extra handoff, no attorney triage.',
      meta:['< 1 day turnaround','21 document types','Email + WhatsApp + upload'],
    },
    {
      t:'02',
      h:'Documents extract themselves.',
      b:'Document Intelligence reads passports, degrees, pay stubs, and I-94s. Each field comes with a confidence score and a source-box overlay. Attorneys accept in one click; they don\'t rekey.',
      meta:['98.2% extraction accuracy','Field-level lineage','One-click accept'],
    },
    {
      t:'03',
      h:'Compliance checks run continuously.',
      b:'400+ country- and visa-specific rules evaluate in parallel. Cases get a 0.0–1.0 risk score and route into the right playbook branch automatically. Policy Intelligence catches any rule drift overnight.',
      meta:['< 10% RFE rate','7 jurisdictions','< 60s rule propagation'],
    },
    {
      t:'04',
      h:'Drafts arrive in your firm\'s voice.',
      b:'Form Registry auto-populates I-129, I-140, PERM, LCA, and 40+ government forms. The Evidentiary Drafter writes support letters, cover letters, and RFE responses — tone-matched to your past filings, with track changes.',
      meta:['> 95% field acceptance','4× faster first drafts','Per-paragraph confidence'],
    },
  ];

  return (
    <section id="how" className="sec sec-surface">
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:80,alignItems:'start'}} className="how-grid">
          <div className="reveal" style={{position:'sticky',top:120}}>
            <div className="eyebrow" style={{color:'var(--blue)',marginBottom:20}}>How it works</div>
            <h2 className="display" style={{fontSize:'clamp(40px,5.5vw,80px)',letterSpacing:'-0.025em',marginBottom:28}}>
              <span style={{display:'block'}}>Four agents,</span>
              <em style={{display:'block',fontStyle:'italic',color:'var(--blue)'}}>one flow.</em>
            </h2>
            <p style={{fontSize:16,color:'var(--ink-3)',lineHeight:1.6,maxWidth:'38ch'}}>
              A case moves from inbox to filing without the usual twenty handoffs. Every step is auditable, reversible, and tied back to its source.
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

