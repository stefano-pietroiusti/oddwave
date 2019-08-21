<template>
  <div class="container">
    <article>
      <h1 class="title">
        {{ service.title }}
      </h1>
      <p>{{ service.content }}</p>
    </article>
    <!-- <aside>
      <h3>Other services</h3>
      <ul>
        <li v:for="item in relatedServices">
          <nuxt-link :to="{name: 'services-id', params: {id: related.id}}">{{ related.title }}</nuxt-link>
        </li>
      </ul>
    </aside> -->
  </div>
</template>

<script>
export default {
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
      id: this.$route.params.id
    }
  },
  computed: {
    service () {
      // return this.services.find(service => service.id === this.id)
      return this.$store.state.services.all.find(
        service => service.id === this.id
      )
      // return this.$store.state.services.all.find(service => service.id === this.id)
    },
    relatedServices () {
      return this.$store.state.services.all.filter(function (item) {
        // return item.id.match(this.id)
        return item.id !== this.id
      })
    }
    // ,
    // relatedServices () {
    //   return this.services.filter(other => other.id != this.id)
    // }
  }
}
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
