import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)", ...fontFamily.sans],
        bitter: ["var(--font-bitter)", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray_light: "#E0E0E0",
        gray_medium: "#C2C2C2",
        gray_dark: "#536D7A",
        blue_dark: "#1D2F38",
        blue_light: "#AABCC5",
        blue_gray: "#768F9C",
        green: "#17A550",
        yellow: "#FFC728",
        pink_light: "#FFB6B6",
        pink: "#FFB8B8",
      },
    },
  },
  plugins: [],
} satisfies Config;
