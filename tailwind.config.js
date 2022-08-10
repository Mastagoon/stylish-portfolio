/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#12203D",
        "primary-green": "#31E981",
        "light-green": "rgba(49, 233, 129, 0.6)",
        "light-gray": "rgba(255, 255, 255, 0.7)",
        "lighter-gray": "rgba(255, 255, 255, 0.4)",
        "semi-transparent": "rgba(18, 32, 61, .98)",
        "primary-blue": "rgba(83, 172, 255, 1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
