const swiper = new Swiper(".space-for-designers__slider", {
  slidesPerView: "auto",

  spaceBetween: 30,
  initialSlide: 0,

  navigation: {
    nextEl: ".space-for-designers__slider-arrow--next",
    prevEl: ".space-for-designers__slider-arrow--prev",
  },
  pagination: {
    el: ".space-for-designers__pagination",
    type: "fraction",
    renderFraction: (currentClass, totalClass) => {
      console.log(currentClass, totalClass);
      return `<span class="${currentClass}"></span> из <span class="${totalClass}"></span> Фото`;
    },
  },
});
