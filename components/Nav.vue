<template>
  <b-navbar fixed="top" toggleable="lg" :type="theme" :variant="theme" class="p-0 m-0">
    <!-- <button
      type="button"
      data-target="#nav-collapse"
      aria-label="Toggle navigation"
      aria-controls="nav-collapse"
      aria-expanded="false"
      class="custom-toggler navbar-toggler-right navbar-toggler"
    >
      <span class="navbar-toggler-icon" />
    </button>-->
    <b-navbar-toggle target="nav-collapse" class="navbar-toggler collapsed">
      <span />
      <span />
      <span />
    </b-navbar-toggle>
    <b-navbar-brand
      to="/"
      title="Website Design by The Odd Wave"
      exact
      exact-active-class
      class="px-4 mx-0"
    >
      <img
        :src="logoPath"
        :srcset="logoPath.srcSet"
        fluid
        alt="Website Design, Development & Digital Marketing by The Odd Wave"
        text="Website Design, Development & Digital Marketing by The Odd Wave"
        class="logo"
      >
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav role="navigation">
        <b-nav-item to="/" exact exact-active-class="underline">
          Home
        </b-nav-item>
        <b-nav-item to="/about-theoddwave-nz/" exact exact-active-class="underline">
          About us
        </b-nav-item>
        <b-nav-item-dropdown
          text="Services"
          :extra-toggle-classes="this.$route.name === 'services-id' ? 'activeClassServicesProducts' : ''"
        >
          <b-dropdown-item
            v-for="item in services"
            :id="item.id"
            :key="item.id"
            :to="'/services/' + item.id + '/'"
            class="text-lightgray"
            exact
            exact-active-class="activeClassServicesProducts"
          >
            {{ item.title }}
            <!-- <b-dropdown-divider /> -->
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- <b-nav-item-dropdown
          text="Pricing"
          exact
          :extra-toggle-classes="this.$route.name === 'products-id' ? 'activeClassServicesProducts' : ''"
        >
          <b-dropdown-item
            v-for="item in products"
            :id="item.id"
            :key="item.id"
            :to="'/products/' + item.id + '/'"
            class="text-lightgray"
            exact
            exact-active-class="activeClassServicesProducts"
          >
            {{ item.title }}
          </b-dropdown-item>
        </b-nav-item-dropdown>-->

        <b-nav-item to="/portfolio/" exact exact-active-class="underline">
          Portfolio
        </b-nav-item>
        <b-nav-item to="/blog-articles/" exact exact-active-class="underline">
          Blog
          <b-badge variant="primary" pill flush>
            {{ articlesCount }}
          </b-badge>
        </b-nav-item>
        <b-nav-item to="/contact-theoddwave-nz/" exact exact-active-class="underline">
          Contact us
        </b-nav-item>
        <div id="content-desktop" class="pl-5">
          <a :href="`tel:${callAction.telephone}`" :title="`Call us: ${callAction.telephone}`">
            <font-awesome-icon
              :icon="['fas', 'phone']"
              :class="`fa fa-medium fa-hover pl-2 ml-2 ${color}`"
            />
          </a>
          <a :href="`mailto:${callAction.email}`" :title="`Email us: ${callAction.email}`">
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              :class="`fa fa-medium fa-hover pl-2 ml-2 ${color}`"
            />
          </a>&nbsp;&nbsp;&nbsp;&nbsp;
          <b-button
            pill
            variant="rwcblue"
            class="px-3 whyusbutton justify-content-center animated pulse delay-1s text-white"
          >
            <nuxt-link
              :to="{ path: '/',hash:'#whyussection'}"
              class="text-white text-medium"
            >
              Why Us?
            </nuxt-link>
          </b-button>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  props: {
    pbgimage: {
      type: Object,
      default () {
        return {
          color1: 'rgba(0, 0, 0, 0.2)',
          color2: 'rgba(0, 0, 0, 0.5)',
          url: 'laptop.jpg',
          height: 100
        }
      }
    },
    ptheme: {
      type: String,
      default: 'dark'
    }
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
    ...mapGetters('services', ['serviceLinks']),
    // ...mapGetters('products', ['productLinks']),
    ...mapGetters('client', ['getClient']),
    ...mapGetters('strapi', ['getArticlesCount']),
    callAction () {
      return {
        telephone: this.getClient.telephone,
        email: this.getClient.email
      }
    },
    services () {
      const services = this.serviceLinks
      return services
    },
    articlesCount () {
      return this.getArticlesCount
    },
    // products () {
    //   const products = this.productLinks
    //   return products
    // },
    logoPath () {
      return require(`~/assets/logos/theoddwave.png`)
      // return this.ptheme === 'theoddwave'
      //   ? require(`~/assets/logos/oddwave-dark.png`)
      //   : require(`~/assets/logos/oddwave-light.png`)
    },
    color () {
      return this.ptheme === 'theoddwave' || this.ptheme === 'contact'
        ? 'text-white'
        : 'text-black'
    },
    theme () {
      return this.ptheme
    },
    bannerImagePath () {
      if (!this.pbgimage.url) {
        return
      }
      const fileName = this.pbgimage.url
      return {
        '1': require(`~/assets/imgs/banner/${fileName}?size=1920`),
        '2': require(`~/assets/imgs/banner/${fileName}?size=768`)
      }
    },
    gradient () {
      if (!this.pbgimage.url) {
        return
      }
      const image1x = this.bannerImagePath['1']
      const image2x = this.bannerImagePath['2']
      return {
        backgroundImage: `linear-gradient(45deg,  ${this.pbgimage.color1}, ${this.pbgimage.color2}), url(${image1x}), -webkit-image-set(url(${image1x}) 1x, url(${image2x}) 2x)`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }
    }
  }
}
</script>
<style scoped>
.navbar-toggler {
  margin: 5px;
  padding: 0.5rem !important;
  border: none;
}
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler:hover {
  outline: none;
  box-shadow: none;
  border: 1px solid #00c3ff;
  border-radius: 25%;
}
.navbar-toggler {
  border: 1px solid #00c3ff;
  border-radius: 25%;
  color: #00c3ff;
  background-image: none;
  align-content: center;
  /* background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(84, 200, 232, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"); */
}

.navbar-theoddwave .navbar-collapse.collapse.show .navbar-nav {
  background: rgba(0, 0, 0, 1);
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  left: -50 !important;
  margin: 0 !important;
  padding: 0 !important;

  width: 100%;
}

/* .navbar-toggler:hover {
  background: transparent !important;
}
.navbar-toggler .icon-bar {
  width: 22px;
  transition: all 0.2s;
}
.navbar-toggler .top-bar {
  transform: rotate(45deg);
  transform-origin: 10% 10%;
}
.navbar-toggler .middle-bar {
  opacity: 0;
}
.navbar-toggler .bottom-bar {
  transform: rotate(-45deg);
  transform-origin: 10% 90%;
}
.navbar-toggler.collapsed .top-bar {
  transform: rotate(0);
}
.navbar-toggler.collapsed .middle-bar {
  opacity: 1;
}
.navbar-toggler.collapsed .bottom-bar {
  transform: rotate(0);
} */

.navbar-toggler[aria-expanded='false'] span {
  display: block;
  background-color: #00c3ff;
  height: 4px;
  width: 40px;
  margin-top: 4px;
  margin-bottom: 4px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  position: relative;
  left: 0;
  opacity: 1;
}

.navbar-toggler span:nth-child(1),
.navbar-toggler span:nth-child(3) {
  -webkit-transition: transform 0.35s ease-in-out;
  -moz-transition: transform 0.35s ease-in-out;
  -o-transition: transform 0.35s ease-in-out;
  transition: transform 0.35s ease-in-out;
}

.navbar-toggler[aria-expanded='false'] span:nth-child(1),
.navbar-toggler[aria-expanded='false'] span:nth-child(3) {
  width: 30px;
  margin-left: 5px;
}

.navbar-toggler[aria-expanded='true'] span:nth-child(1) {
  /* position: absolute; */
  display: block;
  background-color: #00c3ff;
  height: 4px;
  width: 40px;
  margin-top: 12px;
  margin-bottom: 12px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
  opacity: 0.9;
}

.navbar-toggler[aria-expanded='true'] span:nth-child(2) {
  height: 12px;
  visibility: hidden;
  background-color: transparent;
}

.navbar-toggler[aria-expanded='true'] span:nth-child(3) {
  height: 12px;
  visibility: hidden;
  background-color: transparent;
  /* position:absolute;
  display: block;
  background-color: #00c3ff;
  height: 4px;
  width: 40px;
  margin-top: 4px;
  margin-bottom: 12px;
  left: 21px;
  top: 30px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
  opacity: 0.9; */
}
</style>
