/* Harvey-style Nav — ultra minimal, pill-shaped floating */

const HNav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position:'fixed', top:20, left:'50%', transform:'translateX(-50%)',
      zIndex:100, display:'flex', alignItems:'center', gap:36,
      padding: scrolled ? '10px 14px 10px 20px' : '14px 16px 14px 24px',
      background:'rgba(242,237,227,.82)', backdropFilter:'blur(20px) saturate(140%)',
      border:'1px solid var(--line-2)', borderRadius:999,
      transition:'all .4s cubic-bezier(.2,.7,.2,1)',
      boxShadow: scrolled ? '0 10px 40px -20px rgba(0,0,0,.2)' : 'none',
    }}>
      <a href="#" style={{display:'flex',alignItems:'center',gap:8}}>
        <HLogo/>
        <span style={{fontSize:15,fontWeight:500,letterSpacing:'-0.01em'}}>GlobalCodio</span>
      </a>
      <div style={{display:'flex',gap:28,fontSize:13.5,color:'var(--ink-2)'}} className="hnav-links">
        <a href="#platform">Platform</a>
        <a href="#agents">Agents</a>
        <a href="#uses">Use cases</a>
        <a href="#company">Company</a>
      </div>
      <a href="#cta" className="btn btn-primary" style={{padding:'9px 18px',fontSize:13}}>
        Request access
      </a>
      <style>{`@media(max-width:820px){.hnav-links{display:none !important;}}`}</style>
    </nav>
  );
};

const HLogo = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M11 1c3 3 3 17 0 20M11 1c-3 3-3 17 0 20M1 11h20" stroke="currentColor" strokeWidth="1"/>
    <circle cx="11" cy="11" r="2.5" fill="currentColor"/>
  </svg>
);

window.HNav = HNav;
window.HLogo = HLogo;
