/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.lightBlue,
      },
    },
  },
  plugins: [],
};
