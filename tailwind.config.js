/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#678063',
          dark: '#d6e7d6',
        },
        secondary: {
          DEFAULT: '#565f54',
          dark: '#eef5ee',
        },
      },
      fontFamily: {
        'patua': ['"Patua One"', 'cursive'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
