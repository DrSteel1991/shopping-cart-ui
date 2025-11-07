import type { CSSObject } from "styled-components";
import type {
  AlignItemsValues,
  FlexDirectionValues,
  FlexValues,
  JustifyContentValues,
  WithBreakpoints,
} from "./ui";
import type { BasisValues } from "./ui";
import type { Colors as ColorVariants } from "./ColorVariants";

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

export interface PositionType {
  /** specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky) */
  position?: CSSObject["position"];
  /** set the top edge of the positioned element */
  top?: CSSObject["top"];
  /** set the left edge of the positioned element */
  left?: CSSObject["left"];
  /** set the bottom edge of the positioned element */
  bottom?: CSSObject["bottom"];
  /** set the right edge of the positioned element */
  right?: CSSObject["right"];
}

export interface WidthType {
  /** sets the width of an element */
  width?: CSSObject["width"];
  /** sets the minimum width of an element */
  minWidth?: CSSObject["minWidth"];
  /** sets the maximum width of an element */
  maxWidth?: CSSObject["maxWidth"];
}

export interface HeightType {
  /** sets the height of an element */
  height?: CSSObject["height"];
  /** sets the minimum height of an element */
  minHeight?: CSSObject["minHeight"];
  /** sets the maximum height of an element */
  maxHeight?: CSSObject["maxHeight"];
}

type BorderWidth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10;

export interface BorderType {
  /** sets the width of an element's four borders */
  borderWidth?: BorderWidth;
  /** sets the style of an element's four borders */
  borderStyle?: CSSObject["borderStyle"];
  /** sets the color of an element's four borders */
  borderColor?: ColorVariants;
  /** defines the radius of the div's corners */
  borderRadius?: CSSObject["borderRadius"];

  /** sets the width of an element's top border */
  borderTopWidth?: BorderWidth;
  /** sets the style of an element's top border */
  borderTopStyle?: CSSObject["borderTopStyle"];
  /** sets the color of an element's top border */
  borderTopColor?: ColorVariants;
  /** defines the radius of the div's top left corner */
  borderTopLeftRadius?: CSSObject["borderTopLeftRadius"];
  /** defines the radius of the div's top right corner */
  borderTopRightRadius?: CSSObject["borderTopRightRadius"];

  /** sets the width of an element's bottom border */
  borderBottomWidth?: BorderWidth;
  /** sets the style of an element's bottom border */
  borderBottomStyle?: CSSObject["borderBottomStyle"];
  /** sets the color of an element's bottom border */
  borderBottomColor?: ColorVariants;
  /** defines the radius of the div's bottom left corner */
  borderBottomLeftRadius?: CSSObject["borderTopLeftRadius"];
  /** defines the radius of the div's bottom right corner */
  borderBottomRightRadius?: CSSObject["borderTopRightRadius"];

  /** sets the width of an element's left border */
  borderLeftWidth?: BorderWidth;
  /** sets the style of an element's left border */
  borderLeftStyle?: CSSObject["borderLeftStyle"];
  /** sets the color of an element's left border */
  borderLeftColor?: ColorVariants;

  /** sets the width of an element's right border */
  borderRightWidth?: BorderWidth;
  /** sets the style of an element's right border */
  borderRightStyle?: CSSObject["borderRightStyle"];
  /** sets the color of an element's right border */
  borderRightColor?: ColorVariants;

  /** sets the width of an element's four borders on hover */
  hoverBorderWidth?: BorderWidth;
  /** sets the style of an element's four borders on hover */
  hoverBorderStyle?: CSSObject["borderStyle"];
  /** sets the color of an element's four borders on hover */
  hoverBorderColor?: ColorVariants;
  /** defines the radius of the div's corners on hover */
  hoverBorderRadius?: CSSObject["borderRadius"];

  /** adds shadow effects around the element's frame */
  boxShadow?: CSSObject["boxShadow"];
}

export interface OverflowType {
  /** specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area */
  overflow?: CSSObject["overflow"];
  /** specifies whether to change the overflow of content just horizontally */
  overflowX?: CSSObject["overflowX"];
  /** specifies whether to change the overflow of content just vertically */
  overflowY?: CSSObject["overflowY"];
  /** specifies the scrolling method for the content */
  overflowAnchor?: CSSObject["overflowAnchor"];
}

export interface BackgroundType {
  /** sets the background color of an element */
  bgColor?: ColorVariants | "transparent" | "inherit";
  /** sets the background color of an element on hover */
  hoverBgColor?: ColorVariants | "transparent";
  /** sets a background image for the element */
  backgroundImage?: CSSObject["backgroundImage"];
  /** specifies the size of the background image */
  backgroundSize?: CSSObject["backgroundSize"];
  /** specifies if/how a background image will be repeated */
  backgroundRepeat?: CSSObject["backgroundRepeat"];
  /** sets the starting position of a background image */
  backgroundPosition?: CSSObject["backgroundPosition"];
}

export interface VisibilityType {
  /** sets the opacity level for an element */
  opacity?: CSSObject["opacity"];
  /** specifies the stack order of an element */
  zIndex?: CSSObject["zIndex"];
  /** specifies if the div should be invisible */
  invisible?: boolean;
}

export interface InteractionType {
  /** controls whether the user can select text */
  userSelect?: CSSObject["userSelect"];
  /** sets the mouse cursor to show when the mouse pointer is over an element. */
  cursor?: CSSObject["cursor"];
  /** sets  how the pointer should react when the pointer is over an element */
  pointerEvents?: CSSObject["pointerEvents"];
}
