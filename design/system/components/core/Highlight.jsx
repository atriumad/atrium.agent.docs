import React from "react";

/** ATRIUM AD Highlight — flat lime block behind an emphasised word. */
export function Highlight({children,color="lime",style={},...rest}){
  const fills={lime:"var(--lime-500)",clay:"var(--clay-200)"};
  return (
    <span style={{
      backgroundImage:"linear-gradient("+fills[color]+","+fills[color]+")",
      backgroundRepeat:"no-repeat",backgroundSize:"100% 0.5em",backgroundPosition:"left bottom 0.14em",
      padding:"0 0.1em",WebkitBoxDecorationBreak:"clone",boxDecorationBreak:"clone",
      ...style,
    }} {...rest}>{children}</span>
  );
}
