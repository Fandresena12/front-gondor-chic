/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f1dbc8",
        secondary: "#453F3A",
        text: "#4B3F39",
        red: "#BF2B2B",
      },
      fontFamily: {
        serif: ["var(--font-hylia-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
