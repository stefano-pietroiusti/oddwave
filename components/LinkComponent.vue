<template>
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col">
        <h3>
          <nuxt-link
            :to="blink"
            class="linkComponent"
          >
            {{ btext }}
          </nuxt-link>
        </h3>
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
