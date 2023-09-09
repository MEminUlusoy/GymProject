/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "orbitron": ['Orbitron', "sans-serif"],
        "f2": ['Calistoga', "cursive"],
        "f3": ['Parisienne', "cursive"],
        "f4": ['Roboto', "sans-serif"],
        "f5": ['Satisfy', "cursive"],
        "f6": ['Titan One', "cursive"],
        "f7": ['Ultra', "serif"],
        
      },
      flexGrow: {
        2: '2',
        3: "3",
        8: "8",
      },
      colors:{
        "g": "#66B932",
      },
    },
  },
  plugins: [],
}