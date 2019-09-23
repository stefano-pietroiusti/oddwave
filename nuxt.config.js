require('dotenv').config()

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/oddwave/'
  }
} : {}

export default {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    // contactHost: 'smtp.googlemail.com',
    // contactPort: 465,
    // contactUser: 'theoddwavecontact@gmail.com',
    // contactPwd: 'ix06KC7WA31K',
    // contactFrom: '"The Odd Wave Web" <theoddwavecontact@gmail.com>',
    // contactTo: 'theoddwavecontact@gmail.com,stefano.pietroiusti@gmail.com,jalinevandyk@gmail.com',
    // contactSubject: 'Website enquiry',
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
    // beforeEnter(el) {
    //   console.log('Before enter...')
    // }
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  generate: {
    routes: [
      '/',
      '/services/seo',
      '/services/ppc',
      '/services/webdesign',
      '/services/photography'
    ]
  },
  ...routerBase,
  head: {
    title: process.env.npm_package_name || 'The Odd Wave digital and web design services',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto|Black+Han+Sans|Bowlby+One+SC|Syncopate|Abril+Fatface|Exo|Righteous&display=swap' },
      // { rel: 'stylesheet', href: 'https://db.onlinewebfonts.com/c/6c79f7fd645c0d39b4ca10428237984a?family=Azo+Sans|AzoSansUberW01-Regular' },
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
    '@/assets/scss/custom.scss'
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
    // { src: '~/plugins/bootstrap-vue', mode: 'client' }
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
    'nuxt-responsive-loader',
    ['@nuxtjs/dotenv', { only: ['BASE_URL'] }]
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`,
    // components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BTable', 'BModal', 'BNavBar', 'BNav'],
    // directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy']
  },
  responsiveLoader: {
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
