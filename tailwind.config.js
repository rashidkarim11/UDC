/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        nohemi: ['Nohemi', 'sans-serif'],
        usual: ['usual', 'sans-serif']
      },
      colors: {
        background: '#fffff',
        alpha: '#181717'
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        marquee: 'marquee 20s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
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
