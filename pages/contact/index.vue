<template>
  <b-container fluid class="imageContainerImage text-center mt-header w-100 " :style="{ backgroundImage: `url(${pimage})` }">
    <!-- <HeaderComponent :pheader="email" :psubheader="phone" /> -->
    <ContactForm :pservices="services" />
  </b-container>
</template>
<script>
// import pimage from '~/static/color-spectrum-3.jpg'
// import HeaderComponent from '@/components/HeaderComponent'
import ContactForm from '@/components/ContactForm'
export default {
  components: {
    // HeaderComponent,
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
      pheader: 'Get in touch',
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
.imageContainerImage {
  position: relative;
  background-attachment:fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

  .my-buttons .active {
    color: #fff !important;
    background-color: #28a745 !important;
    border-color: #28a745 !important;
  }
</style>
