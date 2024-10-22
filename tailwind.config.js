/** @type {import('tailwindcss').Config} */
const {nextui, colors} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#202020",
        'primary': "#003285",
        'secondary': "#2A629A",
        'third': "#FF7F3E",
        'fourth': "#FFDA78",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

