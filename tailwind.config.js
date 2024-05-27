/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'omyu': ['omyu_pretty', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};

