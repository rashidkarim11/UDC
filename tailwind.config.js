/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fffff'
      },

      fontFamily: {
        custom: ['Cabin', 'sans']
      },

      screens: {
        tablet: '876px',
        xs: '475px'
      }
    }
  },
  plugins: []
}
