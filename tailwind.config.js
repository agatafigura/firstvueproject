module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sage': '#5cba49',
        'dark-sage': '#50a340',
        'very-dark-sage': '#458c37',
        'medium-sage': '#9fc997',
        'light-sage': '#c4e0bf',
        'very-light-sage': '#e3fcde',
        'medium-light': '#c1f5b8',
        'brown': '#5c5132',
        'dark-brown': '#3d3620'

      },
      backgroundImage: {
        'leaves': "url(../assets/bg.jpg)"
      },
      screens: {
        'breakpoint': {'max': '893px'},
        'breakpoint2': {'min': '894px', 'max': '938px'},
        'breakpoint3': {'max': '760px'}
      },
      width: {
        '99vw': '99vw'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
