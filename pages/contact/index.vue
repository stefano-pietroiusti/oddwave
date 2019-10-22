<template>
  <b-container fluid class="contactContainer p-0 m-0 text-primary text-medium w-100 text-left">
    <b-container
      fluid
      :style="gradient"
      class="contactBackground align-items-center text-center"
    >
      <!-- <h2>
        The Odd Wave Ltd Website Design & SEO
        <br>Auckland, New Zealand
      </h2> -->
      <p class="watermark">
        The Odd Wave Ltd<br>Websites & SEO
        <br>Auckland, New Zealand
      </p>
    </b-container>
    <b-container fluid class="contactContainer text-primary text-medium w-100 text-left m-0 p-0">
      <AnimeBannerWordsHeaderComponent
        pid="contact"
        :pheader="animeheader"
        :pbgimage="backgroundImage"
        :pstyle="style"
      />
      <HeaderComponent :pheader="header" />
      <ContactForm :pservices="services" :pbgimage="backgroundImage" :pstyle="style" />
    </b-container>
  </b-container>
</template>
<script>
import AnimeBannerWordsHeaderComponent from '@/components/AnimeBannerWordsHeaderComponent'
import HeaderComponent from '@/components/HeaderComponent'
import ContactForm from '@/components/ContactForm'

export default {
  components: {
    AnimeBannerWordsHeaderComponent,
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
    }
  },
  data (context) {
    return {
      title: 'Start or upgrade to a new website with the Odd Wave team',
      description:
        'Connect with the Odd Wave Ltd for great website designs, applications, SEO, Auckland, New Zealand',
      animeheader: "LET'S CREATE SOME AWESOMENESS",
      header: 'Connect for a great website',
      subheader: 'Helping all New Zealand from Auckland, North Shore',
      backgroundurl: 'nz.svg',
      backgroundImage: {
        color1: 'rgba(102, 126, 234, 1)',
        color2: 'rgba(118, 75, 162, 1)',
        // rgba(147, 165, 207, 1)
        // rgba(228, 239, 233, 1)
        // rgba(255, 126, 179, 1)
        // rgba(102, 126, 234, 1)
        // rgba(118, 75, 162, 1)
        url: 'nz.svg',
        height: 100
      },
      style: { bgStyle: 'text-secondary text-center' },
      keywords: [
        'contact',
        'websites',
        'seo',
        'vanillajs',
        'data engineering',
        'workshops'
      ]
    }
  },
  computed: {
    services () {
      return this.$store.state.services.all.map((item) => {
        return { value: item.id, text: item.linkTitle, selected: true }
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
        textTransform: 'uppercase'
      }
    }
  }
  // mounted () {
  //   if (process.env.NODE_ENV !== 'production') {}
  //   // this.$ga.event({
  //   //   eventCategory: 'nav',
  //   //   eventAction: 'init',
  //   //   eventLabel: 'home',
  //   //   eventValue: 1
  //   // })
  // }
}
</script>
<style scoped>

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
