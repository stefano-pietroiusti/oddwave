<template>
  <div class="container-fluid servicesTags">
    <div class="row">
      <nuxt-link
        v-for="service in services"
        :key="service.id"
        :to="{name: 'services-id', params: {id: service.id}}"
        class="btn btn-success"
      >
        <div class="col">
          {{ service.title }}
        </div>
      </nuxt-link>
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
