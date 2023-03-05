/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#191716",
        "secondary-dark": "#2B2826",
        "ongoing": "#FF6969",
      }
    },
  },
  plugins: [],
};
