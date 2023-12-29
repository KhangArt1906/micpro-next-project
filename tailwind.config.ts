import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1F2326",
        dark1: "#81879D",
        primary: "#1663F9",
        grayf1: "#F1F5F9",
        grayf2: "#F2F3F8",
        gray17: "#171717",
      },
      backgroundImage: {
        gradientPink: "linear-gradient(158deg, #D555C7 14.46%, #F396EA 79.18%)",
      },
      fontFamily: {
        sora: ["var(--font-sora)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
