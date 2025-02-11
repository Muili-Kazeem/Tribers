/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      tribePurplePrimary: '#9444CB',
      tribeOrange: '#EE7037',
      tribeBlack: '#1B1C1E',
      tribeBoldBlack: '#000000',
      tribeGrey_1: '#757575',
      tribeGrey_2: '#616161',
      tribeGrey_3: '#424242',
      tribeWhite: '#FFFFFF',
      tribeBorderGrey: '#E0E0E0',
    },
    fontFamily: {
      creatoDisplay: ['CreatoDisplay', 'serif'],
      sourceSans: ['Source Sans Pro', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui'),
  ]
}

