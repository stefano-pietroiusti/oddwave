<template>
  <div class="text-center mt-header w-100">
    <AnimeBannerWordComponent :pheader="panimheader" />
  </div>
</template>
<script>
import AnimeBannerWordComponent from '@/components/AnimeBannerWordComponent'
export default {
  components: {
    AnimeBannerWordComponent
  },
  data (context) {
    return {
      panimheader: 'be where the world is going'
    }
  }
}
</script>
<style scoped>
</style>
