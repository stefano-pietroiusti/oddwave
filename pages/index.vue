<template>
  <b-container id="mainContainer" fluid class="text-left p-0 m-0 bgsteelblue">
    <Nav id="navbar" class="container-fluid" :ptheme="theme" />
    <b-container fluid class="m-0 p-0 clip-wave-bottom" :style="gradient">
      <div class="module resetFilter" style="top:20%;">
        <div class="module-inside resetFilter" style="min-height: 80vh;">
          <HeaderComponentLanding :pheader="client.subheader" :psubtitle="client.subtitle" />
        </div>
      </div>
    </b-container>

    <SectionContactComponent
      pheader="Let our creative solutions build a path to success for your business"
      :pcontent="client.marketing"
      class="align-self-center"
    />

    <SectionComponent
      pheader="Services"
      :pcontent="client.services"
      class="align-self-center section bg-white"
    />

    <ServicesLinksComponent class="bg-white pb-5 text-center" :services="summaries" />
    <WhyUsComponent
      pheader="Why Us?"
      class="align-self-center section"
      :pfeatures="client.features"
    />
    <SectionImageComponent
      pheader="How we work"
      :pimage="client.clientprocessImage"
      class="align-self-center bg-white"
    />

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
    -->

    <SliderComponent :products="featuredProducts" />

    <SectionContactComponent
      pheader="Partner with us"
      :pcontent="client.businessvalue"
      class="align-self-center services bg-white"
    />
  </b-container>
</template>

<script>
// import Rellax from 'rellax'
import Nav from '@/components/Nav'
import HeaderComponentLanding from '@/components/HeaderComponentLanding'
import ServicesLinksComponent from '@/components/ServicesLinksComponent'
import SectionComponent from '@/components/SectionComponent'
import SectionContactComponent from '@/components/SectionContactComponent'
import SectionImageComponent from '@/components/SectionImageComponent'
import WhyUsComponent from '@/components/WhyUsComponent'
import SliderComponent from '@/components/SliderComponent'
// import TeamComponent from '@/components/TeamComponent'
import lax from 'lax.js'
import { mapGetters } from 'vuex'

export default {
  components: {
    Nav,
    HeaderComponentLanding,
    ServicesLinksComponent,
    SectionComponent,
    SectionContactComponent,
    SectionImageComponent,
    WhyUsComponent,
    SliderComponent
    // TeamComponent
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
          hid: 'og:title',
          name: 'og:title',
          content: this.client.title
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
        }
        // {
        //   hid: 'keywords',
        //   name: 'keywords',
        //   content: this.client.keywords.join()
        // }
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
        '@type': 'Organization',
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
    team () {
      if (!this.client.founders) {
        return null
      }
      return this.client.founders
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
    this.$ga.event('page', '/')
    // this.$gtm.pushEvent({ event: 'HomeLanding' })
    // this.rellax = new Rellax('.rellax', {
    //   speed: -2,
    //   center: false,
    //   wrapper: null,
    //   round: true,
    //   vertical: true,
    //   horizontal: false
    // })
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
    lax.setup({
      breakpoints: { small: 0, large: 768 }

    }) // init
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

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: transparent;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>
