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

interface StyledBlockDivProps {
  $widthProps: WidthType;
  $heightProps: HeightType;
  $positionProps: PositionType;
}

const StyledBlockDiv = styled("div")<StyledBlockDivProps>(
  ({ $widthProps, $heightProps, $positionProps }) => ({
    ...$widthProps,
    ...$heightProps,
    ...$positionProps,
  })
);

export interface BlockDivProps
  extends React.HTMLAttributes<HTMLDivElement>,
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

const BlockDiv = forwardRef<HTMLDivElement, BlockDivProps>((props, ref) => {
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
  } = getBlockPropsByProperty(props);

  return (
    <StyledBlockDiv
      ref={ref}
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

export default BlockDiv;

