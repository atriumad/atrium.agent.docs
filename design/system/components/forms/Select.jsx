import React from "react";

/** ATRIUM AD Select — native select styled to match Input. */
export function Select({label,hint,options=[],tone="light",style={},...rest}){
  const [focus,setFocus]=React.useState(false);
  const onDark=tone==="dark";
  return (
    <label style={{display:"flex",flexDirection:"column",gap:"var(--space-2)",fontFamily:"var(--font-sans)",...style}}>
      {label?<span style={{fontSize:"var(--text-2xs)",fontWeight:500,letterSpacing:"var(--tracking-wider)",textTransform:"uppercase",color:onDark?"var(--cream-400)":"var(--text-muted)"}}>{label}</span>:null}
      <select
        onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{
          appearance:"none",fontFamily:"var(--font-sans)",fontSize:"var(--text-base)",
          padding:"11px 13px",borderRadius:"var(--radius-sm)",
          background:(onDark?"transparent":"var(--cream-100)")+" no-repeat right 12px center",
          color:onDark?"var(--cream-200)":"var(--text-body)",
          border:"1px solid "+(focus?"var(--charcoal-800)":onDark?"var(--charcoal-500)":"var(--border-light)"),
          outline:focus?"2px solid var(--focus-ring)":"none",outlineOffset:"1px",cursor:"pointer",
        }}
        {...rest}
      >
        {options.map(o=>{const v=typeof o==="string"?o:o.value;const l=typeof o==="string"?o:o.label;
          return <option key={v} value={v}>{l}</option>;})}
      </select>
      {hint?<span style={{fontSize:"var(--text-xs)",color:onDark?"var(--charcoal-400)":"var(--text-muted)"}}>{hint}</span>:null}
    </label>
  );
}
