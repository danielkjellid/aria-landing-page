const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    fontFamily: false,
  },
  theme: {
    extend: {
      colors: {
        gray : {
          '50': '#f9fafb',
          ...colors.gray
        },
        blue: {
          '50': '#F7FAFC',
          ...colors.blue
        },
        red: {
          '50': '#fdf2f2',
          ...colors.red
        },
        brand: {
          '50': '#F4E5E2',
          '700': '#BC7243'
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  variants: {},
  plugins: [],
}
