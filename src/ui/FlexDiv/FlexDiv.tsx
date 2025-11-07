import { forwardRef } from "react";
import classnames from "classnames";
import styles from "./FlexDiv.module.css";
import type { FlexType, MarginType, PaddingType } from "../types";
import {
  getPropsByProperty,
  computeFlexClassNames,
  computeMarginClassNames,
  computePaddingClassNames,
} from "../helpers";

export interface FlexDivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    FlexType,
    MarginType,
    PaddingType {}

const FlexDiv = forwardRef<HTMLDivElement, FlexDivProps>((props, ref) => {
  const { flexProps, marginProps, paddingProps, ...restProps } =
    getPropsByProperty(props);

  return (
    <div
      ref={ref}
      className={classnames(
        styles.flex,
        ...computeFlexClassNames(flexProps),
        ...computeMarginClassNames(marginProps),
        ...computePaddingClassNames(paddingProps)
      )}
      {...restProps}
    />
  );
});

export default FlexDiv;
