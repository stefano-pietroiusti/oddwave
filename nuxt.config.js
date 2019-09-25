require('dotenv').config()

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/oddwave/'
  }
} : {}

const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const contactUrl = process.env.CONTACT_URL || '/api/contact'

export default {
  env: {
    baseUrl,
    contactUrl
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  mode: 'universal',
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto|Varela Round|Ubuntu|Abril Fatface|Black+Han+Sans|Bowlby+One+SC|Syncopate|Abril+Fatface|Exo|Righteous&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/scss/custom.scss'
  ],
  plugins: [
    '~/plugins/anime.js',
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vue-notifications', mode: 'client' },
    { src: '~/plugins/vue-chartjs.js', mode: 'client' }
    // { src: '~plugins/vue-parallaxy', mode: 'client' },
    // { src: '~/plugins/vue-fb-customer-chat', mode: 'client' },
    // { src: '~/plugins/bootstrap-vue', mode: 'client' }
  ],
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'nuxt-simple-line-icons',
    'nuxt-svg-loader',
    'nuxt-responsive-loader',
    ['@nuxtjs/dotenv', { only: ['BASE_URL'] }],
    // https://npmjs.com/package/@nuxtjs/robots
    ['@nuxtjs/robots', {
      robots: [
        {
          UserAgent: '*',
          Disallow: null
        }
      ]
    }],
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap'
    // '@nuxtjs/recaptcha'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`,
    // components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BTable', 'BModal', 'BNavBar', 'BNav'],
    // directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy']
  },
  responsiveLoader: {
    name: 'img/oddwave-[hash:7]-[width].[ext]',
    quality: 100,
    min: 640,
    max: 1080,
    steps: 5,
    // sizes: [350, 500, 800, 1200, 1500, 1800], 
    // format: 'png',
    adapter: require('responsive-loader/sharp'),
    placeholder: false,

  },
  sitemap: {
    hostname: baseUrl,
    gzip: true,
  },
  // recaptcha: {
  //   hideBadge: Boolean, // Hide badge element (v3)
  //   language: String,   // Recaptcha language (v2)
  //   siteKey: String,    // Site key for requests
  //   version: Number     // Version
  // },
  serverMiddleware: [
    // { path: '/api/logger', handler: '~/api/logger.js' },
    { path: contactUrl, handler: '~/serverMiddleware/contact' }
  ],
  build: {
    // vendor: ['vue-fb-customer-chat'],
    /*
     ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
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
      // const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
      // vueLoader.options.transformAssetUrls = {
      //   video: ['src', 'poster'],
      //   source: 'src',
      //   img: 'src',
      //   image: 'xlink:href',
      //   'b-img': 'src',
      //   'b-img-lazy': ['src', 'blank-src'],
      //   'b-card': 'img-src',
      //   'b-card-img': 'src',
      //   'b-card-img-lazy': ['src', 'blank-src'],
      //   'b-carousel-slide': 'img-src',
      //   'b-embed': 'src'
      // }
    }
  }
}
