<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="blogContainer">
    <Nav id="navbar" class="container-fluid" :ptheme="theme" />

    <b-container
      fluid
      :style="gradient"
      class="blogBackground text-small align-items-center text-center"
    >
      <p class="watermark" />
    </b-container>
    <HeaderComponent
      pheader="Knowledge Sharing Blog"
      psubheader="Sharing insights is key to any company's success"
      psubtitle="Add a knowledge sharing blog to provide insights into your products, services and expertise. Watch this space :)"
      pcontainerclass="mt-7 mb-5 borderLeft"
    />
    <!-- POSTS: Index: {{ $store.state.articles.posts }} <br> Articles: {{ posts }}<br> -->
    <!-- <section
      v-for="item in $store.state.articles.posts"
      :key="item.elements.url.value"
    >
      <h3 v-html="item.elements.title.value" />
      <div v-html="item.elements.body.value" />
    </section> -->

    <b-container fluid>
      <b-row>
        <b-col cols="2">
          <p>
&nbsp;
          </p>
          <b-list-group v-b-scrollspy:listgroup-ex>
            <b-list-group-item
              v-for="item in $store.state.articles.posts"
              :key="item.elements.url.value"
              :href="'#' + item.elements.url.value"
              v-html="item.elements.url.value"
            />
          </b-list-group>
        </b-col>

        <b-col cols="10">
          <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:70%">
            <section
              v-for="item in $store.state.articles.posts"
              :key="item.elements.url.value"
            >
              <p :id="item.elements.url.value">
&nbsp;
              </p>
              <h3 v-html="item.elements.title.value" />
              <div v-html="item.elements.body.value" />
            </section>
          </div>
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
import Nav from '@/components/Nav'
import HeaderComponent from '@/components/HeaderComponent'
import WhyUsComponent from '@/components/WhyUsComponent'
import { mapGetters } from 'vuex'
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
      title:
        'Testimonials and custom designs to be brought to life online by the Odd Wave',
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
    ...mapGetters('articles', ['getPosts']),
    features () {
      return this.getClientFeatures
    },
    posts () {
      return this.getPosts
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
  async fetch ({ store, params }) {
    await store.dispatch('articles/getSetPosts')
  },
  mounted () {
    this.$ga.page(this.$route.path)
  }
}
</script>
<style scoped>
#blogContainer {
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

.blogBackground {
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

.blog {
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
.blog * {
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.blog img {
  max-width: 100%;
  vertical-align: top;
}
.blog figcaption {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.75);
}
.blog h3 {
  font-family: inherit;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 24px;
  margin: 3px 0;
  letter-spacing: 1px;
}
.blog h5 {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 200;
  margin: 0;
  text-transform: normal;
  color: #eee;
  letter-spacing: 1px;
}
.blog blockquote {
  padding: 0;
  margin: 0;
  font-style: italic;
  font-size: 1rem;
}
.blog a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.blog:hover figcaption,
.blog.hover figcaption {
  height: calc(40%);
}
</style>
