/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
}

