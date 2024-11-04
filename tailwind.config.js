/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "drop-in-left": "dropInLeft 1s ease-out forwards",
        "drop-in-right": "dropInRight 1s ease-out forwards",
        "drop-in-up": "dropInUp 1s ease-out forwards",
        "drop-in-down": "dropInDown 1s ease-out forwards",
        "drop-in": "dropIn 0.5s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-in-out forwards",
      },
      keyframes: {
        dropInLeft: {
          "0%": { transform: "translateX(-200px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        dropInRight: {
          "0%": { transform: "translateX(200px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        dropInUp: {
          "0%": { transform: "translateY(200px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        dropInDown: {
          "0%": { transform: "translateY(-200px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        dropIn: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        primary: {
          50: "#F59E0B",
        },
        secondary: {
          50: "#EF4444",
          gray: "#6B7280",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        amber: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          600: "#D97706",
          700: "#B45309",
        },
        success: {
          emerald: "#047857",
          50: "#DDEFED",
          100: "#E6F7F1",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          600: "#059669",
        },
        danger: {
          red: "#B91C1C",
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          600: "#F87171",
        },
        screens: {
          mobile: { max: "767px" },
          tablet: { min: "768px", max: "1023px" },
          laptop: { min: "1024px", max: "1279px" },
          largeLaptop: { min: "1280px", max: "1535px" },
          desktop: { min: "1536px" },
          largeDesktop: { min: "1536px", max: "3072px" },
        },
      },
    },
  },
  plugins: [],
};
