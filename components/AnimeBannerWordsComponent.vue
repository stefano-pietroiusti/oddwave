<template>
  <b-container id="animationBanner" fluid class="mt-header text-white">
    <b-row>
      <b-col>
        <h1 class="anim1">
          <span class="letters word-1">Optimized search and content</span>
          <span class="letters word-2">Zero clunk, zero overkill</span>
          <span class="letters word-3">Efficient screen loading</span>
          <span class="letters word-4">Super quick content-loading</span>
          <span class="letters word-5">Flexible</span>
          <span class="letters word-6">Compatible</span>
          <span class="letters word-7">Secure</span>
          <span class="letters word-8">Scalable</span>
          <span class="letters word-9">Self-controlled</span>
        </h1>
        <h2 class="anim2">
          Using proven modern,lightweight digital technologies
        </h2>
        <h3 class="anim3">
          <span class="word">Modern Web</span>
          <span class="word">Animation</span>
          <span class="word">Data Engineering</span>
          <span class="word">SEO</span>
          <span class="word">Creative Photography</span>
          <span class="word">Workshops</span>
        </h3>
        <h3 class="anim4 text-center">
          <span class="anim4-wrapper text-center">
            <span
              class="letters text-center"
            >Increasing revenue potential through modern web and search solutions</span>
            <span class="line text-center" />
          </span>
        </h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      anim1: {
        words: ['Search', 'Web', 'Data', 'Cloud'],
        text: 'Search Web Data Cloud'
      },
      anim2: {
        text: 'by the Odd Wave'
      },
      anim3: {
        text: 'Using proven, high performing web technologies'
      },
      anim4: {
        text: 'Increase your web traffic now'
      }
    }
  },
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
      .add({
        targets: '.anim1 .word-5',
        opacity: anim1.opacityIn,
        scale: anim1.scaleIn,
        duration: anim1.durationIn
      })
      .add({
        targets: '.anim1 .word-5',
        opacity: 0,
        scale: anim1.scaleOut,
        duration: anim1.durationOut,
        easing: 'easeInExpo',
        delay: anim1.delay
      })
      .add({
        targets: '.anim1',
        opacity: 0,
        duration: 500,
        delay: 500
      })
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
        scale: [14, 1],
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
  methods: {
    handleScroll() {
      // Your scrhandleResizeling here
      // console.log(window.scrollY)
    }
  }
}
</script>
<style scoped>
#animationBanner {
  background: url('/Banner.png'),
    linear-gradient(45deg, rgba(255, 0, 255, 1) 0%, rgba(0, 255, 255, 1) 100%);
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;
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
  left: 0;
  top: 2em;
}

.anim2 .letter {
  position: relative;
  display: inline-block;
  line-height: 1em;
  margin: auto;
  left: 0;
  top: 2em;
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
  left: 0;
  top: 0.3em;
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
  background-color: #fff;
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
