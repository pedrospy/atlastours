import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#1c1917", soft: "#292524" },
        clay: { DEFAULT: "#c2410c", dark: "#9a3412", light: "#fdba74" },
        saffron: { DEFAULT: "#eab308", light: "#fef08a" },
        mint: { DEFAULT: "#047857", light: "#d1fae5" },
        sand: "#fdf8f1",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px -14px rgba(28, 25, 23, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
