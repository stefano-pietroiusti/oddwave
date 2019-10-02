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

    <LinkComponent :btext="linkText" :blink="link" />

    <PartnersComponent />
  </b-container>
</template>

<script>
import AnimeBannerWordsComponent from '@/components/AnimeBannerWordsComponent'
import HeaderComponent from '@/components/HeaderComponent'
import LinkComponent from '@/components/LinkComponent'
import TextImageComponent from '@/components/TextImageComponent'
import PartnersComponent from '@/components/PartnersComponent'

export default {
  components: {
    AnimeBannerWordsComponent,
    HeaderComponent,
    LinkComponent,
    TextImageComponent,
    PartnersComponent
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
      title: 'Web development, data engineering and search optimization services New Zealand',
      description: 'Work with the Odd Wave of online services and web technologies to manage your digital marketing, grow your kiwi business and achieve your marketing goals.',
      header: 'Website Design & Online Marketing Services Auckland, NZ',
      subheader: 'Be where the world is going',
      headerImage: {
        color1: 'rgba(255, 0, 255, 0) 0%',
        color2: 'rgba(0, 255, 255, 0) 0%',
        url: 'oddwave.jpg',
        height: '40vh'
      },
      subtitle:
        'The Odd Wave website development and digital marketing agency operating from the North Shore, Auckland for New Zealand start-ups and established businesses',
      linkText: 'Get in touch',
      link: '/contact',
      content: [
        "We are a creative digital marketing and web design agency, passionate about modern technology that we use to propel small to medium size businesses to success. We offer a range of services to get your business off the ground. We are based on the North Shore, Auckland servicing all of New Zealand. Our goal is to assist start-ups grow their business with an impactful online presence using latest proven web technologies and digital marketing solutions that won't break the bank <br/><br/> Did you know 97% of consumers use the Internet to find local businesses, does your business rank on search engines with essential keyword searches? If you own a business and you’re looking for someone to take your website and online marketing to the next level, you've come to the right place.",
        'We offer Website Design and Management, Progressive Web Applications, Animations, Content Writing and Revising, Search Engine Optimization, Digital Marketing and Pay per Click (Google Ads, Bing) as our primary services.',
        'We also engineer and integrate data with our proven headless content management systems and cloud services. All our development is based on Vanilla JS with minimal complexity and streamlined branching, continuous integration, and continuous deployment.',
        'We use proven and fast technologies and processes on the most affordable hosting packages to keep ongoing running costs to a bare minimum.',
        "We will also give you the ability to track your marketing efforts with regular reporting and assist with ad's management on your behalf and to your specified budget. We will save you money and reach a considerably more significant customer base than traditional marketing methods. We will help you get to know your audience, which creates brand loyalty, likeness and trust."
      ],
      keywords: 'websites, seo, vanillajs, data engineering, workshops'
    }
  }
}
</script>
<style scoped>
</style>
