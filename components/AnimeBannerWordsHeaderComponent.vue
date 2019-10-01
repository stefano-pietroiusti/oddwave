<template>
  <b-container
    id="animationBanner"
    fluid
    :style="gradient"
    :class="pstyle.bgStyle"
  >
    <b-row>
      <b-col class="p-5">
        <h2 class="animHeader">
          {{ pheader }}
        </h2>
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
        // backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.5) 100%), url(${this.bannerImagePath})`,
        backgroundImage: `linear-gradient(45deg, ${this.pbgimage.color1} 0%, ${this.pbgimage.color1} 100%)`,
        width: '100%',
        height: `${this.pbgimage.height}`,
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

.animHeader {
  position:relative;
  letter-spacing: 0.1em;
}

.animHeader .letter {
  position: relative;
  display: inline-block;
  margin: auto;
  opacity: 0; 
}
</style>
