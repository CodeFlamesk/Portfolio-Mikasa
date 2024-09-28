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

      "light-col": "#222222",
      "purple": "#7247CA",
      "br-grey": "#EAEAEE"


    },

  },
  plugins: [],
  variants: {},

}

