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
        amber: {
          150: "#EDECE6",
          250: "#E0E0E0",
          350: "#DDE2E5",
        },
        grey: {
          1: "#202020",
          2: "#919191",
          3: "#333",
          4: "#1a1a1a",
          5: "#252525",
          6: "#f4f4f4",
          7: "#dedede",
        },
        main: {
          DEFAULT: "#FFCE45",
          red: "#A10035",
        },
        "black-50": "rgba(0, 0, 0, 0.5)",
        red: {
          light: "#a50000",
          bold: "#720000",
        },
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
