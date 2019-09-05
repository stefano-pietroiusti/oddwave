<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="textComponent">
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

.textComponent {
  background-color: var(--white);
  /* box-shadow: 0 3px 6px var(--info), 0 3px 6px var(--info); */
  color:black;
  opacity: 1;
  margin: 5px;
  padding: 1;
  height: auto;
  font-size: 20px;
  line-height: 2;
  text-align: center;
   border-radius: 10px 30px 10px;
   width: 99.3%;
}


.shadow {
  box-shadow: 0 3px 6px var(--danger), 0 3px 6px var(--danger);
}

</style>
