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
      },
      fontFamily: {
        'signika-negative': ['Signika Negative', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
