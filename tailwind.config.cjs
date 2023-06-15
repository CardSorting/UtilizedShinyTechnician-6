module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      maxHeight: {
        '95': '95%', // Custom maxHeight class
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
