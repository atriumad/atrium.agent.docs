import React from "react";

/** ATRIUM AD Card — a drawn container. Hairline by default; ruled/offset for emphasis. */
export function Card({children,tone="paper",elevation="flat",interactive=false,padding="md",style={},...rest}){
  const pads={none:0,sm:"var(--space-4)",md:"var(--space-6)",lg:"var(--space-8)"};
  const tones={
    paper:{background:"var(--surface-card)",color:"var(--text-body)",border:"1px solid var(--border-light)"},
    ruled:{background:"var(--surface-card)",color:"var(--text-body)",border:"1px solid var(--charcoal-800)"},
    sunken:{background:"var(--surface-sunken)",color:"var(--text-body)",border:"1px solid transparent"},
    dark:{background:"var(--surface-dark)",color:"var(--text-on-dark)",border:"1px solid var(--charcoal-800)"},
    lime:{background:"var(--surface-lime)",color:"var(--text-on-lime)",border:"1px solid var(--lime-500)"},
    clay:{background:"var(--surface-clay)",color:"var(--text-on-clay)",border:"1px solid var(--clay-500)"},
  };
  const elev={flat:"var(--shadow-none)",card:"var(--shadow-card)",offset:"var(--shadow-raised)",pop:"var(--shadow-pop)"};
  const [hover,setHover]=React.useState(false);
  return (
    <div
      onPointerEnter={()=>interactive&&setHover(true)}
      onPointerLeave={()=>interactive&&setHover(false)}
      style={{
        borderRadius:"var(--radius-md)",padding:pads[padding],
        boxShadow:elev[elevation],
        transition:"transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
        cursor:interactive?"pointer":undefined,
        ...tones[tone],
        ...(hover?{transform:"translateY(-2px)",borderColor:"var(--charcoal-800)",boxShadow:"var(--shadow-raised)"}:{}),
        ...style,
      }}
      {...rest}
    >{children}</div>
  );
}
