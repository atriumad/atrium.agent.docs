import * as React from "react";

/** Wide letter-spaced caps label that sits above a headline or section. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Show the 28px leading rule. @default true */
  rule?: boolean;
  /** @default "muted" */
  tone?: "muted" | "ink" | "onDark" | "lime";
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
