export default {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    contactHost: 'smtp.googlemail.com',
    contactPort: 465,
    contactUser: 'theoddwavecontact@gmail.com',
    contactPwd: 'ix06KC7WA31K',
    contactFrom: '"The Odd Wave Web" <theoddwavecontact@gmail.com>',
    contactTo: 'theoddwavecontact@gmail.com,stefano.pietroiusti@gmail.com,jalinevandyk@gmail.com',
    contactSubject: 'Website enquiry',
    DEPLOY_ENV: 'STATIC'
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...')
    }
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
   generate: {
    subFolders: true,
    routes: [
      '/',
      '/services/seo',
      '/services/ppc',
      '/services/webdesign',
      '/services/hosting',
      '/services/photography'
    ]
  }
  ,
  /*
  ** Router 
  */
  router: {
    // base: process.env.DEPLOY_ENV === 'STATIC' ? '/nuxt-example/' : '/'
    // base: '/nuxt-static/'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      // {
      //   hid: 'description',
      //   name: 'description',
      //   content: process.env.npm_package_description || ''
      // }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'imgs/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto|Black+Han+Sans|Bowlby+One+SC|Syncopate|Abril+Fatface|Exo|Righteous&display=swap' },
      { rel: 'stylesheet', href: 'https://db.onlinewebfonts.com/c/6c79f7fd645c0d39b4ca10428237984a?family=Azo+Sans|AzoSansUberW01-Regular' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
    // , script: [
    //   { src: 'https://d3js.org/d3.v3.min.js' }, { src: 'https://rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js' }
    // ]
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
    '@/assets/scss/custom.scss',
    '@/assets/css/bootstrap-social.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/anime.js',
    '~/plugins/fontawesome.js',
    '~/plugins/vue-inject.js',
    { src: '~plugins/vue-particles', mode: 'client' },
    { src: '~plugins/vue-parallaxy', mode: 'client' },
    // { src: '~/plugins/vue-fb-customer-chat', mode: 'client' },
    { src: '~/plugins/vue-notifications', mode: 'client' },
    // { src: '~/plugins/vue-resize-directive', mode: 'client' },
    { src: '~/plugins/vue-chartjs.js', mode: 'client' },
    { src: '~/plugins/hchs-vue-charts', mode: 'client' }, //https://www.yasminzy.com/nuxt/chart.html#steps
    // { src: '~/plugins/helper.js' }
    { src: '~/plugins/vue-d3-cloud.js', mode: 'client' } //https://www.yasminzy.com/nuxt/chart.html#steps

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
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'nuxt-simple-line-icons'
  ]
  // , bootstrapVue: {
  // bootstrapCSS: false, // Or `css: false`
  // bootstrapVueCSS: false, // Or `bvCSS: false`
  // componentPlugins: [
  //   'LayoutPlugin',
  //   'FormPlugin',
  //   'FormCheckboxPlugin',
  //   'FormInputPlugin',
  //   'FormRadioPlugin',
  //   'ToastPlugin',
  //   'ModalPlugin'
  // ],
  // directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin', 'VBScrollspyPlugin']

  // }
  ,
  serverMiddleware: [
    { path: '/api/logger', handler: '~/api/logger.js' },
    { path: '/api/contact', handler: '~/serverMiddleware/contact' } //or just '~/serverMiddleware/contact' because handler is inside code
  ],
  /*
   ** Build configuration
   */
  build: {
    vendor: ['vue-fb-customer-chat'],

    /*
     ** You can extend webpack config here
    */
    extend(config, ctx) {
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

  }
}
