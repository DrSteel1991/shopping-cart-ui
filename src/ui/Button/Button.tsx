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
import SecondaryButton from "./SecondaryButton";
import TertiaryButton from "./TertiaryButton";

interface StyledButtonProps {
  $widthProps: WidthType;
  $heightProps: HeightType;
  $positionProps: PositionType;
}

const StyledButton = styled("button")<StyledButtonProps>(
  ({ $widthProps, $heightProps, $positionProps }) => ({
    ...$widthProps,
    ...$heightProps,
    ...$positionProps,
    // Reset default button styles
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: 500,
    textAlign: "center",
    textDecoration: "none",
    color: "white",
    // Allow button to be styled
    display: "inline-block",
    // Default button styling
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    transition: "all 0.2s ease-in-out",
    // Hover and active states
    "&:hover:not(:disabled)": {
      opacity: 0.9,
      transform: "translateY(-1px)",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    "&:active:not(:disabled)": {
      transform: "translateY(0)",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
    "&:focus-visible": {
      outline: "2px solid currentColor",
      outlineOffset: "2px",
    },
  })
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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
  /** Override the default primary background color */
  bgColor?: BackgroundType["bgColor"];
  /** Override the default primary border color */
  borderColor?: BorderType["borderColor"];
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ bgColor = "primary", borderColor = "primary", ...props }, ref) => {
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
      ...restProps
    } = getBlockPropsByProperty({ ...props, bgColor, borderColor });

    return (
      <StyledButton
        ref={ref}
        type={restProps.type || "button"}
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

Button.displayName = "Button";

const ButtonWithVariants = Object.assign(Button, {
  Secondary: SecondaryButton,
  Tertiary: TertiaryButton,
});

export default ButtonWithVariants;
