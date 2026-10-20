import * as React from "react";

/** Native select styled to match Input. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Strings, or { value, label } pairs. */
  options?: Array<string | { value: string; label: string }>;
  /** @default "light" */
  tone?: "light" | "dark";
}
export declare function Select(props: SelectProps): JSX.Element;
