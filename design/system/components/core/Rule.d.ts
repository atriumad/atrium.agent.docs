import * as React from "react";

/** Heavy horizontal divider — the structural device that separates every section. */
export interface RuleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional caps label centred in the rule. */
  label?: React.ReactNode;
  /** @default "bold" */
  weight?: "hair" | "bold";
  /** @default "ink" */
  tone?: "ink" | "light" | "onDark";
}
export declare function Rule(props: RuleProps): JSX.Element;
