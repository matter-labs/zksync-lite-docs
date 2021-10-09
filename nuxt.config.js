require('dotenv').config();

const pageTitle = process.env.SITE_TITLE;
const pageDescription = process.env.SITE_DESCRIPTION;
const pageKeywords = process.env.SITE_KEYWORDS;
const env = process.env.APP_ENV ?? 'dev';
const isProduction = env === 'prod';

export default {
  srcDir: 'src/',
  target: 'static',
  vue: {
    config: {
      productionTip: isProduction,
      devtools: !isProduction,
    },
  },

  telemetry: false,
  ssr: false,
  spa: true,
  static: true,
  env: {
    ...process.env,
  },

  /*
   ** Headers of the page
   */
  head: {
    name: pageTitle,
    titleTemplate: pageTitle,
    htmlAttrs: {
      lang: 'en',
      amp: 'true',
    },
    meta: [
      {
        name: 'seobility',
        content: '782740f1dfd8b20131dd892a71c3d72b',
      },
      {
        name: 'google-site-verification',
        content: 'hrWPMoXfTOG40VQGoOgWmIW4shMGIsObggR1BNBm5bg',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: pageKeywords,
      },
      {
        hid: 'author',
        name: 'author',
        content: 'https://matter-labs.io',
      },
      {
        httpEquiv: 'pragma',
        content: 'no-cache',
      },
      {
        httpEquiv: 'cache-control',
        content: 'no-cache , no-store, must-revalidate',
      },
      {
        httpEquiv: 'expires',
        content: '0',
      },
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: pageDescription,
      },
      {
        hid: 'msapplication-TileImage',
        name: 'msapplication-TileImage',
        content: '/favicon.ico',
      },
      {
        hid: 'msapplication-TileColor',
        property: 'msapplication-TileColor',
        content: '#4e529a',
      },
      { hid: 'theme-color', name: 'theme-color', content: '#4e529a' },
      {
        name: 'msapplication-TileColor',
        content: '#ffffff',
      },
      {
        name: 'msapplication-TileImage',
        content: '/ms-icon-144x144.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', type: 'image/x-icon', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', type: 'image/x-icon', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', type: 'image/x-icon', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', type: 'image/x-icon', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', type: 'image/x-icon', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', type: 'image/x-icon', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', type: 'image/x-icon', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', type: 'image/x-icon', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/x-icon', href: '/apple-icon-180x180.png' },
      { rel: 'icon', sizes: '192x192', type: 'image/png', href: '/android-icon-192x192.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/android-icon-36x36.png' },
      { rel: 'icon', sizes: '96x96', type: 'image/png', href: '/android-icon-96x96.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/android-icon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#8c8dfc',
    continuous: true,
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/style/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/main'],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/eslint-module', '@nuxtjs/style-resources', ['@nuxtjs/dotenv', { path: __dirname }]],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/google-gtag',
    '@inkline/nuxt',
    'vue-scrollto/nuxt',
    [
      'nuxt-social-meta',
      {
        url: 'https://zksync.io',
        title: pageTitle,
        site_name: pageTitle,
        description: pageDescription,
        img: 'https://zksync.io/social.jpg',
        locale: 'en_US',
        twitter: '@zksync',
        twitter_card: 'https://zksync.io/social.jpg',
        themeColor: '#4e529a',
      },
    ],
    '@nuxtjs/sentry',
  ],
  inkline: {
    config: {
      variant: 'dark',
    },
  },
  styleResources: {
    scss: '@/assets/variables.scss',
  },
  sentry: {
    disableServerSide: true,
    lazy: true,
    dsn: process.env.SENTRY_DSN,
    config: {
      tracesSampleRate: 1.0,
    },
  },
  'google-gtag': {
    id: process.env.GTAG_ID,
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
    },
    debug: !isProduction, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },
  /*
   ** Build configuration
   */
  build: {
    corejs: 3,
    ssr: false,
    target: 'static',
    extractCSS: {
      ignoreOrder: true,
    },
    extend (config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000;
      }
      config.node = {
        fs: 'empty',
      };
    },
    optimization: {
      nodeEnv: isProduction,
      minimize: isProduction,
    },
  },
  generate: {
    dir: 'public',
    fallback: '404.html',
    devtools: !isProduction,
  },
};
