import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(fab.faServicestack)
library.add(fas.faEnvelope)
library.add(fas.faPhone)
library.add(fas.faGreaterThanEqual)
library.add(fas.faSearch)
library.add(fas.faAward)
library.add(fas.faSearchDollar)
library.add(fab.faDev)
library.add(fab.faGoogle)
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

Vue.component('font-awesome-icon', FontAwesomeIcon)
