<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="container-fluid imageComponent">
    <div class="row">
      <div class="col-l-6 col-m-6">
        <b-img :src="pimage" class="rounded-circle img-fluid imageComponentImage" :alt="pimagedesc" />
      </div>
      <div class="col-l-6 col-m-6 imageComponentText">
        <span v-html="pimagecontent" />
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

</style>
