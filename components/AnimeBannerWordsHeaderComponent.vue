<template>
  <b-container id="animationBanner" fluid class="text-white py-3">
    <b-row>
      <b-col>
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
    }
  },
  mounted() {
    // const anim1 = {}
    // anim1.opacityIn = [0, 1]
    // anim1.scaleIn = [0.2, 1]
    // anim1.scaleOut = 3
    // anim1.durationIn = 800
    // anim1.durationOut = 600
    // anim1.delay = 500

    let textWrapper = document.querySelector('.animHeader')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
    const anims = []
    // const targets = this.$el
    this.$anime
      .timeline({ loop: true })
      .add({
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
#animationBanner {
  /* background: linear-gradient(45deg, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 100%);  */
  background: linear-gradient(
    45deg,
    rgba(255, 0, 255, 1) 0%,
    rgba(0, 189, 189, 1) 100%
  );
}

.animHeader {
  position: relative;
  /* text-transform: uppercase; */
  letter-spacing: 0.1em;
  /* left: 0;
  top: 0vw;
  opacity: 0;  */
  left: 0;
  top: 0em;
}

.animHeader .letter {
  position: relative;
  display: inline-block;
  line-height: 1em;
  margin: auto;
  left: 0;
  top: 0em;
}

</style>
