<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="imageBannerComponent text-center" :style="{ backgroundImage: `url(${pimage})` }">
    <b-row>
      <b-col class="componenttext">
        {{ pimagecontent }}
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: ['pimage', 'pimagedesc', 'pimagecontent']
}





// export default {
//   data(){
//          return { backgroundUrl:'~assets/imgs/sample.jpg' }
// },
//   props: ['pimage', 'pimagedesc', 'pimagecontent']
// }
</script>
<style scoped>
.imageBannerComponent {
  min-height: 20vw; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  padding-top: 5vh;
  color: white;
  width: 100%;
  height:20vh;
  font-size: 50px;
}

@media screen and ( max-width: 320px ) and ( max-height: 768px )
{
  .imageBannerComponent {
     min-height: 40vw; 
     height:40vh;
     font-size: 20px;
    }
}

@media screen and ( max-width: 768px )
{
  .imageBannerComponent {
     min-height: 40vw; 
     height:40vh;
     font-size: 30px;
    }
}


</style>
