<template>
  <div id="contactContainer" class="text-left mt-header w-100 h-100">
    <AnimeBannerWordsHeaderComponent :pheader="pheader" :pbgimage="pheaderImage" :pstyle="pstyle" />
    <ContactForm :pservices="services" :pbgimage="pheaderImage" :pstyle="pstyle" />
  </div>
</template>
<script>
import AnimeBannerWordsHeaderComponent from '@/components/AnimeBannerWordsHeaderComponent'
import ContactForm from '@/components/ContactForm'
export default {
  components: {
    AnimeBannerWordsHeaderComponent,
    ContactForm
  },
  head () {
    return {
      title: 'The Odd Wave digital and web design services',
      meta: [
        { name: 'twitter:title', content: 'The Odd Wave' },
        { name: 'twitter:description', content: 'Nuxt + Vue School = 🍕' },
        { name: 'twitter:image', content: 'https://i.imgur.com/UYP2umJ.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },
  data (context) {
    return {
      // pimage,
      pimage: 'none',
      pheader: "LET'S CREATE SOME AWESOMENESS",
      pheaderImage: { color1: 'rgba(255, 255, 255, 0.2)', color2: 'rgba(0, 255, 255, 0.5)', url: '/imgs/contact.jpg', height: 50 },
      pstyle: { bgStyle: 'parralaxNormal text-primary text-left p-5' },
      psubheader: 'Contact form subheader',
      email: 'team@theoddwave.co.nz',
      phone: '+64 210 8823 769'
    }
  },
  computed: {
    subheader () {
      return ' ' + this.email + ' ' + this.phone
    },
    services () {
      return this.$store.state.services.all.map((item) => {
        return { value: item.id, text: item.title, selected: true }
      })
    }
  }
}
</script>
<style scoped>
#contactContainer {
  display: inline-block;
  position: relative;
  width: 50%;
  bottom: 0;
  margin: auto;
}
</style>
