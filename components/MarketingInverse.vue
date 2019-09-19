<!-- eslint-disable vue/no-v-html -->
<template>
  <b-jumbotron
    bg-variant="secondary"
    text-variant="primary"
    fluid
    class="text-left m-0"
  >
    <template slot="header">
      <h3>
        {{ pheader }}
      </h3>
    </template>
    <template slot="lead">
      <h4>
        {{ plead }}
      </h4>
    </template>
    <hr class="my-4 hrprimary">
    <h4>
      {{ ptext }}
    </h4>
    <hr class="my-4 hrprimary">
    <b-button variant="info" to="/contact" class="btn-lg">
      <h3>
        {{ penquire }}
      </h3>
    </b-button>
  </b-jumbotron>
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
