<template>
  <b-container id="waveContainer" fluid class="bg-primary">
    <div class="wave-container bg-primary" :style="{ backgroundImage: `url(${pimage})`}">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none; fill:white;" />
      </svg>
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
      default: '#f00'
    },
    pcontent: {
      type: String,
      default: 'this is a test this is a test this is a test this is a test '
    }
  }
}
</script>
<style scoped>
#waveContainer {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: visible;
  z-index: 0;
}


svg {
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
}
.wave-container {
  /* display: inline-block; */
  position: relative;
  width: 100%;
  /* height: 100px; */
  bottom: 0;
  right: 0;
  padding-bottom: 10%;
  vertical-align: middle;
  overflow: hidden;
    z-index: 0;
}
</style>
