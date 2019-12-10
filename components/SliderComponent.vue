<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid class="mx-auto text-center bg-white">
    <swiper :options="swiperOption" class="swiper-container mx-auto">
      <swiper-slide v-for="(item, i) in products" :key="i" class="swiper-slide">
        <nuxt-link :to="`/contact/`" :title="`${item.header}`" class="productLink">
          <b-card no-body class="text-white bg-primary h-100 cardMedium">
            <b-card-body>
              <h2 v-if="item.price" class="text-medium">
                {{ item.header }}
                <br>
                <br>
                <span class="text-mediumLarge">${{ item.price }}</span>
                <br>
                {{ item.subheader }}
              </h2>
              <b-card-text class="text-small">
                {{ item.description }}
              </b-card-text>
              <b-list-group v-for="(feature, fi) in item.features.slice(0, 5)" :key="fi" flush>
                <b-list-group-item class="text-white text-left text-small bg-primary">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        style="fill: #ffffff;"
                        d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                      />
                    </svg>
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"/></svg> -->
                  </span>
                  <span>{{ feature.header }}</span>
                </b-list-group-item>
              </b-list-group>
              <b-card-text class="text-small">
                <ButtonComponent />
              </b-card-text>
            </b-card-body>
          </b-card>
        </nuxt-link>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </swiper>
  </b-container>
</template>
<script>
import ButtonComponent from '@/components/ButtonComponent'

export default {
  components: {
    ButtonComponent
  },
  props: {
    products: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            header: 'SEO',
            subheader: 'SEO'
          },
          {
            id: 2,
            header: 'Website',
            subheader: 'SEO',
            features: [
              {
                header: 'SEO Website Audit'
              },
              {
                header: 'Website updates',
                text:
                  'Updating web page headings, body text, keywords, title, description, meta-tags, links, HTML code errors'
              }
            ],
            price: 1,
            paymentPlan: ''
          }
        ]
      }
    }
  },
  data () {
    return {
      swiperOption: {
        // centeredSlides: true,
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
        loopadditionalslides: 0,
        spaceBetween: 5,
        mousewheel: false,
        loopFillGroupWithBlank: true,
        effect: 'coverflow',
        coverflowEffect: {
          // rotate: 60,
          // slideShadows: false,
          depth: 3
          // stretch: -50

        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          991: {
            slidesPerView: 1,
            slidesOffsetBefore: 1,
            spaceBetween: 5
          },
          1199: {
            slidesPerView: 3,
            slidesOffsetBefore: 0,
            spaceBetween: 5
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  min-height: 100%;
}
.swiper-slide {
  display: inline-block;
  // align-content: center;
  // align-items: center;
  // align-self: center;
  align-self: stretch;
  width: auto;
  height: auto !important;
  background: #fff;
  border: #000;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-button-prev,
.swiper-button-next {
  width: 60px;
  height: 60px;
  background: white;
  border: 2px solid grey;
  color: grey;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 60px;
  z-index: 9999;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: white;
  border: 2px solid black;
  color: black;
}
</style>
