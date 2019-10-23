<template>
  <b-container fluid class="contactContainer p-0 m-0 text-primary text-medium w-100 text-left">
    <b-container fluid :style="gradient" class="contactBackground align-items-center text-center">
      <p class="watermark">
        The Odd Wave Ltd
        <br>Websites & SEO & Photos
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
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords.join()
        }
      ]
    }
  },
  data (context) {
    const commonKeywords = [
      'fun workshops auckland',
      'workshops auckland',
      'workshops rotorua',
      'workshops new zealand',
      'workshops NZ'
    ]
    return {
      title: 'Websites, SEO & Photography Auckland, NZ',
      description:
        'Great Website Design Auckland, SEO Auckland & Photography Auckland, New Zealand',
      animeheader: "LET'S CREATE SOMETHING GREAT",
      header: 'Connect for a great website',
      subheader: 'Helping all New Zealand from Auckland, North Shore',
      backgroundurl: 'nz.svg',
      backgroundImage: {
        color1: 'rgba(102, 126, 234, 1)',
        color2: 'rgba(118, 75, 162, 1)',
        url: 'nz.svg',
        height: 100
      },
      style: { bgStyle: 'text-secondary text-center' },
      keywords: [
        ...commonKeywords,
        'websites north shore', 'websites browns bay', 'websites albany', 'websites NZ', 'websites new zealand',
        'seo auckland', 'seo albany', 'seo browns bay', 'seo north shore', 'seo NZ', 'web app development albany', 'web app development browns bay', 'web app development north shore', 'web app development auckland', 'web app development NZ', 'web app development new zealand',
        'cloud data engineer auckland', 'cloud data engineer new zealand', 'photography browns bay', 'photography north shore', 'photography NZ', 'photography auckland', 'photography new zealand'
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
