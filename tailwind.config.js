/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl' : '3px 3px #ff1e1e80',
      }
    },
    fontFamily: {
      'prime' : ['Courier Prime', 'monospace']
    }
  },
  plugins: [],
}

