import * as React from "react";

/** Squared text field with a wide-caps label. Focus draws an ink border plus a clay ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Wide-caps label above the field. */
  label?: React.ReactNode;
  /** Helper text under the field. */
  hint?: React.ReactNode;
  /** Error message; also turns the border clay. */
  error?: React.ReactNode;
  /** Surface the field sits on. @default "light" */
  tone?: "light" | "dark";
}
export declare function Input(props: InputProps): JSX.Element;
