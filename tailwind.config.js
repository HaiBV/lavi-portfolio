/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "650px",
      md: "900px",
      lg: "1200px",
      xl: "1900px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        esko: ["var(--font-esko)"],
        gridular: ["var(--font-gridular)"],
        water: ["var(--font-water)"],
      },
      gridTemplateRows: {
        slide: "min-content 1fr min-content",
      },
    },
  },
  plugins: [],
};
