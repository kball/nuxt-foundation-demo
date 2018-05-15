module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-foundation-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js Demo with Foundation' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { lang: 'scss', src: '@/assets/scss/app.scss' },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      for (const rule of config.module.rules) {
        if (rule.use) {
          for (const use of rule.use) {
            if (use.loader === 'sass-loader') {
              use.options = use.options || {};
              use.options.includePaths = ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src'];
            }
          }
        }
      }
    }
  }
}
