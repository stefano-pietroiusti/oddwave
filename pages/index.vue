<template>
  <div>
    <!-- <div class="parallax">
      <parallax class="page-header-image" style="background-image: url('img/bg6.jpg')" />
    </div>-->
    <div>
      <ServicesCloud />
    </div>
    <div>
      <Header />
    </div>
    <div>
      <About />
    </div>
    <!--
    <div class="text-center mb-5">
      <Contact />
    </div> -->
    <div>
      <ServiceHeatmap />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import About from '@/components/About'
// import Contact from '@/components/Contact'
import ServiceHeatmap from '@/components/ServiceHeatmap'
import ServicesCloud from '@/components/ServicesCloud'

export default {
  components: {
    Header,
    About,
    // Contact,
    ServiceHeatmap,
    ServicesCloud
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
  data () {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>
<style scoped>
</style>
