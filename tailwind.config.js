/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#96ffa0",

          secondary: "#b1f9f8",

          accent: "#4a31b7",

          neutral: "#2d1b2d",

          "base-100": "#2b2b46",

          info: "#8ba4f9",

          success: "#126434",

          warning: "#b99b04",

          error: "#e16256",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
