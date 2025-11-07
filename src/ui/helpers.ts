import { getBreakpointValue } from "./utils";
import type {
  BackgroundType,
  BorderType,
  FlexType,
  HeightType,
  InteractionType,
  MarginType,
  OverflowType,
  PaddingType,
  VisibilityType,
  WidthType,
} from "./types";
import type { Colors } from "./ColorVariants";
import {
  gapMap,
  justifyContentMap,
  alignItemsMap,
  directionMap,
  wrapMap,
  flexMap,
  growMap,
  shrinkMap,
  basisMap,
  alignSelfMap,
  marginMap,
  marginTopMap,
  marginBottomMap,
  marginLeftMap,
  marginRightMap,
  marginXMap,
  marginYMap,
  paddingMap,
  paddingTopMap,
  paddingBottomMap,
  paddingLeftMap,
  paddingRightMap,
  paddingXMap,
  paddingYMap,
} from "./FlexDiv/FlexDivMappers";
import {
  textColorMap,
  bgColorMap,
  borderColorMap,
  hoverBgColorMap,
  hoverBorderColorMap,
} from "./ColorMappers";

export const computeFlexClassNames = ({
  direction,
  justifyContent,
  alignItems,
  alignSelf,
  wrap,
  flex,
  grow,
  shrink,
  basis,
  gap,
}: FlexType): (string | undefined)[] => {
  const gapValue = getBreakpointValue(gap);
  const justifyContentValue = getBreakpointValue(justifyContent);
  const alignItemsValue = getBreakpointValue(alignItems);
  const directionValue = getBreakpointValue(direction);
  const wrapValue = getBreakpointValue(wrap);
  const flexValue = getBreakpointValue(flex);
  const growValue = getBreakpointValue(grow);
  const shrinkValue = getBreakpointValue(shrink);
  const basisValue = getBreakpointValue(basis);
  const alignSelfValue = getBreakpointValue(alignSelf);

  return [
    gapValue !== undefined ? gapMap[String(gapValue)] : undefined,
    justifyContentValue !== undefined
      ? justifyContentMap[justifyContentValue]
      : undefined,
    alignItemsValue !== undefined ? alignItemsMap[alignItemsValue] : undefined,
    directionValue !== undefined ? directionMap[directionValue] : undefined,
    wrapValue !== undefined
      ? wrapMap[wrapValue ? "wrap" : "nowrap"]
      : undefined,
    flexValue !== undefined ? flexMap[String(flexValue)] : undefined,
    growValue !== undefined ? growMap[String(growValue)] : undefined,
    shrinkValue !== undefined ? shrinkMap[String(shrinkValue)] : undefined,
    basisValue !== undefined ? basisMap[String(basisValue)] : undefined,
    alignSelfValue !== undefined ? alignSelfMap[alignSelfValue] : undefined,
  ];
};

export const computeMarginClassNames = ({
  m,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
}: MarginType): (string | undefined)[] => {
  const mValue = getBreakpointValue(m);
  const mtValue = getBreakpointValue(mt);
  const mbValue = getBreakpointValue(mb);
  const mlValue = getBreakpointValue(ml);
  const mrValue = getBreakpointValue(mr);
  const mxValue = getBreakpointValue(mx);
  const myValue = getBreakpointValue(my);

  // Order matters: general -> directional -> specific
  // Note: mx/my come before specific sides so specific sides can override
  return [
    mValue !== undefined && mValue >= 0 && mValue <= 12
      ? marginMap[String(mValue)]
      : undefined,
    mxValue !== undefined && mxValue >= 0 && mxValue <= 12
      ? marginXMap[String(mxValue)]
      : undefined,
    myValue !== undefined && myValue >= 0 && myValue <= 12
      ? marginYMap[String(myValue)]
      : undefined,
    mtValue !== undefined && mtValue >= 0 && mtValue <= 12
      ? marginTopMap[String(mtValue)]
      : undefined,
    mbValue !== undefined && mbValue >= 0 && mbValue <= 12
      ? marginBottomMap[String(mbValue)]
      : undefined,
    mlValue !== undefined && mlValue >= 0 && mlValue <= 12
      ? marginLeftMap[String(mlValue)]
      : undefined,
    mrValue !== undefined && mrValue >= 0 && mrValue <= 12
      ? marginRightMap[String(mrValue)]
      : undefined,
  ];
};

export const computePaddingClassNames = ({
  p,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
}: PaddingType): (string | undefined)[] => {
  const pValue = getBreakpointValue(p);
  const ptValue = getBreakpointValue(pt);
  const pbValue = getBreakpointValue(pb);
  const plValue = getBreakpointValue(pl);
  const prValue = getBreakpointValue(pr);
  const pxValue = getBreakpointValue(px);
  const pyValue = getBreakpointValue(py);

  // Order matters: general -> directional -> specific
  // Note: px/py come before specific sides so specific sides can override
  return [
    pValue !== undefined && pValue >= 0 && pValue <= 12
      ? paddingMap[String(pValue)]
      : undefined,
    pxValue !== undefined && pxValue >= 0 && pxValue <= 12
      ? paddingXMap[String(pxValue)]
      : undefined,
    pyValue !== undefined && pyValue >= 0 && pyValue <= 12
      ? paddingYMap[String(pyValue)]
      : undefined,
    ptValue !== undefined && ptValue >= 0 && ptValue <= 12
      ? paddingTopMap[String(ptValue)]
      : undefined,
    pbValue !== undefined && pbValue >= 0 && pbValue <= 12
      ? paddingBottomMap[String(pbValue)]
      : undefined,
    plValue !== undefined && plValue >= 0 && plValue <= 12
      ? paddingLeftMap[String(plValue)]
      : undefined,
    prValue !== undefined && prValue >= 0 && prValue <= 12
      ? paddingRightMap[String(prValue)]
      : undefined,
  ];
};

export const computeTextColorClassNames = (
  color?: Colors | "transparent" | "inherit"
): (string | undefined)[] => {
  if (!color || color === "transparent" || color === "inherit") {
    return [];
  }
  return [textColorMap[color]];
};

export const computeBgColorClassNames = (
  color?: Colors | "transparent" | "inherit"
): (string | undefined)[] => {
  if (!color || color === "transparent" || color === "inherit") {
    return [];
  }
  return [bgColorMap[color]];
};

export const computeBorderColorClassNames = (
  color?: Colors
): (string | undefined)[] => {
  if (!color) {
    return [];
  }
  return [borderColorMap[color]];
};

export const computeBackgroundClassNames = ({
  bgColor,
  hoverBgColor,
}: BackgroundType): (string | undefined)[] => {
  const bgColorClasses = computeBgColorClassNames(bgColor);
  const hoverBgColorClasses =
    hoverBgColor && hoverBgColor !== "transparent"
      ? [hoverBgColorMap[hoverBgColor]]
      : [];
  return [...bgColorClasses, ...hoverBgColorClasses];
};

export const computeBorderClassNames = ({
  borderColor,
  borderTopColor,
  borderBottomColor,
  borderLeftColor,
  borderRightColor,
  hoverBorderColor,
  borderWidth,
  borderStyle,
  borderRadius,
}: BorderType): (string | undefined)[] => {
  const borderColorClasses = computeBorderColorClassNames(borderColor);
  const borderTopColorClasses = computeBorderColorClassNames(borderTopColor);
  const borderBottomColorClasses =
    computeBorderColorClassNames(borderBottomColor);
  const borderLeftColorClasses = computeBorderColorClassNames(borderLeftColor);
  const borderRightColorClasses =
    computeBorderColorClassNames(borderRightColor);
  const hoverBorderColorClasses = hoverBorderColor
    ? [hoverBorderColorMap[hoverBorderColor]]
    : [];

  const borderWidthMap: Record<string, string> = {
    "0": "border-0",
    "1": "border-1",
    "2": "border-2",
    "3": "border-3",
    "4": "border-4",
    "5": "border-5",
    "6": "border-6",
    "7": "border-7",
    "8": "border-8",
    "10": "border-10",
  };

  const borderStyleMap: Record<string, string> = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
    double: "border-double",
    none: "border-none",
    hidden: "border-hidden",
  };

  const borderRadiusMap: Record<string, string> = {
    "0": "rounded-none",
    "0px": "rounded-none",
    "2": "rounded-sm",
    "2px": "rounded-sm",
    "4": "rounded",
    "4px": "rounded",
    "6": "rounded-md",
    "6px": "rounded-md",
    "8": "rounded-lg",
    "8px": "rounded-lg",
    "10": "rounded-lg",
    "10px": "rounded-lg",
    "12": "rounded-xl",
    "12px": "rounded-xl",
    "16": "rounded-2xl",
    "16px": "rounded-2xl",
    "24": "rounded-3xl",
    "24px": "rounded-3xl",
    "9999px": "rounded-full",
    full: "rounded-full",
  };

  const borderWidthClass =
    borderWidth !== undefined ? borderWidthMap[String(borderWidth)] : undefined;
  const borderStyleClass =
    borderStyle !== undefined ? borderStyleMap[borderStyle] : undefined;
  const borderRadiusClass =
    borderRadius !== undefined
      ? borderRadiusMap[String(borderRadius)] || undefined
      : undefined;

  return [
    ...borderColorClasses,
    ...borderTopColorClasses,
    ...borderBottomColorClasses,
    ...borderLeftColorClasses,
    ...borderRightColorClasses,
    ...hoverBorderColorClasses,
    borderWidthClass,
    borderStyleClass,
    borderRadiusClass,
  ];
};

export const computeOverflowClassNames = ({
  overflow,
  overflowX,
  overflowY,
  overflowAnchor,
}: OverflowType): (string | undefined)[] => {
  const overflowMap: Record<string, string> = {
    visible: "overflow-visible",
    hidden: "overflow-hidden",
    clip: "overflow-clip",
    scroll: "overflow-scroll",
    auto: "overflow-auto",
  };

  const overflowAnchorMap: Record<string, string> = {
    auto: "overflow-anchor-auto",
    none: "overflow-anchor-none",
  };

  return [
    overflow ? overflowMap[overflow] : undefined,
    overflowX ? `overflow-x-${overflowX}` : undefined,
    overflowY ? `overflow-y-${overflowY}` : undefined,
    overflowAnchor ? overflowAnchorMap[overflowAnchor] : undefined,
  ];
};

export const computeVisibilityClassNames = ({
  invisible,
  opacity,
  zIndex,
}: VisibilityType): (string | undefined)[] => {
  const opacityMap: Record<string, string> = {
    "0": "opacity-0",
    "0.25": "opacity-25",
    "25": "opacity-25",
    "0.5": "opacity-50",
    "50": "opacity-50",
    "0.75": "opacity-75",
    "75": "opacity-75",
    "1": "opacity-100",
    "100": "opacity-100",
  };

  const zIndexMap: Record<string, string> = {
    "0": "z-0",
    "10": "z-10",
    "20": "z-20",
    "30": "z-30",
    "40": "z-40",
    "50": "z-50",
    auto: "z-auto",
  };

  const opacityClass =
    opacity !== undefined
      ? opacityMap[String(opacity)] || undefined
      : undefined;
  const zIndexClass =
    zIndex !== undefined
      ? (typeof zIndex === "string" || typeof zIndex === "number"
          ? zIndexMap[String(zIndex)]
          : undefined) || undefined
      : undefined;

  return [invisible ? "invisible" : undefined, opacityClass, zIndexClass];
};

export const computeInteractionClassNames = ({
  userSelect,
  cursor,
  pointerEvents,
}: InteractionType): (string | undefined)[] => {
  const userSelectMap: Record<string, string> = {
    none: "select-none",
    auto: "select-auto",
    text: "select-text",
    all: "select-all",
    contain: "select-contain",
  };

  const cursorMap: Record<string, string> = {
    auto: "cursor-auto",
    default: "cursor-default",
    pointer: "cursor-pointer",
    wait: "cursor-wait",
    text: "cursor-text",
    move: "cursor-move",
    "not-allowed": "cursor-not-allowed",
    help: "cursor-help",
    crosshair: "cursor-crosshair",
    grab: "cursor-grab",
    grabbing: "cursor-grabbing",
  };

  const pointerEventsMap: Record<string, string> = {
    auto: "pointer-events-auto",
    none: "pointer-events-none",
  };

  return [
    userSelect ? userSelectMap[userSelect] : undefined,
    cursor ? cursorMap[cursor] : undefined,
    pointerEvents ? pointerEventsMap[pointerEvents] : undefined,
  ];
};

export const getPropsByProperty = <
  T extends FlexType &
    WidthType &
    HeightType &
    BorderType &
    OverflowType &
    BackgroundType &
    MarginType &
    PaddingType &
    VisibilityType &
    InteractionType
>(
  props: T
) => {
  const {
    direction,
    justifyContent,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    borderWidth,
    borderStyle,
    borderColor,
    alignItems,
    alignSelf,
    overflow,
    overflowX,
    overflowY,
    overflowAnchor,
    bgColor,
    hoverBgColor,
    backgroundImage,
    backgroundSize,
    backgroundRepeat,
    backgroundPosition,
    borderTopWidth,
    borderTopStyle,
    borderTopColor,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomWidth,
    borderBottomStyle,
    borderBottomColor,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftWidth,
    borderLeftStyle,
    borderLeftColor,
    borderRightWidth,
    borderRightStyle,
    borderRightColor,
    borderRadius,
    hoverBorderWidth,
    hoverBorderStyle,
    hoverBorderColor,
    hoverBorderRadius,
    boxShadow,
    wrap,
    flex,
    grow,
    shrink,
    basis,
    gap,
    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
    p,
    pt,
    pb,
    pl,
    pr,
    px,
    py,
    zIndex,
    invisible,
    opacity,
    userSelect,
    cursor,
    pointerEvents,
    ...restProps
  } = props;
  return {
    flexProps: {
      direction,
      justifyContent,
      alignItems,
      alignSelf,
      wrap,
      flex,
      grow,
      shrink,
      basis,
      gap,
    },
    marginProps: { m, mt, mb, ml, mr, mx, my },
    paddingProps: { p, pt, pb, pl, pr, px, py },
    widthProps: { width, minWidth, maxWidth },
    heightProps: { height, minHeight, maxHeight },
    borderProps: {
      borderWidth,
      borderStyle,
      borderColor,
      borderRadius,
      borderTopWidth,
      borderTopStyle,
      borderTopColor,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomWidth,
      borderBottomStyle,
      borderBottomColor,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderLeftWidth,
      borderLeftStyle,
      borderLeftColor,
      borderRightWidth,
      borderRightStyle,
      borderRightColor,
      hoverBorderWidth,
      hoverBorderStyle,
      hoverBorderColor,
      hoverBorderRadius,
      boxShadow,
    },
    overflowProps: {
      overflow,
      overflowX,
      overflowY,
      overflowAnchor,
    },
    backgroundProps: {
      bgColor,
      hoverBgColor,
      backgroundImage,
      backgroundSize,
      backgroundRepeat,
      backgroundPosition,
    },
    visibilityProps: {
      zIndex,
      invisible,
      opacity,
    },
    interactionProps: {
      userSelect,
      cursor,
      pointerEvents,
    },
    ...restProps,
  };
};
