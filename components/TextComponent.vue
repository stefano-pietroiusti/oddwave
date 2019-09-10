<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="componenttext">
    <b-row>
      <b-col md="12">
        <span v-html="pcontent" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: ['pcontent']
}
</script>
<style scoped>
</style>
