const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'jost': 'Jost, sans-serif',
        'fraunces': 'Fraunces, serif',
      },
      screens: {
        'xxs': '100px',
        /* xs -- used when it is the max breakpoint to which an element should be altered it's behaviour */
        /* xsl (xs limited) -- used when an element has >2 breakpoints (at least one below it's min-width & one above it's max-width) to alter said element's behaviour */
        'xs': '260px',
        'xsl': {'raw': '(min-width: 260px) and (max-width: 639px)'},
        ...defaultTheme.screens,
      },
    },
  },
  variants: {},
  plugins: [],
}
