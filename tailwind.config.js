const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      recap: {
        blue: '#583cd4',
      },
      white: colors.white,
      gray: colors.coolGray,
      black: colors.black,
      red: colors.rose,
      transparent: 'transparent',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
