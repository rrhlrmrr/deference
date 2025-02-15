const colors = require("tailwindcss/colors");

const dark = {
  300: "#E8E2F4",
  400: "#C6BED9",
  500: "#9081B0",
  600: "#675788",
  700: "#453763",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "12rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    backgroundImage: {
      dreamplus: "url('/img/dreamplus.jpg')",
    },
    extend: {
      colors: {
        dark: dark,
        gray: "#D7DFE0",
        sky: colors.sky,
        stone: colors.stone,
        neutral: colors.neutral,
        slate: colors.slate,
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1118px" },
      sm: { max: "590px" },
    },
    fontFamily: {
      secondary: ["Fira Code", "monospace"],
    },
  },
  plugins: [],
};
