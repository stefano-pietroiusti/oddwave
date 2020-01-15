<template>
  <div id="portfoliosContainer">
    <Nav id="navbar" class="container-fluid" :ptheme="theme" />
    <b-container
      fluid
      :style="gradient"
      class="portfoliosBackground text-small align-items-center text-center"
    >
      <p class="watermark" />
    </b-container>
    <HeaderComponent
      pheader="Portfolio"
      psubheader="Because First impressions matter. "
      psubtitle="We work with you to create a beautiful websites whether you're selling products, services, software or expertise. Watch this space :)"
      pcontainerclass="mt-7 mb-5 borderLeft"
    />
    <b-container v-if="productPortfolios" fluid class="w-100">
      <b-row>
        <b-col
          v-for="item in productPortfolios"
          :key="item.text"
          sm="12"
          md="12"
          lg="6"
          xl="4"
        >
          <figure class="portfolio">
            <img
              v-if="item.image"
              :alt="item.text"
              :src="`/imgs/samples/${item.image}`"
              class="w-100 h-100"
            >
            <figcaption>
              <h3 v-if="item.author">
                {{ item.author }}
              </h3>
              <h5 v-if="item.company">
                {{ item.company }}
              </h5>
              <blockquote v-if="item.text">
                <p>{{ item.text }}</p>
              </blockquote>
            </figcaption>
            <!-- <a v-if="item.link" :href="item.link" /> -->
          </figure>
        </b-col>
      </b-row>
    </b-container>

    <div class="m-0 pb-5 bg-transparent">
      <p id="whyussection" class="p-3" />
      <WhyUsComponent pheader="Why Us?" class="align-self-center" :pfeatures="features" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Nav from '@/components/Nav'
import HeaderComponent from '@/components/HeaderComponent'
import WhyUsComponent from '@/components/WhyUsComponent'
export default {
  components: {
    Nav,
    HeaderComponent,
    WhyUsComponent
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
          hid: 'og:title',
          name: 'og:title',
          content: this.title
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
        }
      ]
    }
  },
  data (context) {
    const commonKeywords = [
      'help with website design',
      'help with custom Website Design',
      'help with web application development',
      'help with Digital Marketing',
      'help with SEO',
      'help with photography'
    ]
    return {
      title: 'Testimonials and custom designs to be brought to life online by the Odd Wave',
      description:
        'Testimonials and samples of custom designs for development by the Odd Wave Digital',
      backgroundurl: 'nz.svg',
      backgroundImage: {
        color1: 'rgba(102, 126, 234, 1)',
        color2: 'rgba(118, 75, 162, 1)',
        url: 'nz.svg',
        height: 100
      },
      style: { bgStyle: 'text-secondary text-center' },
      keywords: [...commonKeywords],
      theme: 'contact'
    }
  },
  computed: {
    ...mapGetters('products', ['getPoductPortfolios']),
    ...mapGetters('client', ['getClientFeatures']),
    features () {
      return this.getClientFeatures
    },
    productPortfolios () {
      return this.getPoductPortfolios
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
        textTransform: 'uppercase',
        opacity: 0.05
      }
    }
  },
  mounted () {
    this.$ga.page(this.$route.path)
  }

}
</script>
<style scoped>
#portfoliosContainer {
  background: transparent;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

p.watermark {
  width: 100%;
  height: 100%;
  position: fixed;
  margin-left: 20%;
  top: 35%;
  pointer-events: none;
  font-family: inherit;
  color: #000;
  font-size: 5vw;
  z-index: -1;
  opacity: 0.5;
}

.portfoliosBackground {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.1;
}

.portfolio {
  font-family: inherit;
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 0;
  min-width: 400px;
  max-width: 100%;
  color: #ffffff;
  text-align: left;
  font-size: 0.8rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.portfolio * {
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.portfolio img {
  max-width: 100%;
  vertical-align: top;
}
.portfolio figcaption {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.75);
}
.portfolio h3 {
  font-family: inherit;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 24px;
  margin: 3px 0;
    letter-spacing: 1px;
}
.portfolio h5 {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 200;
  margin: 0;
  text-transform: normal;
  color: #eee;
  letter-spacing: 1px;
}
.portfolio blockquote {
  padding: 0;
  margin: 0;
  font-style: italic;
  font-size: 1rem;
}
.portfolio a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.portfolio:hover figcaption,
.portfolio.hover figcaption {
  height: calc(40%);
}

</style>
