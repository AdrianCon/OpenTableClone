/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        "2xsm": "10px",
        sxm: "12px",
        sm: "13px",
        reg: "15px",
        lg: "8px",
        "2xl": "22px",
        "3xl": "25px",
        "4xl": "32px",
        "5xl": "40px",
        "6xl": "50px",
        "7xl": "70px",
      }
    },
  },
  plugins: [],
}
