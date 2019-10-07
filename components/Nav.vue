<template>
  <b-container fluid class="bg-primary m-0 p-0">
    <b-row>
      <b-col>
        <b-navbar
          sticky
          fixed="top"
          toggleable="lg"
          type="dark"
          variant="primary"
        >
          <b-navbar-brand to="/">
            <img :src="require('~/assets/logos/oddwave.png?size=200')" fluid alt="the odd wave" class="logo">
            {{ title }}
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse" />
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">
                Home
              </b-nav-item>
              <b-nav-item-dropdown text="Services" toggle-class="text-decoration-none">
                <b-dropdown-item
                  v-for="service in services"
                  :key="service.id"
                  :to="'/services/' + service.id + '/'"
                >
                  {{ service.title }}
                  <!-- <nuxt-link :to="'/services/' + service.id + '/'">
                    {{ service.title }}
                  </nuxt-link> -->
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item to="/contact/">
                Contact us
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import Logo from '@/components/Logo'
// import logo from 'logos/oddwave.png'
export default {
  components: {
    // Logo
  },
  data () {
    return {
      title: 'THE ODD WAVE',
      standardNav: [
        { value: '/', text: 'Home' },
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
