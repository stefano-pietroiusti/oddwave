<template>
  <div class="text-center mt-header w-100">
    <HeaderComponent :pheader="pheader" :psubheader="psubheader" />
    <ContactForm />
  </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent'
import ContactForm from '@/components/ContactForm'
export default {
  components: {
    HeaderComponent,
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
      pheader: 'Contact',
      psubheader:
        'Contact form subheader'
    }
  }
}
</script>
<style scoped>
</style>
