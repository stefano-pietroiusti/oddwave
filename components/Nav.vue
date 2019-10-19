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
            <b-navbar-nav role="navigation">
              <b-nav-item to="/">
                Home
              </b-nav-item>
              <b-nav-item-dropdown text="Services" toggle-class="text-decoration-none">
                <b-dropdown-item
                  v-for="item in services"
                  :id="item.id"
                  :key="item.id"
                  :to="'/services/' + item.id + '/'"
                >
                  {{ item.linkTitle }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item to="/contact/">
                Contact us
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          </b-navbar-brand>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
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
    ...mapState({
      services: state => state.services.all
    })
  }
}
</script>
<style scoped>

</style>
