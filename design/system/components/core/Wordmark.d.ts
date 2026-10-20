import * as React from "react";

/**
 * The ATRIUM AD wordmark, set in type. No logo file exists for this brand yet —
 * this component is the mark until artwork is supplied.
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "md" */
  size?: "sm" | "md" | "lg" | "xl";
  /** @default "ink" */
  tone?: "ink" | "cream" | "lime" | "clay";
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
