/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // overwrite tailwind classes
    extend: {
      //add on to tailwind classes
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.lightBlue,
      },
      fontFamily: {
        fun: ["Varela Round", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
