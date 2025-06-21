/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#084734",
        highlight: "#CEF17B",
        secondary: "#CEEDB2",
        dark: "#000000",
        light: "#FFFFFF",
      },
    },
  },
  darkMode: "class",
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
