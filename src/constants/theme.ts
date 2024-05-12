import colors from "tailwindcss/colors";
import { SafelistConfig } from "tailwindcss/types/config";

const primary = colors.blue;
const secondary = colors.slate;
const success = colors.green;
const info = colors.cyan;
const error = colors.red;
const warning = colors.yellow;
const neutral = colors.neutral;

const createColors = (color: any, isDark = false) => ({
  default: isDark ? color[800] : color[700],
  container: isDark ? color[950] : color[200],
  on: {
    default: isDark ? color[50] : colors.white,
    container: isDark ? color[300] : color[900],
  },
});

export const LIGHT_THEME = {
  primary: createColors(primary),
  secondary: createColors(secondary),
  success: createColors(success),
  info: createColors(info),
  error: createColors(error),
  warning: createColors(warning),
  neutral: createColors(neutral),
};

export const DARK_THEME = {
  primary: createColors(primary, true),
  secondary: createColors(secondary, true),
  success: createColors(success, true),
  info: createColors(info, true),
  error: createColors(error, true),
  warning: createColors(warning, true),
  neutral: createColors(neutral, true),
};

export const TAILWIND_EXTEND = {
  colors: { light: LIGHT_THEME, dark: DARK_THEME },
  spacing: { xs: "4px", sm: "8px", md: "10px", lg: "12px", xl: "16px" },
  borderWidth: { btn: "1px", card: "1px", divider: "1px" },
  borderRadius: { xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "10px" },
  transitionDuration: { fast: "250ms", medium: "500ms", slow: "750ms" },
  brightness: { hover: "1.31", disabled: "0.69" },
  scale: { 96: ".96" },
};

const createSafeList = (): SafelistConfig[] => {
  const safelist = [
    "border-width-btn",
    "border-width-card",
    "border-width-divider",
    "duration-fast",
    "duration-medium",
    "duration-slow",
    "brightness-hover",
    "brightness-disabled",
  ];
  // variants
  const variants = [
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "info",
    "neutral",
  ];
  // add to safelist
  for (const color of variants) {
    safelist.push(`text-${color}`);
    safelist.push(`text-${color}-container`);
    safelist.push(`text-on-${color}`);
    safelist.push(`text-on-${color}-container`);
    safelist.push(`bg-${color}`);
    safelist.push(`bg-${color}-container`);
    safelist.push(`border-${color}`);
    safelist.push(`btn-${color}`);
    safelist.push(`btn-${color}-outline`);
    safelist.push(`fill-${color}`);
  }
  // spacing & border-radius
  const spacing = ["xs", "sm", "md", "lg", "xl"];
  // add to safelist
  for (const space of spacing) {
    safelist.push(`p-${space}`);
    safelist.push(`px-${space}`);
    safelist.push(`py-${space}`);
    safelist.push(`m-${space}`);
    safelist.push(`mx-${space}`);
    safelist.push(`my-${space}`);
    safelist.push(`rounded-${space}`);
  }

  return safelist;
};

export const SAFE_LIST = createSafeList();
