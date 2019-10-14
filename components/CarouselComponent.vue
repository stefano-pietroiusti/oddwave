<template>
  <b-container fluid class="w-100 mt-0 py-2 bg-gunmetal">
    <b-carousel
      :id="carouselId"
      v-model="slide"
      :interval="interval"
      controls
      indicators
      :no-touch="false"
      no-hover-pause
      :img-width="imgwidth"
      :img-height="imgheight"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- <b-carousel-slide
        v-for="item in slides"
        :key="item.image"
        :img-src="item.processedImage"
        :caption="item.caption"
        :img-width="imgwidth"
        :img-height="imgheight"
        :img-alt="item.imageText"
      /> -->

      <b-carousel-slide
        v-for="item in slides"
        :key="item.image"
        :caption="item.caption"
        :img-alt="item.imageText"
      >
        <template v-slot:img>
          <img

            class="d-block img-fluid w-100 carousel-img"
            :width="imgwidth"
            :height="imgheight"
            :src="item.processedImage"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
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
      type: Number,
      default: 3500
    },
    imgwidth: {
      type: String,
      default: '800'
    },
    imgheight: {
      type: String,
      default: '450'
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
      const result = this.pslides.map(i => ({
        image: i.image,
        imageText: i.imageText,
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
<style scoped  lang="scss">
/* .carouselStyle {
  text-shadow: 1px 1px 2px #333;
} */
@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0.5, 0.5);
  }
  to {
    -webkit-transform: scale(1.2, 1.2);
  }
}

@keyframes zoom {
  from {
    transform: scale(0.5, 0.5);
  }
  to {
    transform:  scale(1.2, 1.2);
  }
}
.carousel-inner > .carousel-item > img {
  -webkit-animation: zoom 5s;
  animation: zoom 5s;
}
/* .carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  width: 100%;
} */

</style>
