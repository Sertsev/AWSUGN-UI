/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', "sans-serif"],
      gothic: ['"Gothic A1"', "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      orange: "#F36F2E",
    },
    extend: {},
  },

  plugins: [],
};
