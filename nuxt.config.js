require('dotenv').config()

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/oddwave/'
  }
} : {}

const routes = [
  '/services/seo-auckland',
  '/services/ppc-auckland',
  '/services/pwa-website-design-auckland',
  '/services/photography-auckland',
]

const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const contactUrl = process.env.CONTACT_URL || '/api/contact'
const recaptchaSiteKey = process.env.SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
const author = process.env.AUTHOR || 'https://www.linkedin.com/in/scpietro/'
const nodeEnv = process.env.NODE_ENV || 'development'
export default {
  env: {
    baseUrl,
    contactUrl,
    recaptchaSiteKey,
    author,
    nodeEnv
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
    title: process.env.npm_package_name || 'The Odd Wave of digital marketing, website design and PWA dev from Auckland, New Zealand',
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {'http-equiv':'content-type', content:'text/html; charset=UTF-8'},
      {'http-equiv':'Cache-Control', content:'no-cache, no-store, must-revalidate'},
      {'http-equiv':'Pragma', content:'no-cache'},
      {'http-equiv':'Expires', content:'0'},     
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'author', name: 'author', content: author },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'The Odd Wave Limited' },
      { hid: 'og:image', property: 'og:image', content: `${baseUrl}/theoddwave.jpg` },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      // { hid: 'fb:page_id', property: 'fb:page_id', content: '43929265776' },      
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
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', defer: true },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: `${author}` },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Varela Round|Ubuntu&display=swap' },
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
    { src: '~/plugins/ga.js', mode: 'client' }
  ],
  devModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    // 'nuxt-svg-loader',
    'nuxt-responsive-loader',
    '@nuxtjs/dotenv',
    ['@nuxtjs/robots', { UserAgent: '*', Disallow: '' }],
    '@nuxtjs/sitemap',
    '@nuxtjs/recaptcha',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      // families: ['Varela Round:400,700', 'Ubuntu:400,700']
      families: ['Montserrat', 'Lato']

    },
    custom: {
			families: ['FontAwesome'],
		        urls: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css']
    },
    timeout: 2000
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    // components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BTable', 'BModal', 'BNavBar', 'BNav'],
    // directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy']
  },
  responsiveLoader: {
    name: 'img/theoddwave-[hash:7]-[width].[ext]',
    quality: 70,
    // min: 320,
    // max: 1440,
    // steps: 6,
    sizes: [320, 375, 425, 768, 1024, 1440], 
    // format: 'png',
    adapter: require('responsive-loader/sharp'),
    placeholder: true,

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
