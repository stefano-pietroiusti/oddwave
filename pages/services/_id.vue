<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="text-center mt-header w-100">
    <HeaderComponent :pheader="service.header" :psubheader="service.subheader" />
    <span v-for="(value, index) in service.content" :key="index">
      <p>{{ value }}</p>
    </span>
    <!-- <aside>
      <h3>Other services</h3>
      <ul>
        <li v:for="item in relatedServices">
          {{ item }}
         <nuxt-link :to="{name: 'services-id', params: {id: item.id}}">
            {{ item.header }}
          </nuxt-link>
        </li>
      </ul>
    </aside> -->
    </div>
    </div>
  </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
// import Contact from '@/components/Contact'
export default {
  components: {
    HeaderComponent
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
      header: 'header',
      subHeader: 'subHeader',
      items: ['item', 'item']
    }
  },
  computed: {
    service () {
      return this.$store.state.services.all.find(
        service => service.id === this.id
      )
    }
    // relatedServices () {
    //   return this.$store.state.services.all.filter(function (item) {
    //     return item.id !== this.id
    //   })
    // return this.$store.state.services.all.filter(function (item) {
    //   return item.id !== this.id
    // })
    // }
    // ,
    // relatedServices () {
    //   return this.services.filter(other => other.id != this.id)
    // }
  }
}
</script>

<style scoped>
</style>
