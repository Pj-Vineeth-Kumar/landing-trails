import React from 'react';
import { motion } from 'framer-motion';

/* Nav — minimal Coinbase bar */
export const Nav = () => {
  const [scrolled,setScrolled] = React.useState(false);
  React.useEffect(()=>{
    const h = ()=>setScrolled(window.scrollY>12);
    window.addEventListener('scroll',h);
    return ()=>window.removeEventListener('scroll',h);
  },[]);
  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      style={{
      position:'fixed',top:0,left:0,right:0,zIndex:100,
      background: scrolled?'rgba(255,255,255,.82)':'rgba(255,255,255,.0)',
      backdropFilter: scrolled?'blur(14px) saturate(160%)':'none',
      borderBottom: scrolled?'1px solid var(--line)':'1px solid transparent',
      transition:'background .3s cubic-bezier(.2,.7,.2,1), backdrop-filter .3s cubic-bezier(.2,.7,.2,1), border-color .3s cubic-bezier(.2,.7,.2,1)',
    }}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 32px'}}>
        <a href="#" style={{display:'flex',alignItems:'center',gap:10}}>
          <Logo/>
          <span style={{fontSize:17,fontWeight:400,letterSpacing:'-0.01em',background:'linear-gradient(90deg, var(--ink), var(--indigo))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>GlobalCodio</span>
        </a>
        <div style={{display:'flex',gap:32,alignItems:'center'}} className="navlinks">
          <a className="navlink" href="#platform">Platform</a>
          <a className="navlink" href="#how">How it works</a>
          <a className="navlink" href="#customers">Customers</a>
          <a className="navlink" href="#cases">Case studies</a>
          <a className="navlink" href="#pricing">Pricing</a>
        </div>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <a className="navlink" href="#" style={{fontSize:14}}>Sign in</a>
          <a href="#cta" className="btn btn-dark" style={{padding:'10px 20px',fontSize:14}}>Request access</a>
        </div>
      </div>
      <style>{`@media(max-width:960px){.navlinks{display:none !important;}}`}</style>
    </motion.nav>
  );
};

export const Logo = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="12" stroke="var(--blue)" strokeWidth="1.5"/>
    <path d="M8 13h10M13 8v10" stroke="var(--blue)" strokeWidth="1.5"/>
    <circle cx="13" cy="13" r="3" fill="var(--blue)"/>
  </svg>
);

