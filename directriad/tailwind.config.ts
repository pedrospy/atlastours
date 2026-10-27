import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0f172a", soft: "#1e293b" },
        brand: { DEFAULT: "#0d9488", dark: "#0f766e", light: "#5eead4" },
        sun: { DEFAULT: "#f59e0b", light: "#fde68a" },
        cream: "#fbfaf7",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(15, 23, 42, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
