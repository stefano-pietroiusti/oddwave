<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid>
    <b-row>
      <b-col lg="2" />
      <b-col lg="8" class="pt-5 align-items-center text-larger">
        <h2>{{ header }}</h2>
      </b-col>
      <b-col lg="2" />
    </b-row>
    <b-row>
      <b-col lg="2" />
      <b-col lg="8" class="p-3">
        <span class="text-medium" v-html="content" />
      </b-col>
      <b-col lg="2" />
    </b-row>
    <b-row>
      <b-col lg="2" />
      <b-col lg="8" class="p-5 align-items-center  text-medium">
        <b-button
          pill
          variant="red"
          to="/contact/"
          class="px-3 whyusbutton justify-content-center animated pulse delay-1s text-white text-medium"
        >
          Get in Touch
        </b-button>
      </b-col>
      <b-col lg="2" />
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
h2 {
  font-weight: bold;
  display: inline-block;
  padding-bottom: 5px;
  position: relative;
  color: #000;
  text-transform: none
}

/* h2:before {
  content: '';
  position: absolute;
  width: 30%;
  height: 5px;
  bottom: 0;
  left: 25%;
  border-bottom: 5px solid #00c3ff;
} */

/* .underline {
  content: '';
  position: absolute;
  width: 50%;
  height: 5px;
  bottom: 0;
  left: 25%;
  background-color: black;
} */

/* #aboutus {
  margin-top: 5em;
}

@media screen and (max-width: 992px) {
  #aboutus {
    margin-top: 3em;
  }
} */
</style>
