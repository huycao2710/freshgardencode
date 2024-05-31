/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'logo-green': '#B9D431',
        'banner-black': '#4B494E',
        'about-content': '#4B494E',
      },
      fontFamily: {
        'playfairDisplay': ['Playfair Display',],
        'montserrat': ['Montserrat',],
      },
      spacing: {
        '55r': '55rem',
        '460px':'460px',
      }
    },
  },
  plugins: [],
}