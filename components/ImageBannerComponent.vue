<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container
    fluid
    class="imageBannerComponent text-center"
    :style="{ backgroundImage: `url(${pimage})` }"
  >
    <b-row>
      <b-col>{{ pcontent }}</b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    pimage: {
      type: String,
      default: '/workingtogether.jpg'
    },
    pcontent: {
      type: String,
      default:
        'testing content testing content testing content testing content testing content testing content testing content testing content testing content'
    }
  }
}
</script>
<style scoped>
</style>
