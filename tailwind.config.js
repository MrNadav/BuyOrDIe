/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-lite': '#B61354',
        'red-lite-hover': '#9e114a',
        'blue-lite': '#007bffc'
      }
    },
  },
  plugins: [],
}

