<template>
  <b-container
    id="animationBanner"
    fluid
    :style="gradient"
    class="text-left text-secondary bg-primary bgImage"
  >
    <span id="anim1">
      <h2 class="anim1">
        <span class="letters word-1">Online advertising</span>
        <span class="letters word-2">Content management</span>
        <span class="letters word-3">Website design</span>
        <span class="letters word-4">SEO</span>
        <span class="letters word-5">Photography</span>
        <span class="letters word-6">Animation</span>
      </h2>
    </span>
    <span id="anim2">
      <h2 class="anim2">Boost your sales</h2>
    </span>
    <span id="anim3">
      <h3 class="anim3">
        <span class="word">Grow</span>
        <span class="word">your</span>
        <span class="word">business</span>
      </h3>
    </span>
  </b-container>
</template>

<script>
/* eslint-disable */
export default {
  mounted() {
    const anim1 = {}
    anim1.opacityIn = [0, 1]
    anim1.scaleIn = [0.2, 1]
    anim1.scaleOut = 3
    anim1.durationIn = 800
    anim1.durationOut = 600
    anim1.delay = 500
    let textWrapper = document.querySelector('.anim2')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
    const anims = []

    this.$anime
      .timeline({ loop: true })
      .add({
        targets: '.anim2 .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      })
      .add({
        targets: '.anim2 .letter',
        translateY: [0, -100],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1200,
        delay: (el, i) => 100 + 30 * i
      })

      .add({
        targets: '.anim3 .word',
        scale: [1.5, 1],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 800,
        delay: (el, i) => 800 * i
      })
      .add({
        targets: '.anim3',
        opacity: 0,
        duration: 500,
        easing: 'easeOutExpo',
        delay: 500
      })
      .add({
        targets: '.anim1 .word-1',
        opacity: anim1.opacityIn,
        scale: anim1.scaleIn,
        duration: anim1.durationIn
      })
      .add({
        targets: '.anim1 .word-1',
        opacity: 0,
        scale: anim1.scaleOut,
        duration: anim1.durationOut,
        easing: 'easeInExpo',
        delay: anim1.delay
      })
      .add({
        targets: '.anim1 .word-2',
        opacity: anim1.opacityIn,
        scale: anim1.scaleIn,
        duration: anim1.durationIn
      })
      .add({
        targets: '.anim1 .word-2',
        opacity: 0,
        scale: anim1.scaleOut,
        duration: anim1.durationOut,
        easing: 'easeInExpo',
        delay: anim1.delay
      })
      .add({
        targets: '.anim1 .word-3',
        opacity: anim1.opacityIn,
        scale: anim1.scaleIn,
        duration: anim1.durationIn
      })
      .add({
        targets: '.anim1 .word-3',
        opacity: 0,
        scale: anim1.scaleOut,
        duration: anim1.durationOut,
        easing: 'easeInExpo',
        delay: anim1.delay
      })
      .add({
        targets: '.anim1 .word-4',
        opacity: anim1.opacityIn,
        scale: anim1.scaleIn,
        duration: anim1.durationIn
      })
      .add({
        targets: '.anim1 .word-4',
        opacity: 0,
        scale: anim1.scaleOut,
        duration: anim1.durationOut,
        easing: 'easeInExpo',
        delay: anim1.delay
      })
  },
  props: {
    pbgimage: {
      type: Object,
      default() {
        return {
          color1: 'rgba(85, 255, 0, 0.2)',
          color2: 'rgba(0, 255, 255, 0.5)',
          url: '/imgs/seodigital.jpg',
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
        '1': require(`~/assets/imgs/banner/${fileName}?size=640`),
        '2': require(`~/assets/imgs/banner/${fileName}?size=1080`)
      }
    },
    gradient() {
      const image1x = this.bannerImagePath['1']
      const image2x = this.bannerImagePath['2']
      return {
        backgroundImage: `linear-gradient(45deg,  ${this.pbgimage.color1}, ${this.pbgimage.color2}), url(${image1x}), -webkit-image-set(url(${image1x}) 1x, url(${image2x}) 2x)`,
        width: '100%',
        height: `${this.pbgimage.height}`,
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  }
}
</script>
<style scoped>
#animationBanner {
  display: block;
  opacity: 1;
  padding: 1em;
  background-position: 'top left';
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#anim1 {
  position: absolute;
  width: 100%;
}
.anim1 {
  position: inherit;
  text-align: left;
  width: 75%;
  left: 1em;
  top: 1em;
}
.anim1 .letters {
  position: inherit;
  opacity: 0;
  font-weight: 900;
  font-size: 1.5em;
}

#anim2 {
  position: absolute;
  width: 100%;
  left: 1em;
  top: 6em;
}

.anim2 {
  /* font-size: 3em; */
  position: inherit;
  letter-spacing: 0.3em;
  text-transform: unset;
  font-size: 2em;
}

.anim2 .letter {
  position: inherit;
  /* opacity: 0; */
  margin: auto;
  font-weight: 900;
}

#anim3 {
  position: absolute;
  width: 100%;
  left: 1em;
  top: 6em;
}

.anim3 {
  letter-spacing: 0.3em;
  text-transform: unset;
  font-size: 2em;
}
.anim3 .word {
  margin: auto;
  opacity: 0;
  font-weight: 900;
  /* font-size: 1.5em; */
}
</style>
