const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary': '#00bfe6',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
    },
    extend: {
    width: {
      '105': '30rem',
      '108': '34rem'
    }
    }
   // backgroundColor: theme => ({
   //   ...theme('colors'),
   //   'primary': '#00bfe6',
   //  })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
