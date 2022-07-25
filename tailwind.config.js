/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens : {
        "sm" : "480px"
      }
    },
    fontFamily : {
      Inter : ['Inter', 'sans-serif'],
      Open : ['Open Sans', 'sans-serif'],
      Poppins : ['Poppins', 'sans-serif']
    },
    
  },
  plugins: [],
}
