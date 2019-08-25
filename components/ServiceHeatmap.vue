<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <nuxt-link
          v-for="service in services"
          :key="service.id"
          :to="{name: 'services-id', params: {id: service.id}}"
          class="button--grey"
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
  }
}
</script>
<style scoped>
</style>
