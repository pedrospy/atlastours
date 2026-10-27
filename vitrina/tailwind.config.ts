import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0c1222", soft: "#1e293b" },
        brand: { DEFAULT: "#0f766e", dark: "#115e59", light: "#99f6e4", soft: "#f0fdfa" },
        accent: { DEFAULT: "#f59e0b", soft: "#fef3c7" },
        paper: "#f8fafc",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(12, 18, 34, 0.18)",
        glow: "0 20px 60px -20px rgba(15, 118, 110, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
