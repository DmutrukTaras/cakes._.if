import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fff7ee",
        milk: "#fffaf5",
        blush: "#f8d8d0",
        peach: "#ffd7bd",
        rose: "#b95f68",
        cocoa: "#573b34",
        sage: "#8b9a7d",
        honey: "#c89543",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(87, 59, 52, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
