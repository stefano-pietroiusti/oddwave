<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="bg-white text-left">
    <b-jumbotron
      bg-variant="primary"
      text-variant="secondary"
      border-variant="secondary"
      fluid
    >
      <template slot="header">
        <h3 class="text-left">
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
        <h3 class="text-left">
          {{ penquire }}
        </h3>
      </b-button>
    </b-jumbotron>
  </div>
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
