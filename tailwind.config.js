/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // La Petit Fleur — dusty peach, caramel & warm cream vintage palette
        brand: {
          dark: '#34302A',      // primary ink / body text
          night: '#211D17',     // deepest backgrounds (loader, hero, footer)
          gold: '#C9956B',      // signature accent (dusty peach / caramel)
          deep: '#9A6A45',      // darker accent for text & hairlines on white
          champagne: '#F6F1E8', // soft blush-cream section background
          red: '#B5654D',       // highlight / notification accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Jost', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
