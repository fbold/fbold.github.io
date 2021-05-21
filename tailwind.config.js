module.exports = {
  purge: [],
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
    extend: {},
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {
      borderWidth: ['hover', 'focus']
    },
  },
  plugins: [],
}
