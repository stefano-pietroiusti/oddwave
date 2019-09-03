<template>
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col">
        <h6>
          <nuxt-link
            :to="blink"
            class="w-100"
          >
            {{ btext }}
          </nuxt-link>
        </h6>
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
h6 a {
background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  border: #000;
  font-size: 20px;
  color: #333;
  letter-spacing: 2px;
  padding: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 600;
  width: 100%;
  border-radius: 4px;
  line-height: 1.5;
  text-decoration: none;
}
h6 a:hover {
  background-color: #ec9390;
}
</style>
