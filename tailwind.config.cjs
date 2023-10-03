/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        main: `'Bricolage Grotesque', ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji`,
      },
      colors: {
        gx: {
          gray: {
            DEFAULT: "#919191",
            50: "#EDEDED",
            100: "#E3E3E3",
            200: "#CFCFCF",
            300: "#BABABA",
            400: "#A6A6A6",
            500: "#858585",
            600: "#666666",
            700: "#383838",
            800: "#262626",
            900: "#1A1A1A",
            950: "#131313",
          },
          rose: {
            50: "#fef1f9",
            100: "#ffe4f6",
            200: "#ffcaee",
            300: "#ff9edf",
            400: "#ff62c7",
            500: "#ff34ad",
            600: "#f21d91",
            700: "#d3036f",
            800: "#ae065b",
            900: "#900b4d",
            950: "#59002b",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
