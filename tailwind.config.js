/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('./src/assets/hero.jpg')",
      },
    },
    screens: {
      mobile: "0px",
      medium: "575px",
      tablet: "768px",
      desktop: "1024px",
      desktopLg: "1624px",
  },

  },
  plugins: [],
}