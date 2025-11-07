import { forwardRef } from "react";
import classnames from "classnames";
import styled from "styled-components";
import styles from "./FlexDiv.module.css";
import type {
  FlexType,
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
} from "src/ui/types";
import {
  getPropsByProperty,
  computeFlexClassNames,
  computeMarginClassNames,
  computePaddingClassNames,
  computeVisibilityClassNames,
  computeOverflowClassNames,
  computeBorderClassNames,
  computeInteractionClassNames,
  computeBackgroundClassNames,
} from "src/ui/helpers";

interface StyledFlexDivProps {
  $widthProps: WidthType;
  $heightProps: HeightType;
  $positionProps: PositionType;
}

const StyledFlexDiv = styled("div")<StyledFlexDivProps>(
  ({ $widthProps, $heightProps, $positionProps }) => ({
    ...$widthProps,
    ...$heightProps,
    ...$positionProps,
  })
);

export interface FlexDivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    FlexType,
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

const FlexDiv = forwardRef<HTMLDivElement, FlexDivProps>((props, ref) => {
  const {
    flexProps,
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
  } = getPropsByProperty(props);

  return (
    <StyledFlexDiv
      ref={ref}
      className={classnames(
        styles.flex,
        ...computeFlexClassNames(flexProps),
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

export default FlexDiv;
