const plugin = require("tailwindcss/plugin");
const phrasesConfig = require("./utils.tailwind.config.js");

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(phrasesConfig.utilities);
    }),
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: phrasesConfig.keyframes,
      animation: phrasesConfig.animation,
      screens: {
        xs: "23.438rem",
        desktop: "56.25rem", //900px
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25rem",
      },
      spacing: {
        0.5: `${2 / 16}rem`,
        100: `${450 / 16}rem`,
        110: `${500 / 16}rem`,
        120: `${550 / 16}rem`,
        130: `${600 / 16}rem`,
        140: `${650 / 16}rem`,
        150: `${700 / 16}rem`,
        160: `${750 / 16}rem`,
        170: `${800 / 16}rem`,
        240: `${960 / 16}rem`, //960px
      },
      colors: {
        themePink: "#FF3399",
        themePurple: "#7733FF",
        themeBlue: "#3399FF",
        themeDarkBlue: "#151B38",
      },
      width: {
        7.5: `${30 / 16}rem`,
        24: `${100 / 16}rem`,
        34: `${544 / 16}rem`,
        100: `${616 / 16}rem`,
        "80vh": "80vh",
        "100vh": "100vh",
      },
      minHeight: {
        500: `${500 / 16}rem`,
      },
      minWidth: {
        18: `${288 / 16}rem`,
      },
      maxWidth: {
        240: `${960 / 16}rem`, //960px
      },
      inset: {
        sticky: "1px",
      },
      boxShadow: {
        border: "0px 0px 3px",
      },
    },
  },
};
