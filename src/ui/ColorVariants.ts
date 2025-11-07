export type CustomColors = "white" | "qonto";

export type ColorWeight =
  | 25
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type PrimaryColors =
  | "primary"
  | "primary-25"
  | "primary-50"
  | "primary-100"
  | "primary-200"
  | "primary-300"
  | "primary-400"
  | "primary-500"
  | "primary-600"
  | "primary-700"
  | "primary-800"
  | "primary-900";

export type SuccessColors =
  | "success"
  | "success-50"
  | "success-100"
  | "success-200"
  | "success-300"
  | "success-400"
  | "success-500"
  | "success-600"
  | "success-700"
  | "success-800"
  | "success-900";

export type SecondaryColors =
  | "secondary"
  | "secondary-25"
  | "secondary-50"
  | "secondary-100"
  | "secondary-200"
  | "secondary-300"
  | "secondary-400"
  | "secondary-500"
  | "secondary-600"
  | "secondary-700"
  | "secondary-800"
  | "secondary-900";

export type InteractiveColors =
  | "interactive"
  | "interactive-50"
  | "interactive-100"
  | "interactive-200"
  | "interactive-300"
  | "interactive-400"
  | "interactive-500"
  | "interactive-600"
  | "interactive-700"
  | "interactive-800"
  | "interactive-900";

export type InfoColors =
  | "info"
  | "info-50"
  | "info-100"
  | "info-200"
  | "info-300"
  | "info-400"
  | "info-500"
  | "info-600"
  | "info-700"
  | "info-800"
  | "info-900";

export type DangerColors =
  | "danger"
  | "danger-50"
  | "danger-100"
  | "danger-200"
  | "danger-300"
  | "danger-400"
  | "danger-500"
  | "danger-600"
  | "danger-700"
  | "danger-800"
  | "danger-900";

export type WarningColors =
  | "warning"
  | "warning-50"
  | "warning-100"
  | "warning-200"
  | "warning-300"
  | "warning-400"
  | "warning-500"
  | "warning-600"
  | "warning-700"
  | "warning-800"
  | "warning-900";

export type PurpleColors =
  | "purple"
  | "purple-50"
  | "purple-100"
  | "purple-200"
  | "purple-300"
  | "purple-400"
  | "purple-500"
  | "purple-600"
  | "purple-700"
  | "purple-800"
  | "purple-900";

export type DecorativeColorsLighter =
  | "decorativeBlueLighter"
  | "decorativeOrangeLighter"
  | "decorativeVioletLighter"
  | "decorativeYellowLighter"
  | "decorativeGreenLighter"
  | "decorativePinkLighter"
  | "decorativeCyanLighter"
  | "decorativeBrownLighter";

export type DecorativeColorsSoft =
  | "decorativeBlueSoft"
  | "decorativeOrangeSoft"
  | "decorativeVioletSoft"
  | "decorativeYellowSoft"
  | "decorativeGreenSoft"
  | "decorativePinkSoft"
  | "decorativeCyanSoft"
  | "decorativeBrownSoft";

export type DecorativeColorsSoftPickers = Exclude<
  DecorativeColorsSoft,
  "decorativeVioletSoft"
>;

export type DecorativeColorsMid =
  | "decorativeBlueMid"
  | "decorativeOrangeMid"
  | "decorativeVioletMid"
  | "decorativeYellowMid"
  | "decorativeGreenMid"
  | "decorativePinkMid"
  | "decorativeCyanMid"
  | "decorativeBrownMid";

export type DecorativeColorsDarker =
  | "decorativeBlueDarker"
  | "decorativeOrangeDarker"
  | "decorativeVioletDarker"
  | "decorativeYellowDarker"
  | "decorativeGreenDarker"
  | "decorativePinkDarker"
  | "decorativeCyanDarker"
  | "decorativeBrownDarker";

type DecorativeColors =
  | DecorativeColorsLighter
  | DecorativeColorsSoft
  | DecorativeColorsMid
  | DecorativeColorsDarker;

export type AutomationColors =
  | "automation"
  | "automation-50"
  | "automation-100"
  | "automation-200"
  | "automation-300"
  | "automation-400"
  | "automation-500"
  | "automation-600"
  | "automation-700"
  | "automation-800"
  | "automation-900"
  | "automation-gradient-background"
  | "automation-gradient-badge-indicator"
  | "automation-gradient-icon-bg";

export type MainColors =
  | "primary"
  | "success"
  | "secondary"
  | "interactive"
  | "danger"
  | "warning"
  | "purple"
  | "info"
  | "automation";

export type BrandColors = "brandBeige" | "brandFlashGreen" | "brandDeepBlue";

export type PlanColors = "plan-basic" | "plan-essential" | "plan-premium";

export type Colors =
  | CustomColors
  | PrimaryColors
  | SuccessColors
  | SecondaryColors
  | InteractiveColors
  | InfoColors
  | DangerColors
  | WarningColors
  | PurpleColors
  | BrandColors
  | DecorativeColors
  | AutomationColors
  | PlanColors;
