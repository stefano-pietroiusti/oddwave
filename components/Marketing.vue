<!-- eslint-disable vue/no-v-html -->
<template>
  <b-jumbotron
    :bg-variant="pbgvariant"
    :text-variant="ptextvariant"
    border-variant="primary"
    class="text-break text-center"
  >
    <template slot="header" text-variant="primary">
      {{ pheader }}
    </template>
    <template slot="lead">
      <h3>{{ plead }}</h3>
    </template>
    <hr class="my-4 primary">
    <h4>{{ ptext }}</h4>
    <hr class="my-4 primary">
    <b-button :variant="pbuttonvariant" to="/contact" class="btn-lg">
      Enquire about {{ penquire }}
    </b-button>
  </b-jumbotron>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    pbgvariant: {
      type: String,
      default: 'primary'
    },
    ptextvariant: {
      type: String,
      default: 'light'
    },
    pbuttonvariant: {
      type: String,
      default: 'info'
    },
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
