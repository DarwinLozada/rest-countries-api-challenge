module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueBg: "hsl(207, 26%, 17%)",
        veryDarkBlueText: "hsl(200, 15%, 8%)",
        darkGrey: "hsl(0, 0%, 52%)",
        veryLightGrey: "hsl(0, 0%, 98%)",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
      fill: ["hover", "focus"],
    },
  },
  plugins: [],
};
