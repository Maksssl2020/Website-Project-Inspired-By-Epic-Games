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
        "custom-black": "#101010",
      },
      screens: {
        xs: "550px",
        "2xs": "549px",
        "3xs": "480px",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-once": "spin 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
