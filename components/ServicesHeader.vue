<template>
  <header>
    <div class="container-fluid servicesHeader">
      <div class="row">
        <div class="col">
          <h1>{{ header }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>{{ subheader }}</h2>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'ServicesHeader',
  props: {
    header: {
      type: String,
      required: true,
      default: 'Service header'
    },
    subheader: {
      type: String,
      required: true,
      default: 'Service subheader'
    }
  }
}
</script>
<script/>
<style scoped>
</style>
