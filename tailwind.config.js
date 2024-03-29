/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        newGray: '#f5f5f5',
        hoverGreen: '#e2f5f2',
        borderGray: '#C7C7C7',
        newGreen: '#16B198',
        newDarkGray: '#888888',
        hoverGray: '#9B9B9B',
        regularText: '#333333'
      },
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif'], /*second one is for case when 1st is not supported*/
      }
    },
  },
  plugins: [],
}

