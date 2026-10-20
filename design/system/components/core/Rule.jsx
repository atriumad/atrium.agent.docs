import React from "react";

/** ATRIUM AD Rule — the heavy section divider, optionally carrying a caps label. */
export function Rule({label=null,weight="bold",tone="ink",style={},...rest}){
  const w={hair:"1px",bold:"3px"}[weight];
  const c={ink:"var(--charcoal-800)",light:"var(--border-light)",onDark:"var(--charcoal-500)"}[tone];
  const textColor=tone==="onDark"?"var(--cream-400)":"var(--text-muted)";
  return (
    <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)",width:"100%",...style}} {...rest}>
      <span style={{flex:1,height:w,background:c}}/>
      {label?<span style={{fontFamily:"var(--font-sans)",fontSize:"var(--text-2xs)",fontWeight:500,letterSpacing:"var(--tracking-wider)",textTransform:"uppercase",color:textColor}}>{label}</span>:null}
      {label?<span style={{flex:1,height:w,background:c}}/>:null}
    </div>
  );
}
