/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["yellow", "soft-red"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(213, 9%, 39%)",
        "dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 67%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
      },
      screens: {
        md: "750px",
        "md-max": { max: "750px" },
        l: "910px",
      },
    },
    fontFamily: {
      barlow: "Barlow, sans-serif;",
      fraunces: "Fraunces, serif",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
