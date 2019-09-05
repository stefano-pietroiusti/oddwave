<template>
  <header class="text-center">
    <b-container fluid class="text-center">
      <b-row class="m-4">
        <b-col md="12">
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
          <h3>{{ psubtitle }}</h3>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
<script>
/* eslint-disable */
export default {
  props: ['pheader', 'psubheader', 'psubtitle', 'backgroundUrl']
}
</script>
