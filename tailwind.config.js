// @type {import('tailwindcss').Config}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-blue": "rgba(0, 117, 186, 1)",
        "sidebar-blue-transparrent": "#C4ECFF",
        "scrollThumb": "rgba(0, 117, 186, 0.8)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

