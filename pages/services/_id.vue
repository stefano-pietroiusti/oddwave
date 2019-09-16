<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="servicesContainer" class="text-center mt-header w-100">
    <AnimeBannerWordsHeaderComponent :pheader="service.header" />
    <HeaderComponent :psubheader="service.subheader" />
    <h1>{{ service.isCarousel }}</h1>
    <TextComponent
      v-for="(item,i) in service.content"
      :key="i"
      :pcontent="item.text"
      :pimage="item.image"
    />
    <!-- <TextImageComponent v-for="(item,i) in service.content" :key="i" :pcontent="item.text" /> -->
    <Marketing
      :pheader="service.marketing.header"
      :plead="service.marketing.subheader"
      :ptext="service.marketing.content"
      :penquire="service.enquire"
    />
    <!-- <D3Cloud :pwordcloud="service.cloud" />-->
  </div>
  <!-- <b-container fluid class="text-center mt-header">
    <b-row>
      <b-col>
        <AnimeBannerWordsHeaderComponent :pheader="service.header" />
        <HeaderComponent :psubheader="service.subheader" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <TextComponent
          v-for="(item,i) in service.content"
          :key="i"
          :pcontent="item.text"
          :pimage="item.image"
        />
      </b-col>
    </b-row>
    <b-row class="w-50">
      <b-col class="w-50 text-left">
        <Marketing
          :pheader="service.marketing.header"
          :plead="service.marketing.subheader"
          :ptext="service.marketing.content"
          :penquire="service.enquire"
        />
      </b-col>
    </b-row>
    <b-row class="w-100 text-left">
      <b-col text-left>
        <MarketingOverlayComponent
          :pheader="service.marketing.header"
          :plead="service.marketing.subheader"
          :ptext="service.marketing.content"
          :penquire="service.enquire"
        />
      </b-col>
  </b-row>-->
  <!-- <b-container fluid class="text-center  mt-header w-100">
      <b-row>
        <b-col w="50">
          <Marketing
            :pheader="service.marketing.header"
            :plead="service.marketing.subheader"
            :ptext="service.marketing.content"
            :penquire="service.title"
          />
        </b-col>
        <b-col w="50">
          <D3Cloud :pwordcloud="service.cloud" />
        </b-col>
      </b-row>
  </b-container>-->
  <!-- <AnimeBannerParticleComponent :pheader="service.header" /> -->
  <!-- <h3>Other services</h3>
      <span v-for="(value, index) in relatedservices" :key="index">
        <p>{{ value.title }}</p>
  </span>-->
  <!-- <ul>
        <li :key="item.id" v:for="item in relatedServices">
          <nuxt-link :to="{name: 'services-id', params: {id: item.id}}">
            {{ item.title }}
          </nuxt-link>
        </li>
  </ul>-->
</template>

<script>
// import R from 'ramda'
import HeaderComponent from '@/components/HeaderComponent'
import Marketing from '@/components/Marketing'
// import TextImageComponent from '@/components/TextImageComponent'
import TextComponent from '@/components/TextComponent'
import AnimeBannerWordsHeaderComponent from '@/components/AnimeBannerWordsHeaderComponent'
// import CarouselComponent from '@/components/CarouselComponent'
const R = require('ramda')

export default {
  components: {
    HeaderComponent,
    Marketing,
    TextComponent,
    AnimeBannerWordsHeaderComponent
    // CarouselComponent
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
      // return { id: related.id, header: related.header, title: related.title }
    }
    // totalServices () {
    //   return this.$store.state.services.totalServices()
    // }
  }
}
</script>

<style scoped>
</style>
