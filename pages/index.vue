<template>
  <b-container id="mainContainer" fluid class="text-light text-left p-0">
    <HeaderComponentLanding :pheader="subheader" :psubtitle="subtitle" pbackground="cyan" />

    <HeaderComponent :psubheader="headerLanding" pclass="text-large pt-5" />

    <ProductComponent :product="featuredProduct" />

    <b-container fluid class="roundedContainer text-primary">
      <b-container fluid class="backgroundContainer">
        <b-container
          fluid
          :style="gradient"
          class="align-items-center text-center"
        >
          <p class="watermark">
            The Odd Wave Ltd <br><br>New Zealand
          </p>
        </b-container>
      </b-container>
      <HeaderComponent :pheader="header" pcontainerclass="transparent" />
      <PromoComponent class="promoComponent" :features="features" variant="primary" />

      <TextImageComponent
        v-for="(item,i) in content"
        :key="i"
        :pcontent="{header: item.header, text: item.text, list: item.list, bgImage: item.bgImage, inlineImage: item.inlineImage, inlineImageText: item.inlineImageText, inlineImageRight: item.inlineImageRight }"
        :pstyle="(item.dark) ? { bgStyle: 'w-100 text-secondary text-left px-4 p-2', inlineImageStyle: item.inlineImageStyle} : { bgStyle: 'w-100 text-primary text-left  px-4 p-2', inlineImageStyle: item.inlineImageStyle}"
      />
      <ServicesComponent class="servicesComponent" :services="summaries" />
    </b-container>

    <!-- <ButtonComponent btext="Get started" blink="/contact/" /> -->
    <!-- <PartnersComponent /> -->
    <!-- <WavesComponent :footer="true" /> -->
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
// import AnimeBannerWordsComponent from '@/components/AnimeBannerWordsComponent'
import HeaderComponentLanding from '@/components/HeaderComponentLanding'
import HeaderComponent from '@/components/HeaderComponent'
// import ButtonComponent from '@/components/ButtonComponent'
import PromoComponent from '@/components/PromoComponent'
import TextImageComponent from '@/components/TextImageComponent'
// import PartnersComponent from '@/components/PartnersComponent'
import ServicesComponent from '@/components/ServicesComponent'
import ProductComponent from '@/components/ProductComponent'
// import WavesComponent from '@/components/WavesComponent'

export default {
  components: {
    // AnimeBannerWordsComponent,
    HeaderComponentLanding,
    HeaderComponent,
    // ButtonComponent,
    PromoComponent,
    TextImageComponent,
    // PartnersComponent,
    ServicesComponent,
    ProductComponent
    // WavesComponent
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
      'fun workshops auckland',
      'workshops auckland',
      'workshops rotorua',
      'workshops new zealand',
      'workshops NZ',
      'auckland',
      'rotorua',
      'new zealand',
      'NZ'
    ]
    return {
      title:
        'Web design, SEO and digital marketing services - North Shore, Auckland, Waikato, New Zealand',
      description:
        'Custom web design, web app development, search engine optimization, ppc, google ads management, cloud data engineering, Auckland, New Zealand',
      header: 'Custom Website Design & SEO',
      subheader: 'Grow your business online',
      headerLanding: 'SIMPLE. SMART. FAST. FLEXIBLE.',
      subheaderLanding:
        'We change the business life of our clients for good. The Odd Wave provides content-first mobile-first web solutions and online marketing services to take your business to the next level.',
      backgroundurl: 'nz.svg',
      headerImage: {
        color1: 'rgba(255, 0, 255, 0) 0%',
        color2: 'rgba(0, 255, 255, 0) 0%',
        url: 'oddwave.jpg',
        height: '20vh'
      },
      subtitle:
        "We provide custom website design & digital marketing solutions from Auckland, New Zealand. <br/>We market our clients' businesses as if they were our own.",
      // subtitle:
      //   'Create a mobile first website with us <br/> using web technologies that are lightweight, fast and trustworthy. Design and optimise your content with us to make it useful   this with content & digital marketing solutions.',

      linkText: 'GET STARTED',
      link: '/contact/',
      features: [
        {
          header: 'Content-First Mobile-First',
          text:
            'Content-First Mobile-First web design, development and testing for websites and web applications that can be used by everyone.',
          icon: ['fas', 'mobile-alt']
        },
        {
          header: 'Vanilla',
          text:
            'Take advantage of thoroughly tested, vanilla technologies for a quick, lightweight and flexible website that will help you grow your brand image, loyalty and sales.',
          icon: ['fab', 'servicestack']
        },
        {
          header: 'Continuous',
          text:
            'Websites from continuous testing and auditing for an A+ grade in accessibility, best practices and SEO.',
          icon: ['fas', 'users']
        },
        {
          header: 'Optimised',
          text:
            'We write and structure content to rank and remain searchable by search engines. Optimise your ROI from SEO with our conversion tracking and reporting.',
          icon: ['fas', 'chart-line']
        }
        // {
        //   header: 'Distributable',
        //   text: 'Manage your content with us to keep it optimised, accessible, searchable and distributable',
        //   icon: ['fas', 'tv']
        // },
      ],
      content: [
        {
          text:
            'The Odd Wave Ltd offers a range of digital services to support your business and increase sales:',
          list: [
            'Designing to your brand, features, products and services',
            'Integrating, managing, structuring and optimising content for search',
            'Helping you manage your online presence so you can focus more on your business',
            'Domain name registration',
            'Hosting - choosing and switching to reliable hosts in terms of Speed, Security, Location and Affordability'
          ]
        },
        {
          text:
            "Everything we do is aimed at producing results that our clients want for their businesses. We're based on the North Shore, Auckland, and service all of New Zealand."
        }
      ],
      footerContent: [
        {
          header: 'Our approach is simple and flexible',
          text:
            'We manage data and content so it can be distributed anywhere, we make content accessible for display on any device. We revise and optimize content in response to trending keyword searches to make it search engine friendly and increase your Google rankings'
        },
        {
          text:
            'We design and develop awesome mobile-first websites to present your content - web apps that are fast, responsive and look great anywhere.<br/>Choose between static, periodic publishing and real-time, universal mobile web apps. A range of fit-for-purpose services and hosting packages are also available to keep carbon footprints and running costs low.'
        },
        {
          text:
            "We're here to help you save money while reaching a more significant customer base than traditional methods."
        }
      ],
      keywords: [
        ...commonKeywords,
        'Web Design north shore', 'Web Design new zealand', 'Web Design NZ',
        'websites north shore', 'websites browns bay', 'websites albany', 'websites NZ', 'websites new zealand',
        'seo auckland', 'seo albany', 'seo browns bay', 'seo north shore', 'seo NZ', 'web app development albany', 'web app development browns bay', 'web app development north shore', 'web app development auckland', 'web app development NZ', 'web app development new zealand',
        'cloud data engineer auckland', 'cloud data engineer new zealand', 'photography browns bay', 'photography north shore', 'photography NZ', 'photography auckland', 'photography new zealand'

      ]
    }
  },
  computed: {
    ...mapGetters('services', ['summaries']),
    ...mapGetters('products', ['getProductById']),
    featuredProduct () {
      const product = this.getProductById('business-starter')
      return product
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
