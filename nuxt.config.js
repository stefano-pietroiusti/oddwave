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
      '/services/photography',
      '/contact'
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto|Varela Round|Ubuntu|Abril Fatface|Black+Han+Sans|Bowlby+One+SC|Syncopate|Abril+Fatface|Exo|Righteous&display=swap' },
      { rel: 'stylesheet', href: 'https://db.onlinewebfonts.com/c/6c79f7fd645c0d39b4ca10428237984a?family=Azo+Sans|AzoSansUberW01-Regular' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
      // { rel: 'stylesheet', href: 'https://www.w3schools.com/w3css/4/w3.css' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/scss/custom.scss',
    // '@/assets/css/bootstrap-social.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/anime.js',
    '~/plugins/fontawesome.js',
    // { src: '~plugins/vue-parallaxy', mode: 'client' },
    // { src: '~/plugins/vue-fb-customer-chat', mode: 'client' },
    { src: '~/plugins/vue-notifications', mode: 'client' },
    { src: '~/plugins/vue-chartjs.js', mode: 'client' }
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
    'nuxt-simple-line-icons', 
    'nuxt-svg-loader',
    'nuxt-responsive-loader'
  ]
  // bootstrapVue: {
  //   bootstrapCSS: false, // Or `css: false`
  //   bootstrapVueCSS: false // Or `bvCSS: false`
  // }
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
  ,responsiveLoader: {
    name: 'img/[hash:7]-[width].[ext]',
    quality: 65 // choose a lower value if you want to reduce filesize further
    // name: 'img/[hash:7]-[width].[ext]'
    // min: 640 // minimum image width generated
    // max: 1080 // maximum image width generated
    // steps: 5 // five sizes per image will be generated
    // placeholder: false // no placeholder will be generated
    // quality: 65 // images are compressed with medium quality    
  },
  serverMiddleware: [
    // { path: '/api/logger', handler: '~/api/logger.js' },
    { path: '/api/contact', handler: '~/serverMiddleware/contact' }
  ],
  /*
   ** Build configuration
   */
  build: {
    // vendor: ['vue-fb-customer-chat'],

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
