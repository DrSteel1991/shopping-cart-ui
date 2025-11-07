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
