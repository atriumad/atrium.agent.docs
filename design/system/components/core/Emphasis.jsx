import React from "react";

/** ATRIUM AD Emphasis — the italic-serif phrase set inside a display headline. */
export function Emphasis({children,as="em",style={},...rest}){
  const Comp=as;
  return (
    <Comp style={{
      fontFamily:"var(--font-serif)",fontStyle:"italic",fontWeight:400,
      letterSpacing:"var(--tracking-normal)",
      paddingRight:"0.18em",marginRight:"0.04em",...style,
    }} {...rest}>{children}</Comp>
  );
}
