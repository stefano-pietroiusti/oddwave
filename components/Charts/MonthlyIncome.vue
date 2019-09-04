<script>
// https://vue-chartjs.org/guide/#vue-single-file-components

// Template Tag can not be merged

// Do not include the <template> tag to your .vue files.
// Vue can not merge templates. If you add an empty <template> tag,
// Vue will take the template from your component and not from the extended one, which will result in an empty template and errors.

import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    })
  }
}
</script>
