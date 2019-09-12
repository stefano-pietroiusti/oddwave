<template>
  <div class="container-fluid wave">
    <span class="top-left">{{ pheader }}</span>
    <div class="wrap">
      <div v-for="n in 500" :key="n" class="c" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['pheader']
}
</script>
<style scoped lang="scss">
// best in chrome
$total: 1000; // total particles
$orb-size: 500px;
$particle-size: 6px;
$time: 20s;
$base-hue: 71; // change for diff colors (180 is nice) 49 yellow 350 red
.top-left {
  top: 0px;
  left: 16px;
  display: block;
  color: white;
  width: 100%;
  font-size: 3em;
  font-family: 'Azo Sans', 'Black Han Sans', sans-serif;
  // font-family:inherit;
  line-height: 1.5;
  text-transform: uppercase;
}

.wave {
  // background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  // background: radial-gradient(ellipse at bottom, #fff 0%, #fff 100%);
  // background: radial-gradient(ellipse at bottom, #DB3096 0%, #da659c 100%);
  background: radial-gradient(ellipse at bottom, #091540 0%, #5a597b 100%);
  height: 50vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  font-family: inherit;
  justify-content: center;
  align-items: center;
}

.wrap {
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 0;
  transform-style: preserve-3d;
  perspective: 1000px;
  animation: rotate $time infinite linear; // rotate orb
}

@keyframes rotate {
  100% {
    transform: rotateY(360deg) rotateX(360deg);
  }
}

.c {
  position: absolute;
  width: $particle-size;
  height: $particle-size;
  border-radius: 50%;
  opacity: 0;
}

@for $i from 1 through $total {
  $z: (random(360) * 1deg); // random angle to rotateZ
  $y: (random(360) * 1deg); // random to rotateX
  $hue: ((40 / $total * $i) + $base-hue); // set hue

  .c:nth-child(#{$i}) {
    // grab the nth particle
    animation: orbit#{$i} $time infinite;
    animation-delay: ($i * 0.01s);
    background-color: hsla($hue, 100%, 50%, 1);
  }

  @keyframes orbit#{$i} {
    20% {
      opacity: 1; // fade in
    }
    30% {
      transform: rotateZ(-$z) rotateY($y) translateX($orb-size) rotateZ($z); // form orb
    }
    80% {
      transform: rotateZ(-$z) rotateY($y) translateX($orb-size) rotateZ($z); // hold orb state 30-80
      opacity: 1; // hold opacity 20-80
    }
    100% {
      transform: rotateZ(-$z) rotateY($y) translateX(($orb-size * 3))
        rotateZ($z); // translateX * 3
    }
  }
}
</style>
