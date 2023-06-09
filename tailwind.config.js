/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease forwards",
        slideIn: "slideIn 0.5s 0.3s ease forwards",
        ping: "ping 0.3s cubic-bezier(0, 0, 0.2, 1) backwards",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 0.75,
          },
        },
        slideIn: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(1.1)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
