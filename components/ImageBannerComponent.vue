<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="imageBannerComponent text-center" :style="{ backgroundImage: `url(${pimage})` }">
    <b-row>
      <b-col>
        {{ pimagecontent }}
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: ['pimage', 'pimagedesc', 'pimagecontent']
}
// export default {
//   data(){
//          return { backgroundUrl:'~assets/imgs/sample.jpg' }
// },
//   props: ['pimage', 'pimagedesc', 'pimagecontent']
// }
</script>
<style scoped>
</style>
