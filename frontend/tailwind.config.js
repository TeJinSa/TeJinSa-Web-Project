/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "url('./assets/header.png')",
      },
      fontFamily: {
        title: ['Gemunu Libre', 'sans-serif'],
      },
      textColor: {
        title: '#ffb03a',
      },
    },
  },
  plugins: [],
};
