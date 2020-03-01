<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="pt-7">
    <b-row>
      <!-- <b-col xs="12" sm="12" md="12" lg="2" /> -->
      <b-col cols="12" class="p-5 align-items-center">
        <h2 class="sectionHeader">
          {{ header }}
        </h2>
      </b-col>
    </b-row>
    <b-row>
      <!-- <b-col lg="2" /> -->
      <b-col lg="12" class="px-lg-10 text-center">
        <span class="text-medium" v-html="content" />
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
      default: 'What can we do for you?'
    },
    pcontent: {
      type: String,
      default: 'Everything we do is aimed at producing results that our clients want for their businesses.'
    }
  },
  computed: {
    header: function() {
      return this.pheader || 'Section'
    },
    content: function() {
      return this.pcontent || 'Section content'
    }
  }
}
</script>
<style scoped>
</style>
