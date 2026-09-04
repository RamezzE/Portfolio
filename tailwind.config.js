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
        rubik: ['"Rajdhani"', 'sans-serif'],
        display: ['"Orbitron"', 'sans-serif'],
      },
      colors: {
        primary: '#EAF4FF',
        secondary: '#4dd8ff',
        bgColor: '#05070d',
        tertiary: '#1e88e5',
        accent: '#ffb020',
        panel: '#0a0e18',
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
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'drift': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-2%, 2%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'slide-up': 'slide-up 1s ease-out',
        'slide-in': 'slide-in 1s ease-out',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'drift': 'drift 40s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
