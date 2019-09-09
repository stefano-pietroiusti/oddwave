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
    <h1>Canvas animation</h1>
    <!-- <div
      v-anime="{ rotate: '1turn', backgroundColor: '#FFF', duration: 2000, loop: true }"

    >
      testing animation
    </div>-->
    <canvas id="canvas" />
    <canvas id="fireworks" ref="fireworks" class="fireworks">testing fireworks</canvas>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      window: {
        human: false,
        innerWidth: 0,
        innerHeight: 0,
        colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
        counter: 0,
        canvasEl: null,
        ctx: null,
        numberOfParticules: 30,
        pointerX: 0,
        pointerY: 0,
        tap: null
      }
    }
  },
  mounted () {
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

    /*
setCanvasSize() {
  canvasEl.width = window.innerWidth * 2;
  canvasEl.height = window.innerHeight * 2;
  canvasEl.style.width = window.innerWidth + 'px';
  canvasEl.style.height = window.innerHeight + 'px';
  canvasEl.getContext('2d').scale(2, 2);
}

function updateCoords(e) {
  pointerX = e.clientX || e.touches[0].clientX;
  pointerY = e.clientY || e.touches[0].clientY;
}

function setParticuleDirection(p) {
  var angle = anime.random(0, 360) * Math.PI / 180;
  var value = anime.random(50, 180);
  var radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle)
  }
}

function createParticule(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = colors[anime.random(0, colors.length - 1)];
  p.radius = anime.random(16, 32);
  p.endPos = setParticuleDirection(p);
  p.draw = function() {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
  return p;
}

function createCircle(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = '#FFF';
  p.radius = 0.1;
  p.alpha = .5;
  p.lineWidth = 6;
  p.draw = function() {
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = p.lineWidth;
    ctx.strokeStyle = p.color;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  return p;
}

function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

function animateParticules(x, y) {
  var circle = createCircle(x, y);
  var particules = [];
  for (var i = 0; i < numberOfParticules; i++) {
    particules.push(createParticule(x, y));
  }
  anime.timeline().add({
    targets: particules,
    x: function(p) { return p.endPos.x; },
    y: function(p) { return p.endPos.y; },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule
  })
    .add({
    targets: circle,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: 'linear',
      duration: anime.random(600, 800),
    },
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule,
    offset: 0
  });
}

var render = anime({
  duration: Infinity,
  update: function() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }
});

document.addEventListener(tap, function(e) {
  window.human = true;
  render.play();
  updateCoords(e);
  animateParticules(pointerX, pointerY);
}, false);

var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

function autoClick() {
  if (window.human) return;
  animateParticules(
    anime.random(centerX-50, centerX+50),
    anime.random(centerY-50, centerY+50)
  );
  anime({duration: 200}).finished.then(autoClick);
}

autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);

*/
  },
  beforeDestroy () {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
  beforeMount () {
    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // Your scroll handling here
      console.log(window.scrollY)
    },
    onResize (event) {
      console.log('window has been resized', event)
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
    getFireworks () {
      this.canvasEl = this.$el.querySelector('.fireworks')
      this.ctx = this.canvasEl.getContext('2d')
      this.tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown'
    }
  }
}
</script>
<style scoped>
#fireworks {
  display: block;
  height: 100vw;
  color: azure;
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
