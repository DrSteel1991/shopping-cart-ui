import { forwardRef } from "react";
import classnames from "classnames";
import styles from "./FlexDiv.module.css";
import { alignItemsMap, gapMap, justifyContentMap } from "./FlexDivMappers";
import { getBreakpointValue } from "./utils";
import type { FlexType } from "../types";

export interface FlexDivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    FlexType {}

const FlexDiv = forwardRef<HTMLDivElement, FlexDivProps>(function FlexDiv(
  {
    gap,
    justifyContent,
    alignItems,
    alignSelf,
    direction,
    wrap,
    flex,
    grow,
    shrink,
    basis,
    style,
    ...props
  },
  ref
) {
  // Extract base values from breakpoints
  const gapValue = getBreakpointValue(gap);
  const justifyContentValue = getBreakpointValue(justifyContent);
  const alignItemsValue = getBreakpointValue(alignItems);
  const alignSelfValue = getBreakpointValue(alignSelf);
  const directionValue = getBreakpointValue(direction);
  const wrapValue = getBreakpointValue(wrap);
  const flexValue = getBreakpointValue(flex);
  const growValue = getBreakpointValue(grow);
  const shrinkValue = getBreakpointValue(shrink);
  const basisValue = getBreakpointValue(basis);

  // Map to CSS classes
  const gapClass =
    gapValue !== undefined ? gapMap[String(gapValue)] : undefined;

  const justifyContentClass =
    justifyContentValue !== undefined
      ? justifyContentMap[justifyContentValue]
      : undefined;

  const alignItemsClass =
    alignItemsValue !== undefined ? alignItemsMap[alignItemsValue] : undefined;

  // Build inline styles for properties not in CSS modules
  const inlineStyles: React.CSSProperties = {
    ...(gapValue !== undefined &&
      !gapMap[String(gapValue)] && {
        gap: typeof gapValue === "number" ? `${gapValue}px` : gapValue,
      }),
    ...(directionValue !== undefined && {
      flexDirection: directionValue,
    }),
    ...(wrapValue !== undefined && {
      flexWrap: wrapValue ? "wrap" : "nowrap",
    }),
    ...(flexValue !== undefined && {
      flex: flexValue,
    }),
    ...(growValue !== undefined && {
      flexGrow: growValue,
    }),
    ...(shrinkValue !== undefined && {
      flexShrink: shrinkValue,
    }),
    ...(basisValue !== undefined && {
      flexBasis: `${(basisValue / 12) * 100}%`,
    }),
    ...(alignSelfValue !== undefined && {
      alignSelf:
        alignSelfValue === "start"
          ? "flex-start"
          : alignSelfValue === "end"
          ? "flex-end"
          : alignSelfValue === "between"
          ? "space-between"
          : alignSelfValue === "around"
          ? "space-around"
          : alignSelfValue === "evenly"
          ? "space-evenly"
          : alignSelfValue,
    }),
    ...style,
  };

  return (
    <div
      ref={ref}
      className={classnames(
        styles.flex,
        gapClass,
        justifyContentClass,
        alignItemsClass
      )}
      style={inlineStyles}
      {...props}
    />
  );
});

export default FlexDiv;
