/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-lite': '#dd1163cc',
        'blue-lite': '#007bffc'
      }
    },
  },
  plugins: [],
}

