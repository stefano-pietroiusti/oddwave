<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="servicesContainer" class="text-center mt-header w-100">
    <HeaderComponent :pheader="service.header" :pstyle="service.headerStyle" />
    <AnimeBannerWordsHeaderComponent
      :pheader="service.subheader"
      :pbgimage="service.backgroundImage"
    />

    <span v-if="service.slides" id="carousel">
      <CarouselComponent :carousel-id="service.id" :pslides="service.slides" />
    </span>

    <TextImageComponent
      v-for="(item,i) in service.content"
      :key="i"
      :pcontent="{header: item.header, text: item.text, list: item.list, bgImage: item.bgImage, inlineImage: item.inlineImage, inlineImageText: item.inlineImageText, inlineImageRight: item.inlineImageRight }"
      :pstyle="(item.dark) ? { bgStyle: 'parralaxNormal w-100 text-secondary text-left  px-2 p-2', inlineImageStyle: item.inlineImageStyle} : { bgStyle: 'parralaxNormal w-100 text-primary text-left px-2 p-2', inlineImageStyle: item.inlineImageStyle}"
    />

    <HeaderComponent
      :psubheader="service.marketing.header + ' TO ' + service.marketing.subheader"
      :pstyle="service.subheaderStyle"
    />

    <ButtonComponent btext="Get started" blink="/contact/" :pstyle="service.subheaderStyle" />
    <!--  <D3Cloud :pwordcloud="service.cloud" />-->
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import ButtonComponent from '@/components/ButtonComponent'
import TextImageComponent from '@/components/TextImageComponent'
import AnimeBannerWordsHeaderComponent from '@/components/AnimeBannerWordsHeaderComponent'
import CarouselComponent from '@/components/CarouselComponent'

export default {
  components: {
    HeaderComponent,
    ButtonComponent,
    TextImageComponent,
    AnimeBannerWordsHeaderComponent,
    CarouselComponent
  },
  head () {
    let content = `${process.env.baseUrl}${this.$route.path}`
    content = (content.slice(-1) !== '/') ? content + '/' : content
    return {
      title: this.service.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content
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
      // service.isCarousel = !!R.prop('slides', service)
      service.isCarousel = !!service.slides
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
