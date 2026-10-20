import React from "react";

/** ATRIUM AD Eyebrow — the wide-caps label above a headline, with an optional leading rule. */
export function Eyebrow({children,rule=true,tone="muted",style={},...rest}){
  const colors={muted:"var(--text-muted)",ink:"var(--charcoal-800)",onDark:"var(--cream-400)",lime:"var(--lime-600)"};
  return (
    <span style={{
      display:"inline-flex",alignItems:"center",gap:"var(--space-3)",
      fontFamily:"var(--font-sans)",fontSize:"var(--text-2xs)",fontWeight:500,
      letterSpacing:"var(--tracking-wider)",textTransform:"uppercase",
      color:colors[tone],...style,
    }} {...rest}>
      {rule?<span style={{width:"28px",height:"1px",background:"currentColor",opacity:0.5}}/>:null}
      {children}
    </span>
  );
}
