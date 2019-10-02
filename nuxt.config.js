require('dotenv').config()

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/oddwave/'
  }
} : {}

const routes = [
  '/services/seo',
  '/services/ppc',
  '/services/webdesign',
  '/services/photography',
]

const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const contactUrl = process.env.CONTACT_URL || '/api/contact'
const recaptchaSiteKey = process.env.SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
const author = process.env.AUTHOR || 'https://www.linkedin.com/in/scpietro/'

export default {
  env: {
    baseUrl,
    contactUrl,
    recaptchaSiteKey,
    author
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
    routes,
    fallback: true
  },
  ...routerBase,
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: process.env.npm_package_name || 'The Odd Wave of digital marketing & website design in Auckland, New Zealand',
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'author', name: 'author', content: 'The Odd Wave Limited' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'The Odd Wave Limited' },
      { hid: 'og:image', property: 'og:image', content: `${baseUrl}/theoddwave.jpg` },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'The Odd Wave of Website Design and Digital marketing services based in Auckland, New Zealand'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'The Odd Wave of Website Design and Digital marketing services based in Auckland, New Zealand'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: `${author}` },
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
    { src: '~/plugins/vue-chartjs.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' }

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
    '@nuxtjs/dotenv',
    ['@nuxtjs/robots', { UserAgent: '*', Disallow: '' }],
    '@nuxtjs/sitemap',
    '@nuxtjs/recaptcha'
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
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: baseUrl + '/sitemap.xml'
  },
  sitemap: {
    hostname: baseUrl,
    gzip: false,
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    trailingSlash: true,
    defaults: {
      changefreq: 'daily',
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  recaptcha: {
    siteKey: recaptchaSiteKey,
    version: 2
  },
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
