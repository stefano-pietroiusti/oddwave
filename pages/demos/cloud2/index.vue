<template>
  <div id="app">
    <wordcloud
      :data="defaultWords"
      name-key="name"
      value-key="value"
      :color="myColors"
      :show-tooltip="true"
      :word-click="wordClickHandler"
    />
  </div>
</template>

<script>
// if (process.client) {
//   require('external_library')
// }
import wordcloud from 'vue-wordcloud'

export default {
  name: 'App',
  components: {
    wordcloud
  },
  data () {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      defaultWords: [{
        'name': 'Cat',
        'value': 26
      },
      {
        'name': 'fish',
        'value': 19
      },
      {
        'name': 'things',
        'value': 18
      },
      {
        'name': 'look',
        'value': 16
      },
      {
        'name': 'two',
        'value': 15
      },
      {
        'name': 'fun',
        'value': 9
      },
      {
        'name': 'know',
        'value': 9
      },
      {
        'name': 'good',
        'value': 9
      },
      {
        'name': 'play',
        'value': 6
      }
      ]
    }
  },
  methods: {
    wordClickHandler (name, value, vm) {
      console.log('wordClickHandler', name, value, vm)
    }
  }
}
</script>
<style scoped>
</style>
