<template>
  <header class="text-center p-3">
    <b-container fluid :class="fontcolor">
      <b-row>
        <b-col class="p-3">
          <h1>{{ pheader }}</h1>
        </b-col>
      </b-row>
      <b-row v-if="psubheader" class="row">
        <b-col>
          <h2>{{ psubheader }}</h2>
        </b-col>
      </b-row>
      <b-row v-if="psubtitle" class="row m-3">
        <b-col>
          <h3>
            {{ psubtitle }}
          </h3>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
<script>
/* eslint-disable */
export default {
 props: {
    pheader: {
      type: String,
      default: ''
    },
        psubheader: {
      type: String,
      default: ''
    },
        psubtitle: {
      type: String,
      default: ''
    },
    pbgimage: {
      type: Object,
      default() {
        return {
          color1: 'rgba(85, 255, 0, 0.2)',
          color2: 'rgba(0, 255, 255, 0.5)',
          url: '/imgs/seodigital.jpg'
        }
      }
    },
    pstyle: {
      type: Object,
      default() {
        return { color: 'text-primary', buttonVariant: 'info' }
      }
    }
  },
  computed: {
    fontcolor() {
      return this.pstyle.color
    }
  }
}
</script>
