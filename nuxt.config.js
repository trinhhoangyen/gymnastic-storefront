export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "TNT",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/custom-vue", "~/plugins/vuetify"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components/atoms/",
    "~/components/logos/",
    "~/components/molecules/",
    "~/components/organisms/",
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/axios",
  '@nuxtjs/vuetify'
],

  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
