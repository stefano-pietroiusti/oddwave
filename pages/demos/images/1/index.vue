<template>
  <div class="text-center mt-header w-100">
    <AnimeBannerComponent :pheader="panimheader" />
    <HeaderComponent :pheader="pheader" :psubheader="psubheader" :psubtitle="psubtitle" />
    <ImageOverlayComponent
      :pimage="require('~/static/workingtogether.jpg')"
      :pimagedesc="pbannerimagedesc"
      :pimagecontent="pbannercontent"
    />
    <TextComponent :pcontent="ptextcomponent1" />
    <!-- <ImageOverlayRightComponent
      :pimage="pimage2"
      :pimagedesc="pimagedesc2"
      :pimagecontent="pimagecontent2"
    /> -->
    <TextComponent :pcontent="ptextcomponent3" />
    <!-- <ServicesTags /> -->
  </div>
</template>
<script>
import AnimeBannerComponent from '@/components/AnimeBannerComponent'
import HeaderComponent from '@/components/HeaderComponent'
import TextComponent from '@/components/TextComponent'
import ImageOverlayComponent from '@/components/ImageOverlayComponent'
export default {
  components: {
    AnimeBannerComponent,
    HeaderComponent,
    TextComponent,
    ImageOverlayComponent
  },
  data (context) {
    return {
      pheader: 'Digital marketing and website development services',
      panimheader: 'be where the world is going',
      psubheader: 'to help your business grow',
      psubtitle:
        "Our goal is to assist start-ups grow their business with an impactful online presence using latest proven web technologies and digital marketing solutions that won't break the bank. We believe that every business should be a success.",
      btext: 'Get in touch',
      blink: '/contact',
      // pbannerimage: 'https://picsum.photos/1024/400/?image=41',
      // pbannerimage: 'marketing.jpg',
      pbannerimagedesc: 'The Odd Wave banner',
      pbannercontent: 'helping businesses of all sizes work smarter in the most efficient ways possible',
      pimage1: 'https://www.quackit.com/pix/samples/22l.jpg',
      pimagedesc1: 'Image description',
      pimagecontent1:
        'The first step to business success is to create an aesthetically pleasing website using the latest web design frameworks, which is fast and SEO friendly. Website design Impacts how an audience perceives your brand. A good website design keeps a new visitor reading about products and services you have to offer on your website. If you have a terrible website design, the customer will leave your page immediately and turn to a competitor. For existing websites, our team will do a full website audit and assist with on-page SEO required to keep new and existing customers returning to your site. <br/> Did you know 97% of consumers use the Internet to find local businesses? Does your business rank on search engines with essential keyword searches?',
      pimage2: 'https://www.quackit.com/pix/samples/22l.jpg',
      pimagedesc2: 'Image description',
      pimagecontent2:
        "We offer digital marketing services or cost per click services (Google Ads, Bing) as an added benefit to your business. Pay per click advertising gives you the ability to reach a global marketplace. The most popular platform is Google Ads, previously known as Adwords. We can save you money and reach a considerably more significant customer base than traditional marketing methods. We will help you get to know your audience, which creates brand loyalty. We will give you the ability to track your marketing efforts with regular reporting and assist ad's management on your behalf and to your specified budget.",
      pimage3: 'https://www.quackit.com/pix/samples/22l.jpg',
      pimagedesc3: 'Image description',
      pimagecontent3:
        "We offer digital marketing services or cost per click services (Google Ads, Bing) as an added benefit to your business. Pay per click advertising gives you the ability to reach a global marketplace. The most popular platform is Google Ads, previously known as Adwords. We can save you money and reach a considerably more significant customer base than traditional marketing methods. We will help you get to know your audience, which creates brand loyalty. We will give you the ability to track your marketing efforts with regular reporting and assist ad's management on your behalf and to your specified budget.",
      ptextcomponent1: 'We are a creative digital marketing and web design agency, passionate about modern technology that we use to propel small to medium size businesses to success. We offer a range of services to get your business off the ground. We provide services across and New Zealand. We are based on the North Shore, Auckland and can talk to you anywhere in New Zealand using various digital channels.',
      ptextcomponent2: 'We believe that every business should be successful. Our goal is to assist start-ups in digitizing their businesses by delivering an impactful online presence and custom digital marketing solutions that won\'t break the bank while being environmentally friendly.',
      ptextcomponent3: 'helping businesses of all sizes work smarter in the most efficient ways possible helping businesses of all sizes work smarter in the most efficient ways possible helping businesses of all sizes work smarter in the most efficient ways possible helping businesses of all sizes work smarter in the most efficient ways possible helping businesses of all sizes work smarter in the most efficient ways possible helping businesses of all sizes work smarter in the most efficient ways possible helping businesses of all sizes work smarter in the most efficient ways possible'
    }
  }
}
</script>
<style scoped>
.container {
   background-color: rgb(0, 0, 0);
  position: relative;
  overflow: hidden;
  width: 600px;
    height: 600px;
}

</style>
