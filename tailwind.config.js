/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainTheme: '#5D9948',
        darkTheme: {
          100: '#3A3B56',
          200: '#312E2B',
        },
      },
    },
  },
  plugins: [require(`@tailwindcss/aspect-ratio`)],
};
