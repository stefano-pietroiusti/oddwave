<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid>
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="3" />
      <b-col xs="12" sm="12" md="12" lg="1" class="p-5 text-nowrap align-items-center">
        <h2>{{ header }}</h2>
        <!-- <div class="underline" /> -->
      </b-col>
      <b-col xs="12" sm="12" md="12" lg="6" class="p-5 text-left ">
        <span class="text-medium" v-html="content" />
      </b-col>
      <b-col xs="12" sm="12" md="12" lg="1" />
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
  font-weight: 600;
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
