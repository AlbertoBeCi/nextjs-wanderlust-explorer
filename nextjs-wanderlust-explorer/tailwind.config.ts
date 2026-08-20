import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D2C33",
          elevated: "#123841",
        },
        secondary: "#FF9D42",
        surface: "#F4F1EA",
        neutral: "#1A1A1A",
        danger: "#E11D48",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
};

export default config;
