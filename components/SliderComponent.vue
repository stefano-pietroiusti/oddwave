<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="w-75 mx-auto text-center">
    <nuxt-link v-for="(item, i) in products" :key="i" :to="`/contact/`" :title="`${item.header}`" class="productLink">
      <b-card no-body class="cardMedium text-white bg-primary">
        <b-card-body>
          <b-card-header>
            <h2 v-if="item.price" class="text-medium">
              {{ item.header }}
              <br>
              ${{ item.price }}
              <br>
              {{ item.subheader }}
            </h2>
          </b-card-header>
          <b-card-text>
            <span class="text-small">{{ item.description }}</span>
          </b-card-text>
          <b-card-text class="text-left text-small">
            <b-list-group v-for="(feature, fi) in item.features" :key="fi" flush>
              <b-list-group-item class="text-white text-small bg-primary">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      style="fill: #ffffff;"
                      d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                    />
                  </svg>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"/></svg> -->
                </span>
                <span>{{ feature.header }}</span>
              </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card-body>
      </b-card>
    </nuxt-link>
  </b-container>
</template>
<script>
export default {
  props: {
    products: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            header: 'SEO',
            subheader: 'SEO'
          },
          {
            id: 2,
            header: 'Website',
            subheader: 'SEO',
            features: [
              {
                header: 'SEO Website Audit'
              },
              {
                header: 'Website updates',
                text:
                  'Updating web page headings, body text, keywords, title, description, meta-tags, links, HTML code errors'
              }
            ],
            price: 1,
            paymentPlan: ''
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
</style>
