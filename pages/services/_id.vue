<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="servicesContainer" class="text-center mt-header w-100">
    <AnimeBannerWordsHeaderComponent :pheader="service.header" :pbgimage="service.headerImage" :pstyle="service.headerStyle" />
    <span id="marketing">
      <HeaderComponent :psubheader="service.subheader" :pstyle="service.subheaderStyle" />
      <MarketingButton
        :penquire="service.enquire"
        :pstyle="service.subheaderStyle"
      />
    </span>
    <TextImageComponent
      :pcontent="{ bgImage: service.bannerImage}"
      :pstyle="{ bgStyle: 'parralaxEffect w-100 text-primary text-left p-10'}"
    />
    <span v-if="service.slides" id="carousel">
      <CarouselComponent :slides="service.slides" />
    </span>
    <TextImageComponent
      v-for="(item,i) in service.content"
      :key="i"
      :pcontent="{ text: item.text, bgImage: item.image }"
      :pstyle="(item.dark) ? { bgStyle: 'parralaxNormal w-100 text-secondary text-left p-5 px-10', inlineImageStyle: 'inlineImage20 inlineImageLeft'} : { bgStyle: 'parralaxNormal w-100 text-primary text-left p-5 px-10', inlineImageStyle: 'inlineImage20 inlineImageLeft'}"
    />

    <Marketing
      :pheader="service.marketing.header"
      :plead="service.marketing.subheader"
      :ptext="service.marketing.content"
      :penquire="service.enquire"
    />

    <!--    <CarouselComponent :slides="service.slides" /> <D3Cloud :pwordcloud="service.cloud" />-->
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import Marketing from '@/components/Marketing'
import MarketingButton from '@/components/MarketingButton'
import TextImageComponent from '@/components/TextImageComponent'
import AnimeBannerWordsHeaderComponent from '@/components/AnimeBannerWordsHeaderComponent'
import CarouselComponent from '@/components/CarouselComponent'

const R = require('ramda')
export default {
  components: {
    HeaderComponent,
    Marketing,
    MarketingButton,
    TextImageComponent,
    AnimeBannerWordsHeaderComponent,
    CarouselComponent
  },
  head () {
    return {
      title: this.service.title,
      meta: [
        { name: 'twitter:title', content: this.service.title },
        { name: 'twitter:description', content: this.service.content },
        { name: 'twitter:image', content: this.service.image }
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
    },
    gradientStart () {
      return {
        backgroundImage: `linear-gradient(45deg, rgba(85, 255, 0, 0.2) 0%, rgba(0, 255, 255, 0.5) 100%), url(/imgs/seodigital.jpg)`,
        color: 'red'
      }
    }
  // gradientEnd() {
  //   return {
  //     backgroundImage: `linear-gradient(to left, ${this.colorEnd}, ${this.colorStart})`,
  //     color: "red"
  //   }
  // }
    // totalServices () {
    //   return this.$store.state.services.totalServices()
    // }
  }
}
</script>

<style scoped>
#marketing{
 position: absolute;
 width: 50%;
  bottom: 0;
  margin: auto;
}
</style>
