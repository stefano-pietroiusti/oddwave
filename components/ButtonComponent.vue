<template>
  <b-button
    pill
    :variant="pvariant"
    :to="blink"
    class="buttonComponent letter-spacing  m-2 animated pulse delay-1s"
  >
    {{ btext }}
  </b-button>

  <!-- <b-container fluid class="m-0 p-5">
    <b-row>
      <b-col>
        <b-button :variant="variant" :to="blink" class="text-medium" :alt="btext">
          {{ btext }}
        </b-button>
      </b-col>
    </b-row>
  </b-container> -->
</template>
<script>
export default {
  props: {
    btext: {
      type: String,
      default: 'Buy Now'
    },
    blink: {
      type: String,
      default: '/contact-theoddwave-nz/'
    },
    pvariant: {
      type: String,
      default () {
        return 'secondary'
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
