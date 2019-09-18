<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container
    fluid
    :class="pstyle.bgStyle"
    :style="background"
  >
    <b-row>
      <b-col v-if="isInlineImage">
        <img :src="pcontent.inlineImage" :class="pstyle.inlineImageStyle">
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
    isInlineImage () {
      return !!this.pcontent.inlineImage
    },
    background () {
      const backgroundImageProp = this.pcontent.bgImage || undefined
      const backgroundImage = (backgroundImageProp) ? `url(${backgroundImageProp})` : undefined
      // console.log('============backgroundImage===============', JSON.stringify(backgroundImage))
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
