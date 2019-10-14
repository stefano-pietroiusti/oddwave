<template>
  <b-container fluid class="text-light text-left p-0">
    <HeaderComponentLanding :pheader="subheader" />

    <WavesComponent :header="true" />
    <HeaderComponent :pheader="header" :psubheader="subheader" :psubtitle="subtitle" />
    <TextImageComponent
      v-for="(item,i) in content"
      :key="i"
      :pcontent="{header: item.header, text: item.text, list: item.list, bgImage: item.bgImage, inlineImage: item.inlineImage, inlineImageText: item.inlineImageText, inlineImageRight: item.inlineImageRight }"
      :pstyle="(item.dark) ? { bgStyle: 'parralaxNormal w-100 text-secondary text-left px-4 p-2', inlineImageStyle: item.inlineImageStyle} : { bgStyle: 'parralaxNormal w-100 text-primary text-left  px-4 p-2', inlineImageStyle: item.inlineImageStyle}"
    />
    <ButtonComponent btext="Get started" blink="/contact/" />
    <PromoComponent
      pheader="Get started"
      ptext="Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet
              tincidunt"
    />

    <ServicesComponent
      v-for="(item, index) in summaries"
      :key="item.id"
      :item="item"
      :index="index"
      :ptext="item.landing"
      :pimage="{color: item.backgroundImage.color1, url: item.backgroundImage.url}"
      :pid="item.id"
    />

    <ButtonComponent btext="Get started" blink="/contact/" />
    <!-- <PartnersComponent /> -->
    <WavesComponent :footer="true" />
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
// import AnimeBannerWordsComponent from '@/components/AnimeBannerWordsComponent'
import HeaderComponentLanding from '@/components/HeaderComponentLanding'
import HeaderComponent from '@/components/HeaderComponent'
import ButtonComponent from '@/components/ButtonComponent'
import PromoComponent from '@/components/PromoComponent'

import TextImageComponent from '@/components/TextImageComponent'
// import PartnersComponent from '@/components/PartnersComponent'
import ServicesComponent from '@/components/ServicesComponent'
import WavesComponent from '@/components/WavesComponent'

export default {
  components: {
    // AnimeBannerWordsComponent,
    HeaderComponentLanding,
    HeaderComponent,
    ButtonComponent,
    PromoComponent,
    TextImageComponent,
    // PartnersComponent,
    ServicesComponent,
    WavesComponent
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
      title:
        'Web Design & PWA web apps development & SEO services, Auckland, New Zealand',
      description:
        'Custom web design, pwa web apps development, search engine optimization, google ads manager services by the Odd Wave team for New Zealand businesses',
      header:
        'Website Design & PWA Progressive Web Application Development & SEO',
      subheader: 'Simple. Smart. Super-Fast. Responsive.',
      headerImage: {
        color1: 'rgba(255, 0, 255, 0) 0%',
        color2: 'rgba(0, 255, 255, 0) 0%',
        url: 'oddwave.jpg',
        height: '20vh'
      },
      subtitle:
        "If you own a business and you're looking for someone to take your website and online marketing to the next level, you've come to the right place.",
      linkText: 'Get started',
      link: '/contact/',
      content: [
        {
          // header: 'Our approach is simple and flexible',
          text:
            'We help small businesses grow by creating an impactful website using the latest proven web technologies and digital marketing solutions that will not break the bank.'
        },
        {
          text:
            "The Odd Wave offers a range of services to help launch your business and get it off the ground. We're here to help you save money while reaching a more significant customer base than traditional methods."
        },
        {
          text:
            'Our company is located on the North Shore, Auckland, and we service all of New Zealand, on-site and/or remotely.'
        },
        {
          text:
            'The Odd Wave team is a small, tightly-knit team that takes pride in what they do to help others succeed. We have 20 years of experience behind us in the world of Web and Data. Our expertise in building websites and promoting businesses with search engine optimization, Google AdWords, social media, and digital marketing.'
        },
        {
          text:
            'We believe we have what it takes to achieve your personal and business goals. We are based in Auckland but can serve traders, shops, small businesses, and medium enterprises across New Zealand.'
        },
        {
          text:
            'We will help you manage your online initiatives by covering everything it takes to do so:',
          list: [
            'Suitable domain name registration',
            'Choosing a reliable hosts in terms Speed, Security, Location and Affordability',
            'Structuring and optimizing your content for search and social media',
            'Managing your content in a way so that it can be used anywhere very easily',
            'Designing according to your brand, features, products and services',
            'Managing your online presence going forward so you can focus more on your business'
          ]
        },
        {
          text:
            "Do you have a responsive website, and does your business rank on all search engines with trending keyword searches?  It is estimated that 97% of consumers use the Internet to find local businesses, don't miss out on being found by customers."
        }
      ],
      footerContent: [
        {
          header: 'Our approach is simple and flexible',
          text:
            'We manage data and content so it can be distributed anywhere, we make content accessible for display on any device. We revise and optimize content in response to trending keyword searches to make it search engine friendly and increase your Google rankings'
        },
        {
          text:
            'We design and develop awesome mobile-first websites to present your content - web apps that are fast, responsive and look great anywhere.<br/>Choose between static, periodic publishing and real-time, universal mobile web apps. A range of fit-for-purpose services and hosting packages are also available to keep carbon footprints and running costs low.'
        },
        {
          text:
            "We're here to help you save money while reaching a more significant customer base than traditional methods."
        }
      ],
      keywords:
        'Web Design, PWA, Web Apps Development, SEO, data engineering, SEO workshops'
    }
  },
  computed: {
    ...mapGetters('services', ['summaries'])
  }
}
</script>
<style scoped>
</style>
