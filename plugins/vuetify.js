// src/plugins/vuetify.js
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        anchor: "#8c9eff",
      },
      dark: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        anchor: "#8c9eff",
      },
    },
  },
});
