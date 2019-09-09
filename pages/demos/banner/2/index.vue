<template>
  <div class="text-center mt-header w-100">
    <AnimeBannerParticleComponent :pheader="panimheader" />
  </div>
</template>
<script>
import AnimeBannerParticleComponent from '@/components/AnimeBannerParticleComponent'
export default {
  components: {
    AnimeBannerParticleComponent
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
