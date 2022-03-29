const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '100px',
        /* xs -- used when it is the max breakpoint to which an element should be altered it's behaviour */
        /* xsl (xs limited) -- used when an element has >2 breakpoints (at least one below it's min-width & one above it's max-width) to alter said element's behaviour */
        'xs': '260px',
        'xsl': {'raw': '(min-width: 260px) and (max-width: 639px)'},
        ...defaultTheme.screens,
      },
      keyframes: {
        'slide-up': {
          '0%': {transform: 'translateY(50%)'},
          '100%': {transform: 'translateY(0%)'}
        },
      },
      animation: {
        slide: '1s ease-in 0s 1 slide-up',
      }
    },
  },
  variants: {},
  plugins: [],
}
