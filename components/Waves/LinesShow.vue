<template>
  <b-container ref="canvasContainer" fluid class="text-center mt-header w-100 h-100">
    <canvas id="c" ref="canvas" />
  </b-container>
</template>
<script>
// const w = (this.$refs.canvas.width = this.$refs.canvasContainer.innerWidth)
// const h = (this.$refs.canvas.height = this.$refs.canvasContainer.innerHeight)
// const ctx = this.$refs.canvas.getContext('2d')
// const minDist = 10
// const maxDist = 30
// const initialWidth = 10
// const maxLines = 100
// const initialLines = 4
// const speed = 5
// const lines = []
// const frame = 0
// const timeSinceLast = 0
// const dirs = [
//   // straight x, y velocity
//   [0, 1],
//   [1, 0],
//   [0, -1],
//   [-1, 0],
//   // diagonals, 0.7 = sin(PI/4) = cos(PI/4)
//   [0.7, 0.7],
//   [0.7, -0.7],
//   [-0.7, 0.7],
//   [-0.7, -0.7]
// ]
// const starter = {
//   // starting parent line, just a pseudo line

//   x: w / 2,
//   y: h / 2,
//   vx: 0,
//   vy: 0,
//   width: initialWidth
// }

// Line.prototype.step = function () {
//   let dead = false

//   const prevX = this.x
//   const prevY = this.y

//   this.x += this.vx
//   this.y += this.vy

//   --this.dist

//   // kill if out of screen
//   if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) { dead = true }

//   // make children :D
//   if (this.dist <= 0 && this.width > 1) {
//     // keep yo self, sometimes
//     this.dist = Math.random() * (maxDist - minDist) + minDist

//     // add 2 children
//     if (lines.length < maxLines) { lines.push(new Line(this)) }
//     if (lines.length < maxLines && Math.random() < 0.5) { lines.push(new Line(this)) }

//     // kill the poor thing
//     if (Math.random() < 0.2) { dead = true }
//   }

//   ctx.strokeStyle = ctx.shadowColor = getColor(this.x)
//   ctx.beginPath()
//   ctx.lineWidth = this.width
//   ctx.moveTo(this.x, this.y)
//   ctx.lineTo(prevX, prevY)
//   ctx.stroke()

//   if (dead) { return true }
// }

// export default {
//   name: 'LinesShow',
//   components: {},
//   data () {
//     return {
//       width: '800',
//       height: '250',
//       font: 'impact',
//       rotate: '-30',
//       padding: 1
//     }
//   },
//   computed: {
//     // images() {
//     //     return [
//     //         require("../assets/images/1.jpg"),
//     //         require("../assets/images/2.jpg"),
//     //         require("../assets/images/3.jpg")
//     //     ];
//     // }
//   },
//   mounted () {
//     this.init()
//   },
//   methods: {
//     init () {
//       lines.length = 0

//       for (let i = 0; i < initialLines; ++i) {
//         lines.push(new Line(starter))
//       }

//       ctx.fillStyle = '#222'
//       ctx.fillRect(0, 0, w, h)
//     },
//     getColor (x) {
//       return 'hsl( hue, 80%, 50% )'.replace('hue', (x / w) * 360 + frame)
//     },

//     anim () {
//       this.$refs.canvasContainer.requestAnimationFrame(anim)
//       ++frame
//       ctx.shadowBlur = 0
//       ctx.fillStyle = 'rgba(0,0,0,.02)'
//       ctx.fillRect(0, 0, w, h)
//       ctx.shadowBlur = 0.5
//       for (let i = 0; i < lines.length; ++i) {
//         if (lines[i].step()) {
//           lines.splice(i, 1)
//           --i
//         }
//       }
//       ++timeSinceLast

//       if (
//         lines.length < maxLines &&
//           timeSinceLast > 10 &&
//           Math.random() < 0.5
//       ) {
//         timeSinceLast = 0

//         lines.push(new Line(starter))
//         ctx.fillStyle = ctx.shadowColor = getColor(starter.x)
//         ctx.beginPath()
//         ctx.arc(starter.x, starter.y, initialWidth, 0, Math.PI * 2)
//         ctx.fill()
//       }
//     },
//     Line (parent) {
//       this.x = parent.x | 0
//       this.y = parent.y | 0
//       this.width = parent.width / 1.25

//       do {
//         const dir = dirs[(Math.random() * dirs.length) | 0]
//         this.vx = dir[0]
//         this.vy = dir[1]
//       } while (
//         (this.vx === -parent.vx && this.vy === -parent.vy) ||
//           (this.vx === parent.vx && this.vy === parent.vy)
//       )

//       this.vx *= speed
//       this.vy *= speed

//       this.dist = Math.random() * (maxDist - minDist) + minDist
//     }
//   }
// }
</script>
<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
}
</style>
