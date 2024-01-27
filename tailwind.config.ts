/** @type {import('tailwindcss').Config} */
export default {
  safelist: ['font-primary', 'font-secondary'],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Raleway", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      }
    }
  }
}