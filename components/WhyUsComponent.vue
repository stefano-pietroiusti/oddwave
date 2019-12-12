<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12" md="12" lg="2" />
      <b-col sm="12" md="12" lg="8" class="p-5 align-items-center text-larger">
        <p id="whyussection" class="p-3" />
        <h2 class="sectionHeader">
          {{ header }}
        </h2>
      </b-col>
      <b-col sm="12" md="12" lg="2" />
    </b-row>
    <b-row>
      <b-col sm="12" md="12" lg="12" xl="12" class="featureCards">
        <b-card-group deck>
          <b-card v-for="(item, i) in pfeatures" :key="i" no-body class="cardLarge">
            <b-card-body>
              <!-- <div
                class="card-header-custom clearfix"
                :style="`background: transparent url('${ item.image }') 0% 0% no-repeat padding-box;`"
              >
               <div class="card-header-text clearfix">
                  {{ item.header }}
                </div>
              </div>
              <div
                style="width: 100%; height: 50px; float:left; display:inline-block"
                class="clearfix"
              /> -->
              <div class="card-header clearfix text-left bg-white">
                <img :src="`${ item.image }`" :alt="item.header"> {{ item.header }}
              </div>
              <div class="card-text clearfix">
                {{ item.text }}
              </div>
            </b-card-body>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    pheader: {
      type: String,
      default: ''
    },
    pvariant: {
      type: String,
      default: 'info'
    },
    pfeatures: {
      type: Array,
      default() {
        return [
          {
            header:
              'Web design with A+ Google audit score in Performance, Accessibility, Best Practices & SEO',
            text:
              'Our websites are continuously tested and audited using Google’s recommended open source tools to achieve an A+ score in performance, accessibility, best practices & SEO.',
            icon: ['fas', 'users'],
            image: '/imgs/best-web-design.svg'
          },
          {
            header: 'Web Design that puts Users, Content & Mobile First',
            text:
              'We follow a user-oriented web design approach that makes our websites, web applications and content usable by anyone on any device.',
            icon: ['fas', 'users'],
            image: '/imgs/best-web-design.svg'
          }
        ]
      }
    }
  },
  computed: {
    header: function() {
      return this.pheader || 'Why Us?'
    }
  }
}
</script>
<style scoped>
</style>
