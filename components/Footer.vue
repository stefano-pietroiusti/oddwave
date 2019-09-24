<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="text-light text-left bg-primary footer">
    <b-row>
      <b-col cols="12" md="6" lg="6" xl="3" class="mt-3 p-2">
        <h2>The Odd Wave</h2>
        <ul>
          <nuxt-link v-for="item in standardNav" :key="item.value" :to="item.value">
            <li>{{ item.text }}</li>
          </nuxt-link>
        </ul>
        <!--
        <ul>
          <li>
            <a :href="social.fb" class="fa fa-facebook" />
            <a :href="social.linkedin" class="fa fa-linkedin" />
            <a :href="social.whatsapp" class="fa fa-whatsapp" />
          </li>
        </ul> -->
      </b-col>
      <b-col cols="12" md="6" lg="6" xl="3" class="mt-3 p-2">
        <h2>Services</h2>
        <ul>
          <nuxt-link
            v-for="service in services"
            :key="service.id"
            :to="{name: 'services-id', params: {id: service.id}}"
          >
            <li>{{ service.title }}</li>
          </nuxt-link>
        </ul>
      </b-col>

      <b-col cols="12" md="6" lg="6" xl="3" class="mt-3 p-2">
        <h2>Work with us</h2>
        <h4 v-html="phone1" />
        <h4 v-html="phone2" />
        <h4 v-html="email" />
      </b-col>
      <b-col cols="12" md="6" lg="6" xl="3" class="mt-3 p-2">
        <h2>Join us</h2>
        <ul>
          <li>
            <a :href="social.fb" class="fa fa-facebook" />
            <a :href="social.linkedin" class="fa fa-linkedin" />
            <a :href="social.whatsapp" class="fa fa-whatsapp" />
          </li>
        </ul>
      </b-col>
      <!-- <b-col class="clearfix" /> -->
    </b-row>
  </b-container>
</template>
<script>
export default {
  data () {
    return {
      copyright: '© 2019 Copyright The Odd Wave',
      email:
        '<a href="mailto:&#116;&#101;&#097;&#109;&#064;&#116;&#104;&#101;&#111;&#100;&#100;&#119;&#097;&#118;&#101;&#046;&#099;&#111;&#046;&#110;&#122;">&#116;&#101;&#097;&#109;&#064;&#116;&#104;&#101;&#111;&#100;&#100;&#119;&#097;&#118;&#101;&#046;&#099;&#111;&#046;&#110;&#122;</a>',
      phone1: '<a href="tel:+64 210 8658 172">+64 210 8658 172</a>',
      phone2: '<a href="tel:+64 210 8823 769">+64 210 8823 769</a>',
      poweredBy: 'powered by The Odd Wave suite of technologies',
      social: {
        fb: 'https://www.facebook.com/theoddwave',
        linkedin: '#',
        whatsapp: 'https://chat.whatsapp.com/DT09gv1r4fR7iD05jl7ing'
      },
      standardNav: [
        { value: '/', text: 'Home' },
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
