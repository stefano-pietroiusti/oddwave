<template>
  <b-container fluid class="text-center m-0 p-0">
    <b-row>
      <b-button :variant="variant" :to="blink" class="buttonComponent" block>
        {{ btext }}
      </b-button>
    </b-row>
    <!-- <b-row>
      <b-col sm="2" md="2" lg="4" xl="4" />
      <b-col sm="8" md="8" lg="4" xl="4" class="text-center">
        <b-button :variant="variant" :to="blink" class="buttonComponent" fluid block>
          {{ btext }}
        </b-button>
      </b-col>
      <b-col sm="2" md="2" lg="4" xl="4" />
    </b-row> -->
    </b-button>
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
