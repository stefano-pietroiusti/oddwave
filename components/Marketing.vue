<!-- eslint-disable vue/no-v-html -->
<template>
  <b-jumbotron
    bg-variant="warning"
    text-variant="primary"
    border-variant="primary"
    class="text-break text-center"
  >
    <template
      slot="header"
      text-variant="primary"
    >
      BootstrapVue
    </template>
    <template slot="lead">
      <h3>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
        featured content or information.
      </h3>
    </template>
    <hr class="my-4 primary">
    <h4>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </h4>
    <hr class="my-4 primary">
    <b-button variant="info" to="/contact" class="btn-lg">
      Enquire about this service
    </b-button>
  </b-jumbotron>
</template>
<script>
/* eslint-disable */
export default {
  props: ['pcontent']
}
</script>
<style scoped>
</style>
