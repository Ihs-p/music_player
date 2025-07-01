/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         keyframes: {
        scroll: {
          '0%': { transform: 'translatex(90%)' },
          '100%': { transform: 'translatex(-90%)' },
        },
      },
      animation: {
        scroll: 'scroll 13s linear infinite',
      },
    },
  },
  plugins: [],
}

