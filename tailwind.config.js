const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        extreme: "150px",
        extremer: "190px",
        extremerder: "220px",
      },
      keyframes: {
        "bounce-horizontal-right": {
          "0%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "bounce-horizontal-left": {
          "0%, 100%": {
            transform: "translateX(0) scale(-1)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(-25%) scale(-1)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-horizontal-right": "bounce-horizontal-right 1s linear infinite",
        "bounce-horizontal-left": "bounce-horizontal-left 1s linear infinite",
      },
      colors: {
        white: "#ffffff",
        laurel: {
          900: "#39493F",
          850: "#A5DFBC",
          800: "#759682",
          700: "#94BCA4",
          600: "#E6F3EB",
        },
        kumera: {
          900: "#402E13",
          800: "#7C5918",
          700: "#FF961B",
          600: "#FBD690",
          500: "#FFEDCA",
        },
        rose: {
          900: "#805246",
          800: "#CC7B69",
          700: "#F6A391",
          600: "#FFD7CE",
          500: "#F5EBE0",
        },
      },
      aspectRatio: {
        vertical: "3 / 4",
        productOfTheWeek: "1 / 1.1",
        logo: "3.6 / 1",
      },
      extend: {
        fontFamily: {
          noke: ["var(--font-noka)", ...fontFamily.sans],
          ivy: ["var(--font-ivy)", ...fontFamily.sans],
        },
      },
      boxShadow: {
        card: "0px 10px 60px 0px rgba(117, 150, 130, 0.15)",
      },
      inset: {
        0: "0%",
        "1/10": "10%",
        "1/5": "20%",
        "1/4": "25%",
        "1/3": "33%",
        "1/2": "50%",
        "2/3": "66%",
        "3/4": "75%",
        "4/5": "80%",
        "9/10": "90%",
      },
      gridTemplateColumns: {
        ProductPreview: "2fr 3fr 1fr",
      },
      width: {
        "1/24": "4.166666%",
        "2/24": "8.333333%",
        "3/24": "12.5%",
        "4/24": "16.666666%",
        "5/24": "20.833333%",
        "7/24": "29.166666%",
        "8/24": "33.333333%",
        "9/24": "37.5%",
        "10/24": "41.666666%",
        "11/24": "45.833333%",
        "13/24": "54.166666%",
        "14/24": "58.333333%",
        "15/24": "62.5%",
        "16/24": "66.666666%",
        "17/24": "70.833333%",

        "19/24": "79.166666%",
        "20/24": "83.333333%",
        "21/24": "87.5%",
        "22/24": "91.666666%",
        "23/24": "95.833333%",
        "24/24": "100%",
      },
    },
    screens: {
      sm: "312px", // Mobile
      md: "768px", // Mini Tablet
      lg: "1024px", // Tablet
      xl: "1262px", // Laptop
      "2xl": "1531px", //Desktop
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/forms"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "100%",
          },
          "@screen md": {
            maxWidth: "664px",
          },
          "@screen lg": {
            maxWidth: "854px",
          },
          "@screen xl": {
            maxWidth: "1144px",
          },
          "@screen 2xl": {
            maxWidth: "1333px",
          },
        },
      });
    },
  ],
};
