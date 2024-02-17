/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'pattern-side': "url('pattern-side-by-side.png')",
      },
    },
  },
  plugins: [],
};
