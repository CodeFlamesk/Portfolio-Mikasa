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
      screens: {
        'h-850': { 'raw': '(max-height: 850px)' },
        'h-720': { 'raw': '(max-height: 719px)' },
      },
      lineHeight: {

      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',

      },
      borderColor: ['focus', 'valid', 'invalid'],
      outlineColor: ['focus', 'valid', 'invalid'],


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
      "blue-card": '#0F97A0',
      "purple-card": '#302D62',
      "purple-blue-card": '#160F76',
      "grey-card": '#ECEEEE',
      "dark": '#131212',
      "brown-black": '#340C0C',
      "viber-bg": '#7B519D',
      "telegram-bg": '#2EA6D9',
      "pink-lighte": '#E3878B',




    },

  },
  plugins: [],
  variants: {},

}

