<template>
  <b-container fluid class="text-light text-center servicesTags">
    <b-row>
      <nuxt-link
        v-for="service in services"
        :key="service.id"
        :to="{name: 'services-id', params: {id: service.id}}"
        class="btn btn-success"
      >
        <b-col md="6" class="ml-auto p-3 bg-info">
          {{ service.title }}
        </b-col>
      </nuxt-link>
    </b-row>
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
  </b-container>

  <!-- <div class="container-fluid servicesTags">
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
  </div> -->
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
