import type {
  AlignItemsValues,
  FlexDirectionValues,
  FlexValues,
  JustifyContentValues,
  WithBreakpoints,
} from "./ui";
import type { BasisValues } from "./ui";

export interface FlexType {
  /** establishes the main-axis, thus defining the direction flex items are placed in the flex container */
  direction?: WithBreakpoints<FlexDirectionValues>;
  /** defines the alignment along the main axis */
  justifyContent?: WithBreakpoints<JustifyContentValues>;
  /** defines the items alignment along the cross axis */
  alignItems?: WithBreakpoints<AlignItemsValues>;
  /** defines the self alignment along the cross axis */
  alignSelf?: WithBreakpoints<AlignItemsValues>;
  /** defines whether the flex items are forced in a single line or can be flowed into multiple lines */
  wrap?: WithBreakpoints<boolean>;
  /** defines how flex items both grow and shrink */
  flex?: WithBreakpoints<FlexValues>;
  /** defines the ability for a flex item to grow if necessary */
  grow?: WithBreakpoints<0 | 1>;
  /** specifies how the item will shrink relative to the rest of the flexible items inside the same container */
  shrink?: WithBreakpoints<0 | 1>;
  /** specifies the initial length of a flexible item */
  basis?: WithBreakpoints<BasisValues>;
  /** defines the gap between flex items */
  gap?: WithBreakpoints<string | number>;
}

export interface MarginType {
  /** margin on all sides (1 = 8px, 2 = 16px, etc.) */
  m?: WithBreakpoints<number>;
  /** margin-top (1 = 8px, 2 = 16px, etc.) */
  mt?: WithBreakpoints<number>;
  /** margin-bottom (1 = 8px, 2 = 16px, etc.) */
  mb?: WithBreakpoints<number>;
  /** margin-left (1 = 8px, 2 = 16px, etc.) */
  ml?: WithBreakpoints<number>;
  /** margin-right (1 = 8px, 2 = 16px, etc.) */
  mr?: WithBreakpoints<number>;
  /** margin on horizontal sides (left and right) (1 = 8px, 2 = 16px, etc.) */
  mx?: WithBreakpoints<number>;
  /** margin on vertical sides (top and bottom) (1 = 8px, 2 = 16px, etc.) */
  my?: WithBreakpoints<number>;
}

export interface PaddingType {
  /** padding on all sides (1 = 8px, 2 = 16px, etc.) */
  p?: WithBreakpoints<number>;
  /** padding-top (1 = 8px, 2 = 16px, etc.) */
  pt?: WithBreakpoints<number>;
  /** padding-bottom (1 = 8px, 2 = 16px, etc.) */
  pb?: WithBreakpoints<number>;
  /** padding-left (1 = 8px, 2 = 16px, etc.) */
  pl?: WithBreakpoints<number>;
  /** padding-right (1 = 8px, 2 = 16px, etc.) */
  pr?: WithBreakpoints<number>;
  /** padding on horizontal sides (left and right) (1 = 8px, 2 = 16px, etc.) */
  px?: WithBreakpoints<number>;
  /** padding on vertical sides (top and bottom) (1 = 8px, 2 = 16px, etc.) */
  py?: WithBreakpoints<number>;
}
