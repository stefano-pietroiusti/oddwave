<template>
  <div>
    <Nav />
    <nuxt />
    <ContactForm />
    <FooterResponsive />
    <!-- <FooterFixed /> -->
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import FooterResponsive from '@/components/FooterResponsive'
import ContactForm from '@/components/ContactForm'
// import FooterFixed from '@/components/FooterFixed'
export default {
  components: {
    Nav,
    ContactForm,
    FooterResponsive
    // FooterFixed
  }
}
</script>
<style scoped />
