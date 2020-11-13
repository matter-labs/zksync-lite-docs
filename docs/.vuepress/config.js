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
            'vuepress-plugin-canonical',
            {
                baseURL: 'https://zksync.io', // base url for your canonical link, optional, default: ''
                stripExtension: false // strip '.html' , optional, default: false
            }
        ],
        [
            'check-md',
            {
                pattern: '**/*.md',
                ignoreFootnotes: true
          }
        ]
    ],
    themeConfig: {
        logo: '/LogotypeLight.svg',
        lastUpdated: false,
        repo: 'matter-labs/zksync',
        nav: [
            {
                text: 'Docs',
                link: '/faq/intro.html'
            },
            {
                text: 'Contact',
                link: '/contact.html'
            }            
        ],
        //displayAllHeaders: true,
        sidebar: {
            '/legal/': [
                '/legal/terms',
                '/legal/privacy'
            ],
            '/': [         
                '',
                {
                    title: 'FAQ',  // required
                    path: '/faq/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                    children: [
                      '/faq/intro',
                      '/faq/tech',
                      '/faq/tokens',
                      '/faq/security',
                      '/faq/decentralization',
                      '/faq/sc',
                      '/faq/privacy'
                    ]
                },
                {
                    title: 'Developer guide',  // required
                    path: '/dev/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                      '/dev/overview',
                      '/dev/basic',
                      '/dev/sending_transactions',
                      '/dev/contracts',
                      '/dev/cryptography',
                      '/dev/updates'
                    ]
                },
                {
                    title: 'API documentation',  // required
                    path: '/api', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                      '/api/v0.1',
                      '/api/v1/'
                    ]
                },
                {
                    title: 'JavaScript SDK',  // required
                    path: '/sdk/js', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                      '/sdk/js/tutorial',
                      '/sdk/js/providers',
                      '/sdk/js/accounts',
                      '/sdk/js/utils',
                      '/sdk/js/types',
                      '/sdk/js/browser-bundled'
                    ]
                },
                {
                    title: 'Rust SDK',  // required
                    path: '/sdk/rust', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: ['']
                },
            ]
        }
    },
    head: [
        [ 'script', { src: "/__/firebase/7.13.2/firebase-app.js",       defer: true }, ''],
        [ 'script', { src: "/__/firebase/7.13.2/firebase-analytics.js", defer: true }, ''],
        [ 'script', { src: "/__/firebase/init.js",                      defer: true }, ''],
    ],
}
