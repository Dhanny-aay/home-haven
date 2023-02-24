/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'lato':['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
          'vector':"url('/src/Vector.png')"
      },
    },
  },
  plugins: [],
}
