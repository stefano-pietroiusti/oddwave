<!-- eslint-disable vue/no-v-html -->
<template>
  <b-jumbotron
    bg-variant="primary"
    text-variant="light"
    border-variant="primary"
    class="mt-50 w-50"
  >
    <template slot="header">
      BootstrapVue
    </template>

    <template slot="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>

    <b-button variant="primary" href="#">
      Do Something
    </b-button>
    <b-button variant="success" href="#">
      Do Something Else
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
/* .marketing {
  -webkit-box-shadow: 5px 5px 5px var(--primary);
} */
</style>
