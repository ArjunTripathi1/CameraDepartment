/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        hexa:{
         50: "#082C56"
         
        },
        blues : {
          50: "#061A34"
        },
      }
    },
  },
  plugins: [],
}
