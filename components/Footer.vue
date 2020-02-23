<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="p-0 m-0 bg-black">
    <b-container fluid class="w-75 pt-8 mx-auto text-light text-left bg-black footer text-medium">
      <b-row>
        <b-col cols="12" class="text-small">
          We are a website design and digital marketing company based in North Shore, Auckland, New Zealand. We serve businesses across NZ including Wellington, Waikato, Canterbury, Northland, Southland, Bay of Plenty, Hawkes Bay, Gisborne, Taranaki, Nelson, Tasman and Otago.
        </b-col>
      </b-row>

      <b-row>
        <b-col xs="12" sm="12" md="6" lg="6" class="text-small">
          <h2 class="pt-5">
            Contact Us
          </h2>
          <ul class="pl-2">
            <li v-for="(item,i) in contactInfo.phone" :key="i">
              <a :href="`tel:${item}`" :title="item">{{ item }}</a>
            </li>
            <li>
              <a
                :href="`mailto:${contactInfo.email}`"
                :title="contactInfo.email"
              >{{ contactInfo.email }}</a>
            </li>
          </ul>
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6">
          <h2 class="pt-5">
            Social
          </h2>
          <ul class="pl-2">
            <li>
              <a
                :href="contactInfo.fb"
                title="Connect with us via our facebook page"
                aria-label="Connect with us via our facebook page"
              >Facebook</a>
            </li>
            <li>
              <a
                :href="contactInfo.instagram"
                title="Connect with us via our instagram"
                aria-label="Connect with us via our instagram"
              >Instagram</a>
            </li>
            <li>
              <a
                :href="contactInfo.googlebusiness"
                title="Connect with our google business listing"
                aria-label="Connect with our google business listing"
              >Google</a>
            </li>
          </ul>
        </b-col>
        <b-col>
          <h2 class="pt-5">
            Services
          </h2>
          <ul class="pl-2">
            <li v-for="item in services" :key="item.id">
              <nuxt-link :to="'/services/' + item.id + '/'">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </b-col>
        <!-- <b-col>
          <h2 class="pt-5">
            Pricing
          </h2>
          <ul class="pl-2">
            <li v-for="item in products" :key="item.id">
              <nuxt-link :to="'/products/' + item.id + '/'">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </b-col> -->
      </b-row>
      <b-row>
        <b-col class="clearfix" />
      </b-row>
      <b-row>
        <b-col cols="12" class="p-1 m-1" />
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      standardNav: [
        { value: '/', text: 'Home' },
        { value: '/contact/', text: 'Contact us' }
      ]
    }
  },
  computed: {
    ...mapGetters('services', ['serviceLinks']),
    // ...mapGetters('products', ['productLinks']),
    ...mapGetters('client', ['getClient']),
    services () {
      const services = this.serviceLinks
      return services
    },
    // products () {
    //   const products = this.productLinks
    //   return products
    // },
    contactInfo () {
      const client = this.getClient
      return client
    }

    // ...mapState({
    //   services: state => state.services.all,
    //   contactInfo: state => state.client.client
    // })
  }
}
</script>
<style scoped>
</style>
