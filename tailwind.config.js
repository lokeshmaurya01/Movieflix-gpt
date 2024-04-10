/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "99vw": "99vw", // Custom width class
      },
    },
  },
  plugins: [],
};
