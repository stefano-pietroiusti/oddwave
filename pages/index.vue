<template>
  <b-container fluid class="text-light text-left p-0">
    <AnimeBannerWordsComponent :pbgimage="headerImage" />

    <HeaderComponent :pheader="header" :psubheader="subheader" :psubtitle="subtitle" />

    <TextImageComponent
      :pcontent="{ text: content[0], inlineImage: 'creative.png', inlineImageText: 'Developing cost-effective and impactful websites and marketing strategies'}"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3', inlineImageStyle: 'inlineImage75'}"
    />

    <TextImageComponent
      :pcontent="{ text: content[1] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3'}"
    />

    <TextImageComponent
      :pcontent="{ text: content[2] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3'}"
    />

    <TextImageComponent
      :pcontent="{ text: content[3] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3'}"
    />

    <TextImageComponent
      :pcontent="{ text: content[4] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3'}"
    />
    <TextImageComponent
      :pcontent="{ text: content[5] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3'}"
    />

    <ButtonComponent btext="Get started" blink="/contact/" />

    <PartnersComponent />
  </b-container>
</template>

<script>
import AnimeBannerWordsComponent from '@/components/AnimeBannerWordsComponent'
import HeaderComponent from '@/components/HeaderComponent'
import ButtonComponent from '@/components/ButtonComponent'
import TextImageComponent from '@/components/TextImageComponent'
import PartnersComponent from '@/components/PartnersComponent'

export default {
  components: {
    AnimeBannerWordsComponent,
    HeaderComponent,
    ButtonComponent,
    TextImageComponent,
    PartnersComponent
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
        'PWA, mobile web design, web design, SEO, Auckland, New Zealand',
      description:
        'Custom web design, pwa web apps development, search engine optimization, google ads manager services by the Odd Wave team for New Zealand businesses',
      header: 'Web Design, PWA Web Apps Development, SEO, Google Ads Services, Auckland',
      subheader: 'Simple. Smart. Super-Fast. Responsive.',
      headerImage: {
        color1: 'rgba(255, 0, 255, 0) 0%',
        color2: 'rgba(0, 255, 255, 0) 0%',
        url: 'oddwave.jpg',
        height: '40vh'
      },
      subtitle:
        'We are a creative web design, PWA development and digital marketing company, passionate about using proven, modern technology to grow your business and make it a success.',
      linkText: 'Get started',
      link: '/contact/',
      content: [
        "The Odd Wave offers a range of services to help launch your business and get it off the ground. We are based on the North Shore, Auckland and service all of New Zealand, on-site and/or remotely. Our goal is to help you grow your business with an impactful online presence using latest proven web technologies and digital marketing solutions that will not break the bank <br/><br/> Did you know 97% of consumers use the Internet to find local businesses... is your online presence responsive and does your business rank on all search engines with trending keyword searches? If you own a business and you’re looking for someone to take your website and online marketing to the next level, you've come to the right place.",
        'Our approach is simple and flexible. We manage data and content so it can be distributed anywhere, we make content accessible for display on any device. We revise and optimize content in response to trending keyword searches to make it search engine friendly and increase your Google rankings. We design and develop awesome mobile-first websites to present your content - web apps that are fast, responsive and look great anywhere.',
        'Choose between static, periodic publishing and real-time, universal mobile web apps. A range of fit-for-purpose services and hosting packages are also available to keep carbon footprints and running costs low.',
        "We're here to help you save money while reaching a more significant customer base than traditional methods."
      ],
      keywords: 'Web Design, PWA, Web Apps Development, SEO, data engineering, SEO workshops'
    }
  }
}
</script>
<style scoped>
</style>
