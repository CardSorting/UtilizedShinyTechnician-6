/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      maxHeight: {
        '95': '95%',
      },
    },
  },
  variants: {},
  plugins: [],
};