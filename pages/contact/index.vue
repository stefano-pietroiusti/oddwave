<template>
  <div id="contactContainer" class="w-100 h-100 bg-light">
    <AnimeBannerWordsHeaderComponent :pheader="pheader" :pbgimage="pheaderImage" :pstyle="pstyle" />
    <HeaderComponent :pheader="psubheader" />
    <ContactForm :pservices="services" :pbgimage="pheaderImage" :pstyle="pstyle" />
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
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.baseUrl}${this.$route.path}`
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
      title: 'Contact the team at the Odd Wave',
      description:
        'Contact the Odd Wave team in the north shore, Auckland, New Zealand',
      pimage: 'none',
      pheader: "LET'S CREATE SOME AWESOMENESS",
      psubheader: 'Get in touch to start a new project together',
      pheaderImage: {
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
      pstyle: { bgStyle: 'text-secondary text-left' },
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
    subheader () {
      return ' ' + this.email + ' ' + this.phone
    },
    services () {
      return this.$store.state.services.all.map((item) => {
        return { value: item.id, text: item.title, selected: true }
      })
    },
    computedStyle () {
      return {
        // backgroundImage: `linear-gradient(45deg, ${this.pheaderImage.color1} 80%, ${this.pheaderImage.color2} 2%), url(${this.pheaderImage.url})`,
        height: '100%',
        width: '100%',
        bottom: 0,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textTransform: 'uppercase'
      }
    }
  }
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
