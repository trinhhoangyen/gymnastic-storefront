import { resolve } from "path";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "gymnastic-storefront",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/custom-vue"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components/logos/",
    "~/components/molecules/",
    "~/components/organisms/",
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/axios", "@nuxtjs/i18n"],

  alias: {
    i18n: resolve(__dirname, "./locales"),
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      onlyOnRoot: true,
    },
    defaultLocale: "vn",
    vueI18n: {
      fallbackLocale: "vn",
    },
    lazy: true,
    langDir: "locales",
    locales: [
      {
        code: "en",
        iso: "en",
        file: "./en",
      },
      {
        code: "vn",
        iso: "vn",
        file: "./vn",
        isCatchallLocale: true,
      },
    ],
    parsePages: false,
    pages: {
      about: {
        en: "/about",
        vn: "/about",
      },
    },
  },

  axios: {
    baseURL: "https://gymnastic-dev.azurewebsites.net",
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
