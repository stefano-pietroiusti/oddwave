<template>
  <div class="container mt-header">
    <div class="square">
      <div class="overlay" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
.container {
   background-color: rgb(0, 0, 0);
  position: relative;
  overflow: hidden;
  width: 600px;
    height: 600px;
}
.square {
  width: 800px;
  height: 800px;
    overflow: hidden;
  background-color: rgb(202, 69, 69);
}

.overlay {
  width: 1027px;
  height: 425px;
  background-color: rgb(36, 183, 191);
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  transform: rotate(225deg);
}
</style>
