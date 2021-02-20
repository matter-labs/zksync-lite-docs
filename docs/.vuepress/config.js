module.exports = {
    title: 'zkSync: secure, scalable crypto payments', // adding title gives us a header with search box
    description: 'zkSync is a fully trustless user-centric zkRollup protocol for scaling payments and smart contracts on Ethereum.',
    repo: 'matter-labs/zksync',
    dest: 'dist',
    markdown: {
        toc: { includeLevel: [2, 3] }
    },
    extendMarkdown: md => {
        // Add support of footnotes (like [^1]) in markdown
        md.use(require('markdown-it-footnote'))
    },
    plugins: [
        [
            'fulltext-search',
            'vuepress-plugin-canonical',
            {
                baseURL: 'https://zksync.io', // base url for your canonical link, optional, default: ''
                stripExtension: false // strip '.html' , optional, default: false
            }
        ]
    ],
    themeConfig: {
        logo: '/LogotypeLight.svg',
        lastUpdated: false,
        repo: 'matter-labs/zksync',
        nav: [
            {
                text: 'FAQ',
                link: '/faq/'
                //link: '/faq/intro.html'
            },
            {
                text: 'Developer Docs',
                link: '/dev/'
            },
            {
                text: 'API Reference',
                link: '/api/'
            },
            {
                text: 'Contact',
                link: '/contact.html'
            },
            {
                text: 'Uptime',
                link: 'https://uptime.com/s/zksync'
            }
        ],
        //displayAllHeaders: true,
        sidebar: {
            '/legal/': [
                '/legal/terms',
                '/legal/privacy'
            ],
            '/faq/': [
                {
                    title: 'Overview',  // required
                    path: '/faq/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                    title: 'Technology',  // required
                    path: '/faq/tech', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                    title: 'Security',  // required
                    path: '/faq/security', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                    title: 'Wallets',  // required
                    path: '/faq/wallets', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                    title: 'Tokens & fees',  // required
                    path: '/faq/tokens', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                    title: 'Decentralization',  // required
                    path: '/faq/decentralization', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                    title: 'Tokenomics',  // required
                    path: '/faq/tokenomics', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                    title: 'Smart contracts',  // required
                    path: '/faq/sc', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                },                
                {
                    title: 'Privacy',  // required
                    path: '/faq/privacy', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                },
                {
                    title: 'Roadmap',  // required
                    path: '/faq/roadmap', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                },
                //{
                //    title: 'FAQ',  // required
                //    path: '/faq/', // optional, which should be a absolute path.
                //    collapsable: true,  // optional, defaults to true
                //    sidebarDepth: 1,     // optional, defaults to 1
                //    children: [
                        //'/faq/intro',
                        //'/faq/tech',
                        //'/faq/security',
                        //'/faq/wallets',
                        //'/faq/tokens',
                        //'/faq/decentralization',
                        //'/faq/tokenomics',
                        //'/faq/sc',
                        //'/faq/privacy',
                        //'/faq/roadmap',
                        //'/faq/status',
                //    ]
                //},
            ],
            '/dev': [
                {
                    title: 'Introduction',  // required
                    path: '/dev/',      // optional, which should be a absolute path.
                    collapsable: false  // optional, defaults to true
                },
                {
                    title: 'Payments',  // required
                    path: '/dev/payments', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                      '/dev/payments/basic',
                      '/dev/payments/sending_transactions',
                      '/dev/payments/contracts',
                      '/dev/payments/updates'
                    ]
                },
                {
                    title: 'Smart contracts',  // required
                    path: '/dev/contracts/', // optional, which should be a absolute path.
                    collapsable: false,  // optional, defaults to true
                }
            ],
            '/api': [
                {
                    title: 'API documentation',  // required
                    path: '/api', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                      '/api/v0.1',
                      '/api/v1'
                    ]
                },
                {
                    title: 'JavaScript SDK',  // required
                    path: '/api/sdk/js', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                      '/api/sdk/js/tutorial',
                      '/api/sdk/js/providers',
                      '/api/sdk/js/accounts',
                      '/api/sdk/js/utils',
                      '/api/sdk/js/types',
                      '/api/sdk/js/browser-bundled'
                    ]
                },
                {
                    title: 'Rust SDK',  // required
                    path: '/api/sdk/rust', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                        '/api/sdk/rust/tutorial'
                    ]
                },
                {
                    title: 'Java SDK',  // required
                    path: '/api/sdk/java', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                        '/api/sdk/java/tutorial',
                        '/api/sdk/java/interfaces'
                    ]
                },
                {
                    title: 'Swift SDK',  // required
                    path: '/api/sdk/swift', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                        '/api/sdk/swift/tutorial'
                    ]
                },
                '/api/sdk/crypto',
                {
                    title: 'zkCheckout SDK',  // required
                    path: '/api/sdk/checkout', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                        '/api/sdk/checkout/tutorial',
                        '/api/sdk/checkout/checkout-manager',
                        '/api/sdk/checkout/types',
                        '/api/sdk/checkout/constants',
                        '/api/sdk/checkout/protocol',
                        '/api/sdk/checkout/appendix-a'
                    ]
                }
            ]
        }
    },
    head: [
        [ 'script', { src: "/__/firebase/7.13.2/firebase-app.js",       defer: true }, ''],
        [ 'script', { src: "/__/firebase/7.13.2/firebase-analytics.js", defer: true }, ''],
        [ 'script', { src: "/__/firebase/init.js",                      defer: true }, ''],
    ],
}
