/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      translate: {
        '-50%': '-50%',
      },
      fontSize: {
        '110': '110px',
        '21': '21px',
        '68': '68px',
      },
      colors: {
        'current': '#D0D1E7',
      },
      spacing: {
        '20': '20%',
        '10': '10%',
        '40': '40%',
        '90': '90%',
        '-1.75rem': '-1.75rem',
      }
    },
  },
  plugins: [],
};
