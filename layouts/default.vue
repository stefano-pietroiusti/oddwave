<template>
  <div>
    <Nav />
    <nuxt />
    <FooterResponsive />
    <!-- <FooterFixed /> -->
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import FooterResponsive from '@/components/FooterResponsive'
// import FooterFixed from '@/components/FooterFixed'
export default {
  components: {
    Nav,
    FooterResponsive
    // FooterFixed
  }
}
</script>
<style scoped />
