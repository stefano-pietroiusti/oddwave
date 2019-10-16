<!-- eslint-disable vue/no-v-html -->
<template>
  <!-- <div class="wave-container"> -->
  <b-container fluid class="text-center text-primary m-0 p-0 wave-container">
    <span v-if="header">
      <svg id="headerSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path id="headerPathBg1" d="m-1,39.93651l30,2.28136c30,2.19607 90,6.88671 150,6.82276c60,0.06396 120,-4.62667 180,-11.38547c60,-6.88671 120,-15.84157 180,-20.46825c60,-4.54139 120,-4.54139 180,4.56272c60,9.01883 120,27.35497 180,34.11376c60,6.88671 120,2.19607 180,-6.82276c60,-9.10411 120,-22.74962 180,-23.87963c60,-1.2153 120,10.29809 150,15.90554l30,5.69274l0,-47.75927l-30,0c-30,0 -90,0 -150,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -150,0l-30,0l0,40.93651l0,-0.00001l0,-0.00001l0,0.00001z" fill="#355691" />
        <path id="headerPathBg2" opacity="1" d="m-1,74.64028l30,4.21537c30,4.05778 90,12.7249 150,12.60672c60,0.11819 120,-8.54892 180,-21.03745c60,-12.7249 120,-29.27121 180,-37.82014c60,-8.39134 120,-8.39134 180,8.43074c60,16.6645 120,50.54505 180,63.03358c60,12.7249 120,4.05778 180,-12.60672c60,-16.82208 120,-42.03552 180,-44.1235c60,-2.24557 120,19.02826 150,29.38941l30,10.51873l0,-88.24701l-30,0c-30,0 -90,0 -150,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -150,0l-30,0l0,75.64029l0,-0.00001l0,-0.00001z" fill="#355691" />
        <path id="headerPathBg3" opacity="0.22" d="m-212,81.00121l34.45833,4.29121c34.45833,4.13079 103.375,12.95385 172.29166,12.83354c68.91667,0.12032 137.83333,-8.70273 206.75,-21.41596c68.91667,-12.95385 137.83333,-29.79786 206.75,-38.5006c68.91667,-8.54232 137.83333,-8.54232 206.75,8.58243c68.91667,16.96433 137.83333,51.45446 206.75,64.16769c68.91667,12.95385 137.83333,4.13079 206.75,-12.83354c68.91667,-17.12474 137.83333,-42.79183 206.75,-44.91737c68.91667,-2.28597 137.83333,19.37062 172.29166,29.91819l34.45833,10.70798l0,-89.83476l-34.45833,0c-34.45833,0 -103.375,0 -172.29166,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -172.29166,0l-34.45833,0l0,77.00122l0,-0.00001l0,-0.00001z" fill="#355691" />
      </svg>
    </span>
    <span v-else-if="footer">
      <svg id="footerSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
        <path id="footerPath" d="m1,121l1440,-115l0,115l-1440,0z" fill="#355691" />

      <!-- <svg
        id="footerSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 160"
      >
        <path id="footerPath" d="m0,318.0999l1439.99996,-90.09991l0,91l-1439.99996,0l0,-30.0633z" fill="#0099ff" /> -->
        <!-- <path id="footerPathBg1" fill="#091540" d="m0,133.5l48,-26.49999c48,-26.5 167,-47.5 263,-43.11093c96,4.72031 169,34.00156 265,56.36093c96,22.35938 192,4.14062 288,-13.25c96,-17.39062 224,-6.60938 319,-35c95,-28.39062 161,-53.60938 209,-62.13906l49,-6.86094l-1,157l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,-26.5l0,-0.00001z" />
        <path
          id="footerPath"
          d="m0,133.66667l48,-26.33333c48,-26.33333 144,-79 240,-74.63854c96,4.69063 192,65.58646 288,87.80521c96,22.21875 192,4.11458 288,-13.16667c96,-17.28125 192,-35.38542 288,-52.66667c96,-17.28125 192,-35.38542 240,-43.86146l48,-8.80521l0,158.00001l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,-26.33333z"
          fill="#091540"
        /> -->
      </svg>
    </span>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    header: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="scss">
@keyframes animateWave {
  0% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 1);
  }
}

.fadeIn {
  animation-name: fade-in-left;
  animation-duration: 1s;
}

@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

.wufoo-letter {
  animation: kaboom 5s ease alternate infinite;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
}
@keyframes kaboom {
  90% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.wave-container {
  position: relative;
  text-align: center;
  overflow: hidden;
}

/* .wave-container > svg {
  display: block;
  transform-origin: top;
  animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
} */

// #headerPath {
//   animation: fade-in-left  100ms linear alternate forwards;
// }

/* #headerPath {
  display: block;
  transform-origin: top;
  animation: fade-in-left 500ms linear forwards;
} */

#headerPath {
z-index: -1;
opacity: .5;
}

#headerPathBg1 {
z-index: 1;
}
#headerPathBg2 {
z-index: 1;
opacity: .8
}
#headerPathBg3 {
z-index: 1;
}

#headerSvg {
  display: block;
  transform-origin: top;
  animation: animateWave 2000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

#footerSvg {
  display: block;
  position:sticky;
  transform-origin: bottom;
  animation: animateWave 2000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
}
</style>
