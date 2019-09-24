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
        :img-src="item.processedImage"
        :caption="item.caption"
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
      default: 'default'
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
            image: 'analytics.jpg',
            caption: 'Analytics'
          },
          {
            image: 'design.jpg',
            caption: 'Design'
          },
          {
            image: 'collaboration.jpg',
            caption: 'Collaboration'
          },
          {
            image: 'hosting.jpg',
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
      const result = this.pslides.map(i => ({ image: i.image,
        caption: i.caption,
        // processedImage: require(`~/assets/imgs/carousel/${this.carouselId}/${i.image}?size=640`)
        processedImage: `/imgs/carousel/${this.carouselId}/${i.image}`
      }))
      return result
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
