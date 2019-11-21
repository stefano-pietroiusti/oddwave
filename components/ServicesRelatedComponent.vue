<template>
  <b-container id="relatedContainer" fluid class="text-primary text-center p-2 m-0">
    <b-row>
      <b-col
        sm="12"
        md="12"
        lg="12"
        xl="12"
        class="text-primary text-medium text-center relatedBackground"
      >
        Related Services
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="(item, i) in services"
        :key="i"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        class="text-left relatedForeground"
      >
        <b-button
          :to="`/services/${item.id}/`"
          :variant="`${item.variant}`"
          :class="`text-small text-center m-1` "
        >
          {{ item.landing.header }}
        </b-button>
      </b-col>
    </b-row>

    <!-- <span class="text-primary text-medium text-center">Related Services<br>

            <b-button
        v-for="(item, i) in services"
        :key="i"
        href="#"
        :to="`/services/${item.id}/`"
        :variant="`${item.variant}`"
        :class="`text-medium text-center m-1` "
      >{{ item.landing.header }}</b-button>
    </span>-->
    <!-- <b-row>
      <b-col
        v-for="(item, i) in services"
        :key="i"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        class=" text-left"
      >
        <nuxt-link
          :to="`/services/${item.id}/`"
          :title="item.id"
          :class="`text-${item.variant}`"
        >
          {{ item.landing.header }}
        </nuxt-link>
      </b-col>
    </b-row>-->
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
#relatedContainer {
  position: relative;
  border-radius: 11px;
  background-color: rgba(238, 238, 238, 0.5);
  width: 100%;
  text-align: left;
  letter-spacing: 0.2rem;
  font-weight: 700;
}

.relatedBackground {
  border-radius: 11px;
  /* background-color: #eee; */
  color: #000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.5;
    z-index: 1;
}
.relatedForeground {
  opacity: 1;
  z-index: 10;

}

</style>
