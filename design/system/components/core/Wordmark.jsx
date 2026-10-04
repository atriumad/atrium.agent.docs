import React from "react";

/**
 * ATRIUM AD Wordmark — typographic only. No logo artwork was supplied for this
 * brand, so the mark IS the name set in the display face.
 */
export function Wordmark({size="md",tone="ink",style={},...rest}){
  const sizes={sm:{fontSize:"16px",letterSpacing:"0.02em"},md:{fontSize:"24px",letterSpacing:"0.01em"},lg:{fontSize:"44px",letterSpacing:"-0.01em"},xl:{fontSize:"96px",letterSpacing:"-0.03em"}};
  const tones={ink:"var(--charcoal-900)",cream:"var(--cream-200)",lime:"var(--lime-500)",clay:"var(--clay-500)"};
  return (
    <span style={{
      display:"inline-flex",alignItems:"baseline",gap:"0.34em",
      fontFamily:"var(--font-display)",fontWeight:400,lineHeight:1,
      textTransform:"uppercase",color:tones[tone],...sizes[size],...style,
    }} {...rest}>
      <span>Atrium</span>
      <span style={{opacity:0.45}}>AD</span>
    </span>
  );
}
