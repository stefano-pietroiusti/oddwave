<template>
  <div id="canvasContainer" class="mt-header light">
    <h2>
      Fireworks animation on {{ window.innerWidth }} {{ window.innerHeight }}
      <br>
      {{ centerX }} {{ centerY }}
      <br>
      {{ window.human }}
      <br>
      X: {{ lastPos.x }}, Y: {{ lastPos.y }}
      <br>
      RandomX: {{ randomPos.x }}, RandomY: {{ randomPos.y }}
    </h2>
    <canvas id="fireworks" ref="fireworks" class="fireworks" @mousedown="startTouch" />
  </div>
</template>

<script>
// import anime from 'animejs'

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
      canvasEl: {
        // This is the CanvasRenderingContext that children will draw to.
        width: 0,
        height: 0,
        context: null
      },
      ctx: null,
      numberOfParticules: 30,
      pointerX: 0,
      pointerY: 0,
      lastPos: { x: 0, y: 0 },
      randomPos: { x: 0, y: 0 },
      centerX: 0,
      centerY: 0,
      tap: null,
      render: null,
      canvas: {
        // This is the CanvasRenderingContext that children will draw to.
        width: 0,
        height: 0,
        context: null
      }
    }
  },
  // provide () {
  //   return {
  //     provider: this.provider
  //   }
  // },
  mounted () {
    this.canvasEl = this.$refs.fireworks
    this.canvasEl.context = this.$refs.fireworks.getContext('2d')
    const c = this.$refs.fireworks
    this.ctx = c.getContext('2d')
    // Red rectangle
    this.ctx.beginPath()
    this.ctx.lineWidth = '6'
    this.ctx.strokeStyle = 'red'
    this.ctx.rect(5, 5, 290, 140)
    this.ctx.stroke()

    // Green rectangle
    this.ctx.beginPath()
    this.ctx.lineWidth = '4'
    this.ctx.strokeStyle = 'green'
    this.ctx.rect(30, 30, 50, 50)
    this.ctx.stroke()

    // Blue rectangle
    // this.ctx.beginPath()
    // this.ctx.lineWidth = '10'
    // this.ctx.strokeStyle = 'blue'
    // this.ctx.rect(50, 50, 150, 80)
    // this.ctx.stroke()

    // // Blue rectangle
    // this.ctx.beginPath()
    // this.ctx.lineWidth = '10'
    // this.ctx.strokeStyle = 'white'
    // this.ctx.rect(300, 300, 150, 80)
    // this.ctx.stroke()

    // Fireworks
    // this.setCanvasSize()
    this.initFireworks()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setCanvasSize)
  },
  beforeMount () {
    window.addEventListener('resize', this.setCanvasSize)
  },
  methods: {
    startTouch () {
      this.window.human = true
      this.lastPos.x = event.clientX
      this.lastPos.y = event.clientY
      this.animateParticules(this.lastPos.x, this.lastPos.y)
    },
    getMousePos (canvasDom, mouseEvent) {
      const rect = canvasDom.getBoundingClientRect()
      return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
      }
    },
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    getRandomPoint () {
      this.randomPos.x = this.getRandomInt(0, this.$refs.fireworks.width)
      this.randomPos.y = this.getRandomInt(0, this.$refs.fireworks.height)
      // this.lastPos.y = event.clientY
      // this.xPos = this.getRandomInt(0, this.canvasEl.width)
      // const yPos = this.getRandomInt(0, this.canvasEl.height)
      // return [xPos, yPos]
    },
    setCanvasSize () {
      this.window.innerWidth = this.$refs.fireworks.parentElement.clientWidth
      this.window.innerHeight = this.$refs.fireworks.parentElement.clientHeight

      this.$refs.fireworks.width = this.window.innerWidth * 2
      this.$refs.fireworks.height = this.window.innerHeight * 2
      this.$refs.fireworks.style.width = this.window.innerWidth + 'px'
      this.$refs.fireworks.style.height = this.window.innerHeight + 'px'
      this.$refs.fireworks.getContext('2d').scale(2, 2)
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
    initFireworks () {
      this.ctx.beginPath()
      this.ctx.lineWidth = '10'
      this.ctx.strokeStyle = 'blue'
      this.ctx.rect(50, 50, 150, 80)
      this.ctx.stroke()

      // this.canvasEl = this.$el.querySelector('.fireworks')
      // this.canvasEl = this.$refs.fireworks
      // console.log('=========canvasE1============', this.canvasEl)
      // this.canvasEl = this.$refs.fireworks
      // this.canvasEl.context = this.$refs.fireworks.getContext('2d')
      // console.log('=======this.canvasEl=========', this.canvasEl)
      // console.log('=======this.canvasEl.context=========', this.canvasEl.context)

      // const render = this.$anime({
      //   duration: Infinity,
      //   update () {
      //     ctx.context.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height)
      //   }
      // })

      // this.tap =
      //   'ontouchstart' in window || navigator.msMaxTouchPoints
      //     ? 'touchstart'
      //     : 'mousedown'
      // this.canvasEl.addEventListener(
      //   this.tap,
      //   function (e) {
      //     window.human = true
      //     this.lastPos = this.getMousePos(this.canvasEl, e)
      //   },
      //   false
      // )

      // document.addEventListener(this.tap, this.handleTap, false)
      // document.addEventListener(this.tap, function (e) {
      //   this.window.human = true
      //   this.render.play()
      //   this.updateCoords(e)
      //   this.animateParticules(this.pointerX, this.pointerY)
      // }, false)

      // setTimeout(function () {
      //   this.window.human = true
      //   this.render.play()
      //   this.updateCoords(e)
      //   this.animateParticules(this.pointerX, this.pointerY)
      // }, 2000)

      // this.centerX = this.window.innerWidth / 2
      // this.centerY = this.window.innerHeight / 2

      // this.centerX = this.$refs.fireworks.width / 4
      // this.centerY = this.$refs.fireworks.height / 4
      // this.getRandomPoint()
      // this.autoClick()
      // console.log('=========canvasE1 centerX============', this.centerX)
      // console.log('=========canvasE1 centerX============', this.centerY)

      // window.addEventListener('resize', setCanvasSize, false);
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
      // if (this.window.human) {
      //   return
      // }
      this.animateParticules(
        this.$anime.random(this.centerX - 50, this.centerX + 50),
        this.$anime.random(this.centerY - 50, this.centerY + 50)
      )
      this.$anime({ duration: 200 }).finished.then(this.autoClick)
    }
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
