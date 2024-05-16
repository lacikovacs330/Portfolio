const { width } = require('@fortawesome/free-brands-svg-icons/fa42Group');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        fullWidth: {
          '0%': {
            width: '0',
          },
          '100%': {
            width: 'var(--width)',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-delay': 'fadeIn 0.5s ease-in-out 0.5s forwards',
        'loader': 'fullWidth 2s ease-in-out forwards',
      },
      boxShadow: {
        "main": "0px 8px 24px rgba(149,157,165, 0.2)",
      }
    },
  },
  plugins: [],
};
