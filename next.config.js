module.exports = {
  distDir: 'build',
  publicRuntimeConfig: {
    // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
  },
  webpack: config => {
    // extend your webpack configuration here
    return config
  },
  i18n: {
    defaultLocale: 'pt',
    localeDetection: false,
    locales: ['en', 'pt']
  },
  images: {
    domains: ['media.graphcms.com']
  }
}
