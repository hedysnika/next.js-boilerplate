/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ['lang0', 'lang1' ],
    defaultLocale: 'lang0',
    localeDetection: false,
  },
  images: {
    domains: ["i.imgur.com"],
  },
};

export default config;
