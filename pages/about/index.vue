<template>
  <div class="text-center mt-header w-100">
    <HeaderComponent :pheader="pheader" :psubheader="psubheader" />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'

export default {
  components: {
    HeaderComponent
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
      pheader: 'We are everything you have ever dreamed of',
      psubheader: 'We will help you live better by playing tennis with you every day'
    }
  }
}
</script>
<style scoped>
</style>
