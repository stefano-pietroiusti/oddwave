<template>
  <b-container
    id="animationBanner"
    fluid
    class="text-left text-secondary bg-primary"
    :style="gradient"
  >
    <span id="anim1">
      <h1 class="anim1">
        <span class="letters word-1">Creative</span>
        <span class="letters word-2">Innovative</span>
        <span class="letters word-3">Rapid</span>
        <span class="letters word-4">Lightweight</span>
      </h1>
    </span>
    <span id="anim2">
      <h2 class="anim2">Vanilla Web, Search & Integration</h2>
    </span>
    <!-- <span id="anim6">
      <h2 class="anim6">Website design and digital marketing</h2>
    </span>-->
    <!-- <span id="anim7">
      <h2 class="anim7">Continuous delivery</h2>
    </span>-->
    <span id="anim3">
      <h3 class="anim3">
        <span class="word">Open source</span>
        <span class="word">Headless CMS</span>
        <span class="word">VanillaJS</span>
        <!-- <span class="word">HTML</span>
        <span class="word">SCSS</span>-->
      </h3>
    </span>
    <span id="anim8">
      <h3 class="anim8">
        <span class="word">Website design</span>
        <span class="word">Content writing</span>
        <span class="word">Animations</span>
        <span class="word">Digital marketing</span>
        <span class="word">Data engineering</span>
        <span class="word">Automation</span>
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
    anim1.scaleIn = [0.1, 0.8]
    anim1.scaleOut = 0.8
    anim1.durationIn = 800
    anim1.durationOut = 600
    anim1.delay = 200
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
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      })
      .add({
        targets: '.anim8 .word',
        scale: [1.5, 1],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 800,
        delay: (el, i) => 800 * i
      })
      .add({
        targets: '.anim8',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
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
    // .add({
    //   targets: '.anim4 .line',
    //   scaleX: [0, 1],
    //   opacity: [0.5, 1],
    //   easing: 'easeInOutExpo',
    //   duration: 900
    // })
    // .add({
    //   targets: '.anim4 .letter',
    //   opacity: [0, 1],
    //   translateX: [40, 0],
    //   translateZ: 0,
    //   scaleX: [0.3, 1],
    //   easing: 'easeOutExpo',
    //   duration: 800,
    //   offset: '-=600',
    //   delay: (el, i) => 150 + 25 * i
    // })
    // .add({
    //   targets: '.anim4',
    //   opacity: 0,
    //   duration: 1000,
    //   easing: 'easeOutExpo',
    //   delay: 1000
    // })
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
        // height: '100%',
        height: `${this.pbgimage.height}vh`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
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
}
#anim1 {
  position: absolute;
  left: 2em;
  /* display: block; */
  width: 50%;
}
.anim1 {
  position: relative;
  font-weight: 900;
  text-align: left;
  left: 2em;
  top: 2em;
}
.anim1 .letters {
  position: absolute;
  /* margin: auto; */
  left: 0;
  top: 0;
  opacity: 0;
  text-align: left;
  font-size: 1.3em;
}

#anim2 {
  position: relative;
  left: 0;
  top: 1em;
}

.anim2 {
  position: relative;
  letter-spacing: 0.3em;
  text-transform: unset;
}

.anim2 .letter {
  position: relative;
  display: inline-block;
  line-height: 1em;
  margin: auto;
  text-transform: unset;
}
#anim6 {
  position: relative;
  left: 0;
  top: 1em;
}

.anim6 {
  position: relative;
  letter-spacing: 0.3em;
  text-transform: unset;
}

.anim6 .letter {
  position: relative;
  display: inline-block;
  line-height: 1em;
  margin: auto;
  text-transform: unset;
}
#anim7 {
  position: relative;
  left: 0;
  top: 1em;
}

.anim7 {
  position: relative;
  letter-spacing: 0.3em;
  text-transform: unset;
}

.anim7 .letter {
  position: relative;
  display: inline-block;
  line-height: 1em;
  margin: auto;
  text-transform: unset;
}
#anim3 {
  position: relative;
  left: 0;
  top: 1em;
}
.anim3 {
  font-weight: 800;
  letter-spacing: 0.5em;
}

.anim3 .word {
  display: inline-block;
  /* position: relative; */
  line-height: 1em;
  margin: auto;
}

#anim8 {
  position: relative;
  left: 0;
  top: -3em;
}

.anim8 {
  font-weight: 800;
  letter-spacing: 0.5em;
}

.anim8 .word {
  display: inline-block;
  /* position: relative; */
  line-height: 1em;
  margin: auto;
}

/* .anim4 {
  font-weight: 200;
}

.anim4 .anim4-wrapper {
  position: relative;
  display: inline-block;
  left: 0;
  top: -0.3em;
  text-align: center;
} */

/* .anim4 .line {
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
  display: inline-block;
  line-height: 1em;
  margin: auto;
  left: 0;
  top: 1em;
  line-height: 1em;
  text-align: center;
} */
</style>
