<template>
  <div>
    <Cloud
      :data="words"
      :font-size-mapper="fontSizeMapper"
      :on-word-click="onWordClick"
      :width="width"
      :height="height"
      :font="font"
      :padding="padding"
      :rotate="rotate"
    >
      />
    </cloud>
  </div>
</template>

<script>
import Cloud from 'vue-d3-cloud'
import { serviceCloud } from '../utils/serviceCloud.js'
// import R from 'ramda'

export default {
  name: 'Servicescloud',
  components: {
    Cloud
  },
  data () {
    return {
      words: serviceCloud,
      fontSizeMapper: word => Math.log2(word.value) * 3,
      onWordClick: (word) => {
        // window.alert(`go to service ${word.text}`)
        return false
      },
      width: '800',
      height: '250',
      font: 'impact',
      rotate: '-30',
      padding: 1
    }
  },
  computed: {
    services () {
      return this.$store.state.services.all
    }
  }
}
</script>
<style scoped>
#Servicescloud {
  background-color: #fff; width:1900px; height:450; text-align:centre; margin-top: 80px; opacity: 0.6;
}
</style>
