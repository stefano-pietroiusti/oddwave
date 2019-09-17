<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container id="marketingButton" class="bg-transparent p-5" container>
    <b-button :variant="variant" to="/contact" class="btn-lg">
      <h3 class="text-left">
        {{ penquire }}
      </h3>
    </b-button>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    penquire: {
      type: String,
      default: ''
    },
    pstyle: {
      type: Object,
      default() {
        return {
          color: 'text-primary',
          buttonVariant: 'info'
        }
      }
    }
  },
  computed: {
    variant() {
      return this.pstyle.buttonVariant
    }
  }
}
</script>
<style scoped>
</style>
