import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1F2326",
        dark1: "#81879D",
        primary: "#1663F9",
        secondary: "#FFDB8F",
        whiteF: "#FFFFFF",
        grayf1: "#F1F5F9",
        grayf2: "#F2F3F8",
        gray17: "#171717",
        grayea: "#EAEDF9",
        grayd9: "#D9D9D9",
        purpleButton: "#7751F7",
        white1: "#F0F0F0",
        purpleCircle: "#B7CEFF",
        gradientMix: "#5F45D9",
        blueIcon: "#349CFF",
        whiteIcon: "#F8F5EC",
      },
      backgroundImage: {
        gradientPink: "linear-gradient(158deg, #D555C7 14.46%, #F396EA 79.18%)",
        gradientMix:
          "linear-gradient(90deg, #5F45D9 -11.43%, #F961D8 47.91%, #FE9E66 92.14%)",
        gradientBlue: "linear-gradient(243deg, #9A40E4 7.82%, #5C70F4 74.31%)",
        gradientSlider:
          "linear-gradient(90deg, #3F56EE 10.5%, #5094FA 102.82%)",
        white: "#fff",
      },
      blur: {
        blurPx: "148.0087432861328px",
      },
      fontFamily: {
        sora: ["var(--font-sora)"],
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      spacing: {
        120: "7.5rem",
        70: "4.375rem",
        30: "1.875rem",
      },
      fontSize: {
        14: "0.9rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
