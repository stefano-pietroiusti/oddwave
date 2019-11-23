<template>
  <div class="no-gutters">
    <!-- <svg width="0" height="0">
      <defs>
        <clipPath id="wave" clipPathUnits="objectBoundingBox">
          <path
            d="M 0,1 L 0,0 L 1,0 L 1,1 C .65 .8, .35 .8, 0 1 Z"
          />

        </clipPath>
      </defs>
    </svg> -->
    <svg width="100%">
      <clipPath id="wave" clipPathUnits="objectBoundingBox">
        <path d="M1,0c0,0-0.3,0.5-0.5,0.3S0.3,0,0,0.1V1h1L1,0z" />
        <!-- <path
          d="M 0,1
          L 0,0
          L 1,0
          L 1,1
          C .65 .8, .35 .8, 0 1
          Z"
        /> -->
      </clipPath>
    </svg>
    <!-- <Nav /> -->
    <nuxt />
    <Footer class="waveClip" />
  </div>
</template>

<script>
// import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  name: 'Main',
  components: {
    // Nav,
    Footer
  },
  head () {
    const canonical = `${process.env.baseUrl}${this.$route.path}`
    const link = [
      { hid: 'canonical', rel: 'canonical', href: canonical }
      // { rel: 'alternate', hreflang: 'en', href: `https://nuxtjs.org${this.$route.path}` },
    ]
    link.forEach((l) => {
      if (l.href.slice(-1) !== '/') {
        l.href = l.href + '/'
      }
    })
    return {
      link
      // link: [
      //   {
      //     rel: 'canonical',
      //     href: `${process.env.baseUrl}${this.$route.path}/`
      //   }
      // ]
    }
  }
}
</script>
<style scoped>
</style>
