module.exports = {
  content: [],
  theme: {
    borderRadius: {},
    fontFamily: {},
    boxShadow: {
    },
    extend: {
      spacing: {
        25: "100px",
        "686/16": "686px",
      },
      colors: {
        "grey-1": "#202020",
        "grey-2": "#919191",
        "yellow-1": "#f5d42d",
      },
    },
  },
  variants: {
    backgroundImage: ["responsive", "hover"],
    visibility: ["responsive", "group-hover"],
    opacity: ["responsive", "group-hover"],
    borderWidth: ["first-child"],
    display: ["responsive", "important"],
    fontWeight: ["hover"],
    cursor: ["hover"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
