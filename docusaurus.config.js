// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IIUM Schedule Generator',
  tagline: 'Generate your schedule easy peasy',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iiumschedule', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: '/changelog',
          blogTitle: 'Release Notes',
          blogDescription: 'IIUM Schedule stable version release notes',
          blogSidebarTitle: 'Release notes',
          blogSidebarCount: 'ALL',
          path: 'changelogs',
          postsPerPage: 4,
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/iqfareez/iiumscwebsite/tree/master/changelog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'IIUM Schedule',
        logo: {
          alt: 'IIUM Schedule Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mySidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/downloads', label: 'Downloads', position: 'left',
          },
          {
            href: 'https://github.com/iiumschedule/iium_schedule',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/docs/extract',
              },
              {
                label: 'Downloads',
                to: '/downloads',
              },
            ],
          },
          {
            title: 'Legalese',
            items: [
              {
                label: 'Privacy Policy',
                to: 'privacy-policy',
              },
              {
                label: 'Terms and Conditions',
                to: 'terms',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Send feedback',
                to: 'feedback'
              },
              {
                label: 'Release Notes',
                to: '/changelog',
              },
              {
                label: 'Devlog',
                href: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTAxOTkzNjUzNDk0NDQ3',
              },
              {
                label: 'Branding',
                to: '/branding',
              },
            ],
          },
        ],
        copyright: '<div>Copyright © 2025 <a style="color: #bbe3ff" href="https://iqfareez.com">Muhammad Fareez</a></div>',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
