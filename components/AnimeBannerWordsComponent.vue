<template>
  <b-container
    id="animationBanner"
    fluid
    :style="gradient"
    class="text-left text-secondary bg-primary bgImage"
  >
    <span id="anim1">
      <h1 class="anim1">
        <span class="letters word-1">Creative</span>
        <span class="letters word-2">Innovative</span>
        <span class="letters word-3">Lightweight</span>
        <span class="letters word-4">Streamlined</span>
        <!-- <span class="letters word-4">Web</span>
                <span class="letters word-4">Data</span>
        <span class="letters word-4">Cloud</span>-->
      </h1>
    </span>
    <span id="anim2">
      <h2 class="anim2">Work with us to create a fast and impactful online presence</h2>
    </span>
    <span id="anim3">
      <h3 class="anim3">
        <span class="word">Proven</span>
        <span class="word">Progressive</span>
        <span class="word">Responsive</span>
        <span class="word">Vanilla</span>
        <span class="word">SEO</span>
        <span class="word">Web</span>
        <span class="word">Data</span>
        <span class="word">Cloud</span>
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
  line-height: 1em;
  background-position: 'top left';
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#anim1 {
  position: absolute;
  left: 2em;
  width: 50%;
}
.anim1 {
  position: absolute;
  font-weight: 900;
  text-align: left;
  left: 1em;
  top: 1em;
}
.anim1 .letters {
  position: absolute;
  /* margin: auto; */
  left: 0;
  top: 0;
  opacity: 0;
  text-align: left;
  font-weight: 900;
  font-size: 1.5em;
}

#anim2 {
  position: absolute;
  width: 100%;
}

.anim2 {
  position: absolute;
  display: inline-block;
  letter-spacing: 0.3em;
  text-transform: unset;
  left: 1em;
  top: 0.2em;
}

.anim2 .letter {
  position: absolute;

  width: 100%;
  line-height: 1em;
  margin: auto;
  text-transform: unset;
  opacity: 0;
}
#anim6 {
  position: absolute;
  /* left: 0;
  top: 1em; */
}

.anim6 {
  position: absolute;
  letter-spacing: 0.3em;
  text-transform: unset;
  left: 1em;
  top: 1em;
}

.anim6 .letter {
  position: absolute;
  display: inline-block;
  line-height: 1em;
  margin: auto;
  text-transform: unset;
  opacity: 0;
}
#anim7 {
  position: relative;
  left: 0;
  top: 1em;
}

.anim7 {
  position: relative;
  text-transform: unset;
}

.anim7 .letter {
  position: relative;
  display: inline-block;
  line-height: 1em;
  margin: auto;
  text-transform: unset;
  opacity: 0;
}
#anim3 {
  position: relative;
  left: 0;
  top: 1em;
}
.anim3 {
  font-weight: 800;
}

.anim3 .word {
  display: inline-block;
  letter-spacing: 0.3em;
  line-height: 1em;
  margin: auto;
  opacity: 0;
}

#anim8 {
  position: absolute;
}

.anim8 {
  font-weight: 800;
}

.anim8 .word {
  display: inline-block;
  line-height: 1em;
  margin: auto;
  opacity: 0;
}
</style>
