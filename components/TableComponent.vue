<template>
  <b-container fluid class="p-5">
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="12" class="px-5 align-items-center text-larger">
        <h2>{{ header }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="12" class="pt-5 px-5 align-items-center text-larger">
        <b-table
          small
          caption-top
          responsive
          hover
          bordered
          outlined
          dark
          fixed
          :items="items"
          :fields="fields"
          class="text-center"
        >
          <!-- A custom formatted column -->
          <template v-slot:cell(platform)="data">
            <span class="w-100">
              <img
                :src="data.item.logo"
                :alt="data.value"
                :text=" data.value"
                style="max-width: 200px"
              >
              <br>
              <b>{{ data.value }}</b>
            </span>
          </template>

          <template v-slot:cell(price)="data">
            <div align-h="center">
              {{ data.value }}
            </div>
          </template>

          <template v-slot:cell(transactions)="data">
            <div align-v="center">
              {{ data.value }}
            </div>
          </template>

          <template v-slot:cell(highlights)="data">
            <div class="text-left align-middle">
              {{ data.value }}
            </div>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="12" class="px-5 text-left text-larger">
        <ul>
          <h3>References</h3>
          <li>
            <a href="https://magento.com/sites/default/files8/2019-10/Magento-Shopify-Comparison-Guide-v2.pdf">Magento vs Shopify: Selecting the best commerce platform for your business</a>
          </li>
          <li>
            <a href="https://magento.com/solutions/small-business">Magento for small business commerce</a>
          </li>
          <li>
            <a href="https://www.shopify.co.nz/online/ecommerce-solutions">Shopify online stores</a>
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    pheader: {
      type: String,
      default: ''
    },
    features: {
      type: Array,
      default () {
        return [
          {
            id: 'testing',
            header: 'Continuous Testing',
            text:
              'Continuous testing and auditing for an A+ grade in Performance, Accessibility, Best Practices and SEO',
            image: 'fa-phone'
          },
          {
            id: 'vanilla',
            header: 'Vanilla Technology',
            text:
              'Take advantage of thoroughly tested, vanilla technologies to guuarantee a quick, lightweight website for all devices',
            image: 'fa-envelope'
          }
        ]
      }
    }
  },
  data () {
    return {
      fields: [
        // A column that needs custom formatting
        { key: 'platform', label: 'eCommerce Platform' },
        { key: 'price' },
        { key: 'transactions', label: 'Transaction Costs %' },
        { key: 'highlights' }
      ],
      items: [
        {
          logo: '/imgs/technologies/magento.png',
          platform: 'Magento Open Source Cloud Server',
          price: '$$ ',
          transactions: '0',
          highlights:
            'Open-source e-commerce, suitable for fast-growing small businesses, evolves as your business grows and changes over time, supports any catalog and multi-store requirements, ready-to-go hosted solution on Google Cloud GCE, flexibile to scale and compete in today’s fast-moving ecommerce world, owned by you.'
        },
        {
          logo: '/imgs/technologies/prestashop.png',
          platform: 'PrestaShop Open Source Cloud Server',
          price: '$$',
          transactions: '0',
          highlights:
            'Quick and easy Open-source e-commerce, flexible, no limits to customisation, ready-to-go hosted solution, owned by you.'
        },
        {
          logo: '/imgs/technologies/shopify.png',
          platform: 'Shopify Basic',
          price: '$',
          transactions: '$$',
          highlights:
            'Quick and easy, paid solution, hosted and owned by Shopify.'
        }
        // { platform: 'Magento Commerce Cloud', cost: '$$', transaction_cost: '', highlights: 'Enterprise-level eCommerce solution, suitable for more complex catalog, multi-store requirements, no limit to felxibility and scalability' },
        // { platform: 'Shopify Plus', cost: '$$', transaction_cost: '$$', highlights: 'Enterprise-level eCommerce solution, suitable for straightforward requirements, ' }
      ],
      tableVariants: [
        'primary',
        'secondary',
        'info',
        'danger',
        'warning',
        'success',
        'light',
        'dark'
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: '',
      noCollapse: false
    }
  },
  computed: {
    header () {
      return this.pheader || 'Section'
    }
  }
}
</script>
<style scoped>
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
.align-items-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
