module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        reckless: ['reckless-light', 'palatino', 'Garamond', 'Georgia', 'serif'],
      },
      colors: {
        primary: "#6b6d7c",
        secondary: "#2bcea0",
        highlights: "#a03120",
      },
      padding: {
        body: "30%",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
  },
  plugins: [],
};
