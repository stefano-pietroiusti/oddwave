<template>
  <b-container fluid class="m-0 p-5">
    <b-row>
      <b-col>
        <b-button :variant="variant" :to="blink" class="text-medium">
          {{ btext }}
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    btext: {
      type: String,
      default: ''
    },
    blink: {
      type: String,
      default: 'Get Started'
    },
    pvariant: {
      type: String,
      default () {
        return 'outline-success'
      }
    }
  },
  computed: {
    variant () {
      return this.pvariant
    }
  }
}
</script>
<style scoped>
</style>
