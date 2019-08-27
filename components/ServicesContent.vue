<template>
  <div class="container servicesContent">
    <p v-for="item in content" :key="item">
      {{ item }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'ServicesContent',
  props: {
    content: {
      type: Array,
      required: true,
      default () {
        return [
          'body1, commercial and landscape photography for branding',
          'body2, commercial and landscape photography for branding',
          'body3, commercial and landscape photography for branding',
          'body4, commercial and landscape photography for branding',
          'body5, commercial and landscape photography for branding',
          'body6, commercial and landscape photography for branding',
          'body7, commercial and landscape photography for branding',
          'body8, commercial and landscape photography for branding',
          'body9, commercial and landscape photography for branding'
        ]
      }
    }
  }
}
</script>
<script/>
<style scoped>
</style>
