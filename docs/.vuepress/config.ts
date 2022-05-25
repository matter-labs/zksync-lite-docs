import footnote_plugin from 'markdown-it-footnote/dist/markdown-it-footnote.min.js';

export default {
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
  plugins: [
    'fulltext-search',
    ['vuepress-plugin-canonical', {
      baseURL: 'https://docs.zksync.io',
      stripExtension: true,
    }],
    ['sitemap', {
      hostname: 'https://docs.zksync.io',
    }]
  ],
  themeConfig: {
    repo: 'matter-labs/zksync-docs',
    editLinks: true,
    docsDir: "/docs",
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
        link: '/contact',
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
    sidebar: {
      '/legal/': ['/legal/terms', '/legal/privacy'],
      '/userdocs/': [
        {
          title: 'Welcome to zkSync',
          path: '/userdocs/',
          sidebarDepth: 0,
        },
        {
          title: 'Overview',
          path: '/userdocs/intro',
        },
        {
          title: 'Technology',
          path: '/userdocs/tech',
        },
        {
          title: 'Security',
          path: '/userdocs/security',
        },
        {
          title: 'Learn By Watching',
          path: '/userdocs/learnbywatching',
        },
        {
          title: 'Wallets',
          path: '/userdocs/wallets',
        },
        {
          title: 'Tokens & Fees',
          path: '/userdocs/tokens',
        },
        {
          title: 'Decentralization',
          path: '/userdocs/decentralization',
        },
        {
          title: 'Tokenomics',
          path: '/userdocs/tokenomics',
        },
        {
          title: 'Smart contracts',
          path: '/userdocs/sc',
        },
        {
          title: 'Privacy',
          path: '/userdocs/privacy',
        },
        {
          title: 'Roadmap',
          path: '/userdocs/roadmap',
        },
        {
          title: 'FAQ',
          path: '/userdocs/faq',
        },
        {
          title: 'Tutorials',
          path: '/userdocs/tutorials',
        },
      ],
      '/dev': [
        {
          title: 'Introduction',
          path: '/dev/',
          collapsable: false,
        },
        {
          title: 'Payments',
          path: '/dev/payments',
          children: ['/dev/payments/basic', '/dev/payments/sending_transactions'],
        },
        {
          title: 'Security',
          path: '/dev/security',
          children: ['/dev/security/approach', '/dev/security/bug-bounty', '/dev/security/disclosure', '/dev/security/bugs'],
        },
        {
          title: 'Smart contracts',
          path: '/dev/contracts/',
          collapsable: false,
        },
        '/dev/nfts',
        '/dev/swaps',
        '/dev/events',
      ],
      '/api': [
        {
          title: 'Overview',
          path: '/api/',
          collapsable: false,
          sidebarDepth: 0,
        },
        '/api/changelog',
        '/api/environments',
        '/api/events',
        {
          title: 'API v0.1',
          path: '/api/v0.1',
          collapsable: false,

        },
        {
          title: 'API v0.2',
          path: '/api/v0.2',
          collapsable: false,

        },
        {
          title: 'JavaScript SDK',
          path: '/api/sdk/js',
          sidebarDepth: 2,
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
          title: 'Rust SDK',
          path: '/api/sdk/rust',
          sidebarDepth: 2,
          children: ['/api/sdk/rust/tutorial'],
        },
        {
          title: 'Java SDK',
          path: '/api/sdk/java',
          sidebarDepth: 2,
          children: ['/api/sdk/java/tutorial', '/api/sdk/java/interfaces'],
        },
        {
          title: 'Swift SDK',
          path: '/api/sdk/swift',
          sidebarDepth: 2,
          children: ['/api/sdk/swift/tutorial'],
        },
        {
          title: 'Python SDK',
          path: '/api/sdk/python',
          sidebarDepth: 2,
          children: ['/api/sdk/python/tutorial'],
        },
        '/api/sdk/dart',
        {
          title: 'zkCheckout SDK',
          path: '/api/sdk/checkout',
          sidebarDepth: 2,
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
          title: 'zkEVM FAQ',
          path: '/zkevm/',
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
