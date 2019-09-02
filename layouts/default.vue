<template>
  <div>
    <Nav />
    <nuxt />
    <FooterResponsive />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import FooterResponsive from '@/components/FooterResponsive'
export default {
  components: {
    Nav,
    FooterResponsive
  }
}
</script>
<style scoped />
