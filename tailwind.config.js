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
      },
    },
  },
  plugins: [],
}