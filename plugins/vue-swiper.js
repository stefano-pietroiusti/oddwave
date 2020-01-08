import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/css/swiper.css'

const options = {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}

Vue.use(VueAwesomeSwiper, options)
