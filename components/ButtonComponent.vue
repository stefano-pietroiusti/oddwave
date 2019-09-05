<template>
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col">
        <nuxt-link
          :to="blink"
          class="buttonComponent"
        >
          {{ btext }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  props: ['btext', 'blink']
}
</script>
<style scoped>


</style>
