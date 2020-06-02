module.exports = {
    title: 'zkSync', // adding title gives us a header with search box
    description: 'zkSync: simple, fast and secure token transfers',
    repo: 'matter-labs/zksync',
    dest: 'dist',
    markdown: {
        toc: { includeLevel: [2, 3] }
    },
    plugins: [
        [
            'vuepress-plugin-canonical',
            {
                baseURL: 'https://zksync.io', // base url for your canonical link, optional, default: ''
                stripExtension: false // strip '.html' , optional, default: false
            }
        ]
    ],
    themeConfig: {
        logo: '/LogotypeLight.svg',
        lastUpdated: true,
        repo: 'matter-labs/zksync',
        nav: [
            {
                text: 'Contacts',
                link: '/legal/contacts'
            },
            {
                text: 'Twitter',
                link: 'https://twitter.com/the_matter_labs'
            }            
        ],
        //displayAllHeaders: true,
        sidebar: {
            '/legal/': [
                '/legal/terms',
                '/legal/privacy'
            ],
            '/': [         
                {
                    title: 'FAQ',  // required
                    path: '/faq/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                    children: [
                      //['/faq/why', 'Why should I care?'],
                      '/faq/intro',
                      '/faq/tokens',
                      '/faq/speed',
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
                      '/dev/tutorial',
                      '/dev/basic',
                      '/dev/providers',
                      '/dev/accounts',
                      '/dev/rest',
                      '/dev/utils',
                      '/dev/types'
                    ]
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
