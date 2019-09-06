<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="text-light text-center bg-primary p-1">
    <b-row>
      <b-col md="6" sm="12">
        <b-img
          :src="pimage"
          class="img-fluid"
          :alt="pimagedesc"
        />
      </b-col>
      <b-col md="6">
        <span class="componenttext" v-html="pimagecontent" />
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
