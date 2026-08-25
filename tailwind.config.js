/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: 'rgb(0, 0, 0)',
        'dark-green': 'rgb(30, 37, 31)',
        'dark-green-50': 'rgba(30, 37, 31, 0.5)',
        beige: 'rgb(243, 242, 239)',
        'beige-50': 'rgba(243, 242, 239, 0.5)',
        'beige-40': 'rgba(243, 242, 239, 0.4)',
        white: 'rgb(255, 255, 255)',
        yellow: 'rgb(228, 235, 121)',
        gray: '#BEBCB4',
      },
      fontFamily: {
        'matter': ['Matter Regular', 'sans-serif'],
        'matter-mono': ['Matter Mono Regular', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        'tablet': '810px',
        'desktop': '1200px',
      },
      letterSpacing: {
        'tight': '-0.025em',
      },
    },
  },
  plugins: [],
}

