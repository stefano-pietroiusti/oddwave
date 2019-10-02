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
    const canonical = `${process.env.baseUrl}${this.$route.path}`
    const link = [
      { rel: 'canonical', href: canonical }
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
