import { forwardRef } from "react";
import classnames from "classnames";
import styled from "styled-components";
import type {
  MarginType,
  PaddingType,
  BackgroundType,
  BorderType,
  OverflowType,
  VisibilityType,
  InteractionType,
  WidthType,
  HeightType,
  PositionType,
} from "../types";
import {
  getBlockPropsByProperty,
  computeMarginClassNames,
  computePaddingClassNames,
  computeVisibilityClassNames,
  computeOverflowClassNames,
  computeBorderClassNames,
  computeInteractionClassNames,
  computeBackgroundClassNames,
} from "../helpers";

interface StyledInputProps {
  $widthProps: WidthType;
  $heightProps: HeightType;
  $positionProps: PositionType;
}

const StyledInput = styled("input")<StyledInputProps>(
  ({ $widthProps, $heightProps, $positionProps }) => ({
    ...$widthProps,
    ...$heightProps,
    ...$positionProps,
    // Reset default input styles
    border: "none",
    outline: "none",
    fontFamily: "inherit",
    fontSize: "inherit",
    // Default input styling
    padding: "0.5rem 0.75rem",
    borderRadius: "0.375rem",
    backgroundColor: "white",
    color: "#212529",
    transition: "all 0.2s ease-in-out",
    // Focus state
    "&:focus": {
      outline: "2px solid #007bff",
      outlineOffset: "2px",
    },
    "&:focus-visible": {
      outline: "2px solid #007bff",
      outlineOffset: "2px",
    },
    // Disabled state
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
      backgroundColor: "#e9ecef",
    },
    // Placeholder styling
    "&::placeholder": {
      color: "#6c757d",
      opacity: 1,
    },
  })
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "width" | "height">,
    MarginType,
    PaddingType,
    BackgroundType,
    PositionType,
    BorderType,
    OverflowType,
    VisibilityType,
    InteractionType,
    WidthType,
    HeightType {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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
    type = "text",
    ...restProps
  } = getBlockPropsByProperty(props);

  return (
    <StyledInput
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
});

Input.displayName = "Input";

export default Input;

