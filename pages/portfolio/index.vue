<template>
  <div id="samplesMainContainer">
    <Nav id="navbar" class="container-fluid" :ptheme="theme" />
    <b-container
      fluid
      :style="gradient"
      class="text-small align-items-center text-center"
    >
      <p class="watermark" />
    </b-container>
    <HeaderComponent
      pheader="Testimonials & sample custom design & development"
      pcontainerclass="mt-7 mb-5 borderLeft"
    />

    <div class="m-0 pb-5 bg-transparent">
      <p id="whyussection" class="p-3" />
      <WhyUsComponent pheader="Why Us?" class="align-self-center" :pfeatures="features" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Nav from '@/components/Nav'
// import AnimeBannerWordsHeaderComponent from '@/components/AnimeBannerWordsHeaderComponent'
import HeaderComponent from '@/components/HeaderComponent'
import WhyUsComponent from '@/components/WhyUsComponent'
export default {
  components: {
    Nav,
    HeaderComponent,
    WhyUsComponent
  },
  head () {
    let content = `${process.env.baseUrl}${this.$route.path}`
    content = content.slice(-1) !== '/' ? content + '/' : content
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
      // __dangerouslyDisableSanitizers: ['script'],
      // script: [{ innerHTML: JSON.stringify(this.jsonld), type: 'application/ld+json' }]
    }
  },
  data (context) {
    const commonKeywords = [
      'help with website design',
      'help with custom web design',
      'help with web application development',
      'help with online marketing',
      'help with SEO',
      'help with photography'
    ]
    return {
      title: 'Feedback and Samples of custom designs and developments by the Odd Wave Ltd Digital Solutions',
      description:
        'Testimonials and samples of custom design and development from the Odd Wave Ltd Digital',
      animeheader: "LET'S CREATE SOMETHING GREAT",
      backgroundurl: 'nz.svg',
      backgroundImage: {
        color1: 'rgba(102, 126, 234, 1)',
        color2: 'rgba(118, 75, 162, 1)',
        url: 'nz.svg',
        height: 100
      },
      style: { bgStyle: 'text-secondary text-center' },
      keywords: [...commonKeywords],
      theme: 'contact'
    }
  },
  computed: {
    ...mapGetters('services', ['summaries']),
    ...mapGetters('client', ['getClientFeatures']),
    features () {
      return this.getClientFeatures
    },
    bannerImagePath () {
      if (!this.backgroundurl) {
        return
      }
      const fileName = this.backgroundurl
      return require(`~/assets/imgs/banner/${fileName}?size=1080`)
    },
    gradient () {
      return {
        backgroundImage: `url(${this.bannerImagePath})`,
        height: '100%',
        width: '100%',
        bottom: 0,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        textTransform: 'uppercase',
        opacity: 0.05
      }
    }
  },
  mounted () {
    this.$ga.page(this.$route.path)
  }

}
</script>
<style scoped>
#contactMainContainer {
  background: transparent;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

p.watermark {
  width: 100%;
  height: 100%;
  position: fixed;
  margin-left: 20%;
  top: 35%;
  pointer-events: none;
  font-family: inherit;
  color: #000;
  font-size: 5vw;
  z-index: -1;
  opacity: 0.5;
}

.contactContainer {
  background: transparent;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.contactBackground {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.1;
}
</style>
