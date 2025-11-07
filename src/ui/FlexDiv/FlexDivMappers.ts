import styles from "./FlexDiv.module.css";

export const gapMap: Record<string, string> = {
  "0": styles.gap0,
  "1": styles.gap1,
  "2": styles.gap2,
  "3": styles.gap3,
  "4": styles.gap4,
  "5": styles.gap5,
  "6": styles.gap6,
  "8": styles.gap8,
  "10": styles.gap10,
  "12": styles.gap12,
  "16": styles.gap16,
  "20": styles.gap20,
  "24": styles.gap24,
};

export const justifyContentMap: Record<string, string> = {
  start: styles.justifyStart,
  end: styles.justifyEnd,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
  around: styles.justifyAround,
  evenly: styles.justifyEvenly,
};

export const alignItemsMap: Record<string, string> = {
  start: styles.itemsStart,
  end: styles.itemsEnd,
  center: styles.itemsCenter,
  baseline: styles.itemsBaseline,
  stretch: styles.itemsStretch,
};

export const directionMap: Record<string, string> = {
  row: styles.directionRow,
  "row-reverse": styles.directionRowReverse,
  column: styles.directionColumn,
  "column-reverse": styles.directionColumnReverse,
};

export const wrapMap: Record<string, string> = {
  wrap: styles.wrap,
  nowrap: styles.nowrap,
};

export const flexMap: Record<string, string> = {
  "1": styles.flex1,
  auto: styles.flexAuto,
  initial: styles.flexInitial,
  none: styles.flexNone,
};

export const growMap: Record<string, string> = {
  "0": styles.grow0,
  "1": styles.grow1,
};

export const shrinkMap: Record<string, string> = {
  "0": styles.shrink0,
  "1": styles.shrink1,
};

export const basisMap: Record<string, string> = {
  "0": styles.basis0,
  "1": styles.basis1,
  "2": styles.basis2,
  "3": styles.basis3,
  "4": styles.basis4,
  "5": styles.basis5,
  "6": styles.basis6,
  "7": styles.basis7,
  "8": styles.basis8,
  "9": styles.basis9,
  "10": styles.basis10,
  "11": styles.basis11,
  "12": styles.basis12,
};

export const alignSelfMap: Record<string, string> = {
  start: styles.selfStart,
  end: styles.selfEnd,
  center: styles.selfCenter,
  between: styles.selfBetween,
  around: styles.selfAround,
  evenly: styles.selfEvenly,
  baseline: styles.selfBaseline,
  stretch: styles.selfStretch,
};

// Helper function to generate spacing map (0-12)
// These classes are in index.css (global CSS, not CSS modules)
const createSpacingMap = (prefix: string): Record<string, string> => {
  const map: Record<string, string> = {};
  for (let i = 0; i <= 12; i++) {
    map[String(i)] = `${prefix}${i}`;
  }
  return map;
};

export const marginMap = createSpacingMap("m");
export const marginTopMap = createSpacingMap("mt");
export const marginBottomMap = createSpacingMap("mb");
export const marginLeftMap = createSpacingMap("ml");
export const marginRightMap = createSpacingMap("mr");
export const marginXMap = createSpacingMap("mx");
export const marginYMap = createSpacingMap("my");

export const paddingMap = createSpacingMap("p");
export const paddingTopMap = createSpacingMap("pt");
export const paddingBottomMap = createSpacingMap("pb");
export const paddingLeftMap = createSpacingMap("pl");
export const paddingRightMap = createSpacingMap("pr");
export const paddingXMap = createSpacingMap("px");
export const paddingYMap = createSpacingMap("py");
