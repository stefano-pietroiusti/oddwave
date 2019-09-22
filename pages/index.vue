<template>
  <b-container fluid class="text-light text-left mt-header p-0">
    <AnimeBannerWordsComponent />

    <HeaderComponent :pheader="pheader" :psubheader="psubheader" :psubtitle="psubtitle" />

    <LinkComponent :btext="btext" :blink="blink" />
    <TextImageComponent
      :pcontent="{ text: content[0] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left p-5'}"
    />
    <TextImageComponent
      :pcontent="{ bgImage: '/imgs/collaboration.jpg'}"
      :pstyle="{ bgStyle: 'parralaxNormal w-100 text-primary text-left p-10'}"
    />

    <TextImageComponent
      :pcontent="{ text: content[1] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-5'}"
    />
    <TextImageComponent
      :pcontent="{ text: content[2] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-5'}"
    />
    <TextImageComponent
      :pcontent="{ bgImage: '/imgs/collaboration.jpg'}"
      :pstyle="{ bgStyle: 'parralaxNormal w-100 text-primary text-left p-10'}"
    />
    <TextImageComponent
      :pcontent="{ text: content[3] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left px-5 pt-5'}"
    />
    <TextImageComponent
      :pcontent="{ text: content[4] }"
      :pstyle="{ bgStyle: 'w-100 text-primary text-left p-5'}"
    />
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
      title: 'The Odd Wave Digital and Web Design services',
      meta: [
        { name: 'twitter:title', content: 'The Odd Wave' },
        { name: 'twitter:description', content: 'Nuxt + Vue School = 🍕' },
        { name: 'twitter:image', content: 'https://i.imgur.com/UYP2umJ.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },
  data (context) {
    return {
      pheader: 'Digital Marketing and Web Design Services',
      panimheader: 'Be where the world is going',
      psubheader: 'Helping your business grow',
      pimageoverlay: 'imgs/marketingstrategy.jpg',
      pimagebanner: 'imgs/analytics.jpg',
      psubtitle:
        "Our goal is to assist start-ups grow their business with an impactful online presence using latest proven web technologies and digital marketing solutions that won't break the bank. We believe that every business should be a success.",
      btext: 'Get in touch',
      blink: '/contact',
      content: [
        'We are a creative digital marketing and web design agency, passionate about modern technology that we use to propel small to medium size businesses to success. We offer a range of services to get your business off the ground. We provide services across and New Zealand. We are based on the North Shore, Auckland and can talk to you anywhere in New Zealand using various digital channels.',
        "We believe that every business should be successful. Our goal is to assist start-ups in digitizing their businesses by delivering an impactful online presence and custom digital marketing solutions that won't break the bank while being environmentally friendly.",
        'Did you know 97% of consumers use the Internet to find local businesses? Does your business rank on search engines with essential keyword searches?',
        "We will give you the ability to track your marketing efforts with regular reporting and assist ad's management on your behalf and to your specified budget. We will save you money and reach a considerably more significant customer base than traditional marketing methods. We will help you get to know your audience, which creates brand loyalty.",
        'We offer digital marketing services or cost per click services (Google Ads, Bing) as an added benefit to your business. Pay per click advertising gives you the ability to reach a global marketplace. The most popular platform is Google Ads, previously known as Adwords.'
      ]
    }
  }
}
</script>
<style scoped>
</style>
