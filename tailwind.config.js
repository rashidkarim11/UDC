/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fffff'
      },
      animation: {
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
