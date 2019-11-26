<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid>
    <b-row>
      <b-col lg="3" />
      <b-col lg="1" class="w-20 p-5 flex-fixed-width-item text-nowrap align-items-center">
        <h2>{{ header }}</h2>
        <!-- <div class="underline" /> -->
      </b-col>
      <b-col lg="6" class="w-80 p-5 text-left flex-fixed-width-item">
        <span class="text-medium" v-html="content" />
      </b-col>
      <b-col lg="1" />
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
    pcontent: {
      type: String,
      default: ''
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
.spanImage {
  padding-left: 25px;
  display: inline-block;
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h2 {
  font-weight: 300;
  display: inline-block;
  padding-bottom: 5px;
  position: relative;
  color: #00c3ff;
}

h2:before {
  content: '';
  position: absolute;
  width: 30%;
  height: 5px;
  bottom: 0;
  left: 25%;
  border-bottom: 5px solid #00c3ff;
}

.underline {
  content: '';
  position: absolute;
  width: 50%;
  height: 5px;
  bottom: 0;
  left: 25%;
  background-color: black;
}

#aboutus {
  margin-top: 5em;
}

@media screen and (max-width: 992px) {
  #aboutus {
    margin-top: 3em;
  }
}
</style>
