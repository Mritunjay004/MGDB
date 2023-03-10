/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    gridTemplateColumns: {
      "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
    },
  },
  plugins: [],
};
