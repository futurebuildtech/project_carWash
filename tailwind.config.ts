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
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F9E2AF",
          dark: "#AA8A2E",
        },
        premium: {
          grey: "#666978",
          darkGrey: "#4a4d5a",
          lightGrey: "#8e91a1",
        }
      },
    },
  },
  plugins: [],
};
export default config;
