/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      emrald: '#99f6e4',
      teal: '#14b8a6',
    },
  },
  plugins: [],
}
