<template>
  <div class="row demoSvg">
    <div class="col demoSvg text-white">
      <h4>Svg animation - dynamic svg</h4>
      <div class="demoSvg">
        <svg
          ref="svglogo"
          width="100vw"
          height="100vh"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg"
        >
          <!-- <svg ref="logo" viewBox="0 0 435.6 141.4">
          <path
            id="Letter_M"
            class="color1"
            d="M0.7,140.2l0.1-138L47,68.4L93.3,2.2V140h-8L10.9,34.3v40.1"
          /> -->

          <!--

          <g>
            <title>Layer 1</title> -->
          <!-- <text
            id="svg_16"
            stroke="#000000"
            transform="matrix(7.858208242193996,0,0,3.6021558851189255,-466.8656177771108,-98.4706616637588) "
            xml:space="preserve"
            text-anchor="middle"
            font-family="serif"
            font-size="24"
            y="62"
            x="75"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="0"
            fill="#000000"
          >O</text>
          <text
            id="svg_18"
            style="cursor: move;"
            stroke="#000000"
            transform="matrix(10.517758068565955,0,0,3.3929889648393807,-696.6408511244626,-83.54000668950539) "
            xml:space="preserve"
            text-anchor="middle"
            font-family="serif"
            font-size="24"
            y="60.96989"
            x="90.77795"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="0"
            fill="#000000"
          >d</text> -->

          <path
            id="svg_19"
            d="m183.7303,138.33452c366.16356,-27.05036 347.19905,123.66548 347.19905,123.66548c0,0 -713.36261,-96.61512 -347.19905,-123.66548z"
            class="color1"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { logoAnimation } from '../../static/animations'
export default {
  components: {},
  mounted () {
    logoAnimation(this.$refs.svglogo.children)
  }
}
</script>
<style scoped>
.color1 {
  background-color: white;
    color: white;
    fill:  white;
  stroke: #3eb373;
  stroke-width: 4px;
}
.color2 {
  stroke: #be2f39;
}
.color3 {
  stroke: #2283bc;
}
.color4 {
  stroke: #ed8e3f;
}

.svglogo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.svglogo svg {
  width: 300px;
}

.svglogo path {
  fill: none;
  stroke-width: 1.5;
}
</style>
