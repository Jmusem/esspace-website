/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1C",   // Dark perfume theme
        secondary: "#D4AF37", // Luxury gold accent
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}
