module.exports = {
  content: [],
  theme: {
    borderRadius: {},
    fontFamily: {},
    boxShadow: {},
    extend: {
      spacing: {
        25: "100px",
        "686/16": "686px",
      },
      colors: {
        "grey-1": "#202020",
        "grey-2": "#919191",
        "grey-3": "#333",
        "grey-4": "#1a1a1a",
        "grey-5": "#252525",
        "yellow-1": "#f5d42d",
      },
      minWidth: {
        xs: "320px",
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
