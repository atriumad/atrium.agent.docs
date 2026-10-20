import * as React from "react";

/** Large serif figure with a caps caption — the proof device used across site and decks. */
export interface StatFigureProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The figure itself, e.g. "2.7x" or "$44M". */
  value: React.ReactNode;
  /** Caps caption under the figure. */
  label: React.ReactNode;
  /** @default "ink" */
  tone?: "ink" | "lime" | "clay" | "cream";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
}
export declare function StatFigure(props: StatFigureProps): JSX.Element;
