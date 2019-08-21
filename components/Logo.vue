<template>
  <div class="logocontainer">
    <!-- <div class="card">
      <img class="card-img-top" src="~/assets/odd_wave_logo.png" alt="Card image cap">
      <div class="card-body">
        <p
          class="card-text"
        >
        </p>
      </div>
    </div> -->
    <div class="card">
      <nuxt-link :src="image" tag="img" to="/" />
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
