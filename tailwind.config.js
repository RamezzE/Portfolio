/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'xs' : '360px',
      'sm' : '480px',
      'md' : '768px',
      'lg' : '976px',
      'xl' : '1440px',
    },
    extend: {
      fontFamily: {
        robotoMono: ['"Roboto Mono"', 'monospace'],
        rubik: ['"Rubik"', 'sans-serif'],
      },
      colors: {
        primary: '#FFF',
        secondary: '#51bfff',
        // secondary: '#d1d5d5',
        bgColor: '#222222'
      }
    },
  },
  plugins: [],
}
