<template>
  <b-container fluid class="p-0 w-100 text-primary">
    <b-row no-gutters>
      <b-col sm="12" md="12" lg="12" xl="12" class="text-center w-100">
        <b-container v-if="summary" fluid class="productContainer text-primary text-center text-medium w-100">
          <h2 class="bg-white text-primary text-medium text-center">
            {{ product.header }}
          </h2>
          <h3 class="pt-2 text-center">
            {{ product.subheader }}
          </h3>
          <h2 class="pt-2  text-medium">
            <span id="price" class="text-success">${{ product.price.value }}</span> NZD + GST
          </h2>
        </b-container>
        <b-container v-else class="productContainer bg-white text-primary text-center text-large">
          <h2 class="bg-white text-primary text-large text-center">
            {{ product.header }}
          </h2>
          <h3 class="pt-5 text-center">
            {{ product.subheader }}
          </h3>
          <h2 class="pt-5">
            <span id="price" class="text-success text-large">${{ product.price.value }}</span> NZD + GST
          </h2>
        </b-container>
      </b-col>
    </b-row>
    <b-row v-if="product.features.length > 0" no-gutters>
      <b-col sm="12" md="12" lg="12" xl="12" class="text-center text-success pt-2">
        <h2>what you get?</h2>
      </b-col>
    </b-row>
    <b-row v-if="product.features.length > 0" no-gutters>
      <b-col sm="12" md="12" lg="12" xl="12" class="p-3">
        <b-container class="productContainer bg-primary text-primary text-left">
          <b-list-group
            v-for="(item, i) in product.features"
            :key="i"
            flush
            class="bg-primary text-secondary"
          >
            <b-list-group-item class="bg-primary text-secondary text-medium">
              <font-awesome-icon :icon="item.icon" :class="`fa text-success`" />
              &nbsp;{{ item.header }}
              <span v-if="item.text" class="text-small">({{ item.text }})</span>
            </b-list-group-item>
          </b-list-group>
        </b-container>
        <span class="text-success text-large text-center">
          <ButtonComponent btext="GET IN TOUCH" pvariant="outline-black" blink="/contact/" />
        </span>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import ButtonComponent from '@/components/ButtonComponent'
export default {
  components: {
    ButtonComponent
  },
  props: {
    summary: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object,
      default () {
        return {
          id: 'business-starter',
          variant: 'success',
          title: 'Business starter package',
          linkTitle: 'Business starter packag',
          description: 'Great value business starter web package',
          header: 'Business starter package',
          icon: ['fas', 'search'],
          subheader:
            'Universal for businesses of all types and sizes Start-ups',
          features: [
            {
              header: 'Website',
              text: "4 page website like the one you're looking at",
              icon: ['fas', 'search']
            },
            {
              header: 'Content structuring',
              text: 'Content writing and structuring',
              icon: ['fas', 'search']
            }
          ]
        }
      }
    }
  },
  computed: {
    variant () {
      return this.variant
    }
    // summary () {
    //   return this.summary
    // }
  }
}
</script>
<style scoped>
.productContainer {
  position: relative;
  border-radius: 11px;
  width: 100%;
  text-align: left;
  letter-spacing: 0.3rem;
  line-height: 3rem;
  padding: 1em;
  font-size: 1.5rem;
}

/* #productHeaderContainer {
  position: relative;
  border-radius: 11px;
  width: 100%;
  text-align: left;
  letter-spacing: 0.3rem;
  line-height: 4rem;
  padding: 1em;
  font-size: 1.5rem;
} */
.arrow {
  font-size: 5rem;
  font-stretch: 100%;
  line-height: 2rem;
  width: 100%;
}
</style>
