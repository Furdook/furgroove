import type { Config } from "tailwindcss";

const config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      primary: {
        900: "#1D1527",
        800: "#332B3E",
        300: "#D9D1E2",
      },
      blue: "#97EFDB",
      pink: "#D25F90",
      yellow: "#E4B157",
      afterdark: {
        950: "#000",
        900: "#131316",
        800: "#1C1C21",
        700: "#26262C",
        600: "#2F3037",
        500: "#393A41",
      },
      accent: {
        500: "#5B89EA",
        400: "#A2BFFD",
        300: "#EFF2FF",
      },
    },
    screens: {
      md: "880px",
      lg: "1024px",
      sm: "640px",
    },
    borderRadius: {
      DEFAULT: "1rem",
      inner: "0.5rem",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
