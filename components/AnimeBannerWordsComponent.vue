<template>
  <b-container id="animationBanner" fluid class="text-center text-secondary" :style="gradient">
    <b-row>
      <b-col cols="4" />
      <b-col cols="10">
        <h1 class="anim1">
          <span class="letters word-1">Modern</span>
          <span class="letters word-2">Lightweight</span>
          <span class="letters word-3">Simple</span>
        </h1>
        <h2 class="anim2">
          Optimized web, content and search
        </h2>
        <h3 class="anim3">
          <span class="word">Website</span>
          <span class="word">Optimized content</span>
          <span class="word">SEO</span>
        </h3>
        <h3 class="anim4 text-center">
          <span class="anim4-wrapper text-center">
            <span
              class="letters text-center"
            >Increasing revenue potential through modern web and search solutions</span>
            <span class="line text-center bg-secondary" />
          </span>
        </h3>
      </b-col>
      <b-col cols="4">
        <!-- <img :src="require('~/assets/images/Foo.jpg?size=400')" :srcset="require('~/assets/images/Foo.jpg').srcSet"> -->
        <!-- {{ bannerImage }} and  {{ bannerImagePath }}
        <img :srcset="require(`~/assets/${bannerImage}`).srcSet">-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable */
export default {
  mounted() {
    const anim1 = {}
    anim1.opacityIn = [0, 1]
    anim1.scaleIn = [0.2, 1]
    anim1.scaleOut = 1
    anim1.durationIn = 800
    anim1.durationOut = 600
    anim1.delay = 500

    let textWrapper = document.querySelector('.anim2')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
    textWrapper = document.querySelector('.anim4  .letters')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )

    const anims = []

    // const targets = this.$el
    this.$anime
      .timeline({ loop: true })
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
      // .add({
      //   targets: '.anim1 .word-4',
      //   opacity: anim1.opacityIn,
      //   scale: anim1.scaleIn,
      //   duration: anim1.durationIn
      // })
      // .add({
      //   targets: '.anim1 .word-4',
      //   opacity: 0,
      //   scale: anim1.scaleOut,
      //   duration: anim1.durationOut,
      //   easing: 'easeInExpo',
      //   delay: anim1.delay
      // })
      // .add({
      //   targets: '.anim1 .word-5',
      //   opacity: anim1.opacityIn,
      //   scale: anim1.scaleIn,
      //   duration: anim1.durationIn
      // })
      // .add({
      //   targets: '.anim1 .word-5',
      //   opacity: 0,
      //   scale: anim1.scaleOut,
      //   duration: anim1.durationOut,
      //   easing: 'easeInExpo',
      //   delay: anim1.delay
      // })
      // .add({
      //   targets: '.anim1 .word-6',
      //   opacity: anim1.opacityIn,
      //   scale: anim1.scaleIn,
      //   duration: anim1.durationIn
      // })
      // .add({
      //   targets: '.anim1 .word-6',
      //   opacity: 0,
      //   scale: anim1.scaleOut,
      //   duration: anim1.durationOut,
      //   easing: 'easeInExpo',
      //   delay: anim1.delay
      // })
      // .add({
      //   targets: '.anim1 .word-7',
      //   opacity: anim1.opacityIn,
      //   scale: anim1.scaleIn,
      //   duration: anim1.durationIn
      // })
      // .add({
      //   targets: '.anim1 .word-7',
      //   opacity: 0,
      //   scale: anim1.scaleOut,
      //   duration: anim1.durationOut,
      //   easing: 'easeInExpo',
      //   delay: anim1.delay
      // })
      // .add({
      //   targets: '.anim1 .word-8',
      //   opacity: anim1.opacityIn,
      //   scale: anim1.scaleIn,
      //   duration: anim1.durationIn
      // })
      // .add({
      //   targets: '.anim1 .word-8',
      //   opacity: 0,
      //   scale: anim1.scaleOut,
      //   duration: anim1.durationOut,
      //   easing: 'easeInExpo',
      //   delay: anim1.delay
      // })
      // .add({
      //   targets: '.anim1 .word-9',
      //   opacity: anim1.opacityIn,
      //   scale: anim1.scaleIn,
      //   duration: anim1.durationIn
      // })
      // .add({
      //   targets: '.anim1 .word-9',
      //   opacity: 0,
      //   scale: anim1.scaleOut,
      //   duration: anim1.durationOut,
      //   easing: 'easeInExpo',
      //   delay: anim1.delay
      // })
      // .add({
      //   targets: '.anim1',
      //   opacity: 0,
      //   duration: 500,
      //   delay: 500
      // })
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
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      })
      .add({
        targets: '.anim4 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeInOutExpo',
        duration: 900
      })
      .add({
        targets: '.anim4 .letter',
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: 'easeOutExpo',
        duration: 800,
        offset: '-=600',
        delay: (el, i) => 150 + 25 * i
      })
      .add({
        targets: '.anim4',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
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
      return require(`~/assets/imgs/banner/${fileName}?size=1080`)
    },
    gradient() {
      return {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/image-set
        // , image-set(require(~/assets/${this.bannerImage} 2x))
        backgroundImage: `linear-gradient(45deg,  ${this.pbgimage.color1}, ${this.pbgimage.color2}), url(${this.bannerImagePath})`,
        width: '100%',
        height: `${this.pbgimage.height}vh`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textTransform: 'uppercase'
      }
    }
  }
}
</script>
<style scoped>
#animationBanner {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.anim1 {
  position: relative;
  font-weight: 900;
  /* font-size: 4.5em; */
  text-align: center;
}
.anim1 .letters {
  position: absolute;
  margin: auto;
  left: 0;
  top: 0.5em;
  right: 0;
  opacity: 0;
  text-align: center;
}
/* .anim1 .word-1 {
  color: red;
}
.anim1 .word-2 {
  color: blue;
}
.anim1 .word-3 {
  color: greenyellow;
}
.anim1 .word-4 {
  color: yellow;
} */

.anim2 {
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  /* left: 0;
  top: 0vw;
  opacity: 0;  */
  left: 10;
  top: 6em;
}

.anim2 .letter {
  position: relative;
  display: inline-block;
  line-height: 1em;
  margin: auto;
  left: 10;
  top: 6em;
  /* position: absolute;
  margin: auto;
  left: 0;
  top: 0.3em;
  right: 0;
  opacity: 0; */
}

.anim3 {
  font-weight: 800;
  /* font-size: 3.8em; */
  text-transform: uppercase;
  letter-spacing: 0.5em;
  /* top: 0.3em; */
}

.anim3 .word {
  display: inline-block;
  /* position: relative; */
  line-height: 1em;
  margin: auto;
  left: 10;
  top: 8em;
  /* top: 0.3em; */
}

.anim4 {
  font-weight: 200;
  /* font-size: 3.2em; */
}

.anim4 .anim4-wrapper {
  position: relative;
  display: inline-block;
  left: 0;
  top: -0.3em;
  text-align: center;
}

.anim4 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  transform-origin: 100% 100%;
  bottom: 0;
  text-align: center;
}

.anim4 .letter {
  /* display: inline-block; */
  display: inline-block;
  line-height: 1em;
  margin: auto;
  left: 0;
  top: 1em;
  line-height: 1em;
  text-align: center;
}
</style>
