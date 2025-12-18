import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#2563eb",
    600: "#1e40af",
    700: "#1e3a8a",
    800: "#172554",
    900: "#0b1220"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
