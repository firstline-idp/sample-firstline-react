/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./src/**/*.{js,mjs,jsx,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },

    extend: {
      colors: {
        primary: colors.blue[500],
        "primary-hover": colors.blue[600],
        "primary-active": colors.blue[400]
      }
    }
  }
}
