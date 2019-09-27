<template>
  <div id="contactContainer" class="text-left mt-header w-100 h-100 bg-light">
    <AnimeBannerWordsHeaderComponent :pheader="pheader" :pbgimage="pheaderImage" :pstyle="pstyle" />
    <ContactForm :pservices="services" :pbgimage="pheaderImage" :pstyle="pstyle" />
  </div>
</template>
<script>
import AnimeBannerWordsHeaderComponent from '@/components/AnimeBannerWordsHeaderComponent'
import ContactForm from '@/components/ContactForm'
export default {
  components: {
    AnimeBannerWordsHeaderComponent,
    ContactForm
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'oddwave-contact',
          name: this.title,
          content: this.title + ' and ' + this.pheader
        },
        {
          hid: 'description',
          name: 'description',
          content: this.title + ' and ' + this.pheader
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords
        }
      ]
    }
  },
  data (context) {
    return {
      title: 'Contact the Odd Wave of website, search and data services',
      pimage: 'none',
      pheader: "LET'S CREATE SOME AWESOMENESS",
      pheaderImage: {
        color1: 'rgba(255, 255, 255, 0)',
        color2: 'rgba(255, 255, 255, 0.5)',
        url: 'contact.jpg',
        height: 40
      },
      pstyle: { bgStyle: 'text-primary text-left' },
      keywords: ['contact', 'websites', 'seo', 'vanillajs', 'data engineering', 'workshops']
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
