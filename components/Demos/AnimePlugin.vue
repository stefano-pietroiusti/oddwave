<template>
  <div class="row demoAnimeAnimation">
    <div class="col demoAnimeAnimation text-white">
      <h4>Dynamic Anime Animation</h4>
      <div v-anime="{ rotate: '1turn', backgroundColor: '#000', duration: 2000, loop: true }">
        <svg ref="logo" viewBox="0 0 435.6 141.4">
          <path
            id="Letter_M"
            class="color1"
            d="M0.7,140.2l0.1-138L47,68.4L93.3,2.2V140h-8L10.9,34.3v40.1"
          />
          <path
            id="Letter_A"
            class="color2"
            d="M118.6,141.2l55.2-139L224,140h-12l-18.4-51.5h-43.9l16.1-42.2"
          />
          <path
            id="Letter_R"
            class="color3"
            d="M249.3,141.2V2.2h23.1c0,0,35-1.8,45,35.1c1,3.6,1.3,7.4,0.9,11.2c-1.4,16.4-11.2,30.8-25.9,38.1l30.1,53.4h-8l-34.1-57.4c0,0,18.1-2,28.1-24.1h-50.2V44.4"
          />
          <path id="Letter_T" class="color4" d="M435.6,2.2h-87.8v10H392v128.2h8V47.3" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
.color1 {
  stroke: #3eb373;
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

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo svg {
  width: 300px;
}

.logo path {
  fill: none;
  stroke-width: 1.5;
}
</style>
