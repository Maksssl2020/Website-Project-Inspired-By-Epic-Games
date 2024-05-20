/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },

    extend: {
      colors: {
        "custom-emerald": "#38CCAE",
        "custom-white": "#ffffff",
        "custom-gray-100": "#aaaaae",
        "custom-gray-200": "#303034",
        "custom-gray-300": "#2c2c2f",
      },
      screens: {
        sx: "550px",
        "2xs": "549px",
        "3xs": "480px",
      },
    },
  },
  plugins: [],
};
