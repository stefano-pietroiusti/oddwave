<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="servicesContainer" class="text-center mt-header w-100">
    <no-ssr>
      <AnimeBannerWordsHeaderComponent
        :pheader="service.header"
        :pbgimage="service.headerImage"
        :pstyle="service.headerStyle"
      />

      <span id="marketing">
        <HeaderComponent :psubheader="service.subheader" :pstyle="service.subheaderStyle" />
        <MarketingButton :penquire="service.enquire" :pstyle="service.subheaderStyle" />
      </span>

      <span v-if="service.slides" id="carousel">
        <CarouselComponent :carousel-id="service.id" :pslides="service.slides" />
      </span>

      <TextImageComponent
        v-for="(item,i) in service.content"
        :key="i"
        :pcontent="{ text: item.text, bgImage: item.bgImage, inlineImage: item.inlineImage }"
        :pstyle="(item.dark) ? { bgStyle: 'parralaxNormal w-100 text-secondary text-left px-5 pt-3', inlineImageStyle: 'inlineImage10 inlineImageLeft'} : { bgStyle: 'parralaxNormal w-100 text-primary text-left px-5 pt-3', inlineImageStyle: 'inlineImage10 inlineImageLeft'}"
      />

      <span id="marketing">
        <HeaderComponent :psubheader="service.marketing.header + ' TO ' + service.marketing.subheader" :pstyle="service.subheaderStyle" />
        <MarketingButton :penquire="service.enquire" :pstyle="service.subheaderStyle" />
      </span>

      <!--  <D3Cloud :pwordcloud="service.cloud" />-->
    </no-ssr>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import MarketingButton from '@/components/MarketingButton'
import TextImageComponent from '@/components/TextImageComponent'
import AnimeBannerWordsHeaderComponent from '@/components/AnimeBannerWordsHeaderComponent'
import CarouselComponent from '@/components/CarouselComponent'

const R = require('ramda')
export default {
  components: {
    HeaderComponent,
    MarketingButton,
    TextImageComponent,
    AnimeBannerWordsHeaderComponent,
    CarouselComponent
  },
  head () {
    return {
      title: this.service.title,
      meta: [
        {
          hid: 'oddwave-services-' + this.service.id,
          name: this.service.title,
          content: this.service.header + ' and ' + this.service.subheader
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.service.keywords
        }
      ]
    }
  },
  data () {
    return {
      id: this.$route.params.id,
      panimheader: 'be where the world is going'
    }
  },
  computed: {
    service () {
      const service = this.$store.state.services.all.find(
        service => service.id === this.id
      )
      service.enquire =
        'Get this now from $' +
        service.price.value +
        ' per ' +
        service.price.unit
      service.isCarousel = !!R.prop('slides', service)
      return service
    },
    relatedservices () {
      const related = this.$store.state.services.all.filter(
        service => service.id !== this.id
      )
      return related
    }
  }
}
</script>

<style scoped>
#marketing {
  position: relative;
  width: 50%;
  height: 50%;
  bottom: 0;
  margin: auto;
}
#carousel {
background-color: black
}
</style>
