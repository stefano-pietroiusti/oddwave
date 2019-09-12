<template>
  <b-container id="canvasContainer" class="mt-header light">
    <h1>Word animation</h1>
    <b-row>
      <b-col>
        <h1 class="ml4">
          <span class="letters letters-1">SEO</span>
          <span class="letters letters-2">Optimization</span>
          <span class="letters letters-3">Websites</span>
          <span class="letters letters-4">Fun</span>
        </h1>
      </b-col>
      <b-col>
        <h1 class="ml13">
          By The Odd Wave
        </h1>
        <h1 class="ml15">
          <span class="word">Using</span>
          <span class="word">latest</span>
          <span class="word">web</span>
          <span class="word">technologies</span>
        </h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      window: {
        human: false,
        innerWidth: 0,
        innerHeight: 0
      },
      colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
      counter: 0,
      canvasEl: {},
      ctx: {},
      numberOfParticules: 30,
      pointerX: 0,
      pointerY: 0,
      centerX: 0,
      centerY: 0,
      tap: null,
      render: null
    }
  },
  mounted () {
    // Fireworks

    // console.log('=========all refs=========', this.$refs)
    const ml4 = {}
    ml4.opacityIn = [0, 1]
    ml4.scaleIn = [0.2, 1]
    ml4.scaleOut = 3
    ml4.durationIn = 800
    ml4.durationOut = 600
    ml4.delay = 500

    const textWrapper = document.querySelector('.ml13')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )

    // const targets = this.$el
    this.$anime
      .timeline({ loop: true })
      .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: ml4.delay
      })
      .add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: ml4.delay
      })
      .add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: ml4.delay
      })
      .add({
        targets: '.ml4 .letters-4',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: '.ml4 .letters-4',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: ml4.delay
      })
      .add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
      })
      .add({
        targets: '.ml13 .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      })
      .add({
        targets: '.ml13 .letter',
        translateY: [0, -100],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1200,
        delay: (el, i) => 100 + 30 * i
      })
      .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 800,
        delay: (el, i) => 800 * i
      })
      .add({
        targets: '.ml15',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
  beforeMount () {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // Your scrhandleResizeling here
      // console.log(window.scrollY)
    },
    handleResize () {
      // this.window.width = window.innerWidth
      // this.window.height = window.innerHeight
      this.window.innerWidth = window.innerWidth
      this.window.innerHeight = window.innerHeight
    },
    nextStep () {
      this.counter += 1
      this.$nextTick(() => {
        const container = this.$el.querySelector(
          '#conversation__tram-' + this.counter
        )
        container.scrollTop = container.scrollHeight
      }, 3000)
    },
    initFireworks () {
      // this.canvasEl = this.$el.querySelector('.fireworks')
      this.canvasEl = this.$refs.fireworks

      this.ctx = this.canvasEl.getContext('2d')
      this.tap =
        'ontouchstart' in window || navigator.msMaxTouchPoints
          ? 'touchstart'
          : 'mousedown'

      this.render = this.$anime({
        duration: Infinity,
        update () {
          this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height)
        }
      })

      document.addEventListener(this.tap, function (e) {
        this.window.human = true
        this.render.play()
        this.updateCoords(e)
        this.animateParticules(this.pointerX, this.pointerY)
      }, false)

      // setTimeout(function () {
      //   this.window.human = true
      //   this.render.play()
      //   this.updateCoords(e)
      //   this.animateParticules(this.pointerX, this.pointerY)
      // }, 2000)

      this.centerX = this.window.innerWidth / 2
      this.centerY = this.window.innerHeight / 2
      this.autoClick()
      this.setCanvasSize()
      // window.addEventListener('resize', setCanvasSize, false);
    },
    setCanvasSize () {
      this.canvasEl.width = this.window.innerWidth * 2
      this.canvasEl.height = this.window.innerHeight * 2
      this.canvasEl.style.width = this.window.innerWidth + 'px'
      this.canvasEl.style.height = this.window.innerHeight + 'px'
      this.canvasEl.getContext('2d').scale(2, 2)
    },
    updateCoords (e) {
      this.pointerX = e.clientX || e.touches[0].clientX
      this.pointerY = e.clientY || e.touches[0].clientY
    },
    setParticuleDirection (p) {
      const angle = (this.$anime.random(0, 360) * Math.PI) / 180
      const value = this.$anime.random(50, 180)
      const radius = [-1, 1][this.$anime.random(0, 1)] * value
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle)
      }
    },
    createParticule (x, y) {
      const p = {}
      p.x = x
      p.y = y
      p.color = this.colors[this.$anime.random(0, this.colors.length - 1)]
      p.radius = this.$anime.random(16, 32)
      p.endPos = this.setParticuleDirection(p)
      p.draw = function () {
        this.ctx.beginPath()
        this.ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
        this.ctx.fillStyle = p.color
        this.ctx.fill()
      }
      return p
    },
    createCircle (x, y) {
      const p = {}
      p.x = x
      p.y = y
      p.color = '#FFF'
      p.radius = 0.1
      p.alpha = 0.5
      p.lineWidth = 6
      p.draw = function () {
        this.ctx.globalAlpha = p.alpha
        this.ctx.beginPath()
        this.ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
        this.ctx.lineWidth = p.lineWidth
        this.ctx.strokeStyle = p.color
        this.ctx.stroke()
        this.ctx.globalAlpha = 1
      }
      return p
    },
    renderParticule (anim) {
      for (let i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw()
      }
    },
    animateParticules (x, y) {
      const circle = this.createCircle(x, y)
      const particules = []
      for (let i = 0; i < this.numberOfParticules; i++) {
        particules.push(this.createParticule(x, y))
      }
      this.$anime
        .timeline()
        .add({
          targets: particules,
          x (p) {
            return p.endPos.x
          },
          y (p) {
            return p.endPos.y
          },
          radius: 0.1,
          duration: this.$anime.random(1200, 1800),
          easing: 'easeOutExpo',
          update: this.renderParticule
        })
        .add({
          targets: circle,
          radius: this.$anime.random(80, 160),
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: 'linear',
            duration: this.$anime.random(600, 800)
          },
          duration: this.$anime.random(1200, 1800),
          easing: 'easeOutExpo',
          update: this.renderParticule,
          offset: 0
        })
    },
    autoClick () {
      if (this.window.human) {
        return
      }
      this.animateParticules(
        this.$anime.random(this.centerX - 50, this.centerX + 50),
        this.$anime.random(this.centerY - 50, this.centerY + 50)
      )
      this.$anime({ duration: 200 }).finished.then(this.autoClick)
    }

    /*
this.render = this.$anime({
  duration: Infinity,
  update: function() {
    this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height)
  }
});

document.addEventListener(this.tap, function(e) {
  this.window.human = true;
  this.render.play();
  this.updateCoords(e);
  this.animateParticules(this.pointerX, this.pointerY);
}, false);

setTimeout(function () {
  this.window.human = true;
  this.render.play();
  this.updateCoords(e);
  this.animateParticules(this.pointerX, this.pointerY);
    }, 2000);

this.centerX = window.innerWidth / 2;
this.centerY = window.innerHeight / 2;

autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);
*/
  }
}
</script>
<style scoped>
#fireworks {
  display: block;
  height: 100vw;
  color: azure;
  background-color: #000;
}

#canvasContainer {
  display: block;
  background: #000;
  overflow: hidden;
}
canvas {
  display: block;
}

.ml4 {
  position: relative;
  font-weight: 900;
  font-size: 4.5em;
  text-align: center;
}
.ml4 .letters {
  position: absolute;
  margin: auto;
  left: 0;
  top: 0.3em;
  right: 0;
  opacity: 0;
  text-align: center;
}
.ml4 .letters-1 {
  color: red;
}
.ml4 .letters-2 {
  color: blue;
}
.ml4 .letters-3 {
  color: greenyellow;
}
.ml4 .letters-4 {
  color: yellow;
}

.ml13 {
  font-weight: 900;
  font-size: 4.5em;
  text-transform: uppercase;
  letter-spacing: 0.5em;

  /* position: absolute;
  margin: auto;
  left: 0;
  top: 0.3em;
  right: 0;
  opacity: 0; */
}

.ml13 .letter {
  color: yellow;
  display: inline-block;
  line-height: 1em;
  margin: auto;
  left: 0;
  top: 0.3em;
  /* position: absolute;
  margin: auto;
  left: 0;
  top: 0.3em;
  right: 0;
  opacity: 0; */
}

.ml15 {
  font-weight: 800;
  font-size: 3.8em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
}

.ml15 .word {
  display: inline-block;
  line-height: 1em;
}
</style>
