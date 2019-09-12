<template>
  <b-container id="CloudApp" fluid bg-variant="danger">
    <Cloud
      :data="pwordcloud"
      :font-size-mapper="fontSizeMapper"
      :on-word-click="onWordClick"
      :width="width"
      :height="height"
      :font="font"
      :padding="padding"
      :rotate="rotate"
    />
  </b-container>
</template>

<script>
import Cloud from 'vue-d3-cloud'
// import { serviceCloud } from '../../utils/serviceCloud.js'

export default {
  name: 'CloudApp',
  components: {
    Cloud
  },
  props: {
    pwordcloud: {
      type: Array,
      default () {
        return [
          { text: 'SEO', value: 2000 },
          { text: 'Photography', value: 1900 },
          { text: 'Optimisation', value: 1800 },
          { text: 'Websites', value: 1700 },
          { text: 'Workshops', value: 1600 },
          { text: 'Advertising', value: 1500 },
          { text: 'Branding', value: 1400 },
          { text: 'Partner', value: 1300 },
          { text: 'Animation', value: 1200 },
          { text: 'Content', value: 1100 },
          { text: 'CMS', value: 1000 },
          { text: 'SEO', value: 900 },
          { text: 'Photography', value: 800 },
          { text: 'Optimisation', value: 700 },
          { text: 'Websites', value: 600 },
          { text: 'Workshops', value: 500 },
          { text: 'Advertising', value: 400 },
          { text: 'Branding', value: 300 },
          { text: 'Partner', value: 200 },
          { text: 'Animation', value: 100 },
          { text: 'Content', value: 90 },
          { text: 'CMS', value: 80 },
          { text: 'Product', value: 70 }
        ]
      }
    }
  },
  data () {
    return {
      // words: serviceCloud,
      fontSizeMapper: word => Math.log2(word.value) * 3,
      onWordClick: (word) => {
        // window.alert(`go to service ${word.text}`)
        return false
      },
      width: '700',
      height: '600',
      font: 'impact',
      rotate: '-30',
      padding: 0
    }
  }
}
</script>

<style scoped lang="scss">
svg g text {
  opacity: 0;
}
.wordCloud svg {
  opacity: 0.5;
}
text {
  animation: kaboom 5s ease alternate infinite;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
}
@keyframes kaboom {
  90% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.1);
  }
}

// @keyframes blink {
//   0% {
//     text-shadow: 0 0 20px rgba(226, 25, 45, 0);
//   }
//   20% {
//     fill: rgba(226, 25, 45, 1);
//     text-shadow: -5px -5px 20px rgba(226, 25, 45, 0.8),
//       5px -5px 20px rgba(226, 25, 45, 0.8), 5px 5px 20px rgba(226, 25, 45, 0.8),
//       -5px 5px 20px rgba(226, 25, 45, 0.8);
//   }
//   30% {
//     fill: rgba(226, 25, 45, 1);
//     text-shadow: -5px -5px 20px rgba(226, 25, 45, 0.8),
//       5px -5px 20px rgba(226, 25, 45, 0.8), 5px 5px 20px rgba(226, 25, 45, 0.8),
//       -5px 5px 20px rgba(226, 25, 45, 0.8);
//   }
//   100% {
//     text-shadow: 0 0 20px rgba(226, 25, 45, 0);
//   }
// }

// @keyframes hideshow {
//   0% {
//     opacity: 1;
//   }
//   10% {
//     opacity: 1;
//   }
//   15% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 0;
//   }
// }

// @keyframes FadeIn {
//   0% {
//     opacity: 0;
//     transform: scale(0.1);
//   }

//   85% {
//     opacity: 1;
//     transform: scale(1.05);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

// /* svg g text.blink {
//   animation: blink 2s ease-out;
// } */

// svg g:nth-child(1) {
//   animation: hideshow 1s ease infinite;
//   /* animation-delay: 0.5s; */
// }
// svg g:nth-child(2) {
//   animation: hideshow 2s ease infinite;
//   /* animation-delay: 1s; */
// }
// svg g:nth-child(3) {
//   animation: hideshow 3s ease infinite;
//   /* animation-delay: 1.5s; */
// }
// svg g:nth-child(4) {
//   animation-delay: 2s;
// }
// svg g:nth-child(5) {
//   animation-delay: 2.5s;
// }
// svg g:nth-child(6) {
//   animation-delay: 3s;
// }
// svg g:nth-child(7) {
//   animation-delay: 4.5s;
// }
// svg g:nth-child(8) {
//   animation-delay: 5s;
// }
// svg g:nth-child(9) {
//   animation-delay: 5.5s;
// }
// svg g:nth-child(10) {
//   animation-delay: 6s;
// }
</style>
