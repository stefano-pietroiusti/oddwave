<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <p id="whyussection" class="pt-5" />
      </b-col>
      <b-col cols="12" class="p-5 align-items-center text-larger">
        <h2 :class="headerClass">
          {{ header }}
        </h2>
      </b-col>
      <b-col sm="12" md="12" lg="2" />
    </b-row>
    <b-row>
      <b-col
        v-for="(item, i) in pfeatures"
        :key="i"
        sm="12"
        md="6"
        lg="6"
        xl="3"
        class="featureCards"
      >
        <b-card-group deck>
          <b-card no-body class="cardLarge">
            <b-card-body>
              <div class="card-header bg-white">
                <img :src="`${ item.image }`" :alt="item.header" :title="item.header"><span class="px-2">{{ item.header }}</span>
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
    pheaderclass: {
      type: String,
      default: 'sectionHeader'
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
              'Website Design with A+ Google audit score in Performance, Accessibility, Best Practices & SEO',
            text:
              'Our websites are continuously tested and audited using Google’s recommended open source tools to achieve an A+ score in performance, accessibility, best practices & SEO.',
            icon: ['fas', 'users'],
            image: '/imgs/best-web-design.svg'
          },
          {
            header: 'Website Design that puts Users, Content & Mobile First',
            text:
              'We follow a user-oriented Website Design approach that makes our websites, web applications and content usable by anyone on any device.',
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
    },
    headerClass () {
      return this.pheaderclass || 'sectionHeader'
    }
  }
}
</script>
<style scoped>
</style>
