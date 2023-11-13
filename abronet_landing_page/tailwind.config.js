/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#01890D',
        'secondary': "#FCFCFC",
        'teritiary':'#FCFCFC00'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

