<template>
  <div>
    <!-- <mycomponent :result="myres" /> -->
    <HeaderComponent :pheader="pheader" :psubheader="psubheader" />
  </div>
</template>

<script>
// import mycomponent from '@/components/TestComponent'
import HeaderComponent from '@/components/HeaderComponent'
export default {
  components: {
    // mycomponent,
    HeaderComponent
  },
  data (context) {
    return { pheader: 'Digital marketing and web design services.sssss', psubheader: 'helping businesses of all sizes work smarter in the most efficient ways possible' }
    //  return apicall.getData(id)
    //  .then((res) => {
    //      return { myres: res.data }
    //  })
  }
}
</script>
