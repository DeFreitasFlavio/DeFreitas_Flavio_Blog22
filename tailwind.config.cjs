/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        Blue: "#18a0fb",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        Title: "30px",
        Subtitle: "26px",
        Text: "20px",
        Form: "16px",
        Phone: "16px",
      },
      fontWeight: {
        Strong: "bold",
      },
      gridTemplateColumns: {
        Block: "repeat(4, 21%)",
      },
    },
    screens: {
      xs: { max: "480px" },
      ss: { max: "620px" },
      sm: { max: "768px" },
      md: { max: "1060px" },
      lg: { max: "1200px" },
      xl: { max: "1700px" },
    },
  },
  plugins: [],
};
