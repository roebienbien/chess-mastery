/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        mainTheme: {
          50: '#5D9948',
          100: '#4D7F3C',
        },
        darkTheme: {
          dark: '#121212',
          lightDark: '#1c1c1c',
        },
      },
      backgroundImage: {
        // kingToKing: 'url(./assets/king-topple-king.jpg)',
      },
    },
  },
  plugins: [require(`@tailwindcss/aspect-ratio`)],
};
