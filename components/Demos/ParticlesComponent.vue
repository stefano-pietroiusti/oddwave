<template>
  <div class="row demoParticles">
    <div class="col demoParticles">
      <div class="demoParticles">
        <h4>Continuous animation - particles</h4>
        <vue-particles
          color="#0087ff"
          :particle-opacity="0.7"
          :particles-number="1000"
          shape-type="circle"
          :particle-size="4"
          lines-color="#dedede"
          :lines-width="1"
          :line-linked="true"
          :line-opacity="0.4"
          :lines-distance="150"
          :move-speed="3"
          :hover-effect="true"
          hover-mode="grab"
          :click-effect="true"
          click-mode="push"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
</style>
