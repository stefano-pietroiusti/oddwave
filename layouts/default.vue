<template>
  <div class="no-gutters">
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default {
  name: 'Main',
  components: {
    Nav,
    Footer
  },
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://theoddwave.co.nz${this.$route.path}`
        },
        {
          rel: 'alternate', hreflang: 'en', href: `https://theoddwave.co.nz${this.$route.path}`
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>
