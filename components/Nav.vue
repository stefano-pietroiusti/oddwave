<template>
  <div class="container">
    <div class="row shadow p-3 mb-5 bg-white rounded">
      <div class="col-md-3 push-md-9">
        <div class="card shadow-sm p-3 mb-5 bg-white rounded">
          <img class="card-img-top" src="~/assets/odd_wave_logo.png" alt="Card image cap">
        </div>
      </div>
      <div class="col-md-9 pull-md-3">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-toggle target="nav-collapse" />
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">
                Pricing
              </b-nav-item>
              <b-nav-item-dropdown text="Services" right>
                <b-dropdown-item
                  v-for="service in services"
                  :key="service.id"
                  :to="{name: 'services-id', params: {id: service.id}}"
                >
                  {{ service.title }}
                </b-dropdown-item>
                <b-dropdown-item to="/services/seo">
                  SEO
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <!-- <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
                <b-button size="sm" class="my-2 my-sm-0" type="submit">
                  Search
                </b-button>
              </b-nav-form>
            </b-navbar-nav>-->
          </b-collapse>
        </b-navbar>
        <!--
        <nav id="mainNav" class="navbar navbar-expand-lg navbar-light fixed-top">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i class="fas fa-bars" />
            </button>
            <div id="navbarResponsive" class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#signup">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> -->
      </div>
    </div>
  </div>
</template>

<!--
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
      <div class="container-fluid">
        <a href="#" class="navbar-brand mr-3">Tutorial Republic</a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <div class="navbar-nav">
            <a href="#" class="nav-item nav-link active">Home</a>
            <a href="#" class="nav-item nav-link">Services</a>
            <a href="#" class="nav-item nav-link">About</a>
            <a href="#" class="nav-item nav-link">Contact</a>
          </div>
          <div class="navbar-nav ml-auto">
            <a href="#" class="nav-item nav-link">Register</a>
            <a href="#" class="nav-item nav-link">Login</a>
          </div>
        </div>
      </div>
    </nav>

    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        The Odd Wave - be where the world is going
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            Pricing
          </b-nav-item>
          <b-nav-item-dropdown text="Services" right>
            <b-dropdown-item
              v-for="service in services"
              :key="service.id"
              :to="{name: 'services-id', params: {id: service.id}}"
            >
              {{ service.title }}
            </b-dropdown-item>
            <b-dropdown-item to="/services/seo">
              SEO
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              Search
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
-->

<script>
// import Logo from '@/components/Logo'
export default {
  components: {
    // Logo
  },
  computed: {
    services () {
      return this.$store.state.services.all
    }
  }
}
</script>
