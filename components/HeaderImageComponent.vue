<template>
  <header class="text-center" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <div class="container-fluid">
      <div class="row m-4">
        <div class="col">
          <h1>{{ pheader }}</h1>
        </div>
      </div>
      <div v-if="psubheader" class="row">
        <div class="col">
          <h2>{{ psubheader }}</h2>
        </div>
      </div>
      <div v-if="psubtitle" class="row m-3">
        <div class="col">
          <h3>{{ psubtitle }}</h3>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import backgroundUrl from '~/assets/imgs/banner/contact.jpg'

/* eslint-disable */
export default {
  props: ['pheader', 'psubheader', 'psubtitle'],
  data() {
    return { backgroundUrl }
  }
}
// export default {
//   props: {
//     titletext: {
//       type: String,
//       required: false,
//       default: '1 Digital marketing and Website Design services'
//     }
//   }
// }
</script>
