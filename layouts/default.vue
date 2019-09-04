<template>
  <div id="main">
    <Nav />
    <nuxt />
    <!-- <FooterResponsive /> -->
  </div>
</template>

<script>
import Nav from '@/components/Nav'
// import FooterResponsive from '@/components/FooterResponsive'
export default {
  name: 'Main',

  components: {
    Nav
    // FooterResponsive
  }
}
</script>
<style scoped>
</style>
