/* Tweaks panel — bottom-right control strip */

const Tweaks = ({tweaks, onChange}) => {
  const Seg = ({k, options}) => (
    <div className="seg">
      {options.map(([val, label]) => (
        <button key={val} className={tweaks[k]===val?'on':''} onClick={()=>onChange(k, val)}>{label}</button>
      ))}
    </div>
  );

  return (
    <div className="tweaks-panel">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
        <div className="serif" style={{fontSize:20,fontStyle:'italic',color:'var(--ink)'}}>Tweaks</div>
        <span className="mono" style={{fontSize:10,color:'var(--muted)'}}>LIVE</span>
      </div>

      <div className="row">
        <h4>Headline</h4>
        <Seg k="headline" options={[['partner','Partner'],['leverage','Leverage'],['craft','Craft']]}/>
      </div>

      <div className="row">
        <h4>Background</h4>
        <Seg k="bg" options={[['aurora','Aurora'],['dune','Dune'],['glacier','Glacier']]}/>
      </div>

      <div className="row">
        <h4>Card depth</h4>
        <Seg k="cardStyle" options={[['flat','Flat'],['elevated','Elevated'],['glass','Glass']]}/>
      </div>

      <div className="row" style={{marginBottom:0}}>
        <h4>Motion</h4>
        <Seg k="motion" options={[['still','Still'],['calm','Calm'],['lively','Lively']]}/>
      </div>
    </div>
  );
};

window.Tweaks = Tweaks;
