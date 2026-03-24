/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "#090e1c",
        primary: "#fe9832",
        secondary: "#fcc800",
        tertiary: "#a2aaff",
        glass: "rgba(30, 37, 59, 0.6)"
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"]
      }
    },
  },
  plugins: [],
}
