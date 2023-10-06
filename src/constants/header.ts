import { PAGES_PATH } from 'router/path';

export const HEADER_NAV_LINKS = [
  {
    to: PAGES_PATH.MAIN,
    title: 'Home',
  },
  {
    to: '',
    title: 'Features',
    links: [
      {
        to: PAGES_PATH.BLOG,
        title: 'Blog',
      },
      {
        to: PAGES_PATH.SHOP,
        title: 'Shop',
      },
      {
        to: PAGES_PATH.ABOUT,
        title: 'About',
      },
      {
        to: PAGES_PATH.CONTACT,
        title: 'Contact',
      },
    ],
  },
  {
    to: PAGES_PATH.BLOG,
    title: 'Blog',
  },
  {
    to: PAGES_PATH.SHOP,
    title: 'Shop',
  },
  {
    to: PAGES_PATH.ABOUT,
    title: 'About',
  },
  {
    to: PAGES_PATH.CONTACT,
    title: 'Contact',
  },
];
