import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0b1220", soft: "#1f2937" },
        brand: { DEFAULT: "#4f46e5", dark: "#4338ca", light: "#c7d2fe", soft: "#eef2ff" },
        paper: "#f8fafc",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(11, 18, 32, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
