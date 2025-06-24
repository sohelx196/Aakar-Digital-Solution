/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
  extend: {
    animation: {
      inputHighlighter: 'inputHighlighter 0.3s ease',
    },
    keyframes: {
      inputHighlighter: {
        '0%': { background: '#5264AE', width: '100px' },
        '100%': { background: 'transparent', width: '0' },
      },
    },
  },
},

    extend: {
       fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'], 
        cabin : ['Cabin', 'sans-serif'],
        saira: ['Saira', 'sans-serif'],
      },
    },
  },
  plugins: [],
}