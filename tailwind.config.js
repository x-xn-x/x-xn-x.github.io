/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.html',
    ],
    theme: {
      screens: {
        '3xs': '0px',
        '2xs': '160px',
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      extend: {
        colors: {
            'lime': '#00FF00',
        }
      },
    },
    plugins: [],
  }