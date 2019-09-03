<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="text-light text-center bg-dark shadow">
    <b-row class="mb-3 m-0">
      <b-col md="6" class="p-3 m-0 p-0">
        <b-img :src="pimage" class="img-fluid imageComponentImage" :alt="pimagedesc" />
      </b-col>
      <b-col md="6" class="ml-auto p-3 bg-info imageComponentText">
        <span class v-html="pimagecontent" />
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
.imageComponent {
  padding: 2vw;
  background-size: 100% auto;
  background-position: center top;
  background-attachment: fixed;
  /* -webkit-filter: grayscale(100%) opacity(30%);
 filter: grayscale(100%) opacity(30%); */
}

.imageComponentImage {
  background-color: var(--danger);
  box-shadow: 0 3px 6px var(--danger), 0 3px 6px var(--danger);
  opacity: 1;
  margin: auto;
  padding: 0.2vw;
}
.imageComponentText {
  background-color: var(--danger);
  box-shadow: 0 3px 6px var(--danger), 0 3px 6px var(--danger);
  opacity: 1;
  margin: auto;
  padding: 0.2vw;
  height: auto;
}

.shadow {
  box-shadow: 0 3px 6px var(--danger), 0 3px 6px var(--danger);
}

</style>
