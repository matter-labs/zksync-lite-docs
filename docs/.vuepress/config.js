module.exports = {
    title: 'zkSync docs', // adding title gives us a header with search box
    description: 'Documentation for zkSync: simple, fast and secure token transfers',
    repo: 'matter-labs/zksync',
    dest: 'dist',
    markdown: {
        toc: { includeLevel: [2, 3] }
    },
    plugins: [
        [
            'vuepress-plugin-canonical',
            {
                baseURL: 'https://docs.zksync.io', // base url for your canonical link, optional, default: ''
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
                text: 'Gitter',
                link: 'https://gitter.im/zksync/community'
            },
            {
                text: 'Twitter',
                link: 'https://twitter.com/the_matter_labs'
            }            
        ],
        //displayAllHeaders: true,
        sidebar: [         
                {
                    title: 'Overview & FAQ',  // required
                    path: '/faq/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                    children: [
                      ['/faq/why', 'Why should I care?'],
                      '/faq/intro',
                      '/faq/functionality',
                      '/faq/speed',
                      '/faq/security',
                      '/faq/decentralization'
                    ]
                },
                // {
                //     title: 'Technology',
                //     path: '/tech/',
                //     children: [
                //         '/tech/zkp',
                //         '/tech/zkrollup',
                //         '/tech/plonk',
                //         '/tech/redshift'
                //       ]
                // },                 // {
                //     title: 'User guide',
                //     path: '/user/'
                // },                
                {
                    title: 'Developer guide',  // required
                    path: '/dev/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                      '/dev/getting-started',
                      '/dev/tutorial',
                      '/dev/providers',
                      '/dev/accounts',
                      '/dev/utils',
                      '/dev/types'
                    ]
                },
            ]
    },
    head: [
        [ 'script', { src: "/__/firebase/7.13.2/firebase-app.js",       defer: true }, ''],
        [ 'script', { src: "/__/firebase/7.13.2/firebase-analytics.js", defer: true }, ''],
        [ 'script', { src: "/__/firebase/init.js",                      defer: true }, ''],
    ],
}
