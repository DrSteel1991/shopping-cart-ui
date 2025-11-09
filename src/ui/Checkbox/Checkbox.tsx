import { forwardRef } from "react";
import classnames from "classnames";
import styled from "styled-components";
import type {
  MarginType,
  PaddingType,
  BackgroundType,
  PositionType,
  BorderType,
  OverflowType,
  VisibilityType,
  InteractionType,
  WidthType,
  HeightType,
} from "src/ui/types";
import {
  getBlockPropsByProperty,
  computeMarginClassNames,
  computePaddingClassNames,
  computeBackgroundClassNames,
  computeBorderClassNames,
  computeOverflowClassNames,
  computeVisibilityClassNames,
  computeInteractionClassNames,
} from "src/ui/helpers";

interface StyledCheckboxProps {
  $widthProps: WidthType;
  $heightProps: HeightType;
  $positionProps: PositionType;
}

const StyledCheckbox = styled("input")<StyledCheckboxProps>(
  ({ $widthProps, $heightProps, $positionProps }) => ({
    ...$widthProps,
    ...$heightProps,
    ...$positionProps,
    cursor: "pointer",
    width: "16px",
    height: "16px",
    accentColor: "#007bff",
    flexShrink: 0,
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
    "&:focus-visible": {
      outline: "2px solid #007bff",
      outlineOffset: "2px",
    },
  })
);

export interface CheckboxProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "width" | "height" | "type"
    >,
    MarginType,
    PaddingType,
    BackgroundType,
    PositionType,
    BorderType,
    OverflowType,
    VisibilityType,
    InteractionType,
    WidthType,
    HeightType {
  type?: "checkbox";
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      marginProps,
      backgroundProps,
      borderProps,
      interactionProps,
      overflowProps,
      visibilityProps,
      paddingProps,
      widthProps,
      heightProps,
      positionProps,
      type = "checkbox",
      ...restProps
    } = getBlockPropsByProperty(props);

    return (
      <StyledCheckbox
        ref={ref}
        type={type}
        className={classnames(
          ...computeMarginClassNames(marginProps),
          ...computeBackgroundClassNames(backgroundProps),
          ...computeBorderClassNames(borderProps),
          ...computeInteractionClassNames(interactionProps),
          ...computeOverflowClassNames(overflowProps),
          ...computeVisibilityClassNames(visibilityProps),
          ...computePaddingClassNames(paddingProps)
        )}
        $widthProps={widthProps}
        $heightProps={heightProps}
        $positionProps={positionProps}
        {...restProps}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;

