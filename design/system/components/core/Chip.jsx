import React from "react";

/** ATRIUM AD Chip — the only pill shape in the system. Tags, filters, service labels. */
export function Chip({children,variant="outline",size="md",active=false,style={},...rest}){
  const sizes={sm:{padding:"4px 10px",fontSize:"11px"},md:{padding:"6px 14px",fontSize:"13px"}};
  const variants={
    outline:{background:"transparent",color:"var(--charcoal-800)",border:"1px solid var(--border-light)"},
    ink:{background:"var(--charcoal-800)",color:"var(--cream-200)",border:"1px solid var(--charcoal-800)"},
    lime:{background:"var(--lime-500)",color:"var(--charcoal-900)",border:"1px solid var(--lime-500)"},
    clay:{background:"var(--clay-200)",color:"var(--clay-600)",border:"1px solid var(--clay-200)"},
    dark:{background:"transparent",color:"var(--cream-300)",border:"1px solid var(--charcoal-500)"},
  };
  const on=active?{background:"var(--charcoal-800)",color:"var(--cream-200)",borderColor:"var(--charcoal-800)"}:{};
  return (
    <span style={{
      display:"inline-flex",alignItems:"center",gap:"6px",
      fontFamily:"var(--font-sans)",fontWeight:500,lineHeight:1.2,
      letterSpacing:"var(--tracking-wide)",textTransform:"uppercase",
      borderRadius:"var(--radius-pill)",whiteSpace:"nowrap",
      transition:"background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
      ...sizes[size],...variants[variant],...on,...style,
    }} {...rest}>{children}</span>
  );
}
