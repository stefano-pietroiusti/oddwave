<template>
  <div class="row demoServicesTags">
    <div class="col demoServicesTags">
      <div class="demoServicesTags">
        <h4>Parallax - dynamic rendering</h4>
        <h1 class="parallax-title">
          Happy Pony 🦄
          <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg" style="parallax-image">
        </h1>
        <parallax :speed-factor="0.3" breakpoint="(min-width: 80px)">
          <b-img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg" style="parallax-image" />
        </parallax>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
.parallax-image {

 height:42px; width:42px;
}
.parallax-container {
  width: 100vw;
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
</style>
