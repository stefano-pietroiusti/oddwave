<template>
  <div class="container-fluid">
    <b-navbar toggleable="lg" fixed="top" class="navbar navbar-dark" style="background-color: #025492;">
      <b-navbar-brand href="/">
        {{ title }}
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            {{ navCategories.cat1 }}
          </b-nav-item>
          <b-nav-item-dropdown :text="navCategories.cat2" right>
            <b-dropdown-item
              v-for="service in services"
              :key="service.id"
              :to="{name: 'services-id', params: {id: service.id}}"
            >
              {{ service.title }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">
            {{ navCategories.cat3 }} us
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      title: 'The Odd Wave',
      navCategories: {
        cat1: 'Pricing',
        cat2: 'Services',
        cat3: 'Contact'
      }
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
