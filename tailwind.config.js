/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },
  important: true,
  plugins: [require("@headlessui/tailwindcss")],
};
