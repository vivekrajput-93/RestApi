import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors : {
        darkBlue : "hsl(209, 23%, 22%)",
        veryDarkBlue : "hsl(207, 26%, 17%)",
        veryDarkText : "hsl(200, 15%, 8%)",
        darkGray : "hsl(0, 0%, 52%)",
        veryLightGray : "hsl(0, 0%, 98%)",
        white : "hsl(0, 0%, 100%)"

      }
    },
  },
  plugins: [],
};
export default config;
