module.exports = {
  purge: [
    './dist/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '20': '20px'
    },
    extend: {
      colors: {
        'purple': {
          'dark': '#26004c',
          'darker': '#190033',
          'even-darker': '#0c0019'
        },
        'indigo': {
          'dark': '#373c63',
          'darker': '#292d4a',
          'even-darker': '#1b1e31',
          'even-darker2': '#0d0f18'
        }
      },
      height: {
        'full1.5': '150%',
        'full2': '200%',
        'full2.5': '250%',
      },
      margin: {
        '100': '25rem',
        '120': '27.5rem',
        '130': '30rem',
        '0.25': '0.062rem',
        '0.2': '0.02rem',
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
    extend: {
      borderWidth: ['hover', 'focus']
    },
  },
  plugins: [],
}
