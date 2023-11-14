/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2eb174",
        secondary: "#33d16a",
        text1: "#EDEAF1",
        text2: "#ADAAB0",
        text3: "#9D9D9F",
        neutral900: "#100c0c",
        neutral800: "#161617",
        neutral700: "#181414",
        neutral600: "#30242c",
        neutralActive: "#302c2c"
      },
    },
  },
  plugins: [],
}
