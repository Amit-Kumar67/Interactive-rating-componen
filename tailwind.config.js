/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        orange:'hsl(25, 97%, 53%)',
        darkBlue:'hsl(213, 19%, 18%)',
        veryDarkBlue:'hsl(216, 12%, 8%)',
        containerBG:'#1f2630',
        lightgrey:'hsl(217, 12%, 63%)',
        mediumGrey:'hsl(216, 12%, 54%)',
        white:'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        overpass:['Overpass'],
      },
    },
  },
  plugins: [],
}
