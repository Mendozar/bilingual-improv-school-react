/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: "#9E1B32",
        amber: "#F2BC57",
        green: {
          accent: "#4ecf63"
        },
        yellow: {
          accent: "#ffd166"
        }
      },
      borderRadius: {
        'pill': '9999px',
      },
      boxShadow: {
        'button': '0 8px 15px rgba(0, 0, 0, 0.3)',
        'button-hover': '0 12px 20px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}