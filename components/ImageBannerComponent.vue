<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="container imageBannerComponent">
    <div class="row no-gutters imageBannerComponent">
      <div class="col no-gutters imageBannerComponent">
        <b-img :src="pimage" class="img-fluid imageBannerComponent" :alt="pimagedesc" />
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  props: ['pimage', 'pimagedesc', 'pimagecontent']
}
</script>
<style scoped>
.imageBannerComponent {
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
  padding-left: 0;
  width: 100vw;
}
.img-fluid,
.img-thumbnail {
  width: 100vw;
  height: auto;
}
</style>
