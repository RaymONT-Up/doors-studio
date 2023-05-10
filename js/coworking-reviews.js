const coworkingReviewSlider = new Swiper(".coworking-reviews__slider-review", {
  // slidesPerView: 1,
  slidesPerView: 5.45, //Слайдов показывает

  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1.65,
      spaceBetween: 10,
      centeredSlides: true,
    },

    601: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 5.45,
    },
  },
});

const coworkingRewiewsTextList = document.querySelectorAll(
  ".coworking-reviews__item-review"
);
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
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 5.45,
      spaceBetween: 30,
    },
  },
});

coworkingReviewsImgSlider.controller.control = coworkingReviewSlider;
