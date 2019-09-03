import Vue from 'vue'
// import VueWordCloud from 'vue-wordcloud'

let VueWordCloud

if (process.client) {
  VueWordCloud = require('vue-wordcloud')
} else {
  VueWordCloud = { component: { template: '<div></div>' } }
}

Vue.use(VueWordCloud)
