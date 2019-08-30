<template>
  <div>
    <div>
      <HeaderComponent :pheader="pheader" :psubheader="psubheader" />
    </div>
    <div>
      <!-- https://stackoverflow.com/questions/27672989/dynamically-sized-word-cloud-using-d3-cloud -->
      <!-- <ServicesCloud /> -->
    </div>
    <!-- <div>
      <Intro />
    </div> -->
    <div>
      <ServicesTags />
    </div>
    <div>
      <ImageComponent :pimage="pimage" :pimagedesc="pimagedesc" :pimagecontent="pimagecontent" />
    </div>
    <div>
      <ImageComponentRight :pimage="pimage" :pimagedesc="pimagedesc" :pimagecontent="pimagecontent" />
    </div>
    <div>
      <!-- <About /> -->
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import ImageComponent from '@/components/ImageComponent'
import ImageComponentRight from '@/components/ImageComponentRight'
// import Intro from '@/components/Intro'
// import About from '@/components/About'
// import Contact from '@/components/Contact'
import ServicesTags from '@/components/ServicesTags'
// import ServicesCloud from '@/components/ServicesCloud'

export default {
  components: {
    HeaderComponent,
    // Intro,
    ImageComponent,
    ImageComponentRight,
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
      pheader: 'Digital marketing and web design services',
      psubheader:
        'helping businesses of all sizes work smarter in the most efficient ways possible',
      pimage:
        'https://www.quackit.com/pix/samples/22l.jpg',
      pimagedesc:
        'https://www.quackit.com/pix/samples/22l.jpg',
      pimagecontent:
        '<p>this is text alongside imagesffdsfds<p><p>this is text alongside imagesffdsfds<p>'
    }
    //  return apicall.getData(id)
    //  .then((res) => {
    //      return { myres: res.data }
    //  })
  }
  // data () {
  //   return {
  //     form: {
  //       email: ''
  //     },
  //     titletext: 'testing'
  //   }
  // }
}
</script>
<style scoped>
</style>
