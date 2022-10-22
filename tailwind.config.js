/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./dashboard_components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'c1': '#FFFFFF',
        'c2': '#003399',
        'c3': '#3366CC',
        'c4': '#6699FF',
      }
    },
  },
  plugins: [],
}
