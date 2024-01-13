// @type {import('tailwindcss').Config}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-blue": "#0075BA",
        // "sidebar-blue-transparrent": "rgb(230,247,255)",
        // "sidebar-blue-transparrent": "rgba(0, 117, 186, 0.3)",
        "sidebar-blue-transparrent": "#C4ECFF",
      }
    },
  },
  plugins: [],
}

