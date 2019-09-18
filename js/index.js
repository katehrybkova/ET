const swiper_container = document.querySelector(".swiper-container")
const swiper_pagination = document.querySelector(".swiper-pagination")
const swiper_button_next = document.querySelector(".swiper-button-next")
const swiper_button_prev = document.querySelector(".swiper-button-prev")

var swiper = new Swiper(swiper_container, {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: swiper_pagination,
    clickable: true,
  },
  navigation: {
    nextEl: swiper_button_next,
    prevEl: swiper_button_prev,
  },
});