<!-- eslint-disable vue/no-v-html -->
<template>
  <no-ssr>
    <b-container fluid class="bg-white">
      <b-jumbotron
        bg-variant="primary"
        text-variant="secondary"
        border-variant="secondary"
        class="text-break text-left"
      >
        <template slot="header">
          <h3 class="text-break text-left">
            {{ pheader }}
          </h3>
        </template>
        <template slot="lead">
          <h4>
            {{ plead }}
          </h4>
        </template>
        <hr class="my-4 hrsecondary">
        <h4>
          {{ ptext }}
        </h4>
        <hr class="my-4 hrsecondary">
        <b-button variant="info" to="/contact" class="btn-lg">
          Enquire about {{ penquire }}
        </b-button>
      </b-jumbotron>
    </b-container>
  </no-ssr>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    pheader: {
      type: String,
      default: 'Marketing'
    },
    plead: {
      type: String,
      default:
        'Marketing lead text  lead text  lead text  lead text  lead text  lead text  lead text '
    },
    ptext: {
      type: String,
      default:
        'Marketing text Marketing text Marketing text Marketing text Marketing text Marketing text'
    },
    penquire: {
      type: String,
      default: 'Service'
    }
  }
}
</script>
<style scoped>
</style>
