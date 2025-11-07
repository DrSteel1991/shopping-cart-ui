import { getBreakpointValue } from "./utils";
import type { FlexType, MarginType, PaddingType } from "./types";
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

export const getPropsByProperty = <
  T extends FlexType & MarginType & PaddingType
>(
  props: T
) => {
  const {
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
    ...restProps,
  };
};
