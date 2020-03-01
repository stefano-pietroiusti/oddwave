<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container
    id="headerHero"
    fluid
    :class="`text-left p-0 m-0 bg-${pbackground} animated fadeInDown no-gutters`"
  >
    <b-container fluid class="text-center m-0 p-0 w-100 h-100 no-gutters">
      <svg id="headerSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190">
        <path
          id="headerPathBg1"
          d="m-1,39.93651l30,2.28136c30,2.19607 90,6.88671 150,6.82276c60,0.06396 120,-4.62667 180,-11.38547c60,-6.88671 120,-15.84157 180,-20.46825c60,-4.54139 120,-4.54139 180,4.56272c60,9.01883 120,27.35497 180,34.11376c60,6.88671 120,2.19607 180,-6.82276c60,-9.10411 120,-22.74962 180,-23.87963c60,-1.2153 120,10.29809 150,15.90554l30,5.69274l0,-47.75927l-30,0c-30,0 -90,0 -150,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -150,0l-30,0l0,40.93651l0,-0.00001l0,-0.00001l0,0.00001z"
          fill="#355691"
        />
        <path
          id="headerPathBg2"
          opacity="1"
          d="m-1,74.64028l30,4.21537c30,4.05778 90,12.7249 150,12.60672c60,0.11819 120,-8.54892 180,-21.03745c60,-12.7249 120,-29.27121 180,-37.82014c60,-8.39134 120,-8.39134 180,8.43074c60,16.6645 120,50.54505 180,63.03358c60,12.7249 120,4.05778 180,-12.60672c60,-16.82208 120,-42.03552 180,-44.1235c60,-2.24557 120,19.02826 150,29.38941l30,10.51873l0,-88.24701l-30,0c-30,0 -90,0 -150,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -180,0c-60,0 -120,0 -150,0l-30,0l0,75.64029l0,-0.00001l0,-0.00001z"
          fill="#355691"
        />
        <path
          id="headerPathBg3"
          opacity="0.22"
          d="m-212,81.00121l34.45833,4.29121c34.45833,4.13079 103.375,12.95385 172.29166,12.83354c68.91667,0.12032 137.83333,-8.70273 206.75,-21.41596c68.91667,-12.95385 137.83333,-29.79786 206.75,-38.5006c68.91667,-8.54232 137.83333,-8.54232 206.75,8.58243c68.91667,16.96433 137.83333,51.45446 206.75,64.16769c68.91667,12.95385 137.83333,4.13079 206.75,-12.83354c68.91667,-17.12474 137.83333,-42.79183 206.75,-44.91737c68.91667,-2.28597 137.83333,19.37062 172.29166,29.91819l34.45833,10.70798l0,-89.83476l-34.45833,0c-34.45833,0 -103.375,0 -172.29166,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -206.75,0c-68.91667,0 -137.83333,0 -172.29166,0l-34.45833,0l0,77.00122l0,-0.00001l0,-0.00001z"
          fill="#355691"
        />
      </svg>
    </b-container>

    <b-container fluid :class="`text-left p-3 text-secondary bg-${pbackground}`">
      <b-row>
        <b-col sm="12" md="12" lg="8" xl="8" class="align-items-center w-100">
          <div class="hero-content">
            <h2 v-if="pheader" class="p-2 animated pulse delay-1s">
              {{ pheader }}
            </h2>
            <h2 v-if="psubheader" class="p-3">
              {{ psubheader }}
            </h2>
            <h3 v-if="psubtitle" class="p-2" v-html="psubtitle" />
            <b-button
              pill
              variant="secondary"
              to="/contact-theoddwave-nz/"
              class="buttonComponent letter-spacing  m-2 animated pulse delay-1s"
            >
              free consultation
            </b-button>
          </div>
        </b-col>
        <!-- <b-col sm="12" md="12" lg="4" xl="4">
        <div class="hero-product-img">
          <div class="offer-badge bg-danger">
            <p>
              <strong>Business starter </strong>
              <br>
              <strong>Mobile First Universal</strong>
              <br>
              <strong>Websites</strong>
            </p>
          </div>
        </div>
        </b-col>-->
        <b-col sm="12" md="12" lg="4" xl="4" class="text-right">
          <img
            :src="require(`~/assets/imgs/banner/responsivedevices.png`)"
            alt="bg-img"
            class="bg-img"
          >
          <div class="hero-img-1 w-50 h-50">
            <p>
              <strong>User-Mobile First</strong>
              <br>
              <strong>Search Friendly</strong>
              <br>
              <strong>Web Solutions</strong>
            </p>
            <img :src="require(`~/assets/imgs/banner/pwa.png?size=180`)" alt="hero-img">
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    pheader: {
      type: String,
      default: ''
    },
    psubheader: {
      type: String,
      default: ''
    },
    psubtitle: {
      type: String,
      default: ''
    },
    pbackground: {
      type: String,
      default: 'teal'
    },
    pbgimage: {
      type: Object,
      default() {
        return {
          color1: 'rgba(0, 0, 0, 0.2)',
          color2: 'rgba(0, 0, 0, 0.5)',
          url: undefined,
          height: 100
        }
      }
    }
  },
  computed: {
    bannerImagePath() {
      if (!this.pbgimage.url) {
        return
      }
      const fileName = this.pbgimage.url
      return {
        '1': require(`~/assets/imgs/banner/${fileName}?size=320`),
        '2': require(`~/assets/imgs/banner/${fileName}?size=768`)
      }
    },
    gradient() {
      if (!this.pbgimage.url) {
        return
      }
      const image1x = this.bannerImagePath['1']
      const image2x = this.bannerImagePath['2']
      return {
        backgroundImage: `linear-gradient(45deg,  ${this.pbgimage.color1}, ${this.pbgimage.color2}), url(${image1x}), -webkit-image-set(url(${image1x}) 1x, url(${image2x}) 2x)`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 0.5
      }
    },
    background() {
      if (!this.pbgimage) {
        return
      }
      const fileName = require(`~/assets/imgs/banner/${this.pbgimage.url}`)
      const backgroundImage = this.pbgimage.url ? `url(${fileName})` : undefined
      return {
        backgroundImage,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  }
}
</script>
<style scoped lang="scss">
// @-webkit-keyframes animationColor {
//     0%     {background-color:#fff;}
//     100.0%  {background-color:#00f;}
// }

// @keyframes animationColor {
//     0%     {background-color:#fff;}
//     100.0%  {background-color:#00f;}
// }

@keyframes animateWave {
  0% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 1);
  }
}

.animatedHeader {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}

// #headerHero {
//   display: block;
//   transform-origin: top;
//   animation: animateWave 2000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
// }

// #headerSvg{
//     width:100%;
//     transform-origin: top;
//     -webkit-animation-name: animation;
//     -webkit-animation-duration: 2s;
//     -webkit-animation-timing-function: ease-in-out;
//     -webkit-animation-iteration-count: infinite;
//     -webkit-animation-play-state: running;
//     animation-name: animation;
//     animation-duration: 2s;
//     animation-timing-function: ease-in-out;
//     animation-iteration-count: infinite;
//     animation-play-state: running;
//     background-color: #fff;
// }

#headerPath {
  z-index: -1;
  opacity: 0.5;
}

#headerPathBg1 {
  z-index: 1;
}
#headerPathBg2 {
  z-index: 1;
  opacity: 0.8;
}
#headerPathBg3 {
  z-index: 1;
}

@-webkit-keyframes hero-img-animation {
  0% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  50% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px);
  }
}
@keyframes hero-img-animation {
  0% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  50% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

/*circle wave*/
@-webkit-keyframes ripple {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 163, 204, 0.1),
      0 0 0 20px rgba(0, 163, 204, 0.1), 0 0 0 40px rgba(0, 163, 204, 0.1);
    box-shadow: 0 0 0 0 rgba(0, 163, 204, 0.1),
      0 0 0 20px rgba(0, 163, 204, 0.1), 0 0 0 40px rgba(0, 163, 204, 0.1);
  }
  100% {
    -webkit-box-shadow: 0 0 0 20px rgba(0, 163, 204, 0.1),
      0 0 0 40px rgba(0, 163, 204, 0.1), 0 0 0 60px rgba(0, 163, 204, 0);
    box-shadow: 0 0 0 20px rgba(0, 163, 204, 0.1),
      0 0 0 40px rgba(0, 163, 204, 0.1), 0 0 0 60px rgba(0, 163, 204, 0);
  }
}

@keyframes ripple {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 163, 204, 0.1),
      0 0 0 20px rgba(0, 163, 204, 0.1), 0 0 0 40px rgba(0, 163, 204, 0.1);
    box-shadow: 0 0 0 0 rgba(0, 163, 204, 0.1),
      0 0 0 20px rgba(0, 163, 204, 0.1), 0 0 0 40px rgba(0, 163, 204, 0.1);
  }
  100% {
    -webkit-box-shadow: 0 0 0 20px rgba(0, 163, 204, 0.1),
      0 0 0 40px rgba(0, 163, 204, 0.1), 0 0 0 60px rgba(0, 163, 204, 0);
    box-shadow: 0 0 0 20px rgba(0, 163, 204, 0.1),
      0 0 0 40px rgba(0, 163, 204, 0.1), 0 0 0 60px rgba(0, 163, 204, 0);
  }
}

@-webkit-keyframes ripple-white {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
      0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
      0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1);
  }
  100% {
    -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0);
  }
}

@keyframes ripple-white {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
      0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
      0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1);
  }
  100% {
    -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0);
  }
}

.bg-img {
  position: absolute;
  left: 0%;
  width: 65%;
}
.hero-img-1 {
  position: relative;
  left: 30%;
  width: 50%;
  height: 50%;
  z-index: 100;
  animation-name: hero-img-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: hero-img-animation;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
}

.offer-badge {
  position: absolute;
  left: 10%;
  top: 15%;
  width: 200px;
  height: 200px;
  border: 2px solid rgba(221, 221, 221, 0.8);
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  -webkit-animation: ripple-white 1s linear infinite;
  animation: ripple-white 1s linear infinite;
  -webkit-transition: 0.5s linear;
  transition: 0.5s linear;
  text-shadow: 1px 1px 1px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.hero-content-wrap {
  display: table;
  height: 550px;
  width: 100%;
}

.hero-content {
  display: table;
  width: 75%;
  position: relative;
  vertical-align: middle;
  z-index: 1;
}

.img-responsive {
  display: block;
  min-width: 100%;
  max-width: 100%;
  height: auto;
}
</style>