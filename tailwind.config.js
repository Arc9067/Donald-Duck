/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        black: "#9DC0D4",
      },
      fontFamily: {
        ultra: ["serifPage", "serif"],
        holtwoodOneSC: ["serifPage", "serif"],
        freckleFace: ["serifPage", "serif"],
        titanOne: ["serifPage", "serif"],
        fredokaOne: ["serifPage", "serif"],
        timmana: ["serifPage", "serif"],
      },
    },
  },
  plugins: [],
};
