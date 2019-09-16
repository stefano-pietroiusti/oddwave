<template>
  <div class="text-center mt-header w-100">
    <AnimeBannerWordsComponent />

    <HeaderComponent :pheader="pheader" :psubheader="psubheader" :psubtitle="psubtitle" />

    <LinkComponent :btext="btext" :blink="blink" />

    <TextComponent :pcontent="content[0]" />

    <ImageOverlayComponent :pimage="pimageoverlay" :pcontent="content[1]" />
    <br>
    <ImageOverlayPlainComponent :pimage="pimageoverlay" :pcontent="content[1]" />

    <TextComponent :pcontent="content[2]" />

    <ImageBannerComponent
      :pimage="pimagebanner"
      :pcontent="content[3]"
    />

    <TextComponent :pcontent="content[4]" />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import LinkComponent from '@/components/LinkComponent'
import ImageBannerComponent from '@/components/ImageBannerComponent'
import TextComponent from '@/components/TextComponent'
import ImageOverlayComponent from '@/components/ImageOverlayComponent'
import ImageOverlayPlainComponent from '@/components/ImageOverlayPlainComponent'
import AnimeBannerWordsComponent from '@/components/AnimeBannerWordsComponent'
export default {
  components: {
    // AnimeBannerComponent,
    HeaderComponent,
    LinkComponent,
    ImageBannerComponent,
    TextComponent,
    ImageOverlayComponent,
    ImageOverlayPlainComponent,
    AnimeBannerWordsComponent
  },
  head () {
    return {
      title: 'The Odd Wave digital and web design services',
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
      pheader: 'Digital marketing and website development services',
      panimheader: 'be where the world is going',
      psubheader: 'to help your business grow',
      pimageoverlay: 'imgs/marketingstrategy.jpg',
      pimagebanner: 'imgs/colorspectrum.jpg',
      psubtitle:
        "Our goal is to assist start-ups grow their business with an impactful online presence using latest proven web technologies and digital marketing solutions that won't break the bank. We believe that every business should be a success.",
      btext: 'Get in touch',
      blink: '/contact',
      content: [
        'We are a creative digital marketing and web design agency, passionate about modern technology that we use to propel small to medium size businesses to success. We offer a range of services to get your business off the ground. We provide services across and New Zealand. We are based on the North Shore, Auckland and can talk to you anywhere in New Zealand using various digital channels.',
        "We believe that every business should be successful. Our goal is to assist start-ups in digitizing their businesses by delivering an impactful online presence and custom digital marketing solutions that won't break the bank while being environmentally friendly.",
        'The first step to business success is to create an aesthetically pleasing website using the latest web design frameworks, which is fast and SEO friendly. Website design Impacts how an audience perceives your brand. A good website design keeps a new visitor reading about products and services you have to offer on your website. If you have a terrible website design, the customer will leave your page immediately and turn to a competitor. For existing websites, our team will do a full website audit and assist with on-page SEO required to keep new and existing customers returning to your site. <br/> Did you know 97% of consumers use the Internet to find local businesses? Does your business rank on search engines with essential keyword searches?',
        "We will give you the ability to track your marketing efforts with regular reporting and assist ad's management on your behalf and to your specified budget. We will save you money and reach a considerably more significant customer base than traditional marketing methods. We will help you get to know your audience, which creates brand loyalty.",
        'We offer digital marketing services or cost per click services (Google Ads, Bing) as an added benefit to your business.Pay per click advertising gives you the ability to reach a global marketplace. The most popular platform is Google Ads, previously known as Adwords.'
      ]
    }
  }
}
</script>
<style scoped>
</style>
