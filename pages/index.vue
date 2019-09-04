<template>
  <b-container fluid>
    <HeaderComponent :pheader="pheader" :psubheader="psubheader" :psubtitle="psubtitle" />
    <ButtonComponent :btext="btext" :blink="blink" />
    <ImageBannerComponent
      pimage="https://picsum.photos/1024/400/?image=41"
      pimagedesc="The Odd Wave banner"
      :pimagecontent="pimagecontent"
    />
    <ImageComponent :pimage="pimage1" :pimagedesc="pimagedesc1" :pimagecontent="pimagecontent1" />
    <ImageRightComponent :pimage="pimage2" :pimagedesc="pimagedesc2" :pimagecontent="pimagecontent2" />
    <!-- <ServicesTags /> -->
  </b-container>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import ButtonComponent from '@/components/ButtonComponent'
import ImageBannerComponent from '@/components/ImageBannerComponent'
import ImageComponent from '@/components/ImageComponent'
import ImageRightComponent from '@/components/ImageRightComponent'

// import ServicesTags from '@/components/ServicesTags'
// import Intro from '@/components/Intro'
// import About from '@/components/About'
// import Contact from '@/components/Contact'
// import ServicesCloud from '@/components/ServicesCloud'

export default {
  components: {
    HeaderComponent,
    ButtonComponent,
    ImageBannerComponent,
    ImageComponent,
    ImageRightComponent
    // ImageComponentRight,
    // About
    // ServicesTags
    // ServicesCloud
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
      psubheader: 'be where the world is going',
      psubtitle:
        "Our goal is to assist start-ups grow their business with an impactful online presence using latest proven web technologies and digital marketing solutions that won't break the bank. We believe that every business should be a success.",
      btext: 'Get in touch',
      blink: '/contact',
      pimage1: 'https://www.quackit.com/pix/samples/22l.jpg',
      pimagedesc1: 'Image description',
      pimagecontent1:
        'The first step to business success is to create an aesthetically pleasing website using the latest web design frameworks, which is fast and SEO friendly. Website design Impacts how an audience perceives your brand. A good website design keeps a new visitor reading about products and services you have to offer on your website. If you have a terrible website design, the customer will leave your page immediately and turn to a competitor. For existing websites, our team will do a full website audit and assist with on-page SEO required to keep new and existing customers returning to your site. <br/> Did you know 97% of consumers use the Internet to find local businesses? Does your business rank on search engines with essential keyword searches?',
      pimage2: 'https://www.quackit.com/pix/samples/22l.jpg',
      pimagedesc2: 'Image description',
      pimagecontent2:
        'We offer digital marketing services or cost per click services (Google Ads, Bing) as an added benefit to your business. Pay per click advertising gives you the ability to reach a global marketplace. The most popular platform is Google Ads, previously known as Adwords. We can save you money and reach a considerably more significant customer base than traditional marketing methods. We will help you get to know your audience, which creates brand loyalty. We will give you the ability to track your marketing efforts with regular reporting and assist ad\'s management on your behalf and to your specified budget.'
    }
    //  return apicall.getData(id)
    //  .then((res) => {
    //      return { myres: res.data }
    //  })
  }
}
</script>
<style scoped>
</style>
