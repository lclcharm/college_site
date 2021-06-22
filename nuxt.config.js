module.exports = {

  server: {
    // 线上端口
    port: 30001
    // host: '0.0.0.0'
    // host: 'localhost'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '漫漫研 - 最适合考研的在线学习网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
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
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1:9110'
  },

  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
    { src: '~/plugins/element-ui-plugin.js', ssr: false },
    { src: '~/plugins/vue-qriously-plugin.js', ssr: true },
    { src: '~/plugins/tcplayer.js', ssr: false }
  ]

}

