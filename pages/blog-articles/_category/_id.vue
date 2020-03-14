<!-- eslint-disable vue/no-v-html
<template>
  <HeaderComponent pheader="title" pcontainerclass="borderLeft" />
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent'
export default {
  components: {
    HeaderComponent
  },
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  mounted () {
    this.$ga.page(this.$route.path)
  }
}
</script>
<style scoped>

</style>
-->
