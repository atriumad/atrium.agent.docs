import React from "react";

/** ATRIUM AD Checkbox — squared box, lime fill when checked. */
export function Checkbox({label,checked,defaultChecked,onChange,disabled=false,style={},...rest}){
  const controlled=checked!==undefined;
  const [inner,setInner]=React.useState(!!defaultChecked);
  const on=controlled?checked:inner;
  return (
    <label style={{display:"inline-flex",alignItems:"center",gap:"var(--space-3)",fontFamily:"var(--font-sans)",fontSize:"var(--text-sm)",color:disabled?"var(--charcoal-400)":"var(--text-body)",cursor:disabled?"not-allowed":"pointer",...style}}>
      <span
        onClick={()=>{if(disabled)return;if(!controlled)setInner(!on);onChange&&onChange(!on);}}
        style={{
          width:"18px",height:"18px",flex:"0 0 18px",display:"inline-flex",alignItems:"center",justifyContent:"center",
          borderRadius:"var(--radius-xs)",
          border:"1px solid "+(on?"var(--charcoal-800)":"var(--border-light)"),
          background:on?"var(--lime-500)":"var(--cream-100)",
          transition:"background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        }}
        {...rest}
      >
        {on?<span style={{width:"9px",height:"5px",borderLeft:"2px solid var(--charcoal-900)",borderBottom:"2px solid var(--charcoal-900)",transform:"rotate(-45deg) translate(1px,-1px)"}}/>:null}
      </span>
      {label}
    </label>
  );
}
