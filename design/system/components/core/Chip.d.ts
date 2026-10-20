import * as React from "react";

/** Pill tag for services, filters and metadata. The only rounded shape in the system. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "outline" */
  variant?: "outline" | "ink" | "lime" | "clay" | "dark";
  /** @default "md" */
  size?: "sm" | "md";
  /** Renders the selected (ink-filled) state. @default false */
  active?: boolean;
}
export declare function Chip(props: ChipProps): JSX.Element;
