/* Top navigation */
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'all .35s cubic-bezier(.2,.7,.2,1)',
    padding: scrolled ? '10px 0' : '20px 0',
  };
  const innerStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: scrolled ? '10px 18px 10px 22px' : '0',
    background: scrolled ? 'rgba(246,245,239,0.78)' : 'transparent',
    backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
    border: scrolled ? '1px solid var(--line)' : '1px solid transparent',
    borderRadius: scrolled ? '999px' : '0',
    maxWidth: scrolled ? '1080px' : '1320px',
    margin: '0 auto',
    transition: 'all .35s cubic-bezier(.2,.7,.2,1)',
  };

  const links = ['Platform', 'Agents', 'Workflows', 'Personas', 'Pricing'];

  return (
    <nav style={navStyle}>
      <div className="container" style={{padding:0}}>
        <div style={innerStyle}>
          <a href="#" style={{display:'flex',alignItems:'center',gap:10,fontWeight:600,fontSize:17,letterSpacing:'-0.02em'}}>
            <LogoMark/>
            <span>GlobalCodio</span>
          </a>
          <div style={{display:'flex',gap:4,alignItems:'center'}} className="nav-links">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{padding:'8px 14px',fontSize:13.5,color:'var(--ink-2)',borderRadius:999,transition:'all .2s'}}
                 onMouseEnter={e=>{e.currentTarget.style.background='rgba(11,19,36,0.06)';e.currentTarget.style.color='var(--ink)';}}
                 onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--ink-2)';}}>{l}</a>
            ))}
          </div>
          <div style={{display:'flex',gap:10,alignItems:'center'}}>
            <a href="#" style={{fontSize:13.5,color:'var(--ink-2)',padding:'8px 12px'}}>Sign in</a>
            <a href="#cta" className="btn btn-primary" style={{padding:'10px 18px',fontSize:13}}>
              Book a demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const LogoMark = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M16 1 C 8 10, 8 22, 16 31" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M16 1 C 24 10, 24 22, 16 31" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M1 16 H 31" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="16" cy="16" r="2.2" fill="#1950C6"/>
  </svg>
);

window.Nav = Nav;
window.LogoMark = LogoMark;
