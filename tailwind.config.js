/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeyellow: "#f2e60d",
        themepurple: "#502ec3",
        themebutton: "#FFD700"
      },
    },
  },
  plugins: [],
}

