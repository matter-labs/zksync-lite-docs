require("dotenv").config();

const pageTitle = process.env.SITE_TITLE;
const pageDescription = process.env.SITE_DESCRIPTION;
const pageKeywords = process.env.SITE_KEYWORDS;

export default {
  ssr: false,
  target: "static",
  srcDir: "src/",
  env: {
    ...process.env,
  },

  /*
   ** Headers of the page
   */
  head: {
    name: pageTitle,
    titleTemplate: pageTitle,
    meta: [
      {
        hid: "keywords",
        name: "keywords",
        content: pageKeywords,
      },
      {
        hid: "author",
        name: "author",
        content: "https://matter-labs.io",
      },
      { "http-equiv": "pragma", content: "no-cache" },
      { "http-equiv": "cache-control", content: "no-cache , no-store, must-revalidate" },
      { "http-equiv": "expires", content: "0" },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: pageDescription,
      },
      {
        hid: "msapplication-TileImage",
        name: "msapplication-TileImage",
        content: "/icon.png",
      },
      { hid: "theme-color", name: "theme-color", content: "#4e529a" },
      {
        hid: "msapplication-TileColor",
        property: "msapplication-TileColor",
        content: "#4e529a",
      },
    ],
    link: [
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#8c8dfc",
    continuous: true,
  },

  /*
   ** Global CSS
   */
  css: ["@/assets/style/main.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/main"],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/eslint-module", ["@nuxtjs/dotenv", { path: __dirname }]],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "@nuxtjs/google-gtag",
    "@inkline/nuxt",
    "vue-scrollto/nuxt",
    "@nuxtjs/style-resources",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            iso: "en_US",
            file: "en/translations.json",
          },
        ],
        defaultLocale: "en",
        langDir: "./locales/",
      },
    ],
    [
      "nuxt-social-meta",
      {
        url: "https://zksync.io",
        title: pageTitle,
        site_name: pageTitle,
        description: pageDescription,
        img: "https://zksync.io/social.jpg",
        locale: "en_US",
        twitter: "@zksync",
        twitter_card: "https://zksync.io/social.jpg",
        themeColor: "#4e529a",
      },
    ],
    "@nuxtjs/sentry",
  ],
  i18n: {
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: require("./src/locales/en/translations.json"),
      },
    },
  },
  inkline: {
    config: {
      variant: "dark",
    },
  },
  styleResources: {
    scss: "@/assets/variables.scss",
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
    config: {
      tracesSampleRate: 1.0,
    },
  },
  "google-gtag": {
    id: process.env.GTAG_ID,
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
    },
    debug: false, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },
  /*
   ** Build configuration
   */
  build: {
    ssr: false,
    target: "static",
    extractCSS: {
      ignoreOrder: true,
    },
    extend(config) {
      config.node = {
        fs: "empty",
      };
    },
  },
  generate: {
    dir: "public",
    fallback: "404.html",
  },
  pwa: {
    workbox: {
      pagesURLPattern: "/_nuxt/",
    },
  },
};
