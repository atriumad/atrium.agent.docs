import * as React from "react";

/** Italic Bodoni phrase set inline in a grotesque headline — the type signature of the brand. */
export interface EmphasisProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** @default "em" */
  as?: "em" | "span" | "i";
}
export declare function Emphasis(props: EmphasisProps): JSX.Element;
