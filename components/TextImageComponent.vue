<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid :class="pstyle.bgStyle" :style="background">
    <b-row>
      <b-col v-if="pcontent.inlineImage">
        <img :src="`${inlineImage}?size=100`" :srcset="inlineImage.srcSet" :class="pstyle.inlineImageStyle">
        <!-- <img :src="require(`~/assets/imgs/inline/${pcontent.inlineImage}?size=100`)" :srcset="require(`~/assets/imgs/inline/${pcontent.inlineImage}`).srcSet" :class="pstyle.inlineImageStyle"> -->
        <p v-html="pcontent.text" />
      </b-col>
      <b-col v-else>
        <p v-html="pcontent.text" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    pcontent: {
      type: Object,
      default () {
        return {
          text: 'sample text',
          bgImage: '/imgs/Clouds1.webp',
          inlineImage: '/imgs/Clouds1.webp'
        }
      }
    },
    pstyle: {
      type: Object,
      default () {
        return {
          bgStyle: 'parralaxNormal text-primary  text-left p-5',
          inlineImageStyle: 'inlineImage20 inlineImageLeft'
        }
      }
    }
  },
  computed: {
    inlineImage () {
      if (!this.pcontent.inlineImage) {
        return
      }
      const fileName = this.pcontent.inlineImage
      return require(`~/assets/imgs/inline/${fileName}`)
    },
    background () {
      if (!this.pcontent.bgImage) {
        return
      }
      const fileName = require(`~/assets/imgs/banner/${this.pcontent.bgImage}`)
      const backgroundImage = fileName ? `url(${fileName})` : undefined
      return {
        backgroundImage,
        // width: '100%',
        // height: `${this.pbgimage.height}vh`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  }
}
</script>
<style scoped>
</style>
