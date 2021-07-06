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
      '30': '7.6rem',
      '105': '30rem',
      '108': '34rem'
    },
    height: {
      'badge': '3.2rem',
      'phone': '500px'
    },
    minWidth: {
      '64': '150px',
      
     },
     maxWidth: {
      '700': '700px',
      '800': '800px',
      '900': '900px'
     },
     fontFamily: {
      'display': ["Whitney SSm A","Whitney SSm B","Microsoft Yahei","sans-serif"],
      'body': ['Open Sans'],
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
