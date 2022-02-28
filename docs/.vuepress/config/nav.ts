import { NavbarItem, NavbarGroup } from '@vuepress/theme-default';

export const NavItems: false | (NavbarItem | NavbarGroup | string)[] = [
  {
    text: 'User Docs',
    link: '/userdocs/'
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
    text: 'zkEVM',
    link: '/zkevm/'
  },
  {
    text: 'Contact and Media',
    link: '/contact.html'
  },
  {
    text: 'Uptime',
    link: '/uptime'
  },
  {
    text: 'v1.x',
    children: [
      {
        text: 'v2.0',
        link: 'https://v2-docs.zksync.io'
      },
      {
        text: 'v1.x',
        link: '/userdocs/'
      }
    ]
  }
];