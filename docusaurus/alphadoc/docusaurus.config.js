// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Alphadoc",
  tagline: "Alphadoc ❤️ Docusaurus",
  favicon: "img/alphadoc-favicon.png",

  // Set the production url of your site here
  url: "https://alphadoc.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/alphadoc-io/examples/tree/main/docusaurus/alphadoc",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/alphadoc-io/examples/tree/main/docusaurus/alphadoc",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/alphadoc-social-card.gif",
      navbar: {
        title: "Alphadoc",
        logo: {
          alt: "Alphadoc logo",
          src: "img/alphadoc-logo-icon.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            to: "/tutorial",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "dropdown",
            label: "APIs",
            position: "right",
            items: [
              {
                label: "Alphadoc",
                href: "/apis/alphadoc",
              },
              {
                label: "Bikeshop",
                href: "/apis/bikeshop",
              },
            ],
          },
          {
            href: "https://github.com/alphadoc-io/examples",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Alphadoc Documentation",
                to: "https://docs.alphadoc.io",
              },
            ],
          },
          {
            title: "Alphadoc",
            items: [
              {
                label: "Website",
                href: "https://alphadoc.io",
              },
              {
                label: "Create an account",
                href: "https://app.alphadoc.io/sign-up",
              },
              {
                label: "Sign in",
                href: "https://app.alphadoc.io/sign-in",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/alphadoc-io/examples",
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus and Alphadoc. ❤️ from Amsterdam`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
      },
    }),
};

export default config;
