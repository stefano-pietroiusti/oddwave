<template>
  <b-container id="mainContainer" fluid class="text-light text-left p-0">
    <HeaderComponentLanding :pheader="subheader" :psubtitle="subtitle" pbackground="cyan" />

    <HeaderComponent :pheader="header" pclass="text-large pt-5" />

    <HeaderComponent
      v-if="featuredProducts.length > 0"
      psubheader="Featured Packages with indicative pricing"
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
            The Odd Wave Ltd
            <br>
            North Shore, Auckland<br> New Zealand
          </p>
        </b-container>
      </b-container>
      <HeaderComponent :psubheader="featuresHeader" pcontainerclass="transparent" />
      <PromoComponent class="promoComponent" :features="features" variant="primary" />

      <TextImageComponent
        v-for="(item,i) in content"
        :key="i"
        :pcontent="{header: item.header, text: item.text, list: item.list, bgImage: item.bgImage, inlineImage: item.inlineImage, inlineImageText: item.inlineImageText, inlineImageRight: item.inlineImageRight }"
        :pstyle="(item.dark) ? { bgStyle: 'w-100 text-secondary text-left px-4 p-2', inlineImageStyle: item.inlineImageStyle} : { bgStyle: 'w-100 text-primary text-left  px-4 p-2', inlineImageStyle: item.inlineImageStyle}"
      />
      <ServicesComponent class="servicesComponent" :services="summaries" />
    </b-container>

    <!-- <PartnersComponent /> -->
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderComponentLanding from '@/components/HeaderComponentLanding'
import HeaderComponent from '@/components/HeaderComponent'
import PromoComponent from '@/components/PromoComponent'
import TextImageComponent from '@/components/TextImageComponent'
// import PartnersComponent from '@/components/PartnersComponent'
import ServicesComponent from '@/components/ServicesComponent'
import ProductComponent from '@/components/ProductComponent'

export default {
  components: {
    HeaderComponentLanding,
    HeaderComponent,
    PromoComponent,
    TextImageComponent,
    // PartnersComponent,
    ServicesComponent,
    ProductComponent
  },
  head () {
    let content = `${process.env.baseUrl}${this.$route.path}`
    content = content.slice(-1) !== '/' ? content + '/' : content
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords.join()
        }
      ]
    }
  },
  data (context) {
    const commonKeywords = [
      'website design agency Torbay Auckland New Zealand',
      'help with website design',
      'help with custom web design',
      'help with web application development',
      'help with online marketing',
      'help with SEO',
      'help with photography'
    ]
    return {
      title:
        'Website design & Online Marketing North Shore Auckland NZ',
      description:
        'Website developers & online marketers helping NZ businesses create professional websites. Promote your business with our online marketing, SEO & photography services.',
      header: 'PROFESSIONAL WEBSITE DESIGN WITH ONGOING ONLINE MARKETING SERVICES',
      subheader: 'Grow your business online',
      featuresHeader: 'Highlights of our Professional Website Design & Online Marketing',
      backgroundurl: 'nz.svg',
      headerImage: {
        color1: 'rgba(255, 0, 255, 0) 0%',
        color2: 'rgba(0, 255, 255, 0) 0%',
        url: 'oddwave.jpg',
        height: '20vh'
      },
      subtitle:
        "We're a kiwi technical consulting & internet marketing company here to help you with professional website design, online marketing & photography services from North Shore, Auckland, New Zealand. <br/>We market our clients' businesses as our own.",
      linkText: 'GET STARTED with a free consult',
      link: '/contact/',
      features: [
        {
          header: 'Website Design putting Users, Content & Mobile First',
          text:
            'We follow a website design approach that makes our websites and web applications usable by anyone and any device.',
          icon: ['fas', 'mobile-alt']
        },
        {
          header: 'Professional Web Development using Open Source Technologies',
          text:
            'We compliment open source website frameworks with our vanilla HTML, CSS & javascript development to create websites that are lean, quick, flexible & scalable. Take advantage of our future-proof way to grow your brand image, loyalty and sales online.',
          icon: ['fab', 'servicestack']
        },
        {
          header: 'A+ score in Accessibility, Best Practices & SEO',
          text:
            "Our websites are continuously tested and audited using Google's recommended open source tools to achieve an A+ score in performance, accessibility, best practices & SEO. ",
          icon: ['fas', 'users']
        },
        {
          header: 'Website Content for Users & Search',
          text:
            'We write structured content to be friendly to users, mobiles & search engines. We can also help you optimize your return on investment (ROI) from our managed search engine optimization (SEO) services with managed conversion tracking and reporting.',
          icon: ['fas', 'chart-line']
        }
      ],
      content: [
        {
          header: 'The Odd Wave of website & online marketing services & products',
          text:
            'The Odd Wave Ltd offers a range of website and online marketing services to support your business. We can help you with the following:',
          list: [
            'Designing for your users, brand, products & services',
            'Integrating, managing, structuring and optimising content for your users & internet search engines',
            'Helping you manage your online presence and keeping it competitive so you can focus more on your business',
            'Webmaster services',
            'Selecting a website name and registering a domain name',
            'Selecting a suitable web host in terms of Speed, Security, Location and Affordability'
          ]
        },
        {
          text:
            "Everything we do is aimed at producing results that our clients need for their businesses. We're based in Torbay, North Shore, Auckland, and are here to help everyone in New Zealand with their websites, online marketing, content management & technical support."
        }
      ],
      keywords: [
        ...commonKeywords,
        'Website Design Auckland NZ',
        'Professional Website Design North Shore',
        'Online Marketing Auckland NZ',
        'Professional photography North Shore'
      ]
    }
  },
  computed: {
    ...mapGetters('services', ['summaries']),
    ...mapGetters('products', ['getProductById', 'getFeaturedProducts']),
    featuredProducts () {
      const products = this.getFeaturedProducts()
      return products
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
  line-height: 1.5em
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
