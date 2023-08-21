const { lunaReact } = require("./src/theme/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {}
    },
  },
  darkMode: 'class',
  plugins: [lunaReact()],
  // presets: [require('./src/tailwind-preset')],
};
