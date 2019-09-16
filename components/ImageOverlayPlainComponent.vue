<template>
  <b-container fluid class="imageContainer bg-lightgray text-secondary">
    <div class="imageContainerImage" :style="{ backgroundImage: `url(${pimage})`, backgroundColor: pbgcolor}" />
    <div class="imageContainerContent text-primary">
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
      default: '#fff'
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
.imageContainerImage {
  margin-top: 5vw;
  position: relative;
  top: -2vw;
  left: 3vw;
  width: 42vw;
  height: 26vw;
  /* background-color: rgb(144, 216, 29); */
  z-index: 10;
  overflow: visible;
  /* border-radius: 0.5vw; */
  background-attachment:local;
  background-position: left;
  background-repeat: no-repeat;
  background-size: 100%;
}

.imageContainerContent {
  width: 100%;
  height: 20vh;
  font-size: 1.5vw;
  padding: 2vw;
  position: relative;
  width: 40vw;
  height: 20vw;
  top: -23vw;
  left: 55vw;
  /* color: #fff; */
  z-index: 5;
  overflow: visible;
  text-align: left;
  line-height: 3vw
}
</style>
