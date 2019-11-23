<template>
  <b-container fluid class="m-0 p-0">
    <b-row>
      <b-col>
        <b-navbar
          fixed="top"
          toggleable="lg"
          type="dark"
          variant="transparent"
        >
          <b-navbar-brand to="/" title="Web Design by The Odd Wave">
            <img
              :src="logoPath"
              :srcset="logoPath.srcSet"
              fluid
              alt="Web Design by The Odd Wave"
              text="Web Design by The Odd Wave"
              class="logo"
            >
          </b-navbar-brand>
          <div id="content-mobile">
            <a :href="`tel:${callAction.telephone}`" :title="`Call us: ${callAction.telephone}`">
              <font-awesome-icon :icon="['fas', 'phone']" class="fa fa-medium fa-hover text-white pl-2 ml-2" />
            </a>
            <a :href="`mailto:${callAction.email}`" :title="`Email us: ${callAction.email}`">
              <font-awesome-icon :icon="['fas', 'envelope']" class="fa fa-medium text-white fa-hover pl-2  ml-2" />
            </a>
          </div>
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
                  :class="`text-${item.variant}`"
                >
                  <!-- <font-awesome-icon
                    :icon="
                      item.icon"
                    :class="`fa text-large text-${item.variant} my-2 fa-fw`"
                  /> -->
                  {{ item.title }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="Pricing" toggle-class="text-decoration-none">
                <b-dropdown-item
                  v-for="item in products"
                  :id="item.id"
                  :key="item.id"
                  :to="'/products/' + item.id + '/'"
                >
                  <!-- <font-awesome-icon
                    :icon="
                      item.icon"
                    :class="`fa text-large text-${item.variant} my-2 fa-fw`"
                  /> -->
                  {{ item.title }}
                </b-dropdown-item>
                </b-dropdown-i1tem>
              </b-nav-item-dropdown>
              <b-nav-item to="/contact/">
                Contact us
              </b-nav-item>
              <div id="content-desktop">
                <a :href="`tel:${callAction.telephone}`" :title="`Call us: ${callAction.telephone}`">
                  <font-awesome-icon :icon="['fas', 'phone']" class="fa fa-medium fa-hover text-white pl-2 ml-2" />
                </a>
                <a :href="`mailto:${callAction.email}`" :title="`Email us: ${callAction.email}`">
                  <font-awesome-icon :icon="['fas', 'envelope']" class="fa fa-medium text-white fa-hover pl-2  ml-2" />
                </a>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },
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
      return { telephone: this.getClient.telephone, email: this.getClient.email }
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
      return require(`~/assets/logos/oddwave.png`)
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

</style>
