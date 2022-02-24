export const SideItems = {
  '/legal/': ['/legal/terms', '/legal/privacy'],
  '/userdocs/': [
    {
      text: 'Welcome to zkSync', // required
      link: '/userdocs/', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 0 // optional, defaults to 1
    },
    {
      text: 'Overview', // required
      link: '/userdocs/intro.html', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Technology', // required
      link: '/userdocs/tech', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Security', // required
      link: '/userdocs/security', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Learn By Watching', // required
      link: '/userdocs/learnbywatching', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Wallets', // required
      link: '/userdocs/wallets', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Tokens & Fees', // required
      link: '/userdocs/tokens', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Decentralization', // required
      link: '/userdocs/decentralization', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Tokenomics', // required
      link: '/userdocs/tokenomics', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Smart contracts', // required
      link: '/userdocs/sc', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Privacy', // required
      link: '/userdocs/privacy', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Roadmap', // required
      link: '/userdocs/roadmap', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'FAQ', // required
      link: '/userdocs/faq', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'Tutorials', // required
      link: '/userdocs/tutorials', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    }
  ],
  '/dev': [
    {
      text: 'Introduction', // required
      link: '/dev/', // optional, which should be a absolute path.
      collapsable: false // optional, defaults to true
    },
    {
      text: 'Payments', // required
      link: '/dev/payments', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1, // optional, defaults to 1
      children: ['/dev/payments/basic', '/dev/payments/sending_transactions']
    },
    {
      text: 'Security', // required
      link: '/dev/security', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1, // optional, defaults to 1
      children: ['/dev/security/approach', '/dev/security/bug-bounty', '/dev/security/disclosure', '/dev/security/bugs']
    },
    {
      text: 'Smart contracts', // required
      link: '/dev/contracts/', // optional, which should be a absolute path.
      collapsable: false // optional, defaults to true
    },
    '/dev/nfts',
    '/dev/swaps',
    '/dev/events'
  ],
  '/api': [
    {
      text: 'Overview', // required
      link: '/api/', // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 0 // optional, defaults to 1
    },
    '/api/changelog',
    '/api/environments',
    '/api/events',
    {
      text: 'API v0.1', // required
      link: '/api/v0.1', // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'API v0.2', // required
      link: '/api/v0.2', // optional, which should be a absolute path.
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1 // optional, defaults to 1
    },
    {
      text: 'JavaScript SDK', // required
      link: '/api/sdk/js', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 2, // optional, defaults to 1
      children: [
        '/api/sdk/js/tutorial',
        '/api/sdk/js/providers',
        '/api/sdk/js/accounts',
        '/api/sdk/js/utils',
        '/api/sdk/js/nfts',
        '/api/sdk/js/types',
        '/api/sdk/js/browser-bundled'
      ]
    },
    {
      text: 'Rust SDK', // required
      link: '/api/sdk/rust', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 2, // optional, defaults to 1
      children: ['/api/sdk/rust/tutorial']
    },
    {
      text: 'Java SDK', // required
      link: '/api/sdk/java', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 2, // optional, defaults to 1
      children: ['/api/sdk/java/tutorial', '/api/sdk/java/interfaces']
    },
    {
      text: 'Swift SDK', // required
      link: '/api/sdk/swift', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 2, // optional, defaults to 1
      children: ['/api/sdk/swift/tutorial']
    },
    {
      text: 'Python SDK', // required
      link: '/api/sdk/python', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 2, // optional, defaults to 1
      children: ['/api/sdk/python/tutorial']
    },
    '/api/sdk/dart',
    {
      text: 'zkCheckout SDK', // required
      link: '/api/sdk/checkout', // optional, which should be a absolute path.
      collapsable: true, // optional, defaults to true
      sidebarDepth: 2, // optional, defaults to 1
      children: [
        '/api/sdk/checkout/tutorial',
        '/api/sdk/checkout/checkout-manager',
        '/api/sdk/checkout/types',
        '/api/sdk/checkout/constants',
        '/api/sdk/checkout/protocol',
        '/api/sdk/checkout/appendix-a'
      ]
    },
    '/api/sdk/crypto'
  ],
  '/zkevm': [
    {
      text: 'zkEVM FAQ', // required
      link: '/zkevm/', // optional, which should be a absolute path.
      sidebarDepth: 2
    }
  ]
};