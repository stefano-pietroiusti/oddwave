<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="componenttext text-primary">
    <b-row>
      <b-col md="12">
        <span v-if="isImage" class="text-secondary spanImage" :style="{ backgroundImage: `url(${pimage})` }" v-html="pcontent" />
        <span v-else v-html="pcontent" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: ['pcontent', 'pimage'],
  computed: {
    isImage: function() {
      return this.pimage ? true : false
    }
  }
}
</script>
<style scoped>
.componenttext {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.spanImage  {
padding-left:25px;
display: inline-block;
height: 100%;
width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
