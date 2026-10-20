import * as React from "react";

/** A drawn container: hairline stroke by default, no shadow unless it floats. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Surface treatment. @default "paper" */
  tone?: "paper" | "ruled" | "sunken" | "dark" | "lime" | "clay";
  /** @default "flat" */
  elevation?: "flat" | "card" | "offset" | "pop";
  /** Adds hover lift + ink border. @default false */
  interactive?: boolean;
  /** @default "md" */
  padding?: "none" | "sm" | "md" | "lg";
}
export declare function Card(props: CardProps): JSX.Element;
