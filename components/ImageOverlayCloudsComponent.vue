<template>
  <b-container fluid class="imageContainer bg-lightgray text-secondary">
    <div id="parallax-container">
      <div id="parallax-item" style="background: url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/SkyBG.png);" />
      <div id="parallax-text" class="text-secondary text-center">
        {{ pcontent }}
      </div>
      <div id="parallax-item" style="background: url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds1.png);" />
      <div id="parallax-item" style="background: url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds2.png);" />
      <div id="parallax-item" style="background: url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds3.png);" />
      <!-- <div id="parallax-item" style="background: url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/Hill.png)" /> -->
    </div>
    <!-- <div class="imageContainerImage" :style="{ backgroundImage: `url(${pimage})`, backgroundColor: pbgcolor}" /> -->
    <div class="text-secondary">
      {{ pcontent }}
    </div>
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
        ''
    }
  }
}
</script>
<style scoped>
.imageContainer {
  position: absolute;
  width: 100%;
  height: 60%;
  overflow: visible;
  z-index: 0;
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
  height: 50%;
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

#parallax-container {
  display: block;
  height: 50%;
}

#parallax-item{
  position: fixed;
  top: 20;
  background-position: center !important;
  transform: translateY(0px);
  height: 100%;
  width: 100%;
 background-color: transparent;
  position:absolute;
  bottom:0;
  right:0;
  background-attachment:local;
  background-position: left;
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: 10;
}

#parallax-text{
  position: relative;
  background-position: center !important;
  transform: translateY(0px);
  /* height: 750px;
  width: 100%; */
  width:100%;
  height:50%;
 background-color: transparent;
  position:absolute;
  bottom:0;
  left:0;
  background-attachment:local;
  background-position: left;
  background-repeat: no-repeat;
  background-size: 100%;
    z-index: 20;
  padding: 20px
}

</style>
