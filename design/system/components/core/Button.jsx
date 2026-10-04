import React from "react";

/** ATRIUM AD Button — squared, printed. Flat fills, 1px strokes, press nudges down. */
export function Button({children,variant="primary",size="md",as="button",iconLeft=null,iconRight=null,fullWidth=false,disabled=false,style={},...rest}){
  const sizes={
    sm:{padding:"7px 14px",fontSize:"13px",gap:"6px"},
    md:{padding:"11px 22px",fontSize:"15px",gap:"8px"},
    lg:{padding:"15px 30px",fontSize:"17px",gap:"10px"},
  };
  const variants={
    primary:{background:"var(--charcoal-800)",color:"var(--cream-200)",border:"1px solid var(--charcoal-800)"},
    lime:{background:"var(--lime-500)",color:"var(--charcoal-900)",border:"1px solid var(--lime-500)"},
    clay:{background:"var(--clay-500)",color:"var(--cream-100)",border:"1px solid var(--clay-500)"},
    outline:{background:"transparent",color:"var(--charcoal-800)",border:"1px solid var(--charcoal-800)"},
    ghost:{background:"transparent",color:"var(--charcoal-800)",border:"1px solid transparent"},
  };
  const hoverStyle={
    primary:{background:"var(--charcoal-900)"},
    lime:{background:"var(--lime-600)"},
    clay:{background:"var(--clay-600)"},
    outline:{background:"var(--charcoal-800)",color:"var(--cream-200)"},
    ghost:{background:"var(--cream-300)"},
  }[variant];
  const Comp=as;
  const [hover,setHover]=React.useState(false);
  const [pressed,setPressed]=React.useState(false);
  return (
    <Comp
      disabled={as==="button"?disabled:undefined}
      onPointerEnter={()=>setHover(true)}
      onPointerLeave={()=>{setHover(false);setPressed(false);}}
      onPointerDown={()=>setPressed(true)}
      onPointerUp={()=>setPressed(false)}
      style={{
        display:fullWidth?"flex":"inline-flex",width:fullWidth?"100%":undefined,
        alignItems:"center",justifyContent:"center",gap:sizes[size].gap,
        fontFamily:"var(--font-sans)",fontWeight:500,lineHeight:1,letterSpacing:"0.01em",
        borderRadius:"var(--radius-sm)",cursor:disabled?"not-allowed":"pointer",
        opacity:disabled?0.4:1,textDecoration:"none",whiteSpace:"nowrap",
        transition:"transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
        transform:pressed?"translateY(var(--press-shift))":"translateY(0)",
        ...sizes[size],...variants[variant],
        ...(hover&&!disabled?hoverStyle:{}),
        ...style,
      }}
      {...rest}
    >{iconLeft}{children}{iconRight}</Comp>
  );
}
