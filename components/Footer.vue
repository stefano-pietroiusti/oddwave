<template>
  <footer class="container-fluid footer">
    <div class="row">
      <div class="col-4 text-left  align-middle">
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'servicestack' }"
          class="fa-1x primary"
        />THE ODD WAVE
      </div>
      <div class="col-4 fa-1x  text-center  align-top">
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'envelope' }" />
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'phone' }" />
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
      </div>
      <div class="col-4 small text-right  align-middle">
        <span>{{ copyright }}</span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      copyright: '© 2019 Copyright The Odd Wave',
      email: 'info@theoddwave.co.nz',
      phone: '+642108823769',
      poweredBy: 'powered by modern web technologies'
    }
  }
}
</script>
<style scoped>
</style>
