<template>
  <div class="demo">
    <div class="demo">
      <HeaderComponent :pheader="pheader" :psubheader="psubheader" />
    </div>
    <div>
      <ServicesTags />
    </div>
    <div class="demoVueParallaxyImage">
      <!-- <VueParallaxyComponent /> -->
    </div>
    <div>
      <ParticlesComponent />
    </div>
    <div>
      <LogoAnimation :pheader="pheader" :psubheader="psubheader" />
    </div>
    <!-- <div>
      <SvgComponent />
    </div> -->
    <!-- <div>
      <AnimePlugin />
    </div> -->
  </div>
</template>

<script>
import LogoAnimation from '@/components/Demos/LogoAnimation'
import HeaderComponent from '@/components/HeaderComponent'
import ServicesTags from '@/components/Demos/ServicesTags'
import ParticlesComponent from '@/components/Demos/ParticlesComponent'
// import VueParallaxyComponent from '@/components/Demos/VueParallaxyComponent'

// import ParallaxComponent from '@/components/Demos/ParallaxComponent'
// import AnimePlugin from '@/components/Demos/AnimePlugin'
// import SvgComponent from '@/components/Demos/SvgComponent'

export default {
  components: {
    HeaderComponent,
    LogoAnimation,
    ServicesTags,
    ParticlesComponent
    // VueParallaxyComponent
    // AnimePlugin,
    // SvgComponent
  },
  head () {
    return {
      title: 'The Odd Wave digital and web design services DEMOS'
    }
  },
  data (context) {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      headerText: 'testing',
      pheader: 'Digital marketing and web design services',
      psubheader:
        'helping businesses of all sizes work smarter in the most efficient ways possible'
    }
  }
}
</script>
<style scoped>
</style>
