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
        "sidebar-blue-transparrent": "#C4ECFF",
      }
    },
  },
  plugins: [],
}

