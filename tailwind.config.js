/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'Primary': '#C92071',
        'dark-gray-2':'#474747',
        'dark-gray': '#1F1F1F',
      },
    },
  },
  plugins: [],
};