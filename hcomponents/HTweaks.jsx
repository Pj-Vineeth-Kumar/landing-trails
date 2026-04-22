/* Tweaks panel */
const HTweaks = ({tweaks, onChange}) => {
  const Seg = ({k, options}) => (
    <div className="seg">
      {options.map(([val, label]) => (
        <button key={val} className={tweaks[k]===val?'on':''} onClick={()=>onChange(k, val)}>{label}</button>
      ))}
    </div>
  );

  return (
    <div className="tweaks-panel">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
        <div className="serif-italic" style={{fontSize:22,color:'var(--ink)'}}>Tweaks</div>
        <span className="mono" style={{fontSize:10,color:'var(--muted)',letterSpacing:'.1em'}}>LIVE</span>
      </div>
      <div className="row">
        <h4>Headline</h4>
        <Seg k="headline" options={[['domain','Domain'],['quiet','Quiet'],['work','Work']]}/>
      </div>
      <div className="row">
        <h4>Theme</h4>
        <Seg k="theme" options={[['cream','Cream'],['paper','Paper'],['dusk','Dusk']]}/>
      </div>
      <div className="row" style={{marginBottom:0}}>
        <h4>Display font</h4>
        <Seg k="font" options={[['fraunces','Fraunces'],['tiempos','Tiempos'],['editorial','Editorial']]}/>
      </div>
    </div>
  );
};

window.HTweaks = HTweaks;
