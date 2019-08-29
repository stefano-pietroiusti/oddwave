<template>
  <div class="row demoServicesTags">
    <div class="col demoServicesTags">
      <div class="demoServicesTags">
        <!-- <div class="btn-group" role="group"> -->

        <h4>Service tags demo - dynamic rendering off services and products content</h4>
        <nuxt-link
          v-for="service in services"
          :key="service.id"
          :to="{name: 'services-id', params: {id: service.id}}"
          class="btn btn-secondary"
        >
          {{ service.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    services () {
      return this.$store.state.services.all
    }
  },
  mounted () {
    this.$myInjectedFunction('servicestags')
  }
}
</script>
<style scoped>
</style>
