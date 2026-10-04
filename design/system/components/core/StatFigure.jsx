import React from "react";

/** ATRIUM AD StatFigure — a big Bodoni number with a caps caption. */
export function StatFigure({value,label,tone="ink",size="md",style={},...rest}){
  const sizes={sm:"40px",md:"64px",lg:"96px"};
  const tones={ink:"var(--charcoal-900)",lime:"var(--lime-600)",clay:"var(--clay-500)",cream:"var(--cream-200)"};
  const labelTone=tone==="cream"?"var(--cream-400)":"var(--text-muted)";
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"var(--space-2)",...style}} {...rest}>
      <span style={{fontFamily:"var(--font-serif)",fontWeight:400,fontSize:sizes[size],lineHeight:0.9,letterSpacing:"var(--tracking-tight)",color:tones[tone]}}>{value}</span>
      <span style={{fontFamily:"var(--font-sans)",fontSize:"var(--text-2xs)",fontWeight:500,letterSpacing:"var(--tracking-wider)",textTransform:"uppercase",color:labelTone}}>{label}</span>
    </div>
  );
}
