/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'move-top': 'move-top 20s normal linear infinite',
        'move-bottom': 'move-bottom 20s linear infinite'
      },

      fontFamily: {
        nohemi: ['Nohemi', 'sans-serif'],
        usual: ['usual', 'sans-serif']
      },
      colors: {
        background: '#fffff',
        alpha: '#181717',
        beta: '#B7B7B7'
      },

      keyframes: {
        'move-top': {
          '0%': {
            transform: 'translate(0, 0)'
          },
          '100%': {
            transform: 'translate(-100%, 0)'
          }
        },
        'move-bottom': {
          '0%': {
            transform: 'translate(100%, 0)'
          },
          '100%': {
            transform: 'translate(0, 0)'
          }
        }
      },

      screens: {
        tablet: '876px',
        xs: '475px'
      }
    }
  },
  plugins: []
}
