/** @type {import('tailwindcss').Config} */
import _defaultTheme from 'tailwindcss/defaultTheme';


export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '420px',
      ..._defaultTheme.screens,
    },
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
    },
  },
  plugins: [require(`@tailwindcss/aspect-ratio`)],
};
