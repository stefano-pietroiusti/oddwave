<template>
  <b-container fluid :class="`pr-lg-3 pr-xl-3 ml-lg-3 ml-xl-3 ml-3 pr-3 pt-5 pb-5 ${pcontainerclass}`">
    <h1 v-if="pheader" :class="`${pclass} ${pheaderclass} text-left`">
      {{ pheader }}
    </h1>
    <!-- <h2 v-if="psubheader" :class="`${pclass} ${psubheaderclass} text-left animated ${animation}`"> -->
    <h2 v-if="psubheader" :class="`${pclass} ${psubheaderclass} text-left`">
      {{ psubheader }}
    </h2>
    <h3 v-if="psubtitle" :class="`${pclass} ${psubtitleclass}text-left`">
      {{ psubtitle }}
    </h3>
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
    pcontainerclass: {
      type: String,
      default: ''
    },
    pclass: {
      type: String,
      default: ''
    },
    pheaderclass: {
      type: String,
      default: ''
    },
    psubheaderclass: {
      type: String,
      default: ''
    },
    psubtitleclass: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'rwcblue'
    },
    panimation: {
      type: String,
      default: 'zoomInRight'
    },
    pbgimage: {
      type: Object,
      default() {
        return {
          color1: 'rgba(85, 255, 0, 0.2)',
          color2: 'rgba(0, 255, 255, 0.5)',
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
    animation() {
      if (!this.panimation) {
        return 'zoomInRight'
      }
      return this.panimation
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
        backgroundSize: 'cover'
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
