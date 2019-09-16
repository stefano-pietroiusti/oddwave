<!-- eslint-disable vue/no-v-html -->
<template>
  <no-ssr>
    <b-container fluid class="bg-white text-left w-100">
      <b-jumbotron
        bg-variant="secondary"
        text-variant="primary"
        border-variant="primary"
        class="text-center w-100"
      >
        <template slot="header">
          {{ pheader }}
        </template>
        <template slot="lead">
          <h3>{{ plead }}</h3>
        </template>
        <hr class="my-4 hrprimary">
        <h4>{{ ptext }}</h4>
        <hr class="my-4 hrprimary">
        <b-button variant="info" to="/contact" class="btn-lg">
          {{ penquire }}
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
