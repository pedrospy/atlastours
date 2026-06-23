import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#faf6f0",
          100: "#f3ebe0",
          200: "#e8d9c4",
          300: "#d9bf9e",
          400: "#c99d6e",
          500: "#b87d4a",
          600: "#a6653d",
          700: "#8a5034",
          800: "#714230",
          900: "#5d3729",
        },
        terracotta: {
          DEFAULT: "#b85c38",
          dark: "#8f4528",
          light: "#d4784a",
        },
        gold: {
          DEFAULT: "#c9a227",
          dark: "#a6851f",
          light: "#e0bc4a",
          muted: "#d4c4a0",
        },
        oasis: {
          DEFAULT: "#1e5c4a",
          dark: "#0f3d30",
          light: "#2d7a62",
        },
        zellige: {
          DEFAULT: "#1a4a6e",
          dark: "#0f2d42",
          light: "#2a6a96",
        },
        burgundy: {
          DEFAULT: "#4a1f1f",
          dark: "#2d1212",
          light: "#6b3333",
        },
        midnight: {
          DEFAULT: "#2c1810",
          soft: "#3d2418",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(44,24,16,0.88) 0%, rgba(74,31,31,0.65) 45%, rgba(30,92,74,0.45) 100%)",
        "moroccan-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.07'%3E%3Cpath d='M30 0l5 10 10 5-10 5-5 10-5-10-10-5 10-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "gold-gradient":
          "linear-gradient(135deg, #c9a227 0%, #e0bc4a 50%, #c9a227 100%)",
        "warm-gradient":
          "linear-gradient(180deg, #faf6f0 0%, #f3ebe0 100%)",
      },
      boxShadow: {
        gold: "0 4px 24px -4px rgba(201, 162, 39, 0.25)",
        card: "0 8px 32px -8px rgba(44, 24, 16, 0.12)",
        "card-hover": "0 16px 48px -12px rgba(44, 24, 16, 0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
