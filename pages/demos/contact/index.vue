<template>
  <ContactForm />
</template>

<script>
import ContactForm from '@/components/ContactForm'

export default {
  components: {
    ContactForm
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
