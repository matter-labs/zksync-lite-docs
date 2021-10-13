module.exports = {
  title: "zkSync: secure, scalable crypto payments", // adding title gives us a header with search box
  description: "zkSync is a fully trustless user-centric zkRollup protocol for scaling payments and smart contracts on Ethereum.",
  repo: "matter-labs/zksync",
  dest: "dist",
  markdown: {
    toc: { includeLevel: [2, 3] },
  },
  extendMarkdown: (md) => {
    // Add support of footnotes (like [^1]) in markdown
    md.use(require("markdown-it-footnote"));
  },
  plugins: {
    "fulltext-search": {},
    "vuepress-plugin-canonical": {
      baseURL: "https://zksync.io", // base url for your canonical link, optional, default: ''
      stripExtension: false, // strip '.html' , optional, default: false
    },
    sitemap: {
      hostname: "https://zksync.io",
    },
  },
  themeConfig: {
    logo: "/LogotypeLight.svg",
    lastUpdated: "Last Updated",
    repo: "matter-labs/zksync",
    nav: [
      {
        text: "User Docs",
        link: "/faq/",
      },
      {
        text: "Developer Docs",
        link: "/dev/",
      },
      {
        text: "API Reference",
        link: "/api/",
      },
      {
        text: "zkEVM",
        link: "/zkevm/",
      },
      {
        text: "Contact and Media",
        link: "/contact.html",
      },
      {
        text: "Uptime",
        link: "/uptime",
      },
    ],
    //displayAllHeaders: true,
    sidebar: {
      "/legal/": ["/legal/terms", "/legal/privacy"],
      "/faq/": [
        {
          title: "Welcome to zkSync", // required
          path: "/faq/", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 0, // optional, defaults to 1
        },
        {
          title: "Overview", // required
          path: "/faq/intro.html", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "Technology", // required
          path: "/faq/tech", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "Security", // required
          path: "/faq/security", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "Learn By Watching", // required
          path: "/faq/learnbywatching", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "Wallets", // required
          path: "/faq/wallets", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "Tokens & Fees", // required
          path: "/faq/tokens", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "Decentralization", // required
          path: "/faq/decentralization", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "Tokenomics", // required
          path: "/faq/tokenomics", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "Smart contracts", // required
          path: "/faq/sc", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "Privacy", // required
          path: "/faq/privacy", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "Roadmap", // required
          path: "/faq/roadmap", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
      ],
      "/dev": [
        {
          title: "Introduction", // required
          path: "/dev/", // optional, which should be a absolute path.
          collapsable: false, // optional, defaults to true
        },
        {
          title: "Payments", // required
          path: "/dev/payments", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: ["/dev/payments/basic", "/dev/payments/sending_transactions"],
        },
        {
          title: "Smart contracts", // required
          path: "/dev/contracts/", // optional, which should be a absolute path.
          collapsable: false, // optional, defaults to true
        },
        "/dev/bug-bounty",
        "/dev/nfts",
        "/dev/swaps",
        "/dev/events",
      ],
      "/api": [
        {
          title: "Overview", // required
          path: "/api/", // optional, which should be a absolute path.
          collapsable: false, // optional, defaults to true
          sidebarDepth: 0, // optional, defaults to 1
        },
        "/api/changelog",
        "/api/environments",
        "/api/events",
        {
          title: "API v0.1", // required
          path: "/api/v0.1", // optional, which should be a absolute path.
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "API v0.2", // required
          path: "/api/v0.2", // optional, which should be a absolute path.
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
        },
        {
          title: "JavaScript SDK", // required
          path: "/api/sdk/js", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 2, // optional, defaults to 1
          children: [
            "/api/sdk/js/tutorial",
            "/api/sdk/js/providers",
            "/api/sdk/js/accounts",
            "/api/sdk/js/utils",
            "/api/sdk/js/nfts",
            "/api/sdk/js/types",
            "/api/sdk/js/browser-bundled",
          ],
        },
        {
          title: "Rust SDK", // required
          path: "/api/sdk/rust", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 2, // optional, defaults to 1
          children: ["/api/sdk/rust/tutorial"],
        },
        {
          title: "Java SDK", // required
          path: "/api/sdk/java", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 2, // optional, defaults to 1
          children: ["/api/sdk/java/tutorial", "/api/sdk/java/interfaces"],
        },
        {
          title: "Swift SDK", // required
          path: "/api/sdk/swift", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 2, // optional, defaults to 1
          children: ["/api/sdk/swift/tutorial"],
        },
        {
          title: "Python SDK", // required
          path: "/api/sdk/python", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 2, // optional, defaults to 1
          children: ["/api/sdk/python/tutorial"],
        },
        "/api/sdk/dart",
        {
          title: "zkCheckout SDK", // required
          path: "/api/sdk/checkout", // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          sidebarDepth: 2, // optional, defaults to 1
          children: [
            "/api/sdk/checkout/tutorial",
            "/api/sdk/checkout/checkout-manager",
            "/api/sdk/checkout/types",
            "/api/sdk/checkout/constants",
            "/api/sdk/checkout/protocol",
            "/api/sdk/checkout/appendix-a",
          ],
        },
        "/api/sdk/crypto",
      ],
    },
  },
  head: [
    ["script", { src: "/__/firebase/7.13.2/firebase-app.js", defer: true }, ""],
    ["script", { src: "/__/firebase/7.13.2/firebase-analytics.js", defer: true }, ""],
    ["script", { src: "/__/firebase/init.js", defer: true }, ""],
    //Hack: Make clicking on the logo go to home url
    [
      "script",
      {},
      `
   const logoUrlChanger = setInterval(function() {
    //Anchor above the logo image
    const homeEls = document.getElementsByClassName("home-link");
    if(homeEls.length > 0) {
      const homeEl = homeEls[0];
      homeEl.setAttribute("href", "https://zksync.io");
      homeEl.setAttribute("onclick", "document.location='https://zksync.io';return false;");
      clearInterval(logoUrlChanger);
    }

    //Actual logo image
    const logoEls = document.getElementsByClassName("logo")
    if(logoEls.length > 0) {
      const logoEl = logoEls[0]
      logoEl.setAttribute("onclick", "document.location='https://zksync.io';return false;");
      clearInterval(logoUrlChanger);
    }
   }, 1000)`,
    ],
  ],
};
