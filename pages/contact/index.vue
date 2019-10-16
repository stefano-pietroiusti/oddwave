<template>
  <div id="contactContainer" class="w-100 h-100 bg-light">
    <AnimeBannerWordsHeaderComponent :pheader="animeheader" :pbgimage="backgroundImage" :pstyle="style" />
    <HeaderComponent :pheader="header" :psubheader="subheader" />
    <ContactForm :pservices="services" :pbgimage="backgroundImage" :pstyle="style" />
  </div>
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
      title: 'Start a new website, pwa or seo project with the Odd Wave team',
      description:
        'Start an agile website design, seo or mobile-first PWA progressive web apps project with the Odd Wave team. Serving all businesses across New Zealand',
      animeheader: "LET'S CREATE SOME AWESOMENESS",
      header: 'Get in touch to start your next website design, web app & SEO project',
      subheader: 'Serving all New Zealand from Auckland, North Shore',
      backgroundImage: {
        color1: 'rgba(102, 126, 234, 1)',
        color2: 'rgba(118, 75, 162, 1)',
        // rgba(147, 165, 207, 1)
        // rgba(228, 239, 233, 1)
        // rgba(255, 126, 179, 1)
        // rgba(102, 126, 234, 1)
        // rgba(118, 75, 162, 1)
        url: 'contact.jpg',
        height: 40
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
    }
    // nodeEnv () {
    //   return process.env.nodeEnv
    // }
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
#contactContainer {
  display: inline-block;
  position: relative;
  width: 50%;
  bottom: 0;
  margin: auto;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 2%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
