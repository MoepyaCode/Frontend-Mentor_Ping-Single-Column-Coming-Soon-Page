/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      screens: {
        xs: '375px',
      },
      fontFamily: {
        'libre-fanklin': ['Libre Franklin', 'sans-serif'],
      }
    },
  },
  plugins: [],
}