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
