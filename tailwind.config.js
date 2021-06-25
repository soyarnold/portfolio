module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Space Grotesk"],
        hero: ["Special Elite"],
      },
      colors: {
        "gradient-color":
          "linear-gradient(180deg, rgba(236,72,153,1) 0%, rgba(245,158,11,1) 100%);",
      },
      boxShadow: {
        "white-shadow":
          "0 5px 25px -3px rgba(200, 200, 200, 0.08), 0 4px 6px -2px rgba(200, 200, 200, .05)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
