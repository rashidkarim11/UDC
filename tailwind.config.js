/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 15s linear infinite'
      },
      fontFamily: {
        nohemi: ['Nohemi', 'sans-serif'],
        usual: ['usual', 'sans-serif']
      },
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
