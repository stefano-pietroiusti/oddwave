<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid>
    <b-row>
      <b-col lg="2" />
      <b-col lg="8" class="p-5 align-items-center text-larger">
        <h2 class="sectionHeader">
          {{ header }}
        </h2>
      </b-col>
      <b-col lg="2" />
    </b-row>
    <b-row>
      <b-col
        v-for="(item, i) in pfeatures"
        :key="i"
        sm="12"
        md="12"
        lg="6"
        xl="6"
        class="featureCards"
      >
        <b-card no-body class="cardLarge">
          <b-card-body>
            <div class="card-header-custom" :style="`background: transparent url('${ item.image }') 0% 0% no-repeat padding-box;`">
              <div class="card-header-text">
                {{ item.header }}
              </div>
            </div>
            <div class="card-text">
              {{ item.text }}
            </div>
          </b-card-body>
        </b-card>

        <!-- <div class="text-center bg-feature h-100">
          <h4>
            <font-awesome-icon
              :icon="
                item.icon"
              :class="`fa text-large text-${variant} my-2 fa-fw`"
            />
          </h4>
          <div class="container text-primary bg-feature">
            <h6 class="text-primary">
              {{ item.header }}
            </h6>
            <p v-if="item.text">
              {{ item.text }}
            </p>
            <ul v-if="item.list" class="text-left pl-5">
              <li v-for="(litem, i) in item.list" :key="i">
                {{ litem }}
              </li>
            </ul>
          </div>
        </div>-->
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
.sectionHeader {
  font-weight: 600;
  display: inline-block;
  padding-bottom: 5px;
  position: relative;
  color: #00c3ff;
}

.sectionHeader:before {
  content: '';
  position: absolute;
  width: 30%;
  height: 5px;
  bottom: 0;
  left: 25%;
  border-bottom: 5px solid #00c3ff;
}
</style>
