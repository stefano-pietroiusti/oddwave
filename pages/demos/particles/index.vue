<template>
  <div id="particles" class="container-fluid">
    <!-- <vue-particles
      color="#ff0000"
      :particle-opacity="0.7"
      :particles-number="500"
      shape-type="circle"
      :particle-size="4"
      lines-color="#000000"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
    /> -->
    <ParticlesComponent />
  </div>
</template>

<script>
import ParticlesComponent from '@/components/ParticlesComponent'

export default {
  components: {
    ParticlesComponent
  }

}
</script>
<style scoped>
</style>
