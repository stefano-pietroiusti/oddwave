require('dotenv').config()

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/oddwave/'
  }
} : {}

const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

export default {
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    baseUrl,
    // maxImageSize: 1080
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
    '@/assets/scss/custom.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/anime.js',
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vue-notifications', mode: 'client' },
    { src: '~/plugins/vue-chartjs.js', mode: 'client' }
    // { src: '~plugins/vue-parallaxy', mode: 'client' },
    // { src: '~/plugins/vue-fb-customer-chat', mode: 'client' },
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
    // exclude: [
    //   '/secret',
    //   '/admin/**'
    // ],
    // routes: [
    //   '/page/1',
    //   {
    //     url: '/page/2',
    //     changefreq: 'daily',
    //     priority: 1,
    //     lastmodISO: '2017-06-30T13:30:00.000Z'
    //   }
    // ]
  },
  // recaptcha: {
  //   hideBadge: Boolean, // Hide badge element (v3)
  //   language: String,   // Recaptcha language (v2)
  //   siteKey: String,    // Site key for requests
  //   version: Number     // Version
  // },
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
    extend(config, { isDev, isClient }) {
      // Run ESLint on save

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

      // https://stackoverflow.com/questions/48606325/how-to-resize-images-for-different-responsive-views
      // tell webpack not to include jpgs and pngs
      // config.module.rules.find(
      //   rule => rule.loader === "url-loader"
      // ).exclude = /\.(jpe?g|png)$/;

      // //configure the responsive-loader
      // config.module.rules.push({
      //   test: /\.(jpe?g|png)$/i,
      //   loader: 'responsive-loader',
      //   options: {
      //     min: 575,
      //     max: 1140,
      // //     min: 350,
      // //     max: 2800,          
      //     steps: 7,
      //     placeholder: false,
      //     quality: 60,
      //     adapter: require("responsive-loader/sharp")
      //   }
      // })
      // https://www.ahus1.de/post/nuxt-optimize-for-speed#optimise-raster-images-with-the-responsive-loader
      // config.module.rules.unshift({
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: {
      //     loader: 'responsive-loader',
      //     options: {
      //       // disable: isDev,
      //       placeholder: true,
      //       quality: 85,
      //       placeholderSize: 30,
      //       name: 'img/[name].[hash:hex:7].[width].[ext]',
      //       adapter: require('responsive-loader/sharp')
      //     }
      //   }
      // })

      // // remove old pattern from the older loader
      // config.module.rules.forEach(value => {
      //   if (String(value.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
      //     // reduce to svg and webp, as other images are handled above
      //     value.test = /\.(svg|webp)$/
      //     // keep the configuration from image-webpack-loader here unchanged
      //   }
      // })
    }
  }
}
