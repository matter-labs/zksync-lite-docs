module.exports = {
    title: 'zkSync', // adding title gives us a header with search box
    description: 'Scaling and privacy engine for Ethereum',
    repo: 'matter-labs/zksync',
    dest: 'dist',
    themeConfig: {
        logo: '/LogotypeLight.svg',
        lastUpdated: true,
        repo: 'matter-labs/zksync',
        sidebar: [         
                {
                    title: 'Overview',  // required
                    path: '/overview/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                      '/overview/what-is'
                    ]
                },
                {
                    title: 'User guide',  // required
                    path: '/user/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                      '/user/getting-started'
                    ]
                },                
                {
                    title: 'Developer guide',  // required
                    path: '/dev/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 3,    // optional, defaults to 1
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
