import footnote_plugin from 'markdown-it-footnote/dist/markdown-it-footnote.min.js';
import { SeoOptions } from '@mr-hope/vuepress-plugin-seo/lib/types';
export default {
  evergreen: true,
  title: 'zkSync Lite Documentation',
  description: 'zkSync Lite is a user-centric zk rollup platform from Matter Labs. It is a scaling solution for Ethereum, already live on Ethereum mainnet',
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
       baseURL: 'https://docs.lite.zksync.io',
       stripExtension: true,
     }],
     ['sitemap', {
       hostname: 'https://docs.lite.zksync.io',
     }],
     ['@mr-hope/seo', <SeoOptions>{
       author: 'Matter Labs',
       twitterID: 'zksync',
       seo: ({ page }) => {
         const pageMeta = page.frontmatter.meta ? Object.fromEntries(page.frontmatter.meta.map(e => [e.name, e.content])) : {};
         const socialImgPath = 'https://docs.lite.zksync.io/social-image.png';
         const title = pageMeta.title ?? (page.title ? page.title + " | " : "") + "zkSync Lite Documentation";
         const description = pageMeta.description ?? "zkSync Lite is a user-centric zk rollup platform from Matter Labs. It is a scaling solution for Ethereum, already live on Ethereum mainnet";
         return {
          'description': description,
          'og:title': title,
          'og:description': description,
          'twitter:site': '@zksync',
          'twitter:title': title,
          'twitter:description': description,
          'twitter:image': socialImgPath,
          'og:image': socialImgPath,
          'og:image:secure_url': socialImgPath,
          'og:image:alt': 'zkSync Lite Documentation',
          ...pageMeta,
         }
       }
     }]
  ],
  themeConfig: {
    repo: 'matter-labs/zksync-docs',
    editLinks: true,
    docsDir: '/docs',
    logo: '/logo.svg',
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
        text: 'Uptime',
        link: '/uptime/',
      },
      {
        text: 'zkSync Lite',
        items: [
          {
            text: 'zkSync Era',
            link: 'https://era.zksync.io/docs/'
          },
          {
            text: 'zkSync Lite',
            link: '/userdocs/'
          }
        ]
      }
    ],
    sidebar: {
      '/userdocs/': [
        {
          title: 'Welcome to zkSync Lite',
          path: '/userdocs/',
        },
        {
          title: 'Overview',
          path: '/userdocs/intro/',
        },
        {
          title: 'Technology',
          path: '/userdocs/tech/',
        },
        {
          title: 'Security',
          path: '/userdocs/security/',
        },
        {
          title: 'Learn By Watching',
          path: '/userdocs/learnbywatching/',
        },
        {
          title: 'Wallets',
          path: '/userdocs/wallets/',
        },
        {
          title: 'Tokens & Fees',
          path: '/userdocs/tokens/',
        },
        {
          title: 'Decentralization',
          path: '/userdocs/decentralization/',
        },
        {
          title: 'Smart contracts',
          path: '/userdocs/sc/',
        },
        {
          title: 'Privacy',
          path: '/userdocs/privacy/',
        },
        {
          title: 'FAQ',
          path: '/userdocs/faq/',
        },
        {
          title: 'Tutorials',
          path: '/userdocs/tutorials/',
        },
      ],
      '/dev': [
        {
          title: 'Introduction',
          path: '/dev/',
        },
        {
          title: 'Payments',
          path: '/dev/payments/',
          children: ['/dev/payments/basic/', '/dev/payments/sending_transactions/'],
        },
        {
          title: 'Security',
          path: '/dev/security/',
          children: ['/dev/security/approach/', '/dev/security/bug-bounty/', '/dev/security/disclosure/', '/dev/security/bugs/'],
        },
        {
          title: 'Smart contracts',
          path: '/dev/contracts/',
        },
        '/dev/nfts/',
        '/dev/swaps/',
        '/dev/events/',
      ],
      '/api': [
        {
          title: 'Overview',
          path: '/api/',
        },
        '/api/changelog/',
        '/api/environments/',
        '/api/events/',
        {
          title: 'API v0.1',
          path: '/api/v0.1/',
        },
        {
          title: 'API v0.2',
          path: '/api/v0.2/',
        },
        {
          title: 'WEB3 RPC API', // required
          path: '/api/web3-rpc/', // optional, which should be a absolute path.
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: 'JavaScript SDK',
          path: '/api/sdk/js/',
          children: [
            '/api/sdk/js/tutorial/',
            '/api/sdk/js/providers/',
            '/api/sdk/js/accounts/',
            '/api/sdk/js/utils/',
            '/api/sdk/js/nfts/',
            '/api/sdk/js/types/',
            '/api/sdk/js/browser-bundled/',
          ],
        },
        {
          title: 'Rust SDK',
          path: '/api/sdk/rust/',
          children: ['/api/sdk/rust/tutorial/'],
        },
        {
          title: 'Java SDK',
          path: '/api/sdk/java/',
          children: ['/api/sdk/java/tutorial/', '/api/sdk/java/interfaces/'],
        },
        {
          title: 'Swift SDK',
          path: '/api/sdk/swift/',
          children: ['/api/sdk/swift/tutorial/'],
        },
        {
          title: 'Python SDK',
          path: '/api/sdk/python/',
          children: ['/api/sdk/python/tutorial/'],
        },
        '/api/sdk/dart/',
        {
          title: 'zkCheckout SDK',
          path: '/api/sdk/checkout/',
          children: [
            '/api/sdk/checkout/tutorial/',
            '/api/sdk/checkout/checkout-manager/',
            '/api/sdk/checkout/types/',
            '/api/sdk/checkout/constants/',
            '/api/sdk/checkout/protocol/',
            '/api/sdk/checkout/appendix-a/',
          ],
        },
        '/api/sdk/crypto/',
      ],
      '/zkevm': [
        {
          title: 'zkEVM FAQ',
          path: '/zkevm/',
        },
      ],
    },
  },
  extraWatchFiles: ['.vuepress/config/**'],
  head: [
    ['script', { src: '/hack.js', defer: "defer" }, ''],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-K9FLXQ2PYF', async: "true" }, ''],
    ['script', { src: '/analytics.js', async: "true" }, ''],
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
