<template>
  <b-container fluid class="text-light text-left p-0">
    <HeaderComponentLanding :pheader="subheader" :psubtitle="subtitle" />

    <WavesComponent :header="true" />

    <HeaderComponent :psubheader="headerLanding" :psubtitle="subheaderLanding" />

    <PromoComponent :features="features" />

    <HeaderComponent :pheader="header" />

    <TextImageComponent
      v-for="(item,i) in content"
      :key="i"
      :pcontent="{header: item.header, text: item.text, list: item.list, bgImage: item.bgImage, inlineImage: item.inlineImage, inlineImageText: item.inlineImageText, inlineImageRight: item.inlineImageRight }"
      :pstyle="(item.dark) ? { bgStyle: 'parralaxNormal w-100 text-secondary text-left px-4 p-2', inlineImageStyle: item.inlineImageStyle} : { bgStyle: 'parralaxNormal w-100 text-primary text-left  px-4 p-2', inlineImageStyle: item.inlineImageStyle}"
    />
    <ButtonComponent btext="Get started" blink="/contact/" />

    <ServicesComponent :services="summaries" />
    <!-- <ServicesComponent services=""
      v-for="(item, index) in summaries"
      :key="item.id"
      :item="item"
      :index="index"
      :ptext="item.landing"
      :pimage="{color: item.backgroundImage.color1, url: item.backgroundImage.url}"
      :pid="item.id"
    />-->

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
        'Mobile first web design, SEO and online marketing services - Auckland, New Zealand',
      description:
        'Custom mobile first web design and web apps development, search engine optimization, google ads management services for New Zealand',
      header: 'Custom Website Design & SEO services',
      subheader: 'Grow your business online',
      headerLanding: 'MOBILE-FIRST. SIMPLE. SMART. FAST. FUTURE-PROOF.',
      subheaderLanding:
        'We change the business life of our clients for good. The Odd Wave provides mobile-first web solutions , optimised content and online marketing solutions to take your business to the next level.',
      headerImage: {
        color1: 'rgba(255, 0, 255, 0) 0%',
        color2: 'rgba(0, 255, 255, 0) 0%',
        url: 'oddwave.jpg',
        height: '20vh'
      },
      subtitle:
        'Create a custom mobile first website <br/> using lightweight web technologies & digital marketing solutions.',
      // subtitle:
      //   'Create a mobile first website with us <br/> using web technologies that are lightweight, fast and trustworthy. Design and optimise your content with us to make it useful   this with content & digital marketing solutions.',

      linkText: 'GET STARTED',
      link: '/contact/',
      features: [

        {
          header: 'Content-First Mobile-First',
          text:
            'Content-First Mobile-First web design, development and testing for websites and web applications that help everyone.',
          icon: ['fas', 'mobile-alt']
        },
        {
          header: 'Vanilla',
          text:
            'Take advantage of thoroughly tested, vanilla technologies for a quick, lightweight and flexible website that will help you grow your brand image, loyalty and sales.',
          icon: ['fab', 'servicestack']
        },
        {
          header: 'Continuous',
          text:
            'Websites from continuous testing and auditing for an A+ grade in performance, accessibility, best practices and SEO.',
          icon: ['fas', 'users']
        },
        {
          header: 'Optimised',
          text:
            'We write content that ranks and remains searchable using SEO. Optimise your ROI from SEO with our conversion tracking and reporting.',
          icon: ['fas', 'chart-line']
        }
        // {
        //   header: 'Distributable',
        //   text: 'Manage your content with us to keep it optimised, accessible, searchable and distributable',
        //   icon: ['fas', 'tv']
        // },
      ],
      content: [
        {
          text:
            'The Odd Wave Limited offers a range of digital services to benefit your business and increase sales:',
          list: [
            'Designing according to your brand, features, products and services',
            'Managing, structuring and optimising content for search and social media',
            'Managing your online presence going forward so you can focus more on your business',
            'Suitable domain name registration',
            'Choosing reliable hosts in terms of Speed, Security, Location and Affordability'
            // 'Managing content in a way so that it can be used anywhere very easily',
          ]
        },
        {
          text:
            'We have 20 years of experience in the world of Web, Data and Search. Everything we do is aimed at producing the result our clients want for their businesses. Our company is located on the North Shore, Auckland, and we service all of New Zealand.'
        }
        // {
        //   text:
        //     "Do you have a responsive website, and does your business rank on all search engines with trending keyword searches?  It is estimated that 97% of consumers use the Internet to find local businesses, don't miss out on being found by customers."
        // }
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
