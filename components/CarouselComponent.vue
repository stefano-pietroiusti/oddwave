<template>
  <b-container fluid class="w-75">
    <b-carousel
      :id="carouselId"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      :img-width="imgwidth"
      :img-height="imgheight"
      :style="carouselStyle"
      fade
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="item in slides"
        :key="item.image"
        :img-src="item.image"
        :caption="item.imageCaption"
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
    slides: {
      type: Array,
      default () {
        return [
          {
            image: '/imgs/analytics.jpg',
            imageCaption: 'Analytics'
          },
          {
            image: '/imgs/design.jpg',
            imageCaption: 'Design'
          },
          {
            image: '/imgs/collaboration.jpg',
            imageCaption: 'Collaboration'
          },
          {
            image: '/imgs/hosting.jpg',
            imageCaption: 'Hosting'
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
.carouselStyle {
  text-shadow: 1px 1px 2px #333;
}
</style>
