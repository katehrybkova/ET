// const slides = document.getElementsByClassName("mySlides");
// const dots = document.querySelectorAll(".dot");
// const dot1 = document.querySelector(".dot1");
// const dot2 = document.querySelector(".dot2");
// const dot3 = document.querySelector(".dot3");
// const dot4 = document.querySelector(".dot4");
// const mainBlock = document.querySelector(".mainBlock");
// let posXStart, posXEnd;



// function positionHandler(e) {
//   if (e.type === "touchstart") {
//     posXStart = e.changedTouches[0].clientX;
//   }
//   if (e.type === "touchend") {
//     posXEnd = e.changedTouches[0].clientX;
//   }
// }

// const moovTrigger = function () {
//   if (posXStart < posXEnd) {
//     plusSlides(-1)
//     console.log("left")
//   }
//   if (posXStart > posXEnd) {
//     plusSlides(1)
//     console.log("right") 
//   }
// }


// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }




// mainBlock.addEventListener('touchstart', positionHandler, false);
// mainBlock.addEventListener('touchend', (e) => {
//   positionHandler(e);
//   moovTrigger()
// }, false);


// const swiper_container = document.querySelector(".swiper-container")

// var swiper = new Swiper(swiper_container, {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });