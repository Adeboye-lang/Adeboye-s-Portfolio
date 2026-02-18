/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        purple: {
          400: '#c084fc',
          500: '#a855f7',
        },
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        caret: {
          '50%': {
            opacity: '0',
          },
        },
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'caret 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
}

