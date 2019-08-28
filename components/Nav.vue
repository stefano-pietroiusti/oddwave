<template>
  <div class="container-fluid">
    <b-navbar toggleable="lg" fixed="top" class="navbar navbar-dark">
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
          <b-nav-item-dropdown text="Services" right variant="primary" toggle-class="text-decoration-none">
            <!-- <template slot="button-content">
              &#x1f50d;<span class="sr-only">Search</span>
            </template> -->
            <b-dropdown-item
              v-for="service in services"
              :key="service.id"
              variant="primary"
              :to="{name: 'services-id', params: {id: service.id}}"
            >
              <b-icon icon="comments" />
              &nbsp;{{ service.title }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
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
/* .col {
  color: white;
  background-color: #375a7f;
  opacity: 2;
} */
/*
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
  font-weight: lighter;
  letter-spacing: 0.5px;
  opacity: 2;
  background-color: #375a7f;
}
.nav .logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav .logo .subheader {
  opacity: 0.7;
  font-size: 0.9rem;
  color: white;
  background-color: #375a7f;
}
.nav .nav-content {
  font-size: 1rem;
}
.nav-content ul {
  display: flex;
  list-style: none;
}
.nav-content ul li {
  padding: 2px 10px;
}
.nav-content ul li:not(:first-of-type) {
  border-left: 1px solid rgb(255, 255, 255, 0.2);
} */
</style>
