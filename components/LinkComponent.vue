<template>
  <b-container fluid class="text-center p-5">
    <b-row>
      <b-col md="12">
        <nuxt-link :to="blink" class="linkComponent">
          {{ btext }}
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: ['btext', 'blink']
}
</script>
<style scoped>
</style>
