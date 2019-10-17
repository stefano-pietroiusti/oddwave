<template>
  <b-container fluid class="m-0 p-5">
    <b-row>
      <b-col>
        <b-button :variant="variant" :to="blink" class="text-medium btn-ripple">
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
    pstyle: {
      type: Object,
      default () {
        return {
          color: 'info',
          buttonVariant: 'info'
        }
      }
    }
  },
  computed: {
    variant () {
      return this.pstyle.buttonVariant
    }
  }
}

</script>
<style scoped>
</style>
