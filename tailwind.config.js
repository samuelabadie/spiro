/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0953C2',
        'secondary-yellow': '#FCD034',
        'pastel-blue': 'rgba(9, 83, 194, 0.20)',
        'light-white': '#F8F8F8',
        'light-green': '#D1F1C8',
      },
      fontFamily: {
        'signika-negative': ['Signika Negative', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
