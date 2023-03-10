/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }, keyframes : {
        '0% 100%': {
          opacity: 1
        },
        '50%': {
          opacity: .5
        }
      }
    },
  },
  plugins: [],
}
