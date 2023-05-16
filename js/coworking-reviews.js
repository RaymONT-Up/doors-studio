// ВАЖНО - у слайдеров должны быть одинаковые свойства slidesPerView, loop, centeredSlides и т.д. дабы слайды показывались корректно относительно соотношения текста к картинке

// Слайдер текста
const coworkingReviewSlider = new Swiper(".coworking-reviews__slider-review", {
  slidesPerView: 5.45, //Слайдов показывает

  loop: true, // бесконечный

  breakpoints: {
    0: {
      slidesPerView: 1.65,
      spaceBetween: 10,
      centeredSlides: true,
    },

    601: {
      slidesPerView: 5.51,
      spaceBetween: 24,
    },
    801: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1100: {
      slidesPerView: 5.45,
      spaceBetween: 30,
    },
  },
});

// Слайдер картинок
const coworkingReviewsImgSlider = new Swiper(".coworking-reviews__slider", {
  slidesPerView: 5.45, //Слайдов показывает
  spaceBetween: 30, // Отступы между слайдами
  // Бесконечные слайды
  loop: true,
  // Отзыв (number)
  pagination: {
    el: ".coworking-reviews__pagination",
    type: "fraction",
    renderFraction: function (current, total) {
      return `
        Отзыв #<span class="swiper-pagination-current">${current}</span>
      `;
    },
  },
  // Стрелки
  navigation: {
    nextEl: ".coworking-reviews__slider-arrow--next",
    prevEl: ".coworking-reviews__slider-arrow--prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.65,
      spaceBetween: 10,
      centeredSlides: true,
    },

    601: {
      slidesPerView: 5.51,
      spaceBetween: 24,
    },
    801: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1100: {
      slidesPerView: 5.45,
      spaceBetween: 30,
    },
  },
});
// Соединение управления слайдеров
coworkingReviewsImgSlider.controller.control = coworkingReviewSlider;
coworkingReviewSlider.controller.control = coworkingReviewsImgSlider;
