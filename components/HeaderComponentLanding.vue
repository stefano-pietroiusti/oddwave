<template>
  <b-container fluid class="text-left p-3 text-secondary bg-primary">
    <b-row>
      <b-col sm="12" md="12" lg="8" xl="8" class="align-items-center  w-100">
        <div class="hero-content">
          <h2 v-if="pheader" class="p-2">
            {{ pheader }}
          </h2>
          <h2 v-if="psubheader" class="p-3">
            {{ psubheader }}
          </h2>
          <h3 v-if="psubtitle" class="p-2">
            {{ psubtitle }}
          </h3>
          <b-button variant="info" to="/contact/" class="buttonComponent m-2">
            Get Started
          </b-button>
        </div>
      </b-col>
      <!-- <b-col sm="12" md="12" lg="4" xl="4">
        <div class="hero-product-img">
          <div class="offer-badge bg-success">
            <p>
              <strong>Business starter </strong>
              <br>
              <strong>Mobile First Universal</strong>
              <br>
              <strong>Websites</strong>
            </p>
          </div>
        </div>
      </b-col> -->
      <b-col sm="12" md="12" lg="4" xl="4" class="text-center">
        <div class="hero-img-1 w-100 h-100">
          <img
            :src="require(`~/assets/imgs/banner/pwa.png?size=1024`)"
            :srcSet="require(`~/assets/imgs/banner/pwa.png`)"
            alt="hero-img"
          >
        </div>
      </b-col>
    </b-row>
  </b-container>
  <!-- <div class="col-md-6">
    <div class="hero-product-img">
      <div class="offer-badge">
        <p>
          <strong>50%</strong> Off
        </p>
      </div>
      <div class="hero-img-1">
        <img src="/imgs/pwa.svg" alt="hero-img" class="img-responsive">
  </div>
  </div>
  </div>-->
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
.hero-img-1 {
  position: relative;
  left:0%;
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