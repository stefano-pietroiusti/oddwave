<template>
  <b-container fluid class="imageContainer bg-primary">
    <div class="imageContainerBackground" :style="{ backgroundColor: pbgcolor}" />
    <div
      class="imageContainerImage"
      :style="{ backgroundImage: `url(${pimage})`, backgroundColor: pbgcolorimage}"
    />
    <div class="imageContainerContent bg-primary">
      {{ pcontent }}
    </div>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    pimage: {
      type: String,
      default: '/workingtogether.jpg'
    },
    pbgcolor: {
      type: String,
      default: 'rgb(202, 69, 69)'
    },
    pbgcolorimage: {
      type: String,
      default: ' rgb(202, 69, 69)'
    },
    pcontent: {
      type: String,
      default:
        'testing content testing content testing content testing content testing content testing content testing content testing content testing content'
    }
  }
}
</script>
<style scoped>
.imageContainer {
  position: relative;
  width: 100%;
  height: 25vw;
  overflow: visible;
  z-index: 1;
}
.imageContainerBackground {
  margin-top: 5vw;
  position: relative;
  top: -2vw;
  left: 3vw;
  width: 42vw;
  height: 30vw;
  /* background-color: rgb(144, 216, 29); */
  z-index: 10;
  overflow: visible;
  border-radius: 0.5vw;
  /* -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  transform: rotate(225deg); */
}
.imageContainerImage {
  position: relative;
  background-attachment:local;
  background-position: left;
  background-repeat: no-repeat;
  background-size: 100%;
  top: -35vw;
  left: 6vw;
  width: 44vw;
  height: 31vw;
  /* background-color: rgb(202, 69, 69); */
  z-index: 20;
  overflow: visible;
  border-radius: 0.5vw;
}

.imageContainerContent {
  width: 100%;
  height: 20vh;
  font-size: 1.5vw;
  padding: 2vw;
  position: relative;
  width: 40vw;
  height: 20vw;
  top: -58vw;
  left: 55vw;
  color: #fff;
  z-index: 5;
  overflow: visible;
  text-align: left;
  line-height: 3vw
}
</style>
