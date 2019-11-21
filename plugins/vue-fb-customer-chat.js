import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: '112718130121744',
  theme_color: '#355691',
  location: 'en_UK',
  logged_in_greeting: 'Kia Ora! How can we help you?',
  logged_out_greeting: 'Kia Ora! How can we help you?'
})
