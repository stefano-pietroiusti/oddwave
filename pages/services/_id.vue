<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="servicesMainContainer" class="bg-white">
    <Nav id="navbar" class="container-fluid" :ptheme="theme" />
    <!-- <Nav class="container-fluid bg-secondary text-primary" /> -->
    <!-- <b-container id="servicesBackground">
      <b-container id="servicesTextBackground">
        <p class="watermark">
          {{ service.title }}
        </p>
      </b-container>
    </b-container>-->

    <div id="servicesContainer" class="text-center w-100">
      <HeaderComponent :pheader="service.header" pcontainerclass="mt-7 mb-5 borderLeft" />

      <TextImageComponent
        v-for="(item,i) in service.content"
        :key="i"
        :pcontent="{header: item.header, text: item.text, list: item.list, bgImage: item.bgImage, inlineImage: item.inlineImage, inlineImageText: item.inlineImageText, inlineImageRight: item.inlineImageRight }"
        :pstyle="(item.dark) ? { bgStyle: 'parralaxNormal w-100 text-secondary text-left  px-3 p-2', inlineImageStyle: item.inlineImageStyle} : { bgStyle: 'parralaxNormal w-100 text-black text-left  px-3  p-2', inlineImageStyle: item.inlineImageStyle}"
      />

      <HeaderComponent
        v-if="service.features && service.features.length > 0"
        :psubheader="service.subheader"
        psubheaderclass="sectionHeaderPrimary"
        pclass="text-center"
      />

      <span v-if="service.features">
        <FeaturesComponent :features="service.features" variant="black" />
        <!-- <ButtonComponent btext="Chat about this" blink="/contact-theoddwave-nz/" :pvariant="`outline-black`" /> -->
      </span>

      <!-- <span v-for="item in featuredProducts" :key="item.id">
        <ProductComponent :product="item" :summary="true" />
        <hr fluid class="hrprimary">
      </span>-->
      <SliderComponent :products="featuredProducts" pheaderclass="sectionHeaderPrimary" />

      <b-container v-if="service.slides" fluid class="w-100">
        <b-row>
          <b-col sm="12" md="12" lg="12" xl="12">
            <HeaderComponent psubheader="Portfolio" pclass="sectionHeaderPrimary" />
          </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col
            v-for="item in service.slides"
            :key="item.image"
            sm="12"
            md="6"
            lg="4"
            xl="3"
          >
            <img
              :alt="item.imageText"
              :src="`/imgs/carousel/${carouselId}/${item.image}`"
              class="w-100"
            >
          </b-col>
        </b-row>
      </b-container>

      <!-- <b-container v-if="service.slides" id="lax" fluid class="text-left">
        <span v-for="item in service.slides" :key="item.image">
          <div>
            <img
              class="lax"
              :alt="item.imageText"
              :src="`/imgs/carousel/${carouselId}/${item.image}`"
              data-lax-preset="zoomInOut"
              data-lax-translate-x="vh 0, -elh (vw*1.5) | offset=10 speed=2"
            >
          </div>
          <div class="lax" data-lax-preset="fadeInOut zoomInOut | offset=10">
            <h2 class="text-center">{{ item.category }}</h2>
          </div>
        </span>
      </b-container>
    </div></span>
      </b-container>-->

      <!-- <HeaderComponent
        :psubheader="service.marketing.header + ' TO ' + service.marketing.subheader"
        :pstyle="service.subheaderStyle"
      />-->

      <!-- <ButtonComponent
        btext="Get started"
        blink="/contact-theoddwave-nz/"
        :pvariant="`outline-black`"
        class="text-center"
      />-->

      <!-- <ServicesRelatedComponent v-if="otherServices" :services="otherServices" /> -->

      <SectionContactComponent
        pheader="What can we do for you?"
        :pcontent="service.businessvalue"
        class="align-self-center services"
      />
      <div class="m-0 pb-5 bgsteelblue">
        <HeaderComponent
          psubheader="Related Services"
          pclass="sectionHeaderPrimary"
          pcontainerclass="m-0 p-0"
        />
        <ServicesLinksComponent :services="otherServices" />
      </div>
      <div class="m-0 pb-5 bg-white">
        <p id="whyussection" class="p-3" />
        <WhyUsComponent pheader="Why Us?" class="align-self-center" :pfeatures="features" pheaderclass="sectionHeaderPrimary" />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import HeaderComponent from '@/components/HeaderComponent'
import TextImageComponent from '@/components/TextImageComponent'
// import ButtonComponent from '@/components/ButtonComponent'
// import AnimeBannerWordsHeaderComponent from '@/components/AnimeBannerWordsHeaderComponent'
// import CarouselComponent from '@/components/CarouselComponent'
// import PromoComponent from '@/components/PromoComponent'
// import ProductComponent from '@/components/ProductComponent'
// import ServicesRelatedComponent from '@/components/ServicesRelatedComponent'
import SliderComponent from '@/components/SliderComponent'
import ServicesLinksComponent from '@/components/ServicesLinksComponent'
import SectionContactComponent from '@/components/SectionContactComponent'
import FeaturesComponent from '@/components/FeaturesComponent'
import WhyUsComponent from '@/components/WhyUsComponent'
import { mapGetters } from 'vuex'
import lax from 'lax.js'

export default {
  components: {
    Nav,
    HeaderComponent,
    TextImageComponent,
    // ButtonComponent,
    // AnimeBannerWordsHeaderComponent,
    // CarouselComponent,
    // PromoComponent,
    // ProductComponent,
    // ServicesRelatedComponent,
    SliderComponent,
    ServicesLinksComponent,
    SectionContactComponent,
    FeaturesComponent,
    WhyUsComponent
  },
  head () {
    let content = `${process.env.baseUrl}${this.$route.path}`
    content = content.slice(-1) !== '/' ? content + '/' : content
    return {
      title: this.service.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.service.title
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
      panimheader: 'be where the world is going',
      theme: 'contact'
    }
  },
  computed: {
    ...mapGetters('services', [
      'getRelatedSummaries',
      'getServiceById',
      'getServiceFeatures'
    ]),
    ...mapGetters('products', ['getProductById', 'getProductsById']),
    ...mapGetters('client', ['getClientFeatures']),
    service () {
      const service = this.getServiceById(this.id)
      service.enquire = 'Get in touch'
      service.isCarousel = !!service.slides
      return service
    },
    featuredProducts () {
      const products = this.getProductsById(this.id)
      return products
    },
    otherServices () {
      return this.getRelatedSummaries(this.id)
    },
    carouselId () {
      return `${this.id}`
    },
    features () {
      // return this.getServiceFeatures(this.id) || this.getClientFeatures
      return this.getClientFeatures
    }
  },
  mounted () {
    lax.setup({
      breakpoints: { small: 0, large: 768 }
    })
    window.addEventListener('resize', function () {
      lax.updateElements()
    })
    // lax.addPreset('myCoolPreset', function () {
    //   return {
    //     'data-lax-opacity': '(-vh*0.8) 40, (-vh*0.6) 0',
    //     'data-lax-rotate': '(-vh*2) 1000, (-vh*0.5) 0'
    //   }
    // })
    const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
    }
    window.requestAnimationFrame(updateLax)

    this.$ga.page(this.$route.path)
    this.$ga.event('page', this.$route.params.id)
  }
}
</script>

<style scoped>
#servicesMainContainer {
  background: transparent;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.servicesBackground {
  background-color: #ffaa00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23ffb100' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23ffb800' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ffbf00' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23ffc500' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23ffcc00' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23ffd624' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ffe038' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23ffeb49' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23fff558' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffff66' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
  min-height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
  opacity: 1;
}

p.watermark {
  width: 100%;
  height: 100%;
  position: fixed;
  margin-left: 20%;
  top: 35%;
  pointer-events: none;
  font-family: inherit;
  color: #eeeeee;
  font-size: 9vw;
  z-index: -1;
  opacity: 0.5;
}

#servicesTextBackground {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: cover;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: -10;
  opacity: 0.8;
}

img {
  min-width: 100%;
  max-width: 100%;
  outline: 1px solid white;
  outline-offset: -4px;
}
</style>
