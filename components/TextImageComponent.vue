<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container
    fluid
    class="imageBannerComponent componenttext text-primary"
    :style="{ backgroundImage: `url(${pcontent.image})` }"
  >
    <b-row>
      <b-col v-if="isImage" class="text-secondary">
        {{ pcontent.text }} {{ isImage }}
      </b-col>
      <b-col v-else class="text-primary">
        {{ pcontent.text }}
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
        return { text: 'sample text', image: 'imgs/sample.jpg' }
      }
    }
  },
  computed: {
    isImage () {
      return !!this.pcontent.image
    }
  }
}
</script>
<style scoped>
</style>
