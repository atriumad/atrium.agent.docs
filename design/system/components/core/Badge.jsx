import React from "react";

/** ATRIUM AD Badge — squared micro-label for status and counts. */
export function Badge({children,variant="ink",style={},...rest}){
  const variants={
    ink:{background:"var(--charcoal-800)",color:"var(--cream-200)"},
    lime:{background:"var(--lime-500)",color:"var(--charcoal-900)"},
    clay:{background:"var(--clay-500)",color:"var(--cream-100)"},
    quiet:{background:"var(--cream-300)",color:"var(--charcoal-500)"},
  };
  return (
    <span style={{
      display:"inline-flex",alignItems:"center",padding:"3px 7px",
      fontFamily:"var(--font-sans)",fontSize:"var(--text-2xs)",fontWeight:500,
      letterSpacing:"var(--tracking-wide)",textTransform:"uppercase",lineHeight:1.2,
      borderRadius:"var(--radius-xs)",...variants[variant],...style,
    }} {...rest}>{children}</span>
  );
}
