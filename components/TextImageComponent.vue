<!-- eslint-disable vue/no-v-html vue/require-v-for-key -->
<template>
  <b-container fluid :class="pstyle.bgStyle" :style="background">
    <b-row v-if="pcontent.inlineImage && pcontent.inlineImageCenterFull && !pcontent.inlineImageRight">
      <b-col md="12" lg="12" class="text-center">
        <img
          :src="`${inlineImage}`"
          :srcset="inlineImage.srcSet"
          :alt="inlineImageText"
          :class="pstyle.inlineImageStyle"
        >
      </b-col>
    </b-row>
    <b-row v-else-if="pcontent.inlineImage && !pcontent.inlineImageCenterFull && !pcontent.inlineImageRight">
      <b-col md="12" lg="4" class="text-center">
        <img
          :src="`${inlineImage}?size=717`"
          :srcset="inlineImage.srcSet"
          :class="pstyle.inlineImageStyle"
          :alt="inlineImageText"
        >
      </b-col>
      <b-col md="12" lg="8">
        <h3 v-if="pcontent.header" class="contentHeader" v-html="pcontent.header" />
        <p v-html="pcontent.text" />
        <ul v-if="pcontent.list">
          <li v-for="item in pcontent.list">
            {{ item }}
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row v-else-if="pcontent.inlineImage && pcontent.inlineImageRight && !pcontent.inlineImageCenterFull">
      <b-col md="12" lg="8">
        <h3 v-if="pcontent.header" class="contentHeader" v-html="pcontent.header" />
        <p v-html="pcontent.text" />
        <ul v-if="pcontent.list">
          <li v-for="item in pcontent.list">
            {{ item }}
          </li>
        </ul>
      </b-col>
      <b-col md="12" lg="4" class="text-center">
        <img
          :src="`${inlineImage}?size=100`"
          :srcset="inlineImage.srcSet"
          :class="pstyle.inlineImageStyle"
          :alt="inlineImageText"
        >
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col sm="12">
        <h3 v-if="pcontent.header" class="contentHeader" v-html="pcontent.header" />
        <p v-html="pcontent.text" />
        <ul v-if="pcontent.list">
          <li v-for="item in pcontent.list">
            {{ item }}
          </li>
        </ul>
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
          header: 'header',
          text: 'sample text',
          bgImage: '/imgs/Clouds1.webp',
          inlineImage: '/imgs/Clouds1.webp',
          inlineImageText: 'Developing a quick and impactful online presence',
          inlineImagePosition: 'right'
        }
      }
    },
    pstyle: {
      type: Object,
      default () {
        return {
          bgStyle: 'parralaxNormal text-primary  text-left p-5',
          inlineImageStyle: 'inlineImage30 inlineImageLeft'
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
    inlineImageText () {
      if (!this.pcontent.inlineImageText) {
        return
      }
      return this.pcontent.inlineImageText
    },
    inlineImageRight () {
      if (!this.pcontent.inlineImagePosition) {
        return
      }
      return this.pcontent.inlineImagePosition === 'right'
    },
    background () {
      if (!this.pcontent.bgImage) {
        return
      }
      const fileName = require(`~/assets/imgs/banner/${this.pcontent.bgImage}`)
      const backgroundImage = fileName ? `url(${fileName})` : undefined
      return {
        backgroundImage,
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
