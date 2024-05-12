/** @type {import('tailwindcss').Config} */

import { SAFE_LIST, TAILWIND_EXTEND } from "./src/constants/theme";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./theme.config.tsx"],
  safelist: SAFE_LIST,
  theme: {
    extend: TAILWIND_EXTEND,
  },
  plugins: [],
  darkMode: "class",
};
