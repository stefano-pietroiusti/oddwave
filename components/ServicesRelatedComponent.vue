<template>
  <b-container fluid role="tablist" class="p-5 w-100 text-secondary text-left bg-gunmetal">
    <h5>Related Services</h5>
    <b-row>
      <b-col
        v-for="(item, i) in services"
        :key="i"
        sm="12"
        md="6"
        lg="4"
        xl="3"
      >
        <b-card no-body class="my-0 w-100">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" :to="`/services/${item.id}/`" variant="info" class="text-medium">
              {{ item.landing.header }}
            </b-button>
          </b-card-header>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    services: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            header: 'SEO',
            text:
              'Continuous testing and auditing for an A+ grade in Performance, Accessibility, Best Practices and SEO',
            icon: ['fas', 'chart-line'],
            landing: {
              header: 'header',
              content: 'text'
            }
          },
          {
            id: 2,
            header: 'Vanilla Technology',
            text:
              'Take advantage of thoroughly tested, vanilla technologies to guuarantee a quick, lightweight website for all devices',
            icon: ['fas', 'chart-line'],
            landing: {
              header: 'header',
              content: 'text'
            }
          }
        ]
      }
    }
  }
}
</script>
<style scoped>

</style>
