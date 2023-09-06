/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        color: "#666",
        peru: {
          "100": "#bb7a3b",
          "200": "rgba(187, 122, 59, 0.3)",
        },
        gray: {
          "100": "#242732",
          "200": "rgba(0, 0, 0, 0.2)",
        },
        "gray-1": "#333",
        silver: "#b8b8b8",
        "gray-2": "#4f4f4f",
        antiquewhite: "#ebd7c4",
        darkgray: "#999",
        "gray-4": "#bdbdbd",
        "gray-3": "#828282",
      },
      fontFamily: {
        "roboto-slab": "'Roboto Slab'",
      },
    },
    fontSize: {
      "14xl": "33px",
      "41xl": "60px",
      "11xl": "30px",
      "16xl": "35px",
      "26xl": "45px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
