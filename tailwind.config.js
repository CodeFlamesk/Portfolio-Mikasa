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

    },

  },
  plugins: [],
  variants: {},

}

