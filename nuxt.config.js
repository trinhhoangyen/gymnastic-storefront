export default {
  target: "server",
  generate: {
    fallback: true,
  },
  server: {
    port: 4000,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MEDIFITNESS - Sản phẩm chất lượng cao",
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
  css: [
    "~/assets/css/tailwind.css",
    "swiper/swiper-bundle.css",
    "~/assets/scss/styles.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/custom-vue"],

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
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/axios"],

  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
