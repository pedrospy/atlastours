import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0f0e1a", soft: "#1e1b3a" },
        brand: { DEFAULT: "#4f46e5", dark: "#4338ca", light: "#c7d2fe", soft: "#eef2ff" },
        accent: { DEFAULT: "#f97316", dark: "#ea580c", soft: "#fff7ed" },
        paper: "#f8f8fc",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(15, 14, 26, 0.18)",
        glow: "0 24px 70px -24px rgba(79, 70, 229, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
