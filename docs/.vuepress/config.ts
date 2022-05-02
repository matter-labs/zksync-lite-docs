import { defineConfig } from 'vuepress/config';
import footnote_plugin from 'markdown-it-footnote/dist/markdown-it-footnote.min.js';

export = defineConfig(_ctx => {
  return {
    evergreen: true,
    title: 'zkSync: secure, scalable crypto payments', // adding title gives us a header with search box
    description: 'zkSync is a user-centric zk rollup platform from Matter Labs (opens new window). It is a scaling solution for Ethereum, already live on Ethereum mainnet',
    dest: 'dist',
    markdown: {
      extendMarkdown: (md) => {
        md.use(footnote_plugin);
      },
      toc: { includeLevel: [1, 2, 3] },
    },
    plugins: {
      'fulltext-search': {},
      'vuepress-plugin-canonical': {
        baseURL: 'https://docs.zksync.io', // base url for your canonical link, optional, default: ''
        stripExtension: true, // strip '.html' , optional, default: false
      },
      sitemap: {
        hostname: 'https://docs.zksync.io',
      },
    },
    themeConfig: {
      repo: 'matter-labs/zksync-docs',
      editLinks: true,
      docsDir: 'packages/docs/docs',
      logo: '/LogotypeLight.svg',
      lastUpdated: 'Last Updated',
      nav: [
        {
          text: 'User Docs',
          link: '/userdocs/',
        },
        {
          text: 'Developer Docs',
          link: '/dev/',
        },
        {
          text: 'API Reference',
          link: '/api/',
        },
        {
          text: 'zkEVM',
          link: '/zkevm/',
        },
        {
          text: 'Contact and Media',
          link: '/contact.html',
        },
        {
          text: 'Uptime',
          link: '/uptime',
        },
        {
          text: 'v1.x',
          items: [
            {
              text: 'v2.0',
              link: 'https://v2-docs.zksync.io'
            },
            {
              text: 'v1.x',
              link: '/userdocs/'
            }
          ]
        }
      ],
      //displayAllHeaders: true,
      sidebar: {
        '/legal/': ['/legal/terms', '/legal/privacy'],
        '/userdocs/': [
          {
            title: 'Welcome to zkSync', // required
            path: '/userdocs/', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0, // optional, defaults to 1
          },
          {
            title: 'Overview', // required
            path: '/userdocs/intro.html', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Technology', // required
            path: '/userdocs/tech', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Security', // required
            path: '/userdocs/security', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Learn By Watching', // required
            path: '/userdocs/learnbywatching', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Wallets', // required
            path: '/userdocs/wallets', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Tokens & Fees', // required
            path: '/userdocs/tokens', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Decentralization', // required
            path: '/userdocs/decentralization', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Tokenomics', // required
            path: '/userdocs/tokenomics', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Smart contracts', // required
            path: '/userdocs/sc', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Privacy', // required
            path: '/userdocs/privacy', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Roadmap', // required
            path: '/userdocs/roadmap', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'FAQ', // required
            path: '/userdocs/faq', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'Tutorials', // required
            path: '/userdocs/tutorials', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
        ],
        '/dev': [
          {
            title: 'Introduction', // required
            path: '/dev/', // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
          },
          {
            title: 'Payments', // required
            path: '/dev/payments', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
            children: ['/dev/payments/basic', '/dev/payments/sending_transactions'],
          },
          {
            title: 'Security', // required
            path: '/dev/security', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
            children: ['/dev/security/approach', '/dev/security/bug-bounty', '/dev/security/disclosure', '/dev/security/bugs'],
          },
          {
            title: 'Smart contracts', // required
            path: '/dev/contracts/', // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
          },
          '/dev/nfts',
          '/dev/swaps',
          '/dev/events',
        ],
        '/api': [
          {
            title: 'Overview', // required
            path: '/api/', // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
            sidebarDepth: 0, // optional, defaults to 1
          },
          '/api/changelog',
          '/api/environments',
          '/api/events',
          {
            title: 'API v0.1', // required
            path: '/api/v0.1', // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'API v0.2', // required
            path: '/api/v0.2', // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
          },
          {
            title: 'JavaScript SDK', // required
            path: '/api/sdk/js', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/api/sdk/js/tutorial',
              '/api/sdk/js/providers',
              '/api/sdk/js/accounts',
              '/api/sdk/js/utils',
              '/api/sdk/js/nfts',
              '/api/sdk/js/types',
              '/api/sdk/js/browser-bundled',
            ],
          },
          {
            title: 'Rust SDK', // required
            path: '/api/sdk/rust', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: ['/api/sdk/rust/tutorial'],
          },
          {
            title: 'Java SDK', // required
            path: '/api/sdk/java', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: ['/api/sdk/java/tutorial', '/api/sdk/java/interfaces'],
          },
          {
            title: 'Swift SDK', // required
            path: '/api/sdk/swift', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: ['/api/sdk/swift/tutorial'],
          },
          {
            title: 'Python SDK', // required
            path: '/api/sdk/python', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: ['/api/sdk/python/tutorial'],
          },
          '/api/sdk/dart',
          {
            title: 'zkCheckout SDK', // required
            path: '/api/sdk/checkout', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/api/sdk/checkout/tutorial',
              '/api/sdk/checkout/checkout-manager',
              '/api/sdk/checkout/types',
              '/api/sdk/checkout/constants',
              '/api/sdk/checkout/protocol',
              '/api/sdk/checkout/appendix-a',
            ],
          },
          '/api/sdk/crypto',
        ],
        '/zkevm': [
          {
            title: 'zkEVM FAQ', // required
            path: '/zkevm/', // optional, which should be a absolute path.
            sidebarDepth: 2,
          },
        ],
      },
    },
    extraWatchFiles: ['.vuepress/config/**'],
    head: [
      ['script', { src: '/hack.js', defer: "defer" }, ''],
      ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      ['link', { rel: 'apple-touch-icon', sizes: '57x57', type: 'image/x-icon', href: '/apple-icon-57x57.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '60x60', type: 'image/x-icon', href: '/apple-icon-60x60.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '72x72', type: 'image/x-icon', href: '/apple-icon-72x72.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '76x76', type: 'image/x-icon', href: '/apple-icon-76x76.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '114x114', type: 'image/x-icon', href: '/apple-icon-114x114.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '120x120', type: 'image/x-icon', href: '/apple-icon-120x120.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '144x144', type: 'image/x-icon', href: '/apple-icon-144x144.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '152x152', type: 'image/x-icon', href: '/apple-icon-152x152.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/x-icon', href: '/apple-icon-180x180.png' }],
      ['link', { rel: 'icon', sizes: '192x192', type: 'image/png', href: '/android-icon-192x192.png' }],
      ['link', { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/android-icon-36x36.png' }],
      ['link', { rel: 'icon', sizes: '96x96', type: 'image/png', href: '/android-icon-96x96.png' }],
      ['link', { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/android-icon-16x16.png' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
  };
});
