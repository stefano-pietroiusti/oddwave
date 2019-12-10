<template>
  <b-container id="mainContainer" fluid class="text-left p-0 m-0">
    <!-- <Nav id="navbar" class="container-fluid" :ptheme="theme" /> -->
    <!-- <b-container fluid class="headerModule rellaxImage comboFilter h-100" :style="gradient" />
    <div class="module resetFilter">
      <div class="module-inside resetFilter">
        <HeaderComponentLanding :pheader="client.subheader" :psubtitle="client.subtitle" />
      </div>
    </div> -->

    <b-container fluid class="m-0 p-0 clip-svg-inline" :style="gradient">
      <Nav id="navbar" class="container-fluid" :ptheme="theme" />
      <div class="module resetFilter" style="top:20%;">
        <div class="module-inside resetFilter" style="min-height: 80vh;">
          <HeaderComponentLanding :pheader="client.subheader" :psubtitle="client.subtitle" />
        </div>
      </div>
    </b-container>
    <!-- <b-container fluid class="divider bg-white waveClip" /> -->

    <SectionComponent
      pheader="About Us"
      :pcontent="client.about"
      class="align-self-center aboutus bgsteelblue"
    />
    <SectionComponent
      pheader="Services"
      :pcontent="client.services"
      class="align-self-center services"
    />
    <ServicesLinksComponent class="servicesComponent" :services="summaries" />

    <p id="whyussection" class="p-3" />
    <WhyUsComponent
      pheader="Why Us?"
      class="align-self-center whyus bgsteelblue "
      :pfeatures="client.features"
    />

    <!-- <TextImageComponent
      v-for="(item,i) in client.content"
      :key="i"
      :pcontent="{header: item.header, text: item.text, list: item.list, bgImage: item.bgImage, inlineImage: item.inlineImage, inlineImageText: item.inlineImageText, inlineImageRight: item.inlineImageRight }"
      :pstyle="(item.dark) ? { bgStyle: 'w-100 text-secondary text-left px-4 p-2', inlineImageStyle: item.inlineImageStyle} : { bgStyle: 'w-100 text-primary text-left  px-4 p-2', inlineImageStyle: item.inlineImageStyle}"
    /> -->

    <!-- <b-container
      fluid
      class="text-primary rellaximage rellaxwatermark rellax"
    >
      I’m that default chill speed of "-2"
    </b-container>
    <b-container fluid class="text-primary rellax" data-rellax-speed="-4">
      I’m extra slow and smooth
    </b-container>
    <b-container
      fluid
      class="text-primary rellax"
      data-rellax-speed="3"
      data-rellax-zindex="10"
    >
      I’m super fast!!
    </b-container>
    <b-container
      fluid
      class="text-primary rellax"
      data-rellax-speed="10"
      data-rellax-zindex="20"
    >
      I’m second super fast!!
    </b-container>-->
    <!-- <HeaderComponent :psubheader="client.featuresHeader" pcontainerclass="transparent" />

    <PromoComponent
      class="promoComponent rellax"
      data-rellax-speed="-2"
      :features="client.features"
      variant="primary"
    /> -->
    <!-- <HeaderComponent
      v-if="featuredProducts.length > 0"
      psubheader="Featured Packages"
      psubtitle="Flexible payment plans are available."
      pclass="text-center"
    />
    <span v-for="item in featuredProducts" :key="item.id">
      <ProductComponent :product="item" />
      <hr fluid class="hrprimary">
    </span> -->

    <SliderComponent :products="featuredProducts" />
    <SectionContactComponent
      pheader="What can we do for you?"
      :pcontent="client.businessvalue"
      class="align-self-center services"
    />
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Rellax from 'rellax'
import Nav from '@/components/Nav'
import HeaderComponentLanding from '@/components/HeaderComponentLanding'
// import HeaderComponent from '@/components/HeaderComponent'
// import PromoComponent from '@/components/PromoComponent'

import ServicesLinksComponent from '@/components/ServicesLinksComponent'
// import ProductComponent from '@/components/ProductComponent'
import SectionComponent from '@/components/SectionComponent'
import SectionContactComponent from '@/components/SectionContactComponent'
import WhyUsComponent from '@/components/WhyUsComponent'
import SliderComponent from '@/components/SliderComponent'

export default {
  components: {
    Nav,
    HeaderComponentLanding,
    // HeaderComponent,
    // PromoComponent,
    // TextImageComponent,
    ServicesLinksComponent,
    // ProductComponent,
    SectionComponent,
    SectionContactComponent,
    WhyUsComponent,
    SliderComponent
  },
  head () {
    let content = `${process.env.baseUrl}${this.$route.path}`
    content = content.slice(-1) !== '/' ? content + '/' : content
    return {
      title: this.client.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.client.description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.client.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.client.keywords.join()
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.jsonld), type: 'application/ld+json' }
      ]
    }
  },
  data (context) {
    return {
      backgroundurl: 'nz.svg',
      pbgimage: {
        color1: 'rgba(0, 0, 0, 1) 50%',
        color2: 'rgba(0, 0, 0, 0.8) 50%',
        url: 'laptop.jpg',
        height: '20vh'
      },
      theme: 'theoddwave'
    }
  },
  computed: {
    ...mapGetters('services', ['summaries']),
    ...mapGetters('products', ['getProductById', 'getFeaturedProducts']),
    ...mapGetters('client', ['getClient']),
    client () {
      return this.getClient
    },
    featuredProducts () {
      const products = this.getFeaturedProducts()
      return products
    },
    jsonld () {
      if (!this.client) {
        return null
      }
      return {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        name: this.client.name,
        legalName: this.client.legalName,
        '@id': this.client['@id'],
        logo: this.client.logo,
        image: this.client.image,
        foundingDate: this.client.foundingDate,
        founders: this.client.founders,
        address: this.client.address,
        geo: this.client.geo,
        contactPoint: this.client.contactPoint,
        sameAs: this.client.sameAs,
        url: this.client.url,
        description: this.client.description,
        telephone: this.client.telephone,
        openingHoursSpecification: this.client.openingHoursSpecification,
        priceRange: this.client.priceRange
      }
    },
    bannerImagePath () {
      if (!this.pbgimage.url) {
        return
      }
      const fileName = this.pbgimage.url
      return {
        '1': require(`~/assets/imgs/banner/${fileName}?size=1920`),
        '2': require(`~/assets/imgs/banner/${fileName}?size=768`)
      }
    },
    gradient () {
      if (!this.pbgimage.url) {
        return
      }
      // const image1x = this.bannerImagePath['1']
      // const image2x = this.bannerImagePath['2']
      const imagewebp = `/imgs/laptop-dark.webp`
      const imagepng = `/imgs/laptop-dark-mobile.png`
      return {
        // backgroundImage: `linear-gradient(45deg,  ${this.pbgimage.color1}, ${this.pbgimage.color2}), url(${image1x}), -webkit-image-set(url(${image1x}) 1x, url(${image2x}) 2x)`,
        backgroundImage: `url(${imagewebp}), url(${imagepng}), linear-gradient(45deg,  ${this.pbgimage.color1}, ${this.pbgimage.color2})`,
        backgroundAttachment: 'fixed',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  },
  mounted () {
    // if (process.env.NODE_ENV !== 'production') {
    this.$ga.page(this.$route.path)
    this.rellax = new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
    // window.addEventListener('scroll', function () {
    //   const navbar = document.getElementById('navbar')
    //   const navClasses = navbar.classList
    //   if (navClasses.contains('light') === true) {
    //     navClasses.remove('light')
    //   }
    //   if (window.screenTop >= 150) {
    //     if (navClasses.contains('dark') === false) {
    //       navClasses.toggle('dark')
    //     }
    //   } else if (navClasses.contains('dark') === true) {
    //     navClasses.toggle('dark')
    //   }
    // })
    // this.$nextTick(function () {

    // })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        window.screenTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      const navbar = document.getElementById('navbar')
      const navClasses = navbar.classList
      if (currentScrollPosition >= 200) {
        if (navClasses.contains('navbar-theoddwave')) {
          navClasses.add('black')
        }
      } else {
        navClasses.remove('black')
      }
    }
  }
}
</script>
<style scoped lang="scss">
.testbackground {
  background: rgba($color: black, $alpha: 0.1);
}

.module {
  position: relative;
}
.module::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  // filter: grayscale(100%);
}
.module-inside {
  /* This will make it stack on top of the ::before */
  position: relative;
}

.rellaximage {
  background-color: #000;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 1;
  min-height: 100%;
}

.rellaxwatermark {
  width: 100%;
  height: 100%;
  position: absolute;
  /* margin-left: 20%;
  top: 30%;
  pointer-events: none;
  font-family: inherit;
  color: #000;
  font-size: 5vw;
  z-index: 20; */
  font-size: 5vw;
  z-index: 20;
  opacity: 0.5;
}

.backgroundContainer {
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.1;
}

.promoComponent {
  z-index: -2;
  opacity: 1;
}
.servicesComponent {
  z-index: 10;
  opacity: 1;
}
p.watermark {
  width: 100%;
  height: 100%;
  position: fixed;
  margin-left: 20%;
  top: 30%;
  pointer-events: none;
  font-family: inherit;
  color: #000;
  font-size: 5vw;
  z-index: 20;
  opacity: 0.5;
  line-height: 1.5em;
}

.roundedContainer {
  position: relative;
  border-radius: 11px;
  line-height: 3rem;
  font-weight: 300;
  width: 95%;
  z-index: 1;
}

#mainContainer {
  width: 100%;
}

.svg {
  position: absolute;
  width: 0;
  height: 0;
}
.clipped {
  width: 100%;
  height: 350px;
  background: black;
  background-size: cover;
  -webkit-clip-path: url(#my-clip-path);
  clip-path: url(#my-clip-path);
}
</style>
