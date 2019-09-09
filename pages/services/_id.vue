<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="text-center mt-header w-100">
    <HeaderComponent :pheader="service.header" :psubheader="service.subheader" />
    <b-container fluid class="text-center w-100">
      <b-row>
        <b-col w="50">
          <Marketing
            :pheader="service.marketing.header"
            :plead="service.marketing.subheader"
            :ptext="service.marketing.content"
            :penquire="service.title"
            :pbgvariant="service.marketing.bgvariant"
            :ptextvariant="service.marketing.textvariant"
            :pbuttonvariant="service.marketing.buttonvariant"
          />
        </b-col>
        <b-col w="50">
          <D3Cloud :pwordcloud="service.cloud" />
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="text-center w-100">
      <p v-for="(value, index) in service.content" :key="index">
        {{ value }}
      </p>
      <!-- <AnimeBannerParticleComponent :pheader="service.header" /> -->
      <!-- <h3>Other services</h3>
      <span v-for="(value, index) in relatedservices" :key="index">
        <p>{{ value.title }}</p>
      </span>-->
      <!-- <ul>
        <li :key="item.id" v:for="item in relatedServices">
          <nuxt-link :to="{name: 'services-id', params: {id: item.id}}">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>-->
    </b-container>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import D3Cloud from '@/components/Clouds/D3Cloud'
import Marketing from '@/components/Marketing'
// import Contact from '@/components/Contact'
export default {
  components: {
    HeaderComponent,
    D3Cloud,
    Marketing
    // Contact
  },
  head () {
    return {
      title: this.service.title,
      meta: [
        { name: 'twitter:title', content: this.service.title },
        { name: 'twitter:description', content: this.service.content },
        { name: 'twitter:image', content: this.service.image }
      ]
    }
  },
  data () {
    return {
      id: this.$route.params.id,
      panimheader: 'be where the world is going'
    }
  },
  computed: {
    service () {
      return this.$store.state.services.all.find(
        service => service.id === this.id
      )
    },
    relatedservices () {
      const related = this.$store.state.services.all.filter(
        service => service.id !== this.id
      )
      return related
      // return { id: related.id, header: related.header, title: related.title }
    }
  }
}
</script>

<style scoped>
</style>
