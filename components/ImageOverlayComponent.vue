<template>
  <b-container fluid class="imageContainer bg-primary text-secondary">
    <div class="imageContainerBackground" :style="{ backgroundColor: pbgcolor}" />
    <div
      class="imageContainerImage"
      :style="{ backgroundImage: `url(${pimage})`, backgroundColor: pbgcolor}"
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
      default: 'teal'
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
  width: 43vw;
  height: 26vw;
  /* background-color: rgb(144, 216, 29); */
  z-index: 10;
  overflow: visible;
  /* border-radius: 0.5vw; */
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
  top: -29vw;
  left: 5vw;
  width: 43vw;
  height: 26vw;
  /* background-color: rgb(202, 69, 69); */
  z-index: 20;
  overflow: visible;
  /* border-radius: 0.5vw; */
}

.imageContainerContent {
  width: 100%;
  height: 20vh;
  font-size: 1.5vw;
  padding: 2vw;
  position: relative;
  width: 40vw;
  height: 20vw;
  top: -50vw;
  left: 55vw;
  /* color: #fff; */
  z-index: 5;
  overflow: visible;
  text-align: left;
  line-height: 3vw
}
</style>
