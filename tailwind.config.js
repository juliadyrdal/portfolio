/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        lighter: '#F4F6F8',
        light: '#CFE1E2',
        medium: '#1A7076'
      },
      secondary: '#3B4B5A',
      white: '#ffffffff',
      background: {
        beige: '#F6F6F6',
      },
      drops: '#0087B1',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['utile-display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
