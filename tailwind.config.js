/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        fall: '#F4A261', // orange
        'fall-accent': '#bf3917', // burnt orange
        summer: '#fffbc7', // light yellow
        'summer-accent': '#f0c000', // yellow
        spring: '#b6fae5', // light green
        'spring-accent': '#25b88c', // green
        winter: '#264653', // blue
        'winter-accent': '#a4f8fc', // light blue
        neutral: '#f4f1de'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}
