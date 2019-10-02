<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="servicesContainer" class="text-center mt-header w-100">
    <no-ssr>
      <HeaderComponent :pheader="service.header" :pstyle="service.headerStyle" />
      <AnimeBannerWordsHeaderComponent
        :pheader="service.subheader"
        :pbgimage="service.backgroundImage"
      />
      <span id="marketing">
        <MarketingButton :penquire="service.enquire" :pstyle="service.subheaderStyle" />
      </span>

      <span v-if="service.slides" id="carousel">
        <CarouselComponent :carousel-id="service.id" :pslides="service.slides" />
      </span>

      <TextImageComponent
        v-for="(item,i) in service.content"
        :key="i"
        :pcontent="{ text: item.text, bgImage: item.bgImage, inlineImage: item.inlineImage, inlineImageText: item.inlineImageText, inlineImageRight: item.inlineImageRight }"
        :pstyle="(item.dark) ? { bgStyle: 'parralaxNormal w-100 text-secondary text-left px-5 pt-3', inlineImageStyle: item.inlineImageStyle} : { bgStyle: 'parralaxNormal w-100 text-primary text-left px-5 pt-3', inlineImageStyle: item.inlineImageStyle}"
      />

      <span id="marketing">
        <HeaderComponent
          :psubheader="service.marketing.header + ' TO ' + service.marketing.subheader"
          :pstyle="service.subheaderStyle"
        />
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
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.baseUrl}${this.$route.path}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.service.description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.service.description
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
      service.enquire = 'Get in touch'
      // 'From $' + service.price.value + ' per ' + service.price.unit
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
</style>
