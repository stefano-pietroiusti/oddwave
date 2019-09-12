<template>
  <b-container id="componentcontainer" fluid>
    <div id="componentheader">
      {{ pheader }}
    </div>
    <div id="particles">
      <vue-particles
        color="#0000ff"
        :particle-opacity="1"
        :particles-number="500"
        shape-type="circle"
        :particle-size="1"
        lines-color="#0000ff"
        :lines-width="2"
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
  </b-container>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    pheader: {
      type: String,
      default: 'pheader pheader pheader pheader'
    }
}}
</script>
<style  scoped lang="scss">
#particles {
  background: #fff;
  font-family: 'Roboto', sans-serif, 16px;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  opacity: 0.3;
}

.paticles .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

#componentcontainer {
  width: 100%;
  height:  100%;
  position: relative;
}
#particles,
#componentheader {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
}
#componentheader {
  z-index: 10;
  // top: 150px;
  font-size: 30px;
    font-weight: bold;
}

</style>
