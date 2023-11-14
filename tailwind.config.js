/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts}'],
  theme: {
    extend: {
      animationDelay:{
        '1': '0.5s',
        '2': '1s',
        '3': '1.5s',
        '4': '2s' 
      },
      fontFamily: {
        'omyu': ['omyu_pretty', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};

