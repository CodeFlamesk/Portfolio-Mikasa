/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      lineHeight: {},
      borderColor: ['focus', 'valid', 'invalid'],
      outlineColor: ['focus', 'valid', 'invalid'],
      screens: {},
      fontSize: {},
      spacing: {},
      borderRadius: {},
    },
    colors: {
      "light-col": "#222222",
      "purple": "#7247CA",
      "hov-purple": "#58379B",
      "br-gray": "#EAEAEE",
      "gray": "#F5F5F7",
      "apple-gray": "#A3AAAE",
      "gray-light": "#979797",
      "twitter": "#1DA1F2",
      "linkedIn": "#0A66C2",
      "black": "#000000",
      "icon-gray": "#555555",
      "white": "#FFFFFF",
      "facebook": "#17A9FD",
      "green": "#4CB051",
      "red": "#fe0000",
    },
  },
  plugins: [],
  variants: {},
};
