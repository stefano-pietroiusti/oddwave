require('dotenv').config()

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/oddwave/'
  }
} : {}
/*
https://theoddwave.co.nz/
https://theoddwave.co.nz/services/website-design-auckland/
https://theoddwave.co.nz/services/seo-auckland/
https://theoddwave.co.nz/services/ppc-auckland/
https://theoddwave.co.nz/services/photographer-nz/
https://theoddwave.co.nz/services/consulting-services/
https://theoddwave.co.nz/products/photography-website/
https://theoddwave.co.nz/products/pro-business-website-landing/
https://theoddwave.co.nz/products/pro-business-website/
https://theoddwave.co.nz/products/nuxtjs-templates-nz/
https://theoddwave.co.nz/products/seo-website-package-1/
https://theoddwave.co.nz/products/seo-website-package-5/
https://theoddwave.co.nz/products/seo-website-package-10/
https://theoddwave.co.nz/products/seo-website-package-20/
https://theoddwave.co.nz/products/website-digital-photo-24/
https://theoddwave.co.nz/products/website-digital-photo-100/
https://theoddwave.co.nz/products/film-photography-nz/
https://theoddwave.co.nz/products/consulting-nz/
https://theoddwave.co.nz/contact/
*/
const routes = [
  '/services/seo-nz',
  '/services/ppc-nz',
  '/services/web-design-nz',
  '/services/photographer-nz',
  '/services/contracting-nz/',
  '/products/photography-website/',
  '/products/pro-business-website-landing/',
  '/products/pro-business-website/',
  '/products/nuxtjs-templates-nz/',
  '/products/seo-website-package-1/',
  '/products/seo-website-package-5/',
  '/products/seo-website-package-10/',
  '/products/seo-website-package-20/',
  '/products/website-digital-photo-24/',
  '/products/website-digital-photo-100/',
  '/products/film-photography-nz/',
  '/products/contracting-nz/'
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
  render: {
    static: {
      setHeaders(res) {
        // res.setHeader('X-Frame-Options', 'ALLOWALL')
        // res.setHeader('Access-Control-Allow-Origin', '*')
        // res.setHeader('Access-Control-Allow-Methods', 'GET')
        // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict")
      }
    }
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
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { 'http-equiv': 'content-type', content: 'text/html; charset=UTF-8' },
      { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
      { 'http-equiv': 'Pragma', content: 'no-cache' },
      { 'http-equiv': 'Expires', content: '0' },
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
      // { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', defer: true }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: `${author}` }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Varela Round|Ubuntu&display=swap' },
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/scss/custom.scss'
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/jsonld',
    { src: '~/plugins/vue-notifications', mode: 'client' },
    { src: '~/plugins/lax.js', mode: 'client' },
    { src: '~/plugins/vue-fb-customer-chat', mode: 'client' }
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
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/recaptcha',
    'nuxt-webfontloader',
    ['@nuxtjs/google-analytics', {
      id: 'UA-148813087-1'
    }]
  ],
  webfontloader: {
    // google: {
    //   families: [
    //     'Montserrat:400,700',
    //     'Lato'
    //   ],
    //   urls: [
    //     'https://fonts.googleapis.com/css?family=Montserrat:400,700|Lato&display=swap'
    //   ]
    // },
    custom: {
      families: [
        'Montserrat:100, 400,700',
        'Lato'
      ],
      urls: [
        'https://fonts.googleapis.com/css?family=Montserrat:100,400,700&display=swap',
        'https://fonts.googleapis.com/css?family=Lato&display=swap'
      ]
    },
    timeout: 2000
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
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
    placeholder: true

  },
  robots: {
    UserAgent: '*',
    // Disallow: '',
    // Disallow: '/services/website-design-build-auckland/',
    // Disallow: '/services/pwa-website-design-auckland/',
    // Disallow: '/services/photography-auckland/',
    // Disallow: '/services/seo',
    // Disallow: '/services/webdesign/',
    // Disallow: '/services/ppc/',
    // Disallow: '/services/photography/',
    // Disallow: '/services/creative-photographer-auckland/',
    Disallow: [
      '/services/website-design-auckland/',
      '/services/website-design-build-auckland/',
      '/services/ppc-auckland/',
      '/services/seo-auckland/',
      '/services/ppc/',
      '/services/pwa-website-design-auckland/',
      '/services/photography-auckland/',
      '/services/seo/',
      '/services/webdesign/',
      '/services/photography/',
      '/services/creative-photographer-auckland/'
    ],
    Sitemap: baseUrl + '/sitemap.xml'
  },
  sitemap: {
    hostname: baseUrl,
    gzip: false,
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
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
