<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="text-light text-center imageComponent">
    <b-row class="mb-3 m-0">
      <b-col md="6" class="ml-auto p-3 imageComponentText">
        <span class v-html="pimagecontent" />
      </b-col>
      <b-col md="6" class="p-3 m-0 p-0">
        <b-img :src="pimage" class="img-fluid imageComponentImage" :alt="pimagedesc" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: ['pimage', 'pimagedesc', 'pimagecontent']
}
</script>
<style scoped>

</style>
