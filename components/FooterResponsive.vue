<template>
  <b-container fluid class="text-light text-left bg-primary p-1 footerresponsive">
    <!-- <div class="footerresponsive"> -->
    <div class="contain">
      <div class="col">
        <h1>The Odd Wave</h1>
        <ul>
          <nuxt-link v-for="item in standardNav" :key="item.value" :to="item.value">
            <li>{{ item.text }}</li>
          </nuxt-link>
        </ul>
      </div>
      <!-- <div class="col">
        <h1>Products</h1>
        <ul>
          <li>Hosting packages</li>
          <li>Website packages</li>
        </ul>
      </div>-->
      <div class="col">
        <h1>Services</h1>
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
      <div class="col social">
        <h1>Social</h1>
        <ul>
          <li>
            <a href="#" class="fa fa-facebook" />
            <a href="#" class="fa fa-linkedin" />
          </li>
        </ul>
      </div>
      <div class="col social">
        <h1>+64 210 88 23769</h1>
        <h1>team@theoddwave.co.nz</h1>
      </div>
      <div class="clearfix" />
    </div>
  </b-container>
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      standardNav: [
        { value: '/', text: 'Home' },
        { value: '/about', text: 'What we do' },
        { value: '/contact', text: 'Contact us' }
      ]
    }
  },
  computed: {
    services() {
      return this.$store.state.services.all
    }
  }
}
</script>
<style scoped>
.footerresponsive {
  height: 200px;
  width: 100%;
}

.footerresponsive .col {
  width: 300px;
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  /* padding: 0px 20px 20px 20px; */
}

.footerresponsive .col h1 {
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 12px;
  line-height: 17px;
  padding: 20px 0px 5px 0px;
  color: rgba(255, 255, 255, 0.2);
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}
.footerresponsive .col ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footerresponsive .col ul li {
  color: #999999;
  font-size: 14px;
  font-family: inherit;
  font-weight: bold;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  text-decoration: none;
}
.footerresponsive .col ul a:hover {
  text-decoration: none;
}

.social ul li {
  display: inline-block;
  padding-right: 5px !important;
}

.footerresponsive .col ul li:hover {
  color: #ffffff;
  transition: 0.1s;
  -webkit-transition: 0.1s;
  -moz-transition: 0.1s;
}
.clearfix {
  clear: both;
}

@media only screen and (min-width: 1280px) {
  .contain {
    width: 1200px;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1139px) {
  .contain .social {
    width: 1000px;
    display: block;
  }
  .social h1 {
    margin: 0px;
  }
}
@media only screen and (max-width: 950px) {
  .footerresponsive .col {
    width: 33%;
  }
  .footerresponsive .col h1 {
    font-size: 14px;
  }
  .footerresponsive .col ul li {
    font-size: 13px;
  }
}
@media only screen and (max-width: 500px) {
  .footerresponsive .col {
    width: 50%;
  }
  .footerresponsive .col h1 {
    font-size: 14px;
  }
  .footerresponsive .col ul li {
    font-size: 13px;
  }
}
@media only screen and (max-width: 340px) {
  .footerresponsive .col {
    width: 100%;
  }
}
</style>
