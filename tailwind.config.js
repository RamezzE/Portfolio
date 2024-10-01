/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'xs' : '525px',
      'sm' : '625px',
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
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'slide-up': 'slide-up 1s ease-out',
        'slide-in': 'slide-in 1s ease-out',
      },
    },
  },
  plugins: [],
}
