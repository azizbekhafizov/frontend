/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "Nunito",
      },

      colors: {
        green: "rgba(6, 111, 20, 1)",
      },
      boxShadow: {
        lg: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
      },

      
    },
  },
  plugins: [],
};
