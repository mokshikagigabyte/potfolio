/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // App Router files
    "./pages/**/*.{js,ts,jsx,tsx}",   // Pages Router files
    "./components/**/*.{js,ts,jsx,tsx}" // Any components you create
  ],
  theme: {
    extend: {}, // Add custom colors, fonts, spacing here if needed
  },
  plugins: [],
}