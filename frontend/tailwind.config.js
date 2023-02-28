/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    'brand': {
      light: '#8CC1DC', 
      DEFAULT: '#3399CC',
      dark: '#1271A0'

    },
    extend: {},
  },
  plugins: [],
}
