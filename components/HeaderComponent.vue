<template>
  <header class="text-center p-3 text-primary">
    <h1 v-if="pheader" class="p-5">
      {{ pheader }}
    </h1>
    <h2 v-if="psubheader" class="p-2">
      {{ psubheader }}
    </h2>
    <h3 v-if="psubtitle" class="p-5">
      {{ psubtitle }}
    </h3>

    <!-- <b-container fluid :class="fontcolor">
      <b-row v-if="pheader">
        <b-col class="py-4">
          <h1>{{ pheader }}</h1>
        </b-col>
      </b-row>
      <b-row v-if="psubheader" class="row py-4">
        <b-col>
          <h2>{{ psubheader }}</h2>
        </b-col>
      </b-row>
      <b-row v-if="psubtitle" class="row py-4">
        <b-col>
          <h3>{{ psubtitle }}</h3>
        </b-col>
      </b-row>
    </b-container> -->
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
