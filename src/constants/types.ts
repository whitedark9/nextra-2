export type ColorValue = {
  default: string;
  container: string;
  on: { default: string; container: string };
};

export type ColorTheme = {
  primary: ColorValue;
  secondary: ColorValue;
  success: ColorValue;
  info: ColorValue;
  warning: ColorValue;
  error: ColorValue;
  neutral: ColorValue;
};

export type Variants =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "neutral";
