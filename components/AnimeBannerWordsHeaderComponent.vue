<template>
  <b-container id="animationBanner" fluid :style="gradient" :class="pstyle.bgStyle">
    <b-row>
      <b-col class="text-left">
        <h1 class="animHeader">
          {{ pheader }}
        </h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    pheader: {
      type: String,
      default: 'Services'
    },
    pbgimage: {
      type: Object,
      default() {
        return {
          color1: 'rgba(85, 255, 0, 0.2)',
          color2: 'rgba(0, 255, 255, 0.5)',
          url: 'seodigital.jpg',
          height: 100
        }
      }
    },
    pstyle: {
      type: Object,
      default() {
        return { bgStyle: 'parralaxEffect text-primary  text-left p-5 vh-100' }
      }
    }
  },
  computed: {
    bannerImagePath() {
      if (!this.pbgimage.url) {
        return
      }
      const fileName = this.pbgimage.url
      return require(`~/assets/imgs/banner/${fileName}?size=1080`)
    },
    gradient() {
      return {
        backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.5) 100%), url(${this.bannerImagePath})`,
        width: '100%',
        height: `${this.pbgimage.height}vh`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textTransform: 'uppercase'
      }
    }
  },
  mounted() {
    let textWrapper = document.querySelector('.animHeader')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
    const anims = []
    this.$anime.timeline({ loop: true }).add({
      targets: '.animHeader .letter',
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: (el, i) => 300 + 30 * i
    })
    .add({
      targets: '.animHeader .letter',
      translateY: [0, -100],
      opacity: [1, 0],
      easing: 'easeInExpo',
      duration: 1200,
      delay: (el, i) => 100 + 30 * i
    })
  }
}
</script>
<style scoped>
.animationBanner1 {
  background: linear-gradient(
    45deg,
    rgba(255, 0, 255, 1) 0%,
    rgba(0, 189, 189, 1) 100%
  );
}

.animHeader {
  position:relative;
  letter-spacing: 0.1em;
  left: 0.2em;
  top: 1em;
}

.animHeader .letter {
  position: relative;
  display: inline-block;
  /* line-height: 1em; */
  margin: auto;
  opacity: 0; 
}
</style>
