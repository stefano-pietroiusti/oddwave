<template>
  <div id="contactMainContainer">
    <Nav id="navbar" class="container-fluid" :ptheme="theme" />
    <!-- <b-container
      fluid
      :style="gradient"
      class="contactBackground text-small align-items-center text-center"
    >
      <p class="watermark" />
    </b-container> -->

    <HeaderComponent
      pheader="Have a project or idea? Drop us a line. "
      psubheader="We're based in Torbay, North Shore, NZ, but work with companies across NZ and worldwide."
      pcontainerclass="borderLeft"
    />
    <ContactForm :pservices="servicesDropDown" :pbgimage="backgroundImage" :pstyle="style" />
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import HeaderComponent from '@/components/HeaderComponent'
import ContactForm from '@/components/ContactForm'
import { mapGetters } from 'vuex'
export default {
  components: {
    Nav,
    HeaderComponent,
    ContactForm
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
    servicesDropDown () {
      return this.summaries.map((item) => {
        return { value: item.id, text: item.title, selected: true }
      })
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
