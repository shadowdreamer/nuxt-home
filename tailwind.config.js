const { blackA, green, grass, mauve,whiteA } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",],
  theme: {
    extend: {
      colors: {
        blackA,
        green,
        grass,
        mauve,
        whiteA,
        takane:'#a6126a',
        
      },
    },
  },
}