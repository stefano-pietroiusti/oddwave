<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="text-light text-left bg-primary footer">
    <b-row>
      <b-col md="6" lg="4" xl="4" class="pl-3 pt-3">
        <h2>{{ contactInfo.name }}</h2>
        <ul class="pl-2">
          <li v-for="item in standardNav" :key="item.value">
            <nuxt-link :to="item.value" class="a-dark">
              {{ item.text }}
            </nuxt-link>
          </li>
        </ul>
      </b-col>
      <b-col md="6" lg="4" xl="4" class="pl-3 pt-3">
        <h2>Services</h2>
        <ul class="pl-2">
          <!-- <nuxt-link v-for="item in services" :key="item.id" :to="'/services/' + item.id + '/'">
            <li>{{ item.linkTitle }}</li>
          </nuxt-link>-->
          <li v-for="item in services" :key="item.id">
            <nuxt-link :to="'/services/' + item.id + '/'">
              {{ item.linkTitle }}
            </nuxt-link>
          </li>
        </ul>
      </b-col>
      <b-col md="6" lg="4" xl="4" class="pl-3 pt-3">
        <h2>Work with us</h2>
        <h4 v-for="(item,i) in contactInfo.phone" :key="i" class="pl-2">
          <a :href="`tel:${item}`" :title="item">
            <i class="fa fa-phone fa-contact-dark fahover">&nbsp;</i>
            {{ item }}
          </a>
        </h4>
        <h4 class="pl-2">
          <a :href="`mailto:${contactInfo.email}`" :title="contactInfo.email">
            <!-- <i class="fa fa-envelope fa-contact"> Email us</i> -->
            <i class="fa fa-envelope fa-contact-dark fahover">&nbsp;</i>&nbsp;Email us
          </a>
        </h4>
      </b-col>
      <b-col class="clearfix" />
    </b-row>
    <b-row>
      <b-col class="pl-3 pt-0">
        <h2 class="pt-3">
          Join us
        </h2>
        <ul>
          <li>
            <a :href="contactInfo.fb" class="fa fa-facebook fahover" title="Connect with us via facebook" />&nbsp;&nbsp;
            <a
              :href="contactInfo.whatsapp"
              class="fa fa-whatsapp fahover"
              title="Connect with us via whatsapp"
            />
          </li>
        </ul>
      </b-col>
      <b-col class="clearfix" />
    </b-row>
    <b-row>
      <b-col cols="12" class="p-1 m-1" />
    </b-row>
  </b-container>
</template>
<script>
import { mapState } from 'vuex'
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
    ...mapState({
      services: state => state.services.all,
      contactInfo: state => state.client.client
    })
    // ...mapGetters({
    //   services: 'services/links',
    //   contactInfo: 'client/contactInfo'
    // })
  }
}
</script>
<style scoped>
</style>
