/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    boxShadow: {
      feature: "0px 24px 100px 0px rgba(22, 25, 50, 0.07)",
      clint: "0px 8px 40px 0px rgba(39, 35, 67, 0.08)",
    },
    extend: {
      colors: {
        primary: "#272343",
        secondary: "#F0F2F3",
        white: "#ffffff",
        shadow: "#E1E3E5",
        red: "#F05C52",
        featureText: "#9A9CAA",
        teal: "#007580",

        // ...
      },
    },
  },
  plugins: [],
};
