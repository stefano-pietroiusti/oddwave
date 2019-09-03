<template>
  <div>
    <div>
      <HeaderComponent :pheader="pheader" :psubheader="psubheader" :psubtitle="psubtitle" />
    </div>
    <div>
      <ButtonComponent :btext="btext" :blink="blink" />
    </div>
    <div>
      <ImageBannerComponent
        pimage="https://picsum.photos/1024/400/?image=41"
        pimagedesc="The Odd Wave banner"
        :pimagecontent="pimagecontent"
      />
    </div>

    <div>
      <!-- https://stackoverflow.com/questions/27672989/dynamically-sized-word-cloud-using-d3-cloud -->
      <!-- <ServicesCloud /> -->
    </div>
    <!-- <div>
      <Intro />
    </div>-->
    <div>
      <ImageComponentBootstrap :pimage="pimage" :pimagedesc="pimagedesc" :pimagecontent="pimagecontent" />
    </div>
    <div>
      <ImageRightComponent :pimage="pimage" :pimagedesc="pimagedesc" :pimagecontent="pimagecontent" />
    </div>
    <div>
      <!-- <About /> -->
    </div>
    <div>
      <ServicesTags />
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import ButtonComponent from '@/components/ButtonComponent'
import ImageBannerComponent from '@/components/ImageBannerComponent'
import ImageComponentBootstrap from '@/components/ImageComponentBootstrap'
// import ImageComponent from '@/components/ImageComponent'
import ImageRightComponent from '@/components/ImageRightComponent'
// import Intro from '@/components/Intro'
// import About from '@/components/About'
// import Contact from '@/components/Contact'
import ServicesTags from '@/components/ServicesTags'
// import ServicesCloud from '@/components/ServicesCloud'

export default {
  components: {
    HeaderComponent,
    ButtonComponent,
    // Intro,
    ImageBannerComponent,
    ImageComponentBootstrap,
    ImageRightComponent,

    // ImageComponentRight,
    // About
    ServicesTags
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
      pimage: 'https://www.quackit.com/pix/samples/22l.jpg',
      pimagedesc: 'Image description',
      pimagecontent:
        '<p>this is text alongside imagesffdsfds<p><p>this is text alongside imagesffdsfds<p>'
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
