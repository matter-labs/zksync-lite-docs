module.exports = {
    title: 'zkSync', // adding title gives us a header with search box
    // description: 'O(n) transactions in O(1) time',
    repo: 'matter-labs/zksync/js/zksync.js',
    dest: 'dist',
    themeConfig: {
        logo: '/LogotypeLight.svg',
        lastUpdated: true,
        repo: 'matter-labs/zksync/tree/master/js/zksync.js',
        sidebar: [
            'overview',
            'getting-started',
            'tutorial',
            'providers',
            'accounts',
            'utils',
            'types',
        ],
    },
    head: [
        [ 'script', { src: "/__/firebase/7.13.2/firebase-app.js",       defer: true }, ''],
        [ 'script', { src: "/__/firebase/7.13.2/firebase-analytics.js", defer: true }, ''],
        [ 'script', { src: "/__/firebase/init.js",                      defer: true }, ''],
    ],
}
