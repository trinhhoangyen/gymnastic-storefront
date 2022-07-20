module.exports = {
  content: [],
  theme: {
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    fontFamily: {},
    boxShadow: {
      "3xl": "0px 5px 10px rgba(204, 204, 204, 0.1)",
    },
    extend: {
      spacing: {
        "49/100": "49%",
        "686/16": "686px",
      },
      colors: {
        "organic-150": "#A0AC9E",
        "amber-150": "#EDECE6",
        "amber-250": "#E0E0E0",
        "amber-350": "#DDE2E5",
        "grey-1": "#202020",
        "grey-2": "#919191",
        "grey-3": "#333",
        "grey-4": "#1a1a1a",
        "grey-5": "#252525",
        "grey-6": "#f4f4f4",
        "grey-7": "#dedede",
        "yellow-1": "#f5d42d",
        "black-50": "rgba(0, 0, 0, 0.5)",
        "red-light": "#a50000",
        "red-bold": "#720000",
      },
      minWidth: {
        xs: "280px",
        md: "320px",
      },
      boxShadow: {
        "3xl": "0px 10px 20px rgba(0, 0, 0, 0.1);",
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
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
