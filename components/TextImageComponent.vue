<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container
    fluid
    class="imageBannerComponent text-center"
    :style="{ backgroundImage: `url(${pcontent.image})` }"
  >
    <b-row>
      <b-col>{{ pcontent.text }}</b-col>
    </b-row>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    pcontent: {
      type: Object,
      default: function() {
        return { text: 'sample text', image: '~assets/imgs/sample.jpg' }
      }
    }
  }
}
</script>
<style scoped>
</style>
