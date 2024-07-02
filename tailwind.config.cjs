/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#d83b42",
        secondary: "#132241",
        body: {
          DEFAULT: "#475569",
          light: "#475569",
          dark: "#e4e4e7",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        // koulen: ["koulen", ...defaultTheme.fontFamily.sans],
        hanuman: ["Hanuman", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        exhibition: "url(/src/assets/backgrounds/bg_exhibition.png)",
        "why-attend-us": "url(/src/assets/backgrounds/bg_why-attend-us.png)",
        schedule: "url(/src/assets/backgrounds/bg_schedule.png)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
