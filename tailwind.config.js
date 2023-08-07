/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      transitionDuration: {
        fast: "100ms",
        normal: "200ms",
        slow: "350ms",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
