import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
// import { faMobileAlt, faMobile, faPalette, faEnvelope, faUser, faCameraRetro, faChartLine, faCoffee, fas, faTv } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faTwitter, faLinkedin, faInstagram, faServicestack, faNodeJs, faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fab.faServicestack)
library.add(fas.faEnvelope)
library.add(fas.faTv)
library.add(fas.faCheck)
library.add(fas.faUsers)
library.add(fab.faNodeJs)
library.add(fab.faFacebook)
library.add(fab.faTwitter)
library.add(fab.faLinkedin)
library.add(fab.faInstagram)
library.add(fas.faMobile)
library.add(fas.faMobileAlt)
library.add(fas.faPalette)
library.add(fas.faCameraRetro)
library.add(fas.faChartLine)
library.add(fas.faCoffee, fab.faJs, fab.faVuejs)
// icon({ prefix: 'fab', iconName: 'node-js' })

Vue.component('font-awesome-icon', FontAwesomeIcon)
