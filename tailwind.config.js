/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pacifico: ["var(--font-pacifico)"],
      },
      keyframes: {
        swing: {
          "20%": {
            transform: "rotate3d(0,0,1,15deg)",
          },
          "40%": {
            transform: "rotate3d(0,0,1,-15deg)",
          },
          "60%": {
            transform: "rotate3d(0,0,1,-10deg)",
          },
          "80%": {
            transform: "rotate3d(0,0,1,-5deg)",
          },
          to: {
            transform: "rotate3d(0,0,1,0deg)",
          },
        },
      },
      animation: {
        swing: "swing 2s ease-in infinite",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
};
