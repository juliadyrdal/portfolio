/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      font: {
        primary: '#2D6E72',
        secondary: '#364870',
      },
      surface: {
        primary: '#CFE1E2',
        secondary: '#CFD5E2',
        light: '#F9F2EF',
      },
      black: '#2A3843',
      gray: '#7B9496',
      graydark: '#6F787E',
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
      sans: ['Inter', 'sans-serif'],
      serif: ['utile-display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
