<template>
  <div class="container-fluid servicesTags">
    <div class="row">
      <div class="col">
        <!-- <div class="btn-group" role="group"> -->
        <nuxt-link
          v-for="service in services"
          :key="service.id"
          :to="{name: 'services-id', params: {id: service.id}}"
          class="btn btn-secondary"
        >
          {{ service.title }}
        </nuxt-link>
        <!-- </div> -->
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
  }
}
</script>
<style scoped>
</style>
