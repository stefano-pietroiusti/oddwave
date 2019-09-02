<template>
  <div id="particles" class="container-fluid">
    <vue-particles
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
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
/* https://www.w3schools.com/css/css3_gradients.asp
#grad {
  background-image: linear-gradient(to right, red , yellow);
}
#grad1 {
  background-image: linear-gradient(-90deg, red, yellow);
}

#grad2 {
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}
#grad3 {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}
#grad4 {
  background-image: radial-gradient(circle, red, yellow, green);
}
#grad5 {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}
*/
#particles {
  background: #000;
  font-family: 'Roboto', sans-serif, 16px;
  /* font-family: 16px; */
  margin: 0 auto;
  /* max-width: 600px; */
  width: 100%;
}

.paticles .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

</style>
