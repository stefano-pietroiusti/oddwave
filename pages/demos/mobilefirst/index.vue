<template>
  <b-container id="mainContainer" fluid class="text-light text-left p-0">
    <HeaderComponentLanding
      :pheader="client.subheader"
      :psubtitle="client.subtitle"
      pbackground="cyan"
    />
    <HeaderComponent :pheader="client.header" pclass="text-large pt-5" />
    <TextImageComponent
      v-for="(item,i) in client.content"
      :key="i"
      :pcontent="{header: item.header, text: item.text, list: item.list, bgImage: item.bgImage, inlineImage: item.inlineImage, inlineImageText: item.inlineImageText, inlineImageRight: item.inlineImageRight }"
      :pstyle="(item.dark) ? { bgStyle: 'w-100 text-secondary text-left px-4 p-2', inlineImageStyle: item.inlineImageStyle} : { bgStyle: 'w-100 text-primary text-left  px-4 p-2', inlineImageStyle: item.inlineImageStyle}"
    />
    <HeaderComponent :psubheader="client.featuresHeader" pcontainerclass="transparent" />
    <PromoComponent class="promoComponent" :features="client.features" variant="primary" />
    <HeaderComponent
      v-if="featuredProducts.length > 0"
      psubheader="Featured Packages"
      psubtitle="Flexible payment plans are available."
      pclass="text-center"
    />
    <span v-for="item in featuredProducts" :key="item.id">
      <ProductComponent :product="item" />
      <hr fluid class="hrprimary">
    </span>
    <b-container fluid class="roundedContainer text-primary">
      <b-container fluid class="backgroundContainer">
        <b-container fluid :style="gradient" class="align-items-center text-center">
          <p class="watermark">
            matihiko hangarau
            <br>pae tukutuku
            <br>kÅ«kara, pÄnui
            <br>Aotearoa
          </p>
        </b-container>
      </b-container>

      <ServicesComponent class="servicesComponent" :services="summaries" />
    </b-container>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderComponentLanding from '@/components/HeaderComponentLanding'
import HeaderComponent from '@/components/HeaderComponent'
import PromoComponent from '@/components/PromoComponent'
import TextImageComponent from '@/components/TextImageComponent'
import ServicesComponent from '@/components/ServicesComponent'
import ProductComponent from '@/components/ProductComponent'

export default {
  components: {
    HeaderComponentLanding,
    HeaderComponent,
    PromoComponent,
    TextImageComponent,
    ServicesComponent,
    ProductComponent
  },
  head () {
    let content = `${process.env.baseUrl}${this.$route.path}`
    content = content.slice(-1) !== '/' ? content + '/' : content
    return {
      title: this.client.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.client.description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.client.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.client.keywords.join()
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.jsonld), type: 'application/ld+json' }]
    }
  },
  data (context) {
    return {
      backgroundurl: 'nz.svg',
      headerImage: {
        color1: 'rgba(255, 0, 255, 0) 0%',
        color2: 'rgba(0, 255, 255, 0) 0%',
        url: 'oddwave.jpg',
        height: '20vh'
      },
      linkText: 'GET STARTED',
      link: '/contact/'
    }
  },
  computed: {
    ...mapGetters('services', ['summaries']),
    ...mapGetters('products', ['getProductById', 'getFeaturedProducts']),
    ...mapGetters('client', ['getClient']),
    client () {
      return this.getClient
    },
    featuredProducts () {
      const products = this.getFeaturedProducts()
      return products
    },
    jsonld () {
      if (!this.client) {
        return null
      }
      return {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        name: this.client.name,
        legalName: this.client.legalName,
        '@id': this.client['@id'],
        logo: this.client.logo,
        image: this.client.image,
        foundingDate: this.client.foundingDate,
        founders: this.client.founders,
        address: this.client.address,
        geo: this.client.geo,
        contactPoint: this.client.contactPoint,
        sameAs: this.client.sameAs,
        url: this.client.url,
        description: this.client.description,
        telephone: this.client.telephone,
        openingHoursSpecification: this.client.openingHoursSpecification,
        priceRange: this.client.priceRange
        // '@type': 'Organization',
        // name: this.client.name,
        // legalName: this.client.legalName,
        // url: this.client.url,
        // logo: this.client.logo,
        // foundingDate: this.client.foundingDate,
        // founders: this.client.founders,
        // address: this.client.address,
        // contactPoint: this.client.contactPoint,
        // sameAs: this.client.sameAs
      }
    },
    bannerImagePath () {
      if (!this.backgroundurl) {
        return
      }
      const fileName = this.backgroundurl
      return require(`~/assets/imgs/banner/${fileName}?size=1080`)
    },
    gradient () {
      return {
        backgroundImage: `url(${this.bannerImagePath})`,
        height: '100%',
        width: '100%',
        bottom: 0,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        textTransform: 'uppercase'
      }
    }
  },
  mounted () {
    // if (process.env.NODE_ENV !== 'production') {
    this.$ga.page(this.$route.path)
    // }
  }
}
</script>
<style scoped>
.backgroundContainer {
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.1;
}

.promoComponent {
  z-index: -2;
  opacity: 1;
}
.servicesComponent {
  z-index: 10;
  opacity: 1;
}
p.watermark {
  width: 100%;
  height: 100%;
  position: fixed;
  margin-left: 20%;
  top: 30%;
  pointer-events: none;
  font-family: inherit;
  color: #000;
  font-size: 5vw;
  z-index: 20;
  opacity: 0.5;
  line-height: 1.5em;
}

.roundedContainer {
  position: relative;
  border-radius: 11px;
  line-height: 3rem;
  font-weight: 300;
  width: 95%;
  z-index: 1;
}

#mainContainer {
  width: 100%;
}
</style>