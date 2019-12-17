<template>
  <div class="no-gutters">
    <nuxt />
    <Footer class="clip-wave-top" />
    <svg class="clip-svg" height="0" width="0">
      <defs>
        <clipPath id="clip-wave" clipPathUnits="objectBoundingBox">
          <path d="M0,0,1,0,1,1 S0.9,0.92,0.6,0.97 S0.05,0.96,0,0.95 Z" />
        </clipPath>
        <clipPath id="clip-wave-top" clipPathUnits="objectBoundingBox">
          <path d="M0,0.02 0,1 1,1 1,0.02 S0.9,-0.02 0.6,0.02 S0.0,0 0,0Z" />
        </clipPath>
      </defs>
    </svg>
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
