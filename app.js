const fs = require("fs");

const firstRoutes = [
    "/contact",
    "/uptime",
    "/legal/terms",
    "/legal/privacy",
]
const secondRoutes = {
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
}

let allRoutes = new Set();

const checkObject = (obj) => {
    if (typeof obj === "string") {
        if (obj.startsWith("/") && !obj.endsWith("/")) {
            allRoutes.add(obj.replace(".html", ""));
        }
    } else if (Array.isArray(obj)) {
        for(const item of obj) {
            checkObject(item);
        }
    } else if (typeof obj === "object") {
        if (obj.children) {
            for(const item of obj.children) {
                checkObject(item);
            }
        } else if (obj.path) {
            checkObject(obj.path);
        } else {
            for(const prop in obj) {
                checkObject(obj[prop]);
            }
        }
    }
}

checkObject(firstRoutes);
checkObject(secondRoutes);

const docsDomain = "https://docs.zksync.io";
let redirects = [];

for(const item of Array.from(allRoutes)) {
    redirects.push({
        "source": item + ".html",
        "destination": docsDomain + item + "/",
        "type": 301
    });
}

fs.writeFileSync("./redirects.json", JSON.stringify(redirects, null, 4));