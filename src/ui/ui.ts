export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type WithBreakpoints<T> = T | Partial<Record<Breakpoint, T>>;

export type FlexDirectionValues =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";
export type JustifyContentValues =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";
export type AlignItemsValues =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "baseline"
  | "stretch"
  | "normal";

export type FlexValues = 1 | "auto" | "initial" | "none";
export type BasisValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
