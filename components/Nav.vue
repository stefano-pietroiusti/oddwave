<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-navbar toggleable="lg" fixed="top" type="dark" variant="primary">
          <b-navbar-brand to="/" class="logo">
            <b-img src="logos/oddwave.png" fluid alt="the odd wave" class="logo" />{{ title }}
            <!-- <img :src="require('~/assets/logos/oddwave.png?size=400')" :srcset="require('~/assets/logos/oddwave.png').srcSet"> -->
            <!-- <Logo /> {{ title }} -->
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
                  :to="{name: 'services-id', params: {id: service.id}}"
                >
                  {{ service.title }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item to="/contact">
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
.logo {
  height: 3.5vw;
  width: auto;
  font-weight: bold;
}
.navbar {
  min-height: 80px;
  /* height:80px; */
}
</style>
