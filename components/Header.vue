<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h1>{{ pheader }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>{{ psubheader }}</h2>
        </div>
      </div>
    </div>
  </header>
</template> 
<script>
/* eslint-disable */
export default {
  props: ['pheader', 'psubheader']
}
// export default {
//   props: {
//     titletext: {
//       type: String,
//       required: false,
//       default: '1 Digital marketing and web design services'
//     }
//   }
// }
</script>
<script/>
<style scoped>
</style>
