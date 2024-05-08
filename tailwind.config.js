/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffeed4",
          200: "#ffd9a8",
          300: "#ffbd70",
          400: "#ff9637",
          500: "#ff7d1a",
          600: "#f05b06",
          700: "#c74307",
          800: "#9e350e",
          900: "#7f2f0f",
          950: "#451405",
        },
        "grayish-blue": {
          400: "hsl(223, 64%, 98%)",
          500: "hsl(220, 14%, 75%)",
          600: "hsl(219, 9%, 45%)",
          700: "hsl(220, 13%, 13%)",
        },
      },
    },
  },
  plugins: [],
};
