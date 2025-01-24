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
    extend: {
      colors: {
        dark: dark,
        gray: "#D7DFE0",
        sky: colors.sky,
        stone: colors.stone,
        neutral: colors.neutral,
        slate: colors.slate,
      },
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
      animation: {
        gradient: "gradientAnimation 50s ease infinite alternate",
        glitch: "glitch 725ms infinite",
      },
      keyframes: {
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        glitch: {
          "0%, 15%": {
            textShadow:
              "0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00",
          },
          "16%, 49%": {
            textShadow:
              "-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00",
          },
          "50%, 99%": {
            textShadow:
              "0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00",
          },
          "100%": {
            textShadow:
              "-0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #fffc00",
          },
        },
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1118px" },
        sm: { max: "590px" },
      },
      fontFamily: {
        secondary: ["Fira Code", "monospace"],
        primary: ["Work Sans", "sans-serif"],
      },
      boxShadow: {
        dropdown:
          "0px 59px 100px rgba(0, 0, 0, 0.25), 0px 44px 94px rgba(0, 0, 0, 0.15)",
      },
      spacing: {
        "bg-offset": "300px",
      },
    },
  },
  plugins: [],
};
