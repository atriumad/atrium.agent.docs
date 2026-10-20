import * as React from "react";

/**
 * Squared, printed action button. Flat fills and 1px strokes; press nudges
 * the button down 1px rather than scaling it.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Fill treatment. @default "primary" */
  variant?: "primary" | "lime" | "clay" | "outline" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Element to render. @default "button" */
  as?: "button" | "a" | "div";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
