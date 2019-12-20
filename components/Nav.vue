<template>
  <b-navbar fixed="top" toggleable="lg" :type="theme" :variant="theme">
    <b-navbar-brand to="/" title="Web Design by The Odd Wave" exact exact-active-class>
      <img
        :src="logoPath"
        :srcset="logoPath.srcSet"
        fluid
        alt="Web Design, Development & Digital Marketing by The Odd Wave"
        text="Web Design, Development & Digital Marketing by The Odd Wave"
        class="logo"
      >
    </b-navbar-brand>
    <!-- <div id="content-mobile">
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
      </a>
    </div>-->

    <b-navbar-toggle target="nav-collapse" class="custom-toggler navbar-toggler-right" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav role="navigation">
        <b-nav-item to="/" exact exact-active-class="underline">
          Home
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
        <b-nav-item-dropdown
          text="Pricing"
          exact
          :extra-toggle-classes="this.$route.path === 'products' ? 'activeClassServicesProducts' : ''"
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
        </b-nav-item-dropdown>
        <b-nav-item to="/contact/" exact exact-active-class="underline">
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
            href="#whyussection"
            class="px-3 whyusbutton justify-content-center animated pulse delay-1s text-white text-medium"
          >
            Why Us?
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
    ...mapGetters('products', ['productLinks']),
    ...mapGetters('client', ['getClient']),
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
    products () {
      const products = this.productLinks
      return products
    },
    logoPath () {
      return this.ptheme === 'theoddwave'
        ? require(`~/assets/logos/oddwave-dark.png`)
        : require(`~/assets/logos/oddwave-light.png`)
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
<style scoped lang="scss">
// @media (max-width: 992px) {
//   .navbar-collapse {
//     position: absolute;
//     top: 80px;
//         right: 100%;
//         padding-left: 15px;
//         padding-right: 15px;
//         padding-bottom: 15px;
//     width: 100%;
//     transition: all 0.3s ease;
//     display: block;
//       background: rgba(0, 0, 0, .9);

//   }
  // .navbar-collapse.collapsing {
  //   height: auto !important;
  //   margin-right: 50%;
  //   transition: all 0.3s ease;
  //   display: block;
  // }
  // .navbar-collapse.show {
  //   right: 0;
  //   transition: all 0.3s ease;
  // }
//   .navbar-toggler > .close {
//     display: inline;
//   }
// }

</style>
