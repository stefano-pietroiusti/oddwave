<template>
  <div class="mt-50">
    <!-- <div class="bg-image" />
    <div class="bg-text">
      <h1>I am John Doe</h1>
      <p>And I'm a Photographer</p>
    </div> -->
    <!-- <div class="parallax">
      <parallax class="page-header-image" style="background-image: url('img/bg6.jpg')" />
    </div> -->
    <div class="text-center mb-2 mt-10">
      <!-- <Logo /> -->
      <Header />
    </div>
    <div class="text-center mb-5">
      <About />
    </div>

    <div class="text-center mb-5">
      <Contact />
    </div>
    <div class="text-center mb-5">
      <Team />
    </div>

    <div>
      <ServiceCards />
    </div>
    <div>
      <ServiceHeatmap />
    </div>
  </div>
</template>

<script>
// import Logo from '@/components/Logo'
import Header from '@/components/Header'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Team from '@/components/Team'
import ServiceCards from '@/components/ServiceCards'
import ServiceHeatmap from '@/components/ServiceHeatmap'

export default {
  components: {
    // Logo,
    Header,
    About,
    Contact,
    Team,
    ServiceCards,
    ServiceHeatmap
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
