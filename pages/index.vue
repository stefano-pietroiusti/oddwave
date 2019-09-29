<template>
  <b-container fluid class="text-light text-left p-0">
    <AnimeBannerWordsComponent :pbgimage="pHeaderImage" />

    <HeaderComponent :pheader="pheader" :psubheader="psubheader" :psubtitle="psubtitle" />

    <LinkComponent :btext="btext" :blink="blink" />

    <TextImageComponent
      :pcontent="{ text: content[0] + '<br/><br/>' + content[1], inlineImage: 'creative.png'}"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3', inlineImageStyle: 'inlineImage30 inlineImageLeft'}"
    />

    <!-- <TextImageComponent
      :pcontent="{ bgImage: 'imgs/collaboration.jpg'}"
      :pstyle="{ bgStyle: 'parralaxNormal w-100 text-primary text-left p-10'}"
    />-->

    <TextImageComponent
      :pcontent="{ text: content[2] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3', inlineImageStyle: 'inlineImage30 inlineImageRight'}"
    />

    <TextImageComponent
      :pcontent="{ text: content[3] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3'}"
    />

    <TextImageComponent
      :pcontent="{ text: content[4] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3'}"
    />

    <!-- <TextImageComponent
      :pcontent="{ bgImage: 'imgs/collaboration.jpg'}"
      :pstyle="{ bgStyle: 'parralaxNormal w-100 text-primary text-left p-7'}"
    />-->

    <TextImageComponent
      :pcontent="{ text: content[5] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 p-5'}"
    />

    <!-- <TextImageComponent
      :pcontent="{ inlineImage: 'googleads.png'}"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3', inlineImageStyle: 'inlineImage30 inlineImageLeft'}"
    />

    <TextImageComponent
      :pcontent="{ inlineImage: 'bing.png'}"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-3', inlineImageStyle: 'inlineImage10 inlineImageLeft'}"
    />-->
    <b-container fluid class="text-center p-1 w-50">
      <b-row>
        <b-col>
          <img :src="require('~/assets/imgs/partner/googleads.png?size=300')" class="img-fluid">
        </b-col>
        <b-col>
          <img :src="require('~/assets/imgs/partner/bing.png?size=95')" class="img-fluid">
        </b-col>
        <b-col>
          <img :src="require('~/assets/imgs/partner/analytics.png?size=300')" class="img-fluid">
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import AnimeBannerWordsComponent from '@/components/AnimeBannerWordsComponent'
import HeaderComponent from '@/components/HeaderComponent'
import LinkComponent from '@/components/LinkComponent'
import TextImageComponent from '@/components/TextImageComponent'
// import ImageOverlayCloudsComponent from '@/components/ImageOverlayCloudsComponent'
// import ImageBannerComponent from '@/components/ImageBannerComponent'
// import TextComponent from '@/components/TextComponent'
// import ImageOverlayComponent from '@/components/ImageOverlayComponent'
// import ImageOverlayPlainComponent from '@/components/ImageOverlayPlainComponent'

export default {
  components: {
    AnimeBannerWordsComponent,
    HeaderComponent,
    LinkComponent,
    TextImageComponent
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'oddwave-home',
          name: this.title,
          content: this.pheader + ' and ' + this.psubheader
        },
        {
          hid: 'description',
          name: 'description',
          content: this.psubtitle
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
      title: 'The Odd Wave of website design and digital marketing services',
      pheader: 'Digital marketing and website services',
      panimheader: 'Be where the world is going',
      psubheader: 'to help your business grow',
      pimageoverlay: 'imgs/marketingstrategy.jpg',
      pimagebanner: 'imgs/analytics.jpg',
      pHeaderImage: {
        color1: 'rgba(255, 0, 255, 0) 0%',
        color2: 'rgba(0, 255, 255, 0) 0%',
        url: 'oddwave.jpg',
        height: 40
      },
      psubtitle:
        'The Odd Wave website design and digital marketing agency operating from the North Shore of Auckland for New Zealand business',
      btext: 'Get in touch',
      blink: '/contact',
      content: [
        'We are a creative digital marketing and web design agency, passionate about modern technology that we use to propel small to medium size businesses to success. We offer a range of services to get your business off the ground. We are based on the North Shore, Auckland servicing all of New Zealand.',
        "Our goal is to assist start-ups grow their business with an impactful online presence using latest proven web technologies and digital marketing solutions that won't break the bank. ",
        "We believe that every business should be successful. We help start-ups in digitizing their businesses by delivering an impactful online presence and custom digital marketing solutions that won't break the bank.",
        'Did you know 97% of consumers use the Internet to find local businesses, does your business rank on search engines with essential keyword searches?',
        'We offer Website Design , Search Engine Optimization , Digital marketing services or cost per click services (Google Ads, Bing). Pay per click advertising gives you the ability to reach a global marketplace. The most popular platform is Google Ads, previously known as Adwords.',
        "We will give you the ability to track your marketing efforts with regular reporting and assist with ad's management on your behalf and to your specified budget. We will save you money and reach a considerably more significant customer base than traditional marketing methods. We will help you get to know your audience, which creates brand loyalty.",
        "If you own a business and you’re looking for someone to take your website and online marketing to the next level, you've come to the right place."
      ],
      keywords: [
        'websites',
        'seo',
        'vanillajs',
        'data engineering',
        'workshops'
      ]
    }
  }
}
</script>
<style scoped>
</style>
