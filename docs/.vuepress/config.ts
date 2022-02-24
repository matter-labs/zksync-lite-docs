import { NavItems as navbar, SideItems as sidebar } from './config/index';

import type { WebpackBundlerOptions } from '@vuepress/bundler-webpack';
import { defineUserConfig } from '@vuepress/cli';
import type { DefaultThemeOptions } from '@vuepress/theme-default';
import { path } from '@vuepress/utils';

export default defineUserConfig<DefaultThemeOptions, WebpackBundlerOptions>({
  bundler: '@vuepress/bundler-webpack',
  bundlerConfig: {
    vue: {
      isServerBuild: false
    },
    stylus: null,
    scss: {
      sourceMap: true,
      implementation: require('sass')
    },
    evergreen: true
  },
  shouldPrefetch: true,
  title: 'zkSync: secure, scalable crypto payments', // adding title gives us a header with search box
  description: 'zkSync is a user-centric zk rollup platform from Matter Labs (opens new window). It is a scaling solution for Ethereum, already live on Ethereum mainnet',
  dest: 'dist',
  markdown: {
    code: {
      lineNumbers: true
    },
    toc: {
      level: [1, 2, 3]
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        '/': {
          placeholder: 'Search'
        }
      }
    ],
    [
      '@vuepress/plugin-palette',
      { preset: 'sass' }
    ],
    ['sitemap', {
      hostname: 'https://docs.zksync.io'
    }]
  ],
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    darkMode: true,
    repo: 'matter-labs/zksync-docs',
    editLinks: true,
    docsDir: 'docs/docs',
    logo: '/LogotypeLight.svg',
    docsBranch: 'master',
    logoDark: '/LogotypeDark.svg',
    navbar,
    sidebar,
    themePlugins: {
      nprogress: true,
    }
  },
  head: [
    ['script', { src: '/hack.js', defer: true }, ''],
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
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
});
