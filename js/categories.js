const swiper_3 = document.querySelector(".swiper3")
const swiper_pagination1 = document.querySelector(".swiper-pagination1")
const swiper_button_next1 = document.querySelector(".swiper-button-next1")
const swiper_button_prev1 = document.querySelector(".swiper-button-prev1")

const swiper1 = new Swiper(swiper_3, {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: swiper_pagination1,
    clickable: true,
  },
  navigation: {
    nextEl: swiper_button_next1,
    prevEl: swiper_button_prev1,
  },
});

// close menu with swipe
const menuBlock = document.querySelector(".menuBlock");
const checkbox = document.querySelector("#idishka");

let posXStart, posXEnd;

function positionHandler(e) {
  if (e.type === "touchstart") {
    posXStart = e.changedTouches[0].clientX;
  }
  if (e.type === "touchend") {
    posXEnd = e.changedTouches[0].clientX;
  }
}

const moovTrigger = function () {
  if ((posXStart - posXEnd)>20) {
    let event = document.createEvent('MouseEvents');
    event.initMouseEvent( 'click' );
    checkbox.dispatchEvent(event);
  }
}

//расскоментируй когда присоединишь на страницу с менюшкой

// menuBlock.addEventListener('touchstart', positionHandler, false);
// menuBlock.addEventListener('touchend', (e) => {
//   positionHandler(e);
//   moovTrigger()
// }, false);