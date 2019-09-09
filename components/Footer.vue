<template>
  <b-container fluid class="text-light text-left bg-primary footer">
    <div class="row">
      <div class="col">
        <h2>The Odd Wave</h2>
        <ul>
          <nuxt-link v-for="item in standardNav" :key="item.value" :to="item.value">
            <li>{{ item.text }}</li>
          </nuxt-link>
        </ul>
      </div>
      <div class="col">
        <h2>Services</h2>
        <ul>
          <nuxt-link
            v-for="service in services"
            :key="service.id"
            :to="{name: 'services-id', params: {id: service.id}}"
          >
            <li>{{ service.title }}</li>
          </nuxt-link>
        </ul>
      </div>

      <div class="col text-light text-center">
        <h2>Work with us</h2>
        <h4>{{ phone }}</h4>
        <h4>{{ email }}</h4>
        <br>
        <h6>{{ copyright }}</h6>
        <h6>{{ poweredBy }}</h6>
      </div>
      <div class="col social text-light text-center">
        <h2>Share us</h2>
        <ul>
          <li>
            <a href="#" class="fa fa-facebook" />
            <a href="#" class="fa fa-linkedin" />
          </li>
        </ul>
      </div>
      <div class="clearfix" />
    </div>
  </b-container>
</template>
<script>
export default {
  data () {
    return {
      copyright: '© 2019 Copyright The Odd Wave',
      email: 'team@theoddwave.co.nz',
      phone: '+64 210 8823 769',
      poweredBy: 'powered by The Odd Wave',
      standardNav: [
        { value: '/', text: 'Home' },
        { value: '/about', text: 'What we do' },
        { value: '/contact', text: 'Contact us' }
      ]
    }
  },
  computed: {
    services () {
      return this.$store.state.services.all
    }
  }
}
</script>
<style scoped>

</style>
