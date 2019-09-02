<template>
  <header>
    <b-navbar toggleable="lg" fixed="top" class="navbar-dark" variant="info">
      <b-navbar-brand to="/">
        <!-- <b-img :src="image" fluid alt="the odd wave logo" class="logo" /> -->
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'servicestack' }"
          class="fa-1x primary"
        />
        {{ title }}
      <!-- <nuxt-link :src="image" tag="the odd wave logo" to="/" />{{ title }} -->
      <!-- <b-img src="~/assets/imgs/odd-wave-logo-s.png" fluid alt="the odd wave logo" /> -->
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="item in standardNav" :key="item.value" :to="item.value">
            {{ item.text }}
          </b-nav-item>
          <b-nav-item-dropdown text="Services" right variant="danger" toggle-class="text-decoration-none">
            <b-dropdown-item
              v-for="service in services"
              :key="service.id"
              variant="tertiary"
              :to="{name: 'services-id', params: {id: service.id}}"
            >
              {{ service.title }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import image from '~/assets/imgs/odd-wave-logo-s.png'

export default {
  components: {},
  data () {
    return {
      image,
      title: 'THE ODD WAVE',
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
