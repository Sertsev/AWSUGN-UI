/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', "sans-serif"],
      gothic: ['"Gothic A1"', "sans-serif"],
      montserrat: ['"Montserrat"', "sans-serif"],
      raleway: ['"Raleway"', "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      orange: "#F36F2E",
      deepOrage: "#ff9100",
    },
    extend: {},
  },

  plugins: [],
};
