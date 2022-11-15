/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        'purple':'#A02279',
         'black':'#434343',
         'fade':'#d7d7d7',
         'dim':'#f1f3f9',
         'charcoal':'#1d1d1e'
      },
      fontFamily:{
          fo: ['Red Rose', 'cursive']
      }
    },
  },
  plugins: [],
}
