import * as React from "react";

/** Squared micro-label for status, counts and "new" flags. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "ink" */
  variant?: "ink" | "lime" | "clay" | "quiet";
}
export declare function Badge(props: BadgeProps): JSX.Element;
