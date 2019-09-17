<template>
  <b-container fluid class="w-75">
    <b-carousel
      :id="carouselId"
      v-model="slide"
      :interval="1500"
      controls
      indicators
      :img-width="imgwidth"
      :img-height="imgheight"
      fade
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="item in slides"
        :key="item.image"
        :img-src="item.image"
        :caption="item.caption"
        :text="item.imageText"
        :img-width="imgwidth"
        :img-height="imgheight"
      />
    </b-carousel>
  </b-container>
</template>

<script>
export default {
  props: {
    carouselId: {
      type: String,
      default: 'carousel-1'
    },
    interval: {
      type: String,
      default: '3000'
    },
    imgwidth: {
      type: String,
      default: '512'
    },
    imgheight: {
      type: String,
      default: '240'
    },
    pslides: {
      type: Array,
      default () {
        return [
          {
            image: '/imgs/analytics.jpg',
            caption: 'Analytics'
          },
          {
            image: '/imgs/design.jpg',
            caption: 'Design'
          },
          {
            image: '/imgs/collaboration.jpg',
            caption: 'Collaboration'
          },
          {
            image: '/imgs/hosting.jpg',
            caption: 'Hosting'
          }
        ]
      }
    }
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    slides () {
      return this.pslides
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped>
/* .carouselStyle {
  text-shadow: 1px 1px 2px #333;
} */

.carousel-inner > .item > img, .carousel-inner > .item > a > img {
    width: 100%;
}
</style>
