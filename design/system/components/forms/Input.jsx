import React from "react";

/** ATRIUM AD Input — squared field with a caps label and clay focus ring. */
export function Input({label,hint,error,tone="light",style={},...rest}){
  const [focus,setFocus]=React.useState(false);
  const onDark=tone==="dark";
  return (
    <label style={{display:"flex",flexDirection:"column",gap:"var(--space-2)",fontFamily:"var(--font-sans)",...style}}>
      {label?<span style={{fontSize:"var(--text-2xs)",fontWeight:500,letterSpacing:"var(--tracking-wider)",textTransform:"uppercase",color:onDark?"var(--cream-400)":"var(--text-muted)"}}>{label}</span>:null}
      <input
        onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{
          fontFamily:"var(--font-sans)",fontSize:"var(--text-base)",lineHeight:1.4,
          padding:"11px 13px",borderRadius:"var(--radius-sm)",
          background:onDark?"transparent":"var(--cream-100)",
          color:onDark?"var(--cream-200)":"var(--text-body)",
          border:"1px solid "+(error?"var(--clay-500)":focus?"var(--charcoal-800)":onDark?"var(--charcoal-500)":"var(--border-light)"),
          outline:focus?"2px solid var(--focus-ring)":"none",outlineOffset:"1px",
          transition:"border-color var(--dur-base) var(--ease-out)",
        }}
        {...rest}
      />
      {error?<span style={{fontSize:"var(--text-xs)",color:"var(--clay-600)"}}>{error}</span>
        :hint?<span style={{fontSize:"var(--text-xs)",color:onDark?"var(--charcoal-400)":"var(--text-muted)"}}>{hint}</span>:null}
    </label>
  );
}
