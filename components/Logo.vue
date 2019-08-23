<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <nuxt-link :src="image" tag="img" to="/" />
      </div>
    </div>
  </div>
</template>

<script>
import image from '~/assets/odd_wave_logo.png'
export default {
  data () {
    return {
      image
    }
  }
}
</script>

<style scoped>
.logocontainer {
  height: 400px;
  background: black;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
