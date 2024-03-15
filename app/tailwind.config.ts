import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      lg: "1200px",
      md: "840px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      primary: {
        900: "#1d1527",
        800: "#33283d",
      },
      pink: "#e25691",
      blue: "#77f2da",
      yellow: "#eeae43",
      white: "#e8e4dd",
    },
  },
} satisfies Config;

export default config;
