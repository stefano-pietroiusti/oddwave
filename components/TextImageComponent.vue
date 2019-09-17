<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container
    fluid
    :class="pstyle.bgStyle"
    :style="{ backgroundImage: `url(${pcontent.bgImage})` }"
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
        return { text: 'sample text', bgImage: '/test/Clouds1.webp', inlineImage: '/test/Clouds1.webp' }
      }
    },
    pstyle: {
      type: Object,
      default () {
        return { bgStyle: 'parralaxNormal text-primary  text-left p-5', inlineImageStyle: 'inlineImage20 inlineImageLeft' }
      }
    }
  },
  computed: {
    isInlineImage () {
      return !!this.pcontent.inlineImage
    }
  }
}
</script>
<style scoped>
</style>
