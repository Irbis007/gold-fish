/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: '#F9A43F',
        'accent-black': '#2a2a2a',
        // 'accent-black': '',
      }
    },
    fontFamily: {
      trebuchet: ["Trebuchet Ms", "sans-serif"],
    },
  },
  plugins: [],
};
