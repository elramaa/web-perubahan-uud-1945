/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        brick: "#690000",
        lightbrick: "#a30c06",
        cream: "#ffdf94",
        darkcream: "#f4c78a",
      },
      fontFamily: {
        rumble: ["Rumble Brave"],
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
