import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorat: ["Cormorant", "serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      screens: {
        tablet: {
          min: "641px",
          max: "991px",
        },
        mobile: {
          max: "640px",
        },
        toTable: {
          max: "991px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "6xl": "4rem",
      },
      colors: {
        capsil: {
          bg: "#F7F5E8",
          green: "#89B964",
          brown: "#341A19",
          gold: "#B98D58",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
