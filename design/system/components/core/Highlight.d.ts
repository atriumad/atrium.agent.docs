import * as React from "react";

/** Flat marker block behind one or two emphasised words inside running text. */
export interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "lime" */
  color?: "lime" | "clay";
}
export declare function Highlight(props: HighlightProps): JSX.Element;
