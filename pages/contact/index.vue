<template>
  <div id="contactMainContainer">
    <Nav id="navbar" class="container-fluid" :ptheme="theme" />
    <b-container
      fluid
      :style="gradient"
      class="contactBackground text-medium align-items-center text-center"
    >
      <p class="watermark" />
    </b-container>

    <HeaderComponent
      pheader="Have a project or idea? Drop us a line. "
      psubheader="We're based in Torbay, North Shore, NZ, but work with companies across NZ and worldwide."
      pcontainerclass="mt-7 mb-5 borderLeft"
    />
    <ContactForm :pservices="servicesDropDown" :pbgimage="backgroundImage" :pstyle="style" />
    <div class="m-0 pb-5 bg-transparent">
      <p id="whyussection" class="p-3" />
      <WhyUsComponent pheader="Why Us?" class="align-self-center" :pfeatures="features" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Nav from '@/components/Nav'
import HeaderComponent from '@/components/HeaderComponent'
import ContactForm from '@/components/ContactForm'
import WhyUsComponent from '@/components/WhyUsComponent'
export default {
  components: {
    Nav,
    HeaderComponent,
    ContactForm,
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
      'help with custom Website Design',
      'help with web application development',
      'help with Digital Marketing',
      'help with SEO',
      'help with photography'
    ]
    return {
      title: 'Contact the Odd Wave Ltd Digital Solutions, North Shore, Torbay, Auckland, NZ',
      description:
        'Contact the Odd Wave Ltd Digital Solutions - connect with us for your next website, SEO, Digital Marketing and consulting needs',
      animeheader: "LET'S CREATE SOMETHING GREAT",
      header: 'Contact the Odd Wave Ltd for your vNext',
      subheader: 'by the Odd Wave of people, technologies and services',
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
    servicesDropDown () {
      return this.summaries.map((item) => {
        return { value: item.id, text: item.title, selected: true }
      })
    },
    features () {
      // return this.getServiceFeatures(this.id) || this.getClientFeatures
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
    // console.log('route: ', this.$route.name)
    // console.log('theme: ', this.theme)
    this.$ga.page(this.$route.path)
    // window.addEventListener('scroll', function () {
    //   const navbar = document.getElementById('navbar')
    //   const navClasses = navbar.classList
    //   console.log('navClasses: ', navClasses)
    //   if (window.documentElement.scrollTop >= 150) {
    //     if (navClasses.contains(this.theme) === false) {
    //       navClasses.toggle(this.theme)
    //     }
    //   } else if (navClasses.contains(this.theme) === true) {
    //     navClasses.toggle(this.theme)
    //   }
    // })
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
