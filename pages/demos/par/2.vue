<template>
  <div id="app">
    <div class="row">
      <h1>Scroll down ⬇</h1>
    </div>

    <div class="parallax-container">
      <h1 class="parallax-title">
        Happy Pony 🦄
      </h1>
      <Parallax :speed-factor="0.3" breakpoint="(min-width: 80px)">
        <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg">
      </Parallax>
    </div>

    <div class="big-row" />
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  }
}
</script>

<style>
.parallax-container {
  position: relative;
}
.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.row {
  height: 20vh;
}
.big-row {
  height: 80vh;
}
</style>
