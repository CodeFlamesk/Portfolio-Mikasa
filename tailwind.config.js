/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {

    extend: {
      lineHeight: {

      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',

      },
      borderColor: ['focus', 'valid', 'invalid'],
      outlineColor: ['focus', 'valid', 'invalid'],
      screens: {


      },
      fontSize: {

      },

      spacing: {

      },
      borderRadius: {

      },

    },

    colors: {


      "purple": "#A46286",
      "white": "#FFFFFF",
      "black": "#000000",
      "pink": "#F98C96",
      "brown-dark": "#BE9965",
      "brownl": "#FEDA7A",
      "blue-dark": '#0B4D72',
      "blue-lighte": '#106696',
      "blue-text": '#05C4F9',
      "orange-border": '#FFA718',
      "blue-input": '#0D87D0',

    },

  },
  plugins: [],
  variants: {},

}

