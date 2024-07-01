/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ed333a",
        secondary: "#132241",
      },
      fontFamily: {
        sans: ["Hanuman", ...defaultTheme.fontFamily.sans],
        koulen: ["Koulen", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        exhibition: "url(/src/assets/backgrounds/bg_exhibition.png)",
        "exhibition-sm": "url(/src/assets/backgrounds/bg_exhibition-sm.png)",
        schedule: "url(/src/assets/backgrounds/bg_schedule.png)",
        "schedule-sm": "url(/src/assets/backgrounds/bg_schedule-sm.png)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
