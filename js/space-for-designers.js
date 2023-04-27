const swiper = new Swiper(".space-for-designers__slider", {
  // slidesPerView: "auto",
  slidesPerView: 4,

  spaceBetween: 30,
  initialSlide: 0,

  navigation: {
    nextEl: ".space-for-designers__slider-arrow--next",
    prevEl: ".space-for-designers__slider-arrow--prev",
  },
  pagination: {
    el: ".space-for-designers__pagination",
    type: "fraction",
  },
});
