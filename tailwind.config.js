module.exports = {
  darkMode: "media",
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
     purple:"#6875F5",
    },
    extend: {},
  },

  plugins: [require("flowbite/plugin")],
};
