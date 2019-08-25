export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  generate: {
    routes: [
      '/posts/balut',
      '/posts/whereIsIt',
      '/posts/how'
    ]
  },
  head: {
    // script: [
    //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"' }
    // ],
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    // '@/assets/scss/custom.scss',
    '@/assets/css/custom.css'

  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/fontawesome.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
    // 'nuxt-fontawesome'
    // ['nuxt-fontawesome', {
    //   component: 'fa',
    //   imports: [
    //     {
    //       set: '@fortawesome/free-solid-svg-icons',
    //       icons: ['faDollarSign']
    //     }
    //   ]
    // }]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
    // build: {
    //   /*
    //    ** You can extend webpack config here
    //    */
    //   extend (config, ctx) {
    //     if (ctx.dev && ctx.isClient) {
    //       config.module.rules.push({
    //         enforce: 'pre',
    //         test: /\.(js|vue)$/,
    //         loader: 'eslint-loader',
    //         exclude: /(node_modules)/,
    //         options: {
    //           fix: true
    //         }
    //       })
    //     }
    //   }
  }
}
