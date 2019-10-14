import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faMobileAlt, faPalette, faEnvelope, faUser, faCameraRetro, faChartLine, fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faServicestack, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)
library.add(faServicestack)
library.add(faEnvelope)
library.add(faUser)
library.add(faFacebook)
library.add(faTwitter)
library.add(faLinkedin)
library.add(faInstagram)
library.add(faMobileAlt)
library.add(faPalette)
library.add(faNodeJs)
library.add(faCameraRetro)
library.add(faChartLine)
// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
