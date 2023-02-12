import Swiper, { Pagination } from 'swiper'

import 'swiper/swiper.scss'
import 'swiper/modules/pagination/pagination.scss'

const swiper = new Swiper('.swiper', {
  modules: [Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active'
  },

  slidesPerView: 2,

  spaceBetween: 204,

  centeredSlides: true,

  slidesOffsetBefore: -16,

  breakpoints: {
    768: {
      enabled: false
    }
  }
})
