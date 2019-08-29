<!-- eslint-disable vue/no-v-html -->
<template>
  <section>
    <!-- <ServicesHeader :header="service.header" subheader:="service.subheader" /> -->
    <header>
      <div class="container-fluid servicesHeader">
        <div class="row">
          <div class="col">
            <h1>{{ service.header }}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2>{{ service.subheader }}</h2>
          </div>
        </div>
      </div>
    </header>
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
// import ServicesHeader from '@/components/ServicesHeader'
// import ServicesContent from '@/components/ServicesContent'
// import Contact from '@/components/Contact'
export default {
  components: {
    // ServicesHeader,
    // ServicesContent,
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
      // return this.services.find(service => service.id === this.id)
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

// export default {
//   components: {
//     ServicesHeader,
//     ServicesContent,
//     Contact
//   },
//   head () {
//     return {
//       meta: [
//         { name: 'twitter:title', content: this.service.title },
//         { name: 'twitter:description', content: this.service.description },
//         { name: 'twitter:image', content: this.service.image }
//       ]
//     }
//   },
//   computed: {
//     service () {
//       // return this.$store.state.services.all.find(service => service.id === this.id)
//       const service = this.$store.state.services.all.find(
//         service => String(service.id) === this.id
//       )
//       if (!service) {
//         return new Error({ message: 'service not found', statusCode: 404 })
//       }
//       return service
//     },
//     relatedServices () {
//       return this.$store.state.services.all.filter(function (item) {
//         return item.id !== this.id
//       })
//     },
//     validate ({ params }) {
//       return !isNaN(+params.id)
//     }
//   }
// }
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
</style>
