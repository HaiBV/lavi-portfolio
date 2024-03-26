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
      fontSize: {
        110: "110px",
        21: "21px",
        68: "68px",
      },
      colors: {
        current: "#D0D1E7",
      },
      spacing: {
        "20.4vh": "20.4vh",
        "21vh": "21vh",
        "18.4vh": "18.4vh",
      },
    },
  },
  plugins: [],
};
