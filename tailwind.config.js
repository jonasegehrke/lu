/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'shrink-grow': {
          '0%': { transform: 'scale(100%)' },
          '50%': { transform: 'scale(90%)' },
          '100%': { transform: 'scale(100%)' },
        }
      },
    },
  },
  plugins: [],
}
