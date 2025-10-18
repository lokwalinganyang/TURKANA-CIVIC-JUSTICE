/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- CRITICAL: Ensures it finds classes in your components
  ],
  theme: {
    extend: {
        colors: {
            'tcj-primary': '#004d40', // Dark Teal
            'tcj-secondary': '#ffc107', // Yellow/Gold
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
