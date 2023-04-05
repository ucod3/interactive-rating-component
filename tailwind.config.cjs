/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      orange: 'hsl(25, 97%, 53%)',
      white: 'hsl(0, 0%, 100%)',
      'white-Light': 'hsla(0, 0%, 100%,0.1)',
      'gray-light': 'hsl(217, 12%, 63%)',
      'gray-medium': 'hsl(216, 12%, 54%)',
      'blue-dark': 'hsl(213, 19%, 18%)',
      'blue-very-dark': 'hsl(216, 12%, 8%)'
    },
    fontFamily: {
      overpass: "'Overpass', 'sans-serif'"
    },
    fontSize: {
      sm: ['14px', '22px'],
      base: ['15px', '24px'],
      base2: ['16px', '24px'],
      lg: ['24px', '30px'],
      xl: ['28px', '35x']
    },
    fontWeight: {
      normal: '400',
      bold: '700'
    },
    borderRadius: {
      none: '0',
      sm: '15px',
      lg: '30px',
      full: '9999px'
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
    extend: {}
  },
  plugins: []
};
