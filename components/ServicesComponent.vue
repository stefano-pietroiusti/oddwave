<template>
  <nuxt-link :to="url" :style="gradient" class="text-secondary featurelink">
    <b-container id="feature" fluid class="feature p-0 m-0" :style="gradient">
      <b-row class="align-items-center">
        <b-col class="w-100 h-100 m-0 p-0" lg="6" md="12" sm="12">
          <img
            fluid
            class="service_img"
            :src="serviceImagePath"
            :srcset="serviceImagePath.srcSet"
            alt="AA Directions"
          >
        </b-col>
        <b-col class="w-100 m-0 p-5 bg-transparent" lg="6" md="12" sm="12">
          <h2 class="text-secondary">
            {{ header }}
          </h2>
          <p class="text-secondary py-3">
            {{ content }}
          </p>
          <h3 class="text-secondary readmore pt-3">
            Find out more
          </h3>
        </b-col>
      </b-row>
    </b-container>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    pheader: {
      type: String,
      default: 'Services'
    },
    pid: {
      type: String,
      default: 'seo'
    },
    pcontent: {
      type: String,
      default: 'seo'
    },
    ptext: {
      type: Object,
      default () {
        return {
          header: 'header',
          content: 'text'
        }
      }
    },
    pimage: {
      type: Object,
      default () {
        return {
          color: 'rgba(39,62,84,0.82)',
          url: 'ppc.jpg'
        }
      }
    }
  },
  computed: {
    serviceImagePath () {
      if (!this.pimage.url) {
        return
      }
      const fileName = this.pimage.url
      //  return `~/assets/imgs/banner/${fileName}`
      return require(`~/assets/imgs/banner/${fileName}`)
    },
    header () {
      return this.ptext.header
    },
    content () {
      return this.ptext.content
    },
    url () {
      return `/services/${this.pid}/`
    },
    gradient () {
      return {
        background: `linear-gradient(${this.pimage.color} 0%, ${this.pimage.color} 100%)`
        // width: '100%',
        // height: `${this.pbgimage.height}`,
        // backgroundAttachment: 'fixed',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // textTransform: 'uppercase'
      }
    }
  }
}
</script>
<style scoped>
.feature {
  background-image: linear-gradient(white, black);
  background-size: cover;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  filter: brightness(100%);
  -webkit-transition: 200ms -webkit-filter linear;
  -moz-transition: 200ms -moz-filter linear;
  -moz-transition: 200ms filter linear;
  -ms-transition: 200ms -ms-filter linear;
  -o-transition: 200ms -o-filter linear;
  transition: 200ms filter linear, 200ms -webkit-filter linear;
}
.service_img {
  /* background: rgba(39,62,84,0.82); */
  overflow: hidden;
  height: 100%;
  z-index: 2;
  text-decoration: none;
}

.feature:hover {
  text-decoration: none;
  filter: brightness(110%);
}
.featurelink:hover {
  text-decoration: none;
  filter: brightness(110%);
}

.readmore {
  border-top: 1px solid white;
  color: white;
  display: block;
  font-size: 1em;
  text-transform: uppercase;
  font-family: 'Exo 2', sans-serif;
  font-weight: 500;
}

.service_img {
  background-image: linear-gradient(white, black);
  object-fit: cover;
  width: 100%;
  height: 100%;
  height: 25%;
  z-index: 1;
  /* background-blend-mode: saturation; */
  /* -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); */
}

.li_item {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  padding-left: 24px;
  font-size: 16px;
  font-size: 1rem;
}
</style>
