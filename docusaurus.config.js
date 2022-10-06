// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Effective Altruism Philadelphia',
  tagline: 'We are a community of individuals interested in allocating our time, talents, and donations to maximize our positive impact on the world, using evidence and careful reasoning to work out the very best causes to work on.',
  url: 'https://eaphiladelphia.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quinn-dougherty', // Usually your GitHub org/user name.
  projectName: 'eaphiladelphia.org', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/quinn-dougherty/eaphiladelphia.org',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/quinn-dougherty/eaphiladelphia.org',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Effective Altruism Philadelphia',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/values', label: 'Our values', position: 'left'},
          {to: '/do', label: 'What we do', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Get involved',
            items: [
              {
                label: 'Meetup.com',
                href: 'https://www.meetup.com/eaphiladelphia/',
              },
              {
                label: 'Discord server invite',
                href: 'https://discord.gg/CzMdFzC3r4',
              },
              {
                label: 'Join our mailing list',
                href: 'https://bit.ly/eaphilly-mailinglist'
              },
              {
                label: 'Subscribe to the google calendar',
                href: 'https://bit.ly/eaphilly-calendar'
              }
            ],
          },
          {
            title: 'Social media',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/64869878/',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/eaphiladelphia',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ea_philly',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCzZKyUaFnoFyzgsID8c0sWA',
              }
            ],
          },
        ],
        copyright: `Site built at ${new Date()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
