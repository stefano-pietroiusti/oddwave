<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container>
    <b-row v-if="articles">
      <b-col
        v-for="(item) in articles"
        :key="item.Title"
        sm="12"
        lg="12"
        class="p-5"
      >
        <h2>     {{ item.Title }}</h2>
        <VueShowdown
          :markdown="item.Body"
          flavor="github"
          :options="{ emoji: true }"
        />
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('strapi', ['getArticlesByCategory', 'getArticleById']),
    articles () {
      return [].concat(this.getArticleById(this.$route.params.id) || this.getArticlesByCategory(this.$route.params.category || this.$route.params.id))
    }
  }
}
</script>
<style scoped>

</style>
